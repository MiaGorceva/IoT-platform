window.translations = window.translations || {};
const translations = window.translations;

/* =========================
   Dynamic script loader
========================= */

const __scriptPromises = new Map();

function loadScript(src) {
  if (__scriptPromises.has(src)) return __scriptPromises.get(src);

  const promise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-src="${src}"]`);

    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }

    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.dataset.src = src;

    s.onload = () => {
      s.dataset.loaded = "true";
      resolve();
    };

    s.onerror = reject;
    document.head.appendChild(s);
  });

  __scriptPromises.set(src, promise);
  return promise;
}

async function ensureLangAssets(lang) {
  if (!lang || lang === "en") return;

  const needBase = !window.translations?.[lang];
  const needCases = !window.translations?.[lang]?.useCases;

  const tasks = [];
  if (needBase) tasks.push(loadScript(`js/${lang}.js`));
  if (needCases) tasks.push(loadScript(`js/data/usecases.${lang}.js`));

  if (tasks.length) {
    await Promise.all(tasks);
  }
}

/* =========================
   DOM helpers
========================= */

function $(sel, root = document) {
  return root.querySelector(sel);
}

function $all(sel, root = document) {
  return Array.from(root.querySelectorAll(sel));
}

/* =========================
   i18n helpers
========================= */

const HTML_I18N_KEYS = new Set([
  "hero.title",
  "hero.badge",
  "platform.story.text",
  "eco.hero.outcome"
]);

function getDict(lang) {
  const base = translations.en || {};
  const local = translations[lang] || {};
  return { ...base, ...local };
}

function applyTranslations(lang = "en") {
  const dict = getDict(lang);
  document.documentElement.lang = lang;
  window.MITE = window.MITE || {};
  window.MITE.currentLang = lang;

  try {
    if (localStorage.getItem("mite-lang") !== lang) {
      localStorage.setItem("mite-lang", lang);
    }
  } catch (_) {}

  if (dict["seo.title"]) {
    document.title = dict["seo.title"];
  }

  const meta = $('meta[name="description"]');
  if (meta && dict["seo.description"]) {
    meta.setAttribute("content", dict["seo.description"]);
  }

  $all("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value === undefined || value === null) return;

    const normalized = String(value).replace(/\n\n/g, "<br><br>");

    if (HTML_I18N_KEYS.has(key)) {
      el.innerHTML = normalized;
    } else {
      el.textContent = String(value);
    }
  });

  $all("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = dict[key];
    if (!value) return;
    el.setAttribute("placeholder", value);
  });

  $all("[data-lang-btn]").forEach((btn) => {
    const code = btn.getAttribute("data-lang-btn");
    btn.classList.toggle("is-active", code === lang);
  });

  window.__updateOutcomes?.();
  window.__updateUseCases?.();
  window.__updatePricing?.();
}

/* =========================
   Outcomes
========================= */

function setupOutcomes() {
  const numEl = document.getElementById("outcomeNum");
  const titleEl = document.getElementById("outcomeTitle");
  const textEl = document.getElementById("outcomeText");
  const bulletsEl = document.getElementById("outcomeBullets");
  const dotsWrap = document.getElementById("outcomesDots");
  const prevBtn = document.getElementById("outcomesPrev");
  const nextBtn = document.getElementById("outcomesNext");

  const metricWrap = $(".stat-stack");
  const leftPoints = $all(".item-row[data-outcome]");

  if (!numEl || !titleEl || !textEl || !bulletsEl || !dotsWrap) return;

  let index = 0;

  function items() {
    const lang = document.documentElement.lang || "en";
    const dict = getDict(lang);
    return dict.aboutOutcomes || translations.en.aboutOutcomes || [];
  }

  function renderDots(arr) {
    if (dotsWrap.children.length !== arr.length) {
      dotsWrap.innerHTML = "";
      arr.forEach((_, i) => {
        const d = document.createElement("button");
        d.type = "button";
        d.className = "dot";
        d.addEventListener("click", () => {
          index = i;
          render(true);
        });
        dotsWrap.appendChild(d);
      });
    }

    [...dotsWrap.children].forEach((d, i) => {
      d.classList.toggle("is-active", i === index);
    });
  }

  function render(withFade = false) {
    const arr = items();
    if (!arr.length) return;

    if (index < 0) index = arr.length - 1;
    if (index >= arr.length) index = 0;

    const it = arr[index];

    if (withFade && metricWrap) {
      metricWrap.classList.add("is-fade");
    }

    clearTimeout(render.__t);
    render.__t = setTimeout(() => {
      numEl.textContent = it.num || "";
      titleEl.textContent = it.title || "";
      textEl.textContent = it.text || "";

      bulletsEl.innerHTML = "";
      (it.bullets || []).forEach((b) => {
        const li = document.createElement("li");
        li.textContent = b;
        bulletsEl.appendChild(li);
      });

      renderDots(arr);

      if (metricWrap) {
        metricWrap.classList.remove("is-fade");
      }
    }, withFade ? 140 : 0);

    leftPoints.forEach((p) => {
      const i = Number(p.getAttribute("data-outcome"));
      p.classList.toggle("is-active", i === index);
    });
  }

  prevBtn?.addEventListener("click", () => {
    index--;
    render(true);
  });

  nextBtn?.addEventListener("click", () => {
    index++;
    render(true);
  });

  leftPoints.forEach((p) => {
    p.addEventListener("mouseenter", () => {
      const i = Number(p.getAttribute("data-outcome"));
      if (!Number.isFinite(i)) return;
      index = i;
      render(true);
    });
  });

  window.__updateOutcomes = (reset = false) => {
    if (reset) index = 0;
    render(false);
  };

  render(false);
}

/* =========================
   Numbers highlighter
========================= */

function highlightNumbers(html) {
  if (!html) return "";

  const MARK = "data-ucnum='1'";
  if (String(html).includes(MARK)) return html;

  let s = String(html);

  s = s.replace(/\u2013|\u2014/g, "–");
  s = s.replace(/\u00D7/g, "×");

  const wrap = (m) => `<span class="uc-num" ${MARK}>${m}</span>`;

  const unit =
    "(?:%|°C|x|×|X|k|K|m|km|kg|g|l|L|ms|s|sec|secs|seconds|min|mins|minutes|h|hr|hrs|hour|hours|day|days|week|weeks|month|months|year|years|devices|device|click|clicks|п\\.п\\.)";

  s = s.replace(
    new RegExp(`([+\\-<>]?\\d{1,4}(?:[.,]\\d+)?\\s?(?:–|-)\\s?\\d{1,4}(?:[.,]\\d+)?)(\\s?${unit})?`, "gi"),
    (_, a, b) => wrap(a + (b || ""))
  );

  s = s.replace(
    new RegExp(`([+\\-<>]?\\d{1,4}(?:[.,]\\d+)?)(\\s?${unit})`, "gi"),
    (_, a, b) => wrap(a + b)
  );

  s = s.replace(/\b[+\-]\d{1,4}(?:[.,]\d+)?\b/g, (m) => wrap(m));

  s = s.replace(
    /(\b(?:from|to|drops|drop|takes|within|in|for|over|under)\s+)([<>]?\d{1,4}(?:[.,]\d+)?)/gi,
    (_, a, b) => a + wrap(b)
  );

  return s;
}

/* =========================
   Use cases
========================= */

function setupUseCases() {
  const carousel = document.getElementById("ucCarousel");
  const track = document.getElementById("ucTrack");
  const dots = document.getElementById("ucDots");
  const prev = document.getElementById("ucPrev");
  const next = document.getElementById("ucNext");
  const filters = document.getElementById("ucFilters");
  const search = document.getElementById("ucSearch");

  if (!carousel || !track) return;

  const filterButtons = filters ? $all("[data-uc-filter]", filters) : [];
  let active = "all";
  let query = "";
  let page = 0;
  let searchTimer = 0;

  function getUseCasesData() {
    const lang = document.documentElement.lang || "en";
    const dict = getDict(lang);

    const arr =
      dict && Array.isArray(dict.useCases) && dict.useCases.length
        ? dict.useCases
        : (translations.en.useCases || []);

    return arr.map((u, i) => ({ ...u, seq: i + 1 }));
  }

  function filtered() {
    const data = getUseCasesData();

    return data.filter((u) => {
      const okIndustry = active === "all" ? true : u.industry === active;
      const blob = `${u.title} ${u.pain} ${u.how} ${u.result} ${(u.tags || []).join(" ")}`.toLowerCase();
      const okQuery = query ? blob.includes(query) : true;
      return okIndustry && okQuery;
    });
  }

  function perView() {
    const w = carousel.clientWidth;
    if (w < 640) return 1;
    if (w < 980) return 2;
    return 2;
  }

  function clampPage(maxPages) {
    if (page < 0) page = 0;
    if (page > maxPages - 1) page = Math.max(0, maxPages - 1);
  }

  function renderDots(maxPages) {
    if (!dots) return;

    if (dots.children.length !== maxPages) {
      dots.innerHTML = "";
      for (let i = 0; i < maxPages; i++) {
        const d = document.createElement("button");
        d.type = "button";
        d.className = "dot";
        d.addEventListener("click", () => {
          page = i;
          updateCarousel();
        });
        dots.appendChild(d);
      }
    }

    [...dots.children].forEach((d, i) => {
      d.classList.toggle("is-active", i === page);
    });
  }

  function renderCards(list) {
    const lang = document.documentElement.lang || "en";
    const dict = getDict(lang);

    track.innerHTML = list.map((u) => `
      <article class="surface surface-strong carousel-slide-half" data-industry="${u.industry}">
        <div class="surface-body stack">
          <div class="action-row" style="justify-content: space-between; align-items: flex-start; margin-bottom: 0;">
            <span class="pill">${u.industryLabel || u.industry}</span>
            ${u.kpiBadge ? `<span class="pill pill-cyan">${highlightNumbers(u.kpiBadge)}</span>` : ""}
          </div>

          <h3 class="title-md">${u.title}</h3>

          ${u.ttvBadge ? `<div class="text-sm">${highlightNumbers(u.ttvBadge)}</div>` : ""}

          <div class="stack" style="gap: 0.85rem;">
            <div class="story-panel" style="margin: 0; padding: 0.85rem 0.95rem;">
              <div class="label">${dict["uc.label.pain"] || "Pain"}</div>
              <p class="text-sm">${highlightNumbers(u.pain)}</p>
            </div>

            <div class="story-panel" style="margin: 0; padding: 0.85rem 0.95rem;">
              <div class="label">${dict["uc.label.how"] || "How it works"}</div>
              <p class="text-sm">${highlightNumbers(u.how)}</p>
            </div>

            <div class="surface surface-soft">
              <div class="surface-body">
                <div class="label">${dict["uc.label.result"] || "Result"}</div>
                <p class="text-sm">${highlightNumbers(u.result)}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    `).join("");
  }

  function updateCarousel() {
    const list = filtered();
    renderCards(list);

    const pv = perView();
    const maxPages = Math.ceil(list.length / pv) || 1;
    clampPage(maxPages);

    const first = track.firstElementChild;
    const cardW = first ? first.clientWidth : 0;
    const gap = 16;
    const step = pv > 1 ? (cardW + gap) * pv : (cardW + gap);

    track.style.transform = `translate3d(${-page * step}px, 0, 0)`;

    renderDots(maxPages);

    if (prev) prev.classList.toggle("is-disabled", page === 0);
    if (next) next.classList.toggle("is-disabled", page >= maxPages - 1);
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((x) => x.classList.remove("is-active"));
      btn.classList.add("is-active");
      active = btn.dataset.ucFilter || "all";
      page = 0;
      updateCarousel();
    });
  });

  search?.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      query = (search.value || "").trim().toLowerCase();
      page = 0;
      updateCarousel();
    }, 120);
  });

  prev?.addEventListener("click", () => {
    page--;
    updateCarousel();
  });

  next?.addEventListener("click", () => {
    page++;
    updateCarousel();
  });

  let rAF = 0;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(rAF);
    rAF = requestAnimationFrame(updateCarousel);
  });

  window.__updateUseCases = () => {
    page = 0;
    updateCarousel();
  };

  updateCarousel();
}

/* =========================
   Pricing carousel
========================= */

function setupPricingCarousel() {
  const root = document.getElementById("pricingCarousel");
  if (!root) return;

  if (window.innerWidth >= 960) {
    const dots = document.getElementById("pricingDots");
    if (dots) dots.innerHTML = "";
    window.__updatePricing = () => {};
    return;
  }

  const track = $(".carousel-track", root);
  const prev = $(".carousel-nav-prev", root);
  const next = $(".carousel-nav-next", root);
  const dots = document.getElementById("pricingDots");

  if (!track) return;

  let page = 0;

  const getCards = () => Array.from(track.children);

  function perView() {
    return window.innerWidth >= 1100 ? 4 : 1;
  }

  function pagesCount(total, pv) {
    return Math.max(1, Math.ceil(total / pv));
  }

  function normalizePage(p, pages) {
    return ((p % pages) + pages) % pages;
  }

  function renderDots(pages) {
    if (!dots) return;

    if (dots.children.length !== pages) {
      dots.innerHTML = "";
      for (let i = 0; i < pages; i++) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "dot";
        b.addEventListener("click", () => goToPage(i));
        dots.appendChild(b);
      }
    }

    [...dots.children].forEach((b, i) => {
      b.classList.toggle("is-active", i === page);
    });
  }

  function goToPage(p) {
    const cards = getCards();
    const pv = perView();
    const pages = pagesCount(cards.length, pv);

    if (pv === 4) {
      page = 0;
      track.style.transform = "none";
      renderDots(1);
      if (prev) prev.disabled = true;
      if (next) next.disabled = true;
      return;
    }

    page = normalizePage(p, pages);

    const firstCard = cards[page * pv];
    const x = firstCard ? firstCard.offsetLeft : 0;

    track.style.transform = `translate3d(${-x}px, 0, 0)`;
    renderDots(pages);

    if (prev) prev.disabled = false;
    if (next) next.disabled = false;
  }

  prev?.addEventListener("click", () => goToPage(page - 1));
  next?.addEventListener("click", () => goToPage(page + 1));

  window.__updatePricing = () => goToPage(page);

  goToPage(0);

  let rAF = 0;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(rAF);
    rAF = requestAnimationFrame(() => goToPage(0));
  }, { passive: true });
}

/* =========================
   FAQ accordion
========================= */

function setupFaqAccordion() {
  $all(".accordion-item").forEach((item) => {
    const q = $(".accordion-trigger", item);
    const a = $(".accordion-content", item);

    if (!q || !a) return;

    a.style.height = "0px";
    a.style.overflow = "hidden";
    a.style.transition = "height 260ms ease";

    q.addEventListener("click", () => {
      const isOpen = item.classList.toggle("is-open");

      if (isOpen) {
        a.style.height = `${a.scrollHeight}px`;
      } else {
        a.style.height = "0px";
      }
    });
  });
}

/* =========================
   Quick drawer
========================= */

function setupDrawer() {
  const btn = document.getElementById("quickBtn");
  const overlay = document.getElementById("drawerOverlay");
  const drawer = document.getElementById("drawer");
  const close = document.getElementById("drawerClose");
  const cancel = document.getElementById("drawerCancel");

  if (!btn || !overlay || !drawer) return;

  function open() {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    drawer.classList.add("is-open");
  }

  function shut() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    drawer.classList.remove("is-open");
  }

  btn.addEventListener("click", open);
  overlay.addEventListener("click", shut);
  close?.addEventListener("click", shut);
  cancel?.addEventListener("click", shut);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") shut();
  });
}

/* =========================
   Footer year
========================= */

function setupYear() {
  const y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();
}

/* =========================
   Forms
========================= */

function setupMiteForms() {
  const forms = $all("form.js-mite-form");
  if (!forms.length) return;

  forms.forEach((form) => {
    if (form.__miteBound) return;
    form.__miteBound = true;

    const toastSel = form.dataset.toast || ".js-success-toast";
    const toast = $(toastSel, form);

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const oldBtnHTML = submitBtn ? submitBtn.innerHTML : "";

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = "Sending…";
      }

      if (toast) toast.hidden = true;

      try {
        const payload = {
          name: form.querySelector('[name="name"]')?.value || "",
          email: form.querySelector('[name="email"]')?.value || "",
          message: form.querySelector('[name="message"]')?.value || "",
          source: form.querySelector('[name="source"]')?.value || "unknown"
        };

        const res = await fetch(form.action, {
          method: "POST",
          mode: "cors",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        let data = null;
        const ct = res.headers.get("content-type") || "";

        if (ct.includes("application/json")) {
          data = await res.json().catch(() => null);
        } else {
          const txt = await res.text().catch(() => "");
          data = { raw: txt };
        }

        if (!res.ok) {
          const msg =
            (data && data.errors && data.errors[0] && data.errors[0].message) ||
            (data && data.error) ||
            "Submission failed. Please try again.";
          throw new Error(msg);
        }

        form.reset();

        if (toast) {
          toast.hidden = false;
          toast.textContent = "Thanks! We’ll get back to you shortly.";
        }

        if (submitBtn) {
          submitBtn.innerHTML = "Sent ✓";
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = oldBtnHTML || "Send";
          }, 1600);
        }
      } catch (err) {
        console.error("[MITE] Fetch submit failed:", err);

        if (toast) {
          toast.hidden = false;
          toast.textContent =
            "Oops — couldn’t send right now. Please try again or use the Contact form below.";
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = oldBtnHTML || "Send";
        }
      }
    });
  });
}

/* =========================
   Lazy init helpers
========================= */

function once(fn) {
  let done = false;
  return (...args) => {
    if (done) return;
    done = true;
    return fn(...args);
  };
}

function lazyInitOnVisible(selector, init, options = {}) {
  const el = $(selector);
  if (!el) return;

  const run = once(init);

  if (!("IntersectionObserver" in window)) {
    run();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      });
    },
    {
      rootMargin: options.rootMargin || "200px 0px",
      threshold: options.threshold || 0.01
    }
  );

  observer.observe(el);
}

function lazyInitOnFirstInteraction(init) {
  const run = once(init);

  const handler = () => {
    run();
    window.removeEventListener("pointerdown", handler);
    window.removeEventListener("keydown", handler);
    window.removeEventListener("touchstart", handler);
  };

  window.addEventListener("pointerdown", handler, { passive: true, once: true });
  window.addEventListener("keydown", handler, { once: true });
  window.addEventListener("touchstart", handler, { passive: true, once: true });
}

/* =========================
   Boot
========================= */

window.MITE = window.MITE || {};
window.MITE.page = window.MITE.page || { id: "index" };

const initOutcomes = once(setupOutcomes);
const initUseCases = once(setupUseCases);
const initPricing = once(setupPricingCarousel);
const initFaq = once(setupFaqAccordion);
const initDrawer = once(setupDrawer);
const initForms = once(setupMiteForms);

document.addEventListener("DOMContentLoaded", async () => {
  initOutcomes();
  setupYear();

  let initial = "en";

  try {
    initial =
      localStorage.getItem("mite-lang") ||
      window.MITE?.page?.langDefault ||
      "en";
  } catch (_) {
    initial = window.MITE?.page?.langDefault || "en";
  }

  try {
    await ensureLangAssets(initial);
  } catch (e) {
    console.error("Initial language load failed:", e);
  }

  applyTranslations(initial);

  lazyInitOnVisible("#usecases", initUseCases);
  lazyInitOnVisible("#pricing", initPricing);
  lazyInitOnVisible("#faq", initFaq);
  lazyInitOnVisible("#contact", initForms);

  lazyInitOnFirstInteraction(initDrawer);

  $all("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const code = btn.getAttribute("data-lang-btn") || "en";

      try {
        await ensureLangAssets(code);
        applyTranslations(code);
      } catch (e) {
        console.error("Language load failed:", code, e);
      }
    });
  });
});
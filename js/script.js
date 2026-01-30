/* =========================================================
   MITE — single clean script
   - i18n (texts in JS)
   - Typical outcomes (right card) with dots/arrows
   - Use-cases: render + filters + search (no carousel jitter)
   - Footer year
   ========================================================= */

/* -------------------------
   Translations (EN only now)
   RU/UK fallback to EN
------------------------- */
const translations = {
  en: {
    // NAV
    "nav.about": "Why MITE",
    "nav.platform": "Platform",
    "nav.solutions": "Solutions",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.demoBtn": "Request a demo",

    // SEO
    "seo.title": "MITE — Industrial IIoT Platform for Connected Infrastructure",
    "seo.description":
      "MITE is an industrial IIoT platform that connects assets, models business logic, and turns operational data into decisions.",

    // HERO
    "hero.kicker": "Industrial IoT, delivered",
    "hero.title": "Not just another IIoT platform. <span>MITE changes the game.</span>",
    "hero.subtitle":
      "Bring structure, logic, and operational data into one unified industrial platform. " +
      "Connect assets, define business logic, and turn operational data into decisions — in one system.",
    "hero.primaryCta": "Request a demo",
    "hero.secondaryCta": "Explore the platform",
    "hero.meta1": "From pilots to production-ready industrial deployments",
    "hero.meta2": "Declarative logic — describe what to do, not how to code it",
    "hero.meta3": "Any logic complexity • any industrial reality • fast iterations",
    "hero.badge": "<strong>“Simple, clear, and reliable — exactly what industrial teams expect.”</strong>",

    // ABOUT / POSITIONING (как ты просила — не меняем смысл блока)
    "about.eyebrow": "Positioning",
    "about.title": "One system you control — from data to execution",
    "about.text":
      "MITE turns operational data into a single, manageable system — not a set of disconnected signals and processes.\n\n" +
      "Connect devices, PLCs, meters, gateways, and external systems into one structured operational model.\n\n" +
      "Describe what should happen — rules, workflows, and logic — and the platform takes care of how it happens. Execution stays aligned, deviations are tracked automatically, and results are recorded as measurable KPIs.\n\n" +
      "Dashboards show real execution, deviations, and outcomes. You manage through metrics and adapt processes in hours or days — without relying on developers or contractors.",

    "about.point1.title": "One operational model for all data",
    "about.point1.text":
      "All signals — devices, controllers, systems, and external sources — become one reusable operational model instead of scattered integrations.",

    "about.point2.title": "Declarative logic instead of code",
    "about.point2.text":
      "Define rules, workflows, approvals, and actions as logic. Changes take hours or days — not long development cycles. Complexity grows without turning into custom-code chaos.",

    "about.point3.title": "Trust the system, stay in control",
    "about.point3.text":
      "Execution is tracked against your logic. Deviations are visible immediately, and decisions are tied to KPIs — not to people watching dashboards, chats, or spreadsheets.",

    "about.point4.title": "Routine runs on autopilot, insights surface automatically",
    "about.point4.text":
      "Repetitive operational loops are automated. AI-assisted analysis surfaces patterns and insights so results don’t depend on individual heroics.",

    "about.cta": "Ask a question",

    // Typical outcomes (RIGHT)
    "about.side.label": "Typical outcomes",
    aboutOutcomes: [
      {
        num: "Days",
        title: "to a working pilot",
        text: "Reusable connectors, a unified data model, and first live workflows.",
        bullets: [
          "Devices and data sources connected",
          "Operational model structured once",
          "First real process running end-to-end",
          "Outcome: a controllable process with measurable KPIs"
        ]
      },
      {
        num: "One",
        title: "system for operations",
        text: "Data, rules, and actions governed in one place.",
        bullets: [
          "Shared operational model across teams",
          "Logic and changes managed centrally",
          "Dashboards reflect real execution (not raw data)",
          "Outcome: predictable control with clear accountability"
        ]
      },
      {
        num: "Fast",
        title: "adaptation to change",
        text: "Adjust workflows without rebuilding solutions.",
        bullets: [
          "Processes updated in hours or days",
          "Safe experimentation with immediate feedback",
          "Same logic reused across sites",
          "Outcome: faster decisions based on real metrics"
        ]
      },
      {
        num: "Stable",
        title: "scaling without chaos",
        text: "Grow from one scenario to many without re-architecture.",
        bullets: [
          "Reusable building blocks across projects",
          "Consistent governance and auditability",
          "Predictable rollout playbooks",
          "Outcome: consistent KPIs across your portfolio"
        ]
      }
    ],

    // USE CASES (header texts)
    "useReal.eyebrow": "Real use cases",
    "useReal.title": "Operational scenarios teams actually deploy",
    "useReal.subtitle":
      "18 practical scenarios with pain → execution → measurable outcome. Filter by industry and search by keywords.",

    // CONTACT (если у тебя уже есть — оставляю минимум)
    "contact.eyebrow": "Contact",
    "contact.title": "Let us map your first IIoT win",
    "contact.subtitle":
      "Share a short description of your infrastructure and the outcome you want. We will propose a realistic first step and outline how it scales.",
    "contact.nameLabel": "Full name",
    "contact.namePlaceholder": "Your name",
    "contact.emailLabel": "Work email",
    "contact.emailPlaceholder": "you@company.com",
    "contact.companyLabel": "Company",
    "contact.companyPlaceholder": "Company name",
    "contact.sizeLabel": "Scale",
    "contact.sizePlaceholder": "Number of sites, lines, or assets",
    "contact.messageLabel": "What would you like to achieve with MITE?",
    "contact.messagePlaceholder": "Describe your current situation, use cases, or challenges.",
    "contact.submit": "Send request",
    "contact.legal":
      "By sending the form you agree that we may contact you about MITE and process your data according to our privacy policy.",

    // FOOTER
    "footer.note": "MITE — Industrial IoT platform for profit-driven industrial teams.",
    "footer.privacy": "Privacy policy",
    "footer.backToTop": "Back to top",
  },

  // fallback now
  ru: {},
  uk: {}
};

/* -------------------------
   I18N helpers
------------------------- */
function getDict(lang) {
  const base = translations.en || {};
  const local = translations[lang] || {};
  return { ...base, ...local };
}

function applyTranslations(lang = "en") {
  const dict = getDict(lang);
  document.documentElement.lang = lang;

  // SEO
  if (dict["seo.title"]) document.title = dict["seo.title"];
  const meta = document.querySelector('meta[name="description"]');
  if (meta && dict["seo.description"]) meta.setAttribute("content", dict["seo.description"]);

  // text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value === undefined || value === null) return;
    if (typeof value === "string") {
      el.innerHTML = value.replace(/\n\n/g, "<br><br>");
    }
  });

  // placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = dict[key];
    if (!value) return;
    el.setAttribute("placeholder", value);
  });

  // active lang buttons
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const code = btn.getAttribute("data-lang-btn");
    btn.classList.toggle("is-active", code === lang);
  });

  // update dynamic widgets
  window.__updateOutcomes?.();
  window.__updateUseCases?.();
}

/* -------------------------
   Typical outcomes widget
   Uses: #outcomeNum #outcomeTitle #outcomeText #outcomeBullets
         #outcomesPrev #outcomesNext #outcomesDots
------------------------- */
function setupOutcomes() {
  const numEl = document.getElementById("outcomeNum");
  const titleEl = document.getElementById("outcomeTitle");
  const textEl = document.getElementById("outcomeText");
  const bulletsEl = document.getElementById("outcomeBullets");
  const dotsWrap = document.getElementById("outcomesDots");
  const prevBtn = document.getElementById("outcomesPrev");
  const nextBtn = document.getElementById("outcomesNext");

  if (!numEl || !titleEl || !textEl || !bulletsEl || !dotsWrap) return;

  let index = 0;

  function items() {
    const lang = document.documentElement.lang || "en";
    const dict = getDict(lang);
    return dict.aboutOutcomes || translations.en.aboutOutcomes || [];
  }

  function render() {
    const arr = items();
    if (!arr.length) return;

    if (index < 0) index = arr.length - 1;
    if (index >= arr.length) index = 0;

    const it = arr[index];
    numEl.textContent = it.num || "";
    titleEl.textContent = it.title || "";
    textEl.textContent = it.text || "";

    bulletsEl.innerHTML = "";
    (it.bullets || []).forEach((b) => {
      const li = document.createElement("li");
      li.textContent = b;
      bulletsEl.appendChild(li);
    });

    // dots
    dotsWrap.innerHTML = "";
    arr.forEach((_, i) => {
      const d = document.createElement("button");
      d.type = "button";
      d.className = "dot" + (i === index ? " is-active" : "");
      d.addEventListener("click", () => { index = i; render(); });
      dotsWrap.appendChild(d);
    });
  }

  prevBtn?.addEventListener("click", () => { index--; render(); });
  nextBtn?.addEventListener("click", () => { index++; render(); });

  window.__updateOutcomes = () => { index = 0; render(); };

  render();
}

const useCases = [
  /* ================= PHARMA (cold chain — ключевой) ================= */
  {
    industry: "pharma",
    title: "Cold-chain monitoring with automatic compliance reporting",
    pain: "Temperature excursions across warehouses, trucks, borders, and pharmacies lead to manual reconciliation and audit stress.",
    how: "Unified model for sensors in storage and transport, route context, time-based rules per drug type, automatic excursion tracking and report generation.",
    result: "Lower spoilage risk, faster audits, and reduced manual compliance effort.",
    icon: "pharma"
  },

  /* ================= MANUFACTURING (8 кейсов) ================= */
  {
    industry: "manufacturing",
    title: "Downtime: detect → classify → assign → verify",
    pain: "Stops repeat because causes are logged inconsistently and actions are not enforced.",
    how: "PLC signals + operator input → rule-based classification → task routing → KPI tracking per line and shift.",
    result: "Reduced repeated downtime and higher throughput.",
    icon: "factory"
  },
  {
    industry: "manufacturing",
    title: "Energy cost per batch and per product",
    pain: "Energy bills grow, but true cost drivers by product are invisible.",
    how: "Meters + batch context → normalization rules → deviation alerts → cost KPIs per product.",
    result: "Early waste detection and better margin control.",
    icon: "factory"
  },
  {
    industry: "manufacturing",
    title: "Maintenance triggers based on real usage",
    pain: "Preventive schedules don’t reflect real wear, causing over- or under-maintenance.",
    how: "Runtime counters + condition signals → trend rules → work order workflows.",
    result: "Fewer unplanned stops and better maintenance planning.",
    icon: "factory"
  },
  {
    industry: "manufacturing",
    title: "Quality drift detection before scrap",
    pain: "Quality issues are found too late, after material is wasted.",
    how: "Process parameters + tolerance rules → early deviation alerts → corrective action tracking.",
    result: "Less scrap and more stable output quality.",
    icon: "factory"
  },
  {
    industry: "manufacturing",
    title: "Shift handover with enforced follow-ups",
    pain: "Problems disappear between shifts and repeat every week.",
    how: "Shift KPIs + unresolved issues → automatic carry-over tasks and ownership.",
    result: "Cleaner handovers and fewer recurring issues.",
    icon: "factory"
  },
  {
    industry: "manufacturing",
    title: "OEE with closed-loop improvement",
    pain: "OEE dashboards exist, but no action follows.",
    how: "Event → reason → action → KPI loop tied together in one workflow.",
    result: "OEE that actually improves, not just reports.",
    icon: "factory"
  },
  {
    industry: "manufacturing",
    title: "Line imbalance and bottleneck detection",
    pain: "Throughput loss caused by hidden micro-stops.",
    how: "Cycle time analysis + correlation rules → targeted improvement tasks.",
    result: "Higher line efficiency without new equipment.",
    icon: "factory"
  },
  {
    industry: "manufacturing",
    title: "Commissioning and acceptance verification",
    pain: "New lines go live with hidden configuration issues.",
    how: "Acceptance checklist rules + telemetry validation → sign-off workflow.",
    result: "Fewer post-launch surprises.",
    icon: "factory"
  },

  /* ================= AGRICULTURE (4 кейса) ================= */
  {
    industry: "agriculture",
    title: "Barn microclimate control",
    pain: "Late reaction to temperature and humidity drift increases livestock loss.",
    how: "Sensors → age-aware thresholds → alerts → action workflows.",
    result: "Lower mortality and reduced human factor.",
    icon: "agro"
  },
  {
    industry: "agriculture",
    title: "Water consumption and leakage monitoring",
    pain: "Water losses go unnoticed until bills arrive.",
    how: "Flow meters + zone logic → night-profile anomaly detection.",
    result: "Reduced water loss and faster response.",
    icon: "agro"
  },
  {
    industry: "agriculture",
    title: "Feed efficiency tracking",
    pain: "Feed cost rises, but efficiency per group is unclear.",
    how: "Feed input + growth data → KPI correlation and alerts.",
    result: "Better feed conversion and cost control.",
    icon: "agro"
  },
  {
    industry: "agriculture",
    title: "Animal health trend monitoring",
    pain: "Health issues detected only after visible symptoms.",
    how: "Wearable sensors + trend rules → early warnings.",
    result: "Earlier intervention and reduced losses.",
    icon: "agro"
  },

  /* ================= ENERGY ================= */
  {
    industry: "energy",
    title: "Battery health and predictive replacement",
    pain: "Unexpected battery failures cause outages.",
    how: "Charge cycles + temperature trends → degradation rules.",
    result: "Predictable maintenance and fewer outages.",
    icon: "energy"
  },

  /* ================= ENVIRONMENT ================= */
  {
    industry: "environment",
    title: "Air quality monitoring and impact maps",
    pain: "Pollution data exists, but is fragmented and hard to interpret.",
    how: "Sensors + wind context → spatial correlation and heatmaps.",
    result: "Clear visibility into environmental impact zones.",
    icon: "env"
  },

  /* ================= SMART CITIES ================= */
  {
    industry: "smartcities",
    title: "Adaptive street lighting",
    pain: "Lights run full power regardless of traffic or time.",
    how: "Motion + schedule rules → dynamic lighting control.",
    result: "Lower energy cost with maintained safety.",
    icon: "city"
  },

  /* ================= LOGISTICS ================= */
  {
    industry: "logistics",
    title: "Shipment condition tracking",
    pain: "Damage claims without proof of when conditions were violated.",
    how: "Sensor data + route context → incident timeline and reports.",
    result: "Fewer disputes and clearer responsibility.",
    icon: "logistics"
  },

  /* ================= CONSTRUCTION ================= */
  {
    industry: "construction",
    title: "Equipment utilization on sites",
    pain: "Machinery sits idle while schedules slip.",
    how: "Runtime tracking + utilization rules.",
    result: "Higher equipment ROI and better planning.",
    icon: "construction"
  }
];


/* -------------------------
   Use-cases render + filters + search
   Requires:
     #ucFilters .uc-chip[data-uc-filter]
     #ucSearch
     #ucTrack (container for cards)
------------------------- */
function setupUseCases() {
  const track = document.getElementById("ucTrack");
  const filters = document.getElementById("ucFilters");
  const search = document.getElementById("ucSearch");

  if (!track) return;

  const chips = filters ? Array.from(filters.querySelectorAll(".uc-chip")) : [];
  let active = "all";
  let query = "";

  function iconSvg(kind) {
    // simple minimal inline icons (you said you’ll want non-standard later)
    const common = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
    if (kind === "pharma") return `<svg viewBox="0 0 24 24" ${common}><path d="M10 2v6l-4 8a4 4 0 0 0 3.6 6h4.8A4 4 0 0 0 18 16l-4-8V2"/><path d="M8 8h8"/></svg>`;
    if (kind === "factory") return `<svg viewBox="0 0 24 24" ${common}><path d="M3 21V10l6 4V10l6 4V7l6 4v10z"/><path d="M3 21h18"/></svg>`;
    if (kind === "agro") return `<svg viewBox="0 0 24 24" ${common}><path d="M12 21s7-4.5 7-11A7 7 0 0 0 5 10c0 6.5 7 11 7 11z"/><path d="M12 21V9"/></svg>`;
    return `<svg viewBox="0 0 24 24" ${common}><circle cx="12" cy="12" r="9"/></svg>`;
  }

  function matches(u) {
    const okIndustry = active === "all" ? true : u.industry === active;
    const blob = `${u.title} ${u.pain} ${u.how} ${u.result}`.toLowerCase();
    const okQuery = query ? blob.includes(query) : true;
    return okIndustry && okQuery;
  }

  function render() {
    const list = useCases.filter(matches);

    track.innerHTML = list.map((u) => `
      <article class="pc-card uc-card" data-industry="${u.industry}">
        <div class="uc-head">
          <div class="uc-badge">${u.industry.toUpperCase()}</div>
          <div class="uc-icon" aria-hidden="true">${iconSvg(u.icon)}</div>
        </div>

        <h3 class="uc-title">${u.title}</h3>

        <div class="uc-lines">
          <p class="uc-line"><strong>Pain:</strong> ${u.pain}</p>
          <p class="uc-line"><strong>How:</strong> ${u.how}</p>
          <p class="uc-line"><strong>Result:</strong> ${u.result}</p>
        </div>
      </article>
    `).join("");

    // if you use dots/carousel elsewhere, we don’t touch it here
  }

  chips.forEach((ch) => {
    ch.addEventListener("click", () => {
      chips.forEach((x) => x.classList.remove("is-active"));
      ch.classList.add("is-active");
      active = ch.dataset.ucFilter || "all";
      render();
    });
  });

  search?.addEventListener("input", () => {
    query = (search.value || "").trim().toLowerCase();
    render();
  });

  window.__updateUseCases = () => { render(); };

  render();
}

/* -------------------------
   Footer year (#y)
------------------------- */
function setupYear() {
  const y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();
}

/* -------------------------
   BOOT
------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations("en");

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const code = btn.getAttribute("data-lang-btn") || "en";
      applyTranslations(code);
    });
  });

  setupOutcomes();
  setupUseCases();
  setupYear();
});

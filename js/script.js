/* =========================
   i18n + Quick Drawer + Outcomes Slider (stable)
   ========================= */

   /* =========================
   i18n dictionary
========================= */
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
      "By bringing structure, logic, and operational data into one unified industrial platform. " +
      "Connect industrial assets, define business logic, and turn operational data into decisions — in one platform.",

    "hero.primaryCta": "Request a demo",
    "hero.secondaryCta": "Explore the platform",

    "hero.meta1": "From pilot projects to production-ready industrial deployments",
    "hero.meta2": "Declarative logic enables flexibility without complex custom code",
    "hero.meta3": "Designed for operations, engineering, and IT teams",

    "hero.badge": "<strong>“Simple, clear, and reliable — exactly what industrial teams expect.”</strong>",

    "hero.orbBadge": "Connected infrastructure",
    "hero.metricTitle": "Billions of records",
    "hero.metricText": "Handle data growth by scaling logic, not rewriting systems.",

    // ABOUT / POSITIONING
    "about.eyebrow": "Positioning",
    "about.title": "A unified operational data layer for industrial systems",
    "about.text":
      "MITE acts as a unified operational data layer for industrial environments. It collects data from any devices, systems, or external sources and stores it in a consistent, structured model.\n\n" +
      "On top of this data layer, you define rules, workflows, and control logic — without writing code. The same platform is used to monitor operations, automate processes, and send commands back to the field.\n\n" +
      "Dashboards, analytics, and insights are built on top of this foundation — not the other way around. By combining data storage, business logic, and control in one environment, MITE removes the need for multiple intermediate industrial systems.",

    "about.point1.title": "Connect anything",
    "about.point1.text":
      "Devices, PLCs, meters, gateways, external systems — MITE brings it into one structured model.",
    "about.point2.title": "Define logic without code",
    "about.point2.text":
      "Rules, workflows, approvals, and control actions are configured declaratively — fast to change, easy to govern.",
    "about.point3.title": "Control, not just observe",
    "about.point3.text":
      "Send commands back to the field and keep execution tied to your operational model.",
    "about.cta": "Ask a question",

    // OUTCOMES
    "about.side.label": "Typical outcomes",
    aboutOutcomeSlides: [
      {
        label: "Fast first value",
        items: [
          {
            num: "Weeks",
            text:
              "to a working pilot: connectors, a unified data model, and first live operational workflows.",
          },
          {
            num: "One",
            text:
              "environment for data, rules, and control actions — without a patchwork of intermediate systems.",
          },
          {
            num: "Ready",
            text:
              "workflows without “glue code”: extend safely — add steps, approvals, and new scenarios on the same foundation.",
          },
        ],
      },
      {
        label: "Lower operational costs",
        items: [
          { num: "Fewer", text: "manual checks and routine interventions — exceptions are handled by rules and workflows." },
          { num: "Less", text: "data reconciliation between systems — one structured model becomes the shared source of truth." },
          { num: "Faster", text: "incident handling — alerts trigger actions and assignments instead of long email chains." },
        ],
      },
      {
        label: "Higher productivity",
        items: [
          { num: "Faster", text: "root-cause analysis — context is captured with data, events, and process history in one place." },
          { num: "Shorter", text: "rollout cycles — reuse connectors and logic across sites and scenarios." },
          { num: "More", text: "work done by operations teams — improvements don’t wait for platform developers." },
        ],
      },
      {
        label: "New products & services",
        items: [
          { num: "From", text: "pilot to repeatable product — the same model supports new customers, sites, or partners." },
          { num: "New", text: "service scenarios — monitoring + workflows + control loops become packaged offerings." },
          { num: "Clear", text: "economics — measure value per asset/site and justify scaling with real operational metrics." },
        ],
      },
    ],

    // STICKY DRAWER
    "stickyAsk.btn": "Ask / Contact",
    "stickyAsk.title": "Tell us what you want to automate",
    "stickyAsk.sub": "1–2 sentences are enough. We’ll suggest the best first step.",
    "stickyAsk.cta1": "Request a demo",
    "stickyAsk.cta2": "Email a question",
    "stickyAsk.hint": "Prefer quick chat? Use the form below on this page.",

    // ... остальное оставляй как у тебя (highlights/use/how/pricing/testimonials/faq/contact/footer)
  },

  ru: {
    "nav.about": "Почему MITE",
    "nav.platform": "Платформа",
    "nav.solutions": "Решения",
    "nav.pricing": "Тарифы",
    "nav.faq": "FAQ",
    "nav.contact": "Контакты",
    "nav.demoBtn": "Запросить демо",

    "seo.title": "MITE — промышленная IIoT-платформа для подключённой инфраструктуры",
    "seo.description":
      "MITE — промышленная IIoT-платформа, которая объединяет оборудование, бизнес-логику и операционные данные и превращает их в управляемые решения.",

    "hero.kicker": "Промышленный IoT без лишней сложности",
    "hero.title": "Это не просто ещё одна IIoT-платформа. <span>MITE меняет правила игры.</span>",
    "hero.subtitle":
      "Объединяя структуру, бизнес-логику и операционные данные в единой промышленной платформе. " +
      "Подключайте оборудование, описывайте процессы и превращайте данные в управляемые решения — в одной системе.",

    "hero.primaryCta": "Запросить демо",
    "hero.secondaryCta": "Ознакомиться с платформой",

    "hero.meta1": "От пилотных проектов до промышленного внедрения",
    "hero.meta2": "Декларативная логика без сложной кастомной разработки",
    "hero.meta3": "Для эксплуатации, инженерии и IT-команд",

    "hero.badge": "<strong>«Просто, понятно и надёжно — именно так, как ожидают промышленные команды».</strong>",

    "hero.orbBadge": "Цифровая инфраструктура",
    "hero.metricTitle": "Миллиарды записей",
    "hero.metricText": "Рост объёма данных решается масштабированием, а не переписыванием системы.",

    "about.eyebrow": "Позиционирование",
    "about.title": "Единый операционный слой данных для промышленных систем",
    "about.text":
      "MITE выступает в роли единого операционного слоя данных для промышленных сред. Платформа собирает данные с любых устройств, систем и внешних источников и сохраняет их в единой, структурированной модели.\n\n" +
      "Поверх этого слоя данных вы настраиваете правила, рабочие процессы и управляющую логику — без написания кода. Та же платформа используется для мониторинга процессов, автоматизации действий и передачи команд обратно на уровень оборудования.\n\n" +
      "Дашборды, аналитика и инсайты строятся поверх этой основы, а не являются её ядром. Объединяя хранение данных, бизнес-логику и управление в одной среде, MITE устраняет необходимость в множестве промежуточных промышленных систем.",

    "about.point1.title": "Подключайте что угодно",
    "about.point1.text": "Устройства, ПЛК, счётчики, шлюзы, внешние системы — всё в одной структурированной модели.",
    "about.point2.title": "Логика без кода",
    "about.point2.text": "Правила, процессы, согласования и управляющие действия настраиваются декларативно — быстро и прозрачно.",
    "about.point3.title": "Не только наблюдение",
    "about.point3.text": "Команды в поле и контроль исполнения остаются связаны с вашей операционной моделью.",
    "about.cta": "Задать вопрос",

    "about.side.label": "Типичный результат",
    aboutOutcomeSlides: [
      {
        label: "Быстрый первый эффект",
        items: [
          { num: "Недели", text: "до рабочего пилота: коннекторы, единая модель данных и первые живые процессы." },
          { num: "Одна", text: "среда для данных, правил и управляющих действий — без зоопарка промежуточных систем." },
          { num: "Готовые", text: "процессы без «костылей»: можно спокойно дорабатывать, добавлять шаги и собирать новые сценарии на той же базе." },
        ],
      },
      {
        label: "Снижение издержек",
        items: [
          { num: "Меньше", text: "ручных проверок и рутины — исключения обрабатываются правилами и процессами." },
          { num: "Меньше", text: "сверок между системами — единая модель данных становится общей опорой для всех." },
          { num: "Быстрее", text: "реакция на инциденты — тревога запускает действия и назначение задач, а не цепочку писем." },
        ],
      },
      {
        label: "Рост производительности",
        items: [
          { num: "Быстрее", text: "диагностика причин — контекст хранится вместе с данными, событиями и историей процесса." },
          { num: "Коротче", text: "цикл внедрения — коннекторы и логика переиспользуются между площадками и сценариями." },
          { num: "Больше", text: "делает эксплуатация — улучшения не зависят от разработчиков платформы." },
        ],
      },
      {
        label: "Новые продукты и сервисы",
        items: [
          { num: "От", text: "пилота к повторяемому продукту — одна модель поддерживает новых клиентов, площадки и партнёров." },
          { num: "Новые", text: "сервисные сценарии — мониторинг + процессы + управляющие действия как готовое предложение." },
          { num: "Понятно", text: "в деньгах — считаем эффект по активу/площадке и масштабируемся на реальных метриках." },
        ],
      },
    ],

    "stickyAsk.btn": "Задать вопрос",
    "stickyAsk.title": "Опишите, что хотите автоматизировать",
    "stickyAsk.sub": "Достаточно 1–2 предложений. Подскажем лучший первый шаг.",
    "stickyAsk.cta1": "Запросить демо",
    "stickyAsk.cta2": "Написать на email",
    "stickyAsk.hint": "Нужно быстро? Можно и через форму ниже на странице.",
  },

  uk: {
    "nav.about": "Чому MITE",
    "nav.platform": "Платформа",
    "nav.solutions": "Рішення",
    "nav.pricing": "Тарифи",
    "nav.faq": "FAQ",
    "nav.contact": "Контакти",
    "nav.demoBtn": "Запросити демо",

    "seo.title": "MITE — промислова IIoT-платформа для підключеної інфраструктури",
    "seo.description":
      "MITE — промислова IIoT-платформа, що поєднує обладнання, бізнес-логіку та операційні дані й перетворює їх на керовані рішення.",

    "hero.kicker": "Промисловий IoT без зайвої складності",
    "hero.title": "Це не просто ще одна IIoT-платформа. <span>MITE змінює правила гри.</span>",
    "hero.subtitle":
      "Поєднуючи структуру, бізнес-логіку та операційні дані в єдиній промисловій платформі. " +
      "Підключайте обладнання, описуйте процеси та перетворюйте дані на керовані рішення — в одній системі.",

    "hero.primaryCta": "Запросити демо",
    "hero.secondaryCta": "Ознайомитись із платформою",

    "hero.meta1": "Від пілотних проєктів до промислового впровадження",
    "hero.meta2": "Декларативна логіка без складної кастомної розробки",
    "hero.meta3": "Для експлуатації, інженерії та IT-команд",

    "hero.badge": "<strong>«Просто, зрозуміло й надійно — саме так, як очікують промислові команди».</strong>",

    "hero.orbBadge": "Цифрова інфраструктура",
    "hero.metricTitle": "Мільярди записів",
    "hero.metricText": "Зростання обсягу даних вирішується масштабуванням, а не переписуванням системи.",

    "about.eyebrow": "Позиціонування",
    "about.title": "Єдиний операційний шар даних для промислових систем",
    "about.text":
      "MITE виступає як єдиний операційний шар даних для промислових середовищ. Платформа збирає дані з будь-яких пристроїв, систем або зовнішніх джерел і зберігає їх у єдиній, структурованій моделі.\n\n" +
      "Поверх цього шару даних ви налаштовуєте правила, робочі процеси та керуючу логіку — без написання коду. Та сама платформа використовується для моніторингу процесів, автоматизації дій і надсилання команд безпосередньо в поле.\n\n" +
      "Дашборди, аналітика та інсайти будуються поверх цієї основи, а не навпаки. Поєднуючи зберігання даних, бізнес-логіку та управління в одному середовищі, MITE усуває потребу в багатьох проміжних промислових системах.",

    "about.point1.title": "Підключайте будь-що",
    "about.point1.text": "Пристрої, ПЛК, лічильники, шлюзи, зовнішні системи — усе в одній структурованій моделі.",
    "about.point2.title": "Логіка без коду",
    "about.point2.text": "Правила, процеси, погодження та керуючі дії налаштовуються декларативно — швидко і прозоро.",
    "about.point3.title": "Не лише спостереження",
    "about.point3.text": "Команди в поле та контроль виконання пов’язані з вашою операційною моделлю.",
    "about.cta": "Поставити запитання",

    "about.side.label": "Типовий результат",
    aboutOutcomeSlides: [
      {
        label: "Швидкий перший ефект",
        items: [
          { num: "Тижні", text: "до робочого пілоту: конектори, єдина модель даних і перші живі процеси." },
          { num: "Одна", text: "середа для даних, правил і керуючих дій — без «зоопарку» проміжних систем." },
          { num: "Готові", text: "процеси без «костилів»: можна спокійно розширювати, додавати кроки й будувати нові сценарії на тій самій основі." },
        ],
      },
      {
        label: "Менші операційні витрати",
        items: [
          { num: "Менше", text: "ручних перевірок і рутини — винятки обробляються правилами та процесами." },
          { num: "Менше", text: "звірок між системами — єдина модель даних стає спільною опорою для всіх." },
          { num: "Швидше", text: "реакція на інциденти — тривога запускає дії й задачі замість довгих листувань." },
        ],
      },
      {
        label: "Вища продуктивність",
        items: [
          { num: "Швидше", text: "пошук причин — контекст зберігається разом із даними, подіями та історією процесу." },
          { num: "Коротше", text: "впровадження — конектори й логіка перевикористовуються між майданчиками та сценаріями." },
          { num: "Більше", text: "робить експлуатація — покращення не чекають розробників платформи." },
        ],
      },
      {
        label: "Нові продукти та сервіси",
        items: [
          { num: "Від", text: "пілоту до повторюваного продукту — одна модель підтримує нових клієнтів, майданчики й партнерів." },
          { num: "Нові", text: "сервісні сценарії — моніторинг + процеси + керуючі дії як готова пропозиція." },
          { num: "Чітко", text: "в економіці — рахуємо ефект по активу/майданчику й масштабуємося на реальних метриках." },
        ],
      },
    ],

    "stickyAsk.btn": "Запит / Контакт",
    "stickyAsk.title": "Опишіть, що хочете автоматизувати",
    "stickyAsk.sub": "Достатньо 1–2 речень. Підкажемо найкращий перший крок.",
    "stickyAsk.cta1": "Запросити демо",
    "stickyAsk.cta2": "Написати на email",
    "stickyAsk.hint": "Потрібно швидко? Можна і через форму нижче на сторінці.",
  },
};

/* =========================
   Apply translations
========================= */
function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;

  const title = dict["seo.title"];
  if (title) document.title = title;

  const desc = dict["seo.description"];
  if (desc) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", desc);
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value == null) return;
    el.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = dict[key];
    if (value == null) return;
    el.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const code = btn.getAttribute("data-lang-btn");
    btn.classList.toggle("is-active", code === lang);
  });

  // refresh outcomes UI after language switch
  if (window.__updateOutcomesCarousel) {
    window.__updateOutcomesCarousel();
  }
}

/* =========================
   Quick drawer (cloned form)
========================= */
function setupQuickDrawer() {
  const btn = document.getElementById("quickBtn");
  const overlay = document.getElementById("drawerOverlay");
  const drawer = document.getElementById("drawer");
  const closeBtn = document.getElementById("drawerClose");
  const cancelBtn = document.getElementById("drawerCancel");
  const mount = document.getElementById("drawerFormMount");

  const contact = document.getElementById("contact");
  const contactForm = document.querySelector("#contact .contact-card form");

  if (!btn || !overlay || !drawer || !mount || !contact || !contactForm) return;

  // clone form into drawer once
  mount.innerHTML = "";
  const drawerForm = contactForm.cloneNode(true);
  drawerForm.setAttribute("data-drawer-form", "1");
  mount.appendChild(drawerForm);

  // apply i18n to cloned form
  const currentLang = document.documentElement.lang || "en";
  applyTranslations(currentLang);

  function openDrawer() {
    overlay.classList.add("is-open");
    drawer.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    const first = drawer.querySelector("input, textarea, select, button");
    setTimeout(() => first && first.focus(), 80);
  }

  function closeDrawer() {
    overlay.classList.remove("is-open");
    drawer.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
  }

  btn.addEventListener("click", openDrawer);
  overlay.addEventListener("click", closeDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (cancelBtn) cancelBtn.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
  });

  // submit in drawer -> copy values to real form + scroll
  drawerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const srcName = drawerForm.querySelector('input[name="name"], input[name="fullName"], #name');
    const srcEmail = drawerForm.querySelector('input[type="email"], #email');
    const srcMsg = drawerForm.querySelector("textarea");

    const dstName = contactForm.querySelector('input[name="name"], input[name="fullName"], #name');
    const dstEmail = contactForm.querySelector('input[type="email"], #email');
    const dstMsg = contactForm.querySelector("textarea");

    if (dstName && srcName && srcName.value) dstName.value = srcName.value;
    if (dstEmail && srcEmail && srcEmail.value) dstEmail.value = srcEmail.value;

    if (dstMsg) {
      const existing = (dstMsg.value || "").trim();
      const add = (srcMsg && srcMsg.value ? srcMsg.value : "").trim();
      dstMsg.value = existing ? `${existing}\n\n${add}` : add;
    }

    closeDrawer();
    contact.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => dstMsg && dstMsg.focus(), 400);
  });
}

/* =========================
   Outcomes carousel (slides + dots)
   - slides: 4 (prev/next)
   - dots: 3 (within current slide)
========================= */
function setupOutcomesCarousel() {
  const prevBtn = document.getElementById("outcomesPrev");
  const nextBtn = document.getElementById("outcomesNext");
  const slideLabelEl = document.getElementById("outcomesSlideLabel");

  const numEl = document.getElementById("outcomeNum");
  const textEl = document.getElementById("outcomeText");
  const dotsWrap = document.querySelector(".outcomes-dots");

  if (!numEl || !textEl || !dotsWrap || !slideLabelEl) return;

  let slideIndex = 0; // which outcome slide (0..n-1)
  let itemIndex = 0;  // which item inside slide (0..2)

  function getLang() {
    return document.documentElement.lang || "en";
  }

  function getSlides(lang) {
    const dict = translations[lang] || translations.en;
    return dict.aboutOutcomeSlides || translations.en.aboutOutcomeSlides || [];
  }

  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function render() {
    const slides = getSlides(getLang());
    if (!slides.length) return;

    slideIndex = clamp(slideIndex, 0, slides.length - 1);
    const slide = slides[slideIndex];

    // label
    slideLabelEl.textContent = slide.label || "";

    // items
    const items = slide.items || [];
    itemIndex = clamp(itemIndex, 0, Math.max(0, items.length - 1));
    const item = items[itemIndex] || { num: "", text: "" };

    numEl.textContent = item.num || "";
    textEl.textContent = item.text || "";

    // dots (per items in current slide)
    dotsWrap.innerHTML = "";
    items.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "dot";
      dot.setAttribute("aria-label", `Outcome point ${i + 1}`);
      if (i === itemIndex) dot.classList.add("is-active");

      dot.addEventListener("click", () => {
        itemIndex = i;
        render();
      });

      dotsWrap.appendChild(dot);
    });

    // disable arrows when at edges (optional, clean B2B)
    if (prevBtn) prevBtn.disabled = slideIndex === 0;
    if (nextBtn) nextBtn.disabled = slideIndex === slides.length - 1;
  }

  function goPrevSlide() {
    slideIndex -= 1;
    itemIndex = 0;
    render();
  }

  function goNextSlide() {
    slideIndex += 1;
    itemIndex = 0;
    render();
  }

  if (prevBtn) prevBtn.addEventListener("click", goPrevSlide);
  if (nextBtn) nextBtn.addEventListener("click", goNextSlide);

  // expose update hook for language change
  window.__updateOutcomesCarousel = function () {
    const slides = getSlides(getLang());
    slideIndex = clamp(slideIndex, 0, Math.max(0, slides.length - 1));
    itemIndex = 0; // reset inside slide on language switch (cleaner)
    render();
  };

  render();
}

/* =========================
   Init
========================= */
document.addEventListener("DOMContentLoaded", () => {
  // default language
  applyTranslations("en");

  // language buttons
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const code = btn.getAttribute("data-lang-btn");
      applyTranslations(code);
    });
  });

  setupQuickDrawer();
  setupOutcomesCarousel();
});
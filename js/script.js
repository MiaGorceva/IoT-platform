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

    // CONNECTIVITY & INTEGRATION
      "ci.eyebrow": "Connectivity & integration",
      "ci.title": "Works with real industrial environments",
      "ci.note":
        "There is no single ‘right’ protocol stack in the real world. " +
        "Devices, networks, security rules, and constraints differ by site — " +
        "so MITE adapts the integration layer to your reality instead of forcing architectural compromises.",

      "ci.chips": [
        "REST API",
        "Webhooks",
        "MQTT",
        "LoRaWAN",
        "Modbus (via gateways)",
        "OPC UA (optional)",
        "On-prem or cloud",
        "Role-based access"
      ],

      "ci.footer":
        "Exact connectivity setup depends on your devices, network quality, security policies, and site constraints. " +
        "MITE absorbs this complexity at the integration layer — so your operational logic stays clean, reusable, and stable.",


        // PLATFORM / UNDER THE HOOD
        "platform.eyebrow": "Platform",
        "platform.title": "Declarative at the core — built to change fast",
        "platform.subtitle":
          "MITE is built on top of open-source lsFusion — a deeply declarative technology. " +
          "You describe business logic and operational rules, while the platform takes responsibility for execution, consistency, and performance.",

        "platform.card1.title": "Describe what to do — not how to code it",
        "platform.card1.text":
          "Processes, rules, approvals, and KPIs are defined as logic, not hardcoded workflows. " +
          "This means operations teams can adapt behavior quickly without rebuilding solutions or waiting for developers.",

        "platform.card1.meta":
          "Less development friction • faster iterations • clearer ownership",

        "platform.card2.title": "Built for real scale, not demos",
        "platform.card2.text":
          "Billions of records, terabytes of telemetry, thousands of concurrent users — this is normal operating mode. " +
          "One logical model supports many scenarios without performance surprises.",

        "platform.card2.meta":
          "Scale outcomes, not technical complexity",

        "platform.card3.title": "Infrastructure-agnostic by design",
        "platform.card3.text":
          "MITE works in constrained networks and mixed environments. " +
          "You can run on-prem, in the cloud, or hybrid — and scale horizontally when needed without re-architecture.",

        "platform.card3.meta":
          "Predictable growth instead of fragile rollouts",

        "platform.story.title": "Why this matters in practice",
        "platform.story.text":
          "When a customer needs a new mechanism or capability, we usually generalize it at platform level instead of building a one-off feature. " +
          "That’s why improvements often arrive in hours or days — and why the platform becomes stronger with every real deployment.",

          // HIGHLIGHTS
        "highlights.eyebrow": "Platform highlights",
        "highlights.title": "Why teams choose MITE for long-term control",
        "highlights.subtitle":
          "MITE is designed for teams that need flexibility, predictability, and measurable outcomes — not just dashboards.",

        "highlights.items": [
          {
            title: "Any process, not predefined templates",
            text:
              "Model unique operational logic instead of fitting reality into rigid templates. " +
              "If something doesn’t exist yet, the platform is extended — not patched."
          },
          {
            title: "Fast change without breaking systems",
            text:
              "Logic evolves in hours or days as conditions change. " +
              "No cascade of rewrites, no fragile dependencies."
          },
          {
            title: "One system of truth for execution",
            text:
              "Data, logic, actions, and KPIs live in one governed system — not across tools, chats, and spreadsheets."
          },
          {
            title: "Human factor removed from routine",
            text:
              "People intervene only when it matters. " +
              "Routine monitoring, checks, and escalations run automatically."
          },
          {
            title: "AI-assisted insights where they matter",
            text:
              "Analytics and AI are applied inside workflows — not as detached reports — helping teams act earlier and smarter."
          },
          {
            title: "Reusable logic across sites and scenarios",
            text:
              "Processes are reused and adapted, not copied and rewritten. " +
              "Scaling becomes predictable instead of fragile."
          },
          {
            title: "Works with messy real-world data",
            text:
              "Different sensors, vendors, formats, and quality levels are normalized into one operational model."
          },
          {
            title: "Governance built into execution",
            text:
              "Approvals, traceability, and audit trails are part of the process — not added later for reporting."
          },
          {
            title: "Operations, IT, and business aligned",
            text:
              "Everyone works with the same logic and metrics, reducing friction between teams."
          },
          {
            title: "No vendor lock-in by design",
            text:
              "Open APIs and open-source core ensure you keep control over data and logic."
          },
          {
            title: "Lower total cost over time",
            text:
              "Less custom development, fewer manual processes, faster rollouts — measurable savings compound over time."
          },
          {
            title: "IoT as a growth tool, not an expense",
            text:
              "MITE turns operational data into a strategic asset that supports better decisions and new capabilities."
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

  /* =========================
       PLATFORM (under the hood)
    ========================= */
    "platform.eyebrow": "Under the hood",
    "platform.title": "Built for fast change — and serious scale",
    "platform.subtitle":
      `MITE is powered by open-source <a href="https://lsfusion.org" target="_blank" rel="noopener noreferrer">lsFusion</a> — a deeply declarative technology.
       That’s why you describe logic as business rules, while the platform takes care of execution, consistency, and performance.`,

    platformCards: [
      {
        title: "Developed on lsFusion — declarative by design",
        text:
          "Describe what needs to happen in business terms. The platform figures out how to execute it — so you don’t burn months on custom code and rework.",
        meta: "Change logic in hours/days • no “developer bottleneck”"
      },
      {
        title: "Customize processes without technical pain",
        text:
          "Operations can adjust workflows, approvals, alerts, escalations, and KPIs without turning every change into a development project.",
        meta: "Business logic stays editable and governed"
      },
      {
        title: "Scale without performance surprises",
        text:
          "Built to handle high volumes: billions of records, terabytes of data, and thousands of concurrent users — while keeping logic consistent.",
        meta: "Serious data • serious concurrency • predictable behavior"
      }
    ],

    "platform.story.title": "More than 7 years in real industrial work",
    "platform.story.text":
      "MITE is not “monitoring software”. It’s an operating model for IoT: signals become governed decisions and actions, with measurable outcomes. " +
      "We continuously strengthen the platform with generalized improvements (not narrow one-offs), so customers get new capabilities fast — without being charged for plumbing.",

    /* =========================
       HIGHLIGHTS (12)
       (avoid “templates limitation” — wording emphasizes “anything you can describe”)
    ========================= */
    "highlights.eyebrow": "Platform highlights",
    "highlights.title": "Any process you can describe — automated and measurable",
    "highlights.subtitle":
      "MITE turns IoT into a controlled execution loop: data → logic → action → KPI. You’re not limited to predefined scenarios — you evolve the platform as operations evolve.",

    highlightsItems: [
      {
        tag: "Declarative logic",
        title: "Describe what to do — not how to code it",
        text: "Turn business rules into execution. Change workflows fast without rewriting integrations or rebuilding apps.",
        meta: "No custom-code churn"
      },
      {
        tag: "Operational model",
        title: "One model for assets, sites, and context",
        text: "Unify devices, controllers, meters, and external systems into a coherent structure teams can reuse.",
        meta: "Less fragmentation"
      },
      {
        tag: "Governed execution",
        title: "Actions, ownership, and proof — built-in",
        text: "Every deviation can trigger an owned task, approvals, escalation ladders, and closure evidence.",
        meta: "Accountability by design"
      },
      {
        tag: "KPIs that mean something",
        title: "KPIs from real execution, not manual reporting",
        text: "Dashboards reflect what was done, what failed, and what improved — tied to the same logic that runs the process.",
        meta: "No spreadsheet theater"
      },
      {
        tag: "Fast iteration",
        title: "Tune logic weekly — or daily — safely",
        text: "Adjust thresholds, routes, and decision logic without risky deployments. Test, refine, and roll out confidently.",
        meta: "Change without chaos"
      },
      {
        tag: "AI-assisted insights",
        title: "Find patterns your team doesn’t have time to see",
        text: "Surface anomalies, correlations, and operational opportunities — directly inside the workflow, not in separate tooling.",
        meta: "Insights → action"
      },
      {
        tag: "Integrations",
        title: "Connect any industrial reality",
        text: "Industrial + web protocols, API-first design. Normalize once, reuse across sites and scenarios.",
        meta: "Any vendor ecosystem"
      },
      {
        tag: "Data volume",
        title: "High-throughput telemetry, clean logic",
        text: "Handle large datasets without turning every report or rule into a performance nightmare.",
        meta: "Built for scale"
      },
      {
        tag: "Auditability",
        title: "Traceability for regulated environments",
        text: "Immutable history, approvals, roles, and evidence generation — aligned with compliance workflows.",
        meta: "Audit-ready by default"
      },
      {
        tag: "Security",
        title: "Roles, access, and operational governance",
        text: "Control who can change what, track changes, and keep operational decisions explainable.",
        meta: "Secure execution"
      },
      {
        tag: "Deployment",
        title: "Start small, expand predictably",
        text: "Pilot fast, then scale horizontally as needed. Keep the same logic and governance as scope grows.",
        meta: "Predictable rollout"
      },
      {
        tag: "Business value",
        title: "Profit-driven outcomes",
        text: "Reduce loss, incidents, downtime, and manual work. Make improvements measurable and repeatable.",
        meta: "IoT as investment"
      }
    ],

    /* =========================
       TESTIMONIALS (4+)
    ========================= */
    "testimonials.eyebrow": "Customer voice",
    "testimonials.title": "Teams choose MITE for outcomes — not dashboards",
    "testimonials.subtitle": "A few examples of what industrial teams value most.",

    testimonialsItems: [
      {
        text:
          "“We stopped chasing incidents in chat. Now deviations create tasks, execution is tracked, and KPIs show the real impact.”",
        meta: "Operations Director · Manufacturing"
      },
      {
        text:
          "“The key was changing logic fast. We tuned thresholds and workflows weekly — without waiting for developers — and saw results immediately.”",
        meta: "Head of Engineering · Distributed infrastructure"
      },
      {
        text:
          "“Audit readiness became easier: deviations, approvals, and reports live in one place. Less manual evidence gathering.”",
        meta: "Quality & Compliance Lead · Pharma"
      },
      {
        text:
          "“We scaled from one scenario to multiple sites without rebuilding integrations every time. The rollout became predictable.”",
        meta: "Program Manager · Utilities"
      }
    ],

    /* =========================
       FAQ (include GDPR)
    ========================= */
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions IT and operations will ask",
    "faq.subtitle": "Practical answers about integration, security, ownership, and compliance.",

    faqItems: [
      {
        q: "How does MITE integrate with our existing systems?",
        a:
          "MITE supports industrial and web protocols and provides an open API. You can integrate with ERP/MES/SCADA/data lakes or custom apps, and keep control over where data lives."
      },
      {
        q: "Do we need developers to change workflows and rules?",
        a:
          "No. MITE is built around declarative logic: you describe what should happen, and the platform executes it. Teams can adjust rules, routes, approvals, and KPIs without long dev cycles."
      },
      {
        q: "Is MITE suitable for regulated industries (pharma, food, utilities)?",
        a:
          "Yes. You can build traceability into execution: roles, approvals, deviation workflows, and audit history. Reports and evidence come from the same governed process — not from manual compilation."
      },
      {
        q: "How do you handle GDPR and data privacy?",
        a:
          "MITE supports role-based access, audit trails, and controlled data handling. You can define data retention, access policies, and processing rules aligned with GDPR requirements. " +
          "Where needed, we help structure compliance-ready exports and evidence from the same governed workflows."
      },
      {
        q: "What if we need a new mechanism or capability?",
        a:
          "If it’s a platform-level improvement (not a narrow one-off), we typically generalize it and deliver it quickly — so you don’t pay for plumbing that strengthens the whole platform."
      }
    ]
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

  if (dict["seo.title"]) document.title = dict["seo.title"];
  const meta = document.querySelector('meta[name="description"]');
  if (meta && dict["seo.description"]) meta.setAttribute("content", dict["seo.description"]);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value === undefined || value === null) return;
    el.innerHTML = typeof value === "string" ? value.replace(/\n\n/g, "<br><br>") : el.innerHTML;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = dict[key];
    if (!value) return;
    el.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const code = btn.getAttribute("data-lang-btn");
    btn.classList.toggle("is-active", code === lang);
  });

  window.__updateOutcomes?.();
  window.__updateUseCases?.();

  // new renders
  renderPlatform();
  renderHighlights();
  renderTestimonials();
  renderFAQ();
}

/* -------------------------
   RENDER: Platform cards
------------------------- */
function renderPlatform() {
  const wrap = document.getElementById("platformCards");
  if (!wrap) return;

  const dict = getDict(document.documentElement.lang || "en");
  const cards = dict.platformCards || translations.en.platformCards || [];

  wrap.innerHTML = cards.map((c) => `
    <article class="card">
      <div class="card-inner">
        <h3 class="card-title">${c.title}</h3>
        <p class="card-text">${c.text}</p>
        <div class="card-meta">${c.meta || ""}</div>
      </div>
    </article>
  `).join("");
}

/* -------------------------
   RENDER: Highlights (12)
------------------------- */
function renderHighlights() {
  const wrap = document.getElementById("highlightsGrid");
  if (!wrap) return;

  const dict = getDict(document.documentElement.lang || "en");
  const items = dict.highlightsItems || translations.en.highlightsItems || [];

  wrap.innerHTML = items.map((h) => `
    <article class="card">
      <div class="card-inner">
        <div class="card-tag">
          <span class="card-tag-dot" aria-hidden="true"></span>
          <span>${h.tag}</span>
        </div>
        <h3 class="card-title">${h.title}</h3>
        <p class="card-text">${h.text}</p>
        <div class="card-meta">${h.meta || ""}</div>
      </div>
    </article>
  `).join("");
}

/* -------------------------
   RENDER: Testimonials
------------------------- */
function renderTestimonials() {
  const wrap = document.getElementById("testimonialsGrid");
  if (!wrap) return;

  const dict = getDict(document.documentElement.lang || "en");
  const items = dict.testimonialsItems || translations.en.testimonialsItems || [];

  wrap.innerHTML = items.map((t) => `
    <article class="card">
      <div class="card-inner">
        <p class="card-text">${t.text}</p>
        <div class="card-meta">${t.meta || ""}</div>
      </div>
    </article>
  `).join("");
}

/* -------------------------
   RENDER: FAQ
------------------------- */
function renderFAQ() {
  const wrap = document.getElementById("faqList");
  if (!wrap) return;

  const dict = getDict(document.documentElement.lang || "en");
  const items = dict.faqItems || translations.en.faqItems || [];

  wrap.innerHTML = items.map((x) => `
    <div class="faq-item">
      <div class="faq-q">${x.q}</div>
      <div class="faq-a">${x.a}</div>
    </div>
  `).join("");
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
   (keep your setupOutcomes/setupUseCases)
------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations("en");

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const code = btn.getAttribute("data-lang-btn") || "en";
      applyTranslations(code);
    });
  });

  // keep these if you already have them
  if (typeof setupOutcomes === "function") setupOutcomes();
  if (typeof setupUseCases === "function") setupUseCases();

  setupYear();
});
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

/* =========================
   USE CASES — 18 cards
   Filters + search
   No carousel jitter (grid)
========================= */

const useCases = [
  // PHARMA (1) — cold chain важнейший
  {
    industry: "pharma",
    title: "Cold-chain compliance across warehouses + transport (auto reporting)",
    pain:
      "Different temperature regimes by product, different sensors across warehouse / truck / border points. " +
      "When something goes wrong, teams reconcile logs manually and prepare compliance evidence by hand.",
    how:
      "All sensors and locations are unified into one model. Rules switch by product + phase. " +
      "Excursions trigger escalation workflows, approvals, and generate audit-ready reports automatically.",
    result:
      "Less spoilage risk, faster audits, and far less manual reporting effort.",
    icon: "snow"
  },

  // MANUFACTURING (8)
  {
    industry: "manufacturing",
    title: "Downtime loop: detect → classify → assign → verify",
    pain:
      "Stops repeat because actions are not governed — only dashboards exist.",
    how:
      "PLC/events + operator input become one timeline. Rules classify downtime and route tasks by line/reason/shift.",
    result:
      "Fewer repeated stops and measurable throughput lift.",
    icon: "factory"
  },
  {
    industry: "manufacturing",
    title: "Energy cost per batch / SKU (not averaged, real)",
    pain:
      "Energy is tracked, but product profitability is unclear. Waste hides inside averages.",
    how:
      "Meters + batch/MES context. Rules detect deviations and trigger investigation workflow.",
    result:
      "Margin protection and fast detection of hidden energy losses.",
    icon: "bolt"
  },
  {
    industry: "manufacturing",
    title: "Maintenance triggers: pragmatic predictive (rules-first)",
    pain:
      "Maintenance is reactive. Failures happen before patterns become obvious.",
    how:
      "Runtime + vibration/temp + alarms → rule ladder + trend checks → work orders + planning prompts.",
    result:
      "Fewer unexpected stops and better planning windows.",
    icon: "wrench"
  },
  {
    industry: "manufacturing",
    title: "Quality drift: detect early, stop scrap growth",
    pain:
      "Quality issues are discovered late (after scrap/rework accumulates).",
    how:
      "Process parameters + context → deviation rules + correlation → hold/stop workflow + CAPA tasks.",
    result:
      "Less scrap and earlier containment of drift.",
    icon: "target"
  },
  {
    industry: "manufacturing",
    title: "Shift handover that actually prevents повтор проблем",
    pain:
      "Handover notes are unstructured; issues repeat because follow-ups are lost.",
    how:
      "KPIs + events + open tasks auto-compiled into handover package with ownership and deadlines.",
    result:
      "Cleaner ownership chain and fewer repeated incidents.",
    icon: "handover"
  },
  {
    industry: "manufacturing",
    title: "Line performance anomalies (OEE with action, not charts)",
    pain:
      "OEE exists, but nobody changes behavior — no governed follow-up loop.",
    how:
      "Events → reason capture → action workflow → weekly KPI tracking with closure rules.",
    result:
      "Continuous improvement cycle that moves OEE, not reports it.",
    icon: "chart"
  },
  {
    industry: "manufacturing",
    title: "Utility/compressed air leakage control",
    pain:
      "Leaks quietly burn money and nobody sees them until bills rise.",
    how:
      "Flow/pressure + schedules → baseline rules + anomaly detection → task workflow.",
    result:
      "Lower utility spend and faster leak localization.",
    icon: "pipe"
  },
  {
    industry: "manufacturing",
    title: "Asset health “single screen” with escalation ladders",
    pain:
      "Teams watch many tools; alarms are noisy and response is inconsistent.",
    how:
      "Normalize alarms + context → escalation ladder + SLA timers + closure workflow.",
    result:
      "Less noise, faster response, predictable KPIs.",
    icon: "shield"
  },

  // CONSTRUCTION (1)
  {
    industry: "construction",
    title: "Fuel theft + equipment misuse detection on sites",
    pain:
      "Losses happen between shifts; evidence is weak and response is slow.",
    how:
      "Telemetry + geofencing + schedules → rule correlation → incident workflow + reporting.",
    result:
      "Reduced losses and clear accountability per site.",
    icon: "cone"
  },

  // AGRICULTURE (4)
  {
    industry: "agriculture",
    title: "Barn microclimate control (reduce livestock loss)",
    pain:
      "Temperature/humidity/airflow drift unnoticed. Human reaction is late.",
    how:
      "Sensors + weather context + age stage → alerts + escalation + workflow actions.",
    result:
      "Up to 35% fewer losses and stable conditions with less supervision.",
    icon: "cow"
  },
  {
    industry: "agriculture",
    title: "Feed + water consumption anomalies (early illness detection)",
    pain:
      "Problems are detected when it’s already costly (loss of weight / падёж).",
    how:
      "Consumption patterns → deviation rules → automatic checks + targeted interventions.",
    result:
      "Earlier intervention and reduced treatment cost.",
    icon: "drop"
  },
  {
    industry: "agriculture",
    title: "Greenhouse climate recipe by crop stage",
    pain:
      "Recipes change often; manual tuning causes inconsistent yield.",
    how:
      "Stage-based rules drive setpoints + alarms + traceable history.",
    result:
      "More stable yield and fewer “mystery failures”.",
    icon: "leaf"
  },
  {
    industry: "agriculture",
    title: "Irrigation optimization with soil moisture mapping",
    pain:
      "Overwatering wastes money; underwatering reduces yield.",
    how:
      "Soil sensors + weather → zone rules + action prompts + KPI tracking.",
    result:
      "Lower water spend and improved yield stability.",
    icon: "sprinkler"
  },

  // ENERGY (1)
  {
    industry: "energy",
    title: "Battery health monitoring + predictive repair windows",
    pain:
      "Degradation is noticed too late, leading to outages and emergency replacements.",
    how:
      "Health metrics tracked over time → rule-based risk scoring → maintenance planning.",
    result:
      "Lower unplanned downtime and longer asset lifetime.",
    icon: "battery"
  },

  // ENVIRONMENT (1)
  {
    industry: "environment",
    title: "Emission map + wind-aware risk zones (actionable, not just data)",
    pain:
      "Raw measurements exist, but decisions are delayed and responsibility is unclear.",
    how:
      "Sensors + wind + zone model → risk maps + alerts + investigation workflow.",
    result:
      "Faster response and clear evidence for reporting.",
    icon: "wind"
  },

  // SMART CITIES (1)
  {
    industry: "smartcities",
    title: "Street lighting + traffic adaptive control",
    pain:
      "Static schedules waste energy and don’t match real conditions.",
    how:
      "Usage + flow patterns → rule-based adaptation + KPI monitoring.",
    result:
      "Lower energy costs and improved mobility.",
    icon: "city"
  },

  // LOGISTICS (1)
  {
    industry: "logistics",
    title: "Fleet telematics: exceptions that trigger actions",
    pain:
      "Tracking exists but doesn’t change outcomes — delays and misuse go unnoticed until it’s too late.",
    how:
      "Routes + sensors + rules → escalations + tasks + closure evidence.",
    result:
      "Fewer SLA breaches and higher operational control.",
    icon: "truck"
  }
];

function setupUseCases() {
  const track = document.getElementById("ucTrack");
  const filters = document.getElementById("ucFilters");
  const search = document.getElementById("ucSearch");

  if (!track) return;

  const chips = filters ? Array.from(filters.querySelectorAll(".uc-chip")) : [];
  let active = "all";
  let query = "";

  function iconSvg(kind) {
    const s = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
    switch (kind) {
      case "snow": return `<svg viewBox="0 0 24 24" ${s}><path d="M12 2v20"/><path d="M4 7l16 10"/><path d="M20 7L4 17"/><path d="M7 4l10 16"/><path d="M17 4L7 20"/></svg>`;
      case "factory": return `<svg viewBox="0 0 24 24" ${s}><path d="M3 21V10l6 4V10l6 4V7l6 4v10z"/><path d="M3 21h18"/><path d="M7 21v-4"/><path d="M11 21v-4"/></svg>`;
      case "bolt": return `<svg viewBox="0 0 24 24" ${s}><path d="M13 2L3 14h7l-1 8 12-14h-7z"/></svg>`;
      case "wrench": return `<svg viewBox="0 0 24 24" ${s}><path d="M14 7a4 4 0 0 0-5 5L3 18l3 3 6-6a4 4 0 0 0 5-5l-3 3-3-3z"/></svg>`;
      case "target": return `<svg viewBox="0 0 24 24" ${s}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 7v2"/><path d="M12 15v2"/><path d="M7 12h2"/><path d="M15 12h2"/></svg>`;
      case "handover": return `<svg viewBox="0 0 24 24" ${s}><path d="M7 7h10v6H7z"/><path d="M5 21h14"/><path d="M9 13v4"/><path d="M15 13v4"/></svg>`;
      case "chart": return `<svg viewBox="0 0 24 24" ${s}><path d="M4 19V5"/><path d="M4 19h16"/><path d="M7 15l3-3 3 2 5-6"/></svg>`;
      case "pipe": return `<svg viewBox="0 0 24 24" ${s}><path d="M6 7h6a4 4 0 0 1 0 8H9"/><path d="M3 7h3"/><path d="M3 15h6"/><path d="M18 7h3"/><path d="M18 15h3"/></svg>`;
      case "shield": return `<svg viewBox="0 0 24 24" ${s}><path d="M12 2l8 4v6c0 5-3 9-8 10C7 21 4 17 4 12V6z"/><path d="M9 12l2 2 4-5"/></svg>`;
      case "cone": return `<svg viewBox="0 0 24 24" ${s}><path d="M12 3l6 18H6z"/><path d="M8 16h8"/><path d="M7 20h10"/></svg>`;
      case "cow": return `<svg viewBox="0 0 24 24" ${s}><path d="M6 10c0-3 12-3 12 0v6a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4z"/><path d="M7 10V7"/><path d="M17 10V7"/><path d="M9 14h0"/><path d="M15 14h0"/></svg>`;
      case "drop": return `<svg viewBox="0 0 24 24" ${s}><path d="M12 2s7 7 7 13a7 7 0 0 1-14 0C5 9 12 2 12 2z"/></svg>`;
      case "leaf": return `<svg viewBox="0 0 24 24" ${s}><path d="M20 4c-8 0-14 6-14 14 8 0 14-6 14-14z"/><path d="M6 18c3-6 8-9 14-14"/></svg>`;
      case "sprinkler": return `<svg viewBox="0 0 24 24" ${s}><path d="M12 20v-7"/><path d="M8 13h8"/><path d="M6 20h12"/><path d="M5 9c2 0 2-2 4-2s2 2 3 2 2-2 4-2 2 2 3 2"/></svg>`;
      case "battery": return `<svg viewBox="0 0 24 24" ${s}><path d="M7 7h12v10H7z"/><path d="M5 10v4"/><path d="M10 10v4"/><path d="M13 10v4"/><path d="M16 10v4"/></svg>`;
      case "wind": return `<svg viewBox="0 0 24 24" ${s}><path d="M3 12h10a3 3 0 1 0-3-3"/><path d="M3 18h14a3 3 0 1 1-3 3"/><path d="M3 6h12a3 3 0 1 1-3 3"/></svg>`;
      case "city": return `<svg viewBox="0 0 24 24" ${s}><path d="M3 21V9l6-3v3l6-3v15z"/><path d="M21 21V11l-6-3"/><path d="M7 21v-4"/><path d="M11 21v-6"/></svg>`;
      case "truck": return `<svg viewBox="0 0 24 24" ${s}><path d="M3 7h12v10H3z"/><path d="M15 10h4l2 2v5h-6z"/><circle cx="7" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></svg>`;
      default: return `<svg viewBox="0 0 24 24" ${s}><circle cx="12" cy="12" r="9"/></svg>`;
    }
  }

  function matches(u) {
    const okIndustry = active === "all" ? true : u.industry === active;
    const blob = `${u.title} ${u.pain} ${u.how} ${u.result}`.toLowerCase();
    const okQuery = query ? blob.includes(query) : true;
    return okIndustry && okQuery;
  }

  function render() {
    const list = useCases.filter(matches);

    track.classList.add("uc-grid");
    track.innerHTML = list.map((u) => `
      <article class="uc-card" data-industry="${u.industry}">
        <div class="uc-head">
          <div class="uc-badge">${u.industry}</div>
          <div class="uc-icon" aria-hidden="true">${iconSvg(u.icon)}</div>
        </div>
        <h3 class="uc-title">${u.title}</h3>
        <p class="uc-line"><strong>Pain:</strong> ${u.pain}</p>
        <p class="uc-line"><strong>How:</strong> ${u.how}</p>
        <p class="uc-line"><strong>Result:</strong> ${u.result}</p>
      </article>
    `).join("");

    // скрываем навигацию карусели (если в HTML оставила кнопки prev/next)
    document.getElementById("ucPrev")?.classList.add("is-hidden");
    document.getElementById("ucNext")?.classList.add("is-hidden");
    document.getElementById("ucDots")?.classList.add("is-hidden");
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

  window.__updateUseCases = () => render();
  render();
}



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

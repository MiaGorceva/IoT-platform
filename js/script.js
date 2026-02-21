/* =========================================================
   MITE — single clean script (texts in JS)
   - i18n (EN; RU/UK fallback to EN)
   - Typical outcomes (right card) with dots/arrows
   - Use-cases: render + filters + search + CAROUSEL (stable)
   - Pricing carousel
   - FAQ accordion
   - Quick contact drawer
   - Footer year
   ========================================================= */

/* -------------------------
   Translations (EN)
   RU/UK fallback to EN for now
------------------------- */

window.translations = window.translations || {
  en: {
    // NAV
    "nav.about": "Why MITE",
    "nav.platform": "Platform",
    "nav.solutions": "Use cases",
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
      "From raw telemetry to real execution: connect assets, describe logic, and let MITE run your operations. " +
      "Every executed action becomes data — fueling the next decision, rule, and improvement.",
    "hero.primaryCta": "Request a demo",
    "hero.secondaryCta": "Explore the platform",
    "hero.meta1": "From pilots to production — ready deployments",
    "hero.meta2": "Declarative logic — describe what to do, not how to code it",
    "hero.meta3": "Any logic complexity • any industrial reality • fast iterations",
    "hero.badge": "<strong>“Simple, clear, and reliable — exactly what industrial teams expect.”</strong>",

    // ABOUT / POSITIONING 
    "about.eyebrow": "Positioning",
    "about.title": "One system you control — from data to execution",
    "about.text":
      "MITE turns operational data into a single, manageable system — not a set of disconnected signals and processes.\n\n" +
      "We listen to your real environment: devices, gateways, PLCs, services, external systems, parse incoming events into a clean structure, and store them in a consistent data model.\n\n" +
      "Then you build as much logic as you want on top: rules, workflows, approvals, KPIs. You describe what should happen — MITE takes care of how it happens.\n\n" +
      "Dashboards show real execution and outcomes. You adapt processes in hours or days — without “waiting for developers” as the bottleneck.",
    "about.point1.title": "A clean data sandbox — your reality, structured",
    "about.point1.text":
      "All signals become one ordered operational model (tables + context), so you stop drowning in scattered integrations and inconsistent formats. " + 
      "You work with your reality — one structured, consistent foundation for logic, execution and analysis.",
    "about.point2.title": "Logic grows with operations — not with code debt",
    "about.point2.text":
      "Processes are defined declaratively: conditions, routes, approvals, escalations, KPIs.  Add new behavior fast — without rewriting systems, " +
      "with any number of parallel mechanisms, flows, and decision models. " +
      "There is no \“single workflow\” or \“one mechanism\” — logic grows organically with your operations.",
    "about.point3.title": "Execution is governed — patterns are analyzed and visualized",
    "about.point3.text":
      "MITE tracks what happens, when, and why  — across all processes and logic layers. Execution data is continuously analyzed: " +
      "patterns, deviations, bottlenecks, and recurring behaviors are surfaced and visualized, not hidden in logs or spreadsheets. " +
      "Responsibility, cause, and impact are always explicit.",
    "about.point4.title": "Change is constant — processes must adapt without stopping",
    "about.point4.text":
      "Business never stands still: rules change, priorities shift, conditions evolve. " + 
      "With MITE, logic and processes are adapted in hours or days, " +
      "while existing operations keep running and generate data — feeding the next iteration instead of breaking it.",
    "about.cta": "Ask a question",
    "about.side.label": "Typical outcomes",
    aboutOutcomes: [// RIGHT SIDE — Typical outcomes
      {
        num: "One",
        title: "operational system",
        text: "Decisions based on patterns, not gut feeling",
        bullets: [
          "Single source of truth for execution — data becomes insight",
          "Central control of rules & changes. Bottlenecks are explainable",
          "Dashboards show outcomes, not noise. Patterns and trends are visible",
          "Outcome: decisions rely on observed system behavior, not assumptions"
        ]
      },
      {
        num: "Days",
        title: "to a working pilot",
        text: "Control exists from day one",
        bullets: [
          "Your data normalized into one model. Clear visibility of what runs and why",
          "Real execution, ownership, and system behavior visible immediately",
          "First workflow running end-to-end with deviations surfaced",
          "Outcome: controllable process with measurable KPIs — by design, not heroics"
        ]
      },
      {
       num: "Stable",
        title: "scaling without chaos",
        text: "Successful patterns are reused, not re-implemented. Scalable stability, not fragile growth",
        bullets: [
          "Rollout playbooks instead of one-offs",
          "Many mechanisms, one governed execution model",
          "Predictable behavior across sites and teams stay reliable at scale",
          "Outcome: Scale remains predictable even as operational complexity grows"
        ]
      },
      {
        num: "Fast",
        title: "adaptation to change",
        text: "Operations change daily — your system keeps up.",
        bullets: [
          "Update rules and workflows in hours or days",
          "Safe iteration with immediate feedback. Each change generates data for the next improvement",
          "New rules coexist with existing ones",
          "Outcome: smarter decisions driven by real metrics"
        ]
      }
    ],

    // PLATFORM
   /* "platform.eyebrow": "Platform",
    "platform.title": "Built for fast change — and serious scale",
    "platform.subtitle":
      "MITE is powered by open-source <a href=\"https://lsfusion.org\" target=\"_blank\" rel=\"noopener noreferrer\">lsFusion</a>. " +
      "That’s why you describe logic as business rules, while the platform takes care of execution consistency and performance.",

    // Connectivity & Integration block (your screenshot)
    "ci.eyebrow": "Connectivity & Integration",
    "ci.title": "Works with real industrial environments",
    "ci.chip1": "REST API",
    "ci.chip2": "Webhooks",
    "ci.chip3": "MQTT",
    "ci.chip4": "LoRaWAN",
    "ci.chip5": "Modbus",
    "ci.chip6": "OPC UA",
    "ci.chip7": "On-prem or cloud",
    "ci.chip8": "Role-based access",
    "ci.note":
      "There is no single “right” protocol stack in the real world. Devices, networks, security rules, and constraints differ by site — " +
      "so MITE adapts the integration layer to your reality instead of forcing architectural compromises.",

    "platform.card1.title": "Describe what to do — not how to code it",
    "platform.card1.text":
      "Processes, rules, approvals, and KPIs are defined as logic — not hardcoded workflows. Operations teams describe what should happen; the platform handles execution. Change behavior without rebuilding systems or waiting for developers.",
    "platform.card1.meta": "Less dev friction • faster iterations • clearer ownership",
    "platform.card2.title": "Built for real scale, not demos",
    "platform.card2.text":
      "Billions of records, terabytes of telemetry, thousands of concurrent users — this is normal operating mode. An unbounded number of logical models support many scenarios across sites, teams, and time — without surprises during growth.",
    "platform.card2.meta": "Scale outcomes, not technical complexity",
    "platform.card3.title": "Infrastructure-agnostic by design",
    "platform.card3.text":
      "Designed for constrained networks and mixed environments. Run on-prem, in the cloud, or hybrid — and scale horizontally when needed without re-architecture.",
    "platform.card3.meta": "Predictable growth instead of fragile rollouts",
    "platform.story.title": "Why this matters in practice",
    "platform.story.text":
      "When a customer needs a new mechanism, we usually generalize it at platform level instead of building a one-off feature. " +
      "That’s why improvements arrive in hours or days — and why the platform gets "+
       "<span class=\"highligting\">stronger with every real deployment</span>.",*/

       // PLATFORM
      "platform.eyebrow": "Platform",
      "platform.title": "Built for fast change — and serious scale",
      "platform.subtitle":
        "You describe logic as rules and processes. The platform executes them consistently — at scale.",

      // CORE
      "platform.core.title": "Any process complexity — without code. And it actually runs.",
      "platform.core.text":
        "Model processes as logic: conditions, routes, approvals, escalations, KPIs. " +
        "Describe what must happen — MITE takes care of execution, consistency, and traceability. " +
        "Complexity can grow without turning into custom-code chaos.",
      "platform.core.chip1": "Unlimited logic layers",
      "platform.core.chip2": "Governed execution",
      "platform.core.chip3": "KPIs from real work",
      "platform.core.foot": "Less dev friction • faster iterations • clearer ownership",

      // PILLARS
      "platform.p1.title": "Predictable scaling — even when complexity grows",
      "platform.p1.text":
        "The same operational model and building blocks support many scenarios across sites, teams, and time. " +
        "You scale outcomes, not technical complexity.",
      "platform.p1.foot": "Scale outcomes, not technical debt",

      "platform.p2.title": "Future-proof by design: open, flexible, AI-readable",
      "platform.p2.text":
        "Transparent logic and structured data make the system easy to evolve and explain. " +
        "You avoid lock-in to legacy stacks and keep the platform adaptable to modern tooling and AI-assisted work.",
      "platform.p2.foot": "Built for tomorrow’s operations",

      // CONNECTIVITY
      "platform.conn.eyebrow": "Connectivity & Integration",
      "platform.conn.title": "Works with real industrial environments",
      "platform.conn.tag.modbus": "Modbus",
      "platform.conn.tag.opcua": "OPC UA",
      "platform.conn.tag.deploy": "On-prem / cloud / hybrid",
      "platform.conn.tag.rbac": "Role-based access",
      "platform.conn.text":
        "There is no single “right” protocol stack in the real world. Devices, networks, and constraints differ by site — " +
        "so MITE adapts the integration layer to your reality instead of forcing architectural compromises.",

      "platform.story.text":
  "When a customer needs a new mechanism, we usually generalize it at platform level instead of building a one-off feature. " +
  "That’s why improvements arrive in hours or days — and why the platform gets " +
  "<span class='highlighting'>stronger with every real deployment</span>.",


    // HIGHLIGHTS (6 cards)
    "highlights.eyebrow": "MITE Platform Highlights",
    "highlights.title": "An execution system for operations — not another dashboard layer",
    "highlights.subtitle":
      "You get a structured data sandbox plus tools to build any control logic and operational experience — fast.",

    "highlight.1.tag": "BUSINESS LOGIC",
    "highlight.1.title": "Any process complexity  — described as logic",
    "highlight.1.text":
      "From simple alarms to multi-step execution with approvals, escalations, SLAs, and KPIs. Change the rules in hours when reality changes — without code rewrites.",
    "highlight.1.meta": "If you can describe the process, you can run it.",

    "highlight.2.tag": "Connectivity",
    "highlight.2.title": "Any protocols, any vendors — one clean model",
    "highlight.2.text":
      "Connect sensors, PLCs, gateways, third-party systems, and manual inputs. Normalize once, then reuse the same structured data everywhere.",
    "highlight.2.meta": "No “one stack fits all” fantasies — we adapt to site reality.",

    "highlight.3.tag": "Scale",
    "highlight.3.title": "Production scale by design",
    "highlight.3.text":
      "Billions of records, heavy telemetry, thousands of concurrent users, and analytics running continuously — this is normal mode, not a “later upgrade",
    "highlight.3.meta": "Performance is a feature, not an afterthought.",

    "highlight.4.tag": "Insights",
    "highlight.4.title": "AI-assisted patterns, not manual hunting",
    "highlight.4.text":
      "Surface dependencies, risks, and anomalies without relying on “one expert who knows everything”. Bring insights straight into execution.",
    "highlight.4.meta": "Less human factor • more repeatable outcomes.",

    "highlight.5.tag": "Experience",
    "highlight.5.title": "Built for real roles — not one UI for everyone",
    "highlight.5.text":
      "Operations, engineering, and management need different views. MITE supports multiple UI patterns (tables, maps, cards, timelines, reports) on top of the same governed model.",
    "highlight.5.meta": "Same data truth • unlimited operational experiences.",

    "highlight.6.tag": "Value",
    "highlight.6.title": "Profit-driven results",
    "highlight.6.text":
      "Every loop is measurable: fewer incidents, lower losses, cleaner compliance, faster rollouts — because actions are tied to results, not to “monitoring”.",
    "highlight.6.meta": "IoT as an investment, not a cost.",

    // USE CASES header
    "useReal.eyebrow": "Real use cases",
    "useReal.title": "18 scenarios with pain → execution → measurable outcome",
    "useReal.subtitle":
      "Short cards now (trust-building). Later we can expand each into a dedicated page with full mechanics, evidence, and screenshots.",

    // Filters + search
    "uc.filter.all": "All",
    "uc.filter.pharma": "Pharma",
    "uc.filter.manufacturing": "Manufacturing",
    "uc.filter.agriculture": "Agriculture",
    "uc.filter.energy": "Energy",
    "uc.filter.environment": "Environment",
    "uc.filter.smartcities": "Smart cities",
    "uc.filter.logistics": "Logistics",
    "uc.filter.construction": "Construction",
    "uc.search.placeholder": "Search use cases…",

    // HOW
    "how.eyebrow": "How it works",
    "how.title": "Three steps from device to decision",
    "how.subtitle": "From raw signals to actions, evidence, and KPI outcomes — in days, not months.",
    "how.step1.tag": "2-5 DAYS",
    "how.step1.title": "Data in. Clean model out.",
    "how.step1.text":
      "Collect & normalize your reality (in days). Providers push telemetry to your endpoint — we ingest it and turn raw events into a clean, queryable operational model.",
    "how.step1.outout": "a normalized data “sandbox” (assets, sites, routes, context, timestamps) ready for logic and execution.",
    "how.step1.micro": "Raw → normalized → usable",
    "how.step2.tag": "3-5 Days",
    "how.step2.title": "Turn data into logic.",
    "how.step2.text":
      "Define logic: triggers, workflows, KPIs. Configure what matters: thresholds, anomaly patterns, approvals, escalation paths, SLA timers, and KPI definitions — fast, with full traceability.",
      "how.step2.outout": "clear “if-this-then-that” operations, plus dashboards and audit-ready evidence.",
    "how.step2.micro": "Events → decisions → actions",
    "how.step3.tag": "GO-LIVE",
    "how.step3.title": "Execute, measure, improve",
    "how.step3.text":
      "Execute → measure → improve. MITE runs the loop continuously: triggers actions, stores evidence, tracks KPI impact, and helps you iterate safely — without breaking production.",
      "how.step3.outout": "stable process, measurable results, and a feedback process your team can trust.",
    "how.step3.micro": "Actions → evidence → KPI outcomes",

    // PRICING (UPDATED)
    "pricing.eyebrow": "Pricing",
    "pricing.title": "Start free, scale predictably",
    "pricing.subtitle": "Validate one business process, then expand to sites, fleets, or full portfolios.",

    // Pricing clean version

    "pricing.common": "All plans include full platform access, API access, and unlimited workflows.",

    // STARTER — Free
    "pricing.free.label": "Free",
    "pricing.free.name": "Start-ups",
    "pricing.free.tagline": "Validate your first operational business process.",
    "pricing.free.price": "€0 / month",
    "pricing.free.note": "Devices: up to 10 · Platform: full access · Support: best effort",

    "pricing.free.li1": "Up to 10 connected devices",
    "pricing.free.li2": "Full access to all platform features",
    "pricing.free.li3": "Support: as-is (no SLA)",
    "pricing.free.li4": "API & export access included",

    "pricing.free.cta": "Request access",
 

    // START — Pilots
    "pricing.plan1.label": "For pilots",
    "pricing.plan1.name": "Start",
    "pricing.plan1.tagline": "Run a pilot and validate measurable outcomes.",
    "pricing.plan1.price": "€99 / month",
    "pricing.plan1.note": "Devices: 10–100 · Platform: full access · Support: 8×5",

    "pricing.plan1.li1": "10–100 connected devices",
    "pricing.plan1.li2": "Full access to all platform features",
    "pricing.plan1.li3": "Support: 8×5 business hours",
    "pricing.plan1.li4": "Feature requests considered on roadmap",

    "pricing.plan1.cta": "Start a pilot",

    // SCALE — Rollouts
    "pricing.plan2.label": "For rollouts",
    "pricing.plan2.name": "Scale",
    "pricing.plan2.tagline": "Roll out across sites with predictable support.",
    "pricing.plan2.price": "From €99 / month",
    "pricing.plan2.note": "Devices: 100–1000 · Platform: full access · Support: 24×7",

    "pricing.plan2.li1": "100–1000 connected devices",
    "pricing.plan2.li2": "Full access to all platform features",
    "pricing.plan2.li3": "Support: 24×7",
    "pricing.plan2.li4": "Priority response & escalation",

    "pricing.plan2.cta": "Talk to us",
   
    // ENTERPRISE / OEM
    "pricing.plan3.label": "Enterprise / OEM",
    "pricing.plan3.name": "Enterprise",
    "pricing.plan3.tagline": "When MITE becomes your operational core.",
    "pricing.plan3.price": "Custom pricing",
    "pricing.plan3.note": "Devices: unlimited · Platform: full + extensions · SLA: custom",

    "pricing.plan3.li1": "Unlimited devices & multi-site deployments",
    "pricing.plan3.li2": "Full platform access + extensions",
    "pricing.plan3.li3": "Custom SLA & governance model",
    "pricing.plan3.li4": "OEM / white-label options",
    "pricing.plan3.li5": "Dedicated technical contact & architecture workshops included",
    

    "pricing.plan3.cta": "Book a session",


    // TESTIMONIALS
    "testimonials.eyebrow": "Customer voice",
    "testimonials.title": "Teams choose MITE when they need outcomes",
    "testimonials.subtitle": "A few examples of what customers value most.",
    "testimonials.t1.text":
      "“Cold-chain reporting stopped being a monthly nightmare. We have one timeline, one audit trail, and reports in minutes — not days.”",
    "testimonials.t1.meta": "Quality & Compliance Lead · Pharma distribution",
    "testimonials.t2.text":
      "“We changed logic weekly during rollout — no tickets to devs. When operations changed, the system changed immediately.”",
    "testimonials.t2.meta": "Head of Engineering · Distributed infrastructure",
    "testimonials.t3.text":
      "“Downtime is no longer ‘a dashboard problem’. Each stop creates an owned workflow, and KPIs show if we actually fixed it.”",
    "testimonials.t3.meta": "Operations Director · Manufacturing",
    "testimonials.t4.text":
      "“Scaling became predictable: same data model, same mechanisms — different sites. No ‘integration snowflakes’.”",
    "testimonials.t4.meta": "Program Manager · Multi-site rollout",

    // FAQ
    "faq.eyebrow": "FAQ",
    "faq.title": "What ops and IT teams ask before going live",
    "faq.subtitle": "Real operational questions. Clear, practical answers.",

    "faq.q1": "Do we need developers to change logic and workflows?",
    "faq.a1":
      "No. In MITE, processes are described as declarative logic — you define what should happen, not how to code it. " +
      "Operations teams can change business logic, adjust thresholds, routing rules, approvals, escalation ladders, and KPIs in hours — without rebuilding systems or waiting in a development backlog. " +
      "Logic evolves with operations, not with code debt.",

    "faq.q2": "How does MITE integrate with our existing landscape?",
    "faq.a2":
      "MITE supports industrial and web protocols (MQTT, LoRaWAN, Modbus, OPC UA, REST, webhooks) and exposes open APIs. " +
      "We adapt to your environment — on-prem, cloud, or hybrid — and integrate with ERP, MES, SCADA, data lakes, or custom systems. " +
      "There is no forced stack or architectural lock-in.",

    "faq.q3": "Is MITE suitable for regulated and GDPR-controlled environments?",
    "faq.a3":
      "Yes. MITE includes role-based access control (RBAC), immutable audit trails, configurable data retention policies, and export logging. " +
      "Every action (view, edit, approve, export) is traceable. Evidence packs are generated automatically from real workflows — not assembled manually after inspections. " +
      "Compliance becomes governed system behavior, not spreadsheet coordination.",

    "faq.q4": "What if we need a new mechanism or capability?",
    "faq.a4":
      "If the requirement improves the platform at a systemic level (not a narrow one-off case), we typically generalize it and deliver it quickly. " +
      "This means you don’t pay for isolated custom plumbing — and the platform becomes stronger with every real deployment. " +
      "Your use case contributes to the evolution of the core, not to technical fragmentation.",

    "faq.trust": "Built for regulated industries. "+
          "GDPR-ready. Role-based access. Immutable audit trail. "+ 
          "No shadow spreadsheets. No hidden logic. No manual evidence assembly.",

    // CONTACT
    "contact.eyebrow": "Contact",
    "contact.title": "Tell us what you want to control — we’ll map the first win",
    "contact.subtitle":
      "Share your infrastructure and the outcome you want. We’ll propose the first measurable profit and how it scales.",
    "contact.nameLabel": "Full name",
    "contact.namePlaceholder": "Your name",
    "contact.emailLabel": "Work email",
    "contact.emailPlaceholder": "you@company.com",
    "contact.companyLabel": "Company",
    "contact.companyPlaceholder": "Company name",
    "contact.sizeLabel": "Scale",
    "contact.sizePlaceholder": "Sites / lines / assets",
    "contact.messageLabel": "What would you like to achieve with MITE?",
    "contact.messagePlaceholder": "Describe your current situation and desired outcome.",
    "contact.submit": "Send request",
    "contact.legal":
      "By sending the form you agree that we may contact you about MITE and process your data according to our privacy policy.",
    "thank-you.submit": "Thanks! We’ll get back to you shortly.",

    // FOOTER
    "footer.note": "MITE — Industrial IoT platform for profit-driven teams.",
    "footer.privacy": "Privacy policy",
    "footer.devices": "MITE-ECO devices",
    "footer.backToTop": "Back to top",

    // QUICK BUTTON + DRAWER
    "quick.label": "Ask / Contact",
    "quick.title": "Quick question",
    "quick.nameLabel": "Name",
    "quick.namePh": "Your name",
    "quick.emailLabel": "Email",
    "quick.emailPh": "you@company.com",
    "quick.msgLabel": "Message",
    "quick.msgPh": "What do you want to control or automate?",
    "quick.cancel": "Cancel",
    "quick.send": "Send",
    "quick.note": "We’ll respond with a practical first step and expected outcomes."
  },
};

const translations = window.translations; // оставляем твоё имя для удобства

translations.en = translations.en || {};
translations.ru = translations.ru || {};
translations.uk = translations.uk || {};

/* -------------------------
   i18n helpers
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
    el.innerHTML = String(value).replace(/\n\n/g, "<br><br>");
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

  // refresh dynamic widgets
  window.__updateOutcomes?.();
  window.__updateUseCases?.();
  window.__updatePricing?.();
}

/* -------------------------
   Typical outcomes (hover + dots + arrows)
------------------------- */
function setupOutcomes() {
  const numEl = document.getElementById("outcomeNum");
  const titleEl = document.getElementById("outcomeTitle");
  const textEl = document.getElementById("outcomeText");
  const bulletsEl = document.getElementById("outcomeBullets");
  const dotsWrap = document.getElementById("outcomesDots");
  const prevBtn = document.getElementById("outcomesPrev");
  const nextBtn = document.getElementById("outcomesNext");
  const metricWrap = document.querySelector(".about-side-metric");
  const leftPoints = Array.from(document.querySelectorAll(".about-point[data-outcome]"));

  if (!numEl || !titleEl || !textEl || !bulletsEl || !dotsWrap) return;

  let index = 0;

  function items() {
    const lang = document.documentElement.lang || "en";
    const dict = getDict(lang);
    return dict.aboutOutcomes || translations.en.aboutOutcomes || [];
  }

  function render(withFade = false) {
    const arr = items();
    if (!arr.length) return;

    if (index < 0) index = arr.length - 1;
    if (index >= arr.length) index = 0;

    const it = arr[index];

    if (withFade && metricWrap) metricWrap.classList.add("is-fade");

    window.clearTimeout(render.__t);
    render.__t = window.setTimeout(() => {
      numEl.textContent = it.num || "";
      titleEl.textContent = it.title || "";
      textEl.textContent = it.text || "";

      bulletsEl.innerHTML = "";
      (it.bullets || []).forEach((b) => {
        const li = document.createElement("li");
        li.textContent = b;
        bulletsEl.appendChild(li);
      });

      dotsWrap.innerHTML = "";
      arr.forEach((_, i) => {
        const d = document.createElement("button");
        d.type = "button";
        d.className = "dot" + (i === index ? " is-active" : "");
        d.addEventListener("click", () => { index = i; render(true); });
        dotsWrap.appendChild(d);
      });

      if (metricWrap) metricWrap.classList.remove("is-fade");
    }, withFade ? 140 : 0);

    // left points highlight (optional visual)
    leftPoints.forEach((p) => {
      const i = Number(p.getAttribute("data-outcome"));
      p.classList.toggle("is-active", i === index);
    });
  }

  // arrows
  prevBtn?.addEventListener("click", () => { index--; render(true); });
  nextBtn?.addEventListener("click", () => { index++; render(true); });

  // hover on left items (your requirement)
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

/* -------------------------
   Use-cases data (18 “meaty”)
------------------------- */

const useCases = [

  // 1) Pharma — Cold chain
  {
    industry: "pharma",
    industryLabel: "Pharma",
    title: "Cold chain: excursions cost real money, not just QA time",
    kpiBadge: "↓ Spoilage 15–30% · ↓ Claims 20–40%",
    ttvBadge: "Pilot in 2–4 weeks",
    pain:
      "Temperature seems controlled — until one delayed shipment wipes out €50–200k of product. Data is fragmented, pallets get reassigned, deviations are discovered after delivery. Every excursion becomes a dispute, a write-off, or a reputational risk.",
    how:
      "MITE builds a continuous shipment timeline (sensor → pallet → route → warehouse). Deviations trigger escalation during transport, not after delivery. Root cause (door, dwell time, compressor pattern) is identified automatically.",
    result:
      "Spoilage reduced by 15–30%. Claims drop 20–40%. Incidents handled in minutes with exportable evidence.",
    icon: "pharma",
    tags: ["cold chain", "gdp", "transport", "batch", "qa"]
  },

  // 2) Pharma — Compliance
  {
    industry: "pharma",
    industryLabel: "Pharma",
    title: "Compliance: from manual audit scramble to governed evidence",
    kpiBadge: "↓ Audit prep 60–80% · ↓ Compliance risk",
    ttvBadge: "Evidence in 1 click",
    pain:
      "During inspections, teams spend days collecting data from SCADA, spreadsheets, and email threads. No unified access log. No guaranteed retention. High exposure to GDP/GxP and GDPR findings.",
    how:
      "MITE enforces retention policies, role-based access, and immutable audit trails. Every deviation automatically generates a structured evidence pack.",
    result:
      "Audit preparation reduced by 60–80%. Evidence export in under 2 minutes. Lower regulatory risk.",
    icon: "shield",
    tags: ["gdp", "gxp", "gdpr", "audit", "retention"]
  },

  // 3) Manufacturing — Downtime
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Downtime: averages hide where you lose money",
    kpiBadge: "↓ Repeat stops 20–35% · ↑ Throughput",
    ttvBadge: "Pilot in days",
    pain:
      "Overall downtime looks acceptable at 10%, but one line runs at 30–35%. The same stops repeat across shifts. Losses accumulate silently every month.",
    how:
      "MITE shows deviation per line, detects recurring patterns, links stops to technical signals, and enforces task closure with SLA and verification.",
    result:
      "Repeat stops reduced 20–35%. Downtime becomes visible and controlled instead of averaged away.",
    icon: "factory",
    tags: ["downtime", "oee", "sla", "throughput"]
  },

  // 4) Manufacturing — Quality Drift
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Quality drift: scrap grows before reports show it",
    kpiBadge: "↓ Scrap 15–25% · ↑ First-pass yield",
    ttvBadge: "Minutes, not shifts",
    pain:
      "Average scrap looks stable, but one line runs at double-digit defect rate. Drift is detected only after the batch is complete.",
    how:
      "MITE tracks baseline per line and product. Early parameter drift triggers containment workflow before losses scale.",
    result:
      "Scrap reduced 15–25%. Containment decisions happen in minutes, not after full-shift damage.",
    icon: "quality",
    tags: ["quality", "scrap", "batch", "defects"]
  },

  // 5) Manufacturing — Predictive maintenance
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Predictive maintenance: fewer emergency repairs",
    kpiBadge: "↓ Unplanned stops · ↓ MTTR",
    ttvBadge: "Pilot in days",
    pain:
      "Sensors exist, but maintenance stays reactive. Failures cause emergency repairs and expensive downtime.",
    how:
      "MITE converts condition trends into prioritized work orders with SLA and before/after verification.",
    result:
      "Fewer emergency stops. Shorter MTTR. Maintenance becomes predictable.",
    icon: "wrench",
    tags: ["predictive", "maintenance", "mttr"]
  },

  // 6) Manufacturing — Energy
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Energy spikes: rising cost without visibility",
    kpiBadge: "↓ Energy cost 5–12% · ↑ Transparency",
    ttvBadge: "Pilot in days",
    pain:
      "Energy bills rise 10–15%, but no one can pinpoint where and why. Idle machines and inefficient changeovers stay hidden.",
    how:
      "MITE correlates meters with machine states and shifts, exposing where energy is wasted.",
    result:
      "5–12% documented savings on targeted lines. Energy becomes measurable and controllable.",
    icon: "bolt",
    tags: ["energy", "cost", "efficiency"]
  },

  // 7) Manufacturing — Changeover
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Changeovers: tribal knowledge costs time",
    kpiBadge: "↓ Changeover time · ↓ Start-up defects",
    ttvBadge: "Pilot in days",
    pain:
      "One shift completes changeover in 20 minutes, another in 50. Variability causes lost production and start-up scrap.",
    how:
      "MITE enforces checklist-driven changeover with time tracking and escalation.",
    result:
      "Reduced variance and fewer start-up defects.",
    icon: "swap",
    tags: ["changeover", "shift", "quality"]
  },

  // 8) Manufacturing — EHS
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "EHS: incidents logged, but not closed",
    kpiBadge: "↓ Incidents · ↓ Audit stress",
    ttvBadge: "Evidence in 1 click",
    pain:
      "Near-miss events are recorded, but follow-up actions fade. During audits, documentation is chaotic.",
    how:
      "MITE routes incidents to responsible roles with deadlines and closure proof.",
    result:
      "Lower incident rate and audit-ready documentation.",
    icon: "shield",
    tags: ["ehs", "incident", "compliance"]
  },

  // 9) Manufacturing — Traceability
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Traceability: complaints should not take days",
    kpiBadge: "↓ Investigation time · ↓ Losses",
    ttvBadge: "Evidence in 1 click",
    pain:
      "Customer complaints require manual reconstruction across systems. Investigations last days.",
    how:
      "MITE centralizes genealogy and provides structured evidence exports.",
    result:
      "Investigation time reduced from days to hours.",
    icon: "trace",
    tags: ["traceability", "genealogy"]
  },

  // 10) KPI Governance
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "KPIs: from reporting to execution",
    kpiBadge: "↑ Execution discipline",
    ttvBadge: "Pilot in days",
    pain:
      "KPIs are reported monthly, but recurring problems remain unchanged.",
    how:
      "MITE ties KPIs to mandatory actions with verification.",
    result:
      "KPIs drive measurable improvement, not presentations.",
    icon: "kpi",
    tags: ["kpi", "execution"]
  },

  // 11) Agriculture — Barn
  {
    industry: "agriculture",
    industryLabel: "Agriculture",
    title: "Barn microclimate: averages hide local losses",
    kpiBadge: "↓ Losses 10–25%",
    ttvBadge: "Pilot in days",
    pain:
      "Average conditions look stable, but local drift causes stress and productivity loss.",
    how:
      "MITE monitors zones individually and triggers escalation when deviation persists.",
    result:
      "10–25% measurable improvement in stability and loss reduction.",
    icon: "cow",
    tags: ["barn", "microclimate"]
  },

  // 12) Poultry
  {
    industry: "agriculture",
    industryLabel: "Agriculture",
    title: "Poultry ventilation: prevent mortality spikes",
    kpiBadge: "↓ Mortality 10–20%",
    ttvBadge: "Minutes, not weeks",
    pain:
      "CO₂ rise in one zone goes unnoticed while averages look normal.",
    how:
      "MITE correlates ventilation, CO₂ and equipment state per zone.",
    result:
      "Reduced mortality spikes and fewer critical events.",
    icon: "chicken",
    tags: ["poultry", "ventilation"]
  },

  // 13) Irrigation
  {
    industry: "agriculture",
    industryLabel: "Agriculture",
    title: "Irrigation: stop watering blindly",
    kpiBadge: "↓ Water use 8–20%",
    ttvBadge: "Pilot in days",
    pain:
      "Watering by schedule wastes resources and impacts yield consistency.",
    how:
      "MITE connects soil moisture, weather, and zones to drive condition-based irrigation.",
    result:
      "8–20% water savings with measurable yield stability.",
    icon: "drop",
    tags: ["irrigation", "water"]
  },

  // 14) Cold storage
  {
    industry: "agriculture",
    industryLabel: "Agriculture",
    title: "Cold storage: spoilage detected too late",
    kpiBadge: "↓ Spoilage · ↓ Manual reporting",
    ttvBadge: "Evidence in 1 click",
    pain:
      "Temperature drift is discovered after product quality degrades.",
    how:
      "MITE enforces regime control and auto-generates compliance reports.",
    result:
      "Less spoilage and faster quality decisions.",
    icon: "snow",
    tags: ["storage", "quality"]
  },

  // 15) Energy — Batteries
  {
    industry: "energy",
    industryLabel: "Energy",
    title: "Battery fleets: unpredictable failures cost uptime",
    kpiBadge: "↓ Outages · ↓ Replacement cost",
    ttvBadge: "Pilot in days",
    pain:
      "Batteries fail unexpectedly or are replaced too early.",
    how:
      "MITE predicts degradation trends and prioritizes replacement planning.",
    result:
      "Predictable maintenance windows and optimized spend.",
    icon: "battery",
    tags: ["battery", "predictive"]
  },

  // 16) Environment — Air
  {
    industry: "environment",
    industryLabel: "Environment",
    title: "Air quality: data without decisions",
    kpiBadge: "↓ Response time · ↑ Compliance confidence",
    ttvBadge: "Minutes, not weeks",
    pain:
      "Raw sensor readings do not translate into clear action or accountability.",
    how:
      "MITE provides geo heatmaps and correlates spikes with wind patterns.",
    result:
      "Faster intervention and defensible compliance reporting.",
    icon: "wind",
    tags: ["air", "compliance"]
  },

  // 17) Smart Cities — Lighting
  {
    industry: "smartcities",
    industryLabel: "Smart cities",
    title: "Street lighting: complaints mean SLA failure",
    kpiBadge: "↓ Repair time · ↑ SLA compliance",
    ttvBadge: "Pilot in days",
    pain:
      "Faults remain unresolved due to unclear routing and no enforcement.",
    how:
      "MITE classifies issues, routes contractors, and tracks SLA deadlines.",
    result:
      "Faster repairs and measurable SLA control.",
    icon: "lamp",
    tags: ["lighting", "sla"]
  },

  // 18) Logistics — Fleet Cold
  {
    industry: "logistics",
    industryLabel: "Logistics",
    title: "Cold transport: disputes destroy margin",
    kpiBadge: "↓ Claims 20–40%",
    ttvBadge: "Evidence in 1 click",
    pain:
      "Temperature deviations are discovered after delivery, leading to disputes and write-offs.",
    how:
      "MITE builds a full route timeline and generates exportable evidence instantly.",
    result:
      "20–40% fewer claims and faster dispute resolution.",
    icon: "truck",
    tags: ["fleet", "cold", "transport"]
  }

];

useCases.forEach((u, i) => { u.seq = i + 1; });


function highlightNumbers(html) {
  if (!html) return "";

  // не трогаем уже подсвеченные куски
  const MARK = "data-ucnum='1'";
  if (String(html).includes(MARK)) return html;

  let s = String(html);

  // Нормализуем dash/× (на всякий)
  s = s.replace(/\u2013|\u2014/g, "–"); // – —
  s = s.replace(/\u00D7/g, "×");        // ×

  // Хелпер: оборачиваем, избегая повторов
  const wrap = (m) => `<span class="uc-num" ${MARK}>${m}</span>`;

  // 1) Диапазоны с единицами: 20–40%, 2–3 days, 4–8 hours, 5–10 years, 2–8°C
  s = s.replace(
    /(\b[<>]?\s?\d{1,4}(?:[.,]\d+)?\s?(?:–|-)\s?\d{1,4}(?:[.,]\d+)?)(\s?(?:%|°C|x|×|X|k|K|m|km|kg|g|l|L|ms|s|sec|secs|seconds|min|mins|minutes|h|hr|hrs|hour|hours|day|days|week|weeks|month|months|year|years|devices|device|click|clicks)\b)/gi,
    (_, a, b) => wrap(a + b)
  );

  // 2) Одно значение + единица: 8×5, 24×7, 10 devices, 2 minutes, 4–8 уже поймали выше
  s = s.replace(
    /(\b[<>]?\s?\d{1,4}(?:[.,]\d+)?)(\s?(?:%|°C|x|×|X|k|K|ms|s|sec|secs|seconds|min|mins|minutes|h|hr|hrs|hour|hours|day|days|week|weeks|month|months|year|years|devices|device|click|clicks)\b)/gi,
    (_, a, b) => wrap(a + b)
  );

  // 3) “время без единиц” типа "in 2–4 weeks" уже покрыто, но "2–4" отдельно тоже иногда нужно
  s = s.replace(
    /(\b\d{1,4}(?:[.,]\d+)?\s?(?:–|-)\s?\d{1,4}(?:[.,]\d+)?\b)/g,
    (m) => wrap(m)
  );

  // 4) Просто числа (очень аккуратно, чтобы не подсвечивать 3PL и т.п.)
  // Подсвечиваем только если рядом есть слова-маркеры типа "takes", "drops", "from", "to"
  s = s.replace(
    /(\b(?:from|to|drops|drop|takes|within|in|for|over|under)\s+)([<>]?\s?\d{1,4}(?:[.,]\d+)?\b)/gi,
    (_, a, b) => a + wrap(b)
  );

  return s;
}


/* -------------------------
   Use-cases carousel + filters + search + icons
------------------------- */
function setupUseCases() {
  const carousel = document.getElementById("ucCarousel");
  const track = document.getElementById("ucTrack");
  const dots = document.getElementById("ucDots");
  const prev = document.getElementById("ucPrev");
  const next = document.getElementById("ucNext");
  const filters = document.getElementById("ucFilters");
  const search = document.getElementById("ucSearch");

  if (!carousel || !track) return;

  const chips = filters ? Array.from(filters.querySelectorAll(".uc-chip")) : [];
  let active = "all";
  let query = "";
  let page = 0;

  function iconSvg(kind) {
    const s = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
    const wrap = (inner) => `<svg viewBox="0 0 24 24" ${s}>${inner}</svg>`;

    switch (kind) {
      case "pharma": return wrap(`<path d="M10 2v6l-4 8a4 4 0 0 0 3.6 6h4.8A4 4 0 0 0 18 16l-4-8V2"/><path d="M8 8h8"/>`);
      case "factory": return wrap(`<path d="M3 21V10l6 4V10l6 4V7l6 4v10z"/><path d="M3 21h18"/>`);
      case "quality": return wrap(`<path d="M12 2l7 4v6c0 5-3 9-7 10C8 21 5 17 5 12V6z"/><path d="M9 12l2 2 4-4"/>`);
      case "wrench": return wrap(`<path d="M21 7l-5 5"/><path d="M16 7l1 1"/><path d="M2 22l7-7"/><path d="M7 17l2 2"/>`);
      case "bolt": return wrap(`<path d="M13 2L3 14h7l-1 8 10-12h-7z"/>`);
      case "swap": return wrap(`<path d="M7 7h11l-2-2"/><path d="M18 7l-2 2"/><path d="M17 17H6l2 2"/><path d="M6 17l2-2"/>`);
      case "shield": return wrap(`<path d="M12 2l7 4v6c0 5-3 9-7 10C8 21 5 17 5 12V6z"/>`);
      case "trace": return wrap(`<circle cx="7" cy="7" r="2"/><circle cx="17" cy="7" r="2"/><circle cx="12" cy="17" r="2"/><path d="M9 7h6"/><path d="M8 9l3 6"/><path d="M16 9l-3 6"/>`);
      case "kpi": return wrap(`<path d="M4 19V5"/><path d="M4 19h16"/><path d="M7 14l3-3 3 2 4-5"/>`);
      case "cow": return wrap(`<path d="M7 14c0 3 2 6 5 6s5-3 5-6"/><path d="M6 10h12"/><path d="M8 10V7"/><path d="M16 10V7"/>`);
      case "chicken": return wrap(`<path d="M9 14c0 3 2 6 6 6"/><path d="M9 14c0-4 2-7 6-7"/><path d="M15 7l2 1"/><path d="M12 12h6"/>`);
      case "drop": return wrap(`<path d="M12 2s7 8 7 13a7 7 0 0 1-14 0C5 10 12 2 12 2z"/>`);
      case "snow": return wrap(`<path d="M12 2v20"/><path d="M4 6l16 12"/><path d="M20 6L4 18"/><path d="M6 20l12-16"/>`);
      case "battery": return wrap(`<path d="M7 7h12v10H7z"/><path d="M5 10v4"/><path d="M21 10v4"/>`);
      case "wind": return wrap(`<path d="M3 8h10a3 3 0 1 0-3-3"/><path d="M3 12h14a3 3 0 1 1-3 3"/><path d="M3 16h8"/>`);
      case "lamp": return wrap(`<path d="M9 21h6"/><path d="M12 21v-3"/><path d="M7 10a5 5 0 1 1 10 0c0 2-1 3-2 4s-1 2-1 4h-4c0-2 0-3-1-4s-2-2-2-4z"/>`);
      case "truck": return wrap(`<path d="M3 17V7h11v10z"/><path d="M14 10h4l3 3v4h-7z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>`);
      case "cone": return wrap(`<path d="M12 2l5 18H7z"/><path d="M9 14h6"/><path d="M8 18h8"/>`);
      default: return wrap(`<circle cx="12" cy="12" r="9"/>`);
    }
  }

  function filtered() {
    return useCases.filter((u) => {
      const okIndustry = active === "all" ? true : u.industry === active;
      const blob = `${u.title} ${u.pain} ${u.how} ${u.result} ${(u.tags || []).join(" ")}`.toLowerCase();
      const okQuery = query ? blob.includes(query) : true;
      return okIndustry && okQuery;
    });
  }

  function perView() {
    const w = carousel.getBoundingClientRect().width;
    if (w < 640) return 1;
    if (w < 980) return 2;
    return 3;
  }

  function clampPage(maxPages) {
    if (page < 0) page = 0;
    if (page > maxPages - 1) page = Math.max(0, maxPages - 1);
  }

  function renderDots(maxPages) {
    if (!dots) return;
    dots.innerHTML = "";
    for (let i = 0; i < maxPages; i++) {
      const d = document.createElement("button");
      d.type = "button";
      d.className = "dot" + (i === page ? " is-active" : "");
      d.addEventListener("click", () => {
        page = i;
        updateCarousel();
      });
      dots.appendChild(d);
    }
  }

  function renderCards(list) {
  track.innerHTML = list
    .map((u) => `
      <article class="pc-card uc-card" data-industry="${u.industry}">
        <div class="uc-card-strip" aria-hidden="true"></div>

        <div class="uc-toprow">
          <div class="uc-index">#${String(u.seq).padStart(2, "0")}</div>

          <div class="uc-pills">
            ${u.ttvBadge ? `<span class="uc-pill uc-pill--ttv">${highlightNumbers(u.ttvBadge)}</span>` : ""}
            ${u.kpiBadge ? `<span class="uc-pill uc-pill--kpi">${highlightNumbers(u.kpiBadge)}</span>` : ""}
          </div>

          <div class="uc-meta">
            <span class="uc-badge uc-badge--industry">${u.industryLabel || u.industry}</span>
            <span class="uc-mini" aria-hidden="true">${iconSvg(u.icon)}</span>
          </div>
        </div>

        <h3 class="uc-title">${u.title}</h3>

        <div class="uc-body">
          <div class="uc-row">
            <div class="uc-k">Pain</div>
            <div class="uc-v">${highlightNumbers(u.pain)}</div>
          </div>

          <div class="uc-row">
            <div class="uc-k">How</div>
            <div class="uc-v">${highlightNumbers(u.how)}</div>
          </div>

          <div class="uc-outcome">
            <span class="uc-outcome-label">Result:</span>
            <span class="uc-outcome-text">${highlightNumbers(u.result)}</span>
          </div>
        </div>
      </article>
    `)
    .join("");
}



function setFocusCard() {
  const cards = [...track.querySelectorAll(".uc-card")];
  if (!cards.length) return;

  const vp = document.querySelector("#ucCarousel .pc-viewport");
  const vpRect = vp.getBoundingClientRect();
  const centerX = vpRect.left + vpRect.width / 2;

  let best = null;
  let bestDist = Infinity;

  cards.forEach((c) => {
    const r = c.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const d = Math.abs(cx - centerX);
    if (d < bestDist) { bestDist = d; best = c; }
  });
}



  function updateCarousel() {
    const list = filtered();
    renderCards(list);

    const pv = perView();
    const maxPages = Math.ceil(list.length / pv) || 1;
    clampPage(maxPages);

    // measure card width after render
    const first = track.querySelector(".uc-card");
    const cardW = first ? first.getBoundingClientRect().width : 0;
    const gap = 16; // keep in sync with CSS (#ucTrack gap)
    const step = pv > 1 ? (cardW + gap) * pv : (cardW + gap);

    const x = page * step;
    track.style.transform = `translate3d(${-x}px, 0, 0)`;

    renderDots(maxPages);
    requestAnimationFrame(setFocusCard);

    if (prev) prev.classList.toggle("is-disabled", page === 0);
    if (next) next.classList.toggle("is-disabled", page >= maxPages - 1);

    setFocusCard();
  }

  // filters
  chips.forEach((ch) => {
    ch.addEventListener("click", () => {
      chips.forEach((x) => x.classList.remove("is-active"));
      ch.classList.add("is-active");
      active = ch.dataset.ucFilter || "all";
      page = 0;
      updateCarousel();
    });
  });

  // search
  search?.addEventListener("input", () => {
    query = (search.value || "").trim().toLowerCase();
    page = 0;
    updateCarousel();
  });

  // arrows
  prev?.addEventListener("click", () => { page--; updateCarousel(); });
  next?.addEventListener("click", () => { page++; updateCarousel(); });

  // resize
  let rAF = 0;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(rAF);
    rAF = requestAnimationFrame(() => updateCarousel());
  });

  window.__updateUseCases = () => { page = 0; updateCarousel(); };

  updateCarousel();
}

/* -------------------------
   Pricing carousel (reuses .pricing-carousel markup)
   Requires:
   #pricingCarousel .pc-track
   .pc-prev/.pc-next
   #pricingDots
------------------------- */
function setupPricingCarousel() {
  const root = document.getElementById("pricingCarousel");
  if (!root) return;

  // ✅ На десктопе карусель не нужна — у нас grid + enterprise row
  if (window.matchMedia("(min-width: 960px)").matches) {
    const dots = document.getElementById("pricingDots");
    if (dots) dots.innerHTML = ""; // чтобы не оставались точки
    return;
  }

  const viewport = root.querySelector(".pc-viewport");
  const track = root.querySelector(".pc-track");
  const prev = root.querySelector(".pc-prev");
  const next = root.querySelector(".pc-next");
  const dots = document.getElementById("pricingDots");

  if (!viewport || !track) return;

  let page = 0;

  const getCards = () => Array.from(track.children);

  // 4 на десктопе, 1 на остальных
  function perView() {
    return window.matchMedia("(min-width: 1100px)").matches ? 4 : 1;
  }

  function pagesCount(total, pv) {
    return Math.max(1, Math.ceil(total / pv));
  }

  function normalizePage(p, pages) {
    // круговая нормализация: -1 -> last, last+1 -> 0
    return ((p % pages) + pages) % pages;
  }

  function renderDots(pages) {
    if (!dots) return;
    dots.innerHTML = "";
    for (let i = 0; i < pages; i++) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "dot" + (i === page ? " is-active" : "");
      b.addEventListener("click", () => goToPage(i));
      dots.appendChild(b);
    }
  }

  function goToPage(p) {
    const cards = getCards();
    const pv = perView();
    const pages = pagesCount(cards.length, pv);

    // если desktop: карусель не нужна
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

    // ВАЖНО: теперь стрелки всегда активны (по кругу)
    if (prev) prev.disabled = false;
    if (next) next.disabled = false;

    renderDots(pages);
  }

  prev?.addEventListener("click", () => goToPage(page - 1));
  next?.addEventListener("click", () => goToPage(page + 1));

  // i18n refresh hook
  window.__updatePricing = () => goToPage(page);

  goToPage(0);

  let rAF = 0;
  window.addEventListener(
    "resize",
    () => {
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(() => goToPage(0));
    },
    { passive: true }
  );
}


/* -------------------------
   FAQ accordion (optional but nice)
------------------------- */
function setupFaqAccordion() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q-wrap");
    const a = item.querySelector(".faq-a");

    if (!q || !a) return;

    a.style.height = "0px";
    a.style.overflow = "hidden";
    a.style.transition = "height 260ms ease";

    q.addEventListener("click", () => {
      const isOpen = item.classList.toggle("is-open");

      if (isOpen) {
        const full = a.scrollHeight;
        a.style.height = full + "px";
      } else {
        a.style.height = "0px";
      }
    });
  });
}

/* -------------------------
   Quick drawer
------------------------- */
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


/* -------------------------
   Footer year (#y)
------------------------- */
function setupYear() {
  const y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();
}

function setupMiteForms() {
  const forms = document.querySelectorAll("form.js-mite-form");
  console.log("[MITE] setupMiteForms: found", forms.length);

  forms.forEach((form) => {
    const toastSel = form.dataset.toast || ".js-success-toast";
    const toast = form.querySelector(toastSel);

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

        console.log("[MITE] Submitting to:", form.action, payload);

        const res = await fetch(form.action, {
          method: "POST",
          mode: "cors",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        console.log("[MITE] Response status:", res.status);

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

        // SUCCESS ✅
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

document.addEventListener("DOMContentLoaded", setupMiteForms);


window.MITE = window.MITE || {};
window.MITE.page = window.MITE.page || { id: "index" };

/* -------------------------
   BOOT
------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // init components first (so applyTranslations can trigger refresh hooks safely)
  setupYear();
  setupOutcomes();
  setupUseCases();
  setupPricingCarousel();
  setupFaqAccordion();
  setupDrawer();
  setupMiteForms();


  const initial = (window.MITE?.page?.langDefault) || "en";
  applyTranslations(initial);

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const code = btn.getAttribute("data-lang-btn") || "en";
      applyTranslations(code);
      });
    });
 });
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
const translations = {
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
      "how.step3.outout": "stable process, measurable results, and a feedback loop your team can trust.",
    "how.step3.micro": "Actions → evidence → KPI outcomes",


    // PRICING
    "pricing.eyebrow": "Pricing",
    "pricing.title": "Start free, scale predictably",
    "pricing.subtitle": "Validate one loop, then expand to sites, fleets, or full portfolios.",

    "pricing.free.label": "Free",
    "pricing.free.name": "Starter",
    "pricing.free.tagline": "Explore MITE and validate one scenario.",
    "pricing.free.price": "€0 / month",
    "pricing.free.note": "Up to 10 devices · Core platform access",
    "pricing.free.li1": "Dashboards + alerts",
    "pricing.free.li2": "Basic rules + workflows",
    "pricing.free.li3": "Export / API access",
    "pricing.free.cta": "Request access",

    "pricing.plan1.label": "For pilots",
    "pricing.plan1.name": "Start",
    "pricing.plan1.tagline": "A quick PoC + first operational win.",
    "pricing.plan1.price": "From €9.99 / month",
    "pricing.plan1.note": "Limited devices, full core features.",
    "pricing.plan1.li1": "Fast onboarding and guided setup",
    "pricing.plan1.li2": "Standard industrial/web protocols",
    "pricing.plan1.cta": "Start a pilot",

    "pricing.plan2.label": "For rollouts",
    "pricing.plan2.name": "Scale",
    "pricing.plan2.tagline": "Roll out one success across sites.",
    "pricing.plan2.price": "From €99 / month",
    "pricing.plan2.note": "Balanced package: governance + support.",
    "pricing.plan2.li1": "Advanced workflows + approvals",
    "pricing.plan2.li2": "Enterprise integrations / exports",
    "pricing.plan2.li3": "Priority support during rollout",
    "pricing.plan2.cta": "Talk to us",
    "pricing.plan2.ctaNote": "We align the plan to your rollout strategy.",

    "pricing.plan3.label": "Enterprise / OEM",
    "pricing.plan3.name": "Enterprise",
    "pricing.plan3.tagline": "When MITE becomes your operational core.",
    "pricing.plan3.price": "Custom pricing",
    "pricing.plan3.note": "Multi-site · white-label · custom SLA.",
    "pricing.plan3.li1": "Large-scale deployments",
    "pricing.plan3.li2": "OEM / white-label options",
    "pricing.plan3.li3": "Custom governance model",
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

    // FAQ (живые, B2B)
    "faq.eyebrow": "FAQ",
    "faq.title": "What ops and IT teams ask before внедрения",
    "faq.subtitle": "Real questions, clear answers.",
    "faq.q1": "Do we need developers to change logic and workflows?",
    "faq.a1":
      "No. In MITE you describe behavior as declarative logic (what to do). Operations teams can change rules, thresholds, routes, approvals, and KPIs without long development cycles.",
    "faq.q2": "How does MITE integrate with our landscape?",
    "faq.a2":
      "MITE supports industrial and web protocols (MQTT, LoRaWAN, Modbus/OPC UA, REST, webhooks) and exposes open APIs. We can push/pull data to ERP/MES/SCADA, data lakes, or your apps.",
    "faq.q3": "Is it suitable for regulated industries (pharma, etc.)?",
    "faq.a3":
      "Yes. You can run governed workflows with approvals, full audit trails, immutable evidence, and exportable reports. Compliance is built into execution, not assembled manually after the fact.",
    "faq.q4": "What if we need a new mechanism or capability?",
    "faq.a4":
      "If it’s a platform-level improvement (not a very narrow local-only case), we usually generalize it and deliver it fast — so you don’t pay for one-off plumbing. The platform gets stronger with each real deployment.",

    // CONTACT
    "contact.eyebrow": "Contact",
    "contact.title": "Tell us what you want to control — we’ll map the first win",
    "contact.subtitle":
      "Share your infrastructure and the outcome you want. We’ll propose the first measurable loop and how it scales.",
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

  // fallback now
  ru: {},
  uk: {}
};

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
  const useCases = [
  // PHARMA (2)
  {
    id: 1,
    industry: "pharma",
    industryLabel: "PHARMA",
    title: "Cold chain: multi-leg traceability + audit-ready reports (warehouse → truck → border → customer)",
    badge: "Lower spoilage + audits in minutes",
    pain:
      "Temperature data is fragmented across devices, warehouses, trucks, and forwarders. Excursions are discovered late, claims turn into “prove it” battles, and audits require manual reconciliation per shipment/batch.",
    how:
      "All sensor streams (warehouse + vehicle + door events) are ingested into one timeline per batch/shipment. Product-specific regimes, timers, and escalation ladders drive actions (dispatcher → QA → decision). Evidence pack (PDF/CSV) is generated from the same workflow that handled the excursion.",
    result:
      "Less spoilage risk, fewer disputes, faster deviation handling, and audit evidence becomes exportable instead of rebuilt manually.",
    icon: "pharma",
    tags: ["cold chain", "audit", "traceability", "warehouse", "fleet", "reports"]
  },
  {
    id: 2,
    industry: "pharma",
    industryLabel: "PHARMA",
    title: "GxP/GDPR evidence pack: who accessed what, when, why — without manual logs",
    badge: "Compliance by design, not by heroics",
    pain:
      "Even if monitoring works, compliance breaks on the “paperwork layer”: access control is scattered, data retention rules are unclear, and audit trails are built from multiple systems. During inspections, teams lose days proving integrity and accountability.",
    how:
      "Role-based access + immutable audit trail on every key action (view/change/approve/export). Retention policies per dataset (e.g., 5+ years), controlled exports, and “inspection mode” evidence packs that include sensor history + deviations + approvals + signatures + access trace.",
    result:
      "Audits become predictable: evidence is produced in one click, accountability is explicit, and compliance doesn’t depend on manually maintained logs/spreadsheets.",
    icon: "shield",
    tags: ["gdpr", "gxp", "audit trail", "rbac", "retention", "evidence"]
  },

  // MANUFACTURING (8)
  {
    id: 3,
    industry: "manufacturing",
    industryLabel: "MANUFACTURING",
    title: "Downtime: detect → classify → assign → verify (not just OEE charts)",
    badge: "Downtime becomes an owned loop",
    pain:
      "Stops repeat because dashboards don’t create governed actions. Operators log reasons inconsistently, ownership is unclear, and root-cause work dies in chat. After a month you have OEE charts — but not fewer stops.",
    how:
      "PLC events + operator reason capture → rule-based classification → automatic routing by line/reason/team → CAPA-style tasks with SLA timers → verification checklist → KPI closure (same loop records cause and fix).",
    result:
      "Fewer repeated stops and higher throughput because every downtime event becomes an owned, measurable execution loop.",
    icon: "factory",
    tags: ["downtime", "oee", "capa", "routing", "sla", "kpi"]
  },
  {
    id: 4,
    industry: "manufacturing",
    industryLabel: "MANUFACTURING",
    title: "Quality drift: early detection + automatic containment workflow",
    badge: "Early containment, not rework",
    pain:
      "Quality issues are found late (scrap/rework). Different lines show different deviation rates, but ‘overall average is fine’ hides the real problem: one conveyor might be at 35% deviation while another is at 3%, and nobody sees the split until losses accumulate.",
    how:
      "Process parameters + batch/context → per-line baselines + deviation rules → correlation (line A vs line B vs overall) → hold/stop workflow + approvals → capture ‘why’ + actions → evidence pack + reporting tied to the same containment loop.",
    result:
      "Less scrap and rework, faster containment decisions, and clear accountability because drift is detected at the source (line-level), not averaged away.",
    icon: "quality",
    tags: ["quality", "drift", "containment", "scrap", "batch", "approvals"]
  },
  {
    id: 5,
    industry: "manufacturing",
    industryLabel: "MANUFACTURING",
    title: "Process accuracy: explain why one line is stable and another is chaotic",
    badge: "Line-level truth beats averages",
    pain:
      "Teams see ‘10% deviation overall’ and accept it as normal. But the real story is uneven: line #2 runs at 35% deviation due to a specific machine state, raw material lot, or shift pattern. Without a unified model, it’s guesswork and arguments.",
    how:
      "Unify sensors + machine states + batch lots + shift logs into one model → compute baselines per line/asset → surface outliers + ‘what changed’ factors (state/lot/operator/maintenance window) → route investigation tasks with required evidence and closure KPIs.",
    result:
      "You stop managing by averages. You see where variability actually comes from and turn investigations into repeatable fixes.",
    icon: "kpi",
    tags: ["variance", "baseline", "line comparison", "root cause", "kpi"]
  },
  {
    id: 6,
    industry: "manufacturing",
    industryLabel: "MANUFACTURING",
    title: "Predictive maintenance: condition signals → prioritized work orders with proof",
    badge: "Predictive lite that actually executes",
    pain:
      "Sensors exist, but maintenance still reacts late because signals don’t translate into prioritized actions. Teams get alerts, but nobody owns them, and there’s no proof that the right fix happened.",
    how:
      "Condition indicators (vibration/temp/runtime) → rules per asset criticality → work order creation → SLA timers + escalation → completion verification + before/after KPI impact tracked in the same loop.",
    result:
      "Fewer unplanned failures and measurable maintenance ROI because alerts become governed work, not ‘notifications’.",
    icon: "wrench",
    tags: ["predictive", "maintenance", "work order", "sla", "mttr"]
  },
  {
    id: 7,
    industry: "manufacturing",
    industryLabel: "MANUFACTURING",
    title: "Energy spikes: detect → explain → fix (per line / per shift / per batch)",
    badge: "Savings with proof, not theory",
    pain:
      "Energy costs rise, but teams can’t link spikes to equipment states, shifts, or batches. ‘We should save energy’ stays a presentation — no repeatable playbook, no proof per fix.",
    how:
      "Meters + equipment states + schedule/batch context → anomaly rules → root-cause capture → corrective workflow → savings KPI tracked per line and compared to baseline.",
    result:
      "Documented savings and repeatable reduction playbooks (what changed, by whom, what it saved).",
    icon: "bolt",
    tags: ["energy", "anomaly", "baseline", "cost", "shift", "batch"]
  },
  {
    id: 8,
    industry: "manufacturing",
    industryLabel: "MANUFACTURING",
    title: "Changeover governance: reduce variance between shifts",
    badge: "Repeatable changeovers",
    pain:
      "Changeovers depend on ‘tribal knowledge’. Steps are skipped, setups vary by shift, and the first hour after changeover produces defects or lower throughput.",
    how:
      "Digital checklist + sensor confirmations → approvals where needed → timers + alerts → post-changeover KPIs + evidence captured automatically.",
    result:
      "More consistent changeovers, less time loss, fewer start-up defects.",
    icon: "swap",
    tags: ["changeover", "checklist", "shift", "setup", "quality"]
  },
  {
    id: 9,
    industry: "manufacturing",
    industryLabel: "MANUFACTURING",
    title: "EHS incidents: near-miss → action → closure with evidence",
    badge: "Accountability by design",
    pain:
      "Near-misses are logged, but actions aren’t enforced. Evidence is scattered, and recurring patterns repeat because ‘learning’ doesn’t become governed execution.",
    how:
      "Event capture → severity rules → routing to responsible owners → required evidence attachments → closure criteria → trend analytics by site/area/cause.",
    result:
      "Lower incident rates and audit-ready evidence, with clear ownership and closure discipline.",
    icon: "shield",
    tags: ["ehs", "incident", "evidence", "routing", "audit"]
  },
  {
    id: 10,
    industry: "manufacturing",
    industryLabel: "MANUFACTURING",
    title: "Traceability: batch genealogy + instant evidence packs for claims",
    badge: "Investigations in hours, not days",
    pain:
      "When something goes wrong, traceability becomes a scramble: multiple systems, partial data, manual reconstruction. Customers want evidence fast — you can’t.",
    how:
      "Normalize production + quality + logistics events → genealogy model per batch → one-click evidence pack export (timeline, parameters, approvals, deviations, actions).",
    result:
      "Faster investigations, fewer losses, stronger customer trust.",
    icon: "trace",
    tags: ["traceability", "genealogy", "evidence", "claims", "batch"]
  },

  // AGRICULTURE (2)
  {
    id: 11,
    industry: "agriculture",
    industryLabel: "AGRICULTURE",
    title: "Barn microclimate: conditions → action workflow → loss reduction",
    badge: "Less loss, fewer critical events",
    pain:
      "Temperature/humidity/ammonia drift is noticed too late. Teams rely on manual checks, and the same ‘almost-incident’ repeats because there’s no governed response loop.",
    how:
      "Sensors → regimes by zone/age → escalation ladder → tasks/alerts to responsible staff → closure tracking + KPIs (mortality, feed conversion, productivity) with trends.",
    result:
      "More stable conditions with less supervision, fewer critical spikes, and measurable improvements tied to actions.",
    icon: "cow",
    tags: ["microclimate", "ammonia", "regimes", "alerts", "kpi"]
  },
  {
    id: 12,
    industry: "agriculture",
    industryLabel: "AGRICULTURE",
    title: "Irrigation: soil moisture + weather → scheduling → water savings with evidence",
    badge: "Water savings you can prove",
    pain:
      "Irrigation is schedule-driven, not condition-driven. Water gets wasted, crops get uneven stress, and savings are hard to prove to management.",
    how:
      "Soil moisture + weather + zones → rules → irrigation actions/tasks → water usage KPI + yield correlation and season baselines.",
    result:
      "Lower water spend with proof and more stable yield outcomes.",
    icon: "drop",
    tags: ["irrigation", "moisture", "weather", "water", "yield"]
  },

  // ENERGY (1)
  {
    id: 13,
    industry: "energy",
    industryLabel: "ENERGY",
    title: "Battery health: predictive replacement planning for distributed fleets",
    badge: "Fewer outages, predictable windows",
    pain:
      "Battery fleets fail unpredictably; teams replace too early or too late. Critical sites get surprises, and maintenance planning is reactive.",
    how:
      "Health indicators → rules per site criticality → predictive alerts → replacement workflow → KPI tracking (downtime avoided, cost per site, replacement efficiency).",
    result:
      "Fewer outages, lower replacement cost, predictable maintenance windows.",
    icon: "battery",
    tags: ["battery", "predictive", "maintenance", "downtime", "planning"]
  },

  // ENVIRONMENT (2)
  {
    id: 14,
    industry: "environment",
    industryLabel: "ENVIRONMENT",
    title: "Air quality: sensor network → heatmaps → actionable interventions",
    badge: "From readings to decisions",
    pain:
      "Raw readings don’t translate into decisions: where it’s worse, why, and what to do next is unclear. Stakeholders want priorities and evidence, not graphs.",
    how:
      "Ingest sensors → geo model → anomaly + wind/context rules → heatmaps + alerts → action routing and compliance-ready reporting.",
    result:
      "Clear prioritization and evidence for interventions and reporting.",
    icon: "wind",
    tags: ["air", "map", "heatmap", "wind", "compliance"]
  },
  {
    id: 15,
    industry: "environment",
    industryLabel: "ENVIRONMENT",
    title: "Industrial emissions: detect abnormal patterns + prove corrective actions",
    badge: "Compliance + fewer surprises",
    pain:
      "Emissions are monitored, but abnormal patterns are explained after the fact. During inspections, it’s hard to show what happened and what actions were taken.",
    how:
      "Unify emissions sensors + production context → baseline per mode/shift → deviations trigger workflows (investigate → fix → verify) → evidence pack includes context, actions, and before/after metrics.",
    result:
      "Fewer compliance incidents and credible proof of corrective action.",
    icon: "leaf",
    tags: ["emissions", "baseline", "workflow", "evidence", "compliance"]
  },

  // SMART CITIES (1)
  {
    id: 16,
    industry: "smartcities",
    industryLabel: "SMART CITIES",
    title: "Street lighting: faults → routing → SLA closure (with proof)",
    badge: "Faster repairs + SLA proof",
    pain:
      "Citizens complain, but repairs are slow: no clear ownership, weak SLA control, and no proof of closure across contractors.",
    how:
      "Lamp telemetry + grid context → fault rules → contractor routing → SLA timers + escalation → closure evidence + KPIs.",
    result:
      "Faster repairs, fewer repeat complaints, measurable SLA compliance.",
    icon: "lamp",
    tags: ["lighting", "sla", "routing", "contractors", "evidence"]
  },

  // LOGISTICS (1)
  {
    id: 17,
    industry: "logistics",
    industryLabel: "LOGISTICS",
    title: "Fleet cold transport: route context + exception handling + customer evidence packs",
    badge: "Fewer claims, faster resolution",
    pain:
      "Temperature exceptions are noticed after delivery. Disputes and claims are painful because data is fragmented across devices, drivers, and forwarders.",
    how:
      "Truck sensors + route milestones + regime rules → exceptions trigger dispatcher/driver workflow → decisions recorded with timestamps → evidence packs shared with customers.",
    result:
      "Fewer claims, faster dispute resolution, higher delivery quality.",
    icon: "truck",
    tags: ["fleet", "cold", "route", "exceptions", "evidence"]
  },

  // CONSTRUCTION (1)
  {
    id: 18,
    industry: "construction",
    industryLabel: "CONSTRUCTION",
    title: "Fuel theft prevention: events → alarm → response workflow (with auditable closure)",
    badge: "Reduced losses + faster response",
    pain:
      "Fuel theft/leakage is discovered late. Even when alarms exist, response is inconsistent and ‘what was done’ is hard to prove afterwards.",
    how:
      "Tank sensors → deviation rules → alarm + routing → response checklist → closure evidence + loss KPI tracking.",
    result:
      "Reduced losses and faster response with auditable proof and repeatable playbooks.",
    icon: "cone",
    tags: ["fuel", "theft", "alarm", "workflow", "kpi"]
  }
];

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
    .map((u, index) => `
      <article class="pc-card uc-card" data-industry="${u.industryLabel}">
        <div class="uc-card-strip" aria-hidden="true"></div>

        <!-- Case number -->
        <div class="uc-index">#${String(index + 1).padStart(2, "0")}</div>

         <div class="uc-head">
          <!-- Outcome badge -->
          <div class="uc-badge uc-badge--outcome">
            ${u.badge}
          </div>
          <div class="uc-badge">${u.industry}</div>
            <div class="uc-mini" aria-hidden="true">
              ${iconSvg(u.icon)}
            </div>
        </div>

        <h3 class="uc-title">${u.title}</h3>

        <div class="uc-body">
          <div class="uc-row">
            <div class="uc-k">Pain</div>
            <div class="uc-v">${u.pain}</div>
          </div>

          <div class="uc-row">
            <div class="uc-k">How</div>
            <div class="uc-v">${u.how}</div>
          </div>

          <div class="uc-outcome">
            <span class="uc-outcome-label">Result:</span>
            <span class="uc-outcome-text">${u.result}</span>
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

  cards.forEach((c) => {
    c.classList.toggle("is-focus", c === best);
    c.classList.toggle("is-dim", c !== best);
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

    if (prev) prev.classList.toggle("is-disabled", page === 0);
    if (next) next.classList.toggle("is-disabled", page >= maxPages - 1);
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

  const track = root.querySelector(".pc-track");
  const prev = root.querySelector(".pc-prev");
  const next = root.querySelector(".pc-next");
  const dots = document.getElementById("pricingDots");
  const cards = track ? Array.from(track.children) : [];
  if (!track || !cards.length) return;

  let index = 0;

  function update() {
    const viewport = root.querySelector(".pc-viewport");
    if (!viewport) return;
    const x = index * viewport.clientWidth;
    track.style.transform = `translateX(${-x}px)`;

    if (prev) prev.disabled = index <= 0;
    if (next) next.disabled = index >= cards.length - 1;

    if (dots) {
      dots.innerHTML = "";
      for (let i = 0; i < cards.length; i++) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "dot" + (i === index ? " is-active" : "");
        b.addEventListener("click", () => {
          index = i;
          update();
        });
        dots.appendChild(b);
      }
    }
  }

  prev?.addEventListener("click", () => {
    index = Math.max(0, index - 1);
    update();
  });
  next?.addEventListener("click", () => {
    index = Math.min(cards.length - 1, index + 1);
    update();
  });

  window.__updatePricing = () => update();

  update();
  window.addEventListener("resize", update, { passive: true });
}

/* -------------------------
   FAQ accordion (optional but nice)
------------------------- */
function setupFaqAccordion() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    if (!q || !a) return;

    // start collapsed
    item.classList.remove("is-open");
    a.style.display = "none";

    q.addEventListener("click", () => {
      const open = item.classList.toggle("is-open");
      a.style.display = open ? "block" : "none";
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

  // language
  const initial = "en";
  applyTranslations(initial);

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const code = btn.getAttribute("data-lang-btn") || "en";
      // RU/UK fallback to EN for now
      applyTranslations(code);
    });
  });
});

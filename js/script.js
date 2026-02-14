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
  // 1) Pharma — Cold chain
  {
    industry: "pharma",
    industryLabel: "Pharma",
    title: "Cold chain: GDP-compliant multi-leg traceability + real-time deviation control",
    kpiBadge: "↓ Spoilage 15–30% · ↓ Claims 20–40% · ↓ QA workload",
    ttvBadge: "Pilot in 2–4 weeks",
    pain:
      "Temperature data is fragmented across warehouse loggers, truck telematics, and 3PL couriers. During cross-dock or border delays, pallets are reassigned and sensor IDs no longer match shipment IDs. " +
      "A 2–8°C batch is occasionally shipped under the wrong regime template. QA receives only an average temperature PDF after delivery. " +
      "When an excursion happens, investigation requires 3–5 systems, email threads, and manual reconciliation — taking 4–8 hours per incident.",

    how:
      "MITE builds a GDP-aligned chain-of-custody timeline per batch/shipment: sensor streams + geofences (warehouse, cross-dock, border) + door events + compressor duty cycle + SKU-specific regimes. " +
      "If temperature drifts beyond 2–8°C for >10 minutes (configurable per product), an escalation ladder triggers automatically (driver → dispatcher → QA). " +
      "Sensor ↔ pallet ↔ batch mismatches are flagged in real time. AI correlates deviation with door openings, dwell time, ambient spikes, or refrigeration anomalies — surfacing likely root cause within seconds.",

    result:
      "Excursions are handled during transport, not after release review. " +
      "On typical problematic lanes, spoilage risk drops by 15–30%. " +
      "Claim disputes reduce by 20–40% because evidence packs (timeline + regime + actions + approvals + access log) are exportable in <2 minutes. " +
      "Deviation investigation time shrinks from 4–8 hours to 20–40 minutes.",
    icon: "pharma",
    tags: ["cold chain", "GDP", "batch", "traceability", "transport", "QA"]
  },

  // 2) Pharma — Compliance / retention / GDPR / GxP
  {
    industry: "pharma",
    industryLabel: "Pharma",
    title: "Compliance layer: GDP/GxP retention, controlled access, and GDPR-aligned audit exports",
    kpiBadge: "↓ Audit prep 60–80% · ↓ Compliance risk · ↑ Traceability",
    ttvBadge: "Evidence in 1 click",
    pain:
      "Operational data exists, but compliance is fragile. Retention differs by site, access rights are maintained informally, and audit trails are spread across SCADA, spreadsheets, and shared folders. " +
      "During inspections, teams spend 2–3 days assembling sensor histories, approvals, and deviation logs. " +
      "It is difficult to prove who accessed what data, when, and under which role — creating GDPR and GxP exposure.",

    how:
      "MITE enforces retention and access at platform level: role-based access control (RBAC), immutable audit trail on every key action (view, edit, approve, export), and dataset-level retention policies (e.g., 5–10 years for regulated batches). " +
      "Each deviation or workflow closure automatically attaches a structured evidence pack: timeline, sensor data, regime validation, decisions, electronic approvals, timestamps, and access history. " +
      "GDPR requirements are addressed via controlled role scopes, export logging, and configurable data retention/deletion rules where legally applicable.",

    result:
      "Audit preparation time typically drops by 60–80% (from days to hours). " +
      "Evidence exports take <2 minutes and are reproducible. " +
      "Compliance risk shifts from manual coordination to governed system behavior — reducing dependency on individual experts and ad-hoc documentation.",
    icon: "shield",
    tags: ["GDP", "GxP", "GDPR", "retention", "audit", "RBAC"]
  },
  // 3) Manufacturing — Downtime (your story: average hides truth + AI vibration)
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Downtime: detect → classify → assign → verify (not just OEE charts)",
    kpiBadge: "↓ Downtime · ↑ Throughput · ↓ Repeat stops",
    ttvBadge: "Pilot in days",
    pain:
      "One KPI looks “fine” — overall downtime is 10%. But inside that average: Line A runs at 3% deviation while Line B quietly bleeds at 35%. Teams argue in chat, and the same stop repeats across shifts because there is no governed action loop.",
    how:
      "MITE ingests PLC states + operator reason capture + shift context and shows deviations per line, not just the average. When Line B spikes, AI points to correlated signals: vibration is 2.4× higher 15 minutes before each stop, while motor current drifts. The engineer sees the pattern on the dashboard, confirms a технологическая просадка on the line (belt tension / bearing wear / misalignment), and MITE triggers the workflow: assign → SLA timers (30 min) → fix checklist → verification run.",
    result:
      "Repeat stops drop by 20–35% within 4–6 weeks. Teams stop firefighting and start closing measurable loops.",
    icon: "factory",
    tags: ["downtime", "oee", "routing", "sla", "verification"]
  },

  // 4) Manufacturing — Quality drift
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Quality drift: early detection + automatic containment workflow",
    kpiBadge: "↓ Scrap · ↓ Rework · ↑ First-pass yield",
    ttvBadge: "Evidence in 1 click",
    pain:
      "Quality is reported “per shift” and looks acceptable — but drift is local. One conveyor is at 3% deviation, another at 35%, and the average 10% hides the real problem until scrap piles up.",
    how:
      "MITE puts sensors + batch context + line identity into one model. Baselines are tracked per line/product. When drift crosses a threshold, containment triggers automatically: hold/stop workflow, approvals, and evidence pack. AI surfaces which parameter changed first (e.g., temperature ramp lag + vibration rise) and which equipment state correlates with the defect spike.",
    result:
      "Scrap typically reduced by 15–25% and containment decisions happen in minutes, not after a full shift.",
    icon: "quality",
    tags: ["quality", "scrap", "rework", "batch", "approvals"]
  },

  // 5) Manufacturing — Predictive maintenance lite
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Condition monitoring → prioritized work orders with proof of closure",
    kpiBadge: "↓ Unplanned stops · ↓ MTTR · ↑ Availability",
    ttvBadge: "Pilot in days",
    pain:
      "Sensors exist, but maintenance stays reactive. Alerts are ignored because they don’t become owned tasks, and no one trusts “random warnings”.",
    how:
      "MITE ties condition signals to asset criticality and workflows: rising vibration + temperature trend + alarm history → priority score → work order creation → SLA escalation → closure verification (before/after readings). AI suggests likely failure modes based on symptom patterns (bearing / imbalance / looseness).",
    result:
      "Fewer emergency repairs, shorter MTTR, and measurable ROI because every alert becomes a closed loop, not noise.",
    icon: "wrench",
    tags: ["predictive", "maintenance", "mttr", "sla", "work orders"]
  },

  // 6) Manufacturing — Energy spikes per line/shift
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Energy spikes: detect → explain → fix (per line, per shift)",
    kpiBadge: "↓ Energy cost · ↓ Waste · ↑ Transparency",
    ttvBadge: "Minutes, not weeks",
    pain:
      "Energy cost rises, but teams see only monthly totals. A 12% spike appears, but no one can link it to equipment states, shift behavior, or changeovers.",
    how:
      "MITE merges meters + machine states + schedules. It shows where the spike happened: Line 2 during changeover window, with heaters idling 40 minutes. AI points to the sequence: operator pause + idle state + heaters stayed on. A workflow is created: adjust checklist / timers / responsibility. Next time, deviation triggers a real action, not an email.",
    result:
      "Documented savings of 5–12% on targeted lines, with repeatable reduction playbooks.",
    icon: "bolt",
    tags: ["energy", "anomaly", "cost", "shift", "savings"]
  },

  // 7) Manufacturing — Changeover governance
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Changeover governance: reduce variance between shifts",
    kpiBadge: "↓ Changeover time · ↓ Start-up defects · ↑ Consistency",
    ttvBadge: "Pilot in days",
    pain:
      "Changeovers depend on tribal knowledge. One shift does it in 22 minutes, another in 55. Steps get skipped and defects appear at start-up.",
    how:
      "MITE runs a governed changeover workflow: checklist + sensor confirmations (valves, temps, speeds) + approvals if required + timers + escalation if stuck. AI highlights which steps consistently cause delays and which confirmation is missing most often.",
    result:
      "Changeover variance shrinks, start-up defects decrease, and best practice becomes system behavior.",
    icon: "swap",
    tags: ["changeover", "checklist", "shift", "quality"]
  },

  // 8) Manufacturing — EHS incidents / near-miss
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "EHS near-miss → action → closure with evidence",
    kpiBadge: "↓ Incidents · ↑ Compliance · ↓ Audit stress",
    ttvBadge: "Evidence in 1 click",
    pain:
      "Near-misses are logged, but actions fade. Lessons don’t become enforced routines, and audits become a paperwork marathon.",
    how:
      "MITE routes EHS events by severity: capture → task assignment → deadlines → evidence attachments (photo, sensor history) → closure verification. AI clusters recurring near-miss patterns (same zone/time/tool) so prevention becomes targeted.",
    result:
      "Lower incident rate and audit-ready evidence without manual chasing.",
    icon: "shield",
    tags: ["ehs", "incident", "tasks", "evidence", "audit"]
  },

  // 9) Manufacturing — Traceability / genealogy
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Traceability: batch genealogy + instant evidence packs",
    kpiBadge: "↓ Investigation time · ↓ Losses · ↑ Trust",
    ttvBadge: "Evidence in 1 click",
    pain:
      "When a complaint happens, traceability is a scramble: partial data, multiple systems, manual reconstruction across 2–5 teams.",
    how:
      "MITE normalizes production, quality, and logistics events into one genealogy model. When an issue appears, AI suggests “suspect window” based on correlated parameter drift and downstream defects. Evidence pack export includes timeline, parameters, approvals, and actions.",
    result:
      "Investigations become hours, not days. Losses shrink because containment is faster and evidence is clean.",
    icon: "trace",
    tags: ["traceability", "genealogy", "evidence", "batch"]
  },

  // 10) Manufacturing — KPI governance
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "KPI governance: KPIs drive actions, not dashboards",
    kpiBadge: "↑ Execution discipline · ↓ “reporting theater”",
    ttvBadge: "Pilot in days",
    pain:
      "KPIs exist, but don’t change behavior. Teams report numbers, but execution stays unmanaged and root causes repeat.",
    how:
      "In MITE, KPIs are tied to workflows: trigger → action → verification → KPI update. AI highlights which KPIs improve only temporarily and which actions correlate with durable improvement.",
    result:
      "KPIs become operational levers instead of monthly slides.",
    icon: "kpi",
    tags: ["kpi", "governance", "execution", "accountability"]
  },

  // 11) Agriculture — Barn microclimate
  {
    industry: "agriculture",
    industryLabel: "Agriculture",
    title: "Barn microclimate: conditions → action workflow → loss reduction",
    kpiBadge: "↓ Losses · ↑ Productivity · ↓ Human factor",
    ttvBadge: "Pilot in days",
    pain:
      "Teams react late to temperature/humidity/ammonia drift. One zone quietly goes out of regime for 40–60 minutes, and the impact appears later as stress and productivity loss.",
    how:
      "MITE models the barn as zones + regimes by age/season. Multi-sensor correlation triggers escalation when drift persists 10–15 minutes. AI suggests the likely cause (ventilation pattern + door events + heater duty cycle) so a human comes in only on alarm, not on constant monitoring.",
    result:
      "Lower losses and more stable conditions with measurable improvement (often 10–25%) and less supervision.",
    icon: "cow",
    tags: ["barn", "microclimate", "ammonia", "loss", "kpi"]
  },

  // 12) Agriculture — Poultry ventilation failures
  {
    industry: "agriculture",
    industryLabel: "Agriculture",
    title: "Poultry house: early warning for ventilation failures",
    kpiBadge: "↓ Mortality spikes · ↓ Critical events",
    ttvBadge: "Minutes, not weeks",
    pain:
      "Ventilation issues cascade fast. Operators see “average temp ok” while CO₂ rises in one segment. When it’s noticed, it’s already a critical event.",
    how:
      "MITE correlates temp + CO₂ + fan state + power events. Dashboards show per-zone drift immediately (not averaged). AI flags “fan group 2 underperforming” from vibration/current signatures, and workflow routes to responsible staff with a clear checklist and closure proof.",
    result:
      "Fewer critical events and measurable reduction in mortality spikes (often 10–20% on problem houses).",
    icon: "chicken",
    tags: ["poultry", "ventilation", "co2", "alerting"]
  },

  // 13) Agriculture — Irrigation efficiency
  {
    industry: "agriculture",
    industryLabel: "Agriculture",
    title: "Irrigation: soil moisture → scheduling → water savings with proof",
    kpiBadge: "↓ Water use · ↑ Yield stability",
    ttvBadge: "Pilot in days",
    pain:
      "Irrigation is schedule-driven, not condition-driven. Water is wasted, and savings are impossible to prove because data is fragmented.",
    how:
      "MITE unifies soil moisture + weather + zones. Rules trigger irrigation tasks, and dashboards show water usage vs moisture/yield. AI highlights zones where moisture recovers slower (soil issues / clogged lines) so maintenance becomes targeted.",
    result:
      "Water savings of 8–20% on monitored zones with evidence, plus more stable yield.",
    icon: "drop",
    tags: ["irrigation", "moisture", "water", "yield"]
  },

  // 14) Agriculture — Cold storage produce
  {
    industry: "agriculture",
    industryLabel: "Agriculture",
    title: "Cold storage for produce: regime control + compliance exports",
    kpiBadge: "↓ Spoilage · ↓ Manual reporting",
    ttvBadge: "Evidence in 1 click",
    pain:
      "Quality degrades silently. Different rooms and sensors make consistent control and reporting hard — teams discover issues when it’s too late.",
    how:
      "MITE models storage zones + product regimes. Deviations trigger containment workflow (quarantine/inspection) and generate exportable reports. AI flags recurring patterns (same door/shift/room) to eliminate root causes.",
    result:
      "Less spoilage, faster quality decisions, and audit exports in minutes.",
    icon: "snow",
    tags: ["storage", "quality", "compliance", "reports"]
  },

  // 15) Energy — Battery health
  {
    industry: "energy",
    industryLabel: "Energy",
    title: "Battery fleets: health monitoring + predictive replacement planning",
    kpiBadge: "↓ Outages · ↓ Replacement cost · ↑ Predictability",
    ttvBadge: "Pilot in days",
    pain:
      "Battery fleets fail unpredictably. Teams replace too early or too late. Downtime is costly and root causes are unclear.",
    how:
      "MITE tracks health indicators per site criticality. Rules produce prioritized alerts and replacement workflows. AI highlights degradation patterns (temperature exposure + deep discharge cycles) and suggests which sites are at highest risk in 2–4 weeks.",
    result:
      "Fewer outages and predictable maintenance windows; replacement spend becomes planned, not reactive.",
    icon: "battery",
    tags: ["battery", "predictive", "downtime", "maintenance"]
  },

  // 16) Environment — Air quality
  {
    industry: "environment",
    industryLabel: "Environment",
    title: "Air quality: sensor network → heatmaps → actionable interventions",
    kpiBadge: "↑ Visibility · ↓ Response time · ↑ Compliance confidence",
    ttvBadge: "Minutes, not weeks",
    pain:
      "Raw readings don’t translate into decisions. Teams argue “where it’s worse” and “why” because sensors are not tied to context and wind patterns.",
    how:
      "MITE unifies sensors + geo model + wind context. Dashboards show heatmaps, not tables. AI flags likely sources by correlating wind direction with spikes and time-of-day patterns, then routes actions for verification and reporting.",
    result:
      "Clear prioritization, faster interventions, and compliance reporting with evidence.",
    icon: "wind",
    tags: ["air", "map", "heatmap", "wind", "compliance"]
  },

  // 17) Smart cities — Street lighting
  {
    industry: "smartcities",
    industryLabel: "Smart cities",
    title: "Street lighting: faults → routing → SLA closure (with proof)",
    kpiBadge: "↓ Repair time · ↑ SLA compliance · ↓ Complaints",
    ttvBadge: "Pilot in days",
    pain:
      "Citizens complain, but repairs are slow: unclear ownership, no SLA control, and no proof of closure.",
    how:
      "MITE ingests lamp telemetry + grid context. Rules classify faults and route to contractors. SLA timers escalate after 24–48 hours. AI clusters recurring faults by segment to identify feeder issues vs lamp issues.",
    result:
      "Faster repairs, fewer repeated complaints, measurable SLA compliance.",
    icon: "lamp",
    tags: ["lighting", "sla", "routing", "contractors"]
  },

  // 18) Logistics — Fleet cold transport
  {
    industry: "logistics",
    industryLabel: "Logistics",
    title: "Fleet cold transport: route context + exception handling + evidence packs",
    kpiBadge: "↓ Claims · ↓ Disputes · ↑ Delivery quality",
    ttvBadge: "Evidence in 1 click",
    pain:
      "Temperature exceptions are noticed after delivery. Data is fragmented, disputes are painful, and responsibility is unclear.",
    how:
      "MITE combines truck sensors + route milestones + regime rules. Exceptions trigger driver/dispatcher workflows with confirmations. AI flags the likely cause (door open duration + compressor pattern + ambient spike) so teams can act mid-route, not post-factum.",
    result:
      "Fewer claims, faster dispute resolution, higher delivery quality with evidence.",
    icon: "truck",
    tags: ["fleet", "cold", "route", "evidence"]
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

function setupQuickForm() {
  const form = document.getElementById("quickForm");
  const toast = document.getElementById("successToast");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    btn?.setAttribute("disabled", "disabled");

    try {
      const fd = new FormData(form);

      const res = await fetch(form.action, {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: fd
      });

      if (!res.ok) throw new Error("Send failed");

      form.reset();

      // Закрыть drawer
      document.getElementById("drawerOverlay")?.classList.remove("is-open");
      document.getElementById("drawer")?.classList.remove("is-open");

      // Показать toast
      if (toast) {
        toast.hidden = false;
        setTimeout(() => {
          toast.hidden = true;
        }, 3500);
      }

    } catch (err) {
      console.error(err);
      alert("Could not send. Please try again.");
    } finally {
      btn?.removeAttribute("disabled");
    }
  });
}

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
  setupQuickForm();

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
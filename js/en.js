window.translations = window.translations || {};

window.translations.en = {
  // NAV
  "nav.about": "Why MITE",
  "nav.platform": "Platform",
  "nav.solutions": "Use Cases",
  "nav.pricing": "Pricing",
  "nav.faq": "FAQ",
  "nav.contact": "Contact",
  "nav.demoBtn": "Request a demo",

  // SEO
  "seo.title": "MITE — Industrial IIoT Platform for Connected Infrastructure",
  "seo.description":
    "MITE is an industrial IIoT platform that connects assets, models business logic, and turns operational data into controlled execution and measurable outcomes.",

  // HERO
  "hero.kicker": "Industrial IoT, delivered",
  "hero.title": "Not just another IIoT platform. <span>MITE changes the game.</span>",
  "hero.subtitle":
    "From raw telemetry to governed execution: connect assets, describe logic, and let MITE run operational processes. " +
    "Every action becomes data — feeding the next decision, rule, and improvement.",
  "hero.primaryCta": "Request a demo",
  "hero.secondaryCta": "Explore the platform",
  "hero.meta1": "From pilot to production — ready for real deployments",
  "hero.meta2": "Declarative logic — describe what should happen, not how to code it",
  "hero.meta3": "Any process complexity • any industrial reality • fast iterations",
  "hero.badge": "<strong>“Simple, clear, and reliable — exactly what industrial teams expect.”</strong>",

  // ABOUT / POSITIONING
  "about.eyebrow": "Positioning",
  "about.title": "One system you control — from data to execution",
  "about.text":
    "MITE turns operational data into one manageable system — not a collection of disconnected signals, dashboards, and manual follow-up.\n\n" +
    "We work with your real environment: devices, gateways, PLCs, services, and external systems. Incoming events are parsed into a clean structure and stored in a consistent data model.\n\n" +
    "On top of that model, you can build as much logic as needed: rules, workflows, approvals, escalations, and KPIs. You define what should happen — MITE handles how it runs.\n\n" +
    "Dashboards show real execution and outcomes. Processes can be adapted in hours or days — without waiting on a development backlog.",

  "about.point1.title": "A clean data sandbox — your reality, structured",
  "about.point1.text":
    "All signals become one ordered operational model (tables + context), so you stop dealing with fragmented integrations and inconsistent formats. " +
    "You work with one structured foundation for logic, execution, and analysis.",

  "about.point2.title": "Logic grows with operations — not with code debt",
  "about.point2.text":
    "Processes are defined declaratively: conditions, routes, approvals, escalations, and KPIs. Add new behavior fast — without rewriting systems — " +
    "with any number of parallel mechanisms, flows, and decision models. " +
    "There is no forced “single workflow” approach. Logic evolves with the business.",

  "about.point3.title": "Execution is governed — patterns are analyzed and visualized",
  "about.point3.text":
    "MITE tracks what happened, when, and why — across processes and logic layers. Execution data is continuously analyzed: " +
    "patterns, deviations, bottlenecks, and recurring behaviors are surfaced and visualized instead of being buried in logs and spreadsheets. " +
    "Responsibility, cause, and impact stay visible.",

  "about.point4.title": "Change is constant — processes must adapt without disruption",
  "about.point4.text":
    "Business conditions change constantly: rules shift, priorities move, constraints evolve. " +
    "With MITE, logic and processes can be adapted in hours or days, " +
    "while operations continue running and producing data for the next iteration.",

  "about.cta": "Ask a question",
  "about.side.label": "Typical outcomes",

  aboutOutcomes: [
    {
      num: "One",
      title: "operational system",
      text: "Decisions based on patterns, not guesswork",
      bullets: [
        "Single source of truth for execution — data turns into insight",
        "Central control of rules and changes with explainable bottlenecks",
        "Dashboards show outcomes, not noise. Patterns and trends stay visible",
        "Outcome: decisions are based on observed system behavior, not assumptions"
      ]
    },
    {
      num: "Days",
      title: "to a working pilot",
      text: "Control exists from day one",
      bullets: [
        "Your data normalized into one model with clear visibility of what runs and why",
        "Execution, ownership, and system behavior visible immediately",
        "First workflow running end-to-end with deviations surfaced",
        "Outcome: a controllable process with measurable KPIs by design"
      ]
    },
    {
      num: "Stable",
      title: "scaling without chaos",
      text: "Successful patterns are reused, not rebuilt. Scale stays governed instead of fragile.",
      bullets: [
        "Rollout playbooks instead of one-off implementations",
        "Many mechanisms, one governed execution model",
        "Predictable behavior across sites and teams",
        "Outcome: scale remains reliable even as operational complexity grows"
      ]
    },
    {
      num: "Fast",
      title: "adaptation to change",
      text: "Operations change daily — your system keeps up.",
      bullets: [
        "Update rules and workflows in hours or days",
        "Safe iteration with immediate feedback",
        "New logic can coexist with existing logic",
        "Outcome: smarter decisions driven by real metrics"
      ]
    }
  ],

  // PLATFORM
  "platform.eyebrow": "Platform",
  "platform.title": "Built for fast change — and serious scale",
  "platform.subtitle":
    "You describe logic as rules and processes. The platform executes them consistently — at scale.",

  "platform.cards.0.title": "Any process complexity — without code. And it actually runs",
  "platform.cards.0.text":
    "Model processes as logic: conditions, routes, approvals, escalations, and KPIs. " +
    "Describe what must happen — MITE takes care of execution, consistency, and traceability. " +
    "Complexity can grow without turning into custom-code chaos.",
  "platform.cards.0.meta": "Without IT team • faster iterations • clearer ownership",

  "platform.cards.1.title": "Predictable scaling — even when complexity grows",
  "platform.cards.1.text":
    "The same operational model and reusable building blocks support many scenarios across sites, teams, and deployment stages. " +
    "You scale outcomes, not technical overhead.",
  "platform.cards.1.meta": "Scale outcomes, not technical debt",

  "platform.cards.2.title": "Future-ready by design: open, flexible, AI-readable",
  "platform.cards.2.text":
    "Transparent logic and structured data make the system easier to evolve, explain, and extend. " +
    "You avoid lock-in to brittle legacy stacks and keep the platform adaptable to modern tooling and AI-assisted workflows.",
  "platform.cards.2.meta": "Built for tomorrow’s operations",

  "platform.ci.tag": "Connectivity & Integration",
  "platform.ci.title": "Works with real industrial environments",
  "platform.ci.chip.onpremOrCloud": "On-prem / cloud / hybrid",
  "platform.ci.chip.rbac": "Role-based access",
  "platform.ci.note":
    "There is no single “right” protocol stack in the real world. Devices, networks, and constraints differ by site — " +
    "so MITE adapts the integration layer to your environment instead of forcing architectural compromises.",

  "platform.story.title": "Why this matters in practice",
  "platform.story.text":
    "When a customer needs a new mechanism, we usually generalize it at platform level instead of building a one-off feature. " +
    "That is why improvements can arrive in hours or days — and why the platform gets " +
    "<span class='highlighting'>stronger with every real deployment.</span>",

  // HIGHLIGHTS
  "highlights.eyebrow": "MITE Platform Highlights",
  "highlights.title": "An execution system for operations — not another dashboard layer",
  "highlights.subtitle":
    "You get a structured data sandbox plus the tools to build control logic and operational experiences fast.",

  "highlights.items.0.tag": "BUSINESS LOGIC",
  "highlights.items.0.title": "Any process complexity — described as logic",
  "highlights.items.0.text":
    "From simple alarms to multi-step execution with approvals, escalations, SLAs, and KPIs. Change the rules in hours when reality changes — without code rewrites.",
  "highlights.items.0.meta": "If you can describe the process, you can run it.",

  "highlights.items.1.tag": "Connectivity",
  "highlights.items.1.title": "Any protocols, any vendors — one clean model",
  "highlights.items.1.text":
    "Connect sensors, PLCs, gateways, third-party systems, and manual inputs. Normalize once, then reuse the same structured data everywhere.",
  "highlights.items.1.meta": "No “one stack fits all” fantasy — we adapt to site reality.",

  "highlights.items.2.tag": "Scale",
  "highlights.items.2.title": "Production scale by design",
  "highlights.items.2.text":
    "Billions of records, heavy telemetry, thousands of concurrent users, and continuously running analytics are normal mode — not a future upgrade.",
  "highlights.items.2.meta": "Performance is a feature, not an afterthought.",

  "highlights.items.3.tag": "Insights",
  "highlights.items.3.title": "AI-assisted patterns — not manual hunting",
  "highlights.items.3.text":
    "Surface dependencies, risks, and anomalies without relying on one expert who knows everything. Bring insights directly into execution.",
  "highlights.items.3.meta": "Less human factor • more repeatable outcomes.",

  "highlights.items.4.tag": "Experience",
  "highlights.items.4.title": "Built for real roles — not one UI for everyone",
  "highlights.items.4.text":
    "Operations, engineering, and management need different views. MITE supports multiple UI patterns — tables, maps, cards, timelines, and reports — on top of the same governed model.",
  "highlights.items.4.meta": "Same data truth • multiple operational experiences.",

  "highlights.items.5.tag": "Value",
  "highlights.items.5.title": "Results tied to profit",
  "highlights.items.5.text":
    "Every loop is measurable: fewer incidents, lower losses, cleaner compliance, faster rollouts — because actions are tied to outcomes, not just monitoring.",
  "highlights.items.5.meta": "IoT as a growth driver, not a cost center.",

  // USE CASES HEADER
  "useReal.eyebrow": "Real use cases",
  "useReal.title": "18 scenarios: pain → execution → measurable outcome",
  "useReal.subtitle":
    "Short cards today for trust and clarity. Later, each can expand into a dedicated page with full mechanics, evidence, and screenshots.",

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

  "uc.label.pain": "Pain",
  "uc.label.how": "How it works",
  "uc.label.result": "Result",

  // HOW
  "how.eyebrow": "How it works",
  "how.title": "Three steps from device to decision",
  "how.subtitle": "From raw signals to actions, evidence, and KPI outcomes — in days, not months.",

  "how.steps.0.tag": "2–5 DAYS",
  "how.steps.0.title": "Data in. Clean model out.",
  "how.steps.0.text":
    "Collect and normalize your operational reality in days. Providers push telemetry to your endpoint — we ingest it and turn raw events into a clean, queryable operational model.",
  "how.steps.0.output":
    "a normalized data sandbox (assets, sites, routes, context, timestamps) ready for logic and execution.",
  "how.steps.0.micro": "Raw → normalized → usable",

  "how.steps.1.tag": "3–5 DAYS",
  "how.steps.1.title": "Turn data into logic.",
  "how.steps.1.text":
    "Define logic: triggers, workflows, KPIs. Configure what matters: thresholds, anomaly patterns, approvals, escalation paths, SLA timers, and KPI definitions — fast, with full traceability.",
  "how.steps.1.output":
    "clear if-this-then-that operations, plus dashboards and audit-ready evidence.",
  "how.steps.1.micro": "Events → decisions → actions",

  "how.steps.2.tag": "GO-LIVE",
  "how.steps.2.title": "Execute, measure, improve",
  "how.steps.2.text":
    "MITE runs the loop continuously: triggers actions, stores evidence, tracks KPI impact, and helps you iterate safely — without breaking production.",
  "how.steps.2.output":
    "a stable process, measurable results, and a feedback loop your team can trust.",
  "how.steps.2.micro": "Actions → evidence → KPI outcomes",

  // PRICING
  "pricing.eyebrow": "Pricing",
  "pricing.title": "Start free, scale predictably",
  "pricing.subtitle": "Validate one business process, then expand to sites, fleets, or full portfolios.",

  "pricing.free.label": "Free",
  "pricing.free.name": "Start-ups",
  "pricing.free.tagline": "Validate your first operational process.",
  "pricing.free.price": "€0 / month",
  "pricing.free.note": "Devices: up to 10 · Platform: full access · Support: best effort",
  "pricing.free.li1": "Up to 10 connected devices",
  "pricing.free.li2": "Full access to all platform features",
  "pricing.free.li3": "Support: as-is (no SLA)",
  "pricing.free.li4": "API and export access included",
  "pricing.free.cta": "Request access",

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

  "pricing.plan2.label": "For rollouts",
  "pricing.plan2.name": "Scale",
  "pricing.plan2.tagline": "Roll out across sites with predictable support.",
  "pricing.plan2.price": "From €99 / month",
  "pricing.plan2.note": "Devices: 100–1000 · Platform: full access · Support: 24×7",
  "pricing.plan2.li1": "100–1000 connected devices",
  "pricing.plan2.li2": "Full access to all platform features",
  "pricing.plan2.li3": "Support: 24×7",
  "pricing.plan2.li4": "Priority response and escalation",
  "pricing.plan2.cta": "Talk to us",

  "pricing.plan3.label": "Enterprise / OEM",
  "pricing.plan3.name": "Enterprise",
  "pricing.plan3.tagline": "When MITE becomes your operational core.",
  "pricing.plan3.price": "Custom pricing",
  "pricing.plan3.note": "Devices: unlimited · Platform: full + extensions · SLA: custom",
  "pricing.plan3.li1": "Unlimited devices and multi-site deployments",
  "pricing.plan3.li2": "Full platform access + extensions",
  "pricing.plan3.li3": "Custom SLA and governance model",
  "pricing.plan3.li4": "OEM / white-label options",
  "pricing.plan3.li5": "Dedicated technical contact and architecture workshops included",
  "pricing.plan3.cta": "Book a session",

  // TESTIMONIALS
  "testimonials.eyebrow": "Customer voice",
  "testimonials.title": "Teams choose MITE when outcomes matter",
  "testimonials.subtitle": "A few examples of what customers value most.",

  "testimonials.items.0.text":
    "“Cold-chain reporting stopped being a monthly nightmare. We have one timeline, one audit trail, and reports in minutes — not days.”",
  "testimonials.items.0.meta": "Quality & Compliance Lead · Pharma distribution",

  "testimonials.items.1.text":
    "“We changed logic weekly during rollout — no tickets to developers. When operations changed, the system changed immediately.”",
  "testimonials.items.1.meta": "Head of Engineering · Distributed infrastructure",

  "testimonials.items.2.text":
    "“Downtime is no longer just a dashboard problem. Each stop creates an owned workflow, and KPIs show whether we actually fixed the cause.”",
  "testimonials.items.2.meta": "Operations Director · Manufacturing",

  "testimonials.items.3.text":
    "“Scaling became predictable: same data model, same mechanisms — different sites. No integration snowflakes.”",
  "testimonials.items.3.meta": "Program Manager · Multi-site rollout",

  // FAQ
  "faq.eyebrow": "FAQ",
  "faq.title": "What operations and IT teams ask before go-live",
  "faq.subtitle": "Real operational questions. Clear, practical answers.",

  "faq.items.0.q": "Do we need developers to change logic and workflows?",
  "faq.items.0.a":
    "No. In MITE, processes are described as declarative logic — you define what should happen, not how to code it. " +
    "Operations teams can change business logic, thresholds, routing rules, approvals, escalation ladders, and KPIs in hours — without rebuilding systems or waiting in a development backlog. " +
    "Logic evolves with operations, not with code debt.",

  "faq.items.1.q": "How does MITE integrate with our existing landscape?",
  "faq.items.1.a":
    "MITE supports industrial and web protocols such as MQTT, LoRaWAN, Modbus, OPC UA, REST, and webhooks, and exposes open APIs. " +
    "We adapt to your environment — on-prem, cloud, or hybrid — and integrate with ERP, MES, SCADA, data lakes, and custom systems. " +
    "There is no forced stack or architectural lock-in.",

  "faq.items.2.q": "Is MITE suitable for regulated and GDPR-controlled environments?",
  "faq.items.2.a":
    "Yes. MITE includes role-based access control, immutable audit trails, configurable data retention policies, and export logging. " +
    "Every action — view, edit, approve, export — is traceable. Evidence packs are generated from real workflows, not assembled manually before inspections. " +
    "Compliance becomes governed system behavior, not spreadsheet coordination.",

  "faq.items.3.q": "What if we need a new mechanism or capability?",
  "faq.items.3.a":
    "If the requirement strengthens the platform at a systemic level rather than as a narrow one-off, we typically generalize it and deliver it quickly. " +
    "That means you do not pay for isolated custom plumbing, and the platform becomes stronger with every real deployment. " +
    "Your use case contributes to the evolution of the core, not to technical fragmentation.",

  "faq.trust":
    "Built for regulated industries. GDPR-ready. Role-based access. Immutable audit trail. " +
    "No shadow spreadsheets. No hidden logic. No manual evidence assembly.",

  // CONTACT
  "contact.eyebrow": "Contact",
  "contact.title": "Tell us what you want to control — we’ll map the first win",
  "contact.subtitle":
    "Share your infrastructure and the outcome you want. We’ll propose the first measurable gain and how it can scale.",
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
};
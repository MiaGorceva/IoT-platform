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
      "MITE transforms raw IoT telemetry into a scalable operational system you can actually run." +
      "You connect devices and assets, describe what should happen, and MITE takes care of how — processing data, executing logic, and delivering real operational outcomes.",
    "hero.primaryCta": "Request a demo",
    "hero.secondaryCta": "Explore the platform",
    "hero.meta1": "From pilots to production-ready deployments",
    "hero.meta2": "Declarative logic — describe what to do, not how to code it",
    "hero.meta3": "Any logic complexity • any industrial reality • fast iterations",
    "hero.badge": "<strong>“Simple, clear, and reliable — exactly what industrial teams expect.”</strong>",

    // ABOUT / POSITIONING (смысл не меняем)
    "about.eyebrow": "Positioning",
    "about.title": "One system you control — from data to execution",
    "about.text":
      "MITE turns operational data into a single, manageable system — not a set of disconnected signals and processes.\n\n" +
      "We listen to your channels (devices, gateways, PLCs, services), parse incoming events into a clean structure, and store them in a consistent data model.\n\n" +
      "Then you build as much logic as you want on top: rules, workflows, approvals, KPIs. You describe what should happen — MITE takes care of how it happens.\n\n" +
      "Dashboards show real execution and outcomes. You adapt processes in hours or days — without “waiting for developers” as the bottleneck.",
    "about.point1.title": "A clean data sandbox — your reality, structured",
    "about.point1.text":
      "All signals become one ordered operational model (tables + context), so you stop drowning in scattered integrations and inconsistent formats.",
    "about.point2.title": "Unlimited logic layers — without custom code chaos",
    "about.point2.text":
      "You describe processes as logic: conditions, routes, approvals, escalations, KPIs. Add new behavior fast — without rewriting systems.",
    "about.point3.title": "Execution is governed, not manual coordination",
    "about.point3.text":
      "MITE tracks what happened, when, and why. Deviations trigger actions. Responsibility is explicit — not buried in chats and spreadsheets.",
    "about.point4.title": "Routine runs on autopilot, insights surface automatically",
    "about.point4.text":
      "Repetitive loops are automated. AI-assisted analysis helps surface patterns and opportunities — results don’t depend on individual heroics.",
    "about.cta": "Ask a question",

    // Typical outcomes (RIGHT)
    "about.side.label": "Typical outcomes",
    aboutOutcomes: [
      {
        num: "Days",
        title: "to a working pilot",
        text: "A connected data flow + first governed loop (signals → logic → action → KPI).",
        bullets: [
          "Your data normalized into one model",
          "First rules & alerts live",
          "First workflow running end-to-end",
          "Outcome: controllable process with measurable KPIs"
        ]
      },
      {
        num: "One",
        title: "operational system",
        text: "Data, logic, actions, and evidence live in one place.",
        bullets: [
          "Single source of truth for execution",
          "Central control of rules & changes",
          "Dashboards show outcomes, not noise",
          "Outcome: predictable control and clear accountability"
        ]
      },
      {
        num: "Fast",
        title: "adaptation to change",
        text: "Operations change weekly — your system should too.",
        bullets: [
          "Update logic in hours/days",
          "Safe iteration with immediate feedback",
          "Same mechanism reused across sites",
          "Outcome: faster decisions based on real metrics"
        ]
      },
      {
        num: "Stable",
        title: "scaling without chaos",
        text: "Roll out one success to many locations — predictably.",
        bullets: [
          "Rollout playbooks instead of one-offs",
          "Governance & auditability stay consistent",
          "Performance stays reliable at scale",
          "Outcome: consistent KPIs across your portfolio"
        ]
      }
    ],

    // PLATFORM
    "platform.eyebrow": "Platform",
    "platform.title": "A structured data sandbox + tools to build any operational logic",
    "platform.subtitle":
      "MITE is powered by open-source <a href='https://lsfusion.org' target='_blank' rel='noopener noreferrer'>lsFusion</a> — a deeply declarative technology. " +
      "That’s why you can describe business behavior quickly, while the platform ensures execution, consistency, auditability, and performance.",

   "ci.eyebrow": "CONNECTIVITY & INTEGRATION",
"ci.title": "Works with real industrial environments",

"ci.chip1": "REST API",
"ci.chip2": "Webhooks",
"ci.chip3": "MQTT",
"ci.chip4": "LoRaWAN",
"ci.chip5": "Modbus (via gateways)",
"ci.chip6": "OPC UA (optional)",
"ci.chip7": "On-prem or cloud",
"ci.chip8": "Role-based access",

"ci.note":
  "There is no single ‘right’ protocol stack in the real world. Devices, networks, security rules, and constraints differ by site — so MITE adapts the integration layer to your reality instead of forcing architectural compromises.",


    // Platform cards (под скрином)
    "platform.card1.title": "Describe what to do — not how to code it",
    "platform.card1.text":
      "Processes, rules, approvals, and KPIs are defined as logic, not hardcoded workflows. " +
      "Ops teams can adapt behavior quickly without rebuilding solutions or waiting for developers.",
    "platform.card1.meta": "Less dev friction • faster iterations • clearer ownership",

    "platform.card2.title": "Built for real scale, not demos",
    "platform.card2.text":
      "Billions of records, terabytes of telemetry, thousands of concurrent users — this is normal operating mode. " +
      "One structured model supports many scenarios without performance surprises.",
    "platform.card2.meta": "Scale outcomes, not technical complexity",

    "platform.card3.title": "Infrastructure-agnostic by design",
    "platform.card3.text":
      "MITE works in constrained networks and mixed environments. " +
      "Run on-prem, in the cloud, or hybrid — and scale horizontally when needed without re-architecture.",
    "platform.card3.meta": "Predictable growth instead of fragile rollouts",

    "platform.story.title": "Why this matters in practice",
    "platform.story.text":
      "When a customer needs a new mechanism or capability, we usually generalize it at platform level instead of building a one-off feature. " +
      "That’s why improvements often arrive in hours or days — and why the platform becomes stronger with every real deployment.",

    // HIGHLIGHTS (6 cards)
    "highlights.eyebrow": "MITE Platform Highlights",
    "highlights.title": "Why teams pick MITE for outcomes — not dashboards",
    "highlights.subtitle":
      "You get a structured data sandbox plus tools to build any control logic and operational experience — fast.",

    "highlight.1.tag": "Business logic",
    "highlight.1.title": "Any process complexity",
    "highlight.1.text":
      "From simple alarms to multi-step execution with approvals and escalation ladders. When operations change, your logic changes — in hours, not quarters.",
    "highlight.1.meta": "If you can describe the process, you can build it.",

    "highlight.2.tag": "Connectivity",
    "highlight.2.title": "Any protocols, any vendors",
    "highlight.2.text":
      "Bring in sensors, PLCs, gateways, third-party systems, and manual inputs. Normalize once, then reuse the same clean data everywhere.",
    "highlight.2.meta": "No “one stack fits all” fantasies — we adapt to your site reality.",

    "highlight.3.tag": "Scale",
    "highlight.3.title": "Billions of records, thousands of users",
    "highlight.3.text":
      "MITE is designed for real production load: long histories, heavy analytics, and many users working simultaneously.",
    "highlight.3.meta": "Performance is a feature, not an afterthought.",

    "highlight.4.tag": "Insights",
    "highlight.4.title": "AI-assisted patterns, not manual hunting",
    "highlight.4.text":
      "Surface dependencies, risks, and anomalies without relying on “one expert who knows everything”. Bring insights straight into execution.",
    "highlight.4.meta": "Less human factor • more repeatable outcomes.",

    "highlight.5.tag": "Experience",
    "highlight.5.title": "A lot of “forms” — on purpose",
    "highlight.5.text":
      "Different teams need different views. MITE gives you many UI patterns (tables, cards, maps, timelines, reports) so each role gets the right interface.",
    "highlight.5.meta": "Same data model • unlimited experiences.",

    "highlight.6.tag": "Value",
    "highlight.6.title": "Profit-driven results",
    "highlight.6.text":
      "Less spoilage, fewer incidents, lower losses, faster rollouts, cleaner compliance. Tie every loop to KPIs and prove ROI.",
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
    "how.subtitle": "MITE ties data, logic, actions, evidence, and KPIs into one feedback loop.",
    "how.step1.tag": "Step 1",
    "how.step1.title": "Ingest and structure your reality",
    "how.step1.text":
      "We listen to your channels and normalize events into a clean operational model (assets, sites, routes, context).",
    "how.step2.tag": "Step 2",
    "how.step2.title": "Describe logic (what to do)",
    "how.step2.text":
      "Define rules, workflows, approvals, escalations, and KPIs. Add as many layers as you need — fast.",
    "how.step3.tag": "Step 3",
    "how.step3.title": "Execute, measure, improve",
    "how.step3.text":
      "MITE runs the loop. Deviations trigger actions. Evidence is stored. KPIs show outcomes. Iterate safely and scale.",

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
      "MITE supports industrial and web protocols (MQTT, LoRaWAN via gateways, Modbus/OPC UA optional, REST, webhooks) and exposes open APIs. We can push/pull data to ERP/MES/SCADA, data lakes, or your apps.",
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
   Typical outcomes widget
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

    dotsWrap.innerHTML = "";
    arr.forEach((_, i) => {
      const d = document.createElement("button");
      d.type = "button";
      d.className = "dot" + (i === index ? " is-active" : "");
      d.addEventListener("click", () => {
        index = i;
        render();
      });
      dotsWrap.appendChild(d);
    });
  }

  prevBtn?.addEventListener("click", () => {
    index--;
    render();
  });
  nextBtn?.addEventListener("click", () => {
    index++;
    render();
  });

  window.__updateOutcomes = () => {
    index = 0;
    render();
  };

  render();
}

/* -------------------------
   Use-cases data (18, “meaty”, realistic)
   Required industry counts:
   - pharma: 1 (cold chain ключевой)
   - manufacturing: 8
   - construction: 1
   - agriculture: 4
   - energy: 1
   - environment: 1
   - smart cities: 1
   - logistics: 1
   TOTAL: 18
------------------------- */
const useCases = [
  // PHARMA (1)
  {
    id: "pharma-coldchain",
    industry: "pharma",
    title: "Cold chain with multi-leg traceability & audit-ready reports",
    pain:
      "Different sensors in warehouses and trucks, border delays, variable temperature regimes by product — and then manual reconciliation for every shipment and inspection.",
    how:
      "Single timeline per batch/shipment: ingest all sensor streams + route context + product regime rules + escalation ladder + approvals + automatic PDF/CSV reporting.",
    result:
      "Less spoilage risk, fewer claim disputes, and audits become “export in minutes” instead of manual evidence gathering.",
    icon: "pill"
  },

  // MANUFACTURING (8)
  {
    id: "mfg-downtime-loop",
    industry: "manufacturing",
    title: "Downtime: detect → classify → assign → verify (not just OEE charts)",
    pain:
      "Stops repeat because dashboards don’t create governed actions. Ownership is unclear, and root-cause work dies in chat.",
    how:
      "PLC events + operator reason capture → routing rules by line/reason/team → CAPA-style tasks → verification checklist → KPI closure.",
    result:
      "Higher throughput and fewer repeated stops because every event becomes an owned, measurable loop.",
    icon: "factory"
  },
  {
    id: "mfg-quality-drift",
    industry: "manufacturing",
    title: "Quality drift: early detection + automatic containment workflow",
    pain:
      "Quality issues are found late (scrap/rework), and containment decisions are slow or inconsistent.",
    how:
      "Process parameters + batch context → deviation rules + correlation → hold/stop workflow + approvals → evidence + reporting.",
    result:
      "Less scrap and rework, faster containment, clearer accountability for corrective actions.",
    icon: "check"
  },
  {
    id: "mfg-energy-per-batch",
    industry: "manufacturing",
    title: "Energy intensity per batch/line with cost leakage detection",
    pain:
      "Energy cost is “invisible” per product, and waste hides inside normal variability.",
    how:
      "Meters + batch IDs/MES events → normalization rules → anomaly detection → investigation workflow + cost export.",
    result:
      "Clear cost drivers per product, faster waste detection, and margin protection tied to KPIs.",
    icon: "bolt"
  },
  {
    id: "mfg-maintenance-triggers",
    industry: "manufacturing",
    title: "Maintenance triggers (pragmatic predictive) from trends + symptoms",
    pain:
      "Unexpected stops and firefighting because maintenance is calendar-based or alarm-only.",
    how:
      "Vibration/temp/runtime counters + alarm history → trend+threshold logic → work order prompts + planned window routing.",
    result:
      "Fewer surprise failures and more predictable maintenance with realistic automation (no “AI magic” required).",
    icon: "wrench"
  },
  {
    id: "mfg-changeover-discipline",
    industry: "manufacturing",
    title: "Changeover discipline: checklists + KPI proof of improvement",
    pain:
      "Changeovers drift into tribal knowledge. Variability grows and the ‘why’ is unclear.",
    how:
      "Events + checklist steps → rule-based validation + time capture → noncompliance workflow → improvement KPIs.",
    result:
      "Shorter changeovers and less variability, with proof (KPIs) not opinions.",
    icon: "list"
  },
  {
    id: "mfg-line-bottlenecks",
    industry: "manufacturing",
    title: "Bottleneck visibility that generates actions (not reports)",
    pain:
      "Teams see bottlenecks but don’t convert them into owned improvements — the same constraints return.",
    how:
      "Cycle/queue signals → rule-based bottleneck detection → action backlog with owners → weekly outcome review KPIs.",
    result:
      "Continuous improvement becomes a system: fewer recurring bottlenecks, measurable throughput gains.",
    icon: "target"
  },
  {
    id: "mfg-safety-permits",
    industry: "manufacturing",
    title: "Safety permits & lockout events with traceable approvals",
    pain:
      "Permits are handled in paper/Excel. Missing traceability creates audit and safety risks.",
    how:
      "Permit events + equipment state → rule ladder + approvals + audit trail → closure KPIs and reporting.",
    result:
      "Lower compliance risk, cleaner audits, and fewer procedural violations.",
    icon: "shield"
  },
  {
    id: "mfg-shift-handover",
    industry: "manufacturing",
    title: "Shift handover: KPIs + issues + tasks in one governed flow",
    pain:
      "Handover depends on people. Issues repeat because nothing is tracked end-to-end.",
    how:
      "Line events + notes → KPI pack auto-generated → rule-based follow-up tasks → confirmation on next shift.",
    result:
      "Cleaner handovers, fewer repeated issues, and stable operations across shifts.",
    icon: "swap"
  },

  // CONSTRUCTION (1)
  {
    id: "construction-site-equipment",
    industry: "construction",
    title: "Site equipment utilization + theft-risk workflow",
    pain:
      "Equipment disappears or sits idle. GPS alone doesn’t create an operational response.",
    how:
      "Telematics + geofences + time windows → anomaly rules → verification steps → dispatch workflow → closure KPIs.",
    result:
      "Lower losses and higher utilization with a clear incident lifecycle.",
    icon: "crane"
  },

  // AGRICULTURE (4)
  {
    id: "agro-poultry-microclimate",
    industry: "agriculture",
    title: "Poultry house microclimate: alerts + regime-by-age control",
    pain:
      "Microclimate drift causes losses. Staff reacts late; settings don’t adapt to bird age and weather.",
    how:
      "Temp/humidity/airflow sensors + age profile + weather context → rules + alerts → action workflow; AI assists in tuning regimes.",
    result:
      "Less human factor, fewer losses, and measurable improvement from optimized regimes.",
    icon: "chicken"
  },
  {
    id: "agro-dairy-health",
    industry: "agriculture",
    title: "Dairy health trends: detect early stress and illness signals",
    pain:
      "Health issues are noticed too late. Vet interventions become reactive and expensive.",
    how:
      "Wearables + barn sensors → trend logic (activity/temp/rumination) → escalation ladder → tasks + evidence timeline.",
    result:
      "Earlier interventions, fewer severe cases, and better productivity KPIs.",
    icon: "cow"
  },
  {
    id: "agro-irrigation-water",
    industry: "agriculture",
    title: "Smart irrigation: soil moisture + leak detection + water KPI control",
    pain:
      "Overwatering wastes money; leaks go unnoticed; water KPIs are estimated, not measured.",
    how:
      "Moisture/flow/pressure sensors → rules by field zone + schedules → alerts + maintenance tasks → KPI dashboards.",
    result:
      "Lower water cost, fewer failures, and stable yield conditions with evidence.",
    icon: "drop"
  },
  {
    id: "agro-grain-storage",
    industry: "agriculture",
    title: "Grain storage: spoilage prevention with automated evidence",
    pain:
      "Temperature hotspots and humidity drift lead to spoilage; inspections are manual and inconsistent.",
    how:
      "Silo sensors → deviation rules + escalation ladder → actions (ventilation/inspection) → audit trail + reports.",
    result:
      "Reduced spoilage and clearer accountability with minimal supervision.",
    icon: "grain"
  },

  // ENERGY (1)
  {
    id: "energy-battery-health",
    industry: "energy",
    title: "Battery fleet health: predictive maintenance and safe operation limits",
    pain:
      "Battery degradation is gradual until failures hit. Alerts are noisy and lack context.",
    how:
      "BMS telemetry → trend+threshold logic + safe-limit governance → maintenance prompts → KPI tracking by site/fleet.",
    result:
      "Fewer incidents, better planning, and longer asset life — tied to measurable KPIs.",
    icon: "battery"
  },

  // ENVIRONMENT (1)
  {
    id: "env-emissions-map",
    industry: "environment",
    title: "Emissions & air quality: live map + evidence for regulators",
    pain:
      "Measurements exist but don’t translate into actionable control or audit-ready evidence.",
    how:
      "Sensors + wind context → anomaly detection → investigation workflows → geospatial dashboards + exportable reports.",
    result:
      "Faster response, clearer compliance posture, and defensible evidence when questioned.",
    icon: "leaf"
  },

  // SMART CITIES (1)
  {
    id: "smartcities-water-quality",
    industry: "smartcities",
    title: "City water quality: detect anomalies before citizens complain",
    pain:
      "Incidents are discovered via complaints. Response is slow and evidence is scattered.",
    how:
      "Distributed sensors → deviation rules + correlation by zones → dispatch workflow → closure KPIs + public-facing summaries.",
    result:
      "Faster response, fewer incidents, and accountability by zone/site.",
    icon: "city"
  },

  // LOGISTICS (1)
  {
    id: "logistics-route-integrity",
    industry: "logistics",
    title: "Route integrity: delays + temperature excursions + automatic claims pack",
    pain:
      "Delays and excursions are discovered late; claims/disputes become time-consuming and manual.",
    how:
      "Telemetry + route milestones → rule ladder → escalation → evidence timeline + automatic report pack for partners.",
    result:
      "Less dispute time, faster root cause, and lower loss exposure.",
    icon: "truck"
  }
];

/* -------------------------
   Use-cases carousel (filters + search + stable paging)
   Requires:
   #ucFilters .uc-chip[data-uc-filter]
   #ucSearch
   #ucTrack
   #ucPrev #ucNext #ucDots
------------------------- */
function setupUseCases() {
  const track = document.getElementById("ucTrack");
  const filters = document.getElementById("ucFilters");
  const search = document.getElementById("ucSearch");
  const prevBtn = document.getElementById("ucPrev");
  const nextBtn = document.getElementById("ucNext");
  const dots = document.getElementById("ucDots");

  if (!track) return;

  const chips = filters ? Array.from(filters.querySelectorAll(".uc-chip")) : [];
  let active = "all";
  let query = "";
  let page = 0;
  let perView = 1;
  let currentList = [];

  function computePerView() {
    const w = window.innerWidth;
    if (w >= 1100) return 3;
    if (w >= 760) return 2;
    return 1;
  }

  function iconSvg(kind) {
    // Minimal “non-emoji” inline icons; you can refine later without changing data.
    const s = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
    switch (kind) {
      case "pill":
        return `<svg viewBox="0 0 24 24" ${s}><path d="M8 16l8-8"/><path d="M7 17a5 5 0 0 1 0-7l3-3a5 5 0 0 1 7 7l-3 3a5 5 0 0 1-7 0z"/></svg>`;
      case "factory":
        return `<svg viewBox="0 0 24 24" ${s}><path d="M3 21V10l6 4V10l6 4V7l6 4v10z"/><path d="M3 21h18"/></svg>`;
      case "crane":
        return `<svg viewBox="0 0 24 24" ${s}><path d="M4 20h16"/><path d="M6 20V6h6l6 4v10"/><path d="M12 6v8"/><path d="M12 14h4"/></svg>`;
      case "truck":
        return `<svg viewBox="0 0 24 24" ${s}><path d="M3 7h12v10H3z"/><path d="M15 10h4l2 2v5h-6z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>`;
      case "battery":
        return `<svg viewBox="0 0 24 24" ${s}><path d="M7 7h10v10H7z"/><path d="M17 10h2v4h-2"/><path d="M10 12h4"/></svg>`;
      case "leaf":
        return `<svg viewBox="0 0 24 24" ${s}><path d="M21 3c-7 1-12 6-13 13 7-1 12-6 13-13z"/><path d="M8 16c-2 2-4 5-4 5"/></svg>`;
      case "city":
        return `<svg viewBox="0 0 24 24" ${s}><path d="M4 21V8l6-3v16"/><path d="M10 21V11l6-3v13"/><path d="M16 21V6l4 2v13"/></svg>`;
      case "bolt":
        return `<svg viewBox="0 0 24 24" ${s}><path d="M13 2L3 14h7l-1 8 12-14h-7z"/></svg>`;
      case "wrench":
        return `<svg viewBox="0 0 24 24" ${s}><path d="M21 7a6 6 0 0 1-8 5L7 18l-3-3 6-6a6 6 0 0 1 5-8l-3 3 3 3 3-3z"/></svg>`;
      case "check":
        return `<svg viewBox="0 0 24 24" ${s}><path d="M20 6L9 17l-5-5"/></svg>`;
      case "list":
        return `<svg viewBox="0 0 24 24" ${s}><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg>`;
      case "target":
        return `<svg viewBox="0 0 24 24" ${s}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v2"/><path d="M22 12h-2"/></svg>`;
      case "shield":
        return `<svg viewBox="0 0 24 24" ${s}><path d="M12 2l8 4v6c0 5-3 9-8 10C7 21 4 17 4 12V6z"/></svg>`;
      case "swap":
        return `<svg viewBox="0 0 24 24" ${s}><path d="M7 7h11l-3-3"/><path d="M17 17H6l3 3"/></svg>`;
      case "chicken":
        return `<svg viewBox="0 0 24 24" ${s}><path d="M7 13c0-4 3-7 7-7 2 0 4 1 5 3"/><path d="M8 14c1 3 4 5 7 5 2 0 4-1 5-3"/><path d="M14 9h.01"/><path d="M6 17l-2 2"/></svg>`;
      case "cow":
        return `<svg viewBox="0 0 24 24" ${s}><path d="M7 10c0-2 2-4 5-4s5 2 5 4v6c0 2-2 4-5 4s-5-2-5-4z"/><path d="M7 12H4"/><path d="M17 12h3"/></svg>`;
      case "drop":
        return `<svg viewBox="0 0 24 24" ${s}><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z"/></svg>`;
      case "grain":
        return `<svg viewBox="0 0 24 24" ${s}><path d="M12 20V4"/><path d="M12 6c-3 1-5 3-5 6 3 0 5-2 5-6z"/><path d="M12 10c3 1 5 3 5 6-3 0-5-2-5-6z"/></svg>`;
      default:
        return `<svg viewBox="0 0 24 24" ${s}><circle cx="12" cy="12" r="9"/></svg>`;
    }
  }

  function matches(u) {
    const okIndustry = active === "all" ? true : u.industry === active;
    const blob = `${u.title} ${u.pain} ${u.how} ${u.result}`.toLowerCase();
    const okQuery = query ? blob.includes(query) : true;
    return okIndustry && okQuery;
  }

  function renderCards() {
    currentList = useCases.filter(matches);

    track.innerHTML = currentList
      .map(
        (u) => `
      <article class="pc-card uc-card" data-industry="${u.industry}">
        <div class="uc-head">
          <div class="uc-badge">${u.industry.replace("smartcities","smart cities").toUpperCase()}</div>
          <div class="uc-icon" aria-hidden="true">${iconSvg(u.icon)}</div>
        </div>

        <h3 class="uc-title">${u.title}</h3>

        <div class="uc-lines">
          <p class="uc-line"><strong>Pain:</strong> ${u.pain}</p>
          <p class="uc-line"><strong>How:</strong> ${u.how}</p>
          <p class="uc-line"><strong>Result:</strong> ${u.result}</p>
        </div>
      </article>
    `
      )
      .join("");

    // reset carousel paging
    page = 0;
    perView = computePerView();
    updateDots();
    applyCarouselPosition();
    updateNavState();
  }

  function pagesCount() {
    const n = currentList.length || 0;
    return Math.max(1, Math.ceil(n / perView));
  }

  function updateDots() {
    if (!dots) return;
    const total = pagesCount();
    dots.innerHTML = "";
    for (let i = 0; i < total; i++) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "dot" + (i === page ? " is-active" : "");
      b.addEventListener("click", () => {
        page = i;
        applyCarouselPosition();
        updateDots();
        updateNavState();
      });
      dots.appendChild(b);
    }
  }

  function applyCarouselPosition() {
    // Move by viewport width, not card width → stable, no jitter
    const viewport = track.closest(".pc-viewport");
    if (!viewport) return;
    const x = page * viewport.clientWidth;
    track.style.transform = `translateX(${-x}px)`;
  }

  function updateNavState() {
    const total = pagesCount();
    if (prevBtn) prevBtn.disabled = page <= 0;
    if (nextBtn) nextBtn.disabled = page >= total - 1;
  }

  function onResize() {
    const newPerView = computePerView();
    if (newPerView !== perView) {
      perView = newPerView;
      page = Math.min(page, pagesCount() - 1);
      updateDots();
    }
    applyCarouselPosition();
    updateNavState();
  }

  // chips
  chips.forEach((ch) => {
    ch.addEventListener("click", () => {
      chips.forEach((x) => x.classList.remove("is-active"));
      ch.classList.add("is-active");
      active = ch.dataset.ucFilter || "all";
      renderCards();
    });
  });

  // search
  search?.addEventListener("input", () => {
    query = (search.value || "").trim().toLowerCase();
    renderCards();
  });

  // arrows
  prevBtn?.addEventListener("click", () => {
    page = Math.max(0, page - 1);
    applyCarouselPosition();
    updateDots();
    updateNavState();
  });

  nextBtn?.addEventListener("click", () => {
    page = Math.min(pagesCount() - 1, page + 1);
    applyCarouselPosition();
    updateDots();
    updateNavState();
  });

  // expose update hook for language changes (cards are EN-only now)
  window.__updateUseCases = () => {
    // keep same filter/search state
    renderCards();
  };

  // init
  renderCards();
  window.addEventListener("resize", onResize, { passive: true });
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

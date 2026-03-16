window.translations = window.translations || {};
const translations = window.translations; 

translations.en = {
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
    "There is no “single workflow” or “one mechanism” — logic grows organically with your operations.",

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

  // RIGHT SIDE — Typical outcomes (array is expected by your JS)
  aboutOutcomes: [
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

  // PLATFORM (mapped to your current HTML keys)
  "platform.eyebrow": "Platform",
  "platform.title": "Built for fast change — and serious scale",
  "platform.subtitle":
    "You describe logic as rules and processes. The platform executes them consistently — at scale.",

  // HTML expects platform.cards.0/1/2.*
  "platform.cards.0.title": "Any process complexity — without code. And it actually runs.",
  "platform.cards.0.text":
    "Model processes as logic: conditions, routes, approvals, escalations, KPIs. " +
    "Describe what must happen — MITE takes care of execution, consistency, and traceability. " +
    "Complexity can grow without turning into custom-code chaos.",
  "platform.cards.0.meta": "Less dev friction • faster iterations • clearer ownership",

  "platform.cards.1.title": "Predictable scaling — even when complexity grows",
  "platform.cards.1.text":
    "The same operational model and building blocks support many scenarios across sites, teams, and time. " +
    "You scale outcomes, not technical complexity.",
  "platform.cards.1.meta": "Scale outcomes, not technical debt",

  "platform.cards.2.title": "Future-proof by design: open, flexible, AI-readable",
  "platform.cards.2.text":
    "Transparent logic and structured data make the system easy to evolve and explain. " +
    "You avoid lock-in to legacy stacks and keep the platform adaptable to modern tooling and AI-assisted work.",
  "platform.cards.2.meta": "Built for tomorrow’s operations",

  // HTML expects platform.ci.*
  "platform.ci.tag": "Connectivity & Integration",
  "platform.ci.title": "Works with real industrial environments",
  "platform.ci.chip.onpremOrCloud": "On-prem / cloud / hybrid",
  "platform.ci.chip.rbac": "Role-based access",
  "platform.ci.note":
    "There is no single “right” protocol stack in the real world. Devices, networks, and constraints differ by site — " +
    "so MITE adapts the integration layer to your reality instead of forcing architectural compromises.",

  // HTML expects platform.story.title + platform.story.text
  "platform.story.title": "Why this matters in practice",
  "platform.story.text":
    "When a customer needs a new mechanism, we usually generalize it at platform level instead of building a one-off feature. " +
    "That’s why improvements arrive in hours or days — and why the platform gets " +
    "<span class='highlighting'>stronger with every real deployment.</span>",

  // HIGHLIGHTS (mapped highlight.1..6 -> highlights.items.0..5)
  "highlights.eyebrow": "MITE Platform Highlights",
  "highlights.title": "An execution system for operations — not another dashboard layer",
  "highlights.subtitle":
    "You get a structured data sandbox plus tools to build any control logic and operational experience — fast.",

  "highlights.items.0.tag": "BUSINESS LOGIC",
  "highlights.items.0.title": "Any process complexity  — described as logic",
  "highlights.items.0.text":
    "From simple alarms to multi-step execution with approvals, escalations, SLAs, and KPIs. Change the rules in hours when reality changes — without code rewrites.",
  "highlights.items.0.meta": "If you can describe the process, you can run it.",

  "highlights.items.1.tag": "Connectivity",
  "highlights.items.1.title": "Any protocols, any vendors — one clean model",
  "highlights.items.1.text":
    "Connect sensors, PLCs, gateways, third-party systems, and manual inputs. Normalize once, then reuse the same structured data everywhere.",
  "highlights.items.1.meta": "No “one stack fits all” fantasies — we adapt to site reality.",

  "highlights.items.2.tag": "Scale",
  "highlights.items.2.title": "Production scale by design",
  "highlights.items.2.text":
    "Billions of records, heavy telemetry, thousands of concurrent users, and analytics running continuously — this is normal mode, not a “later upgrade",
  "highlights.items.2.meta": "Performance is a feature, not an afterthought.",

  "highlights.items.3.tag": "Insights",
  "highlights.items.3.title": "AI-assisted patterns, not manual hunting",
  "highlights.items.3.text":
    "Surface dependencies, risks, and anomalies without relying on “one expert who knows everything”. Bring insights straight into execution.",
  "highlights.items.3.meta": "Less human factor • more repeatable outcomes.",

  "highlights.items.4.tag": "Experience",
  "highlights.items.4.title": "Built for real roles — not one UI for everyone",
  "highlights.items.4.text":
    "Operations, engineering, and management need different views. MITE supports multiple UI patterns (tables, maps, cards, timelines, reports) on top of the same governed model.",
  "highlights.items.4.meta": "Same data truth • unlimited operational experiences.",

  "highlights.items.5.tag": "Value",
  "highlights.items.5.title": "Profit-driven results",
  "highlights.items.5.text":
    "Every loop is measurable: fewer incidents, lower losses, cleaner compliance, faster rollouts — because actions are tied to results, not to “monitoring”.",
  "highlights.items.5.meta": "IoT as a growth driver, not a cost center.",

  // USE CASES header + filters + search (already matching your HTML)
  "useReal.eyebrow": "Real use cases",
  "useReal.title": "18 scenarios with pain → execution → measurable outcome",
  "useReal.subtitle":
    "Short cards now (trust-building). Later we can expand each into a dedicated page with full mechanics, evidence, and screenshots.",

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

  // HOW (mapped how.step1..3 -> how.steps.0..2, and fixed output key)
  "how.eyebrow": "How it works",
  "how.title": "Three steps from device to decision",
  "how.subtitle": "From raw signals to actions, evidence, and KPI outcomes — in days, not months.",

  "how.steps.0.tag": "2-5 DAYS",
  "how.steps.0.title": "Data in. Clean model out.",
  "how.steps.0.text":
    "Collect & normalize your reality (in days). Providers push telemetry to your endpoint — we ingest it and turn raw events into a clean, queryable operational model.",
  "how.steps.0.output":
    "a normalized data “sandbox” (assets, sites, routes, context, timestamps) ready for logic and execution.",
  "how.steps.0.micro": "Raw → normalized → usable",

  "how.steps.1.tag": "3-5 Days",
  "how.steps.1.title": "Turn data into logic.",
  "how.steps.1.text":
    "Define logic: triggers, workflows, KPIs. Configure what matters: thresholds, anomaly patterns, approvals, escalation paths, SLA timers, and KPI definitions — fast, with full traceability.",
  "how.steps.1.output":
    "clear “if-this-then-that” operations, plus dashboards and audit-ready evidence.",
  "how.steps.1.micro": "Events → decisions → actions",

  "how.steps.2.tag": "GO-LIVE",
  "how.steps.2.title": "Execute, measure, improve",
  "how.steps.2.text":
    "Execute → measure → improve. MITE runs the loop continuously: triggers actions, stores evidence, tracks KPI impact, and helps you iterate safely — without breaking production.",
  "how.steps.2.output":
    "stable process, measurable results, and a feedback process your team can trust.",
  "how.steps.2.micro": "Actions → evidence → KPI outcomes",

  // PRICING (already matches your HTML)
  "pricing.eyebrow": "Pricing",
  "pricing.title": "Start free, scale predictably",
  "pricing.subtitle": "Validate one business process, then expand to sites, fleets, or full portfolios.",

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
  "pricing.plan2.li4": "Priority response & escalation",
  "pricing.plan2.cta": "Talk to us",

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

  // TESTIMONIALS (mapped testimonials.t1..t4 -> testimonials.items.0..3)
  "testimonials.eyebrow": "Customer voice",
  "testimonials.title": "Teams choose MITE when they need outcomes",
  "testimonials.subtitle": "A few examples of what customers value most.",

  "testimonials.items.0.text":
    "“Cold-chain reporting stopped being a monthly nightmare. We have one timeline, one audit trail, and reports in minutes — not days.”",
  "testimonials.items.0.meta": "Quality & Compliance Lead · Pharma distribution",

  "testimonials.items.1.text":
    "“We changed logic weekly during rollout — no tickets to devs. When operations changed, the system changed immediately.”",
  "testimonials.items.1.meta": "Head of Engineering · Distributed infrastructure",

  "testimonials.items.2.text":
    "“Downtime is no longer ‘a dashboard problem’. Each stop creates an owned workflow, and KPIs show if we actually fixed it.”",
  "testimonials.items.2.meta": "Operations Director · Manufacturing",

  "testimonials.items.3.text":
    "“Scaling became predictable: same data model, same mechanisms — different sites. No ‘integration snowflakes’.”",
  "testimonials.items.3.meta": "Program Manager · Multi-site rollout",

  // FAQ (mapped faq.q1..q4 -> faq.items.0..3)
  "faq.eyebrow": "FAQ",
  "faq.title": "What ops and IT teams ask before going live",
  "faq.subtitle": "Real operational questions. Clear, practical answers.",

  "faq.items.0.q": "Do we need developers to change logic and workflows?",
  "faq.items.0.a":
    "No. In MITE, processes are described as declarative logic — you define what should happen, not how to code it. " +
    "Operations teams can change business logic, adjust thresholds, routing rules, approvals, escalation ladders, and KPIs in hours — without rebuilding systems or waiting in a development backlog. " +
    "Logic evolves with operations, not with code debt.",

  "faq.items.1.q": "How does MITE integrate with our existing landscape?",
  "faq.items.1.a":
    "MITE supports industrial and web protocols (MQTT, LoRaWAN, Modbus, OPC UA, REST, webhooks) and exposes open APIs. " +
    "We adapt to your environment — on-prem, cloud, or hybrid — and integrate with ERP, MES, SCADA, data lakes, or custom systems. " +
    "There is no forced stack or architectural lock-in.",

  "faq.items.2.q": "Is MITE suitable for regulated and GDPR-controlled environments?",
  "faq.items.2.a":
    "Yes. MITE includes role-based access control (RBAC), immutable audit trails, configurable data retention policies, and export logging. " +
    "Every action (view, edit, approve, export) is traceable. Evidence packs are generated automatically from real workflows — not assembled manually after inspections. " +
    "Compliance becomes governed system behavior, not spreadsheet coordination.",

  "faq.items.3.q": "What if we need a new mechanism or capability?",
  "faq.items.3.a":
    "If the requirement improves the platform at a systemic level (not a narrow one-off case), we typically generalize it and deliver it quickly. " +
    "This means you don’t pay for isolated custom plumbing — and the platform becomes stronger with every real deployment. " +
    "Your use case contributes to the evolution of the core, not to technical fragmentation.",

  "faq.trust":
    "Built for regulated industries. " +
    "GDPR-ready. Role-based access. Immutable audit trail. " +
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
};

translations.ru = translations.ru || {
  // NAV
  "nav.about": "Почему MITE",
  "nav.platform": "Платформа",
  "nav.solutions": "Кейсы",
  "nav.pricing": "Цены",
  "nav.faq": "FAQ",
  "nav.contact": "Контакты",
  "nav.demoBtn": "Запросить демо",

  // SEO
  "seo.title": "MITE — промышленная платформа управления операциями и данными",
  "seo.description":
    "MITE объединяет операционные данные, задаёт правила работы процессов и обеспечивает их исполнение. Платформа превращает разрозненные сигналы и события в управляемую систему действий.",

  // HERO
  "hero.kicker": "Промышленная IIoT платформа",
  "hero.title": "Не просто ещё одна IIoT-платформа. <span>MITE меняет правила игры.</span>",
  "hero.subtitle":
  "Объедините данные с оборудования, систем и сервисов в единой модели. " +
  "Задайте правила, процессы и сценарии реакции — MITE обеспечивает их исполнение и зафиксирует результат. " +
  "Каждое событие и каждое действие сохраняются и используются для анализа, обучения и последующего улучшения процессов.",
  "hero.secondaryCta": "Посмотреть платформу",
  "hero.meta1": "От пилотного проекта до промышленной эксплуатации — готово к внедрению",
  "hero.meta2": "Декларативная логика — описываете что делать, а не как кодить",
  "hero.meta3": "Любая сложность логики • любая промышленная реальность • быстрые изменения",
  "hero.badge": "<strong>«Просто, понятно и надёжно — ровно то, чего ждут бизнес-команды»</strong>",


  // ABOUT / POSITIONING
  "about.eyebrow": "Позиционирование",
  "about.title": "Одна система под вашим контролем: от данных — к управляемым процессам",
  "about.text":
    "MITE превращает операционные данные в единую управляемую систему — а не набор разрозненных сигналов и процессов.\n\n" +
    "Мы работаем с вашей реальностью: устройства, шлюзы, PLC, сервисы, внешние системы. Разбираем входящие события в чистую структуру и сохраняем их в согласованной модели данных.\n\n" +
    "Дальше вы наращиваете логику сколько нужно: правила, процессы, согласования, KPI. Вы описываете, что должно происходить — MITE обеспечивает, как это исполняется.\n\n" +
    "Дашборды показывают реальное исполнение и результат. Процессы адаптируются за часы или дни — без «ожидания разработчиков» как узкого места.",

  "about.point1.title": "Чистая песочница данных — ваша реальность, но структурированная",
  "about.point1.text":
    "Все сигналы становятся одной упорядоченной операционной моделью (таблицы + контекст), и вы перестаёте тонуть в разрозненных интеграциях и несовместимых форматах. " +
    "Вы работаете с реальностью — единое, последовательное основание для логики, исполнения и анализа.",

  "about.point2.title": "Логика растёт вместе с операциями — а не вместе с техдолгом",
  "about.point2.text":
    "Процессы задаются декларативно: условия, маршрутизация, согласования, эскалации, KPI. Добавляйте новое поведение быстро — без переписывания систем, " +
    "с любым количеством параллельных механизмов, потоков и моделей принятия решений. " +
    "Нет «единственного workflow» или «одного механизма» — логика органично растёт вместе с вашими операциями.",

  "about.point3.title": "Исполнение управляемо — паттерны анализируются и визуализируются",
  "about.point3.text":
    "MITE фиксирует что произошло, когда и почему — во всех процессах и слоях логики. Данные исполнения анализируются постоянно: " +
    "паттерны, отклонения, узкие места и повторяющееся поведение подсвечиваются и визуализируются, а не прячутся в логах и таблицах. " +
    "Ответственность, причина и эффект всегда навиду.",

  "about.point4.title": "Изменения — норма: процессы должны адаптироваться без остановки",
  "about.point4.text":
    "Бизнес не стоит на месте: правила меняются, приоритеты сдвигаются, условия эволюционируют. " +
    "С MITE логика и процессы адаптируются за часы или дни, " +
    "при этом текущие операции продолжают работать и генерировать данные — подпитывая следующую итерацию, а не ломая её.",

  "about.cta": "Задать вопрос",
  "about.side.label": "Типичный результат",

  // RIGHT SIDE — Typical outcomes
  aboutOutcomes: [
    {
      num: "Одна",
      title: "операционная система",
      text: "Решения на основе паттернов, а не интуиции",
      bullets: [
        "Единый источник правды  — данные превращаются в инсайты",
        "Центральное управление правилами и изменениями. Узкие места объяснимы",
        "Дашборды показывают результат, а не шум. Видны паттерны и тренды",
        "Итог: решения опираются на поведение системы, а не на предположения"
      ]
    },
    {
      num: "Дни",
      title: "до рабочего пилота",
      text: "Контроль появляется с первого дня",
      bullets: [
        "Ваши данные нормализованы в одной модели. Прозрачно, что работает и почему",
        "Реальное исполнение, ответственность и поведение системы видны сразу",
        "Первый процесс работает end-to-end, отклонения подсвечены",
        "Итог: управляемый процесс с измеримыми KPI — по дизайну, а не «на героизме» за часы/дни"
      ]
    },
    {
      num: "Стабильное",
      title: "масштабирование без хаоса",
      text: "Успешные паттерны переиспользуются, а не внедряются заново. Нужна новая логика - она уже тут. Масштабируемая стабильность вместо хрупкого роста",
      bullets: [
        "Плейбуки внедрения вместо разовых «под каждый объект»",
        "Много механизмов — одна управляемая модель исполнения",
        "Предсказуемое поведение на объектах, процессы работают надёжно на масштабе",
        "Итог: масштаб остаётся предсказуемым даже при росте операционной сложности и масштабах"
      ]
    },
    {
      num: "Быстрая",
      title: "адаптация к изменениям",
      text: "Операции меняются ежедневно — система успевает.",
      bullets: [
        "Обновляйте правила и процессы за часы или дни",
        "Безопасные итерации с мгновенной обратной связью. Каждое изменение генерирует данные для следующего улучшения",
        "Новые правила сосуществуют со старыми или заменяют их без простоев",
        "Итог: система меняется в месте с бизнесом, а не живет первым внедрением в прошлом"
      ]
    }
  ],

  // PLATFORM
  "platform.eyebrow": "Платформа",
  "platform.title": "Создано для быстрых изменений. Рассчитано на промышленный масштаб.",
  "platform.subtitle":
    "Вы описываете логику как правила и процессы. Платформа обеспечивает исполнение и контроль.",

"platform.cards.0.title":
  "Любая сложность процесса — без написания кода. И это работает в реальной эксплуатации.",

"platform.cards.0.text":
  "Моделируйте процессы как систему правил: условия, маршруты, согласования, эскалации, KPI. " +
  "Вы определяете, что должно произойти — MITE гарантирует исполнение, согласованность и полную трассируемость. " +
  "С ростом сложности система остаётся управляемой — без разрастания кастомных доработок.",

"platform.cards.0.meta":
  "Меньше зависимости от разработки • быстрее корректировки • изменения без хаоса",

  "platform.cards.1.title": "Предсказуемое масштабирование — даже когда сложность растёт",
  "platform.cards.1.text":
    "Одна и та же операционная модель и строительные блоки поддерживают множество сценариев на разных объектах, в разных командах, в разных интерфейсах, со своей уникальной логикой и задачами. " +
    "Вы масштабируете результат, а не техническую сложность.",
  "platform.cards.1.meta": "Масштабируйте результат, а не техдолг",

  "platform.cards.2.title": "Будущее-устойчиво по дизайну: открыто, гибко, читаемо для AI",
  "platform.cards.2.text":
    "Прозрачная логика и структурированные данные упрощают развитие и объяснимость системы. " +
    "Вы избегаете привязки к устаревшим стекам и сохраняете платформу адаптивной к современным инструментам и AI-помощникам.",
  "platform.cards.2.meta": "Платформа для завтрашних операций",

  "platform.ci.tag": "Связность и интеграции",
  "platform.ci.title": "Работает в реальной промышленной среде",
  "platform.ci.chip.onpremOrCloud": "On-prem / cloud / hybrid",
  "platform.ci.chip.rbac": "Ролевой доступ",
  "platform.ci.note":
    "В реальном мире нет единственно «правильного» стека протоколов. Устройства, сети и ограничения различаются по объектам — " +
    "поэтому MITE подстраивает слой интеграций под вашу реальность, а не заставляет вас идти на архитектурные компромиссы.",

  "platform.story.title": "Почему это важно на практике",
  "platform.story.text":
    "Когда заказчику нужен новый механизм, мы обычно обобщаем его на уровне платформы, а не делаем разовый «костыль». " +
    "Поэтому улучшения внедряются за часы или дни — и платформа " +
    "<span class='highlighting'>становится сильнее с каждым реальным внедрением.</span>",

  // HIGHLIGHTS
  "highlights.eyebrow": "MITE Platform Highlights",
  "highlights.title": " Не ещё один дашборд — система управления бизнесом",
  "highlights.subtitle":
    "Единая модель данных и инструменты, чтобы быстро задавать правила, автоматизировать действия и управлять операциями.",

  "highlights.items.0.tag": "БИЗНЕС-ЛОГИКА",
  "highlights.items.0.title": "Любая сложность процесса — описывается как логика",
  "highlights.items.0.text":
    "От простых тревог до многошагового исполнения с согласованиями, эскалациями, SLA и KPI. Меняйте правила за часы, когда меняется реальность — без переписывания кода.",
  "highlights.items.0.meta": "Если вы можете описать процесс — вы можете его внедрить в MITE.",

  "highlights.items.1.tag": "Связность",
  "highlights.items.1.title": "Любые протоколы, любые вендоры — одна чистая модель",
  "highlights.items.1.text":
    "Подключайте датчики, PLC, шлюзы, сторонние системы и ручные вводы. Нормализуйте один раз — и переиспользуйте те же структурированные данные везде.",
  "highlights.items.1.meta": "Без фантазий «один стек для всего» — адаптируемся к реальности объекта.",

  "highlights.items.2.tag": "Масштаб",
  "highlights.items.2.title": "Продакшн-масштаб по дизайну",
  "highlights.items.2.text":
    "Миллиарды записей, тяжёлая телеметрия, тысячи одновременных пользователей и непрерывная аналитика — это нормальный режим, а не «апгрейд потом».",
  "highlights.items.2.meta": "Производительность — это фича, а не «потом разберёмся».",

  "highlights.items.3.tag": "Инсайты",
  "highlights.items.3.title": "AI-подсказки по паттернам — вместо ручного «поиска иголок»",
  "highlights.items.3.text":
    "Подсвечивайте зависимости, риски и аномалии без опоры на «одного эксперта, который всё помнит». Встраивайте инсайты прямо в исполнение.",
  "highlights.items.3.meta": "Меньше человеческого фактора • больше повторяемых результатов.",

  "highlights.items.4.tag": "Опыт",
  "highlights.items.4.title": "Под реальные роли — не один интерфейс для всех",
  "highlights.items.4.text":
    "Операции, инженерия и менеджмент требуют разных представлений. MITE поддерживает разные UI-паттерны (таблицы, карты, карточки, таймлайны, отчёты) поверх одной управляемой модели.",
  "highlights.items.4.meta": "Одна правда данных • неограниченные операционные интерфейсы.",

  "highlights.items.5.tag": "Ценность",
  "highlights.items.5.title": "Результаты, которые дают прибыль",
  "highlights.items.5.text":
    "Каждый цикл измерим: меньше инцидентов, меньше потерь, чище комплаенс, быстрее внедрения — потому что действия связаны с результатом, а не с «мониторингом».",
  "highlights.items.5.meta": "IoT как драйвер роста, а не центр затрат.",

  // USE CASES header + filters + search
  "useReal.eyebrow": "Реальные кейсы",
  "useReal.title": "18 сценариев: боль → исполнение → измеримый результат",
  "useReal.subtitle": "Внедренные истории успеха, где мы рассказываем как платформа работает в реальных задачах. Как помогает сократить брак и учеличить производительность, найти точки роста или понять причины убытков. Читайте ниже наши истории успеха. ",
  "uc.filter.all": "Все",
  "uc.filter.pharma": "Фарма",
  "uc.filter.manufacturing": "Производство",
  "uc.filter.agriculture": "Сельское хозяйство",
  "uc.filter.energy": "Энергетика",
  "uc.filter.environment": "Экология",
  "uc.filter.smartcities": "Умные города",
  "uc.filter.logistics": "Логистика",
  "uc.filter.construction": "Строительство",
  "uc.search.placeholder": "Поиск по кейсам…",

  // HOW
  "how.eyebrow": "Как это работает",
  "how.title": "Три шага от устройства до решения",
  "how.subtitle": "От сырых сигналов к действиям, доказательствам и KPI — за дни, а не за месяцы.",

  "how.steps.0.tag": "2–5 ДНЕЙ",
  "how.steps.0.title": "Данные вход → чистая модель выход.",
  "how.steps.0.text":
    "Собираем и нормализуем вашу реальность (за дни). Поставщики отправляют телеметрию на наш endpoint — мы принимаем её и превращаем сырые события в чистую, доступную для запросов операционную модель.",
  "how.steps.0.output":
    "нормализованная «песочница данных» (активы, площадки, маршруты, контекст, метки времени), готовая для логики и исполнения.",
  "how.steps.0.micro": "Сигналы → структура → рабочие данные",

  "how.steps.1.tag": "3–5 ДНЕЙ",
  "how.steps.1.title": "Превратите данные в логику.",
  "how.steps.1.text":
    "Определяйте логику: триггеры, процессы, KPI. Настройте важное: пороги, паттерны аномалий, согласования, пути эскалации, таймеры SLA и определения KPI — быстро и с полной трассируемостью.",
  "how.steps.1.output":
    "понятные операции «если-то» плюс дашборды и доказательная база, готовая для аудита.",
  "how.steps.1.micro": "Событие → решение → действие",

  "how.steps.2.tag": "GO-LIVE",
  "how.steps.2.title": "Исполнение → измерение → улучшение",
  "how.steps.2.text":
    "MITE поддерживает непрерывный цикл работы процессов: система запускает действия, фиксирует результат, отслеживает влияние на KPI и позволяет безопасно корректировать логику без остановки эксплуатации.",
  "how.steps.2.output":
    "стабильный процесс, измеримые результаты и контур обратной связи, которому команда может доверять.",
  "how.steps.2.micro": "Действия → результат → улучшение KPI",

  // PRICING
  "pricing.eyebrow": "Цены",
  "pricing.title": "Начните бесплатно — масштабируйтесь предсказуемо",
  "pricing.subtitle": "Проверьте один бизнес-процесс, затем расширяйте на площадки, парки или целые портфели.",

  "pricing.free.label": "Бесплатно",
  "pricing.free.name": "Start-ups",
  "pricing.free.tagline": "Проверьте первый операционный бизнес-процесс.",
  "pricing.free.price": "€0 / месяц",
  "pricing.free.note": "Устройства: до 10 · Платформа: полный доступ · Поддержка: best effort",
  "pricing.free.li1": "До 10 подключённых устройств",
  "pricing.free.li2": "Полный доступ ко всем функциям платформы",
  "pricing.free.li3": "Поддержка: как есть (без SLA)",
  "pricing.free.li4": "API и экспорт включены",
  "pricing.free.cta": "Запросить доступ",

  "pricing.plan1.label": "Для пилотов",
  "pricing.plan1.name": "Start",
  "pricing.plan1.tagline": "Запустите пилот и подтвердите измеримый эффект.",
  "pricing.plan1.price": "€99 / месяц",
  "pricing.plan1.note": "Устройства: 10–100 · Платформа: полный доступ · Поддержка: 8×5",
  "pricing.plan1.li1": "10–100 подключённых устройств",
  "pricing.plan1.li2": "Полный доступ ко всем функциям платформы",
  "pricing.plan1.li3": "Поддержка: 8×5 в рабочие часы",
  "pricing.plan1.li4": "Запросы фич учитываются в roadmap",
  "pricing.plan1.cta": "Начать пилот",

  "pricing.plan2.label": "Для внедрений",
  "pricing.plan2.name": "Scale",
  "pricing.plan2.tagline": "Масштабирование с предсказуемой поддержкой.",
  "pricing.plan2.price": "От €99 / месяц",
  "pricing.plan2.note": "Устройства: 100–1000 · Платформа: полный доступ · Поддержка: 24×7",
  "pricing.plan2.li1": "100–1000 подключённых устройств",
  "pricing.plan2.li2": "Полный доступ ко всем функциям платформы",
  "pricing.plan2.li3": "Поддержка: 24×7",
  "pricing.plan2.li4": "Приоритетная реакция и эскалации",
  "pricing.plan2.cta": "Связаться",

  "pricing.plan3.label": "Enterprise / OEM",
  "pricing.plan3.name": "Enterprise",
  "pricing.plan3.tagline": "Когда MITE становится операционным ядром.",
  "pricing.plan3.price": "Индивидуально",
  "pricing.plan3.note": "Устройства: без ограничений · Платформа: полный + расширения · SLA: индивидуально",
  "pricing.plan3.li1": "Неограниченно устройств и мультисайт-внедрения",
  "pricing.plan3.li2": "Полный доступ + расширения",
  "pricing.plan3.li3": "Индивидуальный SLA и модель управления",
  "pricing.plan3.li4": "OEM / white-label опции",
  "pricing.plan3.li5": "Выделенный техконтакт и архитектурные воркшопы включены",
  "pricing.plan3.cta": "Запланировать встречу",

  // TESTIMONIALS
  "testimonials.eyebrow": "Голос клиентов",
  "testimonials.title": "MITE выбирают, когда нужны результаты",
  "testimonials.subtitle": "Несколько примеров того, что клиенты ценят больше всего.",

  "testimonials.items.0.text":
    "«Отчёты по холодовой цепи перестали быть ежемесячным кошмаром. Один таймлайн, один audit trail, отчёты за минуты — не за дни.»",
  "testimonials.items.0.meta": "Руководитель QA/Compliance · Фарма-дистрибуция",

  "testimonials.items.1.text":
    "«Когда нам надо поменять логику каждую - мы ее меняем — без тикетов разработчикам. Поменялись операции — сразу поменялась система.»",
  "testimonials.items.1.meta": "Head of Engineering · Распределённая инфраструктура",

  "testimonials.items.2.text":
    "«Простой больше не ‘проблема дашборда’. Каждая остановка запускает управляемый workflow, а KPI показывает, исправили мы причину или нет.»",
  "testimonials.items.2.meta": "Директор по операциям · Производство",

  "testimonials.items.3.text":
    "«Масштабирование стало предсказуемым: одна модель данных, одни механизмы — разные площадки. Без накопления индивидуальных интеграций под каждый объект.»",
  "testimonials.items.3.meta": "Program Manager · Мультисайт-внедрение",

  // FAQ
  "faq.eyebrow": "FAQ",
  "faq.title": "Что ops и IT спрашивают перед go-live",
  "faq.subtitle": "Реальные операционные вопросы. Чёткие практичные ответы.",

  "faq.items.0.q": "Нужны ли разработчики, чтобы менять логику и процессы?",
  "faq.items.0.a":
    "Нет. В MITE процессы описываются декларативной логикой — вы задаёте, что должно происходить, а не как это кодить. " +
    "Операционные команды могут менять бизнес-логику, пороги, правила маршрутизации, согласования, лестницы эскалаций и KPI за часы — без перестройки систем и без ожидания очереди у разработчиков. " +
    "Логика эволюционирует вместе с операциями, а не вместе с техдолгом.",

  "faq.items.1.q": "Как MITE интегрируется с нашей текущей инфраструктурой?",
  "faq.items.1.a":
    "MITE поддерживает промышленные и веб-протоколы (MQTT, LoRaWAN, Modbus, OPC UA, REST, webhooks) и предоставляет открытые API. " +
    "Мы адаптируемся к вашей среде — on-prem, cloud или hybrid — и интегрируемся с ERP, MES, SCADA, data lake или кастомными системами. " +
    "Нет навязанного стека и архитектурной привязки.",

  "faq.items.2.q": "Подходит ли MITE для регулируемых сред и контуров с GDPR?",
  "faq.items.2.a":
    "Да. В MITE есть ролевой доступ (RBAC), неизменяемые audit trail, настраиваемые политики хранения данных и логирование экспорта. " +
    "Любое действие (просмотр, изменение, согласование, экспорт) трассируется. Evidence-пакеты генерируются автоматически из реальных workflow — а не собираются вручную перед проверкой. " +
    "Комплаенс становится управляемым поведением системы, а не координацией через Excel.",

  "faq.items.3.q": "Что если нам нужен новый механизм или возможность?",
  "faq.items.3.a":
    "Если требование улучшает платформу системно (а не является узким разовым случаем), мы обычно обобщаем его и быстро дорабатываем. " +
    "Это значит: вы не платите за изолированную кастомную доработку — а платформа становится сильнее с каждым реальным внедрением. " +
    "Ваш кейс работает на эволюцию ядра, а не на техническую фрагментацию.",

  "faq.trust":
    "Создано для регулируемых отраслей. " +
    "GDPR-готово. Ролевой доступ. Неизменяемый audit trail. " +
    "Никаких теневых таблиц. Никакой скрытой логики. Никакой ручной сборки доказательств.",

  // CONTACT
  "contact.eyebrow": "Контакты",
  "contact.title": "Скажите, что вы хотите контролировать — мы предложим первый быстрый win",
  "contact.subtitle":
    "Опишите инфраструктуру и желаемый результат. Мы предложим первый измеримый эффект и покажем, как он масштабируется.",
  "contact.nameLabel": "ФИО",
  "contact.namePlaceholder": "Ваше имя",
  "contact.emailLabel": "Рабочий email",
  "contact.emailPlaceholder": "you@company.com",
  "contact.companyLabel": "Компания",
  "contact.companyPlaceholder": "Название компании",
  "contact.sizeLabel": "Масштаб",
  "contact.sizePlaceholder": "Площадки / линии / активы",
  "contact.messageLabel": "Чего вы хотите добиться с MITE?",
  "contact.messagePlaceholder": "Опишите текущую ситуацию и желаемый результат.",
  "contact.submit": "Отправить запрос",
  "contact.legal":
    "Отправляя форму, вы соглашаетесь, что мы можем связаться с вами по MITE и обработать данные согласно нашей политике конфиденциальности.",
  "thank-you.submit": "Спасибо! Мы скоро свяжемся с вами.",

  // FOOTER
  "footer.note": "MITE — промышленная IoT-платформа для команд, которые считают прибыль.",
  "footer.privacy": "Политика конфиденциальности",
  "footer.devices": "Устройства MITE-ECO",
  "footer.backToTop": "Наверх",

  // QUICK BUTTON + DRAWER
  "quick.label": "Вопрос / Контакт",
  "quick.title": "Быстрый вопрос",
  "quick.nameLabel": "Имя",
  "quick.namePh": "Ваше имя",
  "quick.emailLabel": "Email",
  "quick.emailPh": "you@company.com",
  "quick.msgLabel": "Сообщение",
  "quick.msgPh": "Что вы хотите контролировать или автоматизировать?",
  "quick.cancel": "Отмена",
  "quick.send": "Отправить",
  "quick.note": "Ответим с практичным первым шагом и ожидаемыми результатами.",

  // ---------
  // Use cases (labels inside cards)
  // ВАЖНО: в вашем HTML сейчас эти слова захардкожены: Pain / How / Result.
  // Если вы хотите локализацию этих ярлыков — добавьте data-i18n ключи в HTML.
  // Я всё равно даю ключи на будущее:
  "uc.label.pain": "Боль",
  "uc.label.how": "Как решаем",
  "uc.label.result": "Результат",

  // ---------
  // Use-cases data (optional): локализуем industryLabel + тексты карточек.
  // ВНИМАНИЕ: В вашем текущем JS useCases объявлены как const на английском.
  // Чтобы реально включить RU, нужно либо:
  // 1) переносить useCases в translations (dict.useCases) и брать их из getDict(lang),
  // 2) либо в setupUseCases() подменять поля из dict по seq/ключу.
  //
  // Ниже — RU-версия тех же 18 кейсов (структура 1-в-1).
  // Можете использовать как dict.useCases и подключить.

const useCases = [
  {
    industry: "pharma",
    industryLabel: "Фарма",
    title: "Холодовая цепь: −18% списаний благодаря выявлению отклонений в пути",
    kpiBadge: "↓ Списания 15–30% · ↓ Претензии 20–40% · ↓ Нагрузка на QA",
    ttvBadge: "Рабочая модель на существующих данных — 1–2 недели",

    pain:
      "Данные уже есть: температурные логгеры, телематика транспорта, PDF от 3PL, вехи WMS/ERP, статусы отгрузок и подтверждения доставки. " +
      "Но они живут фрагментами, а слепые зоны возникают именно там, где происходят реальные потери: кросс-доки, задержки на границе, перегрузка, переадресация паллет и длительные стоянки. " +
      "Идентификаторы между датчиком, паллетой, отгрузкой и партией часто расходятся, а QA получает файлы уже после доставки. " +
      "В результате температурное отклонение обнаруживается тогда, когда товар уже потерял качество, а разбор одного события превращается в ручной поиск по 3–5 системам, переписку с перевозчиком и сверку файлов, которая занимает 4–8 часов.",

    how:
      "Телеметрия транспорта, показания температурных логгеров, этапы маршрута, геозоны, открытия дверей, работа холодильного контура и режимы SKU складываются в единый таймлайн каждой отгрузки. " +
      "Если температура выходит за допустимый диапазон, ответственные видят не только сам факт события, но и весь контекст: где это началось, сколько длилось, что происходило с дверями, стоянками, внешней температурой и холодильной установкой. " +
      "Это позволяет запускать лестницу реакции ещё в пути: водитель, диспетчер, QA, а не после разгрузки. " +
      "По каждому инциденту автоматически формируется понятная доказательная картина: маршрут, режим, отклонение, действия и подтверждения.",

    result:
      "Температурные отклонения начали выявляться во время перевозки, а не после доставки. " +
      "Клиент снизил списания продукции на 18%, потому что команда начала реагировать на событие в моменте. " +
      "Количество претензий со стороны дистрибьюторов сократилось на 32%. " +
      "Разбор одного инцидента сократился с 4–8 часов до 10–15 минут.",

    icon: "pharma",
    tags: ["cold chain", "GDP", "batch", "traceability", "transport", "QA", "3PL"]
  },

  {
    industry: "pharma",
    industryLabel: "Фарма",
    title: "Чистые помещения: расследование отклонений за минуты вместо часов",
    kpiBadge: "↓ Отклонения 10–25% · ↓ Время расследования 50–70% · ↑ Готовность к аудиту",
    ttvBadge: "Рабочая модель — 2–3 недели",

    pain:
      "Мониторинг среды на фармплощадках ведётся постоянно: температура, влажность, перепад давления, частицы, режимы HVAC, события доступа, сменные записи и действия операторов. " +
      "Но эти данные хранятся в разных системах — BMS, журналы калибровок, контроль доступа, HVAC и QA-отчёты. " +
      "Когда возникает отклонение, расследование превращается в ручной сбор информации: кто заходил в помещение, какой режим вентиляции работал, какие операции шли с партией и в какой последовательности. " +
      "Даже если все данные формально существуют, восстановить реальную цепочку событий быстро почти невозможно, поэтому первопричина часто остаётся размытой.",

    how:
      "Показания мониторинга среды, события доступа, статусы HVAC и производственные операции складываются в непрерывный таймлайн помещения и партии. " +
      "Отклонение показывается не как отдельная тревога, а как событие внутри процесса: падение перепада давления, открытие двери, смена режима вентиляции, присутствие персонала, запуск операции. " +
      "Система учитывает не только превышение порога, но и сочетание факторов во времени. " +
      "Поэтому QA начинает расследование не с поиска файлов, а с уже собранной картины событий вокруг отклонения.",

    result:
      "Расследование отклонений стало начинаться с готовой последовательности событий, а не с ручного поиска данных. " +
      "Время расследования сократилось на 60%. " +
      "Повторяемость отклонений снизилась на 17%, потому что стали видны реальные сценарии, а не только отдельные тревоги. " +
      "Подготовка доказательств для аудита сократилась с нескольких дней до нескольких минут.",

    icon: "pharma",
    tags: ["cleanroom", "EM", "GMP", "HVAC", "deviation", "QA", "audit"]
  },

  {
    industry: "manufacturing",
    industryLabel: "Производство",
    title: "Микроостановки линий: +4% OEE без модернизации оборудования",
    kpiBadge: "↓ Микроостановки 15–30% · ↑ OEE +2–6 п.п. · ↓ Споры между службами",
    ttvBadge: "Первый рабочий сценарий — за несколько дней",

    pain:
      "Линия может формально работать весь день, но производительность теряется в десятках коротких остановок по 3–7 минут. " +
      "Каждая из них кажется слишком маленькой для отдельного разбора, поэтому причины остаются неизвестными. " +
      "Сигналы PLC, действия операторов, параметры процесса и заявки на ремонт находятся в разных системах, и каждая служба объясняет остановки по-своему. " +
      "В итоге повторяющиеся сценарии продолжают сжигать производительность, но на уровне смены или недели они выглядят как «обычная вариативность».",

    how:
      "Система выстраивает последовательность событий перед каждой остановкой: состояние линии, сигналы PLC, параметры материала, действия оператора, короткие алармы и реакцию оборудования. " +
      "Это позволяет видеть не просто момент остановки, а её предысторию и повторяемую подпись. " +
      "В одном месте становятся заметны сценарии, которые раньше терялись между системами: нестабильная подача, ошибки после переналадки, кратковременные просадки по датчикам, повторяющиеся отклонения на одном участке линии. " +
      "Каждая микроостановка получает контекст, а не остаётся безымянным провалом в выпуске.",

    result:
      "Клиент начал видеть реальные причины микроостановок, а не только их количество. " +
      "Количество коротких остановок снизилось на 22%. " +
      "OEE вырос на 4 процентных пункта без модернизации оборудования. " +
      "Производство и ремонт начали разбирать одни и те же события на одном фактическом основании.",

    icon: "factory",
    tags: ["downtime", "OEE", "PLC", "micro-stops", "line", "maintenance"]
  },

  {
    industry: "manufacturing",
    industryLabel: "Производство",
    title: "Энергия производства: −16% холостого потребления электроэнергии",
    kpiBadge: "↓ Холостое потребление 10–20% · ↓ Пиковые тарифы · ↓ Энергозатраты на единицу продукции",
    ttvBadge: "Первый эффект — за 1–2 недели",

    pain:
      "Энергия дорожает, а выпуск остаётся тем же. " +
      "Энергетики видят суммарное потребление, производство — объём выпуска, финансы — счета за электричество, но никто не видит, где именно возникают потери. " +
      "Оборудование может часами находиться в энергоёмких режимах между партиями, во время переналадок или в ночные смены без полезного выпуска продукции. " +
      "Дополнительно деньги теряются из-за того, что нагрузка не учитывает тарифные окна и доступность собственной генерации, например солнечных панелей.",

    how:
      "Потребление энергии сопоставляется с производственными заданиями, сменами, состояниями оборудования и тарифными окнами. " +
      "Каждый энергозатратный участок получает контекст: линия реально производила, находилась в ожидании, была в переналадке или просто оставалась в тяжёлом режиме без выпуска. " +
      "Это позволяет увидеть, какие операции безопасно перенести в более дешёвые часы, а где оборудование сжигает энергию без полезного результата. " +
      "Дополнительно видно, где собственная генерация используется случайно, а где её можно задействовать системно.",

    result:
      "Клиент снизил холостое энергопотребление на 16%. " +
      "Пиковые платежи за электроэнергию сократились на 21%. " +
      "Часть энергоёмких операций была перенесена на часы дешёвого тарифа, а энергия от солнечных батарей начала использоваться осознанно, а не эпизодически. " +
      "Энергия перестала быть только строкой в счёте и стала управляемым производственным KPI.",

    icon: "bolt",
    tags: ["energy", "peak tariff", "production", "solar", "efficiency", "KPI"]
  },

  {
    industry: "manufacturing",
    industryLabel: "Производство",
    title: "Брак в производстве: −19% дефектов благодаря раннему выявлению",
    kpiBadge: "↓ Брак 10–25% · ↑ First-pass yield · ↓ Переделки",
    ttvBadge: "Рабочая модель — 1–2 недели",

    pain:
      "Брак редко выглядит как один большой инцидент. " +
      "Чаще он накапливается постепенно: немного больше отходов, нестабильные партии, повторяющиеся переделки, небольшие отклонения параметров, которые никто отдельно не связывает с итоговым дефектом. " +
      "Параметры процесса, характеристики сырья, режимы линии, данные сенсоров и действия операторов находятся в разных системах. " +
      "Когда партия оказывается бракованной, поиск причин начинается задним числом и быстро превращается в догадки, потому что полная цепочка событий уже не видна.",

    how:
      "Параметры процесса, партии сырья, состояния оборудования и действия операторов рассматриваются как единая причинно-следственная последовательность. " +
      "Для каждой партии сохраняется полный контекст: режимы, отклонения, вмешательства, события по оборудованию и характеристики сырья. " +
      "Система показывает комбинации параметров и сценарии, после которых риск дефекта начинает расти. " +
      "Это позволяет видеть момент, где процесс пошёл в сторону брака, ещё до того, как партия дойдёт до финальной проверки.",

    result:
      "Клиент начал выявлять риск дефекта до завершения партии, а не после выпуска. " +
      "Уровень брака снизился на 19%. " +
      "Доля продукции без переделки выросла на 15%. " +
      "Разбор отклонений стал быстрее, потому что по каждой партии появилась полная фактическая цепочка событий.",

    icon: "wrench",
    tags: ["scrap", "yield", "quality", "defect", "batch", "process"]
  },

  {
    industry: "manufacturing",
    industryLabel: "Производство",
    title: "Материалы и ERP: точность учёта запасов до 99%",
    kpiBadge: "↑ Точность запасов >99% · ↓ Списания · ↓ Время сверки",
    ttvBadge: "Проект — 11 дней до результата",

    pain:
      "Расхождения между фактическим и учётным количеством материалов обычно обнаруживаются слишком поздно — во время инвентаризации или после срыва заказа. " +
      "Склад уверен в одном остатке, ERP показывает другой, производство считает, что материал уже был израсходован корректно, а логика перемещений между зонами живёт отдельно. " +
      "Небольшие расхождения накапливаются неделями и в итоге превращаются в списания, дефициты, срочные закупки и потерю доверия к планированию. " +
      "Проблема не в том, что данных нет, а в том, что движение материалов и их использование никто не видит как одну цепочку.",

    how:
      "Каждое перемещение, списание, использование в операции и регистрация в ERP становятся частью общего таймлайна материала. " +
      "Система показывает, где именно возникает расхождение: на складе, в производстве, при передаче между зонами или в моменте подтверждения операции. " +
      "Это превращает инвентарные проблемы из итогового сюрприза в конкретные точки потери контроля. " +
      "Вместо общей формулы «где-то не сошлось» видно, на каком этапе и по какому сценарию материал ушёл из факта и учёта.",

    result:
      "Клиент повысил точность учёта запасов до 99,3%. " +
      "Списания материалов снизились, потому что расхождения начали выявляться по месту возникновения, а не на итоговой сверке. " +
      "Инвентаризация перестала превращаться в длительное расследование между складом, производством и ERP. " +
      "Планирование закупок стало точнее, потому что движение материалов стало прозрачным.",

    icon: "boxes",
    tags: ["inventory", "ERP", "warehouse", "accuracy", "materials", "reconciliation"]
  },

  {
    industry: "manufacturing",
    industryLabel: "Производство",
    title: "Прибыльность смен: +8% маржи без новых инвестиций",
    kpiBadge: "↑ Маржа +5–12% · ↓ Потери при переналадке · ↑ Стабильность выпуска",
    ttvBadge: "Проект — 17 дней",

    pain:
      "В отчётах производство может выглядеть прибыльным, но отдельные смены и часы стабильно дают худший результат. " +
      "Финансы видят маржу продукта, производство — выполнение сменного плана, а реальные потери прячутся внутри общей статистики. " +
      "Переналадки затягиваются, запуск линии проходит нестабильно, короткие задержки накапливаются, но никто не связывает эти события с итоговой маржой. " +
      "В результате предприятие теряет деньги не из-за одной большой аварии, а из-за повторяющихся сценариев плохого исполнения.",

    how:
      "Производственные события — запуск, переналадка, остановки, фактический выпуск и отклонения смены — сопоставляются с экономическим результатом в том же временном окне. " +
      "Это позволяет увидеть не только сколько произвели, но и в какие часы выпуск был дорогим, нестабильным или маржинально слабым. " +
      "Система показывает, какие паттерны смены приводят к потерям, а какие, наоборот, дают лучший результат. " +
      "Руководство перестаёт оценивать смену по общему выполнению плана и начинает видеть, где именно внутри неё уходит прибыль.",

    result:
      "Клиент увеличил производственную маржу на 8% без дополнительных инвестиций в оборудование. " +
      "Переналадки стали короче и стабильнее, а часы с повторяющимися потерями были выявлены и переработаны. " +
      "График производства начал строиться на основе фактических паттернов смен, а не усреднённых ожиданий. " +
      "Потери маржи перестали прятаться внутри общего выпуска.",

    icon: "chart",
    tags: ["margin", "shift", "changeover", "profitability", "throughput", "planning"]
  },

  {
    industry: "manufacturing",
    industryLabel: "Производство",
    title: "Мясопереработка: −2% усушки и −16% внутренних потерь",
    kpiBadge: "↓ Усушка 1.5–2.5% · ↓ Внутренние потери 16%+ · ↑ Безопасность персонала",
    ttvBadge: "Проект — 3–4 недели",

    pain:
      "На мясоперерабатывающих предприятиях потери часто воспринимаются как неизбежная часть процесса. " +
      "Несколько килограммов «ушло» после обвалки. Паллету пере-маркировали. Короб недовесили на 200 грамм. " +
      "Но самая дорогая скрытая потеря — это усушка продукции во время хранения. " +
      "Мясо может терять 3–7% веса из-за испарения влаги, а небольшие отклонения температуры, влажности и вентиляции в камерах усиливают эту потерю ещё сильнее. " +
      "Дополнительный риск связан с холодильными установками на аммиаке: рост концентрации NH₃ может означать утечку, проблемы вентиляции и реальную угрозу для персонала, вплоть до остановки участка и вызова аварийных служб.",

    how:
      "Входные веса сырья, операции разделки, упаковка, данные весов, режимы камер, влажность, вентиляция, доступ, смены и отгрузки рассматриваются как одна производственная цепочка. " +
      "Если на площадке уже есть контроль параметров воздуха или холодильных систем, в анализ включается и аммиак как индикатор состояния камер и холодильного контура. " +
      "Это позволяет видеть не только итоговый выход, но и то, где именно формируется потеря веса: на конкретной камере, смене, временном окне или сценарии хранения. " +
      "Одновременно становятся заметны режимы, где появляются риски не только для продукта, но и для людей.",

    result:
      "Предприятие начало видеть, в каких камерах и режимах хранения формируется основная усушка. " +
      "Фактическая потеря веса продукции снизилась на 1.5–2.5%, что для крупных объёмов означает сохранение сотен тонн продукта в год. " +
      "Внутренние потери сократились более чем на 16%, потому что проблемные зоны перестали быть скрытыми. " +
      "Потенциально опасные ситуации по параметрам холодильных систем начали выявляться на ранней стадии, до аварийной эскалации.",

    icon: "factory",
    tags: ["meat processing", "shrinkage", "ammonia", "cold storage", "yield", "safety"]
  },

  {
    industry: "construction",
    industryLabel: "Строительство",
    title: "Бетон на стройке: меньше простоев благодаря прогнозу прочности",
    kpiBadge: "↑ Выполнение в срок · ↓ Простои бригад · ↓ Риск переделки",
    ttvBadge: "Проект — 2 недели",

    pain:
      "Планирование выдержки бетона до сих пор часто опирается на простые правила: «до понедельника», «три дня подождём», «потом проверим». " +
      "Но скорость набора прочности зависит от состава смеси, температуры, влажности, ветра, дождей и условий конкретной заливки. " +
      "Из-за этого графики сдвигаются, бригады ждут, бетон держат дольше нужного, а следующие работы тормозятся. " +
      "Самая неприятная часть этой проблемы в том, что деньги теряются не в одной большой ошибке, а в постоянных простоях, ожидании крана и редких, но дорогих переделках, когда решение было принято слишком рано или слишком поздно.",

    how:
      "Данные по смеси, погоде, времени укладки, лабораторным испытаниям и встроенным датчикам, если они уже используются, собираются в цифровой таймлайн каждой заливки. " +
      "Система показывает не абстрактный календарный срок, а окно вероятной готовности с учётом реальных условий на площадке. " +
      "За счёт этого решение о снятии опалубки, выходе следующей бригады или запуске следующего этапа опирается не на опыт и перестраховку, а на расчётную картину набора прочности. " +
      "Площадка получает не просто прогноз, а управляемую точку решения.",

    result:
      "Бригады начали выходить на объект по фактической готовности конструкции, а не по усреднённым срокам. " +
      "Простои людей и техники сократились, потому что решения стали приниматься по данным, а не по календарю. " +
      "Риск преждевременных действий и переделок снизился. " +
      "Планирование на площадке стало предсказуемее, а обсуждение сроков перестало быть спором «ещё подождать или уже можно».",

    icon: "wrench",
    tags: ["construction", "concrete", "curing", "weather", "strength", "scheduling"]
  },

  {
    industry: "construction",
    industryLabel: "Строительство",
    title: "Стройплощадки: −25% простоев техники и контроль использования",
    kpiBadge: "↓ Простои 10–25% · ↓ Потери техники · ↑ Контроль использования",
    ttvBadge: "Проект — 2–4 недели",

    pain:
      "На стройплощадках часть сигналов обычно уже есть: GPS-трекеры на технике, телематика аренды, журналы проходных, отчёты охраны, сменные листы, счета подрядчиков. " +
      "Но картина остаётся фрагментированной: активы ездят между объектами, теги не совпадают с арендными ID, а история «кто последний работал с техникой» превращается в расследование в мессенджерах. " +
      "Кражи, несанкционированное использование и простои происходят в одни и те же окна: ночи, выходные, пересменки, смена субподрядчиков. " +
      "Даже без прямой кражи техника quietly сжигает деньги в простое, потому что её реальное использование оценивается по графику, а не по факту.",

    how:
      "Реестр активов, телематика, геозоны площадки, события проходных, наряды и ответственность смен рассматриваются как один поток событий по каждой единице техники. " +
      "Это позволяет видеть, где техника реально работала, где простаивала, где перемещалась без задачи и в какие окна риска это происходило. " +
      "Система не показывает просто точку на карте — она показывает контекст: объект, зона, смена, задача, подрядчик, временное окно. " +
      "Поэтому инцидент перестаёт быть «что-то случилось с экскаватором» и становится понятным кейсом с хронологией и ответственностью.",

    result:
      "Клиент получил прозрачный контроль по технике на объектах: стало видно, что используется, что простаивает и где именно начинаются потери. " +
      "Простои сократились на 10–25%, потому что неиспользуемая техника и неэффективные окна стали видны сразу. " +
      "Аномальные перемещения начали фиксироваться до того, как превращались в прямой ущерб. " +
      "Использование техники стало подтверждаться данными, а не предположениями по графику или словам подрядчика.",

    icon: "wrench",
    tags: ["construction", "equipment", "utilization", "geofence", "theft prevention", "contractor"]
  },

  {
    industry: "agriculture",
    industryLabel: "Сельское хозяйство",
    title: "Птичники: −27% падежа благодаря контролю микроклимата",
    kpiBadge: "↓ Падёж 10–20% · ↑ Равномерность веса · ↑ Прирост",
    ttvBadge: "Рабочая модель — 1–2 недели",

    pain:
      "Температурный режим в птичниках напрямую зависит от возраста птицы. " +
      "В первые дни выращивания отклонение даже на 1–2°C влияет на потребление корма, развитие и падёж. " +
      "На практике температура часто регулируется вручную: операторы меняют отопление, вентиляцию и заслонки по графику или по опыту. " +
      "При этом система вентиляции состоит из десятков вентиляторов, заслонок и регуляторов давления, и даже частичная потеря производительности одного узла меняет поток воздуха в корпусе. " +
      "О проблеме обычно узнают поздно — после обхода или уже по последствиям в партии.",

    how:
      "Возраст партии, целевой температурный профиль, фактическая температура, работа вентиляции, давление и события оборудования связываются в единый таймлайн корпуса. " +
      "Система показывает не просто текущую температуру, а отклонение от режима именно для данного возраста птицы. " +
      "Одновременно становятся видны сценарии, где микроклимат уходит из нормы из-за деградации вентиляции, а не из-за ошибки установки уставки. " +
      "Это позволяет вовремя корректировать режим и видеть причинно-следственные связи, которые раньше были скрыты внутри общей картины корпуса.",

    result:
      "Температурный режим начал соответствовать возрасту птицы системно, а не вручную по опыту смены. " +
      "Падёж снизился примерно на 27%, потому что критические отклонения стали выявляться раньше. " +
      "Разброс веса внутри партии уменьшился, а средний прирост вырос на 5–8%. " +
      "Необходимость постоянных ручных обходов снизилась, потому что проблемные сценарии стали видны по факту их появления.",

    icon: "chicken",
    tags: ["poultry", "temperature", "ventilation", "growth", "mortality", "age profile"]
  },

  {
    industry: "agriculture",
    industryLabel: "Сельское хозяйство",
    title: "Молочные фермы: +6% надоя благодаря контролю корма и воды",
    kpiBadge: "↓ Потери корма · ↑ Надой · ↑ Здоровье стада",
    ttvBadge: "Рабочая модель — 1–2 недели",

    pain:
      "Корм составляет до 50–60% затрат молочной фермы, а потребление воды напрямую влияет на продуктивность. " +
      "Молочная корова может выпивать 70–120 литров воды в день, и любое снижение потребления быстро отражается на надое. " +
      "Но данные о рационе, раздаче корма, водопотреблении, микроклимате и состоянии животных обычно находятся в разных системах. " +
      "Когда надой падает или коровы начинают меньше жевать и есть, ферма видит только итоговые показатели, но не видит, где именно нарушилась цепочка содержания животных: корм, вода, температура, стресс, состояние группы или отдельной коровы.",

    how:
      "Рецепты рационов, фактическая раздача корма, расход воды, микроклимат коровника и данные управления стадом складываются в единую модель содержания. " +
      "Дополнительно учитываются сигналы активности и жвачки, которые позволяют увидеть, когда животные начинают есть меньше или пережёвывать корм реже. " +
      "Это позволяет не ждать падения надоя как финального симптома, а видеть ранние отклонения по поведению и потреблению. " +
      "Система показывает, какие группы стада выпадают из нормы и какие факторы наиболее вероятно на это влияют: вода, рацион, температура, лактация или состояние животных.",

    result:
      "Ферма начала выявлять снижение активности жвачки и потребления корма в течение часов, а не дней. " +
      "Проблемы с поилками и распределением корма стали устраняться до падения продуктивности. " +
      "Потери корма снизились примерно на 12–15%. " +
      "Надой вырос на 4–6% благодаря более стабильному кормлению и своевременной реакции на отклонения.",

    icon: "cow",
    tags: ["dairy", "feed", "water", "rumination", "milk yield", "herd"]
  },

  {
    industry: "agriculture",
    industryLabel: "Сельское хозяйство",
    title: "Сады и плантации: −21% потерь урожая от вредителей",
    kpiBadge: "↓ Потери урожая 10–20% · ↑ Урожайность · ↑ Скорость реакции",
    ttvBadge: "Рабочая модель — 2–3 недели",

    pain:
      "По данным FAO, вредители и болезни растений ежегодно уничтожают до 20–40% мирового урожая. " +
      "На практике проблемы в садах и плантациях часто обнаруживаются слишком поздно: агроном физически обходит только часть участка, а реальные очаги уже успевают распространиться. " +
      "Развитие деревьев или кустов может сильно отличаться между зонами из-за почвы, влаги, питания и состояния растений. " +
      "В результате хозяйство получает неожиданные потери урожая и вынуждено проводить более масштабные обработки, чем было бы нужно при раннем вмешательстве.",

    how:
      "Данные дронов, спутниковых снимков, погодных условий и сенсоров почвы рассматриваются как единая картина состояния участка. " +
      "AI анализирует аномалии роста и ранние признаки заражения вредителями или болезнями, выделяя конкретные зоны, где проблема только начинает формироваться. " +
      "Ответственные получают не общий сигнал «на участке что-то не так», а точку на карте, сценарий проблемы и окно времени, когда можно вмешаться локально. " +
      "Это переводит защиту растений из режима поздней реакции в режим точечного раннего действия.",

    result:
      "Ферма начала выявлять очаги вредителей на ранней стадии, до распространения по значительной площади. " +
      "Площадь заражения снизилась, потому что обработка стала точечной и своевременной. " +
      "Потери урожая сократились примерно на 21%. " +
      "Работы по защите растений стали точнее, экономичнее и лучше подтверждаться фактическими данными по участку.",

    icon: "wind",
    tags: ["orchard", "pests", "AI", "crop loss", "drone", "plant health"]
  },

  {
    industry: "agriculture",
    industryLabel: "Сельское хозяйство",
    title: "Теплицы: +12% урожайности благодаря стабильному микроклимату",
    kpiBadge: "↑ Урожайность 10–20% · ↓ Расход воды 10–18% · ↓ Потери от болезней",
    ttvBadge: "Рабочая модель — 2–3 недели",

    pain:
      "Современные тепличные хозяйства управляют десятками параметров: освещением, поливом, удобрениями, вентиляцией, влажностью, температурой и уровнем CO₂. " +
      "Эти системы обычно существуют как отдельные контуры: контроллеры полива, климатические станции, освещение, системы удобрений. " +
      "Когда растения начинают расти хуже или появляются болезни, агроном видит последствия, но не видит точную комбинацию причин. " +
      "Например, высокая влажность плюс слабая вентиляция могут постепенно привести к вспышке грибковых заболеваний, а небольшие ошибки в поливе или свете накапливаются неделями и бьют по урожайности.",

    how:
      "Параметры климата теплицы, режимы полива, удобрения, освещение и CO₂ складываются в одну модель выращивания по секциям и временным окнам. " +
      "Система показывает не только текущее состояние, но и то, какие комбинации условий приводят к риску заболеваний или ухудшению роста. " +
      "AI выделяет сценарии, где микроклимат стабильно выходит в опасную зону, а агроном получает точное понимание: что корректировать — свет, вентиляцию, полив или питание. " +
      "Это позволяет вмешиваться до того, как проблема успеет перейти в потери урожая.",

    result:
      "Ферма начала выявлять риск болезней растений на ранней стадии, а не после появления массовых симптомов. " +
      "Потери урожая из-за грибковых заболеваний снизились примерно на 15%. " +
      "Расход воды и удобрений сократился на 10–18% за счёт более точного режима. " +
      "Урожайность теплицы выросла примерно на 12% благодаря более стабильному микроклимату.",

    icon: "drop",
    tags: ["greenhouse", "irrigation", "light", "fertigation", "ventilation", "yield"]
  },
  {
    industry: "environment",
    industryLabel: "Экология",
    title: "Мониторинг рек: загрязнение выявляется за минуты, а не дни",
    kpiBadge: "↓ Жалобы жителей · ↑ Штрафы нарушителям · ↓ Экологические инциденты",
    ttvBadge: "Рабочая модель — 2–3 недели",

    pain:
      "Качество воды в реках и озёрах часто контролируется редкими лабораторными анализами. " +
      "Между такими проверками могут проходить дни или недели, а за это время аварийные сбросы предприятий, дождевые стоки или повреждения инфраструктуры резко меняют состояние воды. " +
      "О проблеме обычно узнают уже после последствий: гибель рыбы, запах, загрязнённый берег или жалобы жителей. " +
      "По данным ООН, около 80% сточных вод в мире попадает в окружающую среду без должной очистки, поэтому позднее обнаружение означает не только экологический, но и управленческий провал.",

    how:
      "Температура, pH, растворённый кислород, мутность, проводимость и сопутствующие параметры воды анализируются как непрерывный поток, а не как разовые замеры. " +
      "Каждое отклонение получает контекст: погода, уровень воды, время возникновения и соседние сигналы. " +
      "Это позволяет увидеть не просто факт ухудшения качества воды, а сценарий загрязнения и окно, когда ещё можно быстро реагировать. " +
      "Муниципалитет получает не абстрактный мониторинг, а рабочую доказательную базу для проверки источников загрязнения и действий надзорных служб.",

    result:
      "Экологические службы начали обнаруживать загрязнение воды в течение минут после его появления. " +
      "Время реакции на инциденты сократилось с нескольких дней до нескольких часов. " +
      "Количество жалоб жителей на состояние водоёмов снизилось примерно на 30–50%. " +
      "Муниципалитет получил фактическую базу для расследований и начал эффективнее применять штрафы к предприятиям-нарушителям.",

    icon: "wind",
    tags: ["water quality", "river", "pollution", "environment", "compliance", "monitoring"]
  },

  {
    industry: "smartcities",
    industryLabel: "Умные города",
    title: "Канализационные люки: −60% краж и ноль аварий",
    kpiBadge: "↓ Кражи люков 40–60% · ↓ Травмы и аварии · ↓ Расходы города",
    ttvBadge: "Рабочая модель — 1–2 недели",

    pain:
      "Кражи чугунных крышек люков остаются распространённой проблемой во многих городах мира. " +
      "Средняя стоимость крышки люка составляет около $300, но на металлолом её продают примерно за 10% этой суммы. " +
      "Для коммунальных служб это означает постоянные расходы на замену и выезды, а для города — реальный риск аварий, травм и смертельных случаев среди пешеходов, велосипедистов и водителей. " +
      "В небольшом городе за год могут исчезать сотни крышек, а проблема обычно обнаруживается уже по жалобе или после происшествия.",

    how:
      "Датчики положения крышек, карта инфраструктуры и оперативные маршруты служб связываются в один контур контроля. " +
      "Если крышка снимается или смещается, система мгновенно фиксирует событие, привязывает его к конкретному колодцу и запускает сценарий реакции: уведомление, назначение выезда, контроль устранения. " +
      "Инцидент фиксируется не как разовый тревожный сигнал, а как кейс с координатой, статусом, временем реакции и закрытием. " +
      "Это позволяет контролировать не только саму кражу, но и дисциплину устранения опасного участка.",

    result:
      "Город начал получать уведомления о снятии крышек люков в течение секунд после начала инцидента. " +
      "Время обнаружения открытых колодцев сократилось с нескольких дней до минут. " +
      "Количество краж снизилось на 40–60%, потому что инциденты начали фиксироваться сразу. " +
      "Муниципалитет снизил ежегодные расходы на замену крышек и аварийные выезды примерно на $40 000–$70 000, а число травматичных инцидентов сократилось до нуля.",

    icon: "lamp",
    tags: ["manhole", "smart city", "safety", "municipality", "theft", "incident response"]
  },

  {
    industry: "logistics",
    industryLabel: "Логистика",
    title: "Холодовая логистика: −18% потерь благодаря контролю температуры в рейсе",
    kpiBadge: "↓ Претензии 20–40% · ↓ Споры по качеству · ↑ Надёжность доставки",
    ttvBadge: "Рабочая модель — 1–2 недели",

    pain:
      "В холодной логистике температурные отклонения часто обнаруживаются уже после доставки. " +
      "Телеметрия транспорта, показания логгеров, события маршрута, данные 3PL и подтверждения водителя существуют, но живут в разных системах. " +
      "Когда клиент заявляет претензию, начинается долгий разбор: логистика ищет данные у перевозчика, QA поднимает режимы, диспетчер вспоминает маршрут, а ответственность размывается между сторонами. " +
      "Каждый такой инцидент — это прямые потери, спор по качеству и риск повторения той же ошибки в следующем рейсе.",

    how:
      "Телеметрия транспорта, режимы перевозки, этапы маршрута, события дверей, работа холодильной установки и действия водителя рассматриваются как единая модель рейса. " +
      "Система показывает не просто факт отклонения, а весь контекст: где оно началось, сколько длилось, что происходило с дверями, стоянками, внешней температурой и режимом компрессора. " +
      "Если появляется исключение, ответственные видят его во время рейса, а не после разгрузки. " +
      "По каждому событию автоматически формируется доказательная цепочка: маршрут, режим, отклонение, действия и подтверждения.",

    result:
      "Клиент начал выявлять температурные исключения в пути, а не после доставки. " +
      "Количество спорных кейсов по качеству сократилось на 20–40%. " +
      "Разбор одного инцидента сократился с нескольких часов до 10–20 минут. " +
      "Команда начала реагировать в моменте, а не постфактум, и качество доставки стало стабильнее.",

    icon: "truck",
    tags: ["cold logistics", "fleet", "temperature", "route", "incident", "evidence"]
  },

  {
    industry: "logistics",
    industryLabel: "Логистика",
    title: "Склад и доки: −28% времени ожидания транспорта",
    kpiBadge: "↓ Ожидание на доках 20–35% · ↑ Пропускная способность · ↓ Простои транспорта",
    ttvBadge: "Рабочая модель — 1–2 недели",

    pain:
      "На распределительных центрах и складских площадках большие потери часто происходят не на маршруте, а на доках. " +
      "Машины приезжают по расписанию, но ждут свободный слот 30–90 минут, потому что реальная готовность заказа, занятость доков и доступность техники не видны в одном месте. " +
      "WMS показывает одно, диспетчер транспорта — другое, а склад живёт по фактической ситуации на площадке. " +
      "В результате растут очереди, простаивает транспорт, срываются окна отгрузки и начинаются штрафы за задержки.",

    how:
      "Статусы заказов из WMS, расписание прибытия транспорта, занятость доков и движение погрузочной техники связываются в одну модель складской операции. " +
      "Каждая машина получает понятный таймлайн: прибытие, ожидание, начало обработки, окончание погрузки и выезд. " +
      "Система показывает, где именно формируется задержка: заказ не готов, док занят дольше нормы, не хватает техники или нарушается последовательность подачи машин. " +
      "Это позволяет управлять не формальным расписанием, а реальным потоком транспорта на площадке.",

    result:
      "Клиент сократил среднее время ожидания транспорта на доках на 28%. " +
      "Пропускная способность склада выросла примерно на 15% без увеличения числа доков. " +
      "Простои транспорта и штрафы за задержку снизились. " +
      "Погрузка перестала быть зоной хаоса и стала управляемым процессом с понятными узкими местами.",

    icon: "truck",
    tags: ["warehouse", "dock", "loading", "queue", "fleet", "WMS"]
  }
];
};
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

    leftPoints.forEach((p) => {
      const i = Number(p.getAttribute("data-outcome"));
      p.classList.toggle("is-active", i === index);
    });
  }

  prevBtn?.addEventListener("click", () => { index--; render(true); });
  nextBtn?.addEventListener("click", () => { index++; render(true); });

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
   Use-cases data (18 “meaty”)*/

// =====================
// USE CASES (story cards with badges)
// Pharma + Manufacturing
// =====================

const useCases = [
  // 1) Pharma — Cold chain (no “sensor shopping” — unify what you already have)
  {
  industry: "pharma",
  industryLabel: "Pharmaceuticals",
  title: "Cold Chain: −18% Product Loss Through In-Transit Excursion Detection",
  kpiBadge: "↓ Write-offs 15–30% · ↓ Claims 20–40% · ↓ QA Workload",
  ttvBadge: "Operational model on existing data — 1–2 weeks",

  pain:
    "The data already exists: temperature loggers, transport telematics, 3PL PDFs, WMS/ERP milestones, shipment statuses, and delivery confirmations. " +
    "But it lives in fragments, and the blind spots appear exactly where real losses occur: cross-docks, border delays, pallet rehandling, pallet reassignment, and long dwell times. " +
    "Identifiers between the sensor, pallet, shipment, and batch often drift apart, while QA receives the files only after delivery. " +
    "As a result, a temperature excursion is detected only when the product has already lost quality, and investigating a single event turns into a manual search across 3–5 systems, carrier correspondence, and file reconciliation that takes 4–8 hours.",

  how:
    "Transport telemetry, temperature logger readings, route milestones, geofences, door-opening events, refrigeration-unit activity, and SKU temperature regimes are assembled into a single timeline for each shipment. " +
    "If temperature moves outside the permitted range, the responsible team sees not only the event itself but the full context: where it started, how long it lasted, what happened with doors, stops, ambient temperature, and the refrigeration unit. " +
    "This makes it possible to trigger an escalation ladder while the shipment is still in transit: driver, dispatcher, QA, rather than reacting after unloading. " +
    "For every incident, the system automatically builds a clear evidence trail: route, regime, deviation, actions, and confirmations.",

  result:
    "Temperature excursions began to be detected during transport rather than after delivery. " +
    "The client reduced product write-offs by 18% because the team started responding in real time. " +
    "Distributor claims fell by 32%. " +
    "Investigation time for a single incident dropped from 4–8 hours to 10–15 minutes.",

  icon: "pharma",
  tags: ["cold chain", "GDP", "batch", "traceability", "transport", "QA", "3PL"]
},

{
  industry: "pharma",
  industryLabel: "Pharmaceuticals",
  title: "Cleanrooms: Deviation Investigations in Minutes Instead of Hours",
  kpiBadge: "↓ Deviations 10–25% · ↓ Investigation Time 50–70% · ↑ Audit Readiness",
  ttvBadge: "Operational model — 2–3 weeks",

  pain:
    "Environmental monitoring in pharmaceutical facilities runs continuously: temperature, humidity, differential pressure, particles, HVAC modes, access events, shift records, and operator actions. " +
    "But this data is stored across different systems — BMS, calibration logs, access control, HVAC, and QA reports. " +
    "When a deviation occurs, the investigation turns into manual information gathering: who entered the room, which ventilation mode was active, which batch operations were running, and in what sequence. " +
    "Even when all the data formally exists, reconstructing the actual chain of events quickly is nearly impossible, so the root cause often remains blurred.",

  how:
    "Environmental monitoring readings, access events, HVAC states, and production operations are assembled into a continuous timeline for each room and batch. " +
    "A deviation is shown not as a standalone alarm, but as an event inside a process: a pressure drop, a door opening, a ventilation mode change, personnel presence, or the start of an operation. " +
    "The system evaluates not only threshold breaches, but combinations of factors across time. " +
    "As a result, QA starts the investigation not by searching for files, but with an already reconstructed picture of the events around the deviation.",

  result:
    "Deviation investigations began with a ready-made event sequence instead of manual data collection. " +
    "Investigation time was reduced by 60%. " +
    "Deviation recurrence fell by 17% because real scenarios became visible, not just isolated alarms. " +
    "Preparing audit evidence dropped from several days to just a few minutes.",

  icon: "pharma",
  tags: ["cleanroom", "EM", "GMP", "HVAC", "deviation", "QA", "audit"]
},

{
  industry: "manufacturing",
  industryLabel: "Manufacturing",
  title: "Line Micro-Stops: +4% OEE Without Equipment Upgrades",
  kpiBadge: "↓ Micro-stops 15–30% · ↑ OEE +2–6 pp · ↓ Cross-Team Friction",
  ttvBadge: "First working scenario — within days",

  pain:
    "A line may formally run all day, yet lose productivity in dozens of short stops lasting 3–7 minutes. " +
    "Each one seems too small for a separate review, so the causes remain unknown. " +
    "PLC signals, operator actions, process parameters, and maintenance tickets live in different systems, and every team explains the stops in its own way. " +
    "As a result, recurring scenarios continue to burn productivity, but at the shift or weekly level they still look like 'normal variability.'",

  how:
    "The system reconstructs the sequence of events before each stop: line status, PLC signals, material parameters, operator actions, short alarms, and equipment response. " +
    "This makes it possible to see not just the moment of the stop, but its lead-up and repeatable signature. " +
    "In one place, scenarios become visible that previously got lost between systems: unstable feed, post-changeover errors, brief sensor dips, and recurring deviations on a specific part of the line. " +
    "Each micro-stop gets context rather than remaining an anonymous drop in output.",

  result:
    "The client began seeing the real causes of micro-stops, not just their count. " +
    "The number of short stops fell by 22%. " +
    "OEE increased by 4 percentage points without any equipment modernization. " +
    "Production and maintenance started reviewing the same events on the same factual basis.",

  icon: "factory",
  tags: ["downtime", "OEE", "PLC", "micro-stops", "line", "maintenance"]
},

{
  industry: "manufacturing",
  industryLabel: "Manufacturing",
  title: "Production Energy: −16% Idle Electricity Consumption",
  kpiBadge: "↓ Idle consumption 10–20% · ↓ Peak tariffs · ↓ Energy Cost per Unit",
  ttvBadge: "First impact — in 1–2 weeks",

  pain:
    "Energy prices are rising while output stays the same. " +
    "Energy teams see total consumption, production sees output volume, finance sees electricity bills, but no one sees where the losses actually occur. " +
    "Equipment can remain in energy-intensive states for hours between batches, during changeovers, or on night shifts without any useful output. " +
    "Additional money is lost because the load is not aligned with tariff windows or the availability of on-site generation such as solar panels.",

  how:
    "Energy consumption is correlated with production orders, shifts, equipment states, and tariff windows. " +
    "Each energy-intensive interval gets context: the line was actually producing, waiting, in changeover, or simply staying in a heavy mode without output. " +
    "This makes it possible to see which operations can be safely moved into cheaper hours, and where equipment is burning energy without creating value. " +
    "It also becomes clear where on-site generation is being used randomly and where it can be used systematically.",

  result:
    "The client reduced idle energy consumption by 16%. " +
    "Peak electricity charges fell by 21%. " +
    "Part of the energy-intensive workload was shifted into lower-tariff hours, and solar power started being used deliberately rather than sporadically. " +
    "Energy stopped being just a line on the bill and became a manageable production KPI.",

  icon: "bolt",
  tags: ["energy", "peak tariff", "production", "solar", "efficiency", "KPI"]
},

{
  industry: "manufacturing",
  industryLabel: "Manufacturing",
  title: "Production Scrap: −19% Defects Through Early Detection",
  kpiBadge: "↓ Scrap 10–25% · ↑ First-pass yield · ↓ Rework",
  ttvBadge: "Operational model — 1–2 weeks",

  pain:
    "Scrap rarely looks like one major incident. " +
    "More often it accumulates gradually: slightly more waste, unstable batches, recurring rework, and small parameter deviations that no one explicitly connects to the final defect. " +
    "Process parameters, raw-material characteristics, line conditions, sensor data, and operator actions live in separate systems. " +
    "When a batch turns out to be defective, root-cause analysis starts after the fact and quickly becomes guesswork because the full chain of events is no longer visible.",

  how:
    "Process parameters, raw-material batches, equipment states, and operator actions are treated as a single cause-and-effect sequence. " +
    "For every batch, the full context is preserved: regimes, deviations, interventions, equipment events, and material characteristics. " +
    "The system shows parameter combinations and scenarios after which defect risk starts to rise. " +
    "This makes it possible to see the point where the process begins drifting toward scrap before the batch reaches final inspection.",

  result:
    "The client began identifying defect risk before the batch was completed rather than after release. " +
    "Scrap fell by 19%. " +
    "The share of product passing without rework increased by 15%. " +
    "Deviation reviews became faster because every batch now had a complete factual event chain.",

  icon: "wrench",
  tags: ["scrap", "yield", "quality", "defect", "batch", "process"]
},

{
  industry: "manufacturing",
  industryLabel: "Manufacturing",
  title: "Materials and ERP: Inventory Accuracy Up to 99%",
  kpiBadge: "↑ Inventory accuracy >99% · ↓ Write-offs · ↓ Reconciliation Time",
  ttvBadge: "Project — 11 days to results",

  pain:
    "Discrepancies between physical and recorded material quantities are usually detected too late — during stocktakes or after an order is disrupted. " +
    "The warehouse is certain about one balance, ERP shows another, production believes the material was consumed correctly, while transfer logic between zones lives separately. " +
    "Small mismatches accumulate over weeks and eventually turn into write-offs, shortages, rush purchases, and loss of trust in planning. " +
    "The problem is not the absence of data, but the fact that no one sees material movement and consumption as one chain.",

  how:
    "Every movement, issue, operational consumption, and ERP registration becomes part of a single material timeline. " +
    "The system shows exactly where the discrepancy appears: in the warehouse, in production, during inter-zone transfer, or at the moment of transaction confirmation. " +
    "This turns inventory issues from an end-of-period surprise into specific points of control loss. " +
    "Instead of the general statement 'something doesn’t match,' it becomes clear at which stage and through which scenario material diverged between physical reality and records.",

  result:
    "The client increased inventory accuracy to 99.3%. " +
    "Material write-offs decreased because discrepancies started being found where they originated, not at final reconciliation. " +
    "Stocktaking stopped turning into a lengthy investigation between warehouse, production, and ERP. " +
    "Procurement planning became more accurate because material movement became transparent.",

  icon: "boxes",
  tags: ["inventory", "ERP", "warehouse", "accuracy", "materials", "reconciliation"]
},

{
  industry: "manufacturing",
  industryLabel: "Manufacturing",
  title: "Shift Profitability: +8% Margin Without New Investment",
  kpiBadge: "↑ Margin +5–12% · ↓ Changeover Losses · ↑ Output Stability",
  ttvBadge: "Project — 17 days",

  pain:
    "In reports, production may look profitable overall, yet individual shifts and hours consistently deliver weaker results. " +
    "Finance sees product margin, production sees shift-plan completion, but the real losses are hidden inside aggregate performance. " +
    "Changeovers drag on, line ramp-up is unstable, short delays accumulate, yet nobody connects these events to the final margin. " +
    "As a result, the plant loses money not because of one major breakdown, but because of recurring patterns of poor execution.",

  how:
    "Production events — startup, changeover, stops, actual output, and shift deviations — are mapped against financial results within the same time window. " +
    "This makes it possible to see not only how much was produced, but in which hours output was expensive, unstable, or margin-poor. " +
    "The system shows which shift patterns drive losses and which consistently deliver better outcomes. " +
    "Management stops evaluating a shift only by plan attainment and starts seeing exactly where margin is being lost inside the shift.",

  result:
    "The client increased production margin by 8% without additional equipment investment. " +
    "Changeovers became shorter and more stable, and recurring loss-heavy hours were identified and corrected. " +
    "Production scheduling started to rely on actual shift patterns rather than averaged assumptions. " +
    "Margin leakage stopped hiding inside total output.",

  icon: "chart",
  tags: ["margin", "shift", "changeover", "profitability", "throughput", "planning"]
},

{
  industry: "manufacturing",
  industryLabel: "Manufacturing",
  title: "Meat Processing: −2% Shrink and −16% Internal Losses",
  kpiBadge: "↓ Shrink 1.5–2.5% · ↓ Internal losses 16%+ · ↑ Personnel Safety",
  ttvBadge: "Project — 3–4 weeks",

  pain:
    "At meat-processing plants, losses are often seen as an unavoidable part of the process. " +
    "A few kilograms disappear after deboning. A pallet gets relabeled. A box is underfilled by 200 grams. " +
    "But the most expensive hidden loss is product shrink during storage. " +
    "Meat can lose 3–7% of its weight due to moisture evaporation, and small deviations in temperature, humidity, and ventilation amplify that loss even further. " +
    "An additional risk is ammonia-based refrigeration systems: rising NH₃ concentration can mean leakage, ventilation issues, and a real threat to personnel, up to area shutdown and emergency response.",

  how:
    "Raw-input weights, deboning operations, packaging, scale data, chamber regimes, humidity, ventilation, access events, shifts, and shipments are treated as one production chain. " +
    "If air parameters or refrigeration systems are already monitored on site, ammonia is included in the analysis as an indicator of chamber and cooling-loop condition. " +
    "This makes it possible to see not only final yield, but exactly where weight loss is forming: in a specific chamber, shift, time window, or storage scenario. " +
    "At the same time, the system reveals conditions that create risk not only for product quality but also for people.",

  result:
    "The plant began seeing in which chambers and storage modes most shrink was forming. " +
    "Actual product weight loss dropped by 1.5–2.5%, which at large volumes means hundreds of tons of product preserved per year. " +
    "Internal losses fell by more than 16% because problem zones stopped being invisible. " +
    "Potentially dangerous refrigeration-system situations started being detected at an early stage, before they escalated into incidents.",

  icon: "factory",
  tags: ["meat processing", "shrinkage", "ammonia", "cold storage", "yield", "safety"]
},

{
  industry: "construction",
  industryLabel: "Construction",
  title: "Construction Concrete: Less Downtime Through Strength Forecasting",
  kpiBadge: "↑ On-time execution · ↓ Crew downtime · ↓ Rework risk",
  ttvBadge: "Project — 2 weeks",

  pain:
    "Concrete curing is still often planned using simple rules: 'until Monday,' 'wait three days,' 'then we’ll check.' " +
    "But strength gain depends on mix design, temperature, humidity, wind, rain, and the conditions of the specific pour. " +
    "As a result, schedules slip, crews wait, concrete is held longer than necessary, and follow-on work is delayed. " +
    "The most painful part is that money is not lost in one major mistake, but in constant downtime, crane waiting, and occasional expensive rework when the decision was made too early or too late.",

  how:
    "Mix data, weather, pour timing, lab tests, and embedded sensor data, if already available, are brought together into a digital timeline for each pour. " +
    "Instead of an abstract calendar date, the system shows a probable readiness window based on actual site conditions. " +
    "That means the decision to strip formwork, mobilize the next crew, or start the next stage is no longer driven by habit and over-caution, but by a calculated strength-gain picture. " +
    "The site gets not just a forecast, but a controlled decision point.",

  result:
    "Crews began mobilizing based on actual structural readiness rather than average timelines. " +
    "People and equipment downtime decreased because decisions were made on data rather than on the calendar. " +
    "The risk of premature action and costly rework dropped. " +
    "Site planning became more predictable, and schedule discussions stopped being arguments about whether to wait longer or move ahead.",

  icon: "wrench",
  tags: ["construction", "concrete", "curing", "weather", "strength", "scheduling"]
},

{
  industry: "construction",
  industryLabel: "Construction",
  title: "Construction Sites: −25% Equipment Downtime and Usage Control",
  kpiBadge: "↓ Downtime 10–25% · ↓ Equipment losses · ↑ Usage control",
  ttvBadge: "Project — 2–4 weeks",

  pain:
    "Construction sites usually already have some signals: GPS trackers on equipment, rental telematics, gate logs, security reports, shift sheets, and contractor invoices. " +
    "But the overall picture remains fragmented: assets move between sites, tags do not match rental IDs, and the history of 'who last used the machine' turns into a messenger-based investigation. " +
    "Theft, unauthorized use, and downtime happen in the same windows: nights, weekends, shift changes, and subcontractor swaps. " +
    "Even without direct theft, machines quietly burn money while idle because actual usage is still judged by schedule rather than by fact.",

  how:
    "Asset registry, telematics, site geofences, gate events, work orders, and shift responsibility are treated as one stream of events for each equipment unit. " +
    "This makes it possible to see where equipment actually worked, where it stood idle, where it moved without a task, and in which risk windows this occurred. " +
    "The system does not just show a point on a map — it shows the context: site, zone, shift, task, contractor, and time window. " +
    "As a result, an incident is no longer 'something happened to the excavator,' but a clear case with timeline and accountability.",

  result:
    "The client gained transparent control over equipment across sites: it became clear what was being used, what was idle, and where losses began. " +
    "Downtime dropped by 10–25% because underused equipment and inefficient windows became visible immediately. " +
    "Anomalous movements began to be detected before they turned into direct damage. " +
    "Equipment usage started being confirmed by data rather than by schedule assumptions or contractor claims.",

  icon: "wrench",
  tags: ["construction", "equipment", "utilization", "geofence", "theft prevention", "contractor"]
},

{
  industry: "agriculture",
  industryLabel: "Agriculture",
  title: "Poultry Houses: −27% Mortality Through Microclimate Control",
  kpiBadge: "↓ Mortality 10–20% · ↑ Weight uniformity · ↑ Growth",
  ttvBadge: "Operational model — 1–2 weeks",

  pain:
    "Temperature regime in poultry houses directly depends on bird age. " +
    "In the first days of growth, even a 1–2°C deviation affects feed intake, development, and mortality. " +
    "In practice, temperature is often controlled manually: operators adjust heating, ventilation, and dampers by schedule or by experience. " +
    "At the same time, the ventilation system includes dozens of fans, dampers, and pressure regulators, and even partial loss of performance in one component changes airflow in the house. " +
    "Problems are usually recognized too late — after a walk-through or only once the flock already shows the impact.",

  how:
    "Bird age, target temperature profile, actual temperature, ventilation performance, pressure, and equipment events are linked into a single house timeline. " +
    "The system shows not just the current temperature, but deviation from the correct regime for that specific flock age. " +
    "At the same time, it reveals scenarios where microclimate drifts out of range because of ventilation degradation rather than simply an incorrect setpoint. " +
    "This makes it possible to correct conditions in time and see cause-and-effect relationships that previously remained hidden inside the overall picture of the house.",

  result:
    "Temperature control began matching flock age systematically rather than manually by shift experience. " +
    "Mortality dropped by about 27% because critical deviations were detected earlier. " +
    "Weight spread within the flock decreased, while average growth improved by 5–8%. " +
    "The need for constant manual inspections declined because problematic scenarios became visible as soon as they emerged.",

  icon: "chicken",
  tags: ["poultry", "temperature", "ventilation", "growth", "mortality", "age profile"]
},

{
  industry: "agriculture",
  industryLabel: "Agriculture",
  title: "Dairy Farms: +6% Milk Yield Through Feed and Water Control",
  kpiBadge: "↓ Feed losses · ↑ Milk yield · ↑ Herd health",
  ttvBadge: "Operational model — 1–2 weeks",

  pain:
    "Feed represents up to 50–60% of costs on a dairy farm, and water consumption directly affects productivity. " +
    "A dairy cow may drink 70–120 liters of water per day, and any drop in intake quickly shows up in milk yield. " +
    "Yet ration data, feed delivery, water use, barn climate, and animal condition usually sit in different systems. " +
    "When milk yield falls or cows begin to chew and eat less, the farm sees only the final KPI, not where the chain of animal care broke down: feed, water, temperature, stress, group condition, or an individual cow’s state.",

  how:
    "Ration recipes, actual feed delivery, water consumption, barn microclimate, and herd-management data are brought together into one herd-care model. " +
    "Activity and rumination signals are also used to detect when animals start eating less or chewing less frequently. " +
    "This means the farm does not have to wait for milk-yield decline as the final symptom, but can see early changes in behavior and intake. " +
    "The system shows which herd groups are moving out of normal range and which factors most likely explain it: water, ration, temperature, lactation, or animal condition.",

  result:
    "The farm began identifying drops in rumination and feed intake within hours instead of days. " +
    "Problems with drinkers and feed distribution started being fixed before productivity declined. " +
    "Feed losses dropped by about 12–15%. " +
    "Milk yield increased by 4–6% thanks to more stable feeding and faster reaction to deviations.",

  icon: "cow",
  tags: ["dairy", "feed", "water", "rumination", "milk yield", "herd"]
},

{
  industry: "agriculture",
  industryLabel: "Agriculture",
  title: "Orchards and Plantations: −21% Crop Loss from Pests",
  kpiBadge: "↓ Crop loss 10–20% · ↑ Yield · ↑ Response speed",
  ttvBadge: "Operational model — 2–3 weeks",

  pain:
    "According to FAO, pests and plant diseases destroy up to 20–40% of the world’s crops each year. " +
    "In practice, problems in orchards and plantations are often detected too late: an agronomist physically inspects only part of the site, while real hotspots have already begun spreading. " +
    "Tree or shrub development can vary significantly across zones because of soil conditions, moisture, nutrition, and plant health. " +
    "As a result, the farm suffers unexpected crop loss and is forced to apply broader treatments than would have been necessary with earlier intervention.",

  how:
    "Drone data, satellite imagery, weather conditions, and soil-sensor readings are treated as one picture of field condition. " +
    "AI analyzes growth anomalies and early signs of pest or disease pressure, highlighting specific zones where the problem is only beginning to form. " +
    "Responsible teams receive not just a general signal that 'something is wrong,' but an exact location, a likely scenario, and the time window in which localized intervention is still possible. " +
    "This shifts plant protection from late reaction to targeted early action.",

  result:
    "The farm began detecting pest hotspots at an early stage, before they spread across large areas. " +
    "Affected area decreased because treatment became targeted and timely. " +
    "Crop loss fell by about 21%. " +
    "Plant-protection work became more precise, more economical, and better supported by actual field data.",

  icon: "wind",
  tags: ["orchard", "pests", "AI", "crop loss", "drone", "plant health"]
},

{
  industry: "agriculture",
  industryLabel: "Agriculture",
  title: "Greenhouses: +12% Yield Through Stable Microclimate",
  kpiBadge: "↑ Yield 10–20% · ↓ Water use 10–18% · ↓ Disease losses",
  ttvBadge: "Operational model — 2–3 weeks",

  pain:
    "Modern greenhouses manage dozens of parameters: lighting, irrigation, fertilization, ventilation, humidity, temperature, and CO₂ levels. " +
    "These systems usually exist as separate loops: irrigation controllers, climate stations, lighting, and fertilization systems. " +
    "When plants start growing worse or disease appears, the agronomist sees the consequences, but not the exact combination of causes. " +
    "For example, high humidity plus weak ventilation can gradually trigger fungal outbreaks, while small irrigation or lighting errors can accumulate for weeks and reduce yield.",

  how:
    "Greenhouse climate, irrigation, fertilization, lighting, and CO₂ settings are assembled into one cultivation model by zones and time windows. " +
    "The system shows not only the current state, but which combinations of conditions create risk of disease or reduced growth. " +
    "AI highlights scenarios in which the microclimate consistently drifts into a dangerous zone, giving the agronomist a clear answer on what to adjust — light, ventilation, irrigation, or nutrition. " +
    "This makes it possible to intervene before the issue turns into crop loss.",

  result:
    "The farm began identifying plant-disease risk at an early stage rather than after mass symptoms appeared. " +
    "Crop losses from fungal disease fell by about 15%. " +
    "Water and fertilizer use dropped by 10–18% thanks to a more precise regime. " +
    "Greenhouse yield increased by about 12% due to a more stable microclimate.",

  icon: "drop",
  tags: ["greenhouse", "irrigation", "light", "fertigation", "ventilation", "yield"]
},

{
  industry: "environment",
  industryLabel: "Environment",
  title: "River Monitoring: Pollution Detected in Minutes, Not Days",
  kpiBadge: "↓ Citizen complaints · ↑ Fines on violators · ↓ Environmental incidents",
  ttvBadge: "Operational model — 2–3 weeks",

  pain:
    "Water quality in rivers and lakes is often controlled through infrequent laboratory testing. " +
    "Days or even weeks can pass between such checks, while during that time accidental discharges, stormwater runoff, or infrastructure damage can sharply change water conditions. " +
    "The problem is usually noticed only after consequences appear: fish die-offs, odor, polluted shoreline, or complaints from residents. " +
    "According to the UN, around 80% of wastewater globally enters the environment without adequate treatment, so late detection means not only ecological but also management failure.",

  how:
    "Temperature, pH, dissolved oxygen, turbidity, conductivity, and related water parameters are analyzed as a continuous stream rather than as isolated readings. " +
    "Each deviation gets context: weather, water level, time of occurrence, and neighboring signals. " +
    "This makes it possible to see not just the fact that water quality worsened, but the pollution scenario and the time window in which rapid response is still possible. " +
    "Municipal authorities receive not abstract monitoring, but a working evidence base for checking pollution sources and supporting supervisory action.",

  result:
    "Environmental services began detecting water pollution within minutes of its onset. " +
    "Response time to incidents decreased from several days to several hours. " +
    "Resident complaints about water bodies fell by about 30–50%. " +
    "Municipal authorities gained a factual basis for investigations and began applying penalties to violating enterprises more effectively.",

  icon: "wind",
  tags: ["water quality", "river", "pollution", "environment", "compliance", "monitoring"]
},

{
  industry: "smartcities",
  industryLabel: "Smart Cities",
  title: "Manhole Covers: −60% Theft and Zero Accidents",
  kpiBadge: "↓ Manhole theft 40–60% · ↓ Injuries and crashes · ↓ City costs",
  ttvBadge: "Operational model — 1–2 weeks",

  pain:
    "The theft of cast-iron manhole covers remains a common problem in cities around the world. " +
    "An average cover costs about $300, yet it may be sold as scrap for only around 10% of that value. " +
    "For municipal services, this means constant replacement costs and emergency dispatches, while for the city it means a real risk of crashes, injuries, and fatal incidents involving pedestrians, cyclists, and drivers. " +
    "In a small city, hundreds of covers may disappear each year, and the problem is usually discovered only after a complaint or an accident.",

  how:
    "Cover-position sensors, infrastructure maps, and field-service routes are connected into one control loop. " +
    "If a cover is removed or shifted, the system instantly records the event, ties it to a specific manhole, and launches a response workflow: alerting the service team, assigning a dispatch, and tracking closure. " +
    "The incident is recorded not as a one-off alarm, but as a case with coordinates, status, response time, and closure. " +
    "This makes it possible to control not just the theft itself, but also the discipline of making the dangerous site safe.",

  result:
    "The city began receiving alerts about cover removal within seconds of the incident starting. " +
    "Time to detect open manholes dropped from several days to minutes. " +
    "The number of thefts fell by 40–60% because incidents started being captured immediately. " +
    "The municipality reduced annual spending on replacement covers and emergency dispatches by about $40,000–$70,000, while the number of injury incidents dropped to zero.",

  icon: "lamp",
  tags: ["manhole", "smart city", "safety", "municipality", "theft", "incident response"]
},

{
  industry: "logistics",
  industryLabel: "Logistics",
  title: "Cold Logistics: −18% Losses Through In-Route Temperature Control",
  kpiBadge: "↓ Claims 20–40% · ↓ Quality disputes · ↑ Delivery reliability",
  ttvBadge: "Operational model — 1–2 weeks",

  pain:
    "In cold logistics, temperature deviations are often discovered only after delivery. " +
    "Transport telemetry, logger readings, route events, 3PL data, and driver confirmations all exist, but live in separate systems. " +
    "When a customer files a claim, a long investigation begins: logistics requests data from the carrier, QA checks regimes, the dispatcher reconstructs the route, and accountability remains blurred across parties. " +
    "Each such incident means direct loss, a quality dispute, and the risk of repeating the same mistake on the next trip.",

  how:
    "Transport telemetry, transport regimes, route milestones, door events, refrigeration-unit activity, and driver actions are treated as one trip model. " +
    "The system shows not just the fact of a deviation, but the full context: where it started, how long it lasted, what happened with doors, stops, ambient temperature, and compressor mode. " +
    "When an exception appears, responsible teams see it during the trip rather than after unloading. " +
    "For each event, the system automatically creates an evidence chain: route, regime, deviation, actions, and confirmations.",

  result:
    "The client began identifying temperature exceptions in transit rather than after delivery. " +
    "The number of disputed quality cases fell by 20–40%. " +
    "Investigation time for a single incident dropped from several hours to 10–20 minutes. " +
    "The team began responding in real time rather than after the fact, and delivery quality became more stable.",

  icon: "truck",
  tags: ["cold logistics", "fleet", "temperature", "route", "incident", "evidence"]
},

{
  industry: "logistics",
  industryLabel: "Logistics",
  title: "Warehouse and Docks: −28% Vehicle Waiting Time",
  kpiBadge: "↓ Dock waiting 20–35% · ↑ Throughput · ↓ Vehicle idle time",
  ttvBadge: "Operational model — 1–2 weeks",

  pain:
    "At distribution centers and warehouse sites, major losses often occur not on the route, but at the docks. " +
    "Vehicles arrive on schedule but wait 30–90 minutes for a free slot because actual order readiness, dock occupancy, and equipment availability are not visible in one place. " +
    "WMS shows one status, transport dispatch another, while the warehouse operates on the rapidly changing reality of the yard. " +
    "As a result, queues grow, vehicles sit idle, shipping windows are missed, and late-delivery penalties begin to appear.",

  how:
    "Order statuses from WMS, inbound vehicle schedules, dock occupancy, and forklift movement are tied into one warehouse-operation model. " +
    "Each vehicle gets a clear timeline: arrival, waiting, processing start, loading completion, and departure. " +
    "The system shows exactly where the delay forms: the order is not ready, the dock is occupied too long, equipment is insufficient, or vehicle sequencing is broken. " +
    "This makes it possible to manage the real transport flow on site, not just the formal schedule.",

  result:
    "The client cut average vehicle waiting time at the docks by 28%. " +
    "Warehouse throughput increased by about 15% without adding more docks. " +
    "Vehicle idle time and delay penalties declined. " +
    "Loading stopped being a zone of chaos and became a managed process with visible bottlenecks.",

  icon: "truck",
  tags: ["warehouse", "dock", "loading", "queue", "fleet", "WMS"]
}
];

useCases.forEach((u, i) => { u.seq = i + 1; });


/* -------------------------
   Numbers highlighter (uc pills + content)
------------------------- */


function highlightNumbers(html) {
  if (!html) return "";

  const MARK = "data-ucnum='1'";
  if (String(html).includes(MARK)) return html;

  let s = String(html);

  // normalize dashes and ×
  s = s.replace(/\u2013|\u2014/g, "–");
  s = s.replace(/\u00D7/g, "×");

  const wrap = (m) => `<span class="uc-num" ${MARK}>${m}</span>`;

  // allowed units / symbols directly next to number
  const unit =
    "(?:%|°C|x|×|X|k|K|m|km|kg|g|l|L|ms|s|sec|secs|seconds|min|mins|minutes|h|hr|hrs|hour|hours|day|days|week|weeks|month|months|year|years|devices|device|click|clicks|п\\.п\\.)";

  // 1) ranges with optional unit
  s = s.replace(
    new RegExp(`([+\\-<>]?\\d{1,4}(?:[.,]\\d+)?\\s?(?:–|-)\\s?\\d{1,4}(?:[.,]\\d+)?)(\\s?${unit})?`, "gi"),
    (_, a, b) => wrap(a + (b || ""))
  );

  // 2) single number + unit
  s = s.replace(
    new RegExp(`([+\\-<>]?\\d{1,4}(?:[.,]\\d+)?)(\\s?${unit})`, "gi"),
    (_, a, b) => wrap(a + b)
  );

  // 3) standalone signed numbers (+15, -3)
  s = s.replace(
    /\b[+\-]\d{1,4}(?:[.,]\d+)?\b/g,
    (m) => wrap(m)
  );

  // 4) contextual single numbers
  s = s.replace(
    /(\b(?:from|to|drops|drop|takes|within|in|for|over|under)\s+)([<>]?\d{1,4}(?:[.,]\d+)?)/gi,
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

  // ✅ ДОБАВЬ ЭТО
  function getUseCasesData() {
    const lang = document.documentElement.lang || "en";
    const dict = getDict(lang);

    // Берём переведённые кейсы из translations.ru.useCases, если они есть
    const arr = (dict && Array.isArray(dict.useCases) && dict.useCases.length)
      ? dict.useCases
      : useCases;

    // гарантируем seq (в RU-массиве может не быть seq)
    return arr.map((u, i) => ({ ...u, seq: i + 1 }));
  }

  function iconSvg(kind) {
    const s = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
    const wrap = (inner) =>
  `<svg class="uc-ico" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false" ${s}>${inner}</svg>`;


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
      default: return wrap(`<circle cx="12" cy="12" r="9"/>`);
    }
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
              <div class="uc-meta">
                <span class="uc-badge uc-badge--industry">${u.industryLabel || u.industry}</span>
                <span class="uc-mini" aria-hidden="true">${iconSvg(u.icon)}</span>
                </div>
              ${u.kpiBadge ? `<span class="uc-pill uc-pill--kpi">${highlightNumbers(u.kpiBadge)}</span>` : ""}
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
    if (!vp) return;

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

    cards.forEach((c) => c.classList.toggle("is-focus", c === best));
  }

  function updateCarousel() {
    const list = filtered();
    renderCards(list);

    const pv = perView();
    const maxPages = Math.ceil(list.length / pv) || 1;
    clampPage(maxPages);

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
   Pricing carousel (mobile only, circular)
------------------------- */
function setupPricingCarousel() {
  const root = document.getElementById("pricingCarousel");
  if (!root) return;

  // desktop: carousel not needed
  if (window.matchMedia("(min-width: 960px)").matches) {
    const dots = document.getElementById("pricingDots");
    if (dots) dots.innerHTML = "";
    window.__updatePricing = () => {};
    return;
  }

  const track = root.querySelector(".pc-track");
  const prev = root.querySelector(".pc-prev");
  const next = root.querySelector(".pc-next");
  const dots = document.getElementById("pricingDots");

  if (!track) return;

  let page = 0;

  const getCards = () => Array.from(track.children);

  function perView() {
    return window.matchMedia("(min-width: 1100px)").matches ? 4 : 1;
  }

  function pagesCount(total, pv) {
    return Math.max(1, Math.ceil(total / pv));
  }

  function normalizePage(p, pages) {
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

    if (prev) prev.disabled = false;
    if (next) next.disabled = false;

    renderDots(pages);
  }

  prev?.addEventListener("click", () => goToPage(page - 1));
  next?.addEventListener("click", () => goToPage(page + 1));

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
   FAQ accordion
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
        a.style.height = a.scrollHeight + "px";
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

/* -------------------------
   Forms (single init)
------------------------- */
function setupMiteForms() {
  const forms = document.querySelectorAll("form.js-mite-form");
  if (!forms.length) return;

  forms.forEach((form) => {
    // prevent double-binding if script is injected twice
    if (form.__miteBound) return;
    form.__miteBound = true;

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

        // success
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

/* -------------------------
   Boot
------------------------- */
window.MITE = window.MITE || {};
window.MITE.page = window.MITE.page || { id: "index" };

document.addEventListener("DOMContentLoaded", () => {
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

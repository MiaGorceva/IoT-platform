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
  "Объедините данные оборудования, систем и сервисов в единой модели. " +
  "Задайте правила, процессы и сценарии реакции — MITE обеспечивает их исполнение и фиксирует результат. " +
  "Каждое событие и каждое действие сохраняются и используются для анализа, обучения и последующего улучшения процессов.",
  "hero.secondaryCta": "Посмотреть платформу",
  "hero.meta1": "От пилотного проекта до промышленной эксплуатации — готово к внедрению",
  "hero.meta2": "Декларативная логика — описываете что делать, а не как кодить",
  "hero.meta3": "Любая сложность логики • любая промышленная реальность • быстрые изменения",
  "hero.badge": "<strong>«Просто, понятно и надёжно — ровно то, чего ждут бизнес-команды.»</strong>",


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
    "паттерны, отклонения, узкие места и повторяющееся поведение подсвечиваются и визуализируются, а не прячутся в логах или таблицах. " +
    "Ответственность, причина и эффект всегда явны.",

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
        "Итог: управляемый процесс с измеримыми KPI — по дизайну, а не «на героизме»"
      ]
    },
    {
      num: "Стабильное",
      title: "масштабирование без хаоса",
      text: "Успешные паттерны переиспользуются, а не внедряются заново. Масштабируемая стабильность вместо хрупкого роста",
      bullets: [
        "Плейбуки внедрения вместо разовых «под каждый объект»",
        "Много механизмов — одна управляемая модель исполнения",
        "Предсказуемое поведение на объектах, команды остаются надёжны на масштабе",
        "Итог: масштаб остаётся предсказуемым даже при росте операционной сложности"
      ]
    },
    {
      num: "Быстрая",
      title: "адаптация к изменениям",
      text: "Операции меняются ежедневно — система успевает.",
      bullets: [
        "Обновляйте правила и процессы за часы или дни",
        "Безопасные итерации с мгновенной обратной связью. Каждое изменение генерирует данные для следующего улучшения",
        "Новые правила сосуществуют со старыми",
        "Итог: более умные решения на основе реальных метрик"
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
    "Одна и та же операционная модель и строительные блоки поддерживают множество сценариев на разных объектах, в разных командах и во времени. " +
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
  "highlights.items.0.meta": "Если вы можете описать процесс — вы можете его исполнять.",

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
  "useReal.subtitle":
    "Внедренные истории успеха, где мы рассказываем как платформа работает в реальных задачах. Как помогает сократить брак и учеличить производительность, найти точки роста или понять причины убытков. Читайте ниже наши истории успеха. 
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
  useCases: [
    {
      industry: "pharma",
      industryLabel: "Фарма",
      title: "Холодовая цепь: перестаньте терять партии из-за контроля температуры «пост фактум»",
      kpiBadge: "↓ Списание 15–30% · ↓ Претензии 20–40% · ↓ Нагрузка QA",
      ttvBadge: "PoC на существующих данных - 1-2 недели",
      pain:
        "Данные уже есть: температурные логгеры, телематика транспорта, PDF от 3PL, вехи WMS/ERP — но всё живёт фрагментами. " +
        "Слепые зоны — именно там, где происходят потери: кросс-доки, задержки на границе, переупаковка, переадресация паллет. " +
        "ID «плывут» (датчик ↔ паллета ↔ отгрузка ↔ партия), а QA получает файлы уже после доставки. " +
        "В итоге отклонения находят, когда деньги уже потеряны, и каждый инцидент превращается в 3–5 систем + письма + ручную сверку (4–8 часов).",
      how:
        "MITE не заставляет «оснастить датчиками всё». Мы начинаем с того, что собираем то, что уже существует, и объединяем это в единую модель цепочки ответственности. " +
        "Потоки + вехи + геозоны + события дверей + цикл компрессора + режимы SKU становятся одним таймлайном на отгрузку/партию. " +
        "Правила запускают лестницу реакции, пока груз ещё в пути (водитель → диспетчер → QA), если отклонение держится дольше допустимого окна (например, 2–8°C). " +
        "AI коррелирует сигналы и контекст и показывает, где вероятнее всего началась проблема (время простоя, длительность открытия двери, внешние пики, аномалии компрессора).",
      result:
        "Отклонения обрабатываются «в полёте», а не превращаются в кризис при выпуске. " +
        "На проблемных направлениях риск списаний обычно снижается на 15–30% — потому что отклонения всплывают рано и сразу с понятными действиями. " +
        "Споры по претензиям падают на 20–40%: evidence-пакет (таймлайн + режим + действия + согласования + лог экспорта) формируется <2 минут. " +
        "Время расследования уменьшается с 4–8 часов до 20–40 минут — потому что система уже собрала историю.",
      icon: "pharma",
      tags: ["cold chain", "GDP", "batch", "traceability", "transport", "QA", "unification", "AI", "GDPR"]
    },
    {
      industry: "pharma",
      industryLabel: "Фарма",
      title: "Чистые помещения: перестаньте «собирать отклонения» по PDF и таблицам",
      kpiBadge: "↓ Отклонения 10–25% · ↓ Время разбора 50–70% · ↑ Готовность к аудиту",
      ttvBadge: "Пилот за 2–3 недели",
      pain:
         "Данные Environmental Monitoring есть — но они разрозненны: тренды BMS, показания сенсоров, калибровки, контроль доступа, сменные записи. " +
  "Когда происходит отклонение (температура, влажность, перепад давления, частицы), расследование превращается в поиск данных: кто заходил, что менялось, какая комната и какое окно экспозиции. " +
  "QA собирает доказательства постфактум, а первопричина часто остаётся неясной, потому что восстановить полный таймлайн слишком сложно. " +
  "В итоге разбор занимает часы или дни, отклонения повторяются, а подготовка к аудиту как марафон бумажной работы.",
      how:
        "MITE не предлагает сначала поставить ещё сенсоров. Мы забираем то, что уже есть (EM/BMS/доступ/циклы оборудования) и объединяем в одну аудито-дружелюбную модель. " +
        "Сигналы + состояния помещений + события дверей/доступа + окна экспозиции партии становятся единым управляемым таймлайном. " +
        "Правила задают пороги и контекстные условия (например, падение DP + дверь открыта > X сек + смена режима HVAC), чтобы отклонения были машинно-объяснимыми. " +
        "AI подсвечивает вероятные драйверы и повторяющиеся паттерны по комнатам/сменам — расследование начинается со шорт-листа, а не с пустого листа.",
      result:
        "Разбор отклонений становится повторяемым и быстрым: доказательства формируются системой, а не собираются вручную. " +
        "Площадки обычно сокращают время разбора на 50–70% и уменьшают повторяемость на 10–25% за счёт точечных улучшений на основе паттернов. " +
        "Подготовка к аудиту превращается в «экспорт пакета», а не «сбор доказательств». " +
        "И когда вы решите добавить новые сенсоры позже — они просто ложатся в ту же модель без переразработки.",
      icon: "pharma",
      tags: ["cleanroom", "EM", "GMP", "deviations", "QA", "audit trail", "unification", "AI", "GDPR"]
    },
    {
      industry: "manufacturing",
        industryLabel: "Производство",

        title:
        "Микроостановки: перестаньте терять время линии без понятной причины",

        kpiBadge:
        "↓ Микроостановки 15–30% · ↑ OEE на 2–6 п.п. · ↓ споры между службами",

        ttvBadge:
        "Первый рабочий сценарий за недели",

        pain:
        "Линия формально работает, но производительность теряется в десятках коротких остановок по 3–7 минут. " +
        "Ремонт говорит «операторы», операторы — «оборудование», руководство — «нестабильный процесс». " +
        "Данные разбросаны: сигналы PLC в одной системе, сменные записи в другой, заявки на ремонт в третьей. " +
        "Поэтому каждая остановка объясняется по-разному, а повторяющиеся причины остаются незамеченными.",

        how:
        "MITE объединяет состояния оборудования, сигналы PLC, события линии, действия операторов и контекст материалов в единую модель событий. " +
        "Система автоматически выявляет повторяющиеся последовательности остановок: что происходило перед остановкой, сколько она длилась и в каких условиях возникла. " +
        "Это позволяет увидеть реальные причины — например нестабильную подачу материала, ошибки после переналадки или ложные сигналы датчиков. " +
        "Доступ к данным настраивается по ролям, а действия пользователей фиксируются в журнале.",

        result:
        "Микроостановки перестают выглядеть случайными — становятся понятными повторяющимися сценариями. " +
        "Заводы обычно снижают их количество на 15–30% и получают рост OEE на 2–6 процентных пунктов без модернизации оборудования. " +
        "Обсуждение причин переходит от предположений к фактам, и принятые меры дают устойчивый результат.",

        icon: "factory",

        tags: ["downtime", "OEE", "PLC", "micro-stops", "patterns"],
    {
      industry: "manufacturing",
      industryLabel: "Производство",
      title: "Энергопотери: перестаньте платить пики за машины, которые ничего не делают",
      kpiBadge: "↓ Холостое потребление 10–20% · ↓ Пиковые штрафы · ↑ Маржа на единицу",
      ttvBadge: "Пилот за 2–3 недели",
      pain:
        "Энергия дорожает, а выпуск стоит. Службы видят общий kWh, производство — штуки, финансы — счета, но утечки не видно. " +
        "Часть активов висит в энергозатратных состояниях между партиями — особенно на переналадках и ночных сменах. " +
        "Из-за разрыва данных бизнес не может доказать, где исчезают деньги — и это нормализуется как «стоимость ведения бизнеса».",
      how:
        "MITE коррелирует кривые нагрузки/времени работы с производственными заказами, расписанием и контекстом смен. " +
        "Правила детектируют «высокая мощность + нет валидного производственного состояния» и подсвечивают повторяющиеся холостые паттерны по активам/сменам/окнам времени. " +
        "AI показывает крупнейших драйверов затрат и предлагает минимальные операционные изменения (триггеры чек-листа передачи смены, профили охлаждения, авто-переходы состояний). " +
        "GDPR-контроль для атрибуции: RBAC, аудит-логи и политики хранения.",
      result:
        "Обычно удаётся снизить холостые энергопотери на 10–20% без нового оборудования. " +
        "Пиковые штрафы падают, потому что главные нарушители контролируются, а не угадываются. " +
        "Энергия становится операционным KPI, на который можно влиять — а не ежемесячным сюрпризом.",
      icon: "bolt",
      tags: ["energy", "idle time", "changeover", "cost control", "AI", "GDPR"]
    },
    {
      industry: "manufacturing",
      industryLabel: "Производство",
      title: "Брак: перестаньте узнавать о потере выхода, когда уже всё произведено",
      kpiBadge: "↓ Брак 10–25% · ↑ First-pass yield · ↓ Нагрузка на передел",
      ttvBadge: "Пилот за 3–5 недель",
      pain:
        "Брак выглядит «случайным»: неделю нормально, потом больно. Отчёты качества запаздывают, операторы подкручивают настройки, инженеры анализируют через недели. " +
        "Параметры процесса, среда и вмешательства живут в разных системах — корреляции теряются. " +
        "Потери копятся тихо, пока плохой месяц не запускает реактивное тушение пожаров.",
      how:
        "MITE объединяет параметры процесса, условия среды, лоты материалов и вмешательства оператора в одну трассируемую модель. " +
        "Правила подсвечивают рискованные комбинации параметров и дрейф за стабильные диапазоны. " +
        "AI находит повторяемые взаимодействия (например, окно влажности + набор параметров + паттерн разгона) и предлагает «ограждения» до появления дефектов. " +
        "GDPR: ролевой доступ, лог экспорта, политики хранения.",
      result:
        "Команды переходят от реакции на дефект к предотвращению. Типовые внедрения снижают брак на 10–25% и улучшают first-pass yield. " +
        "Root cause находится быстрее, потому что система хранит полный контекст — а не только финальный код дефекта.",
      icon: "wrench",
      tags: ["scrap", "yield", "quality", "parameters", "prevention", "GDPR"]
    },
    {
      industry: "manufacturing",
      industryLabel: "Производство",
      title: "Расхождение запасов: перестаньте терять деньги в «маленьких» разрывах сверки",
      kpiBadge: "↑ Точность запасов >99% · ↓ Списания · ↓ Время сверки",
      ttvBadge: "Пилот за 2–4 недели",
      pain:
        "Ежемесячная сверка показывает недостачи, но никто не может доказать почему. Склад винит пересчёт, производство — тайминг, ERP — дисциплину процесса. " +
        "Расход на площадке происходит до того, как подтверждения появляются в системе. " +
        "Маленькие разрывы складываются в списания, дефициты, срочные закупки и потерю доверия к планированию.",
      how:
        "MITE выравнивает перемещения материалов, триггеры потребления на оборудовании и регистрации партий в одном таймлайне исполнения. " +
        "Правила детектируют асинхронности (потрачено-до-подтверждения, перемещено-без-контекста) и показывают, где начинается дрейф. " +
        "AI подсвечивает повторяющиеся сценарии несоответствий по сменам/станциям/шагам процесса — исправления становятся точечными. " +
        "GDPR: RBAC, аудит-логи, настройки ретенции.",
      result:
        "Точность запасов обычно растёт до >99%, а сверка превращается в отчёт — а не в охоту. " +
        "Планирование стабилизируется, срочность падает, оборотный капитал перестаёт утекать через «мелкие» несостыковки.",
      icon: "boxes",
      tags: ["inventory", "ERP", "material flow", "accuracy", "loss prevention", "GDPR"]
    },
    {
      industry: "manufacturing",
      industryLabel: "Производство",
      title: "Прибыльность смен: перестаньте пропускать часы, в которых утекает маржа",
      kpiBadge: "↑ Маржа +5–12% · ↓ Потери на переналадке · ↑ Стабильность выпуска",
      ttvBadge: "Пилот за 3–5 недель",
      pain:
        "В отчётах линия выглядит прибыльной, но некоторые недели всегда хуже. Финансы видят маржу продукта, ops видят сменную эффективность — и это не связывается. " +
        "Переналадки затягиваются, разгон медленнее, «мелкие» задержки копятся — но стоимость прячется внутри агрегированной отчётности.",
      how:
        "MITE связывает паттерны исполнения (время переналадки, кривые разгона, подписи остановок) со стоимостью и вкладом в маржу по сменам/линиям/площадкам. " +
        "Правила детектируют «известно плохие последовательности» и закрепляют best-practice шаги разгона. " +
        "AI показывает, какие сменные паттерны и комбинации расписания стабильно дают лучший результат. " +
        "GDPR: RBAC, псевдонимизация при необходимости, лог экспорта и политики хранения.",
      result:
        "Обычно маржа растёт на 5–12% без смены микса — за счёт удаления повторяющихся потерь исполнения. " +
        "Планирование становится доказательным: вы тиражируете высокоэффективные паттерны, а не надеетесь на них.",
      icon: "chart",
      tags: ["margin", "scheduling", "changeover", "ramp-up", "execution", "GDPR"]
    },
    {
      industry: "construction",
      industryLabel: "Строительство",
      title: "Готовность бетона: перестаньте планировать бригады по «правилу трёх дней»",
      kpiBadge: "↑ Выполнение в срок · ↓ Простои бригад · ↓ События переделки",
      ttvBadge: "Пилот за 2–4 недели",
      pain:
        "Планирование выдержки бетона часто опирается на простые правила («до понедельника», «3 дня и проверим») и опыт прораба. " +
        "Но скорость набора прочности зависит от смеси, температуры, влажности, ветра, дождей и условий укладки. " +
        "Эти факторы меняются по дням и площадкам — из-за чего сдвигаются графики, люди ждут, бетон «держат» лишнее, а следующие работы тормозятся. " +
        "Цена прячется в простоях, ожидании крана и бригад, и в редких микро-дефектах, которые приводят к переделке, когда предположение не совпало с реальностью.",
      how:
        "MITE не начинается с требования поставить десятки новых сенсоров. Мы интегрируем то, что уже есть: данные смеси из тикетов, прогноз погоды/API, временные метки укладки, лабораторные испытания и любые доступные встроенные показания. " +
        "Все сигналы объединяются в **цифровой таймлайн выдержки на каждый залив**. Правила моделируют ожидаемые окна набора прочности с учётом погоды и контекста. " +
        "AI-слой коррелирует входы и оценивает вероятность готовности, показывая **когда бетон, скорее всего, достаточно прочен для следующей операции**, а не «по календарю». " +
        "Так туманный план («должно быть норм») превращается в решение на основе данных с порогами и уровнем уверенности — мобилизация бригад, снятие опалубки и триггеры следующего этапа становятся привязаны к реальности.",
      result:
        "Планёрки переходят от «типовых сроков» к общим окнам готовности, основанным на доказательствах. " +
        "Простой бригад снижается, потому что выход привязан к прогнозируемой прочности, а не к предположениям. " +
        "Снижается и риск преждевременных действий с микро-дефектами, и редкие авралы с переработками. " +
        "Команда видит общую картину — погодная коррекция + контекст конструкции — в одной модели вместо Excel и памяти. " +
        "Обсуждение перестаёт быть спором про «количество дней» и становится обзором готовности с ясными точками решений.",
      icon: "wrench",
      tags: ["construction", "concrete readiness", "weather forecasting", "data unification", "AI prediction", "scheduling", "planning"]
    },
    {
      industry: "manufacturing",
      industryLabel: "Производство",
      title: "Мясопереработка: контролируйте усушку, внутренние потери и «тихий» ущерб холодовой цепи",
      kpiBadge: "↑ Трассируемость лота · ↓ Необъяснимая потеря веса · ↑ Дисциплина холодных камер",
      ttvBadge: "Пилот за 2–4 недели",
      pain:
        "Потери на мясокомбинате редко выглядят как один большой инцидент — они накапливаются фрагментами. " +
        "Несколько килограммов «ушло» после обвалки. Паллету пере-маркировали. Короб недовесили на 200 грамм. " +
        "Ночные перемещения между камерами без связанной производственной задачи. " +
        "Короткие температурные отклонения, которые не бьют тревогу, но ускоряют порчу в течение дней. " +
        "ERP показывает теоретический выход. Производство — фактический. Бухгалтерия видит усушку в конце месяца. " +
        "Но никто не видит цепочку приёмка → разделка → обрезь → упаковка → хранение → отгрузка в одной согласованной модели исполнения.",
      how:
        "MITE забирает входные веса, batch ID, операции на весах, логи обрези, данные упаковки, температурные логи камер, события доступа, расписание смен и отгрузки из ERP. " +
        "Все события нормализуются в один таймлайн на лот: вес вход → шаг трансформации → зона ответственности → время → результирующий вес/состояние. " +
        "Правила ловят аномалии: выход вне исторического диапазона для вида разделки, повторяющиеся микродельты на упаковке, перемещения паллет без задачи, температурное отклонение + всплески открытия дверей. " +
        "AI сравнивает стабильные и проблемные смены и подсвечивает повторяемые паттерны: зона + окно времени + состав смены + последовательность операций, где концентрируется необъяснимая потеря. " +
        "Вместо отдельных несостыковок вы видите цепочку причинности.",
      result:
        "Усушка перестаёт быть темой месячного бухучёта — становится трассируемым операционным паттерном. " +
        "Проблемные зоны и окна времени находятся по доказательствам, а не по подозрениям. " +
        "Отклонения по камерам связываются с влиянием на продукт, а не просто живут в аларм-логах. " +
        "Обсуждение выхода переходит от средних значений к поведению исполнения по каждому лоту. " +
        "Менеджмент получает управляемый и объяснимый поток продукта от дока приёмки до машины отгрузки.",
      icon: "factory",
      tags: ["meat processing", "yield control", "internal theft", "cold chain", "weight drift", "lot traceability", "AI", "execution model"]
    },
    {
      industry: "manufacturing",
      industryLabel: "Производство",
      title: "Управление KPI: KPI должны запускать действия, а не просто украшать дашборды",
      kpiBadge: "↑ Дисциплина исполнения · ↓ «театр отчётности»",
      ttvBadge: "Пилот за дни",
      pain:
        "KPI есть, но они не меняют поведение. Команды отчитываются цифрами, а исполнение остаётся неуправляемым и причины повторяются. " +
        "Вы платите за «красивые дашборды», пока потери остаются встроенными в ежедневные операции.",
      how:
        "В MITE KPI привязаны к workflow: триггер → владелец → действие → верификация → обновление KPI. " +
        "AI показывает, какие KPI улучшаются временно и какие действия коррелируют с устойчивым улучшением — менеджмент фокусируется на том, что реально работает.",
      result:
        "KPI превращаются в рычаги управления, а не в ежемесячные слайды. " +
        "Ответственность измерима, улучшения становятся повторяемыми.",
      icon: "kpi",
      tags: ["kpi", "governance", "execution", "accountability"]
    },
    {
      industry: "agriculture",
      industryLabel: "Сельское хозяйство",
      title: "Микроклимат фермы: условия → workflow действий → снижение потерь",
      kpiBadge: "↓ Потери 10–25% · ↑ Продуктивность · ↓ Человеческий фактор",
      ttvBadge: "Пилот за дни",
      pain:
        "Команды реагируют поздно на дрейф температуры/влажности/аммиака. Один участок тихо выходит из режима на 40–60 минут — эффект проявляется позже как стресс и падение продуктивности. " +
        "Средние значения выглядят нормальными, но потери копятся там, где никто не смотрит.",
      how:
        "MITE моделирует объект как зоны + режимы по возрасту/сезону. Корреляция нескольких сенсоров запускает эскалацию, если дрейф держится 10–15 минут. " +
        "AI предлагает вероятные причины (паттерн вентиляции + события дверей + цикл нагревателя), чтобы человек вмешивался только когда это важно.",
      result:
        "Меньше потерь и более стабильные условия с измеримым улучшением (часто 10–25%) и меньшей потребностью в постоянном контроле.",
      icon: "cow",
      tags: ["barn", "microclimate", "ammonia", "loss", "kpi"]
    },
    {
      industry: "agriculture",
      industryLabel: "Сельское хозяйство",
      title: "Птичник: раннее предупреждение отказов вентиляции",
      kpiBadge: "↓ Пики падежа 10–20% · ↓ Критические события",
      ttvBadge: "Минуты, а не недели",
      pain:
        "Проблемы вентиляции развиваются быстро. Операторы видят «средняя температура ок», пока CO₂ растёт в одном сегменте. " +
        "Когда это замечают — уже критическое событие и мгновенная стоимость (падёж, влияние на рост, регуляторный стресс).",
      how:
        "MITE коррелирует температуру + CO₂ + состояние вентиляторов + события питания по зонам. " +
        "AI обнаруживает недоработку (например, группа вентиляторов №2) по вибрации/току и направляет понятный чек-лист ответственным с подтверждением закрытия.",
      result:
        "Меньше критических событий и измеримое снижение пиков падежа (часто 10–20% на проблемных корпусах).",
      icon: "chicken",
      tags: ["poultry", "ventilation", "co2", "alerting"]
    },
    {
      industry: "agriculture",
      industryLabel: "Сельское хозяйство",
      title: "Орошение: влажность почвы → расписание → экономия воды с доказательствами",
      kpiBadge: "↓ Расход воды 8–20% · ↑ Стабильность урожая",
      ttvBadge: "Пилот за дни",
      pain:
        "Орошение идёт по расписанию, а не по состоянию. Вода тратится впустую, а экономию трудно доказать — данные разорваны. " +
        "Одни зоны переливают, другие недополивают — стабильность урожая страдает.",
      how:
        "MITE объединяет влажность почвы + погоду + модель зон. Правила запускают задачи полива с ответственностью. " +
        "AI подсвечивает зоны, где влажность восстанавливается хуже (почва / забитые линии) — обслуживание становится точечным, а не «на глаз».",
      result:
        "Экономия воды 8–20% на контролируемых зонах с доказательной базой, плюс более стабильный урожай.",
      icon: "drop",
      tags: ["irrigation", "moisture", "water", "yield"]
    },
    {
      industry: "construction",
      industryLabel: "Строительство",
      title: "Стройплощадки: перестаньте терять технику и часы в «невидимых» разрывах",
      kpiBadge: "↓ Потери · ↓ Простои 10–25% · ↑ Скорость возврата · ↑ Доказуемая утилизация",
      ttvBadge: "Пилот за 2–4 недели",
      pain:
        "Сигналы уже частично есть: GPS-трекеры на части активов, телематика аренды, журналы проходных, отчёты охраны, сменные листы, счета. " +
        "Но картина фрагментирована: активы ездят между объектами, теги не совпадают с арендными ID, «кто был последним» превращается в расследование в мессенджере. " +
        "Кражи и misuse происходят в одни и те же окна: ночи, выходные, пересменки, смена субподрядчика — когда ответственность размыта. " +
        "И даже без кражи техника тихо сжигает деньги в простое, потому что утилизация оценивается по плану, а не по реальности.",
      how:
        "MITE не заставляет «обвешать датчиками площадку». Мы собираем то, что уже есть, и объединяем в одну операционную модель: " +
        "реестр активов (собственное/аренда), карта площадки/зон, события проходных, потоки телематики/GPS, наряды и ответственность смен. " +
        "Правила ловят риск-паттерны: актив покидает геозону после часов, движется без утверждённой задачи, «молчит» в середине смены или появляется на новом объекте без передачи. " +
        "AI коррелирует движение + доступ + контекст задач и показывает, где начинается утечка (повторяющиеся зоны, команды, окна времени, последовательности субподрядчиков) и предлагает самый короткий контур контроля: проверить → назначить → заблокировать → вернуть.",
      result:
        "Инциденты перестают быть «тайной» — становятся кейсами исполнения с владельцами, таймлайном и доказательствами. " +
        "Потери падают, потому что аномалии всплывают рано (а не когда актив уже исчез), и действия запускаются сразу. " +
        "Утилизация становится измеримой: видно, что реально работает, а что простаивает 10–25% времени в повторяемых паттернах. " +
        "Появляются evidence-пакеты для аренды/претензий и повторяемый плейбук, как не допустить тот же сценарий через неделю.",
      icon: "wrench",
      tags: ["construction", "equipment", "theft prevention", "utilization", "geofence", "handover", "unification", "AI", "workflows"]
    },
    {
      industry: "energy",
      industryLabel: "Энергетика",
      title: "Парки батарей: мониторинг здоровья + предиктивное планирование замен",
      kpiBadge: "↓ Отказы · ↓ Стоимость замен · ↑ Предсказуемость",
      ttvBadge: "Пилот за дни",
      pain:
        "Батарейные парки выходят из строя непредсказуемо. Команды меняют слишком рано или слишком поздно. Простой дорогой, причины не ясны. " +
        "Как владелец, вы платите либо за отказы, либо за лишний capex — и то, и другое убивает маржу.",
      how:
        "MITE отслеживает индикаторы здоровья по площадкам и критичности. Правила формируют приоритизацию алертов и workflow замен. " +
        "AI подсвечивает деградационные паттерны (температурные воздействия + глубокие циклы) и прогнозирует самые рискованные площадки на 2–4 недели вперёд.",
      result:
        "Меньше отказов и предсказуемые окна обслуживания. Затраты на замену планируются, а не тушатся реактивно.",
      icon: "battery",
      tags: ["battery", "predictive", "downtime", "maintenance"]
    },
    {
      industry: "environment",
      industryLabel: "Экология",
      title: "Качество воздуха: сеть сенсоров → теплокарты → действия и проверки",
      kpiBadge: "↑ Видимость · ↓ Время реакции · ↑ Уверенность в комплаенсе",
      ttvBadge: "Минуты, а не недели",
      pain:
        "Сырые показания не превращаются в решения. Команды спорят «где хуже» и «почему», потому что сенсоры не привязаны к контексту и ветру. " +
        "Это создаёт управленческий риск: медленная реакция, неясная ответственность и слабая доказательная база по комплаенсу.",
      how:
        "MITE объединяет сенсоры + геомодель + контекст ветра. Дашборды показывают теплокарты, а не таблицы. " +
        "AI подсвечивает вероятные источники, коррелируя направление ветра со всплесками и паттернами по времени суток, затем запускает действия на проверку и отчётность.",
      result:
        "Чёткая приоритизация, более быстрые вмешательства и отчётность с защищаемыми доказательствами.",
      icon: "wind",
      tags: ["air", "map", "heatmap", "wind", "compliance"]
    },
    {
      industry: "smartcities",
      industryLabel: "Умные города",
      title: "Уличное освещение: неисправности → маршрутизация → закрытие SLA (с доказательствами)",
      kpiBadge: "↓ Время ремонта · ↑ Выполнение SLA · ↓ Жалобы",
      ttvBadge: "Пилот за дни",
      pain:
        "Жалобы жителей растут, а ремонт идёт медленно: ответственность размыта, SLA не управляется, доказательств закрытия нет. " +
        "Для муниципалитета/оператора это означает эскалации, политическое давление и споры с подрядчиками.",
      how:
        "MITE забирает телеметрию светильников + контекст сети. Правила классифицируют неисправности и направляют подрядчикам. " +
        "Таймеры SLA эскалируют через 24–48 часов. AI кластеризует повторяющиеся отказы по сегментам и разделяет проблемы фидера и ламп.",
      result:
        "Быстрее ремонты, меньше повторных жалоб и измеримое выполнение SLA с доказательством закрытия.",
      icon: "lamp",
      tags: ["lighting", "sla", "routing", "contractors"]
    },
    {
      industry: "logistics",
      industryLabel: "Логистика",
      title: "Холодная логистика: контекст маршрута + обработка исключений + evidence-пакеты",
      kpiBadge: "↓ Претензии · ↓ Споры · ↑ Качество доставок",
      ttvBadge: "Доказательства в 1 клик",
      pain:
        "Температурные исключения замечают после доставки. Данные разорваны, споры болезненны, ответственность неясна. " +
        "Каждый нерешённый инцидент съедает маржу: списания, чарджбеки и потеря доверия.",
      how:
        "MITE объединяет датчики транспорта + вехи маршрута + правила режимов. Исключения запускают workflow водителя/диспетчера с подтверждениями. " +
        "AI показывает вероятные причины (длительность открытия двери + паттерн компрессора + внешний пик), чтобы действовать в пути, а не постфактум.",
      result:
        "Меньше претензий, быстрее разбор споров и выше качество доставок — с экспортируемыми доказательствами.",
      icon: "truck",
      tags: ["fleet", "cold", "route", "evidence"]
    }
  ]
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
    industryLabel: "Pharma",
    title: "Cold chain: stop losing batches to post-factum temperature control",
    kpiBadge: "↓ Spoilage 15–30% · ↓ Claims 20–40% · ↓ QA workload",
    ttvBadge: "Pilot in 2–4 weeks",
    pain:
      "You already have data: temperature loggers, truck telematics, 3PL PDFs, WMS/ERP milestones — but it lives in fragments. " +
      "The blind spots are exactly where losses happen: cross-dock, border delays, re-labeling, pallet reassignment. " +
      "IDs drift (sensor ↔ pallet ↔ shipment ↔ batch), and QA gets files only after delivery. " +
      "So excursions are discovered when the money is gone, and each incident becomes 3–5 systems + emails + manual reconciliation (4–8 hours).",
    how:
      "MITE doesn’t force you to ‘instrument everything’. We start by collecting what already exists and unifying it into one chain-of-custody model. " +
      "Streams + milestones + geofences + door events + compressor duty cycle + SKU regimes become one timeline per shipment/batch. " +
      "Rules trigger a response ladder while the load is still moving (driver → dispatcher → QA) when deviations persist beyond your window (e.g., 2–8°C). " +
      "AI correlates signals and context to show where the problem likely started (dwell time, door-open duration, ambient spikes, compressor anomalies).",
    result:
      "Excursions are handled in-flight instead of becoming a release-time crisis. " +
      "Problem lanes typically see 15–30% lower spoilage risk because deviations surface early with clear next actions. " +
      "Claim disputes drop 20–40% with exportable evidence packs (timeline + regime + actions + approvals + export log) in <2 minutes. " +
      "Investigation time shrinks from 4–8 hours to 20–40 minutes — because the system already unified the story.",
    icon: "pharma",
    tags: ["cold chain", "GDP", "batch", "traceability", "transport", "QA", "unification", "AI", "GDPR"]
  },

  // 2) Pharma — Environmental monitoring / cleanrooms (use existing EM/BMS, unify + AI)
  {
    industry: "pharma",
    industryLabel: "Pharma",
    title: "Cleanroom monitoring: stop chasing deviations across PDFs and spreadsheets",
    kpiBadge: "↓ Deviations 10–25% · ↓ Review time 50–70% · ↑ Audit readiness",
    ttvBadge: "Pilot in 2–3 weeks",
    pain:
      "EM data exists — but it’s scattered: BMS trends, standalone sensors, calibration records, access logs, manual shift notes. " +
      "When an excursion happens (temp/RH/DP/particles), the ‘investigation’ is mostly data hunting: who entered, what changed, which room, which exposure window. " +
      "QA assembles evidence after the fact, and root cause collapses to ‘operator error’ because reconstructing the full timeline is too hard. " +
      "The result: slow reviews, repeat deviations, and audit prep as a paperwork marathon.",
    how:
      "MITE doesn’t push you to add more sensors first. We ingest what you already have (EM/BMS/access/equipment cycles) and unify it into one audit-friendly model. " +
      "Signals + room states + door/access events + batch exposure windows become a single governed timeline. " +
      "Rules define thresholds and contextual conditions (e.g., DP drop + door-open > X sec + HVAC mode change) so deviations are machine-explainable. " +
      "AI highlights probable drivers and recurring patterns across rooms/shifts, so investigations start with a shortlist — not a blank page.",
    result:
      "Deviation reviews become repeatable and fast: evidence is generated from the system, not rebuilt manually. " +
      "Sites typically cut review time by 50–70% and reduce recurring deviations by 10–25% through targeted fixes driven by patterns. " +
      "Audit prep becomes ‘export the pack’ instead of ‘collect the proof’. " +
      "And when you *do* decide to add new sensors later — they drop into the same unified model without redesign.",
    icon: "pharma",
    tags: ["cleanroom", "EM", "GMP", "deviations", "QA", "audit trail", "unification", "AI", "GDPR"]
  },

  // 3) Manufacturing — Micro-stops / downtime
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Micro-stops: stop paying for downtime that never gets a root cause",
    kpiBadge: "↓ Micro-stops 15–30% · ↑ OEE 2–6 pts · ↓ ‘blame ping-pong’",
    ttvBadge: "Pilot in 2–4 weeks",
    pain:
      "The line ‘works’, but you lose money in 3–7 minute stops all day. Maintenance says ‘operators’, operators say ‘equipment’, management says ‘variability’. " +
      "PLC signals sit in one place, shift notes in another, and maintenance tickets in a third. " +
      "So each micro-stop gets explained differently — and nothing improves because the execution chain behind each stop is invisible.",
    how:
      "MITE aligns machine states, upstream flow, alarms, operator actions, and material context into one operational model and timeline. " +
      "Rules detect repeating stop signatures (sequence + duration + preceding conditions). " +
      "AI clusters similar events and highlights the most consistent precursors (feed instability, changeover drift, sensor noise vs real process). " +
      "Access to shift/person data is GDPR-controlled (RBAC, export logging, configurable retention; use pseudonymous identifiers when needed).",
    result:
      "Micro-stops become explainable patterns instead of ‘random’. Plants typically cut micro-stops by 15–30% and gain 2–6 OEE points with the same hardware. " +
      "Meetings shift from opinions to evidence — and fixes stick because the triggers are measurable.",
    icon: "factory",
    tags: ["downtime", "OEE", "PLC", "micro-stops", "patterns", "GDPR"]
  },

  // 4) Manufacturing — Energy waste
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Energy waste: stop paying peak bills for machines doing nothing",
    kpiBadge: "↓ Idle energy 10–20% · ↓ Peak penalties · ↑ Margin per unit",
    ttvBadge: "Pilot in 2–3 weeks",
    pain:
      "Energy costs rise while output stays flat. Facilities track total kWh, production tracks units, finance tracks invoices — and nobody sees the leak. " +
      "Some assets run in high-consumption states between batches, especially during changeovers and night shifts. " +
      "Because the data is split, the business can’t prove where the money disappears — so it gets normalized as ‘cost of doing business’.",
    how:
      "MITE correlates runtime/load curves with production orders, schedules, and shift context. " +
      "Rules detect ‘high draw + no valid production state’ and flag recurring idle patterns by asset/shift/time window. " +
      "AI surfaces the biggest cost drivers and suggests the smallest operational changes (handover checklist triggers, cooldown profiles, auto-state transitions). " +
      "GDPR-ready controls apply to operator/shift attribution: RBAC, audit logs, and configurable retention.",
    result:
      "Plants typically cut idle energy waste by 10–20% without new equipment. " +
      "Peak penalties reduce because the biggest offenders are controlled, not guessed. " +
      "Energy becomes an operational KPI you can execute on — not a monthly surprise.",
    icon: "bolt",
    tags: ["energy", "idle time", "changeover", "cost control", "AI", "GDPR"]
  },

  // 5) Manufacturing — Scrap / yield
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Scrap: stop discovering yield loss after you’ve already produced it",
    kpiBadge: "↓ Scrap 10–25% · ↑ First-pass yield · ↓ Rework load",
    ttvBadge: "Pilot in 3–5 weeks",
    pain:
      "Scrap looks ‘random’: one week fine, next week painful. Quality reports lag, operators tweak settings, engineers analyze weeks later. " +
      "Process parameters, environment, and interventions live in different systems, so correlations are missed. " +
      "Losses accumulate quietly until a bad month forces reactive firefighting.",
    how:
      "MITE unifies process parameters, environmental conditions, material lots, and operator interventions into one traceable model. " +
      "Rules flag risky parameter combinations and drift beyond stable bands. " +
      "AI finds repeatable interactions (e.g., humidity window + parameter set + ramp-up pattern) and proposes guardrails before defects happen. " +
      "GDPR handling is controlled for personal data: role-based access, export logging, retention policies.",
    result:
      "Teams move from defect reaction to prevention. Typical deployments reduce scrap by 10–25% and improve first-pass yield. " +
      "Root cause becomes faster because the system keeps the full context — not just the final defect code.",
    icon: "wrench",
    tags: ["scrap", "yield", "quality", "parameters", "prevention", "GDPR"]
  },

  // 6) Manufacturing — Inventory drift / “invisible” losses
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Inventory drift: stop losing money in ‘small’ reconciliation gaps",
    kpiBadge: "↑ Inventory accuracy >99% · ↓ Write-offs · ↓ Reconciliation time",
    ttvBadge: "Pilot in 2–4 weeks",
    pain:
      "Monthly reconciliation shows shrinkage, but nobody can prove why. Warehouse blames counting, production blames timing, ERP blames process discipline. " +
      "Consumption happens on the floor before confirmations appear in the system. " +
      "Small gaps compound into write-offs, stockouts, expediting costs, and lost trust in planning.",
    how:
      "MITE aligns material movements, machine consumption triggers, and batch registrations in one execution timeline. " +
      "Rules detect asynchronous events (consumed-before-confirmed, moved-without-context) and flag where the drift starts. " +
      "AI highlights recurring mismatch scenarios by shift, station, or process step, so fixes are targeted. " +
      "GDPR controls cover staff attribution and exports: RBAC, audit logs, and retention settings.",
    result:
      "Inventory accuracy typically improves to >99% and reconciliation becomes a report — not a hunt. " +
      "Planning stabilizes, expediting drops, and working capital stops leaking through ‘tiny’ inconsistencies.",
    icon: "boxes",
    tags: ["inventory", "ERP", "material flow", "accuracy", "loss prevention", "GDPR"]
  },

  // 7) Manufacturing — “Profitable line” hiding unprofitable shifts
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Shift profitability: stop missing the hours where margin is leaking",
    kpiBadge: "↑ Margin +5–12% · ↓ Changeover loss · ↑ Throughput stability",
    ttvBadge: "Pilot in 3–5 weeks",
    pain:
      "At monthly level the product line looks profitable, but certain weeks are always worse. Finance sees product margin, ops sees shift performance, and they don’t connect. " +
      "Changeovers run longer, ramp-ups are slower, and ‘minor’ delays stack up — but the cost is hidden inside aggregated reporting.",
    how:
      "MITE maps execution patterns (changeover time, ramp-up curves, stoppage signatures) to cost and margin contribution by shift/line/site. " +
      "Rules detect ‘known bad sequences’ and enforce best-practice ramp-up steps. " +
      "AI identifies which shift patterns and scheduling combinations reliably produce better outcomes. " +
      "GDPR-ready governance applies to staff-linked data: RBAC, pseudonymous IDs where appropriate, export logging, and retention controls.",
    result:
      "Plants typically improve margin by 5–12% without changing product mix — by removing recurring execution loss. " +
      "Scheduling becomes evidence-driven: you replicate high-performing patterns instead of hoping for them.",
    icon: "chart",
    tags: ["margin", "scheduling", "changeover", "ramp-up", "execution", "GDPR"]
  },

  //8 // Construction — Data-informed concrete curing & readiness (no guesswork, unify existing signals + AI forecasting)
{
  industry: "construction",
  industryLabel: "Construction",
  title: "Concrete readiness: stop planning crews and formwork by old “3-day rules”",
  kpiBadge: "↑ On-time actions · ↓ Idle crew hours · ↓ Rework events",
  ttvBadge: "Pilot in 2–4 weeks",
  pain:
    "Traditional concrete curing planning still relies on simple rules (“till Monday”, “3 days and check”) and crew intuition. " +
    "But curing progress depends on many factors: mix design, ambient temperature, humidity, wind exposure, rain risk and placement conditions. " +
    "These variables shift day-to-day and site-to-site, so schedules slip, workers wait, concrete waits longer than needed, and next trades delay. " +
    "The result: costs hide in idle hours, crane and crew waiting, and occasional micro-defects that trigger rework because assumptions didn’t match reality.",
  how:
    "MITE does **not** start by telling you to install dozens of new sensors. We integrate what already exists — mix data from batch tickets, weather forecasts/APIs, placement timestamps, lab test results, and any embedded readings present. " +
    "All these signals are unified into a **digital curing timeline per pour**. Rules model expected strength gain windows, adjusted for weather and context. " +
    "An AI-assisted predictive layer correlates these inputs to infer readiness probabilities, showing **when concrete is likely strong enough for the next operation** rather than just assuming based on a fixed day count. " +
    "This predictive insight turns a foggy plan (‘should be ok’) into a data-informed decision with thresholds and confidence levels — crew mobilization, formwork removal, and next phase triggers aligned with reality.",
  result:
    "Line plans and standups change from relying on “typical timelines” to **shared evidence-based readiness windows**. " +
    "Idle crew time drops because mobilizations align with predicted strength, not assumptions. " +
    "Premature actions with micro-defects and the rare overtime rush both become far less common. " +
    "The team sees the combined picture — weather-adjusted forecasts + structural context — in one unified model instead of spreadsheets and memory. " +
    "Planning meetings shift from debating arbitrary day counts to reviewing explicit readiness insight with clear decision points.",
  icon: "wrench",
  tags: ["construction", "concrete readiness", "weather forecasting", "data unification", "AI prediction", "scheduling", "planning"]
},

  // 9 Manufacturing — Meat processing: theft, spoilage & weight drift control
{
  industry: "manufacturing",
  industryLabel: "Manufacturing",
  title: "Meat processing: control shrinkage, internal theft and silent cold-chain damage",
  kpiBadge: "↑ Full lot traceability · ↓ Unexplained weight loss · ↑ Cold-room discipline",
  ttvBadge: "Pilot in 2–4 weeks",
  pain:
    "In meat plants, losses rarely happen as one big incident. They accumulate in fragments. " +
    "A few kilograms missing after deboning. A pallet re-labeled. A box underfilled by 200 grams. " +
    "Night transfers between cold rooms without a matching production order. " +
    "Short temperature deviations that never trigger an alarm but accelerate spoilage over days. " +
    "ERP shows theoretical yield. Production shows operational yield. Accounting sees shrinkage at month-end. " +
    "Nobody sees the full chain from intake weight → cutting → trimming → packing → storage → shipment in one consistent execution model.",
  how:
    "MITE ingests intake weights, batch IDs, scale transactions, trimming logs, packing data, cold-room temperature logs, access control events, shift schedules, and ERP shipment records. " +
    "All events are normalized into one execution timeline per lot: weight in → transformation step → responsible zone → timestamp → resulting weight/state. " +
    "Rules detect structural anomalies: yield outside historical band for the same cut type, repeated micro-deltas at packing stations, pallet movement without linked task, temperature deviation combined with door-open spikes. " +
    "AI compares stable shifts vs problematic shifts and surfaces repeatable patterns: specific zone + time window + staff mix + sequence of operations where unexplained loss concentrates. " +
    "Instead of isolated discrepancies, you see a chain of causality.",
  result:
    "Shrinkage is no longer a monthly accounting discussion — it becomes a traceable operational pattern. " +
    "Problem zones and time windows are identified with evidence, not suspicion. " +
    "Cold-room deviations are linked to product impact, not just alarm logs. " +
    "Yield discussions move from averages to per-lot execution behavior. " +
    "Management gains a governed, explainable flow of product from receiving dock to outbound truck.",
  icon: "factory",
  tags: ["meat processing", "yield control", "internal theft", "cold chain", "weight drift", "lot traceability", "AI", "execution model"]
},

  // 10) Manufacturing — KPI governance
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "KPI governance: KPIs drive actions, not dashboards",
    kpiBadge: "↑ Execution discipline · ↓ ‘reporting theatre’",
    ttvBadge: "Pilot in days",
    pain:
      "KPIs exist, but don’t change behavior. Teams report numbers, but execution stays unmanaged and root causes repeat. " +
      "You pay for ‘beautiful dashboards’ while losses remain embedded in daily operations.",
    how:
      "In MITE, KPIs are tied to workflows: trigger → owner → action → verification → KPI update. " +
      "AI highlights which KPIs improve temporarily and which actions correlate with durable improvement — so management focuses on what works.",
    result:
      "KPIs become operational levers instead of monthly slides. " +
      "Accountability is measurable, and improvement becomes repeatable.",
    icon: "kpi",
    tags: ["kpi", "governance", "execution", "accountability"]
  },

  // 11) Agriculture — Barn microclimate
  {
    industry: "agriculture",
    industryLabel: "Agriculture",
    title: "Barn microclimate: conditions → action workflow → loss reduction",
    kpiBadge: "↓ Losses 10–25% · ↑ Productivity · ↓ Human factor",
    ttvBadge: "Pilot in days",
    pain:
      "Teams react late to temperature/humidity/ammonia drift. One zone quietly goes out of regime for 40–60 minutes, and the impact appears later as stress and productivity loss. " +
      "Average readings look acceptable, but losses accumulate where nobody is looking.",
    how:
      "MITE models the barn as zones + regimes by age/season. Multi-sensor correlation triggers escalation when drift persists 10–15 minutes. " +
      "AI suggests likely causes (ventilation pattern + door events + heater duty cycle) so a human intervenes only when it matters.",
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
    kpiBadge: "↓ Mortality spikes 10–20% · ↓ Critical events",
    ttvBadge: "Minutes, not weeks",
    pain:
      "Ventilation issues cascade fast. Operators see ‘average temp ok’ while CO₂ rises in one segment. " +
      "When it’s noticed, it’s already a critical event — and the cost is immediate (mortality, growth impact, regulatory stress).",
    how:
      "MITE correlates temp + CO₂ + fan state + power events per zone. " +
      "AI flags underperformance (e.g., fan group 2) from vibration/current signatures and routes a clear checklist task to responsible staff with closure proof.",
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
    kpiBadge: "↓ Water use 8–20% · ↑ Yield stability",
    ttvBadge: "Pilot in days",
    pain:
      "Irrigation is schedule-driven, not condition-driven. Water is wasted, and savings are impossible to prove because data is fragmented. " +
      "Some zones are overwatered, others under-watered — and yield stability suffers.",
    how:
      "MITE unifies soil moisture + weather + zones. Rules trigger irrigation tasks with accountability. " +
      "AI highlights zones where moisture recovers slower (soil issues / clogged lines) so maintenance becomes targeted, not guesswork.",
    result:
      "Water savings of 8–20% on monitored zones with evidence, plus more stable yield.",
    icon: "drop",
    tags: ["irrigation", "moisture", "water", "yield"]
  },

  //14) Construction — Equipment theft / utilization (unify what exists, then AI shows the leak)
  {
    industry: "construction",
    industryLabel: "Construction",
    title: "Construction sites: stop losing equipment and hours in ‘invisible’ gaps",
    kpiBadge: "↓ Losses · ↓ Idle hours 10–25% · ↑ Recovery speed · ↑ Utilization proof",
    ttvBadge: "Pilot in 2–4 weeks",
    pain:
      "You already have partial signals: GPS trackers on some assets, telematics from rental fleets, gate logs, security reports, shift sheets, and invoices. " +
      "But the picture is fragmented: assets move between sites, tags don’t match rental IDs, and ‘who had it last’ becomes a WhatsApp investigation. " +
      "Theft and misuse happen in the same windows every time: nights, weekends, handovers, subcontractor swaps — when ownership is fuzzy. " +
      "Even without theft, idle machines quietly burn money because utilization is guessed from schedules, not proven by reality.",
    how:
      "MITE doesn’t force you to cover the site with new sensors. We start by collecting what already exists and unifying it into one operational model: " +
      "asset registry (owner/rental), site map/zones, gate events, telematics/GPS streams, work orders, and shift responsibility. " +
      "Rules detect risky patterns: asset leaves the geofence after hours, moves without an approved task, goes silent mid-shift, or appears on a new site without handover. " +
      "AI correlates movement + access + task context to show where the leak starts (recurring zones, teams, time windows, subcontractor sequences) and suggests the shortest control loop: verify → assign → lock → recover.",
    result:
      "Incidents stop being ‘mysteries’ and become traceable execution cases with owners, timelines, and proof. " +
      "Losses drop because anomalies surface early (not when the asset is already gone), and recovery actions are triggered immediately. " +
      "Utilization becomes measurable: you see which machines are truly working vs idling 10–25% of time in predictable patterns. " +
      "You get audit-ready evidence for rentals/claims and a repeatable playbook for preventing the same scenario next week.",
    icon: "wrench", // or add a new "crane" icon later
    tags: ["construction", "equipment", "theft prevention", "utilization", "geofence", "handover", "unification", "AI", "workflows"]
  },

  // 15) Energy — Battery health
  {
    industry: "energy",
    industryLabel: "Energy",
    title: "Battery fleets: health monitoring + predictive replacement planning",
    kpiBadge: "↓ Outages · ↓ Replacement cost · ↑ Predictability",
    ttvBadge: "Pilot in days",
    pain:
      "Battery fleets fail unpredictably. Teams replace too early or too late. Downtime is costly and root causes are unclear. " +
      "As an owner, you’re paying either for outages or for unnecessary capex — both are margin killers.",
    how:
      "MITE tracks health indicators per site and criticality. Rules produce prioritized alerts and replacement workflows. " +
      "AI highlights degradation patterns (temperature exposure + deep discharge cycles) and forecasts which sites are highest risk in 2–4 weeks.",
    result:
      "Fewer outages and predictable maintenance windows. Replacement spend becomes planned, not reactive.",
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
      "Raw readings don’t translate into decisions. Teams argue ‘where it’s worse’ and ‘why’ because sensors are not tied to context and wind patterns. " +
      "That creates management risk: slow response, unclear accountability, and weak compliance evidence.",
    how:
      "MITE unifies sensors + geo model + wind context. Dashboards show heatmaps, not tables. " +
      "AI flags likely sources by correlating wind direction with spikes and time-of-day patterns, then routes actions for verification and reporting.",
    result:
      "Clear prioritization, faster interventions, and compliance reporting with defensible evidence.",
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
      "Citizens complain, but repairs are slow: unclear ownership, no SLA control, and no proof of closure. " +
      "For a municipality or operator, that means escalating complaints, political pressure, and contractor disputes.",
    how:
      "MITE ingests lamp telemetry + grid context. Rules classify faults and route to contractors. " +
      "SLA timers escalate after 24–48 hours. AI clusters recurring faults by segment to identify feeder issues vs lamp issues.",
    result:
      "Faster repairs, fewer repeated complaints, and measurable SLA compliance with closure proof.",
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
      "Temperature exceptions are noticed after delivery. Data is fragmented, disputes are painful, and responsibility is unclear. " +
      "Every unresolved incident erodes margin: write-offs, chargebacks, and lost trust with customers.",
    how:
      "MITE combines truck sensors + route milestones + regime rules. Exceptions trigger driver/dispatcher workflows with confirmations. " +
      "AI flags likely causes (door open duration + compressor pattern + ambient spike) so teams can act mid-route, not post-factum.",
    result:
      "Fewer claims, faster dispute resolution, and higher delivery quality — with exportable evidence.",
    icon: "truck",
    tags: ["fleet", "cold", "route", "evidence"]
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
  s = s.replace(/\u2013|\u2014/g, "–"); // – —
  s = s.replace(/\u00D7/g, "×");        // ×

  const wrap = (m) => `<span class="uc-num" ${MARK}>${m}</span>`;

  // 1) ranges with units
  s = s.replace(
    /(\b[<>]?\s?\d{1,4}(?:[.,]\d+)?\s?(?:–|-)\s?\d{1,4}(?:[.,]\d+)?)(\s?(?:%|°C|x|×|X|k|K|m|km|kg|g|l|L|ms|s|sec|secs|seconds|min|mins|minutes|h|hr|hrs|hour|hours|day|days|week|weeks|month|months|year|years|devices|device|click|clicks)\b)/gi,
    (_, a, b) => wrap(a + b)
  );

  // 2) single number + unit
  s = s.replace(
    /(\b[<>]?\s?\d{1,4}(?:[.,]\d+)?)(\s?(?:%|°C|x|×|X|k|K|ms|s|sec|secs|seconds|min|mins|minutes|h|hr|hrs|hour|hours|day|days|week|weeks|month|months|year|years|devices|device|click|clicks)\b)/gi,
    (_, a, b) => wrap(a + b)
  );

  // 3) bare ranges
  s = s.replace(
    /(\b\d{1,4}(?:[.,]\d+)?\s?(?:–|-)\s?\d{1,4}(?:[.,]\d+)?\b)/g,
    (m) => wrap(m)
  );

  // 4) contextual single numbers (careful)
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

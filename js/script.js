window.translations = window.translations || {};
const translations = window.translations; 

translations.en = {
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

  "platform.cards.0.title": "Any process complexity — without code. And it actually runs.",
  "platform.cards.0.text":
    "Model processes as logic: conditions, routes, approvals, escalations, and KPIs. " +
    "Describe what must happen — MITE takes care of execution, consistency, and traceability. " +
    "Complexity can grow without turning into custom-code chaos.",
  "platform.cards.0.meta": "Less development friction • faster iterations • clearer ownership",

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

translations.ru = {
  // NAV
  "nav.about": "Почему MITE",
  "nav.platform": "Платформа",
  "nav.solutions": "Сценарии применения",
  "nav.pricing": "Тарифы",
  "nav.faq": "FAQ",
  "nav.contact": "Контакты",
  "nav.demoBtn": "Запросить демо",

  // SEO
  "seo.title": "MITE — промышленная IIoT-платформа для подключённой инфраструктуры",
  "seo.description":
    "MITE — промышленная IIoT-платформа, которая подключает активы, описывает бизнес-логику и превращает операционные данные в управляемое исполнение и измеримые результаты.",

  // HERO
  "hero.kicker": "Industrial IoT, delivered",
  "hero.title": "Не просто ещё одна IIoT-платформа. <span>MITE меняет правила игры.</span>",
  "hero.subtitle":
    "От сырой телеметрии — к управляемому исполнению: подключайте активы, описывайте логику, и MITE будет запускать операционные процессы. " +
    "Каждое действие становится данными — для следующего решения, правила и улучшения.",
  "hero.primaryCta": "Запросить демо",
  "hero.secondaryCta": "Посмотреть платформу",
  "hero.meta1": "От пилота до промышленной эксплуатации — готово к реальным внедрениям",
  "hero.meta2": "Декларативная логика — описываете, что должно происходить, а не как писать код",
  "hero.meta3": "Любая сложность процессов • любая промышленная реальность • быстрые итерации",
  "hero.badge": "<strong>«Просто, понятно и надёжно — именно то, чего ожидают промышленные команды.»</strong>",

  // ABOUT / POSITIONING
  "about.eyebrow": "Позиционирование",
  "about.title": "Одна система под вашим контролем — от данных до исполнения",
  "about.text":
    "MITE превращает операционные данные в единую управляемую систему, а не в набор разрозненных сигналов, дашбордов и ручных действий.\n\n" +
    "Мы работаем с вашей реальной средой: устройства, шлюзы, PLC, сервисы и внешние системы. Входящие события разбираются в чистую структуру и сохраняются в согласованной модели данных.\n\n" +
    "Поверх этой модели вы можете выстраивать столько логики, сколько нужно: правила, процессы, согласования, эскалации и KPI. Вы определяете, что должно происходить — MITE обеспечивает, как это будет выполняться.\n\n" +
    "Дашборды показывают реальное исполнение и реальные результаты. Процессы можно адаптировать за часы или дни — без ожидания очереди у разработчиков.",

  "about.point1.title": "Чистая песочница данных — ваша реальность в структурированном виде",
  "about.point1.text":
    "Все сигналы превращаются в единую упорядоченную операционную модель (таблицы + контекст), поэтому вы перестаёте работать с фрагментированными интеграциями и несовместимыми форматами. " +
    "Вы получаете единое основание для логики, исполнения и анализа.",

  "about.point2.title": "Логика растёт вместе с операциями — а не с техдолгом",
  "about.point2.text":
    "Процессы задаются декларативно: условия, маршруты, согласования, эскалации и KPI. Добавляйте новое поведение быстро — без переписывания систем — " +
    "с любым количеством параллельных механизмов, потоков и моделей принятия решений. " +
    "Здесь нет навязанного подхода с «единственным workflow». Логика развивается вместе с бизнесом.",

  "about.point3.title": "Исполнение управляется — паттерны анализируются и визуализируются",
  "about.point3.text":
    "MITE фиксирует, что произошло, когда и почему — во всех процессах и на всех слоях логики. Данные исполнения анализируются постоянно: " +
    "паттерны, отклонения, узкие места и повторяющееся поведение подсвечиваются и визуализируются, а не прячутся в логах и таблицах. " +
    "Ответственность, причина и влияние остаются прозрачными.",

  "about.point4.title": "Изменения постоянны — процессы должны адаптироваться без сбоев",
  "about.point4.text":
    "Бизнес-условия постоянно меняются: правила смещаются, приоритеты пересматриваются, ограничения эволюционируют. " +
    "С MITE логика и процессы адаптируются за часы или дни, " +
    "при этом операции продолжают работать и генерировать данные для следующей итерации.",

  "about.cta": "Задать вопрос",
  "about.side.label": "Типичные результаты",

  aboutOutcomes: [
    {
      num: "Одна",
      title: "операционная система",
      text: "Решения на основе паттернов, а не догадок",
      bullets: [
        "Единый источник правды для исполнения — данные превращаются в инсайты",
        "Централизованное управление правилами и изменениями с объяснимыми узкими местами",
        "Дашборды показывают результаты, а не шум. Паттерны и тренды остаются видимыми",
        "Результат: решения опираются на наблюдаемое поведение системы, а не на предположения"
      ]
    },
    {
      num: "Дни",
      title: "до рабочего пилота",
      text: "Контроль появляется с первого дня",
      bullets: [
        "Ваши данные нормализованы в одной модели с понятной видимостью того, что работает и почему",
        "Исполнение, ответственность и поведение системы видны сразу",
        "Первый workflow работает end-to-end, а отклонения уже подсвечены",
        "Результат: управляемый процесс с измеримыми KPI по дизайну"
      ]
    },
    {
      num: "Стабильное",
      title: "масштабирование без хаоса",
      text: "Успешные паттерны переиспользуются, а не строятся заново. Масштаб остаётся управляемым, а не хрупким.",
      bullets: [
        "Плейбуки внедрения вместо разовых реализаций",
        "Много механизмов — одна управляемая модель исполнения",
        "Предсказуемое поведение на разных площадках и в разных командах",
        "Результат: масштаб остаётся надёжным даже при росте операционной сложности"
      ]
    },
    {
      num: "Быстрая",
      title: "адаптация к изменениям",
      text: "Операции меняются ежедневно — система успевает за ними.",
      bullets: [
        "Обновляйте правила и процессы за часы или дни",
        "Безопасные итерации с мгновенной обратной связью",
        "Новая логика может сосуществовать с существующей",
        "Результат: более умные решения, основанные на реальных метриках"
      ]
    }
  ],

  // PLATFORM
  "platform.eyebrow": "Платформа",
  "platform.title": "Создано для быстрых изменений — и серьёзного масштаба",
  "platform.subtitle":
    "Вы описываете логику как правила и процессы. Платформа стабильно исполняет их — в промышленном масштабе.",

  "platform.cards.0.title": "Любая сложность процессов — без кода. И это действительно работает.",
  "platform.cards.0.text":
    "Моделируйте процессы как логику: условия, маршруты, согласования, эскалации и KPI. " +
    "Опишите, что должно происходить — MITE обеспечит исполнение, согласованность и трассируемость. " +
    "Сложность может расти, не превращаясь в хаос кастомной разработки.",
  "platform.cards.0.meta": "Меньше трения с разработкой • быстрее итерации • понятнее зоны ответственности",

  "platform.cards.1.title": "Предсказуемое масштабирование — даже когда сложность растёт",
  "platform.cards.1.text":
    "Одна и та же операционная модель и переиспользуемые строительные блоки поддерживают множество сценариев на разных площадках, в разных командах и на разных этапах внедрения. " +
    "Вы масштабируете результаты, а не технический overhead.",
  "platform.cards.1.meta": "Масштабируйте результаты, а не техдолг",

  "platform.cards.2.title": "Готова к будущему по дизайну: открытая, гибкая, читаемая для AI",
  "platform.cards.2.text":
    "Прозрачная логика и структурированные данные упрощают развитие, объяснимость и расширение системы. " +
    "Вы избегаете привязки к хрупким legacy-стекам и сохраняете платформу адаптивной к современным инструментам и AI-assisted workflows.",
  "platform.cards.2.meta": "Платформа для операций завтрашнего дня",

  "platform.ci.tag": "Связность и интеграции",
  "platform.ci.title": "Работает в реальной промышленной среде",
  "platform.ci.chip.onpremOrCloud": "On-prem / cloud / hybrid",
  "platform.ci.chip.rbac": "Ролевой доступ",
  "platform.ci.note":
    "В реальном мире нет одного «правильного» стека протоколов. Устройства, сети и ограничения отличаются от площадки к площадке — " +
    "поэтому MITE подстраивает интеграционный слой под вашу среду, а не заставляет вас идти на архитектурные компромиссы.",

  "platform.story.title": "Почему это важно на практике",
  "platform.story.text":
    "Когда клиенту нужен новый механизм, мы обычно обобщаем его на уровне платформы, а не делаем разовую функцию под один случай. " +
    "Именно поэтому улучшения могут появляться за часы или дни — и платформа " +
    "<span class='highlighting'>становится сильнее с каждым реальным внедрением.</span>",

  // HIGHLIGHTS
  "highlights.eyebrow": "Ключевые возможности MITE",
  "highlights.title": "Система исполнения для операций — а не ещё один слой дашбордов",
  "highlights.subtitle":
    "Вы получаете структурированную песочницу данных и инструменты, чтобы быстро строить логику управления и операционные интерфейсы.",

  "highlights.items.0.tag": "БИЗНЕС-ЛОГИКА",
  "highlights.items.0.title": "Любая сложность процессов — описывается как логика",
  "highlights.items.0.text":
    "От простых тревог до многошагового исполнения с согласованиями, эскалациями, SLA и KPI. Меняйте правила за часы, когда меняется реальность — без переписывания кода.",
  "highlights.items.0.meta": "Если процесс можно описать — его можно запускать.",

  "highlights.items.1.tag": "Связность",
  "highlights.items.1.title": "Любые протоколы, любые вендоры — одна чистая модель",
  "highlights.items.1.text":
    "Подключайте датчики, PLC, шлюзы, сторонние системы и ручной ввод. Нормализуйте один раз — и переиспользуйте те же структурированные данные везде.",
  "highlights.items.1.meta": "Никакой фантазии про «один стек для всех» — мы адаптируемся к реальности площадки.",

  "highlights.items.2.tag": "Масштаб",
  "highlights.items.2.title": "Промышленный масштаб по дизайну",
  "highlights.items.2.text":
    "Миллиарды записей, тяжёлая телеметрия, тысячи одновременных пользователей и непрерывная аналитика — это нормальный режим, а не будущий апгрейд.",
  "highlights.items.2.meta": "Производительность — это фича, а не то, о чём вспоминают потом.",

  "highlights.items.3.tag": "Инсайты",
  "highlights.items.3.title": "AI-assisted паттерны — вместо ручного поиска",
  "highlights.items.3.text":
    "Выявляйте зависимости, риски и аномалии без опоры на одного эксперта, который всё держит в голове. Переносите инсайты прямо в исполнение.",
  "highlights.items.3.meta": "Меньше человеческого фактора • больше повторяемых результатов.",

  "highlights.items.4.tag": "Опыт",
  "highlights.items.4.title": "Под реальные роли — а не один UI для всех",
  "highlights.items.4.text":
    "Операции, инженерия и менеджмент требуют разных представлений. MITE поддерживает разные UI-паттерны — таблицы, карты, карточки, таймлайны и отчёты — поверх одной управляемой модели.",
  "highlights.items.4.meta": "Одна истина данных • несколько операционных интерфейсов.",

  "highlights.items.5.tag": "Ценность",
  "highlights.items.5.title": "Результаты, связанные с прибылью",
  "highlights.items.5.text":
    "Каждый цикл измерим: меньше инцидентов, ниже потери, чище комплаенс, быстрее внедрения — потому что действия связаны с результатами, а не только с мониторингом.",
  "highlights.items.5.meta": "IoT как драйвер роста, а не центр затрат.",

  // USE CASES HEADER
  "useReal.eyebrow": "Реальные сценарии",
  "useReal.title": "18 сценариев: проблема → исполнение → измеримый результат",
  "useReal.subtitle":
    "Сейчас — короткие карточки для доверия и понятности. Дальше каждую можно развернуть в отдельную страницу с полной механикой, доказательной базой и скриншотами.",

  "uc.filter.all": "Все",
  "uc.filter.pharma": "Фарма",
  "uc.filter.manufacturing": "Производство",
  "uc.filter.agriculture": "Сельское хозяйство",
  "uc.filter.energy": "Энергетика",
  "uc.filter.environment": "Экология",
  "uc.filter.smartcities": "Умные города",
  "uc.filter.logistics": "Логистика",
  "uc.filter.construction": "Строительство",
  "uc.search.placeholder": "Поиск по сценариям…",

  "uc.label.pain": "Проблема",
  "uc.label.how": "Как это работает",
  "uc.label.result": "Результат",

  // HOW
  "how.eyebrow": "Как это работает",
  "how.title": "Три шага от устройства до решения",
  "how.subtitle": "От сырых сигналов к действиям, доказательной базе и KPI-результатам — за дни, а не за месяцы.",

  "how.steps.0.tag": "2–5 ДНЕЙ",
  "how.steps.0.title": "Данные на входе. Чистая модель на выходе.",
  "how.steps.0.text":
    "Соберите и нормализуйте свою операционную реальность за несколько дней. Провайдеры отправляют телеметрию на ваш endpoint — мы принимаем её и превращаем сырые события в чистую, пригодную для запросов операционную модель.",
  "how.steps.0.output":
    "нормализованная песочница данных (активы, площадки, маршруты, контекст, временные метки), готовая для логики и исполнения.",
  "how.steps.0.micro": "Сырые данные → нормализация → рабочая модель",

  "how.steps.1.tag": "3–5 ДНЕЙ",
  "how.steps.1.title": "Превратите данные в логику.",
  "how.steps.1.text":
    "Определите логику: триггеры, процессы, KPI. Настройте то, что важно: пороги, паттерны аномалий, согласования, пути эскалации, SLA-таймеры и определения KPI — быстро и с полной трассируемостью.",
  "how.steps.1.output":
    "понятные операции по принципу «если — то», плюс дашборды и доказательная база, готовая к аудиту.",
  "how.steps.1.micro": "События → решения → действия",

  "how.steps.2.tag": "GO-LIVE",
  "how.steps.2.title": "Исполняйте, измеряйте, улучшайте",
  "how.steps.2.text":
    "MITE непрерывно ведёт цикл: запускает действия, сохраняет доказательства, отслеживает влияние на KPI и помогает безопасно улучшать процессы — без остановки production.",
  "how.steps.2.output":
    "стабильный процесс, измеримые результаты и контур обратной связи, которому может доверять команда.",
  "how.steps.2.micro": "Действия → доказательства → KPI-результаты",

  // PRICING
  "pricing.eyebrow": "Тарифы",
  "pricing.title": "Начните бесплатно — масштабируйтесь предсказуемо",
  "pricing.subtitle": "Проверьте один бизнес-процесс, затем расширяйтесь на площадки, парки или целые портфели.",

  "pricing.free.label": "Бесплатно",
  "pricing.free.name": "Start-ups",
  "pricing.free.tagline": "Проверьте свой первый операционный процесс.",
  "pricing.free.price": "€0 / месяц",
  "pricing.free.note": "Устройства: до 10 · Платформа: полный доступ · Поддержка: best effort",
  "pricing.free.li1": "До 10 подключённых устройств",
  "pricing.free.li2": "Полный доступ ко всем функциям платформы",
  "pricing.free.li3": "Поддержка as-is (без SLA)",
  "pricing.free.li4": "API и экспорт включены",
  "pricing.free.cta": "Запросить доступ",

  "pricing.plan1.label": "Для пилотов",
  "pricing.plan1.name": "Start",
  "pricing.plan1.tagline": "Запустите пилот и подтвердите измеримый результат.",
  "pricing.plan1.price": "€99 / месяц",
  "pricing.plan1.note": "Устройства: 10–100 · Платформа: полный доступ · Поддержка: 8×5",
  "pricing.plan1.li1": "10–100 подключённых устройств",
  "pricing.plan1.li2": "Полный доступ ко всем функциям платформы",
  "pricing.plan1.li3": "Поддержка 8×5 в рабочие часы",
  "pricing.plan1.li4": "Запросы на функции рассматриваются в roadmap",
  "pricing.plan1.cta": "Начать пилот",

  "pricing.plan2.label": "Для внедрений",
  "pricing.plan2.name": "Scale",
  "pricing.plan2.tagline": "Масштабируйтесь на разные площадки с предсказуемой поддержкой.",
  "pricing.plan2.price": "От €99 / месяц",
  "pricing.plan2.note": "Устройства: 100–1000 · Платформа: полный доступ · Поддержка: 24×7",
  "pricing.plan2.li1": "100–1000 подключённых устройств",
  "pricing.plan2.li2": "Полный доступ ко всем функциям платформы",
  "pricing.plan2.li3": "Поддержка 24×7",
  "pricing.plan2.li4": "Приоритетная реакция и эскалация",
  "pricing.plan2.cta": "Связаться с нами",

  "pricing.plan3.label": "Enterprise / OEM",
  "pricing.plan3.name": "Enterprise",
  "pricing.plan3.tagline": "Когда MITE становится операционным ядром.",
  "pricing.plan3.price": "Индивидуально",
  "pricing.plan3.note": "Устройства: без ограничений · Платформа: полный доступ + расширения · SLA: индивидуально",
  "pricing.plan3.li1": "Неограниченное количество устройств и multi-site внедрения",
  "pricing.plan3.li2": "Полный доступ к платформе + расширения",
  "pricing.plan3.li3": "Индивидуальный SLA и модель управления",
  "pricing.plan3.li4": "OEM / white-label варианты",
  "pricing.plan3.li5": "Выделенный технический контакт и архитектурные воркшопы включены",
  "pricing.plan3.cta": "Запланировать сессию",

  // TESTIMONIALS
  "testimonials.eyebrow": "Голос клиентов",
  "testimonials.title": "Команды выбирают MITE, когда важен результат",
  "testimonials.subtitle": "Несколько примеров того, что клиенты ценят больше всего.",

  "testimonials.items.0.text":
    "«Отчётность по холодовой цепи перестала быть ежемесячным кошмаром. У нас один таймлайн, один audit trail и отчёты за минуты, а не за дни.»",
  "testimonials.items.0.meta": "Руководитель по качеству и compliance · Фарма-дистрибуция",

  "testimonials.items.1.text":
    "«Во время rollout мы меняли логику каждую неделю — без тикетов разработчикам. Когда менялись операции, система менялась сразу.»",
  "testimonials.items.1.meta": "Head of Engineering · Распределённая инфраструктура",

  "testimonials.items.2.text":
    "«Простои больше не просто проблема дашборда. Каждая остановка запускает управляемый workflow, а KPI показывает, устранили мы причину или нет.»",
  "testimonials.items.2.meta": "Директор по операциям · Производство",

  "testimonials.items.3.text":
    "«Масштабирование стало предсказуемым: одна модель данных, одни механизмы — разные площадки. Никаких integration snowflakes.»",
  "testimonials.items.3.meta": "Program Manager · Multi-site rollout",

  // FAQ
  "faq.eyebrow": "FAQ",
  "faq.title": "Что операционные и IT-команды спрашивают перед go-live",
  "faq.subtitle": "Реальные операционные вопросы. Чёткие и практичные ответы.",

  "faq.items.0.q": "Нужны ли разработчики, чтобы менять логику и процессы?",
  "faq.items.0.a":
    "Нет. В MITE процессы описываются декларативной логикой — вы задаёте, что должно происходить, а не как это кодить. " +
    "Операционные команды могут менять бизнес-логику, пороги, правила маршрутизации, согласования, лестницы эскалаций и KPI за часы — без перестройки систем и без ожидания в очереди к разработчикам. " +
    "Логика развивается вместе с операциями, а не вместе с техдолгом.",

  "faq.items.1.q": "Как MITE интегрируется с нашей текущей инфраструктурой?",
  "faq.items.1.a":
    "MITE поддерживает промышленные и веб-протоколы, включая MQTT, LoRaWAN, Modbus, OPC UA, REST и webhooks, а также предоставляет открытые API. " +
    "Мы адаптируемся к вашей среде — on-prem, cloud или hybrid — и интегрируемся с ERP, MES, SCADA, data lakes и кастомными системами. " +
    "Здесь нет навязанного стека или архитектурной привязки.",

  "faq.items.2.q": "Подходит ли MITE для регулируемых сред и контуров с GDPR?",
  "faq.items.2.a":
    "Да. В MITE есть ролевой доступ, неизменяемые audit trails, настраиваемые политики хранения данных и логирование экспорта. " +
    "Любое действие — просмотр, изменение, согласование, экспорт — трассируется. Evidence packs формируются из реальных workflow, а не собираются вручную перед проверками. " +
    "Комплаенс становится управляемым поведением системы, а не координацией через таблицы.",

  "faq.items.3.q": "Что если нам нужен новый механизм или новая возможность?",
  "faq.items.3.a":
    "Если требование усиливает платформу на системном уровне, а не как узкий разовый случай, мы обычно обобщаем его и быстро доставляем. " +
    "Это значит, что вы не платите за изолированную кастомную обвязку, а платформа становится сильнее с каждым реальным внедрением. " +
    "Ваш кейс работает на эволюцию ядра, а не на техническую фрагментацию.",

  "faq.trust":
    "Создано для регулируемых отраслей. GDPR-ready. Ролевой доступ. Неизменяемый audit trail. " +
    "Никаких теневых таблиц. Никакой скрытой логики. Никакой ручной сборки доказательной базы.",

  // CONTACT
  "contact.eyebrow": "Контакты",
  "contact.title": "Расскажите, что вы хотите контролировать — мы покажем первый win",
  "contact.subtitle":
    "Опишите вашу инфраструктуру и желаемый результат. Мы предложим первый измеримый эффект и покажем, как его масштабировать.",
  "contact.nameLabel": "Полное имя",
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
    "Отправляя форму, вы соглашаетесь, что мы можем связаться с вами по вопросам MITE и обработать ваши данные в соответствии с нашей политикой конфиденциальности.",
  "thank-you.submit": "Спасибо! Мы скоро свяжемся с вами.",

  // FOOTER
  "footer.note": "MITE — промышленная IoT-платформа для команд, которые управляют через результат.",
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
  "quick.note": "Мы ответим с практичным первым шагом и ожидаемыми результатами."
};

translations.ru.useCases = [
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

translations.uk = translations.uk || {
  const useCases = [
  {
  industry: "pharma",
  industryLabel: "Pharmaceuticals",
  title: "Холодовий ланцюг: −18% втрат продукції завдяки виявленню температурних відхилень під час транспортування",
  kpiBadge: "↓ Списання 15–30% · ↓ Претензії 20–40% · ↓ Навантаження на QA",
  ttvBadge: "Операційна модель на наявних даних — 1–2 тижні",

  pain:
    "Дані вже існують: температурні логери, транспортна телематика, PDF-звіти 3PL, етапи WMS/ERP, статуси відправлень і підтвердження доставки. " +
    "Але вони розрізнені, і саме там виникають сліпі зони, де відбуваються реальні втрати: крос-доки, затримки на кордоні, повторне оброблення палет, їх переназначення та тривале простоювання. " +
    "Ідентифікатори між сенсором, палетою, відправленням і партією часто розходяться, а QA отримує файли лише після доставки. " +
    "У результаті температурне відхилення виявляється вже тоді, коли продукт втратив якість, а розслідування одного інциденту перетворюється на ручний пошук у 3–5 системах, листуванні з перевізником і звірці файлів, що займає 4–8 годин.",

  how:
    "Транспортна телематика, показники температурних логерів, етапи маршруту, геозони, події відкриття дверей, робота холодильних установок і температурні режими SKU об’єднуються в єдину часову шкалу для кожного відправлення. " +
    "Якщо температура виходить за допустимий діапазон, відповідальна команда бачить не лише саму подію, а й повний контекст: де вона почалася, скільки тривала, що відбувалося з дверима, зупинками, зовнішньою температурою та холодильним агрегатом. " +
    "Це дозволяє запускати ескалацію ще під час транспортування: водій, диспетчер, QA — замість реакції після розвантаження. " +
    "Для кожного інциденту система автоматично формує зрозумілий ланцюг доказів: маршрут, режим, відхилення, дії та підтвердження.",

  result:
    "Температурні відхилення почали виявлятися під час транспортування, а не після доставки. " +
    "Клієнт зменшив списання продукції на 18%, оскільки команда почала реагувати в режимі реального часу. " +
    "Претензії дистриб’юторів скоротилися на 32%. " +
    "Час розслідування одного інциденту зменшився з 4–8 годин до 10–15 хвилин.",

  icon: "pharma",
  tags: ["cold chain", "GDP", "batch", "traceability", "transport", "QA", "3PL"]
},

{
  industry: "pharma",
  industryLabel: "Pharmaceuticals",
  title: "Чисті кімнати: розслідування відхилень за хвилини замість годин",
  kpiBadge: "↓ Відхилення 10–25% · ↓ Час розслідування 50–70% · ↑ Готовність до аудитів",
  ttvBadge: "Операційна модель — 2–3 тижні",

  pain:
    "Моніторинг середовища на фармацевтичних виробництвах працює безперервно: температура, вологість, диференційний тиск, частинки, режими HVAC, події доступу, змінні записи та дії операторів. " +
    "Але ці дані зберігаються в різних системах — BMS, журнали калібрування, контроль доступу, HVAC і QA-звіти. " +
    "Коли виникає відхилення, розслідування перетворюється на ручний збір інформації: хто заходив у приміщення, який режим вентиляції був активний, які операції з партією виконувалися та в якій послідовності. " +
    "Навіть якщо всі дані формально існують, швидко відтворити реальний ланцюг подій майже неможливо, тому першопричина часто залишається нечіткою.",

  how:
    "Дані моніторингу середовища, події доступу, стани HVAC і виробничі операції об’єднуються в безперервну часову шкалу для кожного приміщення та партії. " +
    "Відхилення відображається не як окремий сигнал тривоги, а як подія всередині процесу: падіння тиску, відкриття дверей, зміна режиму вентиляції, присутність персоналу або початок операції. " +
    "Система аналізує не лише перевищення порогів, а й комбінації факторів у часі. " +
    "У результаті QA починає розслідування не з пошуку файлів, а вже з відновленої картини подій навколо відхилення.",

  result:
    "Розслідування відхилень почало стартувати з готової послідовності подій замість ручного збору даних. " +
    "Час розслідування скоротився на 60%. " +
    "Повторюваність відхилень зменшилася на 17%, оскільки стали видимими реальні сценарії, а не лише окремі сигнали тривоги. " +
    "Підготовка доказів для аудиту скоротилася з кількох днів до кількох хвилин.",

  icon: "pharma",
  tags: ["cleanroom", "EM", "GMP", "HVAC", "deviation", "QA", "audit"]
},

{
  industry: "manufacturing",
  industryLabel: "Manufacturing",
  title: "Мікрозупинки лінії: +4% OEE без модернізації обладнання",
  kpiBadge: "↓ Мікрозупинки 15–30% · ↑ OEE +2–6 п.п. · ↓ Тертя між командами",
  ttvBadge: "Перший робочий сценарій — за кілька днів",

  pain:
    "Лінія може формально працювати весь день, але втрачати продуктивність у десятках коротких зупинок тривалістю 3–7 хвилин. " +
    "Кожна з них здається надто малою для окремого аналізу, тому причини залишаються невідомими. " +
    "Сигнали PLC, дії операторів, параметри процесу та заявки на обслуговування знаходяться в різних системах, і кожна команда пояснює зупинки по-своєму. " +
    "У результаті повторювані сценарії продовжують знижувати продуктивність, але на рівні зміни або тижня це виглядає як 'нормальна варіативність'.",

  how:
    "Система відновлює послідовність подій перед кожною зупинкою: стан лінії, сигнали PLC, параметри матеріалу, дії операторів, короткі сигнали тривоги та реакцію обладнання. " +
    "Це дозволяє побачити не лише момент зупинки, а й її передумови та повторюваний сценарій. " +
    "В одному місці стають видимими ситуації, які раніше губилися між системами: нестабільна подача матеріалу, помилки після переналагодження, короткі провали сигналів сенсорів і повторювані відхилення на певній ділянці лінії. " +
    "Кожна мікрозупинка отримує контекст, а не залишається анонімним падінням продуктивності.",

  result:
    "Клієнт почав бачити реальні причини мікрозупинок, а не лише їх кількість. " +
    "Кількість коротких зупинок скоротилася на 22%. " +
    "OEE зріс на 4 відсоткові пункти без модернізації обладнання. " +
    "Виробництво та технічне обслуговування почали аналізувати ті самі події на основі однакових фактів.",

  icon: "factory",
  tags: ["downtime", "OEE", "PLC", "micro-stops", "line", "maintenance"]
},

{
  industry: "manufacturing",
  industryLabel: "Manufacturing",
  title: "Енергія у виробництві: −16% споживання електроенергії в холостому режимі",
  kpiBadge: "↓ Холосте споживання 10–20% · ↓ Пікові тарифи · ↓ Енерговитрати на одиницю продукції",
  ttvBadge: "Перший ефект — за 1–2 тижні",

  pain:
    "Ціни на енергію зростають, тоді як обсяг випуску залишається незмінним. " +
    "Енергетики бачать загальне споживання, виробництво — обсяг випуску, фінанси — рахунки за електроенергію, але ніхто не бачить, де саме виникають втрати. " +
    "Обладнання може залишатися в енергоємних режимах годинами між партіями, під час переналагоджень або в нічні зміни без жодного корисного випуску. " +
    "Додаткові кошти втрачаються ще й через те, що навантаження не узгоджене з тарифними вікнами або доступністю власної генерації, наприклад сонячних панелей.",

  how:
    "Енергоспоживання зіставляється з виробничими замовленнями, змінами, станами обладнання та тарифними вікнами. " +
    "Кожен енергоємний інтервал отримує контекст: лінія фактично виробляла, очікувала, перебувала в переналагодженні чи просто залишалася у важкому режимі без випуску. " +
    "Це дозволяє побачити, які операції можна безпечно перенести в дешевші години, а де обладнання спалює енергію, не створюючи цінності. " +
    "Також стає зрозуміло, де власна генерація використовується випадково, а де її можна застосовувати системно.",

  result:
    "Клієнт скоротив холосте енергоспоживання на 16%. " +
    "Пікові нарахування за електроенергію зменшилися на 21%. " +
    "Частину енергоємного навантаження було перенесено в години з нижчим тарифом, а сонячна енергія почала використовуватися цілеспрямовано, а не епізодично. " +
    "Енергія перестала бути лише рядком у рахунку і стала керованим виробничим KPI.",

  icon: "bolt",
  tags: ["energy", "peak tariff", "production", "solar", "efficiency", "KPI"]
},

{
  industry: "manufacturing",
  industryLabel: "Manufacturing",
  title: "Виробничий брак: −19% дефектів завдяки ранньому виявленню",
  kpiBadge: "↓ Брак 10–25% · ↑ First-pass yield · ↓ Переробка",
  ttvBadge: "Операційна модель — 1–2 тижні",

  pain:
    "Брак рідко виглядає як один великий інцидент. " +
    "Найчастіше він накопичується поступово: трохи більше відходів, нестабільні партії, повторна переробка та незначні відхилення параметрів, які ніхто прямо не пов’язує з кінцевим дефектом. " +
    "Параметри процесу, характеристики сировини, умови на лінії, дані сенсорів і дії операторів знаходяться в окремих системах. " +
    "Коли партія виявляється дефектною, аналіз першопричини починається вже постфактум і швидко перетворюється на припущення, оскільки повний ланцюг подій більше не видно.",

  how:
    "Параметри процесу, партії сировини, стани обладнання та дії операторів розглядаються як єдина причинно-наслідкова послідовність. " +
    "Для кожної партії зберігається повний контекст: режими, відхилення, втручання, події обладнання та характеристики матеріалів. " +
    "Система показує комбінації параметрів і сценарії, після яких ризик дефекту починає зростати. " +
    "Це дозволяє побачити момент, коли процес починає зміщуватися в бік браку, ще до того, як партія дійде до фінального контролю.",

  result:
    "Клієнт почав виявляти ризик дефекту ще до завершення партії, а не після випуску. " +
    "Рівень браку знизився на 19%. " +
    "Частка продукції, що проходить без переробки, зросла на 15%. " +
    "Аналіз відхилень став швидшим, оскільки кожна партія тепер мала повний фактичний ланцюг подій.",

  icon: "wrench",
  tags: ["scrap", "yield", "quality", "defect", "batch", "process"]
},

{
  industry: "manufacturing",
  industryLabel: "Manufacturing",
  title: "Матеріали та ERP: точність запасів до 99%",
  kpiBadge: "↑ Точність запасів >99% · ↓ Списання · ↓ Час звірки",
  ttvBadge: "Проєкт — 11 днів до результату",

  pain:
    "Розбіжності між фактичними та обліковими залишками матеріалів зазвичай виявляються занадто пізно — під час інвентаризації або після зриву замовлення. " +
    "Склад упевнений в одному балансі, ERP показує інший, виробництво вважає, що матеріал було списано коректно, а логіка переміщень між зонами існує окремо. " +
    "Невеликі невідповідності накопичуються тижнями й зрештою перетворюються на списання, нестачі, термінові закупівлі та втрату довіри до планування. " +
    "Проблема не у відсутності даних, а в тому, що ніхто не бачить рух і споживання матеріалу як єдиний ланцюг.",

  how:
    "Кожне переміщення, відпуск, операційне споживання та реєстрація в ERP стають частиною єдиної часової шкали матеріалу. " +
    "Система показує, де саме виникає розбіжність: на складі, у виробництві, під час міжзонового переміщення чи в момент підтвердження транзакції. " +
    "Це перетворює проблеми із запасами з несподіванки наприкінці періоду на конкретні точки втрати контролю. " +
    "Замість загального формулювання 'щось не сходиться' стає зрозуміло, на якому етапі й за яким сценарієм матеріал розійшовся між фізичною реальністю та обліком.",

  result:
    "Клієнт підвищив точність обліку запасів до 99,3%. " +
    "Списання матеріалів зменшилися, оскільки розбіжності почали виявляти там, де вони виникали, а не під час фінальної звірки. " +
    "Інвентаризація перестала перетворюватися на тривале з’ясування між складом, виробництвом і ERP. " +
    "Планування закупівель стало точнішим, оскільки рух матеріалів став прозорим.",

  icon: "boxes",
  tags: ["inventory", "ERP", "warehouse", "accuracy", "materials", "reconciliation"]
},

{
  industry: "manufacturing",
  industryLabel: "Manufacturing",
  title: "Рентабельність змін: +8% маржі без нових інвестицій",
  kpiBadge: "↑ Маржа +5–12% · ↓ Втрати на переналагодженні · ↑ Стабільність випуску",
  ttvBadge: "Проєкт — 17 днів",

  pain:
    "У звітах виробництво може виглядати загалом прибутковим, але окремі зміни та години стабільно дають слабший результат. " +
    "Фінанси бачать маржу продукту, виробництво — виконання змінного плану, але реальні втрати приховані всередині агрегованих показників. " +
    "Переналагодження затягуються, розгін лінії нестабільний, короткі затримки накопичуються, але ніхто не пов’язує ці події з кінцевою маржею. " +
    "У результаті завод втрачає гроші не через одну велику поломку, а через повторювані сценарії слабкого виконання.",

  how:
    "Виробничі події — запуск, переналагодження, зупинки, фактичний випуск і відхилення в зміні — зіставляються з фінансовими результатами в одному часовому вікні. " +
    "Це дозволяє побачити не лише обсяг випуску, а й у які години виробництво було дорогим, нестабільним або маломаржинальним. " +
    "Система показує, які патерни змін створюють втрати, а які стабільно дають кращий результат. " +
    "Керівництво перестає оцінювати зміну лише за виконанням плану й починає бачити, де саме всередині зміни втрачається маржа.",

  result:
    "Клієнт підвищив виробничу маржу на 8% без додаткових інвестицій в обладнання. " +
    "Переналагодження стали коротшими й стабільнішими, а години з повторюваними втратами були виявлені та скориговані. " +
    "Планування виробництва почало спиратися на реальні патерни змін, а не на усереднені припущення. " +
    "Втрати маржі перестали ховатися всередині загального обсягу випуску.",

  icon: "chart",
  tags: ["margin", "shift", "changeover", "profitability", "throughput", "planning"]
},

{
  industry: "manufacturing",
  industryLabel: "Manufacturing",
  title: "М’ясопереробка: −2% усушки та −16% внутрішніх втрат",
  kpiBadge: "↓ Усушка 1.5–2.5% · ↓ Внутрішні втрати 16%+ · ↑ Безпека персоналу",
  ttvBadge: "Проєкт — 3–4 тижні",

  pain:
    "На м’ясопереробних підприємствах втрати часто сприймаються як неминуча частина процесу. " +
    "Кілька кілограмів зникає після обвалювання. Палету перемарковано. Коробка недоважена на 200 грамів. " +
    "Але найдорожча прихована втрата — це усушка продукту під час зберігання. " +
    "М’ясо може втрачати 3–7% ваги через випаровування вологи, а невеликі відхилення температури, вологості та вентиляції ще більше посилюють ці втрати. " +
    "Додатковий ризик — аміачні холодильні системи: зростання концентрації NH₃ може означати витік, проблеми з вентиляцією та реальну загрозу для персоналу, аж до зупинки зони та аварійного реагування.",

  how:
    "Вага сировини на вході, операції обвалювання, пакування, дані ваг, режими камер, вологість, вентиляція, події доступу, зміни та відвантаження розглядаються як єдиний виробничий ланцюг. " +
    "Якщо параметри повітря або холодильні системи вже контролюються на об’єкті, аміак включається в аналіз як індикатор стану камер і контуру охолодження. " +
    "Це дозволяє бачити не лише кінцевий вихід, а й точно, де формується втрата маси: у конкретній камері, зміні, часовому вікні чи сценарії зберігання. " +
    "Одночасно система виявляє умови, які створюють ризик не лише для якості продукту, а й для людей.",

  result:
    "Підприємство почало бачити, у яких камерах і режимах зберігання формується найбільша усушка. " +
    "Фактичні втрати маси продукції знизилися на 1,5–2,5%, що при великих обсягах означає сотні тонн збереженого продукту на рік. " +
    "Внутрішні втрати скоротилися більш ніж на 16%, оскільки проблемні зони перестали бути невидимими. " +
    "Потенційно небезпечні ситуації в холодильній системі почали виявлятися на ранній стадії, до того як переростали в інциденти.",

  icon: "factory",
  tags: ["meat processing", "shrinkage", "ammonia", "cold storage", "yield", "safety"]
},

{
  industry: "construction",
  industryLabel: "Construction",
  title: "Будівельний бетон: менше простоїв завдяки прогнозуванню міцності",
  kpiBadge: "↑ Своєчасне виконання · ↓ Простій бригад · ↓ Ризик переробки",
  ttvBadge: "Проєкт — 2 тижні",

  pain:
    "Твердіння бетону досі часто планують за простими правилами: 'до понеділка', 'чекаємо три дні', 'потім перевіримо'. " +
    "Але набір міцності залежить від складу суміші, температури, вологості, вітру, дощу та умов конкретної заливки. " +
    "У результаті графіки зсуваються, бригади чекають, бетон утримують довше, ніж потрібно, а наступні етапи затримуються. " +
    "Найболючіше те, що гроші втрачаються не через одну велику помилку, а через постійні простої, очікування крана та часом дорогі переробки, коли рішення ухвалили занадто рано або занадто пізно.",

  how:
    "Дані про суміш, погоду, час заливки, лабораторні тести та дані вбудованих сенсорів, якщо вони вже є, об’єднуються в цифрову часову шкалу для кожної заливки. " +
    "Замість абстрактної календарної дати система показує ймовірне вікно готовності на основі реальних умов на майданчику. " +
    "Це означає, що рішення про зняття опалубки, мобілізацію наступної бригади або початок нового етапу більше не базується на звичці та надмірній обережності, а на розрахованій картині набору міцності. " +
    "Майданчик отримує не просто прогноз, а контрольовану точку прийняття рішення.",

  result:
    "Бригади почали мобілізуватися, виходячи з фактичної готовності конструкції, а не з усереднених термінів. " +
    "Простої людей і техніки скоротилися, оскільки рішення почали прийматися на основі даних, а не календаря. " +
    "Ризик передчасних дій і дорогої переробки зменшився. " +
    "Планування робіт на майданчику стало більш передбачуваним, а обговорення графіка перестали бути суперечками про те, чи ще чекати, чи вже рухатися далі.",

  icon: "wrench",
  tags: ["construction", "concrete", "curing", "weather", "strength", "scheduling"]
},

{
  industry: "construction",
  industryLabel: "Construction",
  title: "Будівельні майданчики: −25% простою техніки та контроль використання",
  kpiBadge: "↓ Простій 10–25% · ↓ Втрати техніки · ↑ Контроль використання",
  ttvBadge: "Проєкт — 2–4 тижні",

  pain:
    "На будівельних майданчиках зазвичай уже є певні сигнали: GPS-трекери на техніці, телематика орендованого обладнання, журнали проходу, звіти охорони, змінні листи та рахунки підрядників. " +
    "Але загальна картина залишається фрагментованою: активи переміщуються між об’єктами, мітки не збігаються з орендними ID, а історія 'хто останнім використовував машину' перетворюється на розслідування в месенджерах. " +
    "Крадіжки, несанкціоноване використання та простої виникають в одних і тих самих часових вікнах: ночі, вихідні, зміна змін і зміна субпідрядників. " +
    "Навіть без прямої крадіжки техніка тихо спалює гроші в простої, оскільки фактичне використання досі оцінюється за графіком, а не за фактом.",

  how:
    "Реєстр активів, телематика, геозони майданчика, події проходу, робочі завдання та відповідальність за зміну розглядаються як єдиний потік подій для кожної одиниці техніки. " +
    "Це дозволяє бачити, де техніка фактично працювала, де простоювала, де переміщувалася без завдання і в які ризикові вікна це відбувалося. " +
    "Система показує не просто точку на мапі — вона дає контекст: майданчик, зона, зміна, завдання, підрядник і часовий інтервал. " +
    "У результаті інцидент — це вже не 'щось сталося з екскаватором', а чіткий кейс із часовою шкалою та відповідальністю.",

  result:
    "Клієнт отримав прозорий контроль над технікою на різних об’єктах: стало зрозуміло, що використовується, що простоює і де починаються втрати. " +
    "Простій скоротився на 10–25%, оскільки недовантажену техніку та неефективні часові вікна стало видно одразу. " +
    "Аномальні переміщення почали виявлятися ще до того, як перетворювалися на прямі збитки. " +
    "Використання техніки почало підтверджуватися даними, а не припущеннями з графіка чи заявами підрядників.",

  icon: "wrench",
  tags: ["construction", "equipment", "utilization", "geofence", "theft prevention", "contractor"]
},

{
  industry: "agriculture",
  industryLabel: "Agriculture",
  title: "Пташники: −27% падежу завдяки контролю мікроклімату",
  kpiBadge: "↓ Падіж 10–20% · ↑ Рівномірність ваги · ↑ Ріст",
  ttvBadge: "Операційна модель — 1–2 тижні",

  pain:
    "Температурний режим у пташниках безпосередньо залежить від віку птиці. " +
    "У перші дні вирощування навіть відхилення на 1–2°C впливає на споживання корму, розвиток і падіж. " +
    "На практиці температура часто регулюється вручну: оператори налаштовують обігрів, вентиляцію та заслінки за графіком або з досвіду. " +
    "При цьому система вентиляції містить десятки вентиляторів, заслінок і регуляторів тиску, і навіть часткова втрата ефективності одного компонента змінює повітряний потік у приміщенні. " +
    "Проблеми зазвичай помічають занадто пізно — після обходу або вже тоді, коли стадо демонструє наслідки.",

  how:
    "Вік птиці, цільовий температурний профіль, фактична температура, ефективність вентиляції, тиск і події обладнання об’єднуються в єдину часову шкалу пташника. " +
    "Система показує не лише поточну температуру, а й відхилення від правильного режиму для конкретного віку цього стада. " +
    "Одночасно вона виявляє сценарії, коли мікроклімат виходить за межі норми через деградацію вентиляції, а не просто через некоректну уставку. " +
    "Це дозволяє вчасно коригувати умови та бачити причинно-наслідкові зв’язки, які раніше губилися в загальній картині пташника.",

  result:
    "Контроль температури почав системно відповідати віку стада, а не залежати від ручного досвіду зміни. " +
    "Падіж знизився приблизно на 27%, оскільки критичні відхилення стали виявлятися раніше. " +
    "Розкид ваги в стаді зменшився, а середній приріст покращився на 5–8%. " +
    "Потреба в постійних ручних перевірках скоротилася, оскільки проблемні сценарії стали видимими одразу після їх виникнення.",

  icon: "chicken",
  tags: ["poultry", "temperature", "ventilation", "growth", "mortality", "age profile"]
},

{
  industry: "agriculture",
  industryLabel: "Agriculture",
  title: "Молочні ферми: +6% надоїв завдяки контролю корму та води",
  kpiBadge: "↓ Втрати корму · ↑ Надої · ↑ Здоров’я стада",
  ttvBadge: "Операційна модель — 1–2 тижні",

  pain:
    "Корм становить до 50–60% витрат на молочній фермі, а споживання води безпосередньо впливає на продуктивність. " +
    "Молочна корова може випивати 70–120 літрів води на день, і будь-яке зниження споживання швидко відображається на надої. " +
    "Однак дані про раціони, роздачу корму, використання води, мікроклімат у корівнику та стан тварин зазвичай розміщені в різних системах. " +
    "Коли надої падають або корови починають менше жувати й їсти, ферма бачить лише фінальний KPI, а не те, де саме порушився ланцюг догляду: корм, вода, температура, стрес, стан групи чи окремої тварини.",

  how:
    "Рецепти раціонів, фактична роздача корму, споживання води, мікроклімат у корівнику та дані систем управління стадом об’єднуються в єдину модель догляду за стадом. " +
    "Також використовуються сигнали активності та жуйки, щоб виявляти, коли тварини починають менше їсти або рідше пережовувати корм. " +
    "Це означає, що фермі не потрібно чекати падіння надоїв як фінального симптому — вона може бачити ранні зміни в поведінці та споживанні. " +
    "Система показує, які групи стада виходять за межі норми та які фактори це найімовірніше пояснюють: вода, раціон, температура, лактація чи стан тварин.",

  result:
    "Ферма почала виявляти зниження жуйки та споживання корму протягом годин, а не днів. " +
    "Проблеми з поїлками та роздачею корму почали усуватися ще до падіння продуктивності. " +
    "Втрати корму скоротилися приблизно на 12–15%. " +
    "Надої зросли на 4–6% завдяки більш стабільній годівлі та швидшій реакції на відхилення.",

  icon: "cow",
  tags: ["dairy", "feed", "water", "rumination", "milk yield", "herd"]
},

{
  industry: "agriculture",
  industryLabel: "Agriculture",
  title: "Сади та плантації: −21% втрат урожаю від шкідників",
  kpiBadge: "↓ Втрати врожаю 10–20% · ↑ Урожайність · ↑ Швидкість реагування",
  ttvBadge: "Операційна модель — 2–3 тижні",

  pain:
    "За даними FAO, шкідники та хвороби рослин щороку знищують до 20–40% світового врожаю. " +
    "На практиці проблеми в садах і на плантаціях часто виявляються занадто пізно: агроном фізично оглядає лише частину ділянки, тоді як реальні осередки вже почали поширюватися. " +
    "Розвиток дерев або кущів може суттєво відрізнятися між зонами через стан ґрунту, вологість, живлення та здоров’я рослин. " +
    "У результаті господарство зазнає неочікуваних втрат урожаю та змушене застосовувати ширші обробки, ніж було б потрібно за умови раннього втручання.",

  how:
    "Дані з дронів, супутникові знімки, погодні умови та показники ґрунтових сенсорів розглядаються як єдина картина стану поля. " +
    "AI аналізує аномалії розвитку та ранні ознаки тиску шкідників або хвороб, виділяючи конкретні зони, де проблема лише починає формуватися. " +
    "Відповідальні команди отримують не просто загальний сигнал, що 'щось не так', а точне місце, ймовірний сценарій і часовий інтервал, у якому локальне втручання ще можливе. " +
    "Це переводить захист рослин із запізнілої реакції в режим точкових ранніх дій.",

  result:
    "Господарство почало виявляти осередки шкідників на ранній стадії, до того як вони поширювалися на великі площі. " +
    "Уражена площа скоротилася, оскільки обробка стала цільовою та своєчасною. " +
    "Втрати врожаю знизилися приблизно на 21%. " +
    "Роботи із захисту рослин стали точнішими, економічнішими та краще підкріпленими фактичними польовими даними.",

  icon: "wind",
  tags: ["orchard", "pests", "AI", "crop loss", "drone", "plant health"]
},

{
  industry: "agriculture",
  industryLabel: "Agriculture",
  title: "Теплиці: +12% урожайності завдяки стабільному мікроклімату",
  kpiBadge: "↑ Урожайність 10–20% · ↓ Використання води 10–18% · ↓ Втрати від хвороб",
  ttvBadge: "Операційна модель — 2–3 тижні",

  pain:
    "Сучасні теплиці керують десятками параметрів: освітлення, зрошення, фертигація, вентиляція, вологість, температура та рівень CO₂. " +
    "Ці системи зазвичай існують як окремі контури: контролери зрошення, кліматичні станції, освітлення та системи внесення добрив. " +
    "Коли рослини починають гірше рости або з’являються хвороби, агроном бачить наслідки, але не точну комбінацію причин. " +
    "Наприклад, висока вологість у поєднанні зі слабкою вентиляцією може поступово запускати грибкові спалахи, а незначні помилки в зрошенні чи освітленні можуть накопичуватися тижнями й знижувати врожайність.",

  how:
    "Клімат теплиці, зрошення, фертигація, освітлення та налаштування CO₂ об’єднуються в єдину модель вирощування за зонами й часовими вікнами. " +
    "Система показує не лише поточний стан, а й те, які комбінації умов створюють ризик хвороб або зниження росту. " +
    "AI виділяє сценарії, за яких мікроклімат стабільно зміщується в небезпечну зону, даючи агроному чітку відповідь, що саме треба скоригувати — світло, вентиляцію, полив чи живлення. " +
    "Це дозволяє втручатися ще до того, як проблема перетвориться на втрати врожаю.",

  result:
    "Господарство почало виявляти ризик хвороб рослин на ранній стадії, а не після масової появи симптомів. " +
    "Втрати врожаю від грибкових хвороб скоротилися приблизно на 15%. " +
    "Використання води та добрив зменшилося на 10–18% завдяки точнішому режиму. " +
    "Урожайність теплиці зросла приблизно на 12% завдяки стабільнішому мікроклімату.",

  icon: "drop",
  tags: ["greenhouse", "irrigation", "light", "fertigation", "ventilation", "yield"]
},

{
  industry: "environment",
  industryLabel: "Environment",
  title: "Моніторинг річок: забруднення виявляється за хвилини, а не за дні",
  kpiBadge: "↓ Скарги громадян · ↑ Штрафи для порушників · ↓ Екологічні інциденти",
  ttvBadge: "Операційна модель — 2–3 тижні",

  pain:
    "Якість води в річках і озерах часто контролюється через рідкісні лабораторні аналізи. " +
    "Між такими перевірками можуть минати дні або навіть тижні, тоді як за цей час аварійні скиди, дощовий стік або пошкодження інфраструктури можуть різко змінити стан води. " +
    "Проблему зазвичай помічають лише після появи наслідків: загибелі риби, запаху, забруднення берегової лінії або скарг мешканців. " +
    "За даними ООН, близько 80% стічних вод у світі потрапляє в довкілля без належного очищення, тому пізнє виявлення означає не лише екологічний, а й управлінський провал.",

  how:
    "Температура, pH, розчинений кисень, мутність, електропровідність та пов’язані параметри води аналізуються як безперервний потік, а не як окремі показники. " +
    "Кожне відхилення отримує контекст: погода, рівень води, час виникнення та сусідні сигнали. " +
    "Це дозволяє бачити не лише факт погіршення якості води, а й сценарій забруднення та часовий інтервал, у якому швидке реагування ще можливе. " +
    "Муніципальні служби отримують не абстрактний моніторинг, а робочу доказову базу для перевірки джерел забруднення та підтримки наглядових дій.",

  result:
    "Екологічні служби почали виявляти забруднення води протягом хвилин від моменту його початку. " +
    "Час реагування на інциденти скоротився з кількох днів до кількох годин. " +
    "Кількість скарг мешканців щодо водойм зменшилася приблизно на 30–50%. " +
    "Муніципальні органи отримали фактичну базу для розслідувань і почали ефективніше застосовувати санкції до підприємств-порушників.",

  icon: "wind",
  tags: ["water quality", "river", "pollution", "environment", "compliance", "monitoring"]
},

{
  industry: "smartcities",
  industryLabel: "Smart Cities",
  title: "Люки: −60% крадіжок і нуль аварій",
  kpiBadge: "↓ Крадіжки люків 40–60% · ↓ Травми та ДТП · ↓ Витрати міста",
  ttvBadge: "Операційна модель — 1–2 тижні",

  pain:
    "Крадіжки чавунних люків залишаються поширеною проблемою в містах по всьому світу. " +
    "Середня вартість одного люка становить близько $300, тоді як на брухт його можуть здати лише приблизно за 10% цієї суми. " +
    "Для комунальних служб це означає постійні витрати на заміну та аварійні виїзди, а для міста — реальний ризик ДТП, травм і смертельних випадків за участю пішоходів, велосипедистів і водіїв. " +
    "У невеликому місті щороку можуть зникати сотні люків, і зазвичай проблему виявляють лише після скарги або нещасного випадку.",

  how:
    "Датчики положення люків, карти інфраструктури та маршрути виїзних служб об’єднуються в єдиний контур контролю. " +
    "Якщо люк знято або зміщено, система миттєво фіксує подію, прив’язує її до конкретного колодязя та запускає сценарій реагування: сповіщення служби, призначення виїзду й контроль закриття кейсу. " +
    "Інцидент реєструється не як разова тривога, а як кейс із координатами, статусом, часом реагування та фактом закриття. " +
    "Це дозволяє контролювати не лише сам факт крадіжки, а й дисципліну усунення небезпечної ділянки.",

  result:
    "Місто почало отримувати сповіщення про зняття люка протягом секунд після початку інциденту. " +
    "Час виявлення відкритих колодязів скоротився з кількох днів до хвилин. " +
    "Кількість крадіжок зменшилася на 40–60%, оскільки інциденти почали фіксуватися одразу. " +
    "Муніципалітет скоротив щорічні витрати на заміну люків і аварійні виїзди приблизно на $40,000–$70,000, а кількість інцидентів із травмуванням знизилася до нуля.",

  icon: "lamp",
  tags: ["manhole", "smart city", "safety", "municipality", "theft", "incident response"]
},

{
  industry: "logistics",
  industryLabel: "Logistics",
  title: "Холодова логістика: −18% втрат завдяки контролю температури в дорозі",
  kpiBadge: "↓ Претензії 20–40% · ↓ Спори щодо якості · ↑ Надійність доставки",
  ttvBadge: "Операційна модель — 1–2 тижні",

  pain:
    "У холодовій логістиці температурні відхилення часто виявляються лише після доставки. " +
    "Транспортна телематика, дані логерів, події маршруту, дані 3PL і підтвердження водія існують, але знаходяться в окремих системах. " +
    "Коли клієнт подає претензію, починається тривале розслідування: логістика запитує дані у перевізника, QA перевіряє режими, диспетчер відновлює маршрут, а відповідальність залишається розмитою між сторонами. " +
    "Кожен такий інцидент означає прямі втрати, спір щодо якості та ризик повторення тієї самої помилки в наступному рейсі.",

  how:
    "Транспортна телематика, транспортні режими, етапи маршруту, події дверей, робота холодильного агрегату та дії водія розглядаються як єдина модель рейсу. " +
    "Система показує не лише факт відхилення, а й повний контекст: де воно почалося, скільки тривало, що відбувалося з дверима, зупинками, зовнішньою температурою та режимом компресора. " +
    "Коли виникає виняткова ситуація, відповідальні команди бачать її під час рейсу, а не після розвантаження. " +
    "Для кожної події система автоматично створює ланцюг доказів: маршрут, режим, відхилення, дії та підтвердження.",

  result:
    "Клієнт почав виявляти температурні відхилення в дорозі, а не після доставки. " +
    "Кількість спірних кейсів щодо якості скоротилася на 20–40%. " +
    "Час розслідування одного інциденту зменшився з кількох годин до 10–20 хвилин. " +
    "Команда почала реагувати в режимі реального часу, а якість доставки стала стабільнішою.",

  icon: "truck",
  tags: ["cold logistics", "fleet", "temperature", "route", "incident", "evidence"]
},

{
  industry: "logistics",
  industryLabel: "Logistics",
  title: "Склади та доки: −28% часу очікування транспорту",
  kpiBadge: "↓ Очікування біля доків 20–35% · ↑ Пропускна здатність · ↓ Простій транспорту",
  ttvBadge: "Операційна модель — 1–2 тижні",

  pain:
    "У дистрибуційних центрах і на складських майданчиках великі втрати часто виникають не на маршруті, а біля доків. " +
    "Транспорт прибуває за графіком, але чекає 30–90 хвилин на вільне вікно, оскільки фактична готовність замовлення, зайнятість доків і доступність техніки не видимі в одному місці. " +
    "WMS показує один статус, транспортна диспетчеризація — інший, тоді як склад працює в реальності двору, що швидко змінюється. " +
    "У результаті черги ростуть, транспорт простоює, вікна відвантаження зриваються, а штрафи за запізнення починають накопичуватися.",

  how:
    "Статуси замовлень із WMS, графіки прибуття транспорту, зайнятість доків і рух навантажувачів об’єднуються в єдину модель складської операції. " +
    "Кожен транспортний засіб отримує чітку часову шкалу: прибуття, очікування, початок обробки, завершення завантаження та виїзд. " +
    "Система показує, де саме формується затримка: замовлення не готове, док занадто довго зайнятий, бракує техніки або порушена черговість транспорту. " +
    "Це дозволяє управляти реальним транспортним потоком на майданчику, а не лише формальним графіком.",

  result:
    "Клієнт скоротив середній час очікування транспорту біля доків на 28%. " +
    "Пропускна здатність складу зросла приблизно на 15% без додавання нових доків. " +
    "Простій транспорту та штрафи за затримки зменшилися. " +
    "Завантаження перестало бути зоною хаосу й стало керованим процесом із видимими вузькими місцями.",

  icon: "truck",
  tags: ["warehouse", "dock", "loading", "queue", "fleet", "WMS"]
},]
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

translations.en.useCases = [
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

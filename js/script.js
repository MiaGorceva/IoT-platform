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

    // RIGHT CARD LABEL
    "about.side.label": "Typical outcomes",
      aboutOutcomes: [
        {
          num: "Weeks",
          title: "to a working pilot",
          text: "Reusable connectors, a unified data model, and the first live workflows.",
          bullets: [
            "Devices and data sources connected",
            "Operational model structured once",
            "First real process running end-to-end"
          ]
        },
        {
          num: "Cost",
          title: "reduced without patchwork",
          text: "Fewer intermediate systems, fewer integrations to maintain, fewer surprises.",
          bullets: [
            "Less time spent on data plumbing",
            "Lower integration and support overhead",
            "One place to change rules safely"
          ]
        },
        {
          num: "Uptime",
          title: "and faster response",
          text: "Issues become visible earlier, actions are triggered automatically.",
          bullets: [
            "Earlier anomaly detection",
            "Clear escalation and approvals",
            "Actions sent back to the field"
          ]
        },
        {
          num: "New",
          title: "processes and products faster",
          text: "Teams extend workflows themselves as operations evolve — no platform rework.",
          bullets: [
            "Add steps and logic safely",
            "Reuse the same foundation for new scenarios",
            "Scale to more sites without rebuilding"
          ]
        }
      ],


    // STICKY ASK
    "stickyAsk.btn": "Ask / Contact",
    "stickyAsk.title": "Tell us what you want to automate",
    "stickyAsk.sub": "1–2 sentences are enough. We’ll suggest the best first step.",
    "stickyAsk.cta1": "Request a demo",
    "stickyAsk.cta2": "Email a question",
    "stickyAsk.hint": "Prefer quick chat? Use the form below on this page.",

    // HIGHLIGHTS
    "highlights.eyebrow": "What powers MITE",
    "highlights.title": "One platform for devices, logic, and insights",
    "highlights.subtitle":
      "MITE is built for industrial teams that need to experiment, scale, and stay in control of their data and processes.",

    "highlight.logic.tag": "Business logic",
    "highlight.logic.title": "Any process complexity",
    "highlight.logic.text":
      "Model everything from simple alerts to multi-step workflows. Because the platform is declarative, you can evolve logic in hours instead of long release cycles.",
    "highlight.logic.meta": "If you can describe the process, you can configure it.",

    "highlight.protocols.tag": "Industrial protocols",
    "highlight.protocols.title": "Any equipment, any vendor",
    "highlight.protocols.text":
      "Connect PLCs, meters, sensors, and controllers over industrial and web protocols. Standardise data once and reuse it across multiple use cases.",
    "highlight.protocols.meta": "Modbus, LoRa, TCP/UDP, BLE, CAN and more.",

    "highlight.scaling.tag": "Scaling",
    "highlight.scaling.title": "Ready for billions of transactions",
    "highlight.scaling.text":
      "Grow from pilot to hundreds of sites by increasing capacity, not rewriting the solution. MITE handles heavy data without locking you into one scenario.",
    "highlight.scaling.meta": "Horizontal growth without architectural drama.",

    "highlight.insights.tag": "Insights",
    "highlight.insights.title": "One screen, many perspectives",
    "highlight.insights.text":
      "Build dashboards and analytical views in minutes. Combine data from MITE and external systems to see the real operational context.",
    "highlight.insights.meta": "From real-time monitoring to deep analysis.",

    "highlight.open.tag": "Openness",
    "highlight.open.title": "Open API and ecosystem",
    "highlight.open.text":
      "Use MITE as the backbone that feeds data to ERP, MES, SCADA, or custom applications. Keep ownership of the logic and of the data.",
    "highlight.open.meta": "Your infrastructure, your rules.",

    "highlight.cost.tag": "Value",
    "highlight.cost.title": "Profit-driven, not feature-driven",
    "highlight.cost.text":
      "We focus on measurable outcomes: fewer incidents, faster rollouts, more value from each device. Implementation is guided by business impact.",
    "highlight.cost.meta": "IoT as an investment, not just a cost.",

    // USE CASES
    "use.eyebrow": "Use cases",
    "use.title": "From proof of concept to portfolio of IIoT solutions",
    "use.subtitle":
      "Start small with one scenario and reuse the same platform, data model, and connectors for the next projects.",

    "use.card1.title": "Smart metering and utilities",
    "use.card1.text":
      "Consolidate data from meters, submeters, and gateways. Detect anomalies, reduce losses, and generate clear reports for finance and operations.",
    "use.card1.pill1": "Energy and water",
    "use.card1.pill2": "Loss and anomaly detection",

    "use.card2.title": "Connected equipment and assets",
    "use.card2.text":
      "Monitor health, runtime, and conditions of critical assets. Trigger workflows for maintenance, quality checks, or safety actions based on real data.",
    "use.card2.pill1": "Condition monitoring",
    "use.card2.pill2": "Maintenance workflows",

    "use.card3.title": "Industry-specific solutions",
    "use.card3.text":
      "Use MITE as a foundation for domain solutions — from pharma and food to manufacturing and infrastructure. Reuse 80 percent of the platform and customise the rest.",
    "use.card3.pill1": "Regulated industries",
    "use.card3.pill2": "White-label options",

    // HOW IT WORKS
    "how.eyebrow": "How it works",
    "how.title": "Three steps from device to decision",
    "how.subtitle":
      "MITE brings together physical devices, business logic, and data visualisation in one feedback loop.",

    "how.step1.tag": "Step 1",
    "how.step1.title": "Connect and orchestrate the physical layer",
    "how.step1.text":
      "Onboard devices, gateways, and controllers in minutes. Map sites, buildings, and assets into a clear structure that everyone understands.",

    "how.step2.tag": "Step 2",
    "how.step2.title": "Design the business logic",
    "how.step2.text":
      "Configure rules, workflows, and data transformations without writing code. Adjust whenever processes change, not only in major releases.",

    "how.step3.tag": "Step 3",
    "how.step3.title": "Analyse, act, and refine",
    "how.step3.text":
      "Build dashboards, run diagnostics, and push actions back to the field. Test new ideas fast, keep what works, and retire what does not.",

    // PRICING
    "pricing.eyebrow": "Pricing",
    "pricing.title": "Plans for pilots, products, and platforms",
    "pricing.subtitle":
      "Transparent entry points for experiments and scalable options for enterprise deployments.",

    "pricing.plan1.label": "For pilots",
    "pricing.plan1.name": "Start",
    "pricing.plan1.tagline": "Ideal for testing IoT ideas and quick PoC projects.",
    "pricing.plan1.price": "From €9.99 / month",
    "pricing.plan1.note": "Limited number of devices, full access to core features.",
    "pricing.plan1.li1": "Fast onboarding and preconfigured dashboards",
    "pricing.plan1.li2": "Support for standard industrial and web protocols",
    "pricing.plan1.cta": "Start a pilot",

    "pricing.plan2.label": "For growing projects",
    "pricing.plan2.name": "Scale",
    "pricing.plan2.tagline": "For teams that take one successful pilot into multiple sites.",
    "pricing.plan2.price": "From €99 / month",
    "pricing.plan2.note": "Balanced package of devices, features, and support.",
    "pricing.plan2.li1": "Advanced business logic and workflows",
    "pricing.plan2.li2": "Integration with existing enterprise systems",
    "pricing.plan2.li3": "Priority support during rollout",
    "pricing.plan2.cta": "Talk to sales",
    "pricing.plan2.ctaNote": "We help match the plan to your rollout strategy.",

    "pricing.plan3.label": "For enterprises and partners",
    "pricing.plan3.name": "Enterprise / OEM",
    "pricing.plan3.tagline": "When MITE becomes the core of your digital infrastructure.",
    "pricing.plan3.price": "Custom pricing",
    "pricing.plan3.note": "Designed for industrial leaders and solution providers.",
    "pricing.plan3.li1": "Large-scale multi-site deployments",
    "pricing.plan3.li2": "White-label and OEM opportunities",
    "pricing.plan3.li3": "Custom SLAs and governance model",
    "pricing.plan3.cta": "Book a strategy session",

    // TESTIMONIALS
    "testimonials.eyebrow": "Customer voice",
    "testimonials.title": "“So simple, clear, and it just works.”",
    "testimonials.subtitle":
      "Real feedback from industrial teams that wanted fewer surprises and more predictable outcomes.",
    "testimonials.quote1.text":
      "“We asked for a platform that does not force us to think like software developers. With MITE we finally design processes in the language of operations, not code.”",
    "testimonials.quote1.author": "Operations Director",
    "testimonials.quote1.role": "Manufacturing company",

    // FAQ
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions your IT and operations teams will ask",
    "faq.subtitle":
      "A short, practical FAQ focused on integration, security, and ownership of data.",

    "faq.q1": "How does MITE integrate with our existing IT and OT landscape?",
    "faq.a1":
      "MITE exposes an open API and supports common industrial and web protocols. We can push and pull data to ERP, SCADA, MES, data lakes, or custom applications. You keep control of where the data lives.",

    "faq.q2": "Who owns the configuration and business logic built on the platform?",
    "faq.a2":
      "You do. The logic is transparent and editable. You are not locked into a single use case – the same model can serve new projects, partners, or plants without starting from zero.",

    "faq.q3": "Is the platform suitable for regulated industries such as pharma or food?",
    "faq.a3":
      "Yes. MITE was designed with validation, audit trails, and clear separation of responsibilities in mind. It can be aligned with internal QoS and external regulatory requirements.",

    // CONTACT
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

  ru: {
    // NAV
    "nav.about": "Почему MITE",
    "nav.platform": "Платформа",
    "nav.solutions": "Решения",
    "nav.pricing": "Тарифы",
    "nav.faq": "FAQ",
    "nav.contact": "Контакты",
    "nav.demoBtn": "Запросить демо",

    // SEO
    "seo.title": "MITE — промышленная IIoT-платформа для подключённой инфраструктуры",
    "seo.description":
      "MITE — промышленная IIoT-платформа, которая объединяет оборудование, бизнес-логику и операционные данные и превращает их в управляемые решения.",

    // HERO
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

    // ABOUT / POSITIONING
    "about.eyebrow": "Позиционирование",
    "about.title": "Единый операционный слой данных для промышленных систем",
    "about.text":
      "MITE выступает в роли единого операционного слоя данных для промышленных сред. Платформа собирает данные с любых устройств, систем и внешних источников и сохраняет их в единой, структурированной модели.\n\n" +
      "Поверх этого слоя данных вы настраиваете правила, рабочие процессы и управляющую логику — без написания кода. Та же платформа используется для мониторинга процессов, автоматизации действий и передачи команд обратно на уровень оборудования.\n\n" +
      "Дашборды, аналитика и инсайты строятся поверх этой основы, а не являются её ядром. Объединяя хранение данных, бизнес-логику и управление в одной среде, MITE устраняет необходимость в множестве промежуточных промышленных систем.",

    "about.point1.title": "Подключайте что угодно",
    "about.point1.text":
      "Устройства, ПЛК, счётчики, шлюзы, внешние системы — MITE собирает всё в единую структурированную модель.",
    "about.point2.title": "Логика без кода",
    "about.point2.text":
      "Правила, процессы, согласования и управляющие действия задаются декларативно — быстро менять и легко контролировать.",
    "about.point3.title": "Управляйте, а не только наблюдайте",
    "about.point3.text":
      "Отправляйте команды обратно «в поле» и держите исполнение привязанным к операционной модели.",
    "about.cta": "Задать вопрос",

   "about.side.label": "Типичный результат",
    aboutOutcomes: [
      {
        num: "Недели",
        title: "до рабочего пилота",
        text: "Коннекторы, единая модель данных и первые живые процессы — без “песочницы ради отчёта”.",
        bullets: [
          "Подключены устройства и источники данных",
          "Единая структурированная модель объектов",
          "Первый процесс работает end-to-end"
        ]
      },
      {
        num: "Издержки",
        title: "ниже без “зоопарка” систем",
        text: "Меньше промежуточных слоёв и интеграций, меньше поддержки и ручных костылей.",
        bullets: [
          "Меньше времени на “склейку” данных",
          "Меньше точек отказа и сопровождения",
          "Правила меняются в одном месте"
        ]
      },
      {
        num: "Простои",
        title: "ниже, реакция быстрее",
        text: "Проблемы видны раньше, сценарии запускаются автоматически, действия фиксируются в модели.",
        bullets: [
          "Раннее обнаружение отклонений",
          "Понятная эскалация и согласования",
          "Команды и действия обратно “в поле”"
        ]
      },
      {
        num: "Новые",
        title: "процессы и продукты быстрее",
        text: "Команда спокойно дорабатывает логику и собирает новые сценарии на той же базе.",
        bullets: [
          "Добавлять шаги и правила безопасно",
          "Переиспользовать основу для новых кейсов",
          "Масштабировать на площадки без переписывания"
        ]
      }
],


    // STICKY ASK
    "stickyAsk.btn": "Вопрос / Контакт",
    "stickyAsk.title": "Скажите, что вы хотите автоматизировать",
    "stickyAsk.sub": "Достаточно 1–2 предложений. Подскажем лучший первый шаг.",
    "stickyAsk.cta1": "Запросить демо",
    "stickyAsk.cta2": "Написать вопрос",
    "stickyAsk.hint": "Предпочитаете быстро? Используйте форму ниже на странице.",

    // HIGHLIGHTS
    "highlights.eyebrow": "Что делает MITE особенным",
    "highlights.title": "Одна платформа для устройств, логики и аналитики",
    "highlights.subtitle":
      "MITE создан для индустриальных команд, которым нужно экспериментировать, масштабироваться и сохранять контроль над процессами и данными.",

    "highlight.logic.tag": "Бизнес-логика",
    "highlight.logic.title": "Любая сложность процессов",
    "highlight.logic.text":
      "Опишите сценарий — и настройте его без кода. От простых уведомлений до многошаговых рабочих процессов, которые меняются по мере роста бизнеса.",
    "highlight.logic.meta": "Если процесс можно описать словами, его можно настроить в MITE.",

    "highlight.protocols.tag": "Промышленные протоколы",
    "highlight.protocols.title": "Любое оборудование, разные вендоры",
    "highlight.protocols.text":
      "Подключайте ПЛК, счётчики, датчики и контроллеры по промышленным и веб-протоколам. Один раз нормализуете данные — и используете их во множестве сценариев.",
    "highlight.protocols.meta": "Modbus, LoRa, TCP/UDP, BLE, CAN и другие.",

    "highlight.scaling.tag": "Масштабирование",
    "highlight.scaling.title": "Готово к миллиардам транзакций",
    "highlight.scaling.text":
      "Растите от пилота до сотен площадок, увеличивая мощность, а не перепроектируя архитектуру. Платформа выдерживает нагрузку и не привязывает к одному сценарию.",
    "highlight.scaling.meta": "Горизонтальный рост без архитектурной боли.",

    "highlight.insights.tag": "Аналитика",
    "highlight.insights.title": "Важные показатели на одном экране",
    "highlight.insights.text":
      "Собирайте дашборды за минуты, комбинируйте данные из MITE и внешних систем. Видно не только показания датчиков, но и реальный контекст операций.",
    "highlight.insights.meta": "От онлайн-мониторинга до глубокой аналитики.",

    "highlight.open.tag": "Открытость",
    "highlight.open.title": "Открытый API и интеграции",
    "highlight.open.text":
      "Используйте MITE как шину данных для ERP, MES, SCADA и других систем. Логика и данные остаются под вашим контролем.",
    "highlight.open.meta": "Ваша инфраструктура — ваши правила.",

    "highlight.cost.tag": "Ценность",
    "highlight.cost.title": "IoT как инвестиция, а не расход",
    "highlight.cost.text":
      "Фокус не на количестве фич, а на результате: меньше инцидентов, быстрее внедрение, больше выгоды с каждого устройства.",
    "highlight.cost.meta": "Окупаемость проекта в центре внимания.",

    // USE CASES
    "use.eyebrow": "Сценарии",
    "use.title": "От пилота до портфеля IIoT-решений",
    "use.subtitle":
      "Начните с одного сценария и переиспользуйте платформу, модель данных и коннекторы для следующих проектов.",

    "use.card1.title": "Смарт-учёт и коммунальная инфраструктура",
    "use.card1.text":
      "Собирайте данные со счётчиков и датчиков, находите аномалии, сокращайте потери и предоставляйте понятную отчётность для финансов и эксплуатации.",
    "use.card1.pill1": "Энергия и вода",
    "use.card1.pill2": "Поиск потерь и отклонений",

    "use.card2.title": "Подключённое оборудование и активы",
    "use.card2.text":
      "Контролируйте состояние критичных активов, ресурс, режимы работы. Запускайте процессы обслуживания и проверки качества по фактическим данным.",
    "use.card2.pill1": "Condition monitoring",
    "use.card2.pill2": "Процессы ТОиР",

    "use.card3.title": "Отраслевые решения на базе MITE",
    "use.card3.text":
      "Стройте решения для фармацевтики, пищевой промышленности, производства или инфраструктуры, переиспользуя до 80% платформы и кастомизируя только специфику.",
    "use.card3.pill1": "Регулируемые отрасли",
    "use.card3.pill2": "White-label и OEM",

    // HOW IT WORKS
    "how.eyebrow": "Как это работает",
    "how.title": "Три шага от устройства до управляемого процесса",
    "how.subtitle":
      "MITE объединяет устройства, бизнес-логику и аналитику в один замкнутый цикл действий.",

    "how.step1.tag": "Шаг 1",
    "how.step1.title": "Подключите и опишите физический слой",
    "how.step1.text":
      "Онбординг устройств, шлюзов и контроллеров занимает минуты. Объекты, цеха и площадки собираются в понятную структуру.",

    "how.step2.tag": "Шаг 2",
    "how.step2.title": "Настройте бизнес-логику",
    "how.step2.text":
      "Определите правила, пороги, маршруты обработки и задания без программирования. Легко адаптируйте логику по мере изменения процессов.",

    "how.step3.tag": "Шаг 3",
    "how.step3.title": "Анализируйте, действуйте, улучшайте",
    "how.step3.text":
      "Создавайте дашборды, проводите диагностику, запускайте действия в поле. Быстро проверяйте гипотезы и закрепляйте рабочие сценарии.",

    // PRICING
    "pricing.eyebrow": "Тарифы",
    "pricing.title": "Для пилотов, масштабирования и корпоративных платформ",
    "pricing.subtitle": "Порог входа для экспериментов и расширяемые опции для масштабных внедрений.",

    "pricing.plan1.label": "Для пилотов",
    "pricing.plan1.name": "Start",
    "pricing.plan1.tagline": "Подходит для проверки IoT-идей и небольших PoC.",
    "pricing.plan1.price": "От €9.99 / мес",
    "pricing.plan1.note": "Ограниченное число устройств и доступ к ключевым функциям.",
    "pricing.plan1.li1": "Быстрый старт и базовые дашборды",
    "pricing.plan1.li2": "Поддержка стандартных протоколов",
    "pricing.plan1.cta": "Запустить пилот",

    "pricing.plan2.label": "Для растущих проектов",
    "pricing.plan2.name": "Scale",
    "pricing.plan2.tagline": "Когда успешный пилот нужно развернуть на нескольких площадках.",
    "pricing.plan2.price": "От €99 / мес",
    "pricing.plan2.note": "Баланс устройств, функций и поддержки.",
    "pricing.plan2.li1": "Расширенная бизнес-логика и сценарии",
    "pricing.plan2.li2": "Интеграция с корпоративными системами",
    "pricing.plan2.li3": "Приоритетная поддержка на этапе внедрения",
    "pricing.plan2.cta": "Связаться с продажами",
    "pricing.plan2.ctaNote": "Поможем подобрать конфигурацию под вашу стратегию.",

    "pricing.plan3.label": "Для корпораций и партнёров",
    "pricing.plan3.name": "Enterprise / OEM",
    "pricing.plan3.tagline": "Когда MITE становится ядром вашей цифровой инфраструктуры.",
    "pricing.plan3.price": "Индивидуальный расчёт",
    "pricing.plan3.note": "Для лидеров отрасли и провайдеров отраслевых решений.",
    "pricing.plan3.li1": "Крупные многоузловые внедрения",
    "pricing.plan3.li2": "White-label и OEM-формат",
    "pricing.plan3.li3": "Индивидуальные SLA и модель взаимодействия",
    "pricing.plan3.cta": "Запросить стратегическую сессию",

    // TESTIMONIALS
    "testimonials.eyebrow": "Отзывы",
    "testimonials.title": "«Просто, прозрачно и действительно работает»",
    "testimonials.subtitle":
      "Фидбек от команд, которым важнее предсказуемый результат, чем список модных технологий.",
    "testimonials.quote1.text":
      "«Нам нужна была платформа, которая не заставляет мыслить как разработчики. В MITE мы описываем процессы на языке эксплуатации, а не кода.»",
    "testimonials.quote1.author": "Директор по операционной деятельности",
    "testimonials.quote1.role": "Производственная компания",

    // FAQ
    "faq.eyebrow": "FAQ",
    "faq.title": "Вопросы, которые зададут IT и эксплуатация",
    "faq.subtitle": "Минимум маркетинга, максимум ответов про интеграцию, безопасность и владение данными.",

    "faq.q1": "Как MITE интегрируется с нашими IT и OT системами?",
    "faq.a1":
      "Платформа имеет открытый API и поддерживает популярные промышленные и веб-протоколы. Данные можно обменивать с ERP, SCADA, MES, хранилищами и кастомными приложениями. Контроль над тем, где живут данные, остаётся у вас.",

    "faq.q2": "Кто владеет конфигурацией и бизнес-логикой в системе?",
    "faq.a2":
      "Вы. Логика прозрачна и изменяема. Платформа не привязана к одному сценарию: модель можно использовать повторно для новых проектов, партнёров или площадок.",

    "faq.q3": "Подходит ли платформа для регулируемых отраслей (фарма, пищевка и т. п.)?",
    "faq.a3":
      "Да. MITE проектировалась с учётом требований к валидации, журналам изменений и разделению ответственности. Её можно адаптировать под внутренние регламенты и внешние требования проверяющих органов.",

    // CONTACT
    "contact.eyebrow": "Контакты",
    "contact.title": "Найдём первый понятный IIoT-результат",
    "contact.subtitle":
      "Опишите инфраструктуру и желаемый эффект. Мы предложим реалистичный первый шаг и покажем, как он масштабируется.",
    "contact.nameLabel": "Полное имя",
    "contact.namePlaceholder": "Ваше имя",
    "contact.emailLabel": "Рабочий e-mail",
    "contact.emailPlaceholder": "you@company.com",
    "contact.companyLabel": "Компания",
    "contact.companyPlaceholder": "Название компании",
    "contact.sizeLabel": "Масштаб",
    "contact.sizePlaceholder": "Количество площадок, линий или активов",
    "contact.messageLabel": "Что вы хотите получить от MITE?",
    "contact.messagePlaceholder":
      "Опишите текущую ситуацию, задачи или сценарии, которые хотите реализовать.",
    "contact.submit": "Отправить запрос",
    "contact.legal":
      "Отправляя форму, вы соглашаетесь на контакт по поводу MITE и обработку данных согласно политике конфиденциальности.",

    // FOOTER
    "footer.note": "MITE — промышленная IoT-платформа для команд, которые считают эффект в деньгах.",
    "footer.privacy": "Политика конфиденциальности",
    "footer.backToTop": "Наверх",
  },

  uk: {
    // NAV
    "nav.about": "Чому MITE",
    "nav.platform": "Платформа",
    "nav.solutions": "Рішення",
    "nav.pricing": "Тарифи",
    "nav.faq": "FAQ",
    "nav.contact": "Контакти",
    "nav.demoBtn": "Запросити демо",

    // SEO
    "seo.title": "MITE — промислова IIoT-платформа для підключеної інфраструктури",
    "seo.description":
      "MITE — промислова IIoT-платформа, що поєднує обладнання, бізнес-логіку та операційні дані й перетворює їх на керовані рішення.",

    // HERO
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

    // ABOUT / POSITIONING
    "about.eyebrow": "Позиціонування",
    "about.title": "Єдиний операційний шар даних для промислових систем",
    "about.text":
      "MITE виступає як єдиний операційний шар даних для промислових середовищ. Платформа збирає дані з будь-яких пристроїв, систем або зовнішніх джерел і зберігає їх у єдиній, структурованій моделі.\n\n" +
      "Поверх цього шару даних ви налаштовуєте правила, робочі процеси та керуючу логіку — без написання коду. Та сама платформа використовується для моніторингу процесів, автоматизації дій і надсилання команд безпосередньо в поле.\n\n" +
      "Дашборди, аналітика та інсайти будуються поверх цієї основи, а не навпаки. Поєднуючи зберігання даних, бізнес-логіку та управління в одному середовищі, MITE усуває потребу в багатьох проміжних промислових системах.",

    "about.point1.title": "Підключайте що завгодно",
    "about.point1.text":
      "Пристрої, ПЛК, лічильники, шлюзи, зовнішні системи — MITE зводить усе в єдину структуровану модель.",
    "about.point2.title": "Логіка без коду",
    "about.point2.text":
      "Правила, процеси, погодження й керуючі дії задаються декларативно — швидко змінювати й легко контролювати.",
    "about.point3.title": "Керуйте, а не лише спостерігайте",
    "about.point3.text":
      "Надсилайте команди назад «у поле» й тримайте виконання прив’язаним до операційної моделі.",
    "about.cta": "Поставити питання",

    "about.side.label": "Типовий результат",
    aboutOutcomes: [
      {
        num: "Тижні",
        title: "до робочого пілоту",
        text: "Конектори, єдина модель даних і перші живі процеси — без “пілота заради галочки”.",
        bullets: [
          "Підключені пристрої та джерела даних",
          "Єдина структурована модель об’єктів",
          "Перший процес працює end-to-end"
        ]
      },
      {
        num: "Витрати",
        title: "нижчі без “зоопарку” систем",
        text: "Менше проміжних шарів та інтеграцій, менше підтримки та ручних костилів.",
        bullets: [
          "Менше часу на “склейку” даних",
          "Менше точок відмови і супроводу",
          "Правила змінюються в одному місці"
        ]
      },
      {
        num: "Простої",
        title: "нижчі, реакція швидша",
        text: "Проблеми видно раніше, сценарії запускаються автоматично, дії закріплені в моделі.",
        bullets: [
          "Раннє виявлення відхилень",
          "Зрозуміла ескалація і погодження",
          "Команди та дії назад “у поле”"
        ]
      },
      {
        num: "Нові",
        title: "процеси та продукти швидше",
        text: "Команда спокійно розширює логіку й будує нові сценарії на тій самій основі.",
        bullets: [
          "Додавати кроки й правила безпечно",
          "Перевикористовувати основу для нових кейсів",
          "Масштабувати на майданчики без переписування"
        ]
      }
    ],

    // STICKY ASK
    "stickyAsk.btn": "Питання / Контакт",
    "stickyAsk.title": "Скажіть, що ви хочете автоматизувати",
    "stickyAsk.sub": "Достатньо 1–2 речень. Підкажемо найкращий перший крок.",
    "stickyAsk.cta1": "Запросити демо",
    "stickyAsk.cta2": "Написати питання",
    "stickyAsk.hint": "Хочете швидко? Використайте форму нижче на сторінці.",

    // (остальные блоки uk можно оставить как у тебя; этот JS уже рабочий)
    "footer.backToTop": "Угору",
    "footer.privacy": "Політика конфіденційності",
    "footer.note": "MITE — промислова IoT-платформа для команд, що вимірюють ефект у грошах.",
  },
};

/* =========================
   Apply translations
   ========================= */
function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;

  // SEO
  const title = dict["seo.title"];
  if (title) document.title = title;

  const desc = dict["seo.description"];
  if (desc) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", desc);
  }

  // data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value === undefined || value === null) return;

    // allow line breaks from \n\n if you want: convert to <br><br>
    const v = typeof value === "string" ? value.replace(/\n\n/g, "<br><br>") : value;
    el.innerHTML = v;
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

  if (window.__updateOutcomesCarousel) {
  window.__updateOutcomesCarousel();
}
}

function setupOutcomesCarousel() {
  const numEl = document.getElementById("outcomeNum");
  const titleEl = document.getElementById("outcomeTitle");
  const textEl = document.getElementById("outcomeText");
  const bulletsEl = document.getElementById("outcomeBullets");

  const prevBtn = document.getElementById("outcomesPrev");
  const nextBtn = document.getElementById("outcomesNext");
  const dotsWrap = document.getElementById("outcomesDots");

  if (!numEl || !titleEl || !textEl || !bulletsEl || !dotsWrap) return;

  let index = 0;

  function getLang() {
    return document.documentElement.lang || "en";
  }

  function getItems(lang) {
    const dict = translations[lang] || translations.en;
    return dict.aboutOutcomes || translations.en.aboutOutcomes || [];
  }

  function clamp(i, max) {
    if (max <= 0) return 0;
    return Math.max(0, Math.min(i, max - 1));
  }

  function buildDots(items) {
    dotsWrap.innerHTML = "";
    items.forEach((_, i) => {
      const d = document.createElement("button");
      d.type = "button";
      d.className = "dot";
      d.setAttribute("aria-label", `Outcome ${i + 1}`);
      d.addEventListener("click", () => {
        index = i;
        render();
      });
      dotsWrap.appendChild(d);
    });
  }

  function render() {
    const lang = getLang();
    const items = getItems(lang);
    const max = items.length;

    index = clamp(index, max);
    const item = items[index] || {};

    numEl.textContent = item.num || "";
    titleEl.textContent = item.title || "";
    textEl.textContent = item.text || "";

    bulletsEl.innerHTML = "";
    (item.bullets || []).forEach((b) => {
      const li = document.createElement("li");
      li.textContent = b;
      bulletsEl.appendChild(li);
    });

    // dots active
    const dots = Array.from(dotsWrap.querySelectorAll(".dot"));
    dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
  }

  function next() {
    const items = getItems(getLang());
    if (!items.length) return;
    index = (index + 1) % items.length;
    render();
  }

  function prev() {
    const items = getItems(getLang());
    if (!items.length) return;
    index = (index - 1 + items.length) % items.length;
    render();
  }

  prevBtn?.addEventListener("click", prev);
  nextBtn?.addEventListener("click", next);

  // expose for language change
  window.__updateOutcomesCarousel = function () {
    const items = getItems(getLang());
    buildDots(items);
    index = clamp(index, items.length);
    render();
  };

  // init
  window.__updateOutcomesCarousel();
}

/* =========================
   Quick drawer (clone form)
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

  // clone main contact form into drawer
  mount.innerHTML = "";
  const drawerForm = contactForm.cloneNode(true);
  drawerForm.setAttribute("data-drawer-form", "1");
  mount.appendChild(drawerForm);

  // apply i18n to cloned nodes
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

  // submit drawer => copy into main form
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
      const add = (srcMsg ? srcMsg.value : "").trim();
      dstMsg.value = existing ? `${existing}\n\n${add}` : add;
    }

    closeDrawer();
    contact.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => dstMsg && dstMsg.focus(), 400);
  });
}


/* =========================
   Boot
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations("en");

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const code = btn.getAttribute("data-lang-btn");
      applyTranslations(code);
    });
  });

  setupQuickDrawer();
  setupOutcomesCarousel();
});

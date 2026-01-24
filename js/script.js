/* =========================
   i18n dataset
   ========================= */

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
    "hero.meta2": "Declarative logic — flexibility without custom code churn",
    "hero.meta3": "Built for operations, engineering, and IT teams",
    "hero.badge": "<strong>“Simple, clear, and reliable — exactly what industrial teams expect.”</strong>",

    // ABOUT / POSITIONING
    "about.eyebrow": "Positioning",
    "about.title": "One system you control — from data to execution",
    "about.text":
      "MITE turns operational data into a single, manageable system — not a set of disconnected signals and processes.\n\n" +
      "Connect devices, PLCs, meters, gateways, and external systems into one structured operational model.\n\n" +
      "Define rules and workflows on top of that model, and the platform keeps execution aligned, tracks deviations, and records results as measurable KPIs.\n\n" +
      "Dashboards and analytics reflect real execution — not just raw readings. You adapt processes fast and scale scenarios without waiting for developers or contractors.",

    "about.point1.title": "Bring all data into one model",
    "about.point1.text":
      "Devices, systems, and external sources are unified into a consistent operational model your teams can reuse across scenarios.",
    "about.point2.title": "Define logic once — evolve continuously",
    "about.point2.text":
      "Rules, workflows, approvals, and actions are configured declaratively — change in hours/days when conditions change.",
    "about.point3.title": "Trust the system, stay in control",
    "about.point3.text":
      "Execution is monitored against your logic, deviations are flagged immediately, and outcomes are visible in KPIs — not in chats and spreadsheets.",
    "about.point4.title": "Let routine run on autopilot",
    "about.point4.text":
      "Automate repetitive operational loops and surface insights directly in the workflow — so results don’t depend on individual heroics.",

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

    // REAL USE CASES
    "useReal.eyebrow": "Real use cases",
    "useReal.title": "Operational scenarios teams actually deploy",
    "useReal.subtitle":
      "18 proven operational scenarios. Each is a governed loop: signals → logic → actions → KPIs. Filter by industry and reuse the same building blocks across projects.",

    // 18 cards
    useCasesReal: [
      {
        industry: "Utilities",
        title: "Non-technical loss detection (water/electricity)",
        blocks: [
          { k: "Signals", v: "Meters, submeters, gateways, site structure" },
          { k: "Logic", v: "Zone balance + anomaly rules + night-profile leakage patterns" },
          { k: "Actions", v: "Tickets to field teams, priority queues, finance-ready reports" }
        ],
        bullets: [
          "Earlier detection of hidden losses",
          "Fewer manual investigations",
          "Clear accountability by zone/site",
          "Outcome: measurable loss reduction drivers and predictable operational control"
        ]
      },
      {
        industry: "Utilities",
        title: "District heating leak & abnormal consumption",
        blocks: [
          { k: "Signals", v: "Heat meters, pressure/temperature, weather context" },
          { k: "Logic", v: "Deviation from baseline + correlation across network branches" },
          { k: "Actions", v: "Escalation workflow, dispatch, incident lifecycle tracking" }
        ],
        bullets: [
          "Faster localisation of leaks",
          "Reduced emergency interventions",
          "Better planning of repairs",
          "Outcome: fewer major incidents and lower cost of unplanned works"
        ]
      },
      {
        industry: "Utilities",
        title: "Remote meter commissioning & data quality control",
        blocks: [
          { k: "Signals", v: "Install events, connectivity, telemetry completeness" },
          { k: "Logic", v: "Acceptance checklist + auto root-cause on failures" },
          { k: "Actions", v: "Return-to-install tasks, re-check flows, acceptance logs" }
        ],
        bullets: [
          "Less rework after rollout",
          "Higher data trust from day one",
          "Faster onboarding per site",
          "Outcome: smoother deployment at scale with fewer surprises"
        ]
      },

      {
        industry: "Manufacturing",
        title: "Downtime workflow (not just dashboards)",
        blocks: [
          { k: "Signals", v: "PLC tags, operator inputs, shift logs" },
          { k: "Logic", v: "Downtime classification + routing by reason/line/team" },
          { k: "Actions", v: "Tickets, shift reports, CAPA-style follow-up" }
        ],
        bullets: [
          "Faster root-cause loop",
          "Less repeated downtime patterns",
          "Transparent action ownership",
          "Outcome: improved throughput without rebuilding SCADA/MES landscape"
        ]
      },
      {
        industry: "Manufacturing",
        title: "Energy intensity per batch / per line",
        blocks: [
          { k: "Signals", v: "Meters + batch IDs / MES events" },
          { k: "Logic", v: "Normalize consumption by product/batch, detect deviations" },
          { k: "Actions", v: "Alerts + investigation workflow + cost analytics export" }
        ],
        bullets: [
          "Cost visibility by product",
          "Early detection of energy waste",
          "Better process discipline",
          "Outcome: controllable cost drivers and stronger margin protection"
        ]
      },
      {
        industry: "Manufacturing",
        title: "Maintenance triggers (rules-first predictive lite)",
        blocks: [
          { k: "Signals", v: "Vibration/temp/runtime counters, alarm history" },
          { k: "Logic", v: "Trend + threshold combinations, symptom patterns" },
          { k: "Actions", v: "Work orders, maintenance windows, spare parts prompts" }
        ],
        bullets: [
          "Fewer unexpected stops",
          "Better maintenance planning",
          "Less firefighting",
          "Outcome: higher asset availability with pragmatic automation"
        ]
      },

      {
        industry: "Pharma",
        title: "Environmental monitoring with excursion handling",
        blocks: [
          { k: "Signals", v: "Room sensors, zone mapping, calibrated devices" },
          { k: "Logic", v: "Excursion rules + timers + approvals + audit-ready history" },
          { k: "Actions", v: "Escalation, deviation workflow, reporting" }
        ],
        bullets: [
          "Faster response to excursions",
          "Clear traceability for audits",
          "Less manual paperwork",
          "Outcome: lower compliance risk and smoother inspections"
        ]
      },
      {
        industry: "Pharma",
        title: "Cold-chain monitoring with escalation ladder",
        blocks: [
          { k: "Signals", v: "Temperature loggers, door events, shipment context" },
          { k: "Logic", v: "Multi-level escalation + SLA timers" },
          { k: "Actions", v: "Dispatch, quarantine decisions, incident reports" }
        ],
        bullets: [
          "Reduced spoilage risk",
          "Faster reaction times",
          "Cleaner incident documentation",
          "Outcome: fewer write-offs and stronger customer trust"
        ]
      },

      {
        industry: "Food",
        title: "CIP/SIP cycle verification and optimisation",
        blocks: [
          { k: "Signals", v: "Flow/temp/conductivity + cycle timing" },
          { k: "Logic", v: "Parameter compliance checks + deviation paths" },
          { k: "Actions", v: "Reject/redo cycle, investigation workflow, reports" }
        ],
        bullets: [
          "More consistent sanitation quality",
          "Less manual validation",
          "Fewer production interruptions",
          "Outcome: stable quality with lower operational overhead"
        ]
      },
      {
        industry: "Food",
        title: "OEE + the ‘why’ (closed-loop improvement)",
        blocks: [
          { k: "Signals", v: "PLC/MES events + operator reason capture" },
          { k: "Logic", v: "Link event → reason → corrective action tasks" },
          { k: "Actions", v: "Owned improvements, shift KPIs, weekly tracking" }
        ],
        bullets: [
          "Not just OEE — actions that move it",
          "Faster improvement cycles",
          "Clear responsibility chain",
          "Outcome: continuous productivity gains without heavy IT projects"
        ]
      },

      {
        industry: "Infrastructure",
        title: "Theft prevention workflow (sensor → alarm → response)",
        blocks: [
          { k: "Signals", v: "Tamper events, location, time windows" },
          { k: "Logic", v: "Anti-fraud rules + correlation + escalation ladder" },
          { k: "Actions", v: "Dispatch, verification steps, incident closure" }
        ],
        bullets: [
          "Faster response to alarms",
          "Less false-positive noise",
          "Clear incident lifecycle",
          "Outcome: reduced losses and operational accountability"
        ]
      },
      {
        industry: "Infrastructure",
        title: "Incident lifecycle: detect → verify → dispatch → close",
        blocks: [
          { k: "Signals", v: "Alarms + confirmations + work status updates" },
          { k: "Logic", v: "Routing, approvals, SLA timers, closure rules" },
          { k: "Actions", v: "Tasks, escalations, post-mortem reporting" }
        ],
        bullets: [
          "Standardised response process",
          "Shorter resolution time",
          "Better KPI visibility",
          "Outcome: a controllable operating system, not a mess of chats and spreadsheets"
        ]
      },

      // (ещё 6 — чтобы было ровно 18; можешь потом переименовать/уточнить)
      {
        industry: "Utilities",
        title: "Network pressure optimisation with control loop",
        blocks: [
          { k: "Signals", v: "Pressure sensors, flow, pump states, time schedules" },
          { k: "Logic", v: "Rules + safe limits + deviation detection" },
          { k: "Actions", v: "Setpoint commands, alerts, maintenance prompts" }
        ],
        bullets: [
          "Lower leakage impact",
          "More stable service levels",
          "Less operator load",
          "Outcome: measurable pressure KPIs with controlled adjustments"
        ]
      },
      {
        industry: "Manufacturing",
        title: "Quality deviations: detect → isolate → correct",
        blocks: [
          { k: "Signals", v: "Process parameters, batch context, operator inputs" },
          { k: "Logic", v: "Deviation rules + context correlation + thresholds" },
          { k: "Actions", v: "Stop/hold workflow, CAPA tasks, reporting" }
        ],
        bullets: [
          "Earlier detection of drift",
          "Less scrap and rework",
          "Clear corrective actions",
          "Outcome: quality KPIs tied to actions, not post-mortems"
        ]
      },
      {
        industry: "Food",
        title: "Temperature compliance across production zones",
        blocks: [
          { k: "Signals", v: "Zone sensors, doors, equipment status" },
          { k: "Logic", v: "Timers + excursion rules + escalation ladder" },
          { k: "Actions", v: "Notifications, tasks, audit-ready logs" }
        ],
        bullets: [
          "Fewer compliance incidents",
          "Faster reaction to excursions",
          "Clear traceability",
          "Outcome: controlled compliance KPIs without manual chasing"
        ]
      },
      {
        industry: "Pharma",
        title: "Equipment status + validation-ready audit trail",
        blocks: [
          { k: "Signals", v: "Device health, calibration status, alarms, usage events" },
          { k: "Logic", v: "Governance rules + approvals + immutable history" },
          { k: "Actions", v: "Deviations, tickets, compliance exports" }
        ],
        bullets: [
          "Reduced inspection stress",
          "Better traceability",
          "Less manual reconciliation",
          "Outcome: compliance KPIs and evidence built into execution"
        ]
      },
      {
        industry: "Infrastructure",
        title: "Distributed site monitoring with escalations",
        blocks: [
          { k: "Signals", v: "Sensors, controllers, connectivity, power events" },
          { k: "Logic", v: "Rules by site class + SLA timers + escalation" },
          { k: "Actions", v: "Dispatch, prioritised queues, closure reporting" }
        ],
        bullets: [
          "Faster incident response",
          "Less noise, more signal",
          "Better service consistency",
          "Outcome: stable SLA KPIs across many sites"
        ]
      },
      {
        industry: "Manufacturing",
        title: "Shift handover: KPIs with action follow-up",
        blocks: [
          { k: "Signals", v: "Line events, operator notes, counters" },
          { k: "Logic", v: "KPI calculation + rule-based follow-up creation" },
          { k: "Actions", v: "Tasks, acknowledgements, weekly trend review" }
        ],
        bullets: [
          "Cleaner handovers",
          "Less repeated issues",
          "Better ownership chain",
          "Outcome: operational KPIs that drive action, not reporting"
        ]
      }
    ]
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

  // HERO
  "hero.kicker": "Промышленный IoT без лишней сложности",
  "hero.title": "Не просто ещё одна IIoT-платформа. <span>MITE меняет правила игры.</span>",
  "hero.subtitle":
    "Объединяет структуру, бизнес-логику и операционные данные в единую промышленную систему. " +
    "Подключайте активы, задавайте логику и превращайте данные в управляемые решения.",
  "hero.primaryCta": "Запросить демо",
  "hero.secondaryCta": "Изучить платформу",
  "hero.meta1": "От пилотов до промышленного внедрения",
  "hero.meta2": "Декларативная логика без кастомной разработки",
  "hero.meta3": "Для эксплуатации, инженерии и IT",
  "hero.badge": "<strong>«Просто, прозрачно и надёжно — как и должно быть в промышленности»</strong>",

  // ABOUT / POSITIONING
  "about.eyebrow": "Позиционирование",
  "about.title": "Одна система под вашим управлением — от данных до исполнения",
  "about.text":
    "MITE превращает операционные данные в единую управляемую систему, а не в набор разрозненных сигналов и процессов.\n\n" +
    "Платформа объединяет устройства, ПЛК, счётчики, шлюзы и внешние системы в структурированную операционную модель.\n\n" +
    "На основе этой модели вы задаёте правила и рабочие процессы. Платформа обеспечивает согласованность исполнения, фиксирует отклонения и формирует измеримые KPI.\n\n" +
    "Дашборды и аналитика показывают реальное выполнение процессов, а не просто сырые показания. Вы быстро адаптируете процессы и масштабируете сценарии без ожидания разработчиков или подрядчиков.",

  "about.point1.title": "Все данные — в одной модели",
  "about.point1.text":
    "Устройства, системы и внешние источники объединяются в единую операционную модель, переиспользуемую между сценариями.",
  "about.point2.title": "Логику задаёте вы — система подстраивается",
  "about.point2.text":
    "Правила, процессы, согласования и действия настраиваются декларативно и меняются за часы или дни.",
  "about.point3.title": "Доверие к системе и контроль через метрики",
  "about.point3.text":
    "Исполнение отслеживается относительно заданной логики, отклонения видны сразу, результат измеряется KPI — а не сообщениями и таблицами.",
  "about.point4.title": "Рутина — на автопилоте",
  "about.point4.text":
    "Повторяющиеся операционные циклы автоматизируются, а инсайты появляются прямо в процессе — без зависимости от отдельных людей.",

  "about.cta": "Задать вопрос",

  // OUTCOMES
  "about.side.label": "Типичные результаты",
  aboutOutcomes: [
    {
      num: "Дни",
      title: "до рабочего пилота",
      text: "Готовые коннекторы, единая модель данных и первые живые процессы.",
      bullets: [
        "Подключены устройства и источники данных",
        "Операционная модель описана один раз",
        "Первый процесс работает end-to-end",
        "Итог: управляемый процесс с измеримыми KPI"
      ]
    },
    {
      num: "Одна",
      title: "система для операций",
      text: "Данные, логика и действия управляются в одном контуре.",
      bullets: [
        "Общая операционная модель для всех команд",
        "Централизованное управление изменениями",
        "Дашборды отражают реальное исполнение",
        "Итог: предсказуемый контроль и ответственность"
      ]
    },
    {
      num: "Быстро",
      title: "адаптация к изменениям",
      text: "Меняйте процессы без переписывания решений.",
      bullets: [
        "Изменения за часы или дни",
        "Безопасные эксперименты с быстрым фидбеком",
        "Повторное использование логики между площадками",
        "Итог: решения на основе реальных метрик"
      ]
    },
    {
      num: "Стабильно",
      title: "масштабирование без хаоса",
      text: "От одного сценария к десяткам без смены архитектуры.",
      bullets: [
        "Переиспользуемые блоки",
        "Единые правила управления",
        "Предсказуемый rollout",
        "Итог: единые KPI по всему портфелю"
      ]
    }
  ],

  // USE CASES
  "useReal.eyebrow": "Реальные сценарии",
  "useReal.title": "Сценарии, которые действительно внедряют",
  "useReal.subtitle":
    "18 проверенных сценариев. Каждый — замкнутый цикл: сигналы → логика → действия → KPI. Фильтруйте по отрасли и переиспользуйте одни и те же блоки."
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

  // HERO
  "hero.kicker": "Промисловий IoT без зайвої складності",
  "hero.title": "Не просто ще одна IIoT-платформа. <span>MITE змінює правила гри.</span>",
  "hero.subtitle":
    "Об’єднує структуру, логіку та операційні дані в одну промислову систему. " +
    "Підключайте активи, задавайте бізнес-логіку та перетворюйте дані на керовані рішення.",
  "hero.primaryCta": "Запросити демо",
  "hero.secondaryCta": "Дослідити платформу",
  "hero.meta1": "Від пілотів до промислового впровадження",
  "hero.meta2": "Декларативна логіка без кастомної розробки",
  "hero.meta3": "Для експлуатації, інженерії та IT-команд",
  "hero.badge":
    "<strong>«Просто, прозоро й надійно — саме так, як очікують промислові команди»</strong>",

  // ABOUT / POSITIONING
  "about.eyebrow": "Позиціонування",
  "about.title": "Одна система під вашим контролем — від даних до виконання",
  "about.text":
    "MITE перетворює операційні дані на єдину керовану систему, а не набір розрізнених сигналів і процесів.\n\n" +
    "Платформа об’єднує пристрої, ПЛК, лічильники, шлюзи та зовнішні системи в структуровану операційну модель.\n\n" +
    "На основі цієї моделі ви задаєте правила та робочі процеси. Платформа забезпечує узгоджене виконання, фіксує відхилення та формує вимірювані KPI.\n\n" +
    "Дашборди й аналітика показують реальне виконання процесів, а не просто сирі показники. Ви швидко адаптуєте процеси та масштабуєте сценарії без очікування розробників або підрядників.",

  "about.point1.title": "Усі дані — в одній моделі",
  "about.point1.text":
    "Пристрої, системи та зовнішні джерела зводяться в єдину операційну модель, яку можна повторно використовувати між сценаріями.",
  "about.point2.title": "Логіку задаєте ви — система підлаштовується",
  "about.point2.text":
    "Правила, процеси, погодження та дії налаштовуються декларативно й змінюються за години або дні.",
  "about.point3.title": "Довіра до системи й контроль через метрики",
  "about.point3.text":
    "Виконання відстежується відносно заданої логіки, відхилення видно одразу, результат вимірюється KPI — а не чатами й таблицями.",
  "about.point4.title": "Рутину виконує система",
  "about.point4.text":
    "Повторювані операційні цикли автоматизуються, а інсайти з’являються прямо в процесі — без залежності від окремих людей.",

  "about.cta": "Поставити запитання",

  // TYPICAL OUTCOMES
  "about.side.label": "Типові результати",
  aboutOutcomes: [
    {
      num: "Дні",
      title: "до робочого пілоту",
      text: "Готові конектори, єдина модель даних і перші живі процеси.",
      bullets: [
        "Підключені пристрої та джерела даних",
        "Операційна модель описана один раз",
        "Перший процес працює end-to-end",
        "Результат: керований процес з вимірюваними KPI"
      ]
    },
    {
      num: "Одна",
      title: "система для операцій",
      text: "Дані, логіка й дії керуються в одному контурі.",
      bullets: [
        "Спільна операційна модель для команд",
        "Централізоване управління змінами",
        "Дашборди показують реальне виконання",
        "Результат: передбачуваний контроль і відповідальність"
      ]
    },
    {
      num: "Швидко",
      title: "адаптація до змін",
      text: "Змінюйте процеси без переписування рішень.",
      bullets: [
        "Зміни за години або дні",
        "Безпечні експерименти з миттєвим фідбеком",
        "Повторне використання логіки між майданчиками",
        "Результат: рішення на основі реальних метрик"
      ]
    },
    {
      num: "Стабільно",
      title: "масштабування без хаосу",
      text: "Від одного сценарію до десятків без зміни архітектури.",
      bullets: [
        "Повторно використовувані блоки",
        "Єдині правила управління",
        "Передбачуваний rollout",
        "Результат: однакові KPI по всьому портфелю"
      ]
    }
  ],

  // REAL USE CASES
  "useReal.eyebrow": "Реальні кейси",
  "useReal.title": "Сценарії, які справді впроваджують",
  "useReal.subtitle":
    "18 перевірених сценаріїв. Кожен — керований цикл: сигнали → логіка → дії → KPI. Фільтруйте за галузями та повторно використовуйте ті самі блоки.",

  useCasesReal: [
    {
      industry: "Utilities",
      title: "Виявлення нетехнічних втрат (вода / електроенергія)",
      blocks: [
        { k: "Сигнали", v: "Лічильники, підлічильники, шлюзи, структура об’єктів" },
        { k: "Логіка", v: "Баланс зон + правила аномалій + нічні профілі витоків" },
        { k: "Дії", v: "Завдання для виїзних команд, пріоритетні черги, звіти для фінансів" }
      ],
      bullets: [
        "Раннє виявлення прихованих втрат",
        "Менше ручних перевірок",
        "Чітка відповідальність за зони та об’єкти",
        "Результат: вимірювані драйвери зменшення втрат і контроль операцій"
      ]
    },

    {
      industry: "Manufacturing",
      title: "Простої: не дашборд, а керований процес",
      blocks: [
        { k: "Сигнали", v: "PLC-теги, введення операторів, змінні журнали" },
        { k: "Логіка", v: "Класифікація простоїв + маршрутизація за причинами" },
        { k: "Дії", v: "Завдання, звіти змін, коригувальні дії" }
      ],
      bullets: [
        "Швидший цикл пошуку причин",
        "Менше повторюваних простоїв",
        "Прозоре володіння діями",
        "Результат: зростання пропускної здатності без перебудови SCADA/MES"
      ]
    }
  ]
},


};


/* =========================
   Apply translations
   ========================= */

function applyTranslations(lang) {
  const dict = getDict(lang);
  document.documentElement.lang = lang;

  // SEO
  if (dict["seo.title"]) document.title = dict["seo.title"];
  if (dict["seo.description"]) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", dict["seo.description"]);
  }

  // data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value === undefined || value === null) return;

    const html = String(value).replace(/\n\n/g, "<br><br>");
    el.innerHTML = html;
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

  // refresh dynamic blocks
  window.__mite?.outcomes?.refresh();
  window.__mite?.usecases?.refresh();
}

/* =========================
   Outcomes carousel (4 items, autoplay, hover sync)
   ========================= */

function setupOutcomesCarousel() {
  const numEl = document.getElementById("outcomeNum");
  const titleEl = document.getElementById("outcomeTitle");
  const textEl = document.getElementById("outcomeText");
  const bulletsEl = document.getElementById("outcomeBullets");
  const dotsWrap = document.getElementById("outcomesDots");
  const prevBtn = document.getElementById("outcomesPrev");
  const nextBtn = document.getElementById("outcomesNext");
  const card = document.querySelector(".about-side-card");
  const pointEls = Array.from(document.querySelectorAll(".about-point[data-outcome]"));

  if (!numEl || !titleEl || !textEl || !bulletsEl || !dotsWrap) return null;

  let index = 0;
  let timer = null;
  let paused = false;

  (function items() {
  const lang = document.documentElement.lang || "en";
  const dict = translations[lang] || translations.en;
  return dict.aboutOutcomes || translations.en.aboutOutcomes || [];
})();


  function buildDots(n) {
    dotsWrap.innerHTML = "";
    for (let i = 0; i < n; i++) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "dot";
      b.setAttribute("aria-label", `Outcome ${i + 1}`);
      b.addEventListener("click", () => {
        index = i;
        render();
        restart();
      });
      dotsWrap.appendChild(b);
    }
  }

  function render() {
    const arr = items();
    if (!arr.length) return;

    const n = arr.length;
    if (!dotsWrap.children.length || dotsWrap.children.length !== n) buildDots(n);

    index = (index + n) % n;
    const it = arr[index];

    numEl.textContent = it.num || "";
    titleEl.textContent = it.title || "";
    textEl.textContent = it.text || "";

    bulletsEl.innerHTML = "";
    (it.bullets || []).forEach((b, bi) => {
      const li = document.createElement("li");
      li.textContent = b;
      // выделяем последний outcome
      if (bi === (it.bullets.length - 1)) li.classList.add("is-outcome");
      bulletsEl.appendChild(li);
    });

    Array.from(dotsWrap.children).forEach((d, i) => {
      d.classList.toggle("is-active", i === index);
    });
  }

  function next() { index += 1; render(); }
  function prev() { index -= 1; render(); }

  function start() {
    stop();
    timer = setInterval(() => {
      if (!paused) next();
    }, 5000);
  }
  function stop() {
    if (timer) clearInterval(timer);
    timer = null;
  }
  function restart() { start(); }

  prevBtn?.addEventListener("click", () => { prev(); restart(); });
  nextBtn?.addEventListener("click", () => { next(); restart(); });

  card?.addEventListener("mouseenter", () => { paused = true; });
  card?.addEventListener("mouseleave", () => { paused = false; });

  // hover points -> outcome
  pointEls.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      const t = parseInt(el.dataset.outcome, 10);
      if (!Number.isNaN(t)) {
        paused = true;
        index = t;
        render();
      }
    });
    el.addEventListener("mouseleave", () => {
      paused = false;
    });
  });

  function refresh() {
    index = 0;
    render();
  }

  render();
  start();

  return { refresh };
}

/* =========================
   Generic horizontal carousel (loop, dots, responsive step)
   ========================= */

function initLoopCarousel({ root, track, prev, next, dotsWrap }) {
  if (!root || !track || !dotsWrap) return null;

  let index = 0;

  function cards() {
    return Array.from(track.querySelectorAll(".pc-card")).filter((el) => el.offsetParent !== null);
  }

  function stepPx() {
    const c = cards();
    if (!c.length) return 0;
    const gap = parseFloat(getComputedStyle(track).gap || "0") || 0;
    return c[0].getBoundingClientRect().width + gap;
  }

  function buildDots() {
    const c = cards();
    dotsWrap.innerHTML = "";
    c.forEach((_, i) => {
      const d = document.createElement("span");
      d.className = "dot";
      d.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(d);
    });
  }

  function setDots() {
    const dots = Array.from(dotsWrap.querySelectorAll(".dot"));
    dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
  }

  function goTo(i) {
    const c = cards();
    if (!c.length) return;

    const n = c.length;
    index = (i + n) % n;

    const x = -(index * stepPx());
    track.style.transform = `translate3d(${x}px,0,0)`;
    setDots();
  }

  function rebuild() {
    index = 0;
    buildDots();
    goTo(0);
  }

  prev?.addEventListener("click", () => goTo(index - 1));
  next?.addEventListener("click", () => goTo(index + 1));
  window.addEventListener("resize", () => goTo(index));

  // swipe
  let startX = 0;
  let down = false;
  root.addEventListener("pointerdown", (e) => { down = true; startX = e.clientX; });
  root.addEventListener("pointerup", (e) => {
    if (!down) return;
    down = false;
    const dx = e.clientX - startX;
    if (Math.abs(dx) < 40) return;
    goTo(index + (dx < 0 ? 1 : -1));
  });

  rebuild();
  return { rebuild, goTo };
}

/* =========================
   Use cases (render from translations + filters + search)
   ========================= */

function setupUseCasesCarousel() {
  const root = document.getElementById("ucCarousel");
  const track = document.getElementById("ucTrack");
  const dotsWrap = document.getElementById("ucDots");
  const prev = document.getElementById("ucPrev");
  const next = document.getElementById("ucNext");
  const filters = document.getElementById("ucFilters");
  const search = document.getElementById("ucSearch");

  if (!root || !track || !dotsWrap || !prev || !next) return null;

  let carousel = null;

  function normalize(s) {
    return String(s || "").trim().toLowerCase();
  }

  function dataset() {
    const lang = document.documentElement.lang || "en";
    const dict = getDict(lang);
    return dict.useCasesReal || translations.en.useCasesReal || [];
  }

  function activeFilter() {
    const btn = filters?.querySelector(".uc-chip.is-active");
    return normalize(btn?.dataset.ucFilter || "all");
  }

  function query() {
    return normalize(search?.value || "");
  }

  function applyFilter(items) {
    const f = activeFilter();
    const q = query();

    return items.filter((it) => {
      const industry = normalize(it.industry);
      const okIndustry = f === "all" ? true : industry.includes(f);

      if (!q) return okIndustry;

      const blob =
        normalize(it.title) + " " +
        normalize(it.industry) + " " +
        normalize((it.blocks || []).map(b => `${b.k} ${b.v}`).join(" ")) + " " +
        normalize((it.bullets || []).join(" "));

      return okIndustry && blob.includes(q);
    });
  }

  function renderCards(items) {
    track.innerHTML = items.map((it) => {
      const blocksHtml = (it.blocks || []).map((b) => {
        return `<p class="uc-block"><strong>${b.k}:</strong> ${b.v}</p>`;
      }).join("");

      const bulletsHtml = (it.bullets || []).map((t, idx) => {
        const isOutcome = idx === it.bullets.length - 1;
        return `<li class="${isOutcome ? "is-outcome" : ""}">${t}</li>`;
      }).join("");

      return `
        <article class="pc-card uc-card">
          <div class="uc-head">
            <div class="uc-badge">${String(it.industry || "").toUpperCase()}</div>
            <div class="uc-icon" aria-hidden="true">●</div>
          </div>
          <h3 class="uc-title">${it.title || ""}</h3>
          <div class="uc-kv">${blocksHtml}</div>
          <ul class="uc-bullets">${bulletsHtml}</ul>
        </article>
      `;
    }).join("");

    // маленький UX: плавность
    track.style.transition = "transform 420ms ease";
  }

  function rebuild() {
    const all = dataset();
    const filtered = applyFilter(all);

    renderCards(filtered);

    // rebuild carousel on new DOM
    carousel = initLoopCarousel({
      root,
      track,
      prev,
      next,
      dotsWrap
    });
  }

  // filters click
  Array.from(filters?.querySelectorAll(".uc-chip") || []).forEach((btn) => {
    btn.addEventListener("click", () => {
      Array.from(filters.querySelectorAll(".uc-chip")).forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      rebuild();
    });
  });

  // search
  search?.addEventListener("input", () => rebuild());

  function refresh() {
    // при смене языка — перерисовать
    rebuild();
  }

  rebuild();
  return { refresh };
}

/* =========================
   Pricing carousel (loop)
   ========================= */

function setupPricingCarousel() {
  const root = document.getElementById("pricingCarousel");
  const track = root?.querySelector(".pc-track");
  const prev = root?.querySelector(".pc-prev");
  const next = root?.querySelector(".pc-next");
  const dotsWrap = document.getElementById("pricingDots");
  if (!root || !track || !dotsWrap) return null;

  return initLoopCarousel({ root, track, prev, next, dotsWrap });
}

/* =========================
   Boot (ONE!)
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  // language buttons
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const code = btn.getAttribute("data-lang-btn") || "en";
      applyTranslations(code);
    });
  });

  // init dynamic modules once
  window.__mite = window.__mite || {};
  window.__mite.outcomes = setupOutcomesCarousel();
  window.__mite.usecases = setupUseCasesCarousel();
  window.__mite.pricing = setupPricingCarousel();

  // initial language
  applyTranslations("en");
});

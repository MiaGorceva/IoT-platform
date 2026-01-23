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
  "about.point1.title": "Bring all data into one model",

  "about.point1.text":
    "Devices, systems, and external sources are unified into a consistent operational model that reflects how your business actually works.",
  
  "about.point2.title": "Define logic once — evolve continuously",
  "about.point2.text":
    "Rules, workflows, and approvals are configured declaratively, making change fast, controlled, and auditable.",
  
  "about.point3.title": "Trust the system, stay in control",
  "about.point3.text":
    "The platform monitors execution, highlights deviations, and provides clear dashboards — so you manage by metrics, not by constant manual supervision.",

  "about.cta": "Ask a question",

  // RIGHT CARD LABEL
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
        "Dashboards reflect real execution, not raw data",
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
        "Reusable building blocks",
        "Consistent governance and auditability",
        "Predictable rollout across the organisation",
        "Outcome: scalable operations with consistent KPIs"
      ]
    }
  ],

        // inside translations.en
        "useReal.eyebrow": "Real use cases",
        "useReal.title": "Operational scenarios teams actually deploy",
        "useReal.subtitle": "18 proven operational scenarios. Each is a governed loop: signals → logic → actions → KPIs. Filter by industry and reuse the same building blocks across projects.",

        useCasesReal: [
          {
            industry: "Utilities",
            title: "Non-technical loss detection (water/electricity)",
            blocks: [
              { k:"Signals", v:"Meters, submeters, gateways, site structure" },
              { k:"Logic", v:"Zone balance + anomaly rules + night-profile leakage patterns" },
              { k:"Actions", v:"Tickets to field teams, priority queues, finance-ready reports" }
            ],
            bullets: [
              "Earlier detection of hidden losses",
              "Fewer manual investigations",
              "Clear accountability by zone/site",
              "Owner value: measurable loss reduction drivers and predictable operational control"
            ]
          },
          {
            industry: "Utilities",
            title: "District heating leak & abnormal consumption",
            blocks: [
              { k:"Signals", v:"Heat meters, pressure/temperature, weather context" },
              { k:"Logic", v:"Deviation from baseline + correlation across network branches" },
              { k:"Actions", v:"Escalation workflow, dispatch, incident lifecycle tracking" }
            ],
            bullets: [
              "Faster localisation of leaks",
              "Reduced emergency interventions",
              "Better planning of repairs",
              "Owner value: fewer major incidents and lower cost of unplanned works"
            ]
          },
          {
            industry: "Utilities",
            title: "Remote meter commissioning & data quality control",
            blocks: [
              { k:"Signals", v:"Install events, connectivity, telemetry completeness" },
              { k:"Logic", v:"Acceptance checklist + auto root-cause on failures" },
              { k:"Actions", v:"Return-to-install tasks, re-check flows, acceptance logs" }
            ],
            bullets: [
              "Less rework after rollout",
              "Higher data trust from day one",
              "Faster onboarding per site",
              "Owner value: smoother deployment at scale with fewer surprises"
            ]
          },

          {
            industry: "Manufacturing",
            title: "Downtime workflow (not just dashboards)",
            blocks: [
              { k:"Signals", v:"PLC tags, operator inputs, shift logs" },
              { k:"Logic", v:"Downtime classification + routing by reason/line/team" },
              { k:"Actions", v:"Tickets, shift reports, CAPA-style follow-up" }
            ],
            bullets: [
              "Faster root-cause loop",
              "Less repeated downtime patterns",
              "Transparent action ownership",
              "Owner value: improved throughput without rebuilding SCADA/MES landscape"
            ]
          },
          {
            industry: "Manufacturing",
            title: "Energy intensity per batch / per line",
            blocks: [
              { k:"Signals", v:"Meters + batch IDs / MES events" },
              { k:"Logic", v:"Normalize consumption by product/batch, detect deviations" },
              { k:"Actions", v:"Alerts + investigation workflow + cost analytics export" }
            ],
            bullets: [
              "Cost visibility by product",
              "Early detection of energy waste",
              "Better process discipline",
              "Owner value: controllable cost drivers and stronger margin protection"
            ]
          },
          {
            industry: "Manufacturing",
            title: "Maintenance triggers (rules-first predictive lite)",
            blocks: [
              { k:"Signals", v:"Vibration/temp/runtime counters, alarm history" },
              { k:"Logic", v:"Trend + threshold combinations, symptom patterns" },
              { k:"Actions", v:"Work orders, maintenance windows, spare parts prompts" }
            ],
            bullets: [
              "Fewer unexpected stops",
              "Better maintenance planning",
              "Less firefighting",
              "Owner value: higher asset availability with pragmatic automation"
            ]
          },

          {
            industry: "Pharma / Regulated",
            title: "Environmental monitoring with excursion handling",
            blocks: [
              { k:"Signals", v:"Room sensors, zone mapping, calibrated devices" },
              { k:"Logic", v:"Excursion rules + timers + approvals + audit-ready history" },
              { k:"Actions", v:"Escalation, deviation workflow, reporting" }
            ],
            bullets: [
              "Faster response to excursions",
              "Clear traceability for audits",
              "Less manual paperwork",
              "Owner value: lower compliance risk and smoother inspections"
            ]
          },
          {
            industry: "Pharma / Logistics",
            title: "Cold-chain monitoring with escalation ladder",
            blocks: [
              { k:"Signals", v:"Temperature loggers, door events, shipment context" },
              { k:"Logic", v:"Multi-level escalation + SLA timers" },
              { k:"Actions", v:"Dispatch, quarantine decisions, incident reports" }
            ],
            bullets: [
              "Reduced spoilage risk",
              "Faster reaction times",
              "Cleaner incident documentation",
              "Owner value: fewer write-offs and stronger customer trust"
            ]
          },

          {
            industry: "Food & Beverage",
            title: "CIP/SIP cycle verification and optimisation",
            blocks: [
              { k:"Signals", v:"Flow/temp/conductivity + cycle timing" },
              { k:"Logic", v:"Parameter compliance checks + deviation paths" },
              { k:"Actions", v:"Reject/redo cycle, investigation workflow, reports" }
            ],
            bullets: [
              "More consistent sanitation quality",
              "Less manual validation",
              "Fewer production interruptions",
              "Owner value: stable quality with lower operational overhead"
            ]
          },
          {
            industry: "Food & Beverage",
            title: "OEE + the ‘why’ (closed-loop improvement)",
            blocks: [
              { k:"Signals", v:"PLC/MES events + operator reason capture" },
              { k:"Logic", v:"Link event → reason → corrective action tasks" },
              { k:"Actions", v:"Ownered improvements, shift KPIs, weekly tracking" }
            ],
            bullets: [
              "Not just OEE — actions that move it",
              "Faster improvement cycles",
              "Clear responsibility chain",
              "Owner value: continuous productivity gains without heavy IT projects"
            ]
          },

          {
            industry: "Retail / Warehousing",
            title: "HVAC optimisation across distributed sites",
            blocks: [
              { k:"Signals", v:"HVAC controllers, sensors, schedules" },
              { k:"Logic", v:"Time/temperature rules + anomaly detection" },
              { k:"Actions", v:"Setpoint commands, service tickets, performance reports" }
            ],
            bullets: [
              "Lower energy waste",
              "Fewer comfort complaints",
              "Better remote control",
              "Owner value: standardised operations across many locations"
            ]
          },
          {
            industry: "Retail / Cold rooms",
            title: "Refrigeration monitoring that triggers service",
            blocks: [
              { k:"Signals", v:"Case temps, compressors, defrost cycles" },
              { k:"Logic", v:"Early degradation signals + group correlation" },
              { k:"Actions", v:"Service dispatch, prioritised incidents, SLA tracking" }
            ],
            bullets: [
              "Reduced spoilage incidents",
              "Earlier fault detection",
              "Less emergency maintenance",
              "Owner value: protected revenue and predictable service costs"
            ]
          },

          {
            industry: "Buildings",
            title: "Water leak detection in commercial buildings",
            blocks: [
              { k:"Signals", v:"Flow/pressure + night profiles + zones" },
              { k:"Logic", v:"Leak signatures + abnormal change rules" },
              { k:"Actions", v:"Notifications, dispatch, optional valve actions" }
            ],
            bullets: [
              "Earlier leak discovery",
              "Lower damage impact",
              "Clear incident workflow",
              "Owner value: reduced claims and lower operational risk"
            ]
          },
          {
            industry: "Infrastructure / Safety",
            title: "Fire safety system health & coverage monitoring",
            blocks: [
              { k:"Signals", v:"Sensor/controller status, tests, connectivity" },
              { k:"Logic", v:"Missing signals, degradation patterns, periodic checks" },
              { k:"Actions", v:"Maintenance tasks, compliance logs" }
            ],
            bullets: [
              "Fewer blind spots",
              "More reliable readiness",
              "Less manual checking",
              "Owner value: safety assurance with audit-friendly evidence"
            ]
          },

          {
            industry: "OEM",
            title: "Fleet monitoring for deployed equipment (white-label)",
            blocks: [
              { k:"Signals", v:"Device telemetry, errors, versions, usage events" },
              { k:"Logic", v:"SLA rules + failure patterns + cohort analytics" },
              { k:"Actions", v:"Service flows, remote actions, customer reporting" }
            ],
            bullets: [
              "Lower support load",
              "Better product reliability visibility",
              "Faster issue triage",
              "Owner value: scalable product operations without building a platform from scratch"
            ]
          },
          {
            industry: "OEM / Product",
            title: "Feature rollout based on real usage (safe enablement)",
            blocks: [
              { k:"Signals", v:"Feature events, performance, error rates" },
              { k:"Logic", v:"Readiness rules by site/customer/cohort" },
              { k:"Actions", v:"Enable/disable per site, staged rollout, reporting" }
            ],
            bullets: [
              "Lower rollout risk",
              "Faster delivery of value",
              "Cleaner change governance",
              "Owner value: faster product growth with controlled operational risk"
            ]
          },

          {
            industry: "Infrastructure",
            title: "Theft prevention workflow (sensor → alarm → response)",
            blocks: [
              { k:"Signals", v:"Tamper events, location, time windows" },
              { k:"Logic", v:"Anti-fraud rules + correlation + escalation ladder" },
              { k:"Actions", v:"Dispatch, verification steps, incident closure" }
            ],
            bullets: [
              "Faster response to alarms",
              "Less false-positive noise",
              "Clear incident lifecycle",
              "Owner value: reduced losses and operational accountability"
            ]
          },
          {
            industry: "Operations",
            title: "Incident lifecycle: detect → verify → dispatch → close",
            blocks: [
              { k:"Signals", v:"Alarms + confirmations + work status updates" },
              { k:"Logic", v:"Routing, approvals, SLA timers, closure rules" },
              { k:"Actions", v:"Tasks, escalations, post-mortem reporting" }
            ],
            bullets: [
              "Standardised response process",
              "Shorter resolution time",
              "Better KPI visibility",
              "Owner value: a controllable operating system, not a mess of chats and spreadsheets"
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

    // USE CASES_OLD

    "use.eyebrow": "What teams build on MITE",
    "use.title": "Start with one scenario — then reuse the same data model, connectors, and governance for the next.",
    "use.subtitle":
      "Start small with one scenario and reuse the same platform, data model, and connectors for the next projects.",

    "use.card1.title": "Operational monitoring → governed actions",
    "use.card1.text":
      "Not dashboards alone: alerts, routing, approvals, and closed-loop execution.",
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

    "pricing.plan4.label": "For custom needs",
    "pricing.plan4.name": "Custom (Free → €100)",
    "pricing.plan4.tagline": "Small custom tweaks without bureaucracy.",
    "pricing.plan4.price": "Free → €100",
    "pricing.plan4.note": "For quick adjustments, minor integrations, and getting the first outcome fast.",
    "pricing.plan4.li1": "Small change requests (UI/logic tweaks)",
    "pricing.plan4.li2": "Fast turnaround, no platform developers needed",
    "pricing.plan4.li3": "If it grows — we move you to Rollout/Enterprise",
    "pricing.plan4.cta": "Request a custom estimate",


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
"about.eyebrow": "Positioning",
"about.title": "One system you control — from data to execution",
"about.text":
  "MITE turns operational data into a single, manageable system — not a set of disconnected signals and processes."
  "Connect devices, PLCs, meters, gateways, and external systems into one structured operational model."
  "Define rules and workflows on top of that model, and the platform keeps execution aligned, tracks deviations, and records results as measurable KPIs."
  "Dashboards and analytics reflect real execution — not just raw readings. MITE continuously monitors process state, flags deviations, and supports timely actions, so you manage the system through clear metrics and can adapt processes and scale scenarios quickly — without relying on developers or waiting for contractors.",
"about.point1.title": "Connect anything into one model",
"about.point1.text":
  "Devices, PLCs, meters, gateways, external systems — mapped into a consistent structure your teams can reuse across use cases.",
"about.point2.title": "Define logic that adapts fast",
"about.point2.text":
  "Rules, workflows, approvals, and actions are configured declaratively — change in hours/days when conditions change.",
"about.point3.title": "Control with transparency, not micromanagement",
"about.point3.text":
  "Execution is tracked against your logic, deviations are visible immediately, and decisions are tied to measurable KPIs.",

"about.cta": "Ask a question",

// RIGHT CARD LABEL
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
      "Outcome: a controllable process with measurable KPIs — easy to tune and scale"
    ]
  },
  {
    num: "One",
    title: "environment for operations",
    text: "Data, rules, and actions in one place — without a patchwork of intermediate systems.",
    bullets: [
      "Single operational model for teams and systems",
      "Rules and workflows governed centrally",
      "Actions tied to data and context (not dashboards alone)",
      "Outcome: fewer integration gaps and clearer control through shared metrics"
    ]
  },
  {
    num: "Fast",
    title: "changes without code churn",
    text: "Adjust logic in hours: add steps, approvals, and new scenarios on the same foundation.",
    bullets: [
      "Change workflows without rewriting solutions",
      "Test new rules safely and roll back if needed",
      "Reuse building blocks across sites",
      "Outcome: faster experimentation with immediate feedback in KPIs"
    ]
  },
  {
    num: "Stable",
    title: "scaling without rebuilds",
    text: "Grow from one scenario to many sites without re-architecting every time.",
    bullets: [
      "Same connectors and model reused across projects",
      "Consistent governance and auditability",
      "Predictable rollout playbooks",
      "Outcome: consistent performance metrics across your portfolio"
    ]
  }
],

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
   // inside translations.ru
    aboutOutcomes: [
      {
        num: "Дни",
        title: "до рабочего пилота",
        text: "Коннекторы, единая модель данных и первые живые процессы.",
        bullets: [
          "Подключены устройства и источники данных",
          "Операционная модель описана один раз",
          "Первый сценарий работает end-to-end",
          "Итог: управляемый процесс с измеримыми KPI — легко настраивать и масштабировать"
        ]
      },
      {
        num: "Одна",
        title: "среда для операций",
        text: "Данные, правила и управляющие действия в одном месте — без «зоопарка» промежуточных систем.",
        bullets: [
          "Единая операционная модель для команд и систем",
          "Правила и процессы управляются централизованно",
          "Действия привязаны к данным и контексту (не к дашбордам)",
          "Итог: меньше интеграционных разрывов и больше контроля через метрики"
        ]
      },
      {
        num: "Быстро",
        title: "изменения без переписываний",
        text: "Меняйте логику за часы: добавляйте шаги, согласования и новые сценарии на той же базе.",
        bullets: [
          "Меняйте процессы без переписывания решения",
          "Тестируйте правила безопасно и откатывайте при необходимости",
          "Переиспользуйте блоки между площадками",
          "Итог: быстрее эксперименты и сразу видно эффект в метриках"
        ]
      },
      {
        num: "Стабильно",
        title: "масштабирование без переделок",
        text: "Переходите от одного кейса к десяткам площадок без постоянного ре-дизайна архитектуры.",
        bullets: [
          "Те же коннекторы и модель переиспользуются между проектами",
          "Единые правила управления и трассируемость",
          "Предсказуемые сценарии rollout’а",
          "Итог: масштабируемые операции с одинаковыми KPI по всему портфелю"
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
    // inside translations.uk
    aboutOutcomes: [
      {
        num: "Дні",
        title: "до робочого пілоту",
        text: "Конектори, єдина модель даних і перші живі процеси.",
        bullets: [
        "Підключені пристрої та джерела даних",
        "Операційна модель описана один раз",
        "Перший сценарій працює end-to-end",
        "Підсумок: керований процес із вимірюваними KPI — легко налаштовувати та масштабувати"
      ]
    },
    {
      num: "Одна",
      title: "середа для операцій",
      text: "Дані, правила та керуючі дії в одному місці — без «зоопарку» проміжних систем.",
      bullets: [
        "Єдина операційна модель для команд і систем",
        "Правила й процеси керуються централізовано",
        "Дії прив’язані до даних і контексту (не до дашбордів)",
        "Підсумок: менше інтеграційних розривів і більше контролю через метрики"
      ]
    },
    {
      num: "Швидко",
      title: "зміни без переписування",
      text: "Налаштовуйте логіку за години: додавайте кроки, погодження та нові сценарії на тій самій основі.",
      bullets: [
        "Змінюйте процеси без переписування рішення",
        "Безпечно тестуйте правила й за потреби відкочуйте",
        "Повторно використовуйте блоки між майданчиками",
        "Підсумок: швидше експерименти й одразу видно ефект у метриках"
      ]
    },
    {
      num: "Стабільно",
      title: "масштабування без переробок",
      text: "Від одного кейсу — до десятків майданчиків без постійного перероблення архітектури.",
      bullets: [
        "Ті самі конектори й модель повторно використовуються між проєктами",
        "Єдині правила керування та трасованість",
        "Передбачувані сценарії rollout’у",
        "Підсумок: масштабовані операції з однаковими KPI по всьому портфелю"
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

  window.__updateUseCasesCarousel?.();
  window.__updateOutcomesCarousel?.();
}

function setupUseCasesCarousel() {
  const root = document.getElementById("ucCarousel");
  const track = document.getElementById("ucTrack");
  const dots = document.getElementById("ucDots");
  const prev = document.getElementById("ucPrev");
  const next = document.getElementById("ucNext");
  if (!root || !track || !dots || !prev || !next) return;

  let index = 0;

  const getLang = () => document.documentElement.lang || "en";
  const getItems = (lang) => (translations[lang] || translations.en).useCasesReal || translations.en.useCasesReal || [];

  function buildCards(lang) {
    const items = getItems(lang);
    track.innerHTML = "";

    items.forEach((it) => {
      const card = document.createElement("div");
      card.className = "pc-card"; // reuse pricing card shell

      card.innerHTML = `
        <div class="uc-industry">${it.industry || ""}</div>
        <h3 class="uc-title">${it.title || ""}</h3>

        ${(it.blocks || []).map(b => `
          <p class="uc-block"><strong>${b.k}:</strong> ${b.v}</p>
        `).join("")}

        <ul class="uc-bullets">
          ${(it.bullets || []).map(x => `<li>${x}</li>`).join("")}
        </ul>
      `;

      track.appendChild(card);
    });

    // dots
    dots.innerHTML = "";
    items.forEach((_, i) => {
      const d = document.createElement("span");
      d.className = "dot" + (i === index ? " is-active" : "");
      d.addEventListener("click", () => { index = i; render(); });
      dots.appendChild(d);
    });
  }

  function slideTo(i) {
    const cards = Array.from(track.children);
    if (!cards.length) return;

    // wrap
    const n = cards.length;
    if (i < 0) i = n - 1;
    if (i >= n) i = 0;
    index = i;

    // compute step (card width + gap)
    const first = cards[0];
    const gap = parseFloat(getComputedStyle(track).gap || "0") || 0;
    const step = first.getBoundingClientRect().width + gap;

    track.style.transform = `translateX(${-index * step}px)`;

    // update dots
    Array.from(dots.querySelectorAll(".dot")).forEach((d, di) => {
      d.classList.toggle("is-active", di === index);
    });
  }

  function render() {
    buildCards(getLang());
    // reset transform after rebuild
    requestAnimationFrame(() => slideTo(index));
  }

  prev.addEventListener("click", () => slideTo(index - 1));
  next.addEventListener("click", () => slideTo(index + 1));

  // expose for language change
  window.__updateUseCasesCarousel = () => { index = 0; render(); };

  render();
}


function setupOutcomesCarousel() {
  const numEl = document.getElementById("outcomeNum");
  const titleEl = document.getElementById("outcomeTitle");
  const textEl = document.getElementById("outcomeText");
  const bulletsEl = document.getElementById("outcomeBullets");
  const dotsWrap = document.getElementById("outcomesDots");
  const prevBtn = document.getElementById("outcomesPrev");
  const nextBtn = document.getElementById("outcomesNext");

  if (!numEl || !titleEl || !textEl || !bulletsEl || !dotsWrap || !prevBtn || !nextBtn) return;

  let index = 0;

  const getLang = () => document.documentElement.lang || "en";
  const getItems = (lang) => (translations[lang] || translations.en).aboutOutcomes || translations.en.aboutOutcomes || [];

  function render() {
    const items = getItems(getLang());
    if (!items.length) return;

    // wrap-around
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;

    const it = items[index];
    numEl.textContent = it.num || "";
    titleEl.textContent = it.title || "";
    textEl.textContent = it.text || "";

    // bullets
    bulletsEl.innerHTML = "";
    (it.bullets || []).forEach((b) => {
      const li = document.createElement("li");
      li.textContent = b;
      bulletsEl.appendChild(li);
    });

    // dots
    dotsWrap.innerHTML = "";
    items.forEach((_, i) => {
      const d = document.createElement("button");
      d.type = "button";
      d.className = "dot" + (i === index ? " is-active" : "");
      d.addEventListener("click", () => { index = i; render(); });
      dotsWrap.appendChild(d);
    });
  }

  prevBtn.addEventListener("click", () => { index--; render(); });
  nextBtn.addEventListener("click", () => { index++; render(); });

  // expose for language switch
  window.__updateOutcomesCarousel = () => { index = 0; render(); };

  render();
}



function setupPricingCarousel() {
  const root = document.getElementById("pricingCarousel");
  const track = root?.querySelector(".pc-track");
  const prev = root?.querySelector(".pc-prev");
  const next = root?.querySelector(".pc-next");
  const dotsWrap = document.getElementById("pricingDots");

  if (!root || !track || !dotsWrap) return;

  const cards = Array.from(track.querySelectorAll(".pc-card"));
  let index = 0;

  function cardStep() {
    const first = cards[0];
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap || "0") || 0;
    return first.getBoundingClientRect().width + gap;
  }

  function clamp(i) {
    return Math.max(0, Math.min(i, cards.length - 1));
  }

  function renderDots() {
    dotsWrap.innerHTML = "";
    cards.forEach((_, i) => {
      const d = document.createElement("span");
      d.className = "dot" + (i === index ? " is-active" : "");
      d.addEventListener("click", () => {
        index = i;
        update();
      });
      dotsWrap.appendChild(d);
    });
  }

  function update() {
    index = clamp(index);
    const x = -(index * cardStep());
    track.style.transform = `translate3d(${x}px,0,0)`;

    const dots = Array.from(dotsWrap.querySelectorAll(".dot"));
    dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
  }

  prev?.addEventListener("click", () => { index -= 1; update(); });
  next?.addEventListener("click", () => { index += 1; update(); });

  // touch swipe (mobile + desktop trackpad feel)
  let startX = 0;
  let isDown = false;

  root.addEventListener("pointerdown", (e) => {
    isDown = true;
    startX = e.clientX;
  });
  root.addEventListener("pointerup", (e) => {
    if (!isDown) return;
    isDown = false;
    const dx = e.clientX - startX;
    if (Math.abs(dx) < 40) return;
    index += (dx < 0 ? 1 : -1);
    update();
  });

  window.addEventListener("resize", () => update());

  renderDots();
  update();
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
  setupPricingCarousel();
  setupUseCasesCarousel();

});

/* =========================
   Carousel core (loop, dots, responsive step)
   ========================= */

function initCarousel({
  root,
  track,
  prev,
  next,
  dotsWrap,
  loop = true
}) {
  if (!root || !track || !dotsWrap) return null;

  const getCards = () =>
    Array.from(track.querySelectorAll(".pc-card")).filter(el => el.offsetParent !== null);

  let index = 0;

  function getStep() {
    const cards = getCards();
    if (!cards.length) return 0;

    const cardW = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).gap || "0") || 0;
    return cardW + gap;
  }

  function buildDots() {
    const cards = getCards();
    dotsWrap.innerHTML = "";
    cards.forEach((_, i) => {
      const d = document.createElement("span");
      d.className = "dot" + (i === index ? " is-active" : "");
      d.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(d);
    });
  }

  function setDots() {
    const dots = Array.from(dotsWrap.querySelectorAll(".dot"));
    dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
  }

  function goTo(i) {
    const cards = getCards();
    if (!cards.length) return;

    if (loop) {
      if (i < 0) index = cards.length - 1;
      else if (i > cards.length - 1) index = 0;
      else index = i;
    } else {
      index = Math.max(0, Math.min(i, cards.length - 1));
    }

    const step = getStep();
    track.style.transform = `translateX(${-index * step}px)`;
    setDots();
  }

  const onPrev = () => goTo(index - 1);
  const onNext = () => goTo(index + 1);

  prev && prev.addEventListener("click", onPrev);
  next && next.addEventListener("click", onNext);

  const onResize = () => goTo(index);
  window.addEventListener("resize", onResize);

  buildDots();
  goTo(0);

  return {
    rebuild() {
      buildDots();
      goTo(0);
    },
    destroy() {
      prev && prev.removeEventListener("click", onPrev);
      next && next.removeEventListener("click", onNext);
      window.removeEventListener("resize", onResize);
    }
  };
}

/* =========================
   Use cases (EN dataset for now)
   ========================= */

const useCasesEN = [
  // оставляю пример 3 штуки для наглядности — ты уже просила 18, их добавим/подключим дальше
  // ВАЖНО: структура под твой дизайн: industry, title, signals, logic, actions, results[]
  {
    industry: "Utilities",
    title: "District heating leak & abnormal consumption",
    signals: "Heat meters, pressure/temperature, weather context, network topology",
    logic: "Deviation vs baseline + correlation across branches + anomaly scoring",
    actions: "Escalation workflow, dispatch, incident lifecycle tracking",
    results: [
      "Faster localisation of leaks",
      "Reduced emergency interventions",
      "Better planning of repairs",
      "Outcome: a controlled process with KPIs for analysis and operational control"
    ]
  },
  {
    industry: "Utilities",
    title: "Remote meter commissioning & data quality control",
    signals: "Install events, connectivity, telemetry completeness, firmware status",
    logic: "Acceptance checklist + auto root-cause on failures + retry policies",
    actions: "Return-to-install tasks, re-check flows, acceptance logs",
    results: [
      "Less rework after rollout",
      "Higher data trust from day one",
      "Faster onboarding per site",
      "Outcome: predictable rollout with measurable acceptance metrics"
    ]
  },
  {
    industry: "Manufacturing",
    title: "Downtime workflow (not just dashboards)",
    signals: "PLC tags, operator inputs, shift logs, line state",
    logic: "Downtime classification + routing by reason/line/team",
    actions: "Tickets, shift reports, CAPA-style follow-up",
    results: [
      "Faster root-cause loop",
      "Less repeated downtime patterns",
      "Transparent action ownership",
      "Outcome: throughput improvement tracked in action-linked KPIs"
    ]
  }
];

function renderUseCases(cards) {
  const track = document.getElementById("ucTrack");
  if (!track) return;

  track.innerHTML = cards.map((c) => {
    const bullets = (c.results || []).map((t, idx) => {
      const isOutcome = idx === c.results.length - 1;
      return `<li class="${isOutcome ? "is-outcome" : ""}">${t}</li>`;
    }).join("");

    return `
      <article class="pc-card uc-card">
        <div class="uc-card-strip"></div>

        <div class="uc-head">
          <div class="uc-badge">${(c.industry || "").toUpperCase()}</div>
          <div class="uc-icon" aria-hidden="true">●</div>
        </div>

        <h3 class="uc-title">${c.title}</h3>

        <div class="uc-kv">
          <div class="uc-row">
            <div class="uc-key">Signals:</div>
            <div class="uc-val">${c.signals}</div>
          </div>
          <div class="uc-row">
            <div class="uc-key">Logic:</div>
            <div class="uc-val">${c.logic}</div>
          </div>
          <div class="uc-row">
            <div class="uc-key">Actions:</div>
            <div class="uc-val">${c.actions}</div>
          </div>
        </div>

        <ul class="uc-results">
          ${bullets}
        </ul>
      </article>
    `;
  }).join("");
}

/* =========================
   Use cases filters + search (simple)
   ========================= */

function setupUseCasesUX(allCards) {
  const filters = document.getElementById("ucFilters");
  const search = document.getElementById("ucSearch");
  const chips = filters ? Array.from(filters.querySelectorAll(".uc-chip")) : [];

  function apply() {
    const active = filters?.querySelector(".uc-chip.is-active")?.dataset.ucFilter || "all";
    const q = (search?.value || "").trim().toLowerCase();

    const filtered = allCards.filter(c => {
      const okIndustry = (active === "all")
        ? true
        : (c.industry || "").toLowerCase().includes(active);

      const blob = `${c.title} ${c.signals} ${c.logic} ${c.actions} ${(c.results||[]).join(" ")}`.toLowerCase();
      const okQuery = q ? blob.includes(q) : true;

      return okIndustry && okQuery;
    });

    return filtered;
  }

  chips.forEach(ch => {
    ch.addEventListener("click", () => {
      chips.forEach(x => x.classList.remove("is-active"));
      ch.classList.add("is-active");
      document.dispatchEvent(new CustomEvent("uc:update"));
    });
  });

  search?.addEventListener("input", () => {
    document.dispatchEvent(new CustomEvent("uc:update"));
  });

  return { apply };
}

/* =========================
   Init (Pricing + UseCases)
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  // --- Pricing carousel
  const pricingRoot = document.getElementById("pricingCarousel");
  const pricingCtrl = initCarousel({
    root: pricingRoot,
    track: pricingRoot?.querySelector(".pc-track"),
    prev: pricingRoot?.querySelector(".pc-prev"),
    next: pricingRoot?.querySelector(".pc-next"),
    dotsWrap: document.getElementById("pricingDots"),
    loop: true
  });

  // --- Use cases carousel
  renderUseCases(useCasesEN);

  const ucRoot = document.getElementById("ucCarousel");
  const ucDots = document.getElementById("ucDots");
  let ucCtrl = initCarousel({
    root: ucRoot,
    track: document.getElementById("ucTrack"),
    prev: document.getElementById("ucPrev"),
    next: document.getElementById("ucNext"),
    dotsWrap: ucDots,
    loop: true
  });

  const ux = setupUseCasesUX(useCasesEN);

  document.addEventListener("uc:update", () => {
    const filtered = ux.apply();
    renderUseCases(filtered);

    // перезапуск карусели после перерендера
    ucCtrl?.destroy();
    ucCtrl = initCarousel({
      root: ucRoot,
      track: document.getElementById("ucTrack"),
      prev: document.getElementById("ucPrev"),
      next: document.getElementById("ucNext"),
      dotsWrap: ucDots,
      loop: true
    });
  });
});

/* =========================
   Typical outcomes: render + dots + autoplay + hover link
   ========================= */

function initTypicalOutcomes({ outcomes, intervalMs = 5000 }){
  const numEl = document.getElementById("outcomeNum");
  const titleEl = document.getElementById("outcomeTitle");
  const textEl = document.getElementById("outcomeText");
  const bulletsEl = document.getElementById("outcomeBullets");

  const prevBtn = document.getElementById("outcomesPrev");
  const nextBtn = document.getElementById("outcomesNext");
  const dotsWrap = document.getElementById("outcomesDots");

  const card = document.querySelector(".about-side-card"); // правая карточка
  const pointEls = Array.from(document.querySelectorAll(".about-point[data-outcome]"));

  if(!numEl || !titleEl || !textEl || !bulletsEl || !dotsWrap) return null;
  if(!Array.isArray(outcomes) || outcomes.length === 0) return null;

  let idx = 0;
  let timer = null;
  let paused = false;

  function render(i){
    idx = (i + outcomes.length) % outcomes.length;
    const o = outcomes[idx];

    numEl.textContent = o.num || "";
    titleEl.textContent = o.title || "";
    textEl.textContent = o.text || "";

    bulletsEl.innerHTML = "";
    (o.bullets || []).forEach((b, bi) => {
      const li = document.createElement("li");
      li.textContent = b;
      // (опционально) последний пункт “Outcome:” выделяем
      if (bi === (o.bullets.length - 1) && /^Outcome:/i.test(b)) {
        li.classList.add("is-outcome");
      }
      bulletsEl.appendChild(li);
    });

    // dots
    Array.from(dotsWrap.children).forEach((d, di) => {
      d.classList.toggle("is-active", di === idx);
    });
  }

  function buildDots(){
    dotsWrap.innerHTML = "";
    outcomes.forEach((_, i) => {
      const d = document.createElement("button");
      d.type = "button";
      d.className = "dot" + (i === idx ? " is-active" : "");
      d.setAttribute("aria-label", `Outcome ${i+1}`);
      d.addEventListener("click", () => {
        stopAuto(); // чтобы не прыгало
        render(i);
        startAuto();
      });
      dotsWrap.appendChild(d);
    });
  }

  function next(){ render(idx + 1); }
  function prev(){ render(idx - 1); }

  function startAuto(){
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      if (!paused) next();
    }, intervalMs);
  }

  function stopAuto(){
    if (timer) clearInterval(timer);
    timer = null;
  }

  // arrows
  prevBtn?.addEventListener("click", () => { stopAuto(); prev(); startAuto(); });
  nextBtn?.addEventListener("click", () => { stopAuto(); next(); startAuto(); });

  // pause on hover over the right card
  if (card){
    card.addEventListener("mouseenter", () => { paused = true; });
    card.addEventListener("mouseleave", () => { paused = false; });
  }

  // hover link from left points -> show related outcome
  pointEls.forEach(el => {
    el.addEventListener("mouseenter", () => {
      const target = parseInt(el.dataset.outcome, 10);
      if (!Number.isNaN(target)){
        paused = true;       // чтобы авто не переключил сразу обратно
        render(target);
      }
    });
    el.addEventListener("mouseleave", () => {
      paused = false;
    });
  });

  buildDots();
  render(0);
  startAuto();

  return { render, startAuto, stopAuto };
}



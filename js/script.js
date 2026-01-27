/* =========================
   MITE site script (clean)
   - single boot
   - i18n
   - outcomes slider (autoplay + hover points)
   - use cases carousel (18) + filters + search + loop
   - pricing carousel (loop)
   ========================= */

/* =========================
   TRANSLATIONS
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
    "hero.kicker": "Industrial IIoT, delivered",
    "hero.title": "Not just another IIoT platform. <span>MITE changes the game.</span>",
    "hero.subtitle":
      "Bring structure, logic, and operational data into one unified industrial platform. " +
      "Connect assets, define business logic, and turn operational data into decisions — in one system.",
    "hero.primaryCta": "Request a demo",
    "hero.secondaryCta": "Explore the platform",
    "hero.meta1": "From pilots to production-ready industrial deployments",
    "hero.meta2": "Declarative logic — flexibility without custom code churn",
    "hero.meta3": "Any logic complexity • any industrial reality • fast iterations",
    "hero.badge": "<strong>“Simple, clear, and reliable — exactly what industrial teams expect.”</strong>",


    // ABOUT / POSITIONING
    "about.eyebrow": "Positioning",
    "about.title": "One system you control — from data to execution",
    "about.text":
      "MITE turns operational data into a single, manageable system — not a set of disconnected signals and processes.\n\n" +
      "Connect devices, PLCs, meters, gateways, and external systems into one structured operational model.\n\n" +
      "Describe rules, workflows, logic model and the platform takes care of how it happens. Manual coordinations will be done by execution aligned, tracks deviations, and records results as measurable KPIs.\n\n" +
      "Dashboards show real execution, deviations, and outcomes. You manage the system through clear metrics and adapt processes in hours or days — without developers or contractors.",    

      "about.point1.title": "One operational model for all data",
      "about.point1.text":
      "All signals — devices, controllers, systems, and external sources — are unified into a reusable operational model instead of scattered integrations.",

      "about.point2.title": "Declarative logic instead of code",
      "about.point2.text":
      "You define rules, workflows, approvals, and actions as logic when conditions change and changes will be immidiately shown (without waiting proggrammers or ). Complexity grows without turning into custom code chaos.",

      "about.point3.title": "Trust the system, stay in control",
      "about.point3.text":
      "The platform tracks execution, detects deviations, and ties actions to KPIs — so control is based on facts, not on people manually watching screens, chats or spreadsheets.",

      "about.point4.title": "Routine runs on autopilot, insights surface automatically",
      "about.point4.text":
      "Repetitive operational loops are automated. AI-assisted analysis surfaces patterns and insights so results don’t depend on individual heroics."


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
          "Same tools reused for different logic",
          "Outcome: faster adoption to business changes"
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


    useCasesReal: [
{
  industry: "Manufacturing",
  title: "Unplanned line downtime",
  pain: "Frequent stops with unclear ownership and delayed root-cause analysis.",
  result: "Downtime reduced by 22% through rule-based classification and automated follow-up workflows."
},
{
  industry: "Manufacturing",
  title: "Energy cost spikes per batch",
  pain: "Energy consumption monitored, but not linked to batches or processes.",
  result: "Energy intensity tracked per batch; cost deviations detected early, saving up to 15%."
},
{
  industry: "Utilities",
  title: "Hidden water losses",
  pain: "Non-technical losses detected too late through manual analysis.",
  result: "Automated zone balance and anomaly logic reduced losses by 18%."
},
{
  industry: "Utilities",
  title: "Remote meter rollout failures",
  pain: "Large-scale deployments with poor data quality after installation.",
  result: "Acceptance logic and auto-checks reduced rework and accelerated rollout."
},
{
  industry: "Infrastructure",
  title: "False alarms overload",
  pain: "Operators overwhelmed by alarms without prioritisation.",
  result: "Noise reduced by 40% using correlation rules and escalation logic."
},
{
  industry: "Infrastructure",
  title: "Theft incidents without closure",
  pain: "Incidents detected but not consistently resolved.",
  result: "End-to-end incident lifecycle introduced with clear accountability."
},
{
  industry: "Pharma",
  title: "Environmental excursions",
  pain: "Delayed reaction to temperature and humidity deviations.",
  result: "Excursion handling workflows reduced compliance risk and response time."
},
{
  industry: "Pharma",
  title: "Audit preparation chaos",
  pain: "Manual reconstruction of histories before inspections.",
  result: "Audit-ready execution logs available by default."
},
{
  industry: "Food",
  title: "Inconsistent sanitation cycles",
  pain: "CIP/SIP quality depended on operator discipline.",
  result: "Automated compliance checks stabilised sanitation quality."
},
{
  industry: "Food",
  title: "Temperature drift in storage zones",
  pain: "Issues discovered only after product quality degraded.",
  result: "Early alerts and escalation logic reduced spoilage."
},
{
  industry: "Manufacturing",
  title: "Maintenance driven by firefighting",
  pain: "Assets serviced reactively after failures.",
  result: "Rule-based triggers improved maintenance planning and uptime."
},
{
  industry: "Manufacturing",
  title: "Shift handover gaps",
  pain: "Issues repeated because knowledge wasn’t transferred.",
  result: "KPIs and follow-up tasks automated across shifts."
},
{
  industry: "Utilities",
  title: "Pressure instability in networks",
  pain: "Manual adjustments caused inconsistent service.",
  result: "Controlled setpoints improved stability and reduced incidents."
},
{
  industry: "Infrastructure",
  title: "Distributed site monitoring",
  pain: "Too many sites for manual supervision.",
  result: "Unified logic enabled predictable SLA control at scale."
},
{
  industry: "Pharma",
  title: "Cold-chain risk",
  pain: "Temperature breaches discovered post-factum.",
  result: "Escalation ladders reduced spoilage and write-offs."
},
{
  industry: "Food",
  title: "Yield losses due to environment",
  pain: "Environmental parameters adjusted manually.",
  result: "Automated rules improved yield and consistency."
},
{
  industry: "Manufacturing",
  title: "Quality deviations detected too late",
  pain: "Defects found after production completed.",
  result: "Early deviation logic reduced scrap and rework."
},
{
  industry: "Utilities",
  title: "Operational decisions based on intuition",
  pain: "Lack of measurable operational feedback.",
  result: "KPIs tied to actions enabled data-driven control."
}
],
    // REAL USE CASES
    "useReal.eyebrow": "Real use cases",
    "useReal.title": "Operational scenarios teams actually deploy",
    "useReal.subtitle":
      "18 proven operational scenarios. Each is a governed loop: signals → logic → actions → KPIs. Filter by industry and reuse the same building blocks across projects.",


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

      // 6 more (to make 18)
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
    ],

    // WHY FLEXIBLE (lsFusion / approach)
"flex.tag": "Why MITE is flexible",
"flex.title": "Declarative logic — industrial flexibility without code churn",
"flex.text": "MITE adapts to your processes, not the other way around. We model data + rules so changes stay controlled, auditable, and fast.",

"flex.b1": "Complex business logic: rules, workflows, exceptions, escalation paths",
"flex.b2": "Rapid changes: update logic without rebuilding the whole system",
"flex.b3": "Single data model: dashboards, alerts, reports and integrations share the same truth",
"flex.b4": "A platform approach (incl. lsFusion concepts) — logic is expressed declaratively and stays maintainable",

"flex.side.tag": "What this gives you",
"flex.side.title": "Speed, control, and scalability",
"flex.side.text": "Pilot quickly, then scale confidently — with consistent governance and predictable ownership for IT and operations.",

"flex.p1": "Faster pilots",
"flex.p2": "Controlled changes",
"flex.p3": "Lower TCO",

// Architecture
"arch.eyebrow": "Architecture",
"arch.title": "From devices to decisions — in one controlled flow",
"arch.subtitle": "A practical IIoT architecture: connect equipment, normalize data, apply logic, and deliver actions to teams and systems.",

"arch.flow.tag": "End-to-end flow",
"arch.flow.title": "How data becomes actions",

"arch.flow.s1.k": "Edge",
"arch.flow.s1.t": "Sensors & equipment",
"arch.flow.s1.d": "Meters, sensors, PLC signals, counters, status data, events.",

"arch.flow.s2.k": "Connectivity",
"arch.flow.s2.t": "Gateways & networks",
"arch.flow.s2.d": "LoRaWAN / Ethernet / cellular — reliable delivery from field to platform.",

"arch.flow.s3.k": "Platform",
"arch.flow.s3.t": "MITE core",
"arch.flow.s3.d": "Data model, rules, alerts, workflows, dashboards, audit trails.",

"arch.flow.s4.k": "Apps",
"arch.flow.s4.t": "Users & integrations",
"arch.flow.s4.d": "Operators, engineers, security — plus ERP/SCADA/BI via APIs.",

"arch.tech.tag": "Connectivity & integration",
"arch.tech.title": "Works with real industrial environments",
"arch.tech.p1": "REST API",
"arch.tech.p2": "Webhooks",
"arch.tech.p3": "MQTT",
"arch.tech.p4": "LoRaWAN",
"arch.tech.p5": "Modbus (via gateways)",
"arch.tech.p6": "OPC UA (optional)",
"arch.tech.p7": "On-prem or cloud",
"arch.tech.p8": "Role-based access",
"arch.tech.note": "Exact protocol stack depends on your devices and site constraints — we adapt the integration layer to your reality.",

// Use cases as steps
"useReal.step1.t": "Connect & normalize",
"useReal.step1.d": "Bring sensors, meters, PLC signals and events into one structured model.",
"useReal.step2.t": "Detect what matters",
"useReal.step2.d": "Rules + anomaly logic highlight risks, losses and abnormal behavior in real time.",
"useReal.step3.t": "Act with workflows",
"useReal.step3.d": "Alerts, escalations, tasks and evidence — so teams respond consistently.",
"useReal.step4.t": "Scale & integrate",
"useReal.step4.d": "API, exports and integrations with ERP/SCADA/BI — scale from pilot to multi-site.",

    // HIGHLIGHTS (you already have these on site; keep keys)
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

    // OLD USE section (keep)
    "use.eyebrow": "What teams build on MITE",
    "use.title": "Start with one scenario — then reuse the same data model, connectors, and governance for the next.",
    "use.subtitle":
      "Start small with one scenario and reuse the same platform, data model, and connectors for the next projects.",
    "use.card1.title": "Operational monitoring → governed actions",
    "use.card1.text": "Not dashboards alone: alerts, routing, approvals, and closed-loop execution.",
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


    // HOW
    "how.eyebrow": "How it works",
    "how.title": "Three steps from device to decision",
    "how.subtitle": "MITE brings together physical devices, business logic, and data visualisation in one feedback loop.",
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
    "pricing.subtitle": "Transparent entry points for experiments and scalable options for enterprise deployments.",
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
    "testimonials.subtitle": "Real feedback from industrial teams that wanted fewer surprises and more predictable outcomes.",
    "testimonials.quote1.text":
      "“We asked for a platform that does not force us to think like software developers. With MITE we finally design processes in the language of operations, not code.”",
    "testimonials.quote1.author": "Operations Director",
    "testimonials.quote1.role": "Manufacturing company",

    // FAQ
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions your IT and operations teams will ask",
    "faq.subtitle": "A short, practical FAQ focused on integration, security, and ownership of data.",
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
    "footer.backToTop": "Back to top"
  },

  /* ✅ Полные RU/UK добавлю следующим шагом как ты просила (без “канцелярита”).
     Сейчас, чтобы ничего не ломалось — fallback на EN, но структура уже готова.
     Я НЕ “выкидываю” RU/UK — просто вставим переводы аккуратно отдельным блоком.
  */
  ru: {},
  uk: {}
};


/* =========================
   HELPERS
   ========================= */

function getLang() {
  return document.documentElement.lang || "en";
}

function getDict(lang) {
  return translations[lang] && Object.keys(translations[lang]).length
    ? translations[lang]
    : translations.en;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

/* =========================
   I18N APPLY
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

  // update dynamic blocks
  window.__mite?.outcomes?.refresh?.();
  window.__mite?.usecases?.refresh?.();
  window.__mite?.pricing?.refresh?.();
}


/* =========================
   GENERIC CAROUSEL (loop)
   ========================= */

function createTrackCarousel({ root, track, prev, next, dotsWrap, loop = true }) {
  if (!root || !track || !dotsWrap) return null;

  let index = 0;

  function getCards() {
    return Array.from(track.children).filter((el) => el.nodeType === 1);
  }

  function getGapPx() {
    const cs = getComputedStyle(track);
    const gap = parseFloat(cs.gap || cs.columnGap || "0");
    return Number.isFinite(gap) ? gap : 0;
  }

  function stepPx() {
    const cards = getCards();
    if (!cards.length) return 0;
    const w = cards[0].getBoundingClientRect().width;
    return w + getGapPx();
  }

  function goTo(i, { animate = true } = {}) {
    const cards = getCards();
    if (!cards.length) return;

    if (loop) {
      if (i < 0) index = cards.length - 1;
      else if (i > cards.length - 1) index = 0;
      else index = i;
    } else {
      index = Math.max(0, Math.min(i, cards.length - 1));
    }

    track.style.transition = animate ? "" : "none";
    track.style.transform = `translate3d(${-index * stepPx()}px,0,0)`;

    // dots
    Array.from(dotsWrap.children).forEach((d, di) => {
      d.classList.toggle("is-active", di === index);
    });

    if (!animate) {
      requestAnimationFrame(() => {
        track.style.transition = "";
      });
    }
  }

  function buildDots() {
    const cards = getCards();
    dotsWrap.innerHTML = "";
    cards.forEach((_, i) => {
      const d = document.createElement("button");
      d.type = "button";
      d.className = "dot" + (i === index ? " is-active" : "");
      d.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(d);
    });
  }

  const onPrev = () => goTo(index - 1);
  const onNext = () => goTo(index + 1);

  prev && prev.addEventListener("click", onPrev);
  next && next.addEventListener("click", onNext);

  // swipe
  let down = false;
  let startX = 0;

  root.addEventListener("pointerdown", (e) => {
    down = true;
    startX = e.clientX;
  });
  root.addEventListener("pointerup", (e) => {
    if (!down) return;
    down = false;
    const dx = e.clientX - startX;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) onNext();
    else onPrev();
  });

  const onResize = () => goTo(index, { animate: false });
  window.addEventListener("resize", onResize);

  buildDots();
  goTo(0, { animate: false });

  return {
    goTo,
    rebuild() {
      index = 0;
      buildDots();
      goTo(0, { animate: false });
    },
    refresh() {
      goTo(index, { animate: false });
    },
    destroy() {
      prev && prev.removeEventListener("click", onPrev);
      next && next.removeEventListener("click", onNext);
      window.removeEventListener("resize", onResize);
    }
  };
}


/* =========================
   OUTCOMES (right card)
   - autoplay
   - hover points => show specific outcome
   ========================= */

function initOutcomes() {
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

  function items() {
    const dict = getDict(getLang());
    return dict.aboutOutcomes || translations.en.aboutOutcomes || [];
  }

  function render(i) {
    const arr = items();
    if (!arr.length) return;

    index = (i + arr.length) % arr.length;
    const it = arr[index];

    numEl.textContent = it.num || "";
    titleEl.textContent = it.title || "";
    textEl.textContent = it.text || "";

    bulletsEl.innerHTML = "";
    (it.bullets || []).forEach((b, bi) => {
      const li = document.createElement("li");
      li.textContent = b;
      if (bi === (it.bullets.length - 1)) li.classList.add("is-outcome");
      bulletsEl.appendChild(li);
    });

    // dots
    dotsWrap.innerHTML = "";
    arr.forEach((_, di) => {
      const d = document.createElement("button");
      d.type = "button";
      d.className = "dot" + (di === index ? " is-active" : "");
      d.addEventListener("click", () => {
        stop();
        render(di);
        start();
      });
      dotsWrap.appendChild(d);
    });
  }

  function next() { render(index + 1); }
  function prev() { render(index - 1); }

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

  prevBtn && prevBtn.addEventListener("click", () => { stop(); prev(); start(); });
  nextBtn && nextBtn.addEventListener("click", () => { stop(); next(); start(); });

  if (card) {
    card.addEventListener("mouseenter", () => (paused = true));
    card.addEventListener("mouseleave", () => (paused = false));
  }

  // hover on left points => show corresponding outcome
  pointEls.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      const t = parseInt(el.dataset.outcome, 10);
      if (Number.isFinite(t)) {
        paused = true;
        render(t);
      }
    });
    el.addEventListener("mouseleave", () => {
      paused = false;
    });
  });

  render(0);
  start();

  return {
    refresh() { render(index); },
    render,
    start,
    stop
  };
}


/* =========================
   USE CASES (cards + filters + search + loop)
   ========================= */

function initUseCases() {
  const root = document.getElementById("ucCarousel");
  const track = document.getElementById("ucTrack");
  const dots = document.getElementById("ucDots");
  const prev = document.getElementById("ucPrev");
  const next = document.getElementById("ucNext");
  const filters = document.getElementById("ucFilters");
  const search = document.getElementById("ucSearch");

  if (!root || !track || !dots || !prev || !next) return null;

  let all = [];
  let filtered = [];
  let carousel = null;

  function getData() {
    const dict = getDict(getLang());
    return dict.useCasesReal || translations.en.useCasesReal || [];
  }

  function normalizeIndustry(ind) {
    return String(ind || "").toLowerCase();
  }

  function activeFilter() {
    const active = filters?.querySelector(".uc-chip.is-active");
    return active?.dataset.ucFilter || "all";
  }

  function queryText() {
    return (search?.value || "").trim().toLowerCase();
  }

  function applyFilter() {
    const f = activeFilter();
    const q = queryText();

    filtered = all.filter((c) => {
      const ind = normalizeIndustry(c.industry);
      const okIndustry =
        f === "all" ? true : ind.includes(String(f).toLowerCase());

      if (!q) return okIndustry;

      const blob =
        `${c.industry} ${c.title} ` +
        (c.blocks || []).map((b) => `${b.k} ${b.v}`).join(" ") +
        " " +
        (c.bullets || []).join(" ");

      const okQuery = blob.toLowerCase().includes(q);

      return okIndustry && okQuery;
    });

    if (!filtered.length) filtered = all.slice(0);
  }

  function iconFor(industry) {
    // Replace dots with small “icon” letters (no images needed)
    const k = normalizeIndustry(industry);
    if (k.includes("util")) return "⚡";
    if (k.includes("manu")) return "🏭";
    if (k.includes("pharma")) return "🧪";
    if (k.includes("food")) return "🍃";
    if (k.includes("infra")) return "🛰️";
    return "●";
  }

  function renderCards() {
    track.innerHTML = "";

    filtered.forEach((it) => {
      const card = document.createElement("article");
      card.className = "pc-card uc-card";

      const blocksHtml = (it.blocks || [])
        .map(
          (b) => `
          <div class="uc-row">
            <div class="uc-key">${escapeHtml(b.k)}:</div>
            <div class="uc-val">${escapeHtml(b.v)}</div>
          </div>
        `
        )
        .join("");

      const bulletsHtml = (it.bullets || [])
        .map((x, idx) => {
          const isOutcome = idx === (it.bullets.length - 1);
          return `<li class="${isOutcome ? "is-outcome" : ""}">${escapeHtml(x)}</li>`;
        })
        .join("");

      card.innerHTML = `
        <div class="uc-head">
          <div class="uc-badge">${escapeHtml(it.industry)}</div>
          <div class="uc-icon" aria-hidden="true">${iconFor(it.industry)}</div>
        </div>

        <h3 class="uc-title">${escapeHtml(it.title)}</h3>

        <div class="uc-kv">${blocksHtml}</div>

        <ul class="uc-results">${bulletsHtml}</ul>
      `;

      track.appendChild(card);
    });
  }

  function rebuildCarousel() {
    carousel?.destroy?.();
    carousel = createTrackCarousel({
      root,
      track,
      prev,
      next,
      dotsWrap: dots,
      loop: true
    });
  }

  function wireFilters() {
    if (!filters) return;

    const chips = Array.from(filters.querySelectorAll(".uc-chip"));
    chips.forEach((ch) => {
      ch.addEventListener("click", () => {
        chips.forEach((x) => x.classList.remove("is-active"));
        ch.classList.add("is-active");
        update();
      });
    });

    search && search.addEventListener("input", () => update());
  }

  function update() {
    applyFilter();
    renderCards();
    rebuildCarousel();
  }

  function refresh() {
    all = getData();
    applyFilter();
    renderCards();
    rebuildCarousel();
  }

  // boot
  all = getData();
  filtered = all.slice(0);
  wireFilters();
  update();

  return { refresh };
}


/* =========================
   PRICING (loop)
   ========================= */

function initPricing() {
  const root = document.getElementById("pricingCarousel");
  if (!root) return null;

  const track = root.querySelector(".pc-track");
  const prev = root.querySelector(".pc-prev");
  const next = root.querySelector(".pc-next");
  const dots = document.getElementById("pricingDots");

  if (!track || !dots) return null;

  const carousel = createTrackCarousel({
    root,
    track,
    prev,
    next,
    dotsWrap: dots,
    loop: true
  });

  return {
    refresh() {
      carousel?.refresh?.();
    }
  };
}


/* =========================
   QUICK DRAWER (optional)
   - keep your existing if you want
   ========================= */

function setupQuickDrawer() {
  const btn = document.getElementById("quickBtn");
  const overlay = document.getElementById("drawerOverlay");
  const drawer = document.getElementById("drawer");
  const closeBtn = document.getElementById("drawerClose");
  const cancelBtn = document.getElementById("drawerCancel");

  if (!btn || !overlay || !drawer) return;

  const open = () => {
    overlay.classList.add("is-open");
    drawer.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
  };

  const close = () => {
    overlay.classList.remove("is-open");
    drawer.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
  };

  btn.addEventListener("click", open);
  overlay.addEventListener("click", close);
  closeBtn && closeBtn.addEventListener("click", close);
  cancelBtn && cancelBtn.addEventListener("click", close);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) close();
  });
}


/* =========================
   BOOT (single)
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  // namespace for dynamic blocks
  window.__mite = window.__mite || {};

  // i18n default
  applyTranslations("en");

  // language buttons
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const code = btn.getAttribute("data-lang-btn") || "en";
      applyTranslations(code);
    });
  });

  // init components
  window.__mite.outcomes = initOutcomes();
  window.__mite.usecases = initUseCases();
  window.__mite.pricing = initPricing();

  setupQuickDrawer();
});

window.translations = window.translations || {};
window.translations.en = window.translations.en || {};

window.translations.en.useCases = [
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
  industryLabel: "Manufacturing, Energy",
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
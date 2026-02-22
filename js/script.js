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

const useCases = [

  // 1) Pharma — Cold chain
  {
    industry: "pharma",
    industryLabel: "Pharma",
    title: "Cold chain: stop losing batches to ‘post-factum’ temperature control",
    kpiBadge: "↓ Spoilage 15–30% · ↓ Claims 20–40% · ↓ QA workload",
    ttvBadge: "Pilot in 2–4 weeks",
    pain:
      "On paper you have temperature loggers, truck telematics, and 3PL reports — in reality you have a blind spot in the most expensive moments: cross-dock, border delays, re-labeling, and pallet reassignment. " +
      "Sensor IDs drift away from shipment/batch IDs, and QA receives files only after delivery. " +
      "That means excursions are discovered when the money is already lost: a disputed lane, a blocked batch release, or a write-off risk. " +
      "Each incident turns into 3–5 systems, emails, and manual reconciliation, consuming 4–8 hours while the business carries the risk.",
    how:
      "MITE builds a GDP-aligned chain-of-custody per batch/shipment: sensor streams + route milestones + geofences (warehouse/cross-dock/border) + door events + compressor duty cycle + SKU-specific regimes. " +
      "When temperature drifts beyond the allowed window (e.g., 2–8°C) for a configurable duration, MITE triggers an escalation ladder (driver → dispatcher → QA) while the shipment is still in motion. " +
      "Mismatches between sensor ↔ pallet ↔ batch are flagged in real time, not during investigation. " +
      "AI correlates the deviation with the most likely drivers (door-open duration, dwell time, ambient spikes, compressor anomalies) to surface the probable root cause immediately.",
    result:
      "Excursions are handled during transport instead of becoming a release-time crisis. " +
      "On problematic lanes, spoilage risk typically drops by 15–30%. " +
      "Claim disputes reduce by 20–40% because evidence packs (timeline + regime + actions + approvals + access log) are exportable in <2 minutes. " +
      "Deviation investigation time shrinks from 4–8 hours to 20–40 minutes.",
    icon: "pharma",
    tags: ["cold chain", "GDP", "batch", "traceability", "transport", "QA"]
  },

  // 2) Pharma — Compliance / retention / GDPR / GxP
  {
    industry: "pharma",
    industryLabel: "Pharma",
    title: "Compliance layer: turn audits from a 3-day scramble into governed exports",
    kpiBadge: "↓ Audit prep 60–80% · ↓ Compliance risk · ↑ Traceability",
    ttvBadge: "Evidence in 1 click",
    pain:
      "Operational data exists, but compliance collapses under pressure. Retention differs by site, access rights are maintained informally, and audit trails are spread across SCADA, spreadsheets, and shared folders. " +
      "During inspections, teams spend 2–3 days assembling sensor histories, approvals, and deviation logs — mostly manual work with high human-error risk. " +
      "It’s hard to prove who accessed what data, when, and under which role. That’s direct GDPR/GxP exposure and an owner-level risk (fines, findings, and reputational impact).",
    how:
      "MITE enforces retention and access at platform level: RBAC, immutable audit trail for key actions (view, edit, approve, export), and dataset-level retention policies (e.g., 5–10 years for regulated batches). " +
      "Each deviation/workflow closure automatically attaches a structured evidence pack: timeline, sensor data, regime validation, decisions, electronic approvals, timestamps, and access history. " +
      "GDPR requirements are addressed via controlled role scopes, export logging, and configurable data retention/deletion rules where legally applicable.",
    result:
      "Audit preparation time typically drops by 60–80% (from days to hours). " +
      "Evidence exports take <2 minutes and are reproducible. " +
      "Compliance risk shifts from manual heroics to governed system behavior — reducing dependency on individual experts and ad-hoc documentation.",
    icon: "shield",
    tags: ["GDP", "GxP", "GDPR", "retention", "audit", "RBAC"]
  },

  // 3) Manufacturing — Downtime
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Downtime: detect → classify → assign → verify (not just OEE charts)",
    kpiBadge: "↓ Repeat stops 20–35% · ↑ Throughput · ↓ Firefighting",
    ttvBadge: "Pilot in days",
    pain:
      "One KPI looks “fine” — total downtime is 10%. But inside that average: Line A runs at 3% deviation while Line B quietly bleeds at 35%. " +
      "You pay for it twice: in lost output and in chaos — shift-to-shift arguments, endless chats, and repeated stops that never get closed at the root cause. " +
      "Without an action loop, downtime becomes a recurring tax on margin, not a solvable operational problem.",
    how:
      "MITE ingests PLC states + operator reason capture + shift context and shows deviations per line, not just the average. " +
      "When Line B spikes, AI points to correlated signals (e.g., vibration 2.4× higher 15 minutes before each stop, motor current drift). " +
      "MITE triggers the governed workflow: assign owner → SLA timers → fix checklist → verification run with before/after readings. " +
      "Recurring patterns are tracked so ‘same stop again’ becomes measurable and preventable.",
    result:
      "Repeat stops typically drop by 20–35% within 4–6 weeks. " +
      "Engineering time shifts from arguing about symptoms to closing verified fixes. " +
      "Downtime becomes transparent per line and controllable as a management lever.",
    icon: "factory",
    tags: ["downtime", "OEE", "routing", "SLA", "verification"]
  },

  // 4) Manufacturing — Quality drift
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Quality drift: early detection + automatic containment workflow",
    kpiBadge: "↓ Scrap 15–25% · ↓ Rework · ↑ First-pass yield",
    ttvBadge: "Minutes, not shifts",
    pain:
      "Quality is reported ‘per shift’ and looks acceptable — but drift is local. One conveyor is at 3% deviation, another at 35%, and the average hides the real problem until scrap piles up. " +
      "By the time the report shows the issue, the cost is already sunk: scrap, rework, delayed shipments, and customer risk.",
    how:
      "MITE puts sensors + batch context + line identity into one model. Baselines are tracked per line/product, not as plant-wide averages. " +
      "When drift crosses a threshold, containment triggers automatically: hold/stop workflow, approvals, and an evidence pack. " +
      "AI surfaces which parameter changed first (e.g., temperature ramp lag + vibration rise) and which equipment state correlates with defect spikes.",
    result:
      "Scrap typically reduces by 15–25% and containment decisions happen in minutes, not after a full shift. " +
      "Investigations become structured and fast, and ‘silent drift’ stops being a recurring loss driver.",
    icon: "quality",
    tags: ["quality", "scrap", "rework", "batch", "approvals"]
  },

  // 5) Manufacturing — Predictive maintenance lite
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Condition monitoring → prioritized work orders with proof of closure",
    kpiBadge: "↓ Unplanned stops · ↓ MTTR · ↑ Availability",
    ttvBadge: "Pilot in days",
    pain:
      "Sensors exist, but maintenance stays reactive. Alerts get ignored because they don’t become owned tasks, and teams stop trusting ‘random warnings’. " +
      "That ends with emergency stops, rushed repairs, and repeat failures — the most expensive type of maintenance.",
    how:
      "MITE ties condition signals to asset criticality and workflows: rising vibration + temperature trend + alarm history → priority score → work order creation → SLA escalation → closure verification (before/after readings). " +
      "AI suggests likely failure modes (bearing / imbalance / looseness) based on symptom patterns, so the fix is targeted.",
    result:
      "Fewer emergency repairs, shorter MTTR, and measurable ROI because every alert becomes a closed loop — not noise. " +
      "You can prove what was fixed, when, and with what effect.",
    icon: "wrench",
    tags: ["predictive", "maintenance", "mttr", "sla", "work orders"]
  },

  // 6) Manufacturing — Energy spikes per line/shift
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Energy spikes: detect → explain → fix (per line, per shift)",
    kpiBadge: "↓ Energy cost 5–12% · ↓ Waste · ↑ Transparency",
    ttvBadge: "Minutes, not weeks",
    pain:
      "Energy cost rises, but teams see only monthly totals. A 12% spike appears, but nobody can link it to equipment states, shift behavior, or changeovers. " +
      "As an owner, you’re paying for hidden waste: heaters idling, compressed air leaks, bad shutdown discipline — all invisible in averaged reports.",
    how:
      "MITE merges meters + machine states + schedules. It shows where the spike happened (line/shift/changeover window) and which state caused it (idle with heaters on, extended warm-up, air consumption anomaly). " +
      "AI points to the sequence and triggers a workflow: adjust checklist/timers/ownership. Next time, deviation triggers action, not a post-mortem.",
    result:
      "Documented savings of 5–12% on targeted lines, with repeatable reduction playbooks. " +
      "Energy becomes an управляемая статья расходов — not a monthly surprise.",
    icon: "bolt",
    tags: ["energy", "anomaly", "cost", "shift", "savings"]
  },

  // 7) Manufacturing — Changeover governance
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Changeover governance: reduce variance between shifts",
    kpiBadge: "↓ Changeover time · ↓ Start-up defects · ↑ Consistency",
    ttvBadge: "Pilot in days",
    pain:
      "Changeovers depend on tribal knowledge. One shift does it in 22 minutes, another in 55. Steps get skipped, settings drift, and defects appear at start-up. " +
      "You lose output time and you pay again in scrap and customer risk.",
    how:
      "MITE runs a governed changeover workflow: checklist + sensor confirmations (valves, temps, speeds) + timers + escalation if stuck. " +
      "Approvals are enforced when needed. AI highlights which steps consistently cause delays and which confirmations are missing most often.",
    result:
      "Changeover variance shrinks, start-up defects decrease, and best practice becomes system behavior instead of ‘who is on shift’.",
    icon: "swap",
    tags: ["changeover", "checklist", "shift", "quality"]
  },

  // 8) Manufacturing — EHS incidents / near-miss
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "EHS near-miss → action → closure with evidence",
    kpiBadge: "↓ Incidents · ↑ Compliance · ↓ Audit stress",
    ttvBadge: "Evidence in 1 click",
    pain:
      "Near-misses are logged, but actions fade. Lessons don’t become enforced routines, and audits become a paperwork marathon. " +
      "For an owner, that’s a ‘silent liability’: one unresolved near-miss today becomes an incident tomorrow.",
    how:
      "MITE routes EHS events by severity: capture → task assignment → deadlines → evidence attachments (photo, sensor history) → closure verification. " +
      "AI clusters recurring patterns (same zone/time/tool) so prevention becomes targeted and measurable.",
    result:
      "Lower incident rate and audit-ready evidence without manual chasing. " +
      "Accountability is built into the system — not into reminders.",
    icon: "shield",
    tags: ["ehs", "incident", "tasks", "evidence", "audit"]
  },

  // 9) Manufacturing — Traceability / genealogy
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Traceability: batch genealogy + instant evidence packs",
    kpiBadge: "↓ Investigation time · ↓ Losses · ↑ Trust",
    ttvBadge: "Evidence in 1 click",
    pain:
      "When a complaint happens, traceability is a scramble: partial data, multiple systems, manual reconstruction across 2–5 teams. " +
      "While people search for facts, money leaks through: delayed shipments, over-containment, and reputational damage.",
    how:
      "MITE normalizes production, quality, and logistics events into one genealogy model. " +
      "When an issue appears, AI suggests a ‘suspect window’ based on correlated parameter drift and downstream defects. " +
      "Evidence export includes timeline, parameters, approvals, and actions — consistent and reproducible.",
    result:
      "Investigations become hours, not days. Losses shrink because containment is faster and evidence is clean.",
    icon: "trace",
    tags: ["traceability", "genealogy", "evidence", "batch"]
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

  // 14) Agriculture — Cold storage produce
  {
    industry: "agriculture",
    industryLabel: "Agriculture",
    title: "Cold storage for produce: regime control + compliance exports",
    kpiBadge: "↓ Spoilage · ↓ Manual reporting · ↑ Decision speed",
    ttvBadge: "Evidence in 1 click",
    pain:
      "Quality degrades silently. Different rooms, sensors, and teams make consistent control and reporting hard — issues are discovered when it’s already too late. " +
      "Every late discovery becomes a write-off, a dispute, or a forced discount.",
    how:
      "MITE models storage zones + product regimes. Deviations trigger containment workflow (quarantine/inspection) and generate exportable reports. " +
      "AI flags recurring patterns (same door/shift/room) so root causes get eliminated, not repeated.",
    result:
      "Less spoilage, faster quality decisions, and audit exports in minutes — without manual chasing.",
    icon: "snow",
    tags: ["storage", "quality", "compliance", "reports"]
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

/* ==========================================================================
   i18n + dynamic UI (Outcomes / Use-cases / Pricing / FAQ / Drawer / Forms)
   Clean full file (no лишнего), with fixes:
   - useCases.forEach AFTER const useCases
   - setupMiteForms runs once
   - setFocusCard null-guards + actually applies .is-focus
   - minor safety guards
========================================================================== */

const translations = window.translations || {}; // оставляем твоё имя для удобства

translations.en = translations.en || {};
translations.ru = translations.ru || {};
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
   Use-cases data (18 “meaty”)
------------------------- */
const useCases = [

  // 1) Pharma — Cold chain
  {
    industry: "pharma",
    industryLabel: "Pharma",
    title: "Cold chain: stop losing batches to ‘post-factum’ temperature control",
    kpiBadge: "↓ Spoilage 15–30% · ↓ Claims 20–40% · ↓ QA workload",
    ttvBadge: "Pilot in 2–4 weeks",
    pain:
      "On paper you have temperature loggers, truck telematics, and 3PL reports — in reality you have a blind spot in the most expensive moments: cross-dock, border delays, re-labeling, and pallet reassignment. " +
      "Sensor IDs drift away from shipment/batch IDs, and QA receives files only after delivery. " +
      "That means excursions are discovered when the money is already lost: a disputed lane, a blocked batch release, or a write-off risk. " +
      "Each incident turns into 3–5 systems, emails, and manual reconciliation, consuming 4–8 hours while the business carries the risk.",
    how:
      "MITE builds a GDP-aligned chain-of-custody per batch/shipment: sensor streams + route milestones + geofences (warehouse/cross-dock/border) + door events + compressor duty cycle + SKU-specific regimes. " +
      "When temperature drifts beyond the allowed window (e.g., 2–8°C) for a configurable duration, MITE triggers an escalation ladder (driver → dispatcher → QA) while the shipment is still in motion. " +
      "Mismatches between sensor ↔ pallet ↔ batch are flagged in real time, not during investigation. " +
      "AI correlates the deviation with the most likely drivers (door-open duration, dwell time, ambient spikes, compressor anomalies) to surface the probable root cause immediately.",
    result:
      "Excursions are handled during transport instead of becoming a release-time crisis. " +
      "On problematic lanes, spoilage risk typically drops by 15–30%. " +
      "Claim disputes reduce by 20–40% because evidence packs (timeline + regime + actions + approvals + access log) are exportable in <2 minutes. " +
      "Deviation investigation time shrinks from 4–8 hours to 20–40 minutes.",
    icon: "pharma",
    tags: ["cold chain", "GDP", "batch", "traceability", "transport", "QA"]
  },

  // 2) Pharma — Compliance / retention / GDPR / GxP
  {
    industry: "pharma",
    industryLabel: "Pharma",
    title: "Compliance layer: turn audits from a 3-day scramble into governed exports",
    kpiBadge: "↓ Audit prep 60–80% · ↓ Compliance risk · ↑ Traceability",
    ttvBadge: "Evidence in 1 click",
    pain:
      "Operational data exists, but compliance collapses under pressure. Retention differs by site, access rights are maintained informally, and audit trails are spread across SCADA, spreadsheets, and shared folders. " +
      "During inspections, teams spend 2–3 days assembling sensor histories, approvals, and deviation logs — mostly manual work with high human-error risk. " +
      "It’s hard to prove who accessed what data, when, and under which role. That’s direct GDPR/GxP exposure and an owner-level risk (fines, findings, and reputational impact).",
    how:
      "MITE enforces retention and access at platform level: RBAC, immutable audit trail for key actions (view, edit, approve, export), and dataset-level retention policies (e.g., 5–10 years for regulated batches). " +
      "Each deviation/workflow closure automatically attaches a structured evidence pack: timeline, sensor data, regime validation, decisions, electronic approvals, timestamps, and access history. " +
      "GDPR requirements are addressed via controlled role scopes, export logging, and configurable data retention/deletion rules where legally applicable.",
    result:
      "Audit preparation time typically drops by 60–80% (from days to hours). " +
      "Evidence exports take <2 minutes and are reproducible. " +
      "Compliance risk shifts from manual heroics to governed system behavior — reducing dependency on individual experts and ad-hoc documentation.",
    icon: "shield",
    tags: ["GDP", "GxP", "GDPR", "retention", "audit", "RBAC"]
  },

  // 3) Manufacturing — Downtime
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Downtime: detect → classify → assign → verify (not just OEE charts)",
    kpiBadge: "↓ Repeat stops 20–35% · ↑ Throughput · ↓ Firefighting",
    ttvBadge: "Pilot in days",
    pain:
      "One KPI looks “fine” — total downtime is 10%. But inside that average: Line A runs at 3% deviation while Line B quietly bleeds at 35%. " +
      "You pay for it twice: in lost output and in chaos — shift-to-shift arguments, endless chats, and repeated stops that never get closed at the root cause. " +
      "Without an action loop, downtime becomes a recurring tax on margin, not a solvable operational problem.",
    how:
      "MITE ingests PLC states + operator reason capture + shift context and shows deviations per line, not just the average. " +
      "When Line B spikes, AI points to correlated signals (e.g., vibration 2.4× higher 15 minutes before each stop, motor current drift). " +
      "MITE triggers the governed workflow: assign owner → SLA timers → fix checklist → verification run with before/after readings. " +
      "Recurring patterns are tracked so ‘same stop again’ becomes measurable and preventable.",
    result:
      "Repeat stops typically drop by 20–35% within 4–6 weeks. " +
      "Engineering time shifts from arguing about symptoms to closing verified fixes. " +
      "Downtime becomes transparent per line and controllable as a management lever.",
    icon: "factory",
    tags: ["downtime", "OEE", "routing", "SLA", "verification"]
  },

  // 4) Manufacturing — Quality drift
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Quality drift: early detection + automatic containment workflow",
    kpiBadge: "↓ Scrap 15–25% · ↓ Rework · ↑ First-pass yield",
    ttvBadge: "Minutes, not shifts",
    pain:
      "Quality is reported ‘per shift’ and looks acceptable — but drift is local. One conveyor is at 3% deviation, another at 35%, and the average hides the real problem until scrap piles up. " +
      "By the time the report shows the issue, the cost is already sunk: scrap, rework, delayed shipments, and customer risk.",
    how:
      "MITE puts sensors + batch context + line identity into one model. Baselines are tracked per line/product, not as plant-wide averages. " +
      "When drift crosses a threshold, containment triggers automatically: hold/stop workflow, approvals, and an evidence pack. " +
      "AI surfaces which parameter changed first (e.g., temperature ramp lag + vibration rise) and which equipment state correlates with defect spikes.",
    result:
      "Scrap typically reduces by 15–25% and containment decisions happen in minutes, not after a full shift. " +
      "Investigations become structured and fast, and ‘silent drift’ stops being a recurring loss driver.",
    icon: "quality",
    tags: ["quality", "scrap", "rework", "batch", "approvals"]
  },

  // 5) Manufacturing — Predictive maintenance lite
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Condition monitoring → prioritized work orders with proof of closure",
    kpiBadge: "↓ Unplanned stops · ↓ MTTR · ↑ Availability",
    ttvBadge: "Pilot in days",
    pain:
      "Sensors exist, but maintenance stays reactive. Alerts get ignored because they don’t become owned tasks, and teams stop trusting ‘random warnings’. " +
      "That ends with emergency stops, rushed repairs, and repeat failures — the most expensive type of maintenance.",
    how:
      "MITE ties condition signals to asset criticality and workflows: rising vibration + temperature trend + alarm history → priority score → work order creation → SLA escalation → closure verification (before/after readings). " +
      "AI suggests likely failure modes (bearing / imbalance / looseness) based on symptom patterns, so the fix is targeted.",
    result:
      "Fewer emergency repairs, shorter MTTR, and measurable ROI because every alert becomes a closed loop — not noise. " +
      "You can prove what was fixed, when, and with what effect.",
    icon: "wrench",
    tags: ["predictive", "maintenance", "mttr", "sla", "work orders"]
  },

  // 6) Manufacturing — Energy spikes per line/shift
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Energy spikes: detect → explain → fix (per line, per shift)",
    kpiBadge: "↓ Energy cost 5–12% · ↓ Waste · ↑ Transparency",
    ttvBadge: "Minutes, not weeks",
    pain:
      "Energy cost rises, but teams see only monthly totals. A 12% spike appears, but nobody can link it to equipment states, shift behavior, or changeovers. " +
      "As an owner, you’re paying for hidden waste: heaters idling, compressed air leaks, bad shutdown discipline — all invisible in averaged reports.",
    how:
      "MITE merges meters + machine states + schedules. It shows where the spike happened (line/shift/changeover window) and which state caused it (idle with heaters on, extended warm-up, air consumption anomaly). " +
      "AI points to the sequence and triggers a workflow: adjust checklist/timers/ownership. Next time, deviation triggers action, not a post-mortem.",
    result:
      "Documented savings of 5–12% on targeted lines, with repeatable reduction playbooks. " +
      "Energy becomes an управляемая статья расходов — not a monthly surprise.",
    icon: "bolt",
    tags: ["energy", "anomaly", "cost", "shift", "savings"]
  },

  // 7) Manufacturing — Changeover governance
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Changeover governance: reduce variance between shifts",
    kpiBadge: "↓ Changeover time · ↓ Start-up defects · ↑ Consistency",
    ttvBadge: "Pilot in days",
    pain:
      "Changeovers depend on tribal knowledge. One shift does it in 22 minutes, another in 55. Steps get skipped, settings drift, and defects appear at start-up. " +
      "You lose output time and you pay again in scrap and customer risk.",
    how:
      "MITE runs a governed changeover workflow: checklist + sensor confirmations (valves, temps, speeds) + timers + escalation if stuck. " +
      "Approvals are enforced when needed. AI highlights which steps consistently cause delays and which confirmations are missing most often.",
    result:
      "Changeover variance shrinks, start-up defects decrease, and best practice becomes system behavior instead of ‘who is on shift’.",
    icon: "swap",
    tags: ["changeover", "checklist", "shift", "quality"]
  },

  // 8) Manufacturing — EHS incidents / near-miss
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "EHS near-miss → action → closure with evidence",
    kpiBadge: "↓ Incidents · ↑ Compliance · ↓ Audit stress",
    ttvBadge: "Evidence in 1 click",
    pain:
      "Near-misses are logged, but actions fade. Lessons don’t become enforced routines, and audits become a paperwork marathon. " +
      "For an owner, that’s a ‘silent liability’: one unresolved near-miss today becomes an incident tomorrow.",
    how:
      "MITE routes EHS events by severity: capture → task assignment → deadlines → evidence attachments (photo, sensor history) → closure verification. " +
      "AI clusters recurring patterns (same zone/time/tool) so prevention becomes targeted and measurable.",
    result:
      "Lower incident rate and audit-ready evidence without manual chasing. " +
      "Accountability is built into the system — not into reminders.",
    icon: "shield",
    tags: ["ehs", "incident", "tasks", "evidence", "audit"]
  },

  // 9) Manufacturing — Traceability / genealogy
  {
    industry: "manufacturing",
    industryLabel: "Manufacturing",
    title: "Traceability: batch genealogy + instant evidence packs",
    kpiBadge: "↓ Investigation time · ↓ Losses · ↑ Trust",
    ttvBadge: "Evidence in 1 click",
    pain:
      "When a complaint happens, traceability is a scramble: partial data, multiple systems, manual reconstruction across 2–5 teams. " +
      "While people search for facts, money leaks through: delayed shipments, over-containment, and reputational damage.",
    how:
      "MITE normalizes production, quality, and logistics events into one genealogy model. " +
      "When an issue appears, AI suggests a ‘suspect window’ based on correlated parameter drift and downstream defects. " +
      "Evidence export includes timeline, parameters, approvals, and actions — consistent and reproducible.",
    result:
      "Investigations become hours, not days. Losses shrink because containment is faster and evidence is clean.",
    icon: "trace",
    tags: ["traceability", "genealogy", "evidence", "batch"]
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

  // 14) Agriculture — Cold storage produce
  {
    industry: "agriculture",
    industryLabel: "Agriculture",
    title: "Cold storage for produce: regime control + compliance exports",
    kpiBadge: "↓ Spoilage · ↓ Manual reporting · ↑ Decision speed",
    ttvBadge: "Evidence in 1 click",
    pain:
      "Quality degrades silently. Different rooms, sensors, and teams make consistent control and reporting hard — issues are discovered when it’s already too late. " +
      "Every late discovery becomes a write-off, a dispute, or a forced discount.",
    how:
      "MITE models storage zones + product regimes. Deviations trigger containment workflow (quarantine/inspection) and generate exportable reports. " +
      "AI flags recurring patterns (same door/shift/room) so root causes get eliminated, not repeated.",
    result:
      "Less spoilage, faster quality decisions, and audit exports in minutes — without manual chasing.",
    icon: "snow",
    tags: ["storage", "quality", "compliance", "reports"]
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

  function iconSvg(kind) {
    const s = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
    const wrap = (inner) => `<svg viewBox="0 0 24 24" ${s}>${inner}</svg>`;

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
    return useCases.filter((u) => {
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
              ${u.kpiBadge ? `<span class="uc-pill uc-pill--kpi">${highlightNumbers(u.kpiBadge)}</span>` : ""}
            </div>

            <div class="uc-meta">
              <span class="uc-badge uc-badge--industry">${u.industryLabel || u.industry}</span>
              <span class="uc-mini" aria-hidden="true">${iconSvg(u.icon)}</span>
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

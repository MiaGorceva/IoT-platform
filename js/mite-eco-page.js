/* js/mite-eco-page.js
   Content-driven page: all text lives in this script.
*/

const PAGE = {
  hero: {
    kicker: "MITE-ECO",
    title: 'One device family for any site — <span>powered by MITE.</span>',

    subtitle:
      "MITE-ECO is a flexible monitoring device family designed to adapt to real constraints: indoor/outdoor, " +
      "wet/dusty zones, regulated environments, and custom sensing needs. " +
      "With MITE platform, it becomes an end-to-end operational tool: monitoring → logic → actions → reporting → KPI.",

    meta: [
      "High-accuracy microclimate monitoring",
      "End-to-end process visibility with MITE workflows & alerts",
      "GDPR-ready approach (when required)",
    ],
   
    outcome:
      "<strong>Outcome focus:</strong> not just telemetry — a controlled operational loop with evidence, accountability and measurable KPI impact.",
        subtitle:
      "MITE-ECO monitors temperature, humidity (and optional pressure) in industrial and residential environments. " +
      "Choose enclosure and power options, deploy fast, and access data in a web cabinet for dashboards, history and reporting.",
    ctas: [
      { label: "Request a demo", href: "/index.html#contact", kind: "primary" },
      { label: "Downloads", href: "#downloads", kind: "ghost" },
    ],
    image: { src: "upload/miote.png", alt: "" },
  },

  {
  id: "how",
  eyebrow: "How it works with MITE",
  title: "From monitoring to execution",
  subtitle:
    "MITE turns device signals into a governed operational loop — the same logic scales across sites without fragile rework.",
  layout: "grid-3",
  cards: [
    { title: "Step 1 — Capture", text: "Sensors collect data reliably under real constraints.", meta: "Stable telemetry" },
    { title: "Step 2 — Decide", text: "Rules, thresholds, workflows, approvals and roles define what should happen.", meta: "Controlled logic" },
    { title: "Step 3 — Execute & prove", text: "Actions are triggered, evidence is stored, reports become automatic.", meta: "Audit-friendly history" },
  ]
},
    },

    {
      id: "about",
      eyebrow: "What it measures",
      title: "Microclimate data you can trust",
      subtitle:
        "Designed for monitoring temperature and relative humidity (optional pressure) in industrial and residential settings. " +
        "Suitable for storage, production zones, warehouses, and other environments where conditions must stay within limits.",
      layout: "grid-2",
      cards: [
        {
          title: "Typical applications",
          text: "Warehouses · Pharma storage · Manufacturing areas · Cold chain nodes · Utilities rooms · Compliance evidence.",
          meta: "Signal → logic → action → KPI",
        },
        {
          title: "Operational outcome",
          text: "Detect deviations early, reduce manual checks, keep stable history, and generate reports without manual reconciliation.",
          meta: "Less manual work · Faster audits",
        },
      ],
    },

    {
  id: "deployment",
  eyebrow: "Deployment",
  title: "Configured for your use case",
  subtitle:
    "Instead of forcing you into a fixed model, we configure MITE-ECO for your site: environment, power model, connectivity and sensing needs.",
  layout: "grid-2",
  cards: [
    {
      title: "Environment & durability",
      text: "Indoor / outdoor · wet zones · dusty production · cold chain. We match the build to the reality of the site.",
      meta: "Rugged options available"
    },
    {
      title: "Sensors & integration",
      text: "Add sensors if needed and map data into MITE so you get alerts, workflows, reports and KPI impact — not raw telemetry.",
      meta: "End-to-end value"
    }
  ]
}

    {
      id: "specs",
      eyebrow: "Specifications",
      title: "Key technical specs",
      subtitle: "Short list of the parameters teams ask first.",
      layout: "grid-3",
      cards: [
        { title: "Temperature", text: "Range: −40…+80 °C<br/>Accuracy: ±0.5 °C", meta: "Microclimate monitoring" },
        { title: "Humidity", text: "Range: 0…100% RH<br/>Accuracy: ±3%", meta: "Stability control" },
        { title: "Autonomy", text: "Battery: ≥ 1 year (15 min)<br/>Rechargeable: ≥ 3 months (15 min)", meta: "Depends on interval & conditions" },
        { title: "Protection", text: "IP20 (indoor use)", meta: "Follow deployment guidance" },
        { title: "Weight", text: "≤ 500 g", meta: "Compact footprint" },
        { title: "Service life", text: "≥ 5 years", meta: "Field-ready design" },
      ],
    },

    {
      id: "software",
      eyebrow: "Software",
      title: "Web cabinet: monitor, analyze, report",
      subtitle:
        "Access measurements via a web interface: device selection, dashboards and charts, history and reporting.",
      layout: "grid-2",
      cards: [
        {
          title: "Getting started",
          text:
            "If the device was stored below +5°C, keep it at room temperature for 3 hours before use. " +
            "For restart — power off/on.",
          meta: "Simple deployment checklist",
        },
        {
          title: "Data access",
          text: "Login/password access, device selection by ID, panels with indicators and charts, selectable time range.",
          meta: "Dashboards · History · Reports",
        },
      ],
    },

    {
      id: "downloads",
      eyebrow: "Downloads",
      title: "Manuals & documents",
      subtitle: "Replace these links with your real PDFs when ready.",
      layout: "grid-3",
      cards: [
        { title: "Operation manual (PDF)", text: "Variants, specs, handling, safety notes.", link: { href: "assets/docs/MITE-ECO-manual.pdf", label: "Download →" } },
        { title: "Verification method", text: "Provided when applicable for regulated workflows.", link: { href: "assets/docs/MITE-ECO-verification.pdf", label: "Download →" } },
        { title: "Datasheet", text: "Short technical summary for procurement and engineering teams.", link: { href: "assets/docs/MITE-ECO-datasheet.pdf", label: "Download →" } },
      ],
    },
  ],

  faq: {
    eyebrow: "FAQ",
    title: "Questions teams ask first",
    subtitle: "Short, practical answers.",
    items: [
      { q: "Is MITE-ECO a single model or a family?", a: "It’s a family of variants: enclosure options (/1, /1_s, /2, /3) and power options (//1, //2, //3)." },
      { q: "How long does the battery last?", a: "Typical autonomy: ≥ 1 year (battery) or ≥ 3 months (rechargeable) with a 15-minute interval. Interval and conditions affect autonomy." },
      { q: "Can we use it without MITE?", a: "It can provide telemetry, but MITE is where you get operational value: alerts, workflows, reporting, and auditable history." },
      { q: "Is it waterproof / outdoor?", a: "Base protection is IP20 (indoor). For harsh/outdoor use, choose the correct enclosure variant and deployment approach." },
    ],
  }
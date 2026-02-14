// js/mite-eco-page.js
// Content-driven page: all text lives in this script.

window.MITE_PAGES = window.MITE_PAGES || {};

window.MITE_PAGES["mite-eco"] = {
  hero: {
    kicker: "MITE-ECO",
    title: 'One device family for any site — <span>powered by MITE.</span>',

    // keep only ONE subtitle (choose the one you want)
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

    ctas: [
      { label: "Request a demo", href: "/index.html#contact", kind: "primary" },
      { label: "Downloads", href: "#downloads", kind: "ghost" },
    ],

    image: { src: "upload/miote.png", alt: "" },
  },

  sections: [
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
      ],
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

/* js/mite-eco-page.js
   Content-driven page: all text lives in this script.
*/

const PAGE = {
  hero: {
    kicker: "MITE-ECO",
    title: 'Real-time microclimate monitoring — <span>built for real sites.</span>',
    subtitle:
      "MITE-ECO monitors temperature, humidity (and optional pressure) in industrial and residential environments. " +
      "Choose enclosure and power options, deploy fast, and access data in a web cabinet for dashboards, history and reporting.",
    ctas: [
      { label: "Request a demo", href: "/index.html#contact", kind: "primary" },
      { label: "Downloads", href: "#downloads", kind: "ghost" },
    ],
    meta: [
      "Temperature: −40…+80 °C (±0.5 °C)",
      "Humidity: 0…100% RH (±3%)",
      "Indoor protection: IP20 · Service life: ≥ 5 years",
    ],
    outcome:
      "<strong>Outcome focus:</strong> stable conditions, early deviation detection, and audit-friendly history — without manual logs.",
    image: { src: "upload/miote.png", alt: "" },
  },

  sections: [
    {
      id: "highlights",
      eyebrow: "Highlights",
      title: "Why teams choose MITE-ECO",
      subtitle:
        "Practical advantages for field deployments: flexible power and enclosures, real-time visibility, " +
        "and the ability to scale without rebuilding operational logic.",
      layout: "grid-3",
      cards: [
        { title: "Customizable enclosures", text: "Plastic or aluminum housings, including dust-proof options — matched to the site.", meta: "Multiple enclosure variants" },
        { title: "Flexible power options", text: "Battery, built-in rechargeable, or mains adapter depending on maintenance and uptime model.", meta: "Battery / Rechargeable / Mains" },
        { title: "Two-way control", text: "Adjust measurement/transmission intervals remotely to balance detail vs battery life.", meta: "Remote configuration" },
        { title: "Wide measurement range", text: "Temperature monitoring designed for harsh conditions: −40…+80 °C.", meta: "Industrial-ready" },
        { title: "Web cabinet", text: "Dashboards, history, charts, and exportable reporting — from a single interface.", meta: "Monitoring & reporting" },
        { title: "Expandable sensors", text: "Optional pressure measurement and extensions for process-specific needs.", meta: "Temperature / Humidity / Pressure*" },
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
      id: "variants",
      eyebrow: "Variants",
      title: "Pick enclosure & power",
      subtitle: "A modular device family — choose the configuration that fits the environment and maintenance model.",
      layout: "grid-2",
      cards: [
        {
          title: "Enclosure",
          text:
            "<strong>MITE-ECO/1</strong> — plastic enclosure<br/>" +
            "<strong>MITE-ECO/1_s</strong> — plastic + screen<br/>" +
            "<strong>MITE-ECO/2</strong> — aluminum enclosure<br/>" +
            "<strong>MITE-ECO/3</strong> — aluminum dust-proof enclosure",
          meta: "Choose by site conditions",
        },
        {
          title: "Power",
          text:
            "<strong>//1</strong> — battery (type D)<br/>" +
            "<strong>//2</strong> — built-in rechargeable<br/>" +
            "<strong>//3</strong> — mains adapter<br/><br/>" +
            "<em>Note:</em> for <strong>MITE-ECO/3</strong> — mains power only.",
          meta: "Battery life depends on interval",
        },
      ],
    },

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
  },
};

// --- RENDERING HELPERS ---
const escapeAttr = (s) => String(s).replaceAll('"', "&quot;");

const btnClass = (kind) =>
  kind === "primary" ? "btn btn-primary" :
  kind === "ghost" ? "btn btn-ghost" :
  "btn btn-outline";

function renderHero(h) {
  const ctas = (h.ctas || [])
    .map((c) => `<a href="${escapeAttr(c.href)}" class="${btnClass(c.kind)}">${c.label}</a>`)
    .join("");

  const meta = (h.meta || [])
    .map((t) => `<div class="hero-meta-item"><span aria-hidden="true">●</span><span>${t}</span></div>`)
    .join("");

  return `
  <section class="hero container">
    <div class="hero-grid">
      <div>
        <div class="hero-kicker">
          <span class="hero-kicker-dot" aria-hidden="true"></span>
          <span>${h.kicker}</span>
        </div>

        <h1 class="hero-title">${h.title}</h1>

        <p class="hero-subtitle">${h.subtitle}</p>

        <div class="hero-cta-row">${ctas}</div>

        <div class="hero-meta">${meta}</div>

        <div class="hero-card">
          <span>${h.outcome}</span>
        </div>
      </div>

      <div class="hero-visual" aria-hidden="true">
        <div class="orb-spider">
          <img src="${escapeAttr(h.image?.src || "")}" alt="${escapeAttr(h.image?.alt || "")}" class="orb-spider-img" />
        </div>
      </div>
    </div>
  </section>`;
}

function renderSection(s) {
  const gridClass = s.layout ? `grid ${s.layout}` : "grid grid-3";

  const cards = (s.cards || []).map((c) => {
    const link = c.link
      ? `<div class="card-meta"><a href="${escapeAttr(c.link.href)}" aria-label="${escapeAttr(c.title)}">${c.link.label}</a></div>`
      : (c.meta ? `<div class="card-meta">${c.meta}</div>` : "");

    return `
    <article class="card"><div class="card-inner">
      <h3 class="card-title">${c.title}</h3>
      <p class="card-text">${c.text}</p>
      ${link}
    </div></article>`;
  }).join("");

  return `
  <section class="section container" id="${escapeAttr(s.id)}">
    <div class="section-header">
      <div class="eyebrow">${s.eyebrow}</div>
      <h2 class="section-title">${s.title}</h2>
      <p class="section-subtitle">${s.subtitle}</p>
    </div>

    <div class="${gridClass}">
      ${cards}
    </div>
  </section>`;
}

function renderFAQ(f) {
  const items = (f.items || []).map((it) => `
    <div class="faq-item">
      <div class="faq-q">${it.q}</div>
      <div class="faq-a">${it.a}</div>
    </div>
  `).join("");

  return `
  <section class="section container" id="faq">
    <div class="section-header">
      <div class="eyebrow">${f.eyebrow}</div>
      <h2 class="section-title">${f.title}</h2>
      <p class="section-subtitle">${f.subtitle}</p>
    </div>

    <div class="faq-list">${items}</div>
  </section>`;
}

function renderPage(data) {
  return [
    renderHero(data.hero),
    ...(data.sections || []).map(renderSection),
    renderFAQ(data.faq),
  ].join("\n");
}

// --- BOOT ---
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");
  if (!root) return;
  root.innerHTML = renderPage(PAGE);

  // year in footer if you use it
  const y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();
});

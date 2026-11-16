/* MITE cookie consent — Google Consent Mode v2.
   Loads BEFORE the inline gtag config on each page so analytics_storage
   defaults to "denied" until the visitor opts in. Self-contained: injects
   its own styles and banner, remembers the choice in localStorage. */
(function () {
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  // 1. Default: deny storage until the visitor decides.
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted',
    wait_for_update: 500
  });

  // 2. Re-apply a previously granted choice.
  var stored = null;
  try { stored = localStorage.getItem('mite_consent'); } catch (e) {}
  if (stored === 'granted') {
    gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted'
    });
  }

  // 3. Show the banner only when there is no stored decision.
  if (stored === 'granted' || stored === 'denied') return;

  var T = {
    en: { text: 'We use analytics cookies to understand how the site is used. You can accept or decline.', accept: 'Accept', decline: 'Decline', more: 'Privacy policy', label: 'Cookie consent' },
    ru: { text: 'Мы используем аналитические cookie, чтобы понимать, как используется сайт. Вы можете принять или отклонить.', accept: 'Принять', decline: 'Отклонить', more: 'Политика конфиденциальности', label: 'Согласие на cookie' },
    uk: { text: 'Ми використовуємо аналітичні cookie, щоб розуміти, як використовується сайт. Ви можете прийняти або відхилити.', accept: 'Прийняти', decline: 'Відхилити', more: 'Політика конфіденційності', label: 'Згода на cookie' },
    be: { text: 'Мы выкарыстоўваем аналітычныя cookie, каб разумець, як выкарыстоўваецца сайт. Вы можаце прыняць або адхіліць.', accept: 'Прыняць', decline: 'Адхіліць', more: 'Палітыка канфідэнцыяльнасці', label: 'Згода на cookie' }
  };

  function build() {
    var lang = (document.documentElement.lang || 'en').slice(0, 2).toLowerCase();
    var t = T[lang] || T.en;

    var css = document.createElement('style');
    css.textContent =
      '.mite-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:640px;margin:0 auto;' +
      'background:#0e1726;color:#e8eef7;border:1px solid rgba(255,255,255,.14);border-radius:14px;' +
      'box-shadow:0 10px 40px rgba(0,0,0,.35);padding:16px 18px;font:14px/1.5 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;' +
      'display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between}' +
      '.mite-consent p{margin:0;flex:1 1 280px}' +
      '.mite-consent a{color:#7fd1b9;text-decoration:underline}' +
      '.mite-consent .mite-consent__btns{display:flex;gap:8px;flex:0 0 auto}' +
      '.mite-consent button{cursor:pointer;border-radius:10px;padding:9px 16px;font-weight:600;font-size:14px;border:1px solid transparent}' +
      '.mite-consent .mite-accept{background:#19c37d;color:#04110b}' +
      '.mite-consent .mite-decline{background:transparent;color:#e8eef7;border-color:rgba(255,255,255,.28)}' +
      '.mite-consent button:focus-visible{outline:2px solid #7fd1b9;outline-offset:2px}';
    document.head.appendChild(css);

    var box = document.createElement('div');
    box.className = 'mite-consent';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-live', 'polite');
    box.setAttribute('aria-label', t.label);

    var p = document.createElement('p');
    p.textContent = t.text + ' ';
    var a = document.createElement('a');
    a.href = 'privacy-policy.html';
    a.textContent = t.more;
    p.appendChild(a);

    var btns = document.createElement('div');
    btns.className = 'mite-consent__btns';
    var decline = document.createElement('button');
    decline.className = 'mite-decline';
    decline.type = 'button';
    decline.textContent = t.decline;
    var accept = document.createElement('button');
    accept.className = 'mite-accept';
    accept.type = 'button';
    accept.textContent = t.accept;

    function close() { if (box.parentNode) box.parentNode.removeChild(box); }

    accept.addEventListener('click', function () {
      try { localStorage.setItem('mite_consent', 'granted'); } catch (e) {}
      gtag('consent', 'update', {
        ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted',
        analytics_storage: 'granted', functionality_storage: 'granted', personalization_storage: 'granted'
      });
      close();
    });
    decline.addEventListener('click', function () {
      try { localStorage.setItem('mite_consent', 'denied'); } catch (e) {}
      close();
    });

    btns.appendChild(decline);
    btns.appendChild(accept);
    box.appendChild(p);
    box.appendChild(btns);
    document.body.appendChild(box);
    accept.focus();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();

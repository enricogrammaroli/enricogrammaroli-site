// Simple bilingual toggle (EN default / IT secondary) for enricogrammaroli.com
// Every translatable element carries data-it="..." and data-en="..." (HTML allowed).
// No browser storage is used — language resets to the page default on reload,
// which keeps things simple and avoids any storage-permission issues.

(function () {
  function setLang(lang) {
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-it]').forEach(function (el) {
      var text = el.getAttribute('data-' + lang);
      if (text !== null) {
        el.innerHTML = text;
      }
    });

    document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    document.querySelectorAll('[data-show-lang]').forEach(function (el) {
      el.style.display = (el.getAttribute('data-show-lang') === lang) ? '' : 'none';
    });
  }

  window.setSiteLang = setLang;

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
      });
    });
    setLang('en');
  });
})();

document.addEventListener('DOMContentLoaded', () => {
  if (window.RAIDEE_I18N) window.RAIDEE_I18N.init();

  const nav = document.getElementById('nav-main');
  const navToggle = document.getElementById('nav-toggle');
  const closeNav = () => {
    nav?.classList.remove('nav-is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.removeProperty('overflow');
  };
  const openNav = () => {
    nav?.classList.add('nav-is-open');
    navToggle?.setAttribute('aria-expanded', 'true');
    if (window.matchMedia('(max-width: 767px)').matches) {
      document.body.style.overflow = 'hidden';
    }
  };

  navToggle?.addEventListener('click', () => {
    if (nav?.classList.contains('nav-is-open')) closeNav();
    else openNav();
  });

  nav?.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', () => closeNav());
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 768px)').matches) closeNav();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  const c = window.RAIDEE_SITE_CONFIG || {};
  const apk = document.getElementById('apk-link');
  const apkHeader = document.getElementById('apk-link-header');
  if (c.apkUrl) {
    if (apk) apk.href = c.apkUrl;
    if (apkHeader) apkHeader.href = c.apkUrl;
  }

  const line = document.getElementById('line-link');
  if (line && c.lineOaUrl) line.href = c.lineOaUrl;

  const play = document.getElementById('play-link');
  if (play) {
    if (c.playStoreUrl) {
      play.href = c.playStoreUrl;
      play.hidden = false;
    }
  }
});

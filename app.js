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

  function setApkFromConfig(url) {
    if (!url) return;
    document.querySelectorAll('a.js-apk-site').forEach((el) => {
      el.href = url;
      el.removeAttribute('download');
      try {
        const resolved = new URL(url, window.location.href);
        if (resolved.origin === window.location.origin) {
          el.setAttribute('download', 'raidee.apk');
        }
      } catch (_) {
        /* ignore invalid URL */
      }
    });
  }
  setApkFromConfig(c.apkUrl);

  document.querySelectorAll('.phone-mock img').forEach((img) => {
    img.addEventListener('error', () => {
      img.remove();
    });
  });

  document.querySelectorAll('a[data-raidee-line]').forEach((a) => {
    if (c.lineOaUrl) a.href = c.lineOaUrl;
  });

  const play = document.getElementById('play-link');
  if (play) {
    if (c.playStoreUrl) {
      play.href = c.playStoreUrl;
      play.hidden = false;
    }
  }

  const heroRoot = document.querySelector('.hero-carousel');
  const heroTrack = document.getElementById('hero-carousel-track');
  const heroSlides = heroRoot?.querySelectorAll('.hero-slide');
  const heroPrev = document.getElementById('hero-carousel-prev');
  const heroNext = document.getElementById('hero-carousel-next');
  const heroDots = heroRoot?.querySelectorAll('.hero-carousel-dot');

  if (heroRoot && heroTrack && heroSlides?.length) {
    const n = heroSlides.length;
    let idx = 0;
    let autoTimer = null;
    const intervalMs = 10000;
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    function setSlide(i) {
      idx = ((i % n) + n) % n;
      heroTrack.style.transform = `translateX(-${idx * 100}%)`;
      heroSlides.forEach((el, j) => {
        el.setAttribute('aria-hidden', j === idx ? 'false' : 'true');
      });
      heroDots?.forEach((d, j) => {
        const on = j === idx;
        d.classList.toggle('is-active', on);
        d.setAttribute('aria-selected', on ? 'true' : 'false');
      });
    }

    function startAuto() {
      if (reduceMotion || n < 2) return;
      clearInterval(autoTimer);
      autoTimer = window.setInterval(() => {
        setSlide(idx + 1);
      }, intervalMs);
    }

    function stopAuto() {
      clearInterval(autoTimer);
      autoTimer = null;
    }

    heroPrev?.addEventListener('click', () => {
      setSlide(idx - 1);
      startAuto();
    });
    heroNext?.addEventListener('click', () => {
      setSlide(idx + 1);
      startAuto();
    });

    heroDots?.forEach((dot) => {
      dot.addEventListener('click', () => {
        const t = Number(dot.getAttribute('data-hero-slide'), 10);
        if (!Number.isNaN(t)) {
          setSlide(t);
          startAuto();
        }
      });
    });

    heroRoot.addEventListener('mouseenter', stopAuto);
    heroRoot.addEventListener('mouseleave', startAuto);
    heroRoot.addEventListener('focusin', stopAuto);
    heroRoot.addEventListener('focusout', (e) => {
      if (!heroRoot.contains(e.relatedTarget)) startAuto();
    });

    setSlide(0);
    startAuto();
  }
});

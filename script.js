document.addEventListener('DOMContentLoaded', () => {
  // ─── 1. Header Scroll Effect ────────────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 8) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ─── 2. Mobile Menu Drawer Toggle ─────────────────────────────────────────
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileToggleBtn && mobileMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      const isExpanded = mobileToggleBtn.classList.toggle('active');
      mobileMenu.classList.toggle('hidden', !isExpanded);
    });

    // Close menu when clicking nav item
    const mobileNavItems = mobileMenu.querySelectorAll('.mobile-nav-item');
    mobileNavItems.forEach((item) => {
      item.addEventListener('click', () => {
        mobileToggleBtn.classList.remove('active');
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // ─── 3. Scroll Fade-in IntersectionObserver ─────────────────────────────────
  const fadeInElements = document.querySelectorAll('.fade-in');

  const checkVisible = () => {
    fadeInElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        el.classList.add('visible');
      }
    });
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    fadeInElements.forEach((el) => observer.observe(el));
  }

  checkVisible();
  window.addEventListener('scroll', checkVisible, { passive: true });

  // ─── 4. Demo Video Modal Player ─────────────────────────────────────────────
  const videoTrigger = document.getElementById('video-trigger');
  const videoModal = document.getElementById('video-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const videoIframe = document.getElementById('video-iframe');

  const videoUrl = 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1';

  if (videoTrigger && videoModal && closeModalBtn && videoIframe) {
    videoTrigger.addEventListener('click', () => {
      videoIframe.src = videoUrl;
      videoModal.classList.remove('hidden');
    });

    const closeModal = () => {
      videoIframe.src = '';
      videoModal.classList.add('hidden');
    };

    closeModalBtn.addEventListener('click', closeModal);

    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !videoModal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }
});

import React, { useEffect, useRef, useState } from 'react';

// ─── Scroll animation hook ────────────────────────────────────────────────────
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);

    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('visible');
    }

    return () => obs.disconnect();
  }, []);
  return ref;
}

const NAV_LINKS = [
  { name: 'What is Think X', href: '#why' },
  { name: 'Behind the X', href: '#philosophy' },
  { name: 'Think X Principles', href: '#philosophy' },
  { name: 'Inside Think X', href: '#product' },
  { name: 'How to use', href: '#how-it-works' },
];

const RULE = () => <div className="rule-divider" />;

// Yellow Highlighter Section Tag Component
const SectionTag = ({ text, style = {} }) => (
  <span className="section-tag-yellow" style={style}>
    {text}
  </span>
);

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#" className="nav-brand-logo">
          Think X
        </a>

        {/* Clean nav container with lighter grey links turning black on hover */}
        <nav className="nav-menu hidden md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="nav-link-item">
              {link.name}
            </a>
          ))}
        </nav>

        <button className="mobile-menu-toggle md:hidden" onClick={() => setOpen((v) => !v)}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '22px' }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  height: '2px',
                  background: 'var(--color-ink)',
                  transition: 'transform 0.2s',
                  transform:
                    open && i === 0
                      ? 'rotate(45deg) translate(4.5px,4.5px)'
                      : open && i === 2
                      ? 'rotate(-45deg) translate(4.5px,-4.5px)'
                      : open && i === 1
                      ? 'scaleX(0)'
                      : 'none',
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {open && (
        <div className="mobile-menu-drawer">
          {NAV_LINKS.map((l) => (
            <div key={l.name}>
              <a href={l.href} onClick={() => setOpen(false)} className="mobile-menu-link">
                {l.name}
              </a>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  const textRef = useFadeIn();
  return (
    <section className="hero-section hero-grid">
      <div ref={textRef} className="hero-text-col fade-in">
        <div>
          <SectionTag text="A new way to think." style={{ marginBottom: '48px' }} />
        </div>
        <h1 className="hero-title">
          Don't just record.
          <br />
          <span>Understand.</span>
        </h1>
        <p className="hero-desc">
          Think X is a notebook system designed to help you capture, organize, and rediscover your thoughts—turning notes into meaningful understanding.
        </p>
        <div className="hero-buttons">
          <a href="#why" className="btn-primary">
            Discover Think X
          </a>
          <a href="#product" className="btn-link-underline">
            View the product ↓
          </a>
        </div>
      </div>

      <div className="hero-img-col">
        <img
          src="https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?w=960&h=1100&fit=crop&auto=format"
          alt="Think X notebook open on a clean desk"
          className="hero-img"
        />
      </div>
    </section>
  );
}

function WhyThinkX() {
  const headRef = useFadeIn();
  const gridRef = useFadeIn();

  const REASONS = [
    { label: 'Capture', desc: 'Every thought has a place. Structured pages guide you from raw ideas to refined insights.' },
    { label: 'Index', desc: 'Keywords surface what matters. Never lose a thread buried in pages again.' },
    { label: 'Connect', desc: "A dedicated space links ideas across entries, revealing patterns you'd never spot otherwise." },
    { label: 'Archive', desc: 'Revisit and rediscover. The archive turns your notebook into a living knowledge base.' },
  ];

  return (
    <section id="why" className="section-wrapper">
      <div ref={headRef} className="fade-in" style={{ marginBottom: '72px' }}>
        <div>
          <SectionTag text="Why Think X?" style={{ marginBottom: '16px' }} />
        </div>
        <h2 className="section-heading-lg">
          We take countless notes.
          <br />
          <em style={{ fontStyle: 'italic', fontWeight: 700 }}>most are never read again.</em>
        </h2>
        <p className="section-subtext">
          Think X is designed for the gap between capturing and understanding — a system that brings you back to what you wrote, and makes it mean something.
        </p>
      </div>

      <RULE />

      <div ref={gridRef} className="why-cards-grid fade-in">
        {REASONS.map((r, i) => (
          <div key={r.label} className={`why-card fade-in fade-in-delay-${i + 1}`}>
            <div className="why-badge-num">0{i + 1}</div>
            <h3 className="why-card-title">{r.label}</h3>
            <p className="why-card-desc">{r.desc}</p>
          </div>
        ))}
      </div>

      <div className="why-gallery-grid gallery-grid">
        {[
          'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=300&fit=crop',
        ].map((src, i) => (
          <div key={i} className="why-gallery-item">
            <img src={src} alt="Think X product visual" className="why-gallery-img" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Philosophy() {
  const ref = useFadeIn();
  const PILLARS = [
    { title: 'Clarity', body: 'Every page is intentional. No wasted space — only structured space.' },
    { title: 'Connection', body: 'Ideas live in relation to each other. Think X makes those links visible.' },
    { title: 'Return', body: 'A notebook you return to is more valuable than one you fill and forget.' },
    { title: 'Growth', body: 'Understanding compounds. Each entry builds on the last.' },
  ];

  return (
    <section id="philosophy" className="philosophy-section">
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div ref={ref} className="fade-in" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div>
            <SectionTag text="Philosophy" style={{ marginBottom: '16px' }} />
          </div>
          <h2 className="section-heading-lg" style={{ margin: '0 auto 24px' }}>
            Think X designs the <em>way you meet your thoughts again</em> — not just the way you record them.
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-secondary)', fontStyle: 'italic', fontWeight: 600 }}>
            Think X는 기록의 방식이 아닌, 생각과 다시 만나는 방식을 디자인합니다.
          </p>
        </div>

        <div className="philosophy-grid">
          {PILLARS.map((p, i) => (
            <div key={p.title} className={`philosophy-card fade-in fade-in-delay-${i + 1}`}>
              <div className="philosophy-circle-badge">{p.title[0]}</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-ink)', marginBottom: '12px' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-ink-secondary)', lineHeight: 1.7, fontWeight: 500, margin: 0 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const ref = useFadeIn();
  const STEPS = [
    {
      num: '01',
      title: 'Capture',
      body: 'Begin with the Capture Page — a structured space for thoughts, sketches, questions, and observations. No format enforced, just intention.',
      img: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&h=700&fit=crop',
    },
    {
      num: '02',
      title: 'Keyword & Index',
      body: 'Surface what matters by tagging each entry with keywords. The index at the front becomes a map of your own mind.',
      img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=700&fit=crop',
    },
    {
      num: '03',
      title: 'Connect & Archive',
      body: 'Use the Connection Space to draw links across entries. Rediscover ideas in the Archive and watch understanding deepen over time.',
      img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=700&fit=crop',
    },
  ];

  return (
    <section id="how-it-works" className="section-wrapper">
      <div ref={ref} className="fade-in" style={{ marginBottom: '72px' }}>
        <div>
          <SectionTag text="How it Works" style={{ marginBottom: '16px' }} />
        </div>
        <h2 className="section-heading-lg">
          Three stages.
          <br />
          <em>One continuous loop.</em>
        </h2>
      </div>

      <div className="steps-grid">
        {STEPS.map((s, i) => (
          <div key={s.num} className={`step-card fade-in fade-in-delay-${i + 1}`}>
            <div className="step-img-box">
              <img src={s.img} alt={s.title} className="step-img" />
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span className="step-badge">{s.num}</span>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1.35rem', color: 'var(--color-ink)', marginBottom: '10px' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-secondary)', lineHeight: 1.75, fontWeight: 500, margin: 0 }}>
                  {s.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductFeatures() {
  const ref = useFadeIn();
  const FEATURES = [
    { label: 'Capture Page', desc: 'Guided structure for raw, unfiltered thinking' },
    { label: 'Keyword Index', desc: 'Front-of-book index that maps every idea' },
    { label: 'Connection Space', desc: 'Dedicated spreads for linking entries across time' },
    { label: 'Archive Section', desc: 'A permanent home for insights worth keeping' },
    { label: 'Thread Format', desc: 'Thread-based pages encourage continued thinking' },
    { label: '90gsm Paper', desc: 'Fountain pen-friendly, ghosting-free sheets' },
  ];

  return (
    <section className="features-split-wrapper">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 120px)' }}>
        <div ref={ref} className="fade-in" style={{ marginBottom: '72px' }}>
          <div>
            <SectionTag text="Product Features" style={{ marginBottom: '16px' }} />
          </div>
          <h2 className="section-heading-lg">
            Built around
            <br />
            <em>how thought actually works.</em>
          </h2>
        </div>
      </div>

      <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 120px)' }}>
        <div className="feature-split-grid feature-split">
          <div style={{ background: 'var(--color-surface)', overflow: 'hidden' }}>
            <img
              src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?w=800&h=720&fit=crop&auto=format"
              alt="Think X open notebook showing inside pages"
              className="feature-img"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '480px' }}
            />
          </div>
          <div style={{ background: '#ffffff', padding: 0 }}>
            {FEATURES.map((f) => (
              <div key={f.label} className="feature-item-row">
                <span className="feature-yellow-dot" />
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: '1.15rem', color: 'var(--color-ink)', marginBottom: '6px' }}>
                    {f.label}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-ink-secondary)', fontWeight: 500, margin: 0 }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductDetail() {
  const ref = useFadeIn();
  return (
    <section id="product" className="section-wrapper">
      <div ref={ref} className="fade-in" style={{ marginBottom: '64px' }}>
        <div>
          <SectionTag text="Product Detail" style={{ marginBottom: '16px' }} />
        </div>
        <h2 className="section-heading-lg">Inside the pages.</h2>
      </div>

      <div className="detail-flex-grid detail-grid">
        <div style={{ background: 'var(--color-surface)', overflow: 'hidden', borderRadius: '2px' }}>
          <img
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&h=800&fit=crop&auto=format"
            alt="Think X inner pages close-up"
            style={{ width: '100%', aspectRatio: '9/8', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div>
          <h3 style={{ fontWeight: 700, fontSize: '1.85rem', color: 'var(--color-ink)', marginBottom: '8px' }}>
            Inside Pages
          </h3>
          <p style={{ fontStyle: 'italic', fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-ink-secondary)', marginBottom: '40px' }}>
            내지 확대컷
          </p>
          <RULE />
          {['Capture Page', 'Keyword Index', 'Connection Space', 'Archive Section'].map((item, i) => (
            <div key={item} className="detail-row-item">
              <span className="step-badge">0{i + 1}</span>
              <span style={{ fontWeight: 600, fontSize: '1.2rem', color: 'var(--color-ink)' }}>{item}</span>
              <span style={{ marginLeft: 'auto', color: 'var(--color-ink-secondary)', fontSize: '1.3rem', fontWeight: 700 }}>→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const ref = useFadeIn();
  const CASES = [
    {
      tag: 'Students',
      title: 'Lectures that stick',
      body: 'Transform class notes from passive transcription into active understanding with structured capture and review cycles.',
      img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&h=400&fit=crop',
    },
    {
      tag: 'Creatives',
      title: 'Ideas that compound',
      body: "Sketch freely, then surface patterns. The connection space reveals themes you didn't know you were exploring.",
      img: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?w=600&h=400&fit=crop',
    },
    {
      tag: 'Professionals',
      title: 'Meetings with memory',
      body: 'Capture decisions, action items, and context. The archive becomes your institutional knowledge — searchable by mind.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section className="philosophy-section">
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div ref={ref} className="fade-in" style={{ marginBottom: '72px' }}>
          <div>
            <SectionTag text="Use Cases" style={{ marginBottom: '16px' }} />
          </div>
          <h2 className="section-heading-lg">
            One system.
            <br />
            <em>Many kinds of thinking.</em>
          </h2>
        </div>

        <div className="cases-grid">
          {CASES.map((c, i) => (
            <div key={c.tag} className={`case-card-box fade-in fade-in-delay-${i + 1}`}>
              <div className="case-img-box">
                <img src={c.img} alt={c.title} className="case-img" />
              </div>
              <div style={{ padding: '32px' }}>
                <span className="section-tag-yellow" style={{ marginBottom: '12px' }}>
                  {c.tag}
                </span>
                <h3 style={{ fontWeight: 700, fontSize: '1.4rem', color: 'var(--color-ink)', margin: '12px 0 14px' }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-secondary)', lineHeight: 1.75, fontWeight: 500, margin: 0 }}>
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoVideo() {
  const ref = useFadeIn();
  const [playing, setPlaying] = useState(false);

  return (
    <section className="demo-video-wrapper">
      <div ref={ref} className="fade-in" style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div>
          <SectionTag text="Demo Video" style={{ marginBottom: '16px' }} />
        </div>
        <h2 className="section-heading-lg" style={{ margin: '0 auto' }}>
          See Think X <em>in use.</em>
        </h2>
      </div>

      <div className="video-frame-container">
        {playing ? (
          <iframe
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Think X Demo Video"
            style={{ width: '100%', height: '100%', border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div style={{ position: 'relative', width: '100%', height: '100%', cursor: 'pointer' }} onClick={() => setPlaying(true)}>
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&h=675&fit=crop&auto=format"
              alt="Think X notebook on a reading desk"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0,0,0,0.22)',
              }}
            >
              <div className="video-play-btn-circle">
                <div className="video-play-triangle" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  const FOOTER_NAV = [
    { label: 'What is Think X', href: '#why' },
    { label: 'Behind the X', href: '#philosophy' },
    { label: 'Think X Principles', href: '#philosophy' },
    { label: 'Inside Think X', href: '#product' },
    { label: 'How to use', href: '#how-it-works' },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top-row">
          <div>
            <p style={{ fontWeight: 700, fontSize: '1.4rem', letterSpacing: '0.01em', color: '#fff', margin: '0 0 4px' }}>Think X</p>
            <p style={{ fontWeight: 500, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
              Designed for thoughtful note-taking.
            </p>
          </div>
          <nav className="footer-nav-list">
            {FOOTER_NAV.map((l) => (
              <a key={l.label} href={l.href} className="footer-nav-link">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy-text">© 2026 Think X.</p>
          <p className="footer-copy-text">Graduation Project by Suyeon Lee.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const checkVisible = () => {
      document.querySelectorAll('.fade-in').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          el.classList.add('visible');
        }
      });
    };

    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.05 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => obs.observe(el));
    checkVisible();

    window.addEventListener('scroll', checkVisible, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', checkVisible);
    };
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyThinkX />
        <Philosophy />
        <HowItWorks />
        <ProductFeatures />
        <ProductDetail />
        <UseCases />
        <DemoVideo />
      </main>
      <Footer />
    </>
  );
}

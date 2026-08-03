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

const RULE = () => (
  <div style={{ height: '1.5px', background: 'var(--color-rule)', width: '100%' }} />
);

// Vertically padded, sleek Highlighter-style Yellow Tag Component
const SectionTag = ({ text, style = {} }) => (
  <span
    style={{
      display: 'inline-block',
      background: 'var(--color-brand-yellow)',
      color: 'var(--color-ink)',
      padding: '5px 10px',
      borderRadius: '2px',
      fontFamily: '"A2Z", Arial, sans-serif',
      fontWeight: 700,
      fontSize: '0.8rem',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      marginBottom: '16px',
      lineHeight: '1.3',
      ...style,
    }}
  >
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
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.96)' : '#ffffff',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--color-rule)' : 'transparent'}`,
        transition: 'border-color 0.3s, backdrop-filter 0.3s',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 40px',
          height: '76px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline' }}>
          <span
            style={{
              fontFamily: '"A2Z", Arial, sans-serif',
              fontWeight: 700,
              fontSize: '1.65rem',
              color: 'var(--color-ink)',
              letterSpacing: '0.01em',
            }}
          >
            Think X
          </span>
        </a>

        {/* Clean nav container with lighter grey links turning black on hover + subtle #f0d41f glow */}
        <nav
          className="hidden md:flex"
          style={{
            gap: '8px',
            alignItems: 'center',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.875rem',
                color: '#777777',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                fontWeight: 600,
                fontFamily: '"A2Z", Arial, sans-serif',
                padding: '8px 18px',
                borderRadius: '24px',
                border: '1px solid transparent',
                transition: 'all 0.25s ease',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-ink)';
                e.currentTarget.style.borderColor = 'rgba(240, 212, 31, 0.55)';
                e.currentTarget.style.boxShadow = '0 0 8px rgba(240, 212, 31, 0.25)';
                e.currentTarget.style.background = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#777777';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: 'var(--color-ink)' }}
        >
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
        <div style={{ borderTop: '1px solid var(--color-rule)', background: '#fff', padding: '16px 40px 24px' }}>
          {NAV_LINKS.map((l) => (
            <div key={l.name} style={{ padding: '10px 0', borderBottom: '1px solid var(--color-rule)' }}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#777777',
                  textDecoration: 'none',
                  fontFamily: '"A2Z", Arial, sans-serif',
                  letterSpacing: '0.01em',
                  display: 'block',
                  padding: '6px 12px',
                  borderRadius: '16px',
                }}
              >
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
    <section
      style={{
        paddingTop: '76px',
        minHeight: 'calc(100vh - 76px)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        maxWidth: '1280px',
        margin: '0 auto',
        paddingLeft: '40px',
        paddingRight: '40px',
        overflow: 'hidden',
      }}
      className="hero-grid"
    >
      <div ref={textRef} className="fade-in" style={{ paddingRight: '48px', paddingTop: '0px', paddingBottom: '48px' }}>
        <div>
          <SectionTag text="A new way to think." style={{ marginBottom: '2px' }} />
        </div>
        <h1
          style={{
            fontFamily: '"A2Z", Arial, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 4.8vw, 4.4rem)',
            lineHeight: 1.12,
            letterSpacing: '0em',
            color: 'var(--color-ink)',
            marginBottom: '32px',
            marginTop: '0px',
          }}
        >
          Don't just record.
          <br />
          <span style={{ fontStyle: 'normal', fontWeight: 700, fontFamily: '"A2Z", Arial, sans-serif' }}>Understand.</span>
        </h1>
        <p
          style={{
            fontSize: '1.08rem',
            lineHeight: 1.8,
            color: 'var(--color-ink-secondary)',
            maxWidth: '520px',
            marginBottom: '76px',
            fontWeight: 500,
            fontFamily: '"A2Z", Arial, sans-serif',
            letterSpacing: '0.01em',
          }}
        >
          Think X is a notebook system designed to help you capture, organize, and rediscover your thoughts—turning notes into meaningful understanding.
        </p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <a
            href="#why"
            style={{
              display: 'inline-block',
              background: 'var(--color-ink)',
              color: '#fff',
              padding: '16px 36px',
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              borderRadius: '2px',
              fontFamily: '"A2Z", Arial, sans-serif',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-brand-blue)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--color-ink)')}
          >
            Discover Think X
          </a>
          <a
            href="#product"
            style={{
              display: 'inline-block',
              color: 'var(--color-ink)',
              padding: '16px 0',
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              fontFamily: '"A2Z", Arial, sans-serif',
              borderBottom: '2px solid var(--color-ink)',
            }}
          >
            View the product ↓
          </a>
        </div>
      </div>

      <div style={{ position: 'relative', background: 'var(--color-surface)', overflow: 'hidden', height: '100%', minHeight: '500px' }}>
        <img
          src="https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?w=960&h=1100&fit=crop&auto=format"
          alt="Think X notebook open on a clean desk"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
      </div>

      <style>{`.hero-grid { @media (max-width: 768px) { grid-template-columns: 1fr; padding-left: 24px; padding-right: 24px; } }`}</style>
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
    <section id="why" style={{ padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,120px)', maxWidth: '1280px', margin: '0 auto' }}>
      <div ref={headRef} className="fade-in" style={{ marginBottom: '72px' }}>
        <div>
          <SectionTag text="Why Think X?" />
        </div>
        <h2
          style={{
            fontFamily: '"A2Z", Arial, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
            lineHeight: 1.2,
            color: 'var(--color-ink)',
            maxWidth: '700px',
            marginBottom: '24px',
            letterSpacing: '0em',
          }}
        >
          We take countless notes.
          <br />
          But <em style={{ fontStyle: 'italic', fontWeight: 700, fontFamily: '"A2Z", Arial, sans-serif' }}>most are never read again.</em>
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--color-ink-secondary)', maxWidth: '520px', lineHeight: 1.75, fontWeight: 500, fontFamily: '"A2Z", Arial, sans-serif', letterSpacing: '0.01em' }}>
          Think X is designed for the gap between capturing and understanding — a system that brings you back to what you wrote, and makes it mean something.
        </p>
      </div>

      <RULE />

      <div
        ref={gridRef}
        className="fade-in"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'var(--color-rule)', marginTop: '0' }}
      >
        {REASONS.map((r, i) => (
          <div
            key={r.label}
            className={`fade-in fade-in-delay-${i + 1}`}
            style={{ background: '#fff', padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '2px',
                background: 'var(--color-brand-yellow)',
                color: 'var(--color-ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
              }}
            >
              <span style={{ fontFamily: '"A2Z", Arial, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-ink)', letterSpacing: '0.01em' }}>
                0{i + 1}
              </span>
            </div>
            <h3
              style={{
                fontFamily: '"A2Z", Arial, sans-serif',
                fontWeight: 700,
                fontSize: '1.35rem',
                color: 'var(--color-ink)',
                margin: 0,
                letterSpacing: '0em',
              }}
            >
              {r.label}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-secondary)', lineHeight: 1.7, margin: 0, fontWeight: 500, fontFamily: '"A2Z", Arial, sans-serif', letterSpacing: '0.01em' }}>
              {r.desc}
            </p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginTop: '48px' }} className="gallery-grid">
        {[
          'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=300&fit=crop',
        ].map((src, i) => (
          <div key={i} style={{ aspectRatio: '4/3', overflow: 'hidden', background: 'var(--color-surface)' }}>
            <img
              src={src}
              alt="Think X product visual"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            />
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
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
    <section id="philosophy" style={{ background: 'var(--color-surface)', padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,120px)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div ref={ref} className="fade-in" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div>
            <SectionTag text="Philosophy" />
          </div>
          <h2
            style={{
              fontFamily: '"A2Z", Arial, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              lineHeight: 1.25,
              color: 'var(--color-ink)',
              maxWidth: '680px',
              margin: '0 auto 24px',
              letterSpacing: '0em',
            }}
          >
            Think X designs the <em style={{ fontFamily: '"A2Z", Arial, sans-serif', fontWeight: 700 }}>way you meet your thoughts again</em> — not just the way you record them.
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-secondary)', letterSpacing: '0.01em', fontStyle: 'italic', fontWeight: 600, fontFamily: '"A2Z", Arial, sans-serif' }}>
            Think X는 기록의 방식이 아닌, 생각과 다시 만나는 방식을 디자인합니다.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className={`fade-in fade-in-delay-${i + 1}`}
              style={{ textAlign: 'center', padding: '40px 24px', background: '#fff', borderRadius: '2px', border: '1px solid var(--color-rule)' }}
            >
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'var(--color-brand-yellow)',
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-ink)',
                }}
              >
                <span style={{ fontFamily: '"A2Z", Arial, sans-serif', fontStyle: 'italic', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-ink)' }}>
                  {p.title[0]}
                </span>
              </div>
              <h3 style={{ fontFamily: '"A2Z", Arial, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-ink)', marginBottom: '12px', letterSpacing: '0em' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-ink-secondary)', lineHeight: 1.7, fontWeight: 500, fontFamily: '"A2Z", Arial, sans-serif', letterSpacing: '0.01em' }}>
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
    <section id="how-it-works" style={{ padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,120px)', maxWidth: '1280px', margin: '0 auto' }}>
      <div ref={ref} className="fade-in" style={{ marginBottom: '72px' }}>
        <div>
          <SectionTag text="How it Works" />
        </div>
        <h2 style={{ fontFamily: '"A2Z", Arial, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', lineHeight: 1.2, color: 'var(--color-ink)', letterSpacing: '0em' }}>
          Three stages.
          <br />
          <em style={{ fontFamily: '"A2Z", Arial, sans-serif', fontWeight: 700 }}>One continuous loop.</em>
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        {STEPS.map((s, i) => (
          <div key={s.num} className={`fade-in fade-in-delay-${i + 1}`} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ aspectRatio: '5/6', overflow: 'hidden', background: 'var(--color-surface)', borderRadius: '2px', marginBottom: '24px' }}>
              <img
                src={s.img}
                alt={s.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.7s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
              />
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span
                style={{
                  fontFamily: '"A2Z", Arial, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  background: 'var(--color-brand-yellow)',
                  color: 'var(--color-ink)',
                  padding: '4px 8px',
                  borderRadius: '2px',
                  marginTop: '4px',
                  minWidth: '28px',
                  textAlign: 'center',
                  letterSpacing: '0.01em',
                }}
              >
                {s.num}
              </span>
              <div>
                <h3 style={{ fontFamily: '"A2Z", Arial, sans-serif', fontWeight: 700, fontSize: '1.35rem', color: 'var(--color-ink)', marginBottom: '10px', letterSpacing: '0em' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-secondary)', lineHeight: 1.75, fontWeight: 500, fontFamily: '"A2Z", Arial, sans-serif', letterSpacing: '0.01em' }}>
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
    <section style={{ background: 'var(--color-surface)', padding: 'clamp(80px,10vw,140px) 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px,5vw,120px)' }}>
        <div ref={ref} className="fade-in" style={{ marginBottom: '72px' }}>
          <div>
            <SectionTag text="Product Features" />
          </div>
          <h2 style={{ fontFamily: '"A2Z", Arial, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', lineHeight: 1.2, color: 'var(--color-ink)', letterSpacing: '0em' }}>
            Built around
            <br />
            <em style={{ fontFamily: '"A2Z", Arial, sans-serif', fontWeight: 700 }}>how thought actually works.</em>
          </h2>
        </div>
      </div>

      <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px,5vw,120px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--color-rule)' }} className="feature-split">
          <div style={{ background: 'var(--color-surface)', overflow: 'hidden' }}>
            <img
              src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?w=800&h=720&fit=crop&auto=format"
              alt="Think X open notebook showing inside pages"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '480px' }}
            />
          </div>
          <div style={{ background: '#fff', padding: '0' }}>
            {FEATURES.map((f, i) => (
              <div
                key={f.label}
                style={{
                  padding: '28px 40px',
                  borderBottom: i < FEATURES.length - 1 ? '1px solid var(--color-rule)' : 'none',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  transition: 'background 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-surface)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#fff')}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-brand-yellow)', marginTop: '8px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontFamily: '"A2Z", Arial, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: 'var(--color-ink)', marginBottom: '6px', letterSpacing: '0em' }}>
                    {f.label}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-ink-secondary)', fontWeight: 500, margin: 0, fontFamily: '"A2Z", Arial, sans-serif', letterSpacing: '0.01em' }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`.feature-split { @media (max-width: 768px) { grid-template-columns: 1fr; } }`}</style>
    </section>
  );
}

function ProductDetail() {
  const ref = useFadeIn();
  return (
    <section id="product" style={{ padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,120px)', maxWidth: '1280px', margin: '0 auto' }}>
      <div ref={ref} className="fade-in" style={{ marginBottom: '64px' }}>
        <div>
          <SectionTag text="Product Detail" />
        </div>
        <h2 style={{ fontFamily: '"A2Z", Arial, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', lineHeight: 1.2, color: 'var(--color-ink)', letterSpacing: '0em' }}>
          Inside the pages.
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="detail-grid">
        <div style={{ background: 'var(--color-surface)', overflow: 'hidden', borderRadius: '2px' }}>
          <img
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&h=800&fit=crop&auto=format"
            alt="Think X inner pages close-up"
            style={{ width: '100%', aspectRatio: '9/8', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div>
          <h3 style={{ fontFamily: '"A2Z", Arial, sans-serif', fontWeight: 700, fontSize: '1.85rem', color: 'var(--color-ink)', marginBottom: '8px', letterSpacing: '0em' }}>
            Inside Pages
          </h3>
          <p style={{ fontFamily: '"A2Z", Arial, sans-serif', fontStyle: 'italic', fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-ink-secondary)', marginBottom: '40px', letterSpacing: '0.01em' }}>
            내지 확대컷
          </p>
          <RULE />
          {['Capture Page', 'Keyword Index', 'Connection Space', 'Archive Section'].map((item, i) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 0', borderBottom: '1px solid var(--color-rule)' }}>
              <span
                style={{
                  fontFamily: '"A2Z", Arial, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  background: 'var(--color-brand-yellow)',
                  color: 'var(--color-ink)',
                  padding: '4px 8px',
                  borderRadius: '2px',
                  minWidth: '28px',
                  textAlign: 'center',
                  letterSpacing: '0.01em',
                }}
              >
                0{i + 1}
              </span>
              <span style={{ fontFamily: '"A2Z", Arial, sans-serif', fontWeight: 600, fontSize: '1.2rem', color: 'var(--color-ink)', letterSpacing: '0.01em' }}>{item}</span>
              <span style={{ marginLeft: 'auto', color: 'var(--color-ink-secondary)', fontSize: '1.3rem', fontWeight: 700 }}>→</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`.detail-grid { @media (max-width: 768px) { grid-template-columns: 1fr; gap: 40px; } }`}</style>
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
    <section style={{ background: 'var(--color-surface)', padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,120px)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div ref={ref} className="fade-in" style={{ marginBottom: '72px' }}>
          <div>
            <SectionTag text="Use Cases" />
          </div>
          <h2 style={{ fontFamily: '"A2Z", Arial, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', lineHeight: 1.2, color: 'var(--color-ink)', letterSpacing: '0em' }}>
            One system.
            <br />
            <em style={{ fontFamily: '"A2Z", Arial, sans-serif', fontWeight: 700 }}>Many kinds of thinking.</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'var(--color-rule)' }}>
          {CASES.map((c, i) => (
            <div key={c.tag} className={`fade-in fade-in-delay-${i + 1}`} style={{ background: '#fff', display: 'flex', flexDirection: 'column' }}>
              <div style={{ overflow: 'hidden', aspectRatio: '3/2', background: 'var(--color-surface)' }}>
                <img
                  src={c.img}
                  alt={c.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.7s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
                />
              </div>
              <div style={{ padding: '32px' }}>
                <span
                  style={{
                    fontFamily: '"A2Z", Arial, sans-serif',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    background: 'var(--color-brand-yellow)',
                    color: 'var(--color-ink)',
                    padding: '4px 8px',
                    borderRadius: '2px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.01em',
                    display: 'inline-block',
                  }}
                >
                  {c.tag}
                </span>
                <h3 style={{ fontFamily: '"A2Z", Arial, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: 'var(--color-ink)', margin: '12px 0 14px', letterSpacing: '0em' }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-secondary)', lineHeight: 1.75, fontWeight: 500, fontFamily: '"A2Z", Arial, sans-serif', letterSpacing: '0.01em' }}>
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
    <section style={{ padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,120px)', maxWidth: '1280px', margin: '0 auto' }}>
      <div ref={ref} className="fade-in" style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div>
          <SectionTag text="Demo Video" />
        </div>
        <h2 style={{ fontFamily: '"A2Z", Arial, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', lineHeight: 1.2, color: 'var(--color-ink)', letterSpacing: '0em' }}>
          See Think X <em style={{ fontFamily: '"A2Z", Arial, sans-serif', fontWeight: 700 }}>in use.</em>
        </h2>
      </div>
      <div
        style={{
          position: 'relative',
          aspectRatio: '16/9',
          background: '#000',
          overflow: 'hidden',
          borderRadius: '4px',
          maxWidth: '960px',
          margin: '0 auto',
          boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
        }}
      >
        {playing ? (
          <iframe
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Think X Demo Video"
            style={{ width: '100%', height: '100%', border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div
            style={{ position: 'relative', width: '100%', height: '100%', cursor: 'pointer' }}
            onClick={() => setPlaying(true)}
          >
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
                transition: 'background 0.2s',
              }}
            >
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.95)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
              >
                <div style={{ width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: '20px solid var(--color-ink)', marginLeft: '4px' }} />
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
    <footer style={{ background: 'var(--color-ink)', color: '#fff' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '36px clamp(24px, 5vw, 120px) 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px', marginBottom: '24px' }}>
          <div>
            <p style={{ fontFamily: '"A2Z", Arial, sans-serif', fontWeight: 700, fontSize: '1.4rem', letterSpacing: '0.01em', color: '#fff', margin: '0 0 4px' }}>Think X</p>
            <p style={{ fontFamily: '"A2Z", Arial, sans-serif', fontWeight: 500, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', margin: 0, letterSpacing: '0.01em' }}>
              Designed for thoughtful note-taking.
            </p>
          </div>
          <nav style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            {FOOTER_NAV.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: '"A2Z", Arial, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <p style={{ fontFamily: '"A2Z", Arial, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', margin: 0, fontWeight: 500, letterSpacing: '0.01em' }}>© 2026 Think X.</p>
          <p style={{ fontFamily: '"A2Z", Arial, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', margin: 0, fontWeight: 500, letterSpacing: '0.01em' }}>Graduation Project by Suyeon Lee.</p>
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

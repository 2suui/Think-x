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
  { name: 'Think X Principles', href: '#features' },
  { name: 'Inside Think X', href: '#product' },
  { name: 'How to use', href: '#how-it-works' },
];

const handleSmoothScroll = (e, href) => {
  if (href.startsWith('#')) {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(href);
      if (el) {
        const yOffset = -76;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }
};

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
        <a
          href="#"
          className="nav-brand-logo"
          onClick={(e) => handleSmoothScroll(e, '#')}
        >
          Think X
        </a>

        {/* Right group: Nav links + Menu icon with direct explicit gap */}
        <div className="nav-right-group">
          <nav className="nav-menu">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link-item"
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            className="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
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
      </div>

      {open && (
        <div className="mobile-menu-drawer">
          {NAV_LINKS.map((l) => (
            <div key={l.name}>
              <a
                href={l.href}
                onClick={(e) => {
                  setOpen(false);
                  handleSmoothScroll(e, l.href);
                }}
                className="mobile-menu-link"
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
    <section className="hero-section hero-grid">
      <div ref={textRef} className="hero-text-col fade-in">
        <div>
          <SectionTag text="A new way to think." style={{ marginBottom: '48px' }} />
        </div>
        <h1 className="hero-title">
          Don't Just Think.
          <br />
          <span>Start Making.</span>
        </h1>
        <p className="hero-desc">
          Think X is a notebook system designed to capture, organize, and rediscover your thoughts — transforming simple notes into meaningful ideas and deeper understanding.
        </p>
        <p className="hero-desc-ko">
          Think X는 생각을 기록하고, 정리하고, 다시 발견하는 과정을 돕는 노트 시스템입니다. 단순한 메모를 넘어 의미 있는 아이디어와 깊은 이해로 연결합니다.
        </p>
        <div className="hero-buttons">
          <a
            href="#why"
            className="btn-primary"
            onClick={(e) => handleSmoothScroll(e, '#why')}
          >
            Discover Think X
          </a>
          <a
            href="#product"
            className="btn-link-underline"
            onClick={(e) => handleSmoothScroll(e, '#product')}
          >
            View the product ↓
          </a>
        </div>
      </div>

      <div className="hero-img-col">
        <img
          src="https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?w=960&h=1100&fit=crop&auto=format"
          alt="Think X notebook open on a clean desk"
          className="hero-img"
          loading="eager"
        />
      </div>
    </section>
  );
}

function WhyThinkX() {
  const headRef = useFadeIn();
  const gridRef = useFadeIn();

  const REASONS = [
    {
      label: 'Capture',
      descEn: 'Write without interruption.',
      descKo: '떠오르는 생각을 부담 없이 기록합니다.',
    },
    {
      label: 'Revisit',
      descEn: 'Come back to your notes.',
      descKo: '잊힌 메모를 다시 꺼내어 읽습니다.',
    },
    {
      label: 'Select',
      descEn: 'Find what truly matters.',
      descKo: '중요한 생각을 선별하고 정리합니다.',
    },
    {
      label: 'Understand',
      descEn: 'Turn notes into insights.',
      descKo: '흩어진 기록을 연결해 의미 있는 통찰로 발전시킵니다.',
    },
  ];

  const GALLERY_IMAGES = [
    'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=300&fit=crop',
  ];

  return (
    <section id="why" className="section-wrapper">
      <div ref={headRef} className="fade-in" style={{ marginBottom: '72px' }}>
        <div>
          <SectionTag text="What is Think X" style={{ marginBottom: '48px' }} />
        </div>
        <h2 className="section-heading-lg" style={{ marginBottom: '64px' }}>
          We capture countless thoughts.
          <br />
          <em style={{ fontStyle: 'italic', fontWeight: 700 }}>But most never become meaningful.</em>
        </h2>
        <p className="section-subtext">
          Think X is designed for the gap between capturing and understanding —
          <br />
          a system that helps you revisit, select, and transform your notes into
          <br />
          meaningful insights.
        </p>
        <p className="section-subtext-ko">
          Think X는 기록과 이해를 자연스럽게 연결하기 위해 만들어졌습니다. 흩어진 메모를 다시 발견하고, 필요한 내용을 선별해, 의미 있는 통찰로 연결해 주는 시스템입니다.
        </p>
      </div>

      <RULE />

      <div ref={gridRef} className="why-cards-grid fade-in">
        {REASONS.map((r, i) => (
          <div key={r.label} className={`why-card fade-in fade-in-delay-${i + 1}`}>
            <div className="why-badge-num">0{i + 1}</div>
            <h3 className="why-card-title">{r.label}</h3>
            <div>
              <p className="why-card-desc">{r.descEn}</p>
              <p className="why-card-desc-ko">{r.descKo}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="why-gallery-grid gallery-grid">
        {GALLERY_IMAGES.map((src) => (
          <div key={src} className="why-gallery-item">
            <img
              src={src}
              alt="Think X product visual"
              className="why-gallery-img"
              loading="lazy"
            />
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
      <div className="philosophy-inner-container">
        <div ref={ref} className="fade-in" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div>
            <SectionTag text="Behind the X" style={{ marginBottom: '48px' }} />
          </div>
          <h2 className="section-heading-lg" style={{ margin: '0 auto 32px', maxWidth: '960px' }}>
            Think X began as "Thinking Box." A place for collecting thoughts and finding them again.
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 700 }}>
              It evolved into X—a symbol of connection and new perspectives.
            </em>
          </h2>
          <p className="philosophy-subtext-ko" style={{ maxWidth: '840px', margin: '0 auto' }}>
            Think X는 'Thinking Box'라는 아이디어에서 시작되었습니다.
            <br />
            생각을 담아두고, 다시 꺼내 보며, 새로운 의미를 발견하는 공간을 만들고자 했습니다.
            <br />
            시간이 지나며 단순한 기록을 넘어, 생각을 연결하고 이해하는 시스템으로 발전했습니다.
            <br />
            그래서 X는 생각이 교차하고, 연결되며, 새로운 가능성이 시작되는 지점을 상징합니다.
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
      descEn: 'Write freely without worrying about perfection.',
      descKo: '떠오르는 생각을 형식에 얽매이지 않고 자유롭게 기록하세요. 중요한 것은 완성도가 아니라 기록하는 습관입니다.',
      img: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&h=700&fit=crop',
    },
    {
      num: '02',
      title: 'Refine',
      descEn: 'Highlight what truly matters.',
      descKo: '메모를 다시 읽으며 불필요한 내용을 덜어내고, 핵심 문장과 키워드를 남겨 생각을 명확하게 정리합니다.',
      img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=700&fit=crop',
    },
    {
      num: '03',
      title: 'Connect',
      descEn: 'Link ideas together.',
      descKo: '정리한 메모를 다른 기록과 연결해 새로운 관계와 패턴을 발견합니다.',
      img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=700&fit=crop',
    },
    {
      num: '04',
      title: 'Rediscover',
      descEn: 'Return to forgotten thoughts.',
      descKo: '시간이 지난 뒤 다시 메모를 꺼내보세요. 잊고 있던 생각이 새로운 아이디어와 통찰로 이어질 수 있습니다.',
      img: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=600&h=700&fit=crop',
    },
  ];

  return (
    <section id="how-it-works" className="section-wrapper">
      <div ref={ref} className="fade-in" style={{ marginBottom: '92px' }}>
        <div>
          <SectionTag text="How to use" style={{ marginBottom: '16px' }} />
        </div>
        <h2 className="section-heading-lg" style={{ marginBottom: 0 }}>
          Four stages.
          <br />
          <em>One continuous loop.</em>
        </h2>
      </div>

      <div className="steps-grid">
        {STEPS.map((s, i) => (
          <div key={s.num} className={`step-card fade-in fade-in-delay-${i + 1}`}>
            <div className="step-img-box">
              <img src={s.img} alt={s.title} className="step-img" loading="lazy" />
            </div>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <span className="step-badge">{s.num}</span>

              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.3rem', color: 'var(--color-ink)', margin: '0 0 8px 0' }}>
                  {s.title}
                </h3>

                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-ink-secondary)',
                  fontWeight: 600,
                  margin: 0,
                  lineHeight: 1.5,
                  minHeight: '2.8em',
                  display: 'flex',
                  alignItems: 'flex-start',
                }}>
                  {s.descEn}
                </p>

                <p style={{
                  fontSize: '0.825rem',
                  color: '#888888',
                  fontWeight: 400,
                  margin: '18px 0 0 0',
                  lineHeight: 1.65,
                }}>
                  {s.descKo}
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
  const PRINCIPLES = [
    {
      num: '01',
      title: '다시 구성되는 기록',
      firstLine: 'Think X는 기록을 끝난 결과물이 아닌, 계속 발전하는 과정으로 생각합니다.',
      restLines: [
        '한 장의 종이를 목적에 따라 나누고 분리할 수 있도록 설계해, 필요한 기록은 남기고 불필요한 내용은 정리합니다.',
        '기록은 필요할 때마다 다시 구성되며 새로운 의미를 만들어 갑니다.',
      ],
    },
    {
      num: '02',
      title: '하나의 생각, 하나의 메모',
      firstLine: '하나의 메모에는 하나의 생각만 담습니다.',
      restLines: [
        '생각을 작은 단위로 기록하면 다시 찾고, 연결하고, 확장하기 쉬워집니다.',
        '각각의 메모는 독립적이면서도 다른 메모와 연결되어 새로운 아이디어를 만들어 냅니다.',
      ],
    },
    {
      num: '03',
      title: '이해하는 기록',
      firstLine: 'Think X는 기록보다 이해를 중요하게 생각합니다.',
      restLines: [
        '핵심을 선별하고 자신의 언어로 다시 정리하는 과정에서, 기록은 단순한 정보가 아닌 자신의 생각이 됩니다.',
        '이해는 기록의 끝이 아니라 새로운 생각의 시작입니다.',
      ],
    },
  ];

  const FEATURES = [
    { label: 'Capture Page', desc: 'Guided structure for raw, unfiltered thinking' },
    { label: 'Keyword Index', desc: 'Front-of-book index that maps every idea' },
    { label: 'Connection Space', desc: 'Dedicated spreads for linking entries across time' },
    { label: 'Archive Section', desc: 'A permanent home for insights worth keeping' },
    { label: 'Thread Format', desc: 'Thread-based pages encourage continued thinking' },
    { label: '120gsm Paper', desc: 'Fountain pen-friendly, ghosting-free sheets' },
  ];

  return (
    <section id="features" className="features-split-wrapper">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
        <div ref={ref} className="fade-in" style={{ marginBottom: '64px' }}>
          <div>
            <SectionTag text="Think X Principles" style={{ marginBottom: '16px' }} />
          </div>
          <h2 className="section-heading-lg">
            Built for
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 700 }}>
              the way we think.
            </em>
          </h2>
        </div>
      </div>

      {/* 3 Core Principles Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '28px',
        maxWidth: '1280px',
        margin: '0 auto 72px',
        padding: '0 40px',
      }}>
        {PRINCIPLES.map((p, i) => (
          <div key={p.num} className={`principle-card fade-in fade-in-delay-${i + 1}`} style={{
            background: '#ffffff',
            border: '1px solid var(--color-border)',
            borderRadius: '4px',
            padding: '36px 30px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{ marginBottom: '24px' }}>
              <span className="step-badge" style={{ display: 'inline-block', marginBottom: '20px' }}>{p.num}</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-ink)', margin: 0 }}>
                {p.title}
              </h3>
            </div>
            <div style={{ fontSize: '0.86rem', color: 'var(--color-ink-secondary)', lineHeight: 1.7, fontWeight: 400 }}>
              <p style={{ margin: '0 0 14px 0', fontWeight: 500, color: 'var(--color-ink)' }}>
                {p.firstLine}
              </p>
              {p.restLines.map((line, idx) => (
                <p key={idx} style={{ margin: idx === p.restLines.length - 1 ? 0 : '0 0 8px 0' }}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
        <div className="feature-split-grid feature-split">
          <div style={{ background: 'var(--color-surface)', overflow: 'hidden' }}>
            <img
              src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?w=800&h=720&fit=crop&auto=format"
              alt="Think X open notebook showing inside pages"
              className="feature-img"
              loading="lazy"
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
          <SectionTag text="Inside Think X" style={{ marginBottom: '16px' }} />
        </div>
        <h2 className="section-heading-lg">Inside the pages.</h2>
      </div>

      <div className="detail-flex-grid detail-grid">
        <div style={{ background: 'var(--color-surface)', overflow: 'hidden', borderRadius: '2px' }}>
          <img
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&h=800&fit=crop&auto=format"
            alt="Think X inner pages close-up"
            loading="lazy"
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
      <div className="philosophy-inner-container">
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
                <img src={c.img} alt={c.title} className="case-img" loading="lazy" />
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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div style={{ position: 'relative', width: '100%', height: '100%', cursor: 'pointer' }} onClick={() => setPlaying(true)}>
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&h=675&fit=crop&auto=format"
              alt="Think X notebook on a reading desk"
              loading="lazy"
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
    { label: 'Think X Principles', href: '#features' },
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
              <a
                key={l.label}
                href={l.href}
                className="footer-nav-link"
                onClick={(e) => handleSmoothScroll(e, l.href)}
              >
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
          if (e.target.isIntersecting) e.target.classList.add('visible');
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

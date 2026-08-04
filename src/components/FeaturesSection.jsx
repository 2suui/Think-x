import React from 'react';

export default function FeaturesSection() {
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
        <div className="fade-in visible" style={{ marginBottom: '72px' }}>
          <div>
            <span className="section-tag-yellow" style={{ marginBottom: '16px' }}>
              Think X Principles
            </span>
          </div>
          <h2 className="section-heading-lg" style={{ maxWidth: '780px' }}>
            Built around
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 700, whiteSpace: 'nowrap' }}>
              how thoughts actually work.
            </em>
          </h2>
        </div>
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

import React from 'react';

export default function FeaturesSection() {
  const features = [
    { label: 'Capture Page', desc: 'Guided structure for raw, unfiltered thinking with margin cues' },
    { label: 'Keyword Index', desc: 'Front-of-book index that maps every idea to its entry page' },
    { label: 'Connection Space', desc: 'Dedicated spreads for linking entries across time and disciplines' },
    { label: 'Archive Section', desc: 'A permanent home for insights worth keeping for years' },
    { label: 'Thread Format', desc: 'Thread-based pages encourage continued, iterative thinking' },
    { label: '90gsm Paper', desc: 'Fountain pen-friendly, ghosting-free cream acid-free sheets' },
  ];

  return (
    <section
      style={{
        background: 'var(--color-surface)',
        padding: 'clamp(80px,10vw,140px) 0',
        borderTop: '1px solid var(--color-rule)',
        borderBottom: '1px solid var(--color-rule)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px,5vw,120px)' }}>
        <div className="fade-in visible" style={{ marginBottom: '72px' }}>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '0.95rem',
              color: 'var(--color-brand-yellow)',
              letterSpacing: '0.08em',
              marginBottom: '16px',
              textTransform: 'uppercase',
            }}
          >
            Product Features
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              lineHeight: 1.2,
              color: 'var(--color-ink)',
            }}
          >
            Built around
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-brand-blue)' }}>
              how thought actually works.
            </em>
          </h2>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px,5vw,120px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            background: 'var(--color-rule)',
            border: '1px solid var(--color-rule)',
            borderRadius: '2px',
            overflow: 'hidden',
          }}
          className="feature-split"
        >
          <div style={{ background: 'var(--color-surface)', overflow: 'hidden' }}>
            <img
              src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?w=800&h=720&fit=crop&auto=format"
              alt="Think X open notebook showing inside pages"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                minHeight: '480px',
              }}
            />
          </div>
          <div style={{ background: '#ffffff' }}>
            {features.map((item, idx) => (
              <div
                key={item.label}
                style={{
                  padding: '28px 40px',
                  borderBottom: idx < features.length - 1 ? '1px solid var(--color-rule)' : 'none',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  transition: 'background 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-surface)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#ffffff')}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--color-brand-yellow)',
                    marginTop: '8px',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 500,
                      fontSize: '1.15rem',
                      color: 'var(--color-ink)',
                      margin: '0 0 6px 0',
                    }}
                  >
                    {item.label}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-ink-secondary)',
                      lineHeight: 1.6,
                      margin: 0,
                      fontWeight: 300,
                    }}
                  >
                    {item.desc}
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

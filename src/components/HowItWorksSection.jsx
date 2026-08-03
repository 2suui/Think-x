import React from 'react';

export default function HowItWorksSection() {
  const steps = [
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
    <section
      id="how-it-works"
      style={{
        padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,120px)',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
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
          How it Works
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
          Three stages.
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--color-brand-blue)' }}>One continuous loop.</em>
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
        }}
      >
        {steps.map((step) => (
          <div
            key={step.num}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div
              style={{
                aspectRatio: '5/6',
                overflow: 'hidden',
                background: 'var(--color-surface)',
                borderRadius: '2px',
                marginBottom: '24px',
                border: '1px solid var(--color-rule)',
              }}
            >
              <img
                src={step.img}
                alt={step.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.7s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--color-brand-yellow)',
                  marginTop: '4px',
                  minWidth: '28px',
                }}
              >
                {step.num}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 500,
                    fontSize: '1.35rem',
                    color: 'var(--color-ink)',
                    marginBottom: '10px',
                    margin: 0,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-ink-secondary)',
                    lineHeight: 1.75,
                    fontWeight: 300,
                    marginTop: '8px',
                  }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

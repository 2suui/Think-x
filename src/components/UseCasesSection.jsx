import React from 'react';

export default function UseCasesSection() {
  const cases = [
    {
      tag: 'Students',
      title: 'Lectures that stick',
      body: 'Transform class notes from passive transcription into active understanding with structured capture and review cycles.',
      img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&h=400&fit=crop',
    },
    {
      tag: 'Creatives',
      title: 'Ideas that compound',
      body: 'Sketch freely, then surface patterns. The connection space reveals themes you did not know you were exploring.',
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
    <section
      style={{
        background: 'var(--color-surface)',
        padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,120px)',
        borderTop: '1px solid var(--color-rule)',
        borderBottom: '1px solid var(--color-rule)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
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
            Use Cases
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
            One system.
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-brand-blue)' }}>
              Many kinds of thinking.
            </em>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            background: 'var(--color-rule)',
            border: '1px solid var(--color-rule)',
            borderRadius: '2px',
            overflow: 'hidden',
          }}
        >
          {cases.map((item) => (
            <div
              key={item.tag}
              style={{
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  overflow: 'hidden',
                  aspectRatio: '3/2',
                  background: 'var(--color-surface)',
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
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
              <div style={{ padding: '32px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: '0.8rem',
                    color: 'var(--color-brand-yellow)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                  }}
                >
                  {item.tag}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 500,
                    fontSize: '1.35rem',
                    color: 'var(--color-ink)',
                    margin: '10px 0 14px',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-ink-secondary)',
                    lineHeight: 1.75,
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

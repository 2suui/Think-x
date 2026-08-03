import React from 'react';

export default function PhilosophySection() {
  const pillars = [
    {
      title: 'Clarity',
      body: 'Every page is intentional. No wasted space — only structured space for your thoughts.',
    },
    {
      title: 'Connection',
      body: 'Ideas live in relation to each other. Think X makes those links visible across pages and time.',
    },
    {
      title: 'Return',
      body: 'A notebook you return to is infinitely more valuable than one you fill and forget.',
    },
    {
      title: 'Growth',
      body: 'Understanding compounds over time. Each entry builds directly on the previous insights.',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=450&fit=crop',
  ];

  return (
    <section
      id="philosophy"
      style={{
        background: 'var(--color-surface)',
        padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,120px)',
        borderTop: '1px solid var(--color-rule)',
        borderBottom: '1px solid var(--color-rule)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="fade-in visible" style={{ textAlign: 'center', marginBottom: '72px' }}>
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
            Philosophy
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              lineHeight: 1.25,
              color: 'var(--color-ink)',
              maxWidth: '720px',
              margin: '0 auto 24px',
            }}
          >
            Think X designs the{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-brand-blue)' }}>
              way you meet your thoughts again
            </em>{' '}
            — not just the way you record them.
          </h2>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--color-ink-tertiary)',
              letterSpacing: '0.03em',
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            Think X는 기록의 방식이 아닌, 생각과 다시 만나는 방식을 디자인합니다.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
          }}
        >
          {pillars.map((item) => (
            <div
              key={item.title}
              style={{
                textAlign: 'center',
                padding: '40px 24px',
                background: '#ffffff',
                borderRadius: '2px',
                border: '1px solid var(--color-rule)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--color-surface)',
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-rule)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: '1.2rem',
                    color: 'var(--color-brand-yellow)',
                    fontWeight: 600,
                  }}
                >
                  {item.title[0]}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  fontSize: '1.25rem',
                  color: 'var(--color-ink)',
                  marginBottom: '12px',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-ink-secondary)',
                  lineHeight: 1.7,
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            marginTop: '56px',
          }}
          className="gallery-grid"
        >
          {galleryImages.map((imgUrl, idx) => (
            <div
              key={idx}
              style={{
                aspectRatio: '4/3',
                overflow: 'hidden',
                background: 'var(--color-surface)',
                borderRadius: '2px',
                border: '1px solid var(--color-rule)',
              }}
            >
              <img
                src={imgUrl}
                alt="Think X process detail"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

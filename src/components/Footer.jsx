import React from 'react';

export default function Footer({ onOpenPreorder }) {
  const links = [
    { name: 'Why Think X', href: '#why' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Product Detail', href: '#product' },
    { name: 'Interactive Demo', href: '#simulator' },
  ];

  return (
    <footer style={{ background: 'var(--color-ink)', color: '#ffffff' }}>
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: 'clamp(48px,8vw,96px) clamp(24px,5vw,120px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '48px',
            marginBottom: '80px',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '1.5rem',
                letterSpacing: '0.02em',
                color: '#ffffff',
                margin: '0 0 12px 0',
              }}
            >
              Think X
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.4)',
                margin: 0,
                letterSpacing: '0.01em',
              }}
            >
              Designed for thoughtful note-taking.
            </p>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-end' }}>
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.55)',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                color: 'rgba(255,255,255,0.3)',
                margin: '0 0 4px 0',
                fontWeight: 300,
              }}
            >
              © 2026 Think X.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                color: 'rgba(255,255,255,0.3)',
                margin: 0,
                fontWeight: 300,
              }}
            >
              Graduation Project by Suyeon Lee.
            </p>
          </div>

          <button
            onClick={onOpenPreorder}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#ffffff',
              padding: '8px 20px',
              fontSize: '0.78rem',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}
          >
            Pre-order Reservation
          </button>
        </div>
      </div>
    </footer>
  );
}

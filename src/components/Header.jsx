import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header({ onOpenPreorder, onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(229, 229, 229, 0.7)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.03)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '16px clamp(24px, 5vw, 120px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="#"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'baseline',
            gap: '6px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '1.4rem',
              color: 'var(--color-ink)',
              letterSpacing: '0.02em',
            }}
          >
            Think X
          </span>
          <span
            style={{
              fontSize: '0.7rem',
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              color: 'var(--color-brand-yellow)',
              letterSpacing: '0.05em',
            }}
          >
            SYSTEM
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
          }}
          className="hidden md:flex"
        >
          <a
            href="#why"
            style={{
              fontSize: '0.8125rem',
              fontWeight: 400,
              color: 'var(--color-ink-secondary)',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-ink)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-ink-secondary)')}
          >
            Why Think X
          </a>
          <a
            href="#philosophy"
            style={{
              fontSize: '0.8125rem',
              fontWeight: 400,
              color: 'var(--color-ink-secondary)',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-ink)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-ink-secondary)')}
          >
            Philosophy
          </a>
          <a
            href="#how-it-works"
            style={{
              fontSize: '0.8125rem',
              fontWeight: 400,
              color: 'var(--color-ink-secondary)',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-ink)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-ink-secondary)')}
          >
            How it Works
          </a>
          <a
            href="#product"
            style={{
              fontSize: '0.8125rem',
              fontWeight: 400,
              color: 'var(--color-ink-secondary)',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-ink)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-ink-secondary)')}
          >
            Product Detail
          </a>
          <a
            href="#simulator"
            style={{
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: 'var(--color-brand-blue)',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            Interactive Demo
          </a>
        </nav>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={onOpenPreorder}
            className="btn-primary"
            style={{
              padding: '10px 24px',
              fontSize: '0.8125rem',
            }}
          >
            Pre-order
            <ArrowRight size={14} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-ink)',
              cursor: 'pointer',
              padding: '6px',
              display: 'none',
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden.md\\:flex {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: '#ffffff',
            borderBottom: '1px solid var(--color-rule)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <a
            href="#why"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--color-ink)', textDecoration: 'none', fontSize: '1rem' }}
          >
            Why Think X
          </a>
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--color-ink)', textDecoration: 'none', fontSize: '1rem' }}
          >
            Philosophy
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--color-ink)', textDecoration: 'none', fontSize: '1rem' }}
          >
            How it Works
          </a>
          <a
            href="#product"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--color-ink)', textDecoration: 'none', fontSize: '1rem' }}
          >
            Product Detail
          </a>
          <a
            href="#simulator"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--color-brand-blue)', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}
          >
            Interactive Demo
          </a>
        </div>
      )}
    </header>
  );
}

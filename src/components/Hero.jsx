import React from 'react';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export default function Hero({ onOpenPreorder }) {
  return (
    <section
      style={{
        paddingTop: '68px',
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        overflow: 'hidden',
        background: '#ffffff',
      }}
      className="hero-grid"
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(48px,8vw,120px) clamp(32px,5vw,80px) clamp(48px,8vw,120px) clamp(32px,6vw,120px)',
        }}
      >
        <div className="fade-in visible">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--color-brand-yellow)',
              }}
            />
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '0.875rem',
                color: 'var(--color-brand-yellow)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              A new way to think
            </p>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)',
              lineHeight: 1.18,
              letterSpacing: '-0.01em',
              color: 'var(--color-ink)',
              marginBottom: '28px',
            }}
          >
            Don't just think.
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 400, fontFamily: 'var(--font-display)' }}>
              Start making.
            </em>
          </h1>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'var(--color-ink-secondary)',
              maxWidth: '440px',
              marginBottom: '48px',
              fontWeight: 300,
            }}
          >
            Think X helps you capture thoughts and rediscover them — a notebook system designed around understanding, not just recording.
          </p>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button onClick={onOpenPreorder} className="btn-primary">
              Discover Think X
              <ArrowRight size={16} />
            </button>
            <a href="#product" className="btn-secondary">
              View the product ↓
            </a>
          </div>

          <div
            style={{
              marginTop: '48px',
              paddingTop: '24px',
              borderTop: '1px solid var(--color-rule)',
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-ink-tertiary)', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Design Project
              </p>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-ink)', margin: 0 }}>
                Graduation Work by Suyeon Lee
              </p>
            </div>
            <div style={{ width: '1px', height: '32px', background: 'var(--color-rule)' }} />
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-ink-tertiary)', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Paper Specification
              </p>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-ink)', margin: 0 }}>
                90gsm Fountain Pen Friendly
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          background: 'var(--color-surface)',
          overflow: 'hidden',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?w=960&h=1100&fit=crop&auto=format"
          alt="Think X notebook open on a clean desk"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            right: '32px',
            background: 'rgba(255, 255, 255, 0.92)',
            padding: '16px 24px',
            backdropFilter: 'blur(8px)',
            borderRadius: '2px',
            border: '1px solid rgba(229, 229, 229, 0.8)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            maxWidth: '320px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <Sparkles size={14} color="var(--color-brand-yellow)" />
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                color: 'var(--color-ink)',
                margin: 0,
                fontWeight: 600,
              }}
            >
              Think X Notebook System
            </p>
          </div>
          <p
            style={{
              fontSize: '0.78rem',
              color: 'var(--color-ink-secondary)',
              margin: 0,
              lineHeight: 1.5,
              fontWeight: 300,
            }}
          >
            Structured Capture Page + Keyword Indexing + Connection Grid.
          </p>
        </div>
      </div>
    </section>
  );
}

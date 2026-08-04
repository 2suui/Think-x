import React from 'react';

export default function WhySection() {
  const steps = [
    {
      label: 'Capture',
      desc: 'Every thought has a place. Structured pages guide you from raw ideas to refined insights without friction.',
    },
    {
      label: 'Index',
      desc: 'Keywords surface what matters. Never lose a thread buried in pages again with the front-of-book index.',
    },
    {
      label: 'Connect',
      desc: 'A dedicated space links ideas across entries, revealing patterns and synthesis you would never spot otherwise.',
    },
    {
      label: 'Archive',
      desc: 'Revisit and rediscover. The archive turns your notebook from a linear record into a living knowledge base.',
    },
  ];

  return (
    <section
      id="why"
      style={{
        padding: 'clamp(80px,10vw,140px) 40px',
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
          Why Think X?
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
            lineHeight: 1.2,
            color: 'var(--color-ink)',
            maxWidth: '700px',
            marginBottom: '64px',
          }}
        >
          We capture countless thoughts.
          <br />
          <em style={{ fontStyle: 'italic', fontWeight: 700 }}>But most never become meaningful.</em>
        </h2>
        <p
          style={{
            fontSize: '0.9375rem',
            color: 'var(--color-ink-secondary)',
            maxWidth: '640px',
            lineHeight: 1.75,
            fontWeight: 500,
          }}
        >
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

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1px',
          background: 'var(--color-rule)',
          border: '1px solid var(--color-rule)',
          borderRadius: '2px',
          overflow: 'hidden',
        }}
      >
        {steps.map((item, idx) => (
          <div
            key={item.label}
            style={{
              background: '#ffffff',
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '2px',
                background: 'var(--color-surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--color-rule)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: 'var(--color-brand-yellow)',
                }}
              >
                0{idx + 1}
              </span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: '1.35rem',
                color: 'var(--color-ink)',
                margin: 0,
                letterSpacing: '-0.01em',
              }}
            >
              {item.label}
            </h3>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-ink-secondary)',
                lineHeight: 1.7,
                margin: 0,
                fontWeight: 300,
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

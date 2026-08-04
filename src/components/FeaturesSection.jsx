import React from 'react';

export default function FeaturesSection() {
  const PRINCIPLES = [
    {
      num: '01',
      title: '재구성되는 기록',
      lines: [
        'Think X는 기록을 고정된 결과물이 아닌, 계속해서 발전하는 과정으로 바라봅니다.',
        '한 장의 종이를 기능에 따라 나누고 분리할 수 있도록 설계해, 중요한 기록은 남기고 불필요한 내용은 정리할 수 있습니다.',
        '기록은 한 번 쓰고 끝나는 것이 아니라, 필요에 따라 다시 구성되고 새로운 의미를 만들어 갑니다.',
      ],
    },
    {
      num: '02',
      title: '하나의 생각, 하나의 메모',
      lines: [
        '하나의 메모에는 하나의 생각만 기록합니다.',
        '생각을 작은 단위로 나누면 다시 찾고, 연결하고, 확장하기 쉬워집니다.',
        '각각의 메모는 독립적인 기록이면서도, 다른 메모와 연결되어 새로운 아이디어를 만들어 냅니다.',
      ],
    },
    {
      num: '03',
      title: '이해를 위한 기록',
      lines: [
        'Think X는 기록보다 이해를 중요하게 생각합니다.',
        '핵심을 선별하고 자신의 언어로 다시 정리하는 과정에서, 기록은 단순한 정보가 아니라 자신의 생각으로 바뀝니다.',
        '이해는 기록의 끝이 아니라, 새로운 생각이 시작되는 출발점입니다.',
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
        <div className="fade-in visible" style={{ marginBottom: '64px' }}>
          <div>
            <span className="section-tag-yellow" style={{ marginBottom: '16px' }}>
              Think X Principles
            </span>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span className="step-badge">{p.num}</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-ink)', margin: 0 }}>
                {p.title}
              </h3>
            </div>
            <div style={{ fontSize: '0.86rem', color: 'var(--color-ink-secondary)', lineHeight: 1.7, fontWeight: 400 }}>
              {p.lines.map((line, idx) => (
                <p key={idx} style={{ margin: idx === p.lines.length - 1 ? 0 : '0 0 10px 0' }}>
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

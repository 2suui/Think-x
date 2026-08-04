import React from 'react';

export default function PhilosophySection() {
  const PILLARS = [
    { title: 'Clarity', body: 'Every page is intentional. No wasted space — only structured space.' },
    { title: 'Connection', body: 'Ideas live in relation to each other. Think X makes those links visible.' },
    { title: 'Return', body: 'A notebook you return to is more valuable than one you fill and forget.' },
    { title: 'Growth', body: 'Understanding compounds. Each entry builds on the last.' },
  ];

  return (
    <section id="philosophy" className="philosophy-section">
      <div className="philosophy-inner-container">
        <div className="fade-in visible" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div>
            <span className="section-tag-yellow" style={{ marginBottom: '48px' }}>
              Behind the X
            </span>
          </div>
          <h2 className="section-heading-lg" style={{ margin: '0 auto 32px', maxWidth: '960px' }}>
            Think X began as "Thinking Box." A place for collecting thoughts and finding them again.
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 700 }}>
              It evolved into X—a symbol of connection and new perspectives.
            </em>
          </h2>
          <p className="philosophy-subtext-ko" style={{ maxWidth: '840px', margin: '0 auto' }}>
            Think X는 'Thinking Box'라는 아이디어에서 시작되었습니다.
            <br />
            생각을 담아두고, 다시 꺼내 보며, 새로운 의미를 발견하는 공간을 만들고자 했습니다.
            <br />
            시간이 지나며 단순한 기록을 넘어, 생각을 연결하고 이해하는 시스템으로 발전했습니다.
            <br />
            그래서 X는 생각이 교차하고, 연결되며, 새로운 가능성이 시작되는 지점을 상징합니다.
          </p>
        </div>

        <div className="philosophy-grid">
          {PILLARS.map((p, i) => (
            <div key={p.title} className={`philosophy-card fade-in fade-in-delay-${i + 1}`}>
              <div className="philosophy-circle-badge">{p.title[0]}</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-ink)', marginBottom: '12px' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-ink-secondary)', lineHeight: 1.7, fontWeight: 500, margin: 0 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

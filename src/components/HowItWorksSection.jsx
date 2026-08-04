import React from 'react';

export default function HowItWorksSection() {
  const STEPS = [
    {
      num: '01',
      title: 'Capture',
      descEn: 'Write freely without worrying about perfection.',
      descKo: '떠오르는 생각을 형식에 얽매이지 않고 자유롭게 기록하세요. 중요한 것은 완성도가 아니라 기록하는 습관입니다.',
      img: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&h=700&fit=crop',
    },
    {
      num: '02',
      title: 'Refine',
      descEn: 'Highlight what truly matters.',
      descKo: '메모를 다시 읽으며 불필요한 내용을 덜어내고, 핵심 문장과 키워드를 남겨 생각을 명확하게 정리합니다.',
      img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=700&fit=crop',
    },
    {
      num: '03',
      title: 'Connect',
      descEn: 'Link ideas together.',
      descKo: '정리한 메모를 다른 기록과 연결해 새로운 관계와 패턴을 발견합니다.',
      img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=700&fit=crop',
    },
    {
      num: '04',
      title: 'Rediscover',
      descEn: 'Return to forgotten thoughts.',
      descKo: '시간이 지난 뒤 다시 메모를 꺼내보세요. 잊고 있던 생각이 새로운 아이디어와 통찰로 이어질 수 있습니다.',
      img: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=600&h=700&fit=crop',
    },
  ];

  return (
    <section id="how-it-works" className="section-wrapper">
      <div className="fade-in visible" style={{ marginBottom: '92px' }}>
        <div>
          <span className="section-tag-yellow" style={{ marginBottom: '16px' }}>
            How to use
          </span>
        </div>
        <h2 className="section-heading-lg" style={{ marginBottom: 0 }}>
          Four stages.
          <br />
          <em>One continuous loop.</em>
        </h2>
      </div>

      <div className="steps-grid">
        {STEPS.map((s, i) => (
          <div key={s.num} className={`step-card fade-in fade-in-delay-${i + 1}`}>
            <div className="step-img-box">
              <img src={s.img} alt={s.title} className="step-img" loading="lazy" />
            </div>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <span className="step-badge">{s.num}</span>

              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.3rem', color: 'var(--color-ink)', margin: '0 0 8px 0' }}>
                  {s.title}
                </h3>

                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-ink-secondary)',
                  fontWeight: 600,
                  margin: 0,
                  lineHeight: 1.5,
                  minHeight: '2.8em',
                  display: 'flex',
                  alignItems: 'flex-start',
                }}>
                  {s.descEn}
                </p>

                <p style={{
                  fontSize: '0.825rem',
                  color: '#888888',
                  fontWeight: 400,
                  margin: '18px 0 0 0',
                  lineHeight: 1.65,
                }}>
                  {s.descKo}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

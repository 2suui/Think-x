import React, { useState } from 'react';
import { ArrowRight, Check, Eye } from 'lucide-react';

export default function ProductDetailSection({ onOpenPreorder }) {
  const [activeTab, setActiveTab] = useState(0);

  const pages = [
    {
      title: 'Capture Page',
      subtitle: '생각의 시작과 포착',
      desc: 'Freeform grid layout with dedicated top margin for entry date, subject, and keyword tag prompts. Ideal for raw sketches and quick thoughts.',
      img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&h=800&fit=crop&auto=format',
    },
    {
      title: 'Keyword Index',
      subtitle: '키워드 지도 및 인덱스',
      desc: 'Located at the front of the book. Index up to 240 key concepts with page references to instantly jump back to any thought.',
      img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&h=800&fit=crop&auto=format',
    },
    {
      title: 'Connection Space',
      subtitle: '아이디어 연결 및 시네르기',
      desc: 'Two-page spread designed with interconnecting node grids for cross-referencing entries, mapping synthesis, and tracing thought evolution.',
      img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=900&h=800&fit=crop&auto=format',
    },
    {
      title: 'Archive Section',
      subtitle: '영구 지식 보관소',
      desc: 'Summary pages at the back for distilling monthly themes, key takeaways, and long-term project roadmaps.',
      img: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=900&h=800&fit=crop&auto=format',
    },
  ];

  return (
    <section
      id="product"
      style={{
        padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,120px)',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      <div className="fade-in visible" style={{ marginBottom: '64px' }}>
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
          Product Detail
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
          Inside the pages.
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
        className="detail-grid"
      >
        <div
          style={{
            background: 'var(--color-surface)',
            overflow: 'hidden',
            borderRadius: '2px',
            border: '1px solid var(--color-rule)',
            position: 'relative',
          }}
        >
          <img
            src={pages[activeTab].img}
            alt={pages[activeTab].title}
            style={{
              width: '100%',
              aspectRatio: '9/8',
              objectFit: 'cover',
              display: 'block',
              transition: 'opacity 0.4s ease',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              background: 'rgba(17, 17, 17, 0.85)',
              color: '#ffffff',
              padding: '8px 16px',
              fontSize: '0.75rem',
              backdropFilter: 'blur(4px)',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Eye size={12} color="var(--color-brand-yellow)" />
            {pages[activeTab].title} Preview
          </div>
        </div>

        <div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: '1.8rem',
              color: 'var(--color-ink)',
              margin: '0 0 4px 0',
            }}
          >
            Inside Pages
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: 'var(--color-ink-secondary)',
              marginBottom: '32px',
            }}
          >
            내지 확대컷 & 세부 레이아웃
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {pages.map((item, idx) => (
              <div
                key={item.title}
                onClick={() => setActiveTab(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '18px 16px',
                  borderBottom: '1px solid var(--color-rule)',
                  cursor: 'pointer',
                  background: activeTab === idx ? 'var(--color-surface)' : 'transparent',
                  borderLeft: activeTab === idx ? '3px solid var(--color-brand-yellow)' : '3px solid transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: '0.85rem',
                    color: activeTab === idx ? 'var(--color-brand-yellow)' : 'var(--color-ink-tertiary)',
                    fontWeight: 600,
                    minWidth: '28px',
                  }}
                >
                  0{idx + 1}
                </span>
                <div style={{ flex: 1 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: activeTab === idx ? 600 : 400,
                      fontSize: '1.15rem',
                      color: 'var(--color-ink)',
                      display: 'block',
                    }}
                  >
                    {item.title}
                  </span>
                  {activeTab === idx && (
                    <p
                      style={{
                        fontSize: '0.8125rem',
                        color: 'var(--color-ink-secondary)',
                        margin: '4px 0 0 0',
                        lineHeight: 1.5,
                        fontWeight: 300,
                      }}
                    >
                      {item.desc}
                    </p>
                  )}
                </div>
                <span
                  style={{
                    color: activeTab === idx ? 'var(--color-brand-blue)' : 'var(--color-rule)',
                    fontSize: '1.2rem',
                    transition: 'transform 0.2s',
                    transform: activeTab === idx ? 'translateX(4px)' : 'none',
                  }}
                >
                  →
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px' }}>
            <button onClick={onOpenPreorder} className="btn-primary">
              Pre-order Now
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

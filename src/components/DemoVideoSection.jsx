import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

export default function DemoVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      style={{
        padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,120px)',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      <div className="fade-in visible" style={{ textAlign: 'center', marginBottom: '56px' }}>
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
          Demo Video & Brand Film
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
          See Think X{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--color-brand-blue)' }}>
            in use.
          </em>
        </h2>
      </div>

      <div
        style={{
          position: 'relative',
          aspectRatio: '16/9',
          background: 'var(--color-surface)',
          overflow: 'hidden',
          cursor: 'pointer',
          maxWidth: '960px',
          margin: '0 auto',
          borderRadius: '2px',
          border: '1px solid var(--color-rule)',
          boxShadow: '0 16px 40px rgba(0,0,0,0.06)',
        }}
        onClick={() => setIsPlaying(true)}
      >
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&h=675&fit=crop&auto=format"
          alt="Think X notebook on a reading desk"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(17, 17, 17, 0.25)',
            transition: 'background 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(17, 17, 17, 0.35)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(17, 17, 17, 0.25)')}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
              transition: 'transform 0.2s ease',
              paddingLeft: '4px',
            }}
          >
            <Play size={28} color="var(--color-ink)" fill="var(--color-ink)" />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setIsPlaying(false)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              aspectRatio: '16/9',
              background: '#000000',
              borderRadius: '4px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPlaying(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: '#ffffff',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Think X Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}

import React, { useState } from 'react';
import { X, Check, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';

export default function PreorderModal({ isOpen, onClose }) {
  const [selectedEdition, setSelectedEdition] = useState('standard');
  const [quantity, setQuantity] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const editions = [
    {
      id: 'standard',
      name: 'Think X Standard Edition',
      subtitle: 'Single Notebook + Index Guide',
      price: 34,
      details: '192 pages, 90gsm cream paper, hardbound linen cover with foil stamp.',
    },
    {
      id: 'set',
      name: 'Think X System Duo Set',
      subtitle: '2 Notebooks + Archival Slipcase',
      price: 62,
      details: 'Includes 2 notebooks (Capture & Connect) + custom foil-stamped protective box.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(17, 17, 17, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '560px',
          background: '#ffffff',
          borderRadius: '4px',
          overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(0,0,0,0.2)',
          border: '1px solid var(--color-rule)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            background: 'var(--color-surface)',
            padding: '24px 32px',
            borderBottom: '1px solid var(--color-rule)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--color-ink)', margin: 0 }}>
              Pre-order Think X Notebook
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-ink-secondary)', margin: '4px 0 0 0', fontWeight: 300 }}>
              Graduation Edition by Suyeon Lee — Expected Shipping Oct 2026
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-ink-secondary)',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '32px' }}>
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(232, 184, 75, 0.15)',
                  color: 'var(--color-brand-yellow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}
              >
                <Check size={32} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--color-ink)', marginBottom: '12px' }}>
                Pre-order Confirmed!
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-secondary)', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto 24px', fontWeight: 300 }}>
                Thank you for supporting Think X. A confirmation receipt and updates regarding shipping will be sent to your email.
              </p>
              <button onClick={onClose} className="btn-primary">
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Select Edition */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '10px' }}>
                  Select Edition
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {editions.map((ed) => (
                    <div
                      key={ed.id}
                      onClick={() => setSelectedEdition(ed.id)}
                      style={{
                        padding: '16px 20px',
                        borderRadius: '2px',
                        border: selectedEdition === ed.id ? '2px solid var(--color-brand-yellow)' : '1px solid var(--color-rule)',
                        background: selectedEdition === ed.id ? 'rgba(232, 184, 75, 0.06)' : '#ffffff',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div>
                        <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-ink)', display: 'block' }}>
                          {ed.name}
                        </span>
                        <span style={{ fontSize: '0.78rem', color: 'var(--color-ink-secondary)', display: 'block', marginTop: '2px', fontWeight: 300 }}>
                          {ed.details}
                        </span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.2rem', color: 'var(--color-ink)' }}>
                        ${ed.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
                  Email Address for Shipping Notifications
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1px solid var(--color-rule)',
                    borderRadius: '2px',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
                    Quantity
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      border: '1px solid var(--color-rule)',
                      borderRadius: '2px',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-body)',
                      background: '#ffffff',
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((q) => (
                      <option key={q} value={q}>
                        {q} {q === 1 ? 'Copy' : 'Copies'}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ flex: 1, textAlign: 'right' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-ink-tertiary)', display: 'block' }}>Total</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--color-ink)' }}>
                    ${(editions.find((e) => e.id === selectedEdition).price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', fontSize: '0.75rem', color: 'var(--color-ink-tertiary)', background: 'var(--color-surface)', padding: '12px 16px', borderRadius: '2px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Truck size={14} /> Global Shipping
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ShieldCheck size={14} /> Guaranteed 90gsm Quality
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <ShoppingBag size={16} />
                Confirm Pre-order Reservation
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Plus, Tag, Link2, Sparkles, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export default function InteractiveNoteSimulator() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      page: 12,
      date: '2026-08-01',
      title: 'Active recall vs passive recording',
      content: 'True learning happens when the brain re-engages with recorded information rather than transcribing verbatim.',
      tags: ['Cognition', 'Memory', 'Learning'],
      connectedTo: [2],
    },
    {
      id: 2,
      page: 14,
      date: '2026-08-02',
      title: 'Spatial organization of paper',
      content: 'Physical margins provide boundaries that ground abstract thoughts into physical reality.',
      tags: ['Design', 'Paper', 'Cognition'],
      connectedTo: [1],
    },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [selectedTags, setSelectedTags] = useState(['Design']);
  const [activeView, setActiveView] = useState('capture'); // 'capture' | 'index' | 'connection'

  const availableTags = ['Cognition', 'Memory', 'Learning', 'Design', 'Paper', 'Systems', 'Philosophy', 'Synthesis'];

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newEntry = {
      id: Date.now(),
      page: notes.length * 2 + 16,
      date: new Date().toISOString().split('T')[0],
      title: newTitle,
      content: newContent || 'No additional content provided.',
      tags: selectedTags.length > 0 ? selectedTags : ['Thought'],
      connectedTo: [1],
    };

    setNotes([newEntry, ...notes]);
    setNewTitle('');
    setNewContent('');
  };

  return (
    <section
      id="simulator"
      style={{
        padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,120px)',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      <div className="fade-in visible" style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--color-surface)',
            padding: '6px 16px',
            borderRadius: '20px',
            border: '1px solid var(--color-rule)',
            marginBottom: '16px',
          }}
        >
          <Sparkles size={14} color="var(--color-brand-yellow)" />
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-ink)' }}>
            Interactive Demo Sandbox
          </span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            lineHeight: 1.2,
            color: 'var(--color-ink)',
            marginBottom: '16px',
          }}
        >
          Experience the Think X Notebook Loop
        </h2>
        <p
          style={{
            fontSize: '0.95rem',
            color: 'var(--color-ink-secondary)',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 300,
          }}
        >
          Test how capturing a thought automatically generates keyword indexing and maps connections to your existing knowledge base.
        </p>
      </div>

      {/* Simulator Container */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '4px',
          border: '1px solid var(--color-rule)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
          overflow: 'hidden',
        }}
      >
        {/* Navigation Tabs */}
        <div
          style={{
            background: 'var(--color-surface)',
            borderBottom: '1px solid var(--color-rule)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 24px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setActiveView('capture')}
              style={{
                padding: '16px 20px',
                background: activeView === 'capture' ? '#ffffff' : 'transparent',
                border: 'none',
                borderBottom: activeView === 'capture' ? '2px solid var(--color-brand-yellow)' : '2px solid transparent',
                fontSize: '0.875rem',
                fontWeight: activeView === 'capture' ? 600 : 400,
                color: 'var(--color-ink)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <BookOpen size={16} color={activeView === 'capture' ? 'var(--color-brand-yellow)' : 'var(--color-ink-tertiary)'} />
              1. Capture Page
            </button>

            <button
              onClick={() => setActiveView('index')}
              style={{
                padding: '16px 20px',
                background: activeView === 'index' ? '#ffffff' : 'transparent',
                border: 'none',
                borderBottom: activeView === 'index' ? '2px solid var(--color-brand-yellow)' : '2px solid transparent',
                fontSize: '0.875rem',
                fontWeight: activeView === 'index' ? 600 : 400,
                color: 'var(--color-ink)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Tag size={16} color={activeView === 'index' ? 'var(--color-brand-yellow)' : 'var(--color-ink-tertiary)'} />
              2. Keyword Map ({notes.length})
            </button>

            <button
              onClick={() => setActiveView('connection')}
              style={{
                padding: '16px 20px',
                background: activeView === 'connection' ? '#ffffff' : 'transparent',
                border: 'none',
                borderBottom: activeView === 'connection' ? '2px solid var(--color-brand-yellow)' : '2px solid transparent',
                fontSize: '0.875rem',
                fontWeight: activeView === 'connection' ? 600 : 400,
                color: 'var(--color-ink)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Link2 size={16} color={activeView === 'connection' ? 'var(--color-brand-yellow)' : 'var(--color-ink-tertiary)'} />
              3. Connection Network
            </button>
          </div>

          <span style={{ fontSize: '0.75rem', color: 'var(--color-ink-tertiary)', padding: '12px 0' }}>
            Page {notes[0]?.page || 16} / 192 — Think X System
          </span>
        </div>

        {/* Tab Content */}
        <div style={{ padding: '36px' }}>
          {activeView === 'capture' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px' }} className="detail-grid">
              {/* Form */}
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--color-ink)', marginBottom: '8px' }}>
                  Write a New Thought Entry
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-secondary)', marginBottom: '24px', fontWeight: 300 }}>
                  Fill in the structured capture fields below:
                </p>

                <form onSubmit={handleAddNote} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
                      Entry Title / Core Statement
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Iterative thinking compounds clarity"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
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

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
                      Thought Content / Observations
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Detail your synthesis, question, or reasoning..."
                      value={newContent}
                      onChange={(e) => setNewContent(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        border: '1px solid var(--color-rule)',
                        borderRadius: '2px',
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        resize: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '8px' }}>
                      Assign Keyword Tags
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {availableTags.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => toggleTag(tag)}
                          style={{
                            padding: '6px 12px',
                            fontSize: '0.78rem',
                            borderRadius: '12px',
                            border: selectedTags.includes(tag) ? '1px solid var(--color-brand-yellow)' : '1px solid var(--color-rule)',
                            background: selectedTags.includes(tag) ? 'rgba(232, 184, 75, 0.15)' : 'var(--color-surface)',
                            color: selectedTags.includes(tag) ? 'var(--color-ink)' : 'var(--color-ink-secondary)',
                            fontWeight: selectedTags.includes(tag) ? 600 : 400,
                            cursor: 'pointer',
                          }}
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button type="submit" className="btn-primary" style={{ marginTop: '8px' }}>
                    <Plus size={16} />
                    Log Entry & Index Automatically
                  </button>
                </form>
              </div>

              {/* Live Preview Notebook Spread */}
              <div
                style={{
                  background: 'var(--color-surface)',
                  padding: '28px',
                  borderRadius: '2px',
                  border: '1px solid var(--color-rule)',
                  fontFamily: 'var(--font-display)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-rule)', paddingBottom: '12px', marginBottom: '20px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-brand-yellow)', fontStyle: 'italic', fontWeight: 600 }}>
                    THINK X — CAPTURE PAGE #{notes[0]?.page || 16}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-ink-tertiary)' }}>
                    DATE: {new Date().toISOString().split('T')[0]}
                  </span>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-ink-tertiary)', display: 'block', marginBottom: '4px' }}>
                    KEYWORD TAGS
                  </span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {selectedTags.map((t) => (
                      <span key={t} style={{ background: '#ffffff', border: '1px solid var(--color-rule)', padding: '2px 8px', fontSize: '0.75rem', fontStyle: 'italic' }}>
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <h4 style={{ fontSize: '1.4rem', fontWeight: 500, color: 'var(--color-ink)', marginBottom: '12px', lineHeight: 1.3 }}>
                  {newTitle || 'Title of your entry will appear here...'}
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-secondary)', lineHeight: 1.7, fontStyle: 'italic' }}>
                  {newContent || 'Your thoughts and observations formatted on acid-free 90gsm cream paper grid...'}
                </p>

                <div style={{ marginTop: '36px', paddingTop: '16px', borderTop: '1px dashed var(--color-rule)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-brand-blue)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Link2 size={12} /> Auto-linked to Page 12 (Cognition)
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-ink-tertiary)' }}>
                    Think X System
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeView === 'index' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--color-ink)', margin: 0 }}>
                    Front-of-Book Keyword Map
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-secondary)', margin: '4px 0 0 0', fontWeight: 300 }}>
                    Every recorded tag automatically indexes with exact page references:
                  </p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                {notes.map((n) => (
                  <div
                    key={n.id}
                    style={{
                      border: '1px solid var(--color-rule)',
                      borderRadius: '2px',
                      padding: '20px',
                      background: n.id === notes[0].id ? 'rgba(232, 184, 75, 0.08)' : '#ffffff',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-brand-yellow)', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
                        PAGE #{n.page}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-ink-tertiary)' }}>{n.date}</span>
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--color-ink)', marginBottom: '8px' }}>
                      {n.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-secondary)', lineHeight: 1.5, marginBottom: '12px', fontWeight: 300 }}>
                      {n.content}
                    </p>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {n.tags.map((t) => (
                        <span key={t} style={{ fontSize: '0.72rem', background: 'var(--color-surface)', padding: '2px 6px', border: '1px solid var(--color-rule)' }}>
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeView === 'connection' && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--color-ink)', marginBottom: '8px' }}>
                Thought Connection Graph
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-secondary)', marginBottom: '24px', fontWeight: 300 }}>
                Visualizing relationships between your entries across days and pages:
              </p>

              <div
                style={{
                  background: 'var(--color-surface)',
                  padding: '48px 24px',
                  borderRadius: '2px',
                  border: '1px solid var(--color-rule)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '24px',
                  flexWrap: 'wrap',
                }}
              >
                {notes.map((n, i) => (
                  <React.Fragment key={n.id}>
                    <div
                      style={{
                        background: '#ffffff',
                        border: '2px solid var(--color-brand-blue)',
                        padding: '20px 24px',
                        borderRadius: '4px',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.04)',
                        maxWidth: '240px',
                        textAlign: 'center',
                      }}
                    >
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-brand-yellow)', display: 'block', marginBottom: '4px' }}>
                        Page {n.page}
                      </span>
                      <h5 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--color-ink)', margin: '0 0 6px 0' }}>
                        {n.title}
                      </h5>
                      <span style={{ fontSize: '0.72rem', color: 'var(--color-ink-tertiary)' }}>
                        #{n.tags.join(', #')}
                      </span>
                    </div>
                    {i < notes.length - 1 && (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                        <Link2 size={20} color="var(--color-brand-yellow)" />
                        <span style={{ fontSize: '0.7rem', color: 'var(--color-ink-tertiary)', fontStyle: 'italic' }}>
                          Shared concept link
                        </span>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

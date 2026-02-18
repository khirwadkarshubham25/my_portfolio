'use client'
import { useState } from 'react'
import data from '../../data/projects.json'

const C = { primary: '#00ff9f', secondary: '#00d4ff', accent: '#ff006e', dark: '#0a0e27', light: '#1a1f3a' }

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [activeTag, setActiveTag] = useState<string | null>(null)

  // Collect all unique tags for filter bar
  const allTags = Array.from(new Set(data.projects.flatMap(p => p.tags)))

  const filtered = activeTag
    ? data.projects.filter(p => p.tags.includes(activeTag))
    : data.projects

  const [featured, ...rest] = filtered

  return (
    <div style={{ padding: '2.5rem 2rem 3rem', fontFamily: 'sans-serif', color: '#fff', minHeight: '100%', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: '2rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-10px', left: '-4px', fontSize: '5rem', fontWeight: 900, color: `${C.primary}06`, userSelect: 'none', letterSpacing: '-4px', lineHeight: 1 }}>
            WORK
          </div>
          <div style={{ position: 'relative' }}>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '3px', color: C.secondary, textTransform: 'uppercase', marginBottom: '0.5rem', padding: '4px 12px', background: `${C.secondary}15`, borderRadius: '20px', border: `1px solid ${C.secondary}30` }}>
              Portfolio
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, background: `linear-gradient(135deg, #fff 30%, ${C.secondary})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', margin: '0.4rem 0 0.75rem', lineHeight: 1.1, letterSpacing: '-1px' }}>
              Featured Projects
            </h2>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ height: '3px', width: '40px', background: `linear-gradient(90deg, ${C.primary}, ${C.secondary})`, borderRadius: '4px' }} />
              <div style={{ height: '3px', width: '20px', background: `${C.secondary}60`, borderRadius: '4px' }} />
              <div style={{ height: '3px', width: '8px', background: `${C.primary}30`, borderRadius: '4px' }} />
            </div>
            <p style={{ color: '#64748b', fontSize: '0.88rem' }}>
              {data.projects.length} projects · Click a tag to filter
            </p>
          </div>
        </div>

        {/* ── Tag filter bar ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2rem' }}>
          <button
            onClick={() => setActiveTag(null)}
            style={{
              padding: '5px 14px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 700,
              border: `1px solid ${!activeTag ? C.primary : C.primary + '30'}`,
              background: !activeTag ? `${C.primary}20` : 'transparent',
              color: !activeTag ? C.primary : '#64748b',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
          >
            All
          </button>
          {allTags.map((tag, i) => (
            <button key={i}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              style={{
                padding: '5px 14px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 600,
                border: `1px solid ${activeTag === tag ? C.secondary + '60' : C.primary + '20'}`,
                background: activeTag === tag ? `${C.secondary}20` : 'transparent',
                color: activeTag === tag ? C.secondary : '#64748b',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* ── Featured project (first card, full width) ── */}
        {featured && (
          <div
            onMouseEnter={() => setHovered(-1)}
            onMouseLeave={() => setHovered(null)}
            style={{
              marginBottom: '1.25rem',
              borderRadius: '20px',
              overflow: 'hidden',
              border: `1px solid ${hovered === -1 ? C.primary + '50' : C.primary + '18'}`,
              transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
              boxShadow: hovered === -1 ? `0 8px 40px ${C.primary}15` : 'none',
            }}
          >
            {/* Top gradient bar */}
            <div style={{ height: '4px', background: featured.gradient }} />

            <div style={{
              padding: '1.75rem',
              background: hovered === -1
                ? `linear-gradient(135deg, ${C.light}90, ${C.dark})`
                : `linear-gradient(135deg, ${C.light}50, ${C.dark})`,
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '1.5rem',
              alignItems: 'start',
              transition: 'background 0.3s',
            }}>
              <div>
                {/* Featured badge + icon row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.9rem' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: featured.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', flexShrink: 0, boxShadow: `0 4px 20px rgba(0,0,0,0.3)` }}>
                    {featured.emoji}
                  </div>
                  <span style={{ padding: '3px 10px', borderRadius: '20px', fontSize: '0.65rem', fontWeight: 800, background: `${C.primary}20`, color: C.primary, border: `1px solid ${C.primary}40`, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    ★ Featured
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: hovered === -1 ? '#fff' : '#e2e8f0', marginBottom: '0.6rem', lineHeight: 1.3, transition: 'color 0.3s' }}>
                  {featured.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.8, marginBottom: '1rem', maxWidth: '520px' }}>
                  {featured.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.25rem' }}>
                  {featured.tags.map((tag, j) => (
                    <span key={j} style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 600, background: `${C.primary}15`, color: C.primary, border: `1px solid ${C.primary}25` }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  {/* <a href={featured.link} style={{
                    padding: '8px 20px', borderRadius: '10px', fontSize: '0.82rem', fontWeight: 700,
                    background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
                    color: C.dark, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px',
                  }}>
                    ↗ Live Demo
                  </a> */}
                  <a href={featured.github} style={{
                    padding: '8px 20px', borderRadius: '10px', fontSize: '0.82rem', fontWeight: 700,
                    background: '#ffffff12', color: '#e2e8f0', textDecoration: 'none',
                    border: '1px solid #ffffff20', display: 'flex', alignItems: 'center', gap: '6px',
                  }}>
                    ⌥ Source Code
                  </a>
                </div>
              </div>

              {/* Right side: decorative project number */}
              <div style={{ opacity: 0.06, fontSize: '7rem', fontWeight: 900, lineHeight: 1, color: '#fff', userSelect: 'none', alignSelf: 'center' }}>
                01
              </div>
            </div>
          </div>
        )}

        {/* ── Rest of the project cards ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {rest.map((p, i) => {
            const idx = i + 1 // offset because featured is 0
            const num = String(idx + 1).padStart(2, '0')
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  borderRadius: '18px',
                  overflow: 'hidden',
                  border: `1px solid ${hovered === idx ? C.primary + '40' : C.primary + '12'}`,
                  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                  transform: hovered === idx ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: hovered === idx ? `0 12px 30px rgba(0,0,0,0.3)` : 'none',
                  background: hovered === idx ? `${C.light}80` : `${C.light}40`,
                  display: 'flex', flexDirection: 'column',
                }}
              >
                {/* Gradient top bar */}
                <div style={{ height: '3px', background: p.gradient }} />

                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.7rem', flex: 1 }}>
                  {/* Icon + number row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: p.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', boxShadow: `0 4px 12px rgba(0,0,0,0.25)` }}>
                      {p.emoji}
                    </div>
                    <span style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', opacity: 0.06, lineHeight: 1, userSelect: 'none' }}>
                      {num}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: hovered === idx ? C.primary : '#e2e8f0', transition: 'color 0.3s', lineHeight: 1.3 }}>
                    {p.title}
                  </h3>

                  <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.7, flex: 1 }}>
                    {p.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {p.tags.map((tag, j) => (
                      <span key={j} style={{
                        padding: '2px 9px', borderRadius: '20px', fontSize: '0.67rem', fontWeight: 600,
                        background: activeTag === tag ? `${C.secondary}25` : `${C.primary}12`,
                        color: activeTag === tag ? C.secondary : C.primary,
                        border: `1px solid ${activeTag === tag ? C.secondary + '40' : C.primary + '20'}`,
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '8px', paddingTop: '0.25rem', borderTop: `1px solid ${C.primary}10` }}>
                    {/* <a href={p.link} style={{
                      flex: 1, padding: '7px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700,
                      background: `${C.primary}15`, color: C.primary, textDecoration: 'none',
                      border: `1px solid ${C.primary}25`, textAlign: 'center', transition: 'background 0.2s',
                    }}>
                      ↗ Live
                    </a> */}
                    <a href={p.github} style={{
                      flex: 1, padding: '7px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700,
                      background: '#ffffff08', color: '#94a3b8', textDecoration: 'none',
                      border: '1px solid #ffffff12', textAlign: 'center', transition: 'background 0.2s',
                    }}>
                      ⌥ Code
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── GitHub CTA ── */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem',
          padding: '1.25rem 1.75rem', borderRadius: '16px',
          background: `linear-gradient(135deg, ${C.primary}10, ${C.secondary}08)`,
          border: `1px solid ${C.primary}20`,
        }}>
          <div>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>Want to see more?</p>
            <p style={{ fontSize: '0.75rem', color: '#64748b' }}>All my open source work lives on GitHub</p>
          </div>
          <a href={data.githubUrl} target="_blank" rel="noopener noreferrer"
            style={{
              padding: '10px 22px', borderRadius: '10px', whiteSpace: 'nowrap',
              background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
              color: C.dark, fontWeight: 800, fontSize: '0.85rem', textDecoration: 'none',
              flexShrink: 0,
            }}>
            View on GitHub →
          </a>
        </div>

      </div>
    </div>
  )
}
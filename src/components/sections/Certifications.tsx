'use client'
import { useState } from 'react'
import data from '../../data/certifications.json'

const C = { primary: '#00ff9f', secondary: '#00d4ff', accent: '#ff006e', dark: '#0a0e27', light: '#1a1f3a' }

export default function Certifications() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null)
  const [filterSkill, setFilterSkill] = useState<string | null>(null)

  // Collect all unique skills
  const allSkills = Array.from(new Set(data.certifications.flatMap(c => c.skills)))

  const filtered = filterSkill
    ? data.certifications.filter(c => c.skills.includes(filterSkill))
    : data.certifications

  const [featured, ...rest] = filtered

  return (
    <div style={{ padding: '2.5rem 2rem 3rem', fontFamily: 'sans-serif', color: '#fff', minHeight: '100%', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: '2rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-10px', left: '-4px', fontSize: '5rem', fontWeight: 900, color: `${C.accent}06`, userSelect: 'none', letterSpacing: '-4px', lineHeight: 1 }}>
            CERTS
          </div>
          <div style={{ position: 'relative' }}>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '3px', color: C.accent, textTransform: 'uppercase' as const, marginBottom: '0.5rem', padding: '4px 12px', background: `${C.accent}15`, borderRadius: '20px', border: `1px solid ${C.accent}30` }}>
              Professional Credentials
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, background: `linear-gradient(135deg, #fff 30%, ${C.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', margin: '0.4rem 0 0.75rem', lineHeight: 1.1, letterSpacing: '-1px' }}>
              Certifications & Badges
            </h2>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ height: '3px', width: '40px', background: `linear-gradient(90deg, ${C.accent}, ${C.primary})`, borderRadius: '4px' }} />
              <div style={{ height: '3px', width: '20px', background: `${C.accent}60`, borderRadius: '4px' }} />
              <div style={{ height: '3px', width: '8px', background: `${C.primary}30`, borderRadius: '4px' }} />
            </div>
            <p style={{ color: '#64748b', fontSize: '0.88rem' }}>
              {data.certifications.length} Professional Certifications · {data.badges.length} Community Badges
            </p>
          </div>
        </div>

        {/* ── Skill filter ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '1.75rem' }}>
          <button
            onClick={() => setFilterSkill(null)}
            style={{
              padding: '5px 14px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 700,
              border: `1px solid ${!filterSkill ? C.accent : C.accent + '30'}`,
              background: !filterSkill ? `${C.accent}25` : 'transparent',
              color: !filterSkill ? C.accent : '#64748b',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
          >
            All
          </button>
          {allSkills.map((skill, i) => (
            <button key={i}
              onClick={() => setFilterSkill(filterSkill === skill ? null : skill)}
              style={{
                padding: '5px 14px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 600,
                border: `1px solid ${filterSkill === skill ? C.accent + '60' : C.primary + '20'}`,
                background: filterSkill === skill ? `${C.accent}20` : 'transparent',
                color: filterSkill === skill ? C.accent : '#64748b',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
            >
              {skill}
            </button>
          ))}
        </div>

        {/* ── Featured cert (first one, full width) ── */}
        {featured && (
          <div
            onMouseEnter={() => setHovered(-1)}
            onMouseLeave={() => setHovered(null)}
            style={{
              marginBottom: '1.5rem',
              borderRadius: '20px', overflow: 'hidden',
              border: `1px solid ${hovered === -1 ? C.accent + '50' : C.accent + '18'}`,
              transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
              boxShadow: hovered === -1 ? `0 12px 40px ${C.accent}20` : 'none',
            }}
          >
            {/* Gradient bar */}
            <div style={{ height: '4px', background: featured.gradient }} />

            <div style={{
              padding: '1.75rem 2rem',
              background: hovered === -1
                ? `linear-gradient(135deg, ${C.light}90, ${C.dark})`
                : `linear-gradient(135deg, ${C.light}55, ${C.dark})`,
              display: 'grid', gridTemplateColumns: '1fr auto',
              gap: '1.5rem', alignItems: 'start',
              transition: 'background 0.3s',
              position: 'relative',
            }}>
              {/* Watermark emoji */}
              <div style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '7rem', opacity: 0.04, userSelect: 'none' }}>
                {featured.emoji}
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Badge + icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1rem' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: featured.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', flexShrink: 0, boxShadow: '0 6px 25px rgba(0,0,0,0.3)' }}>
                    {featured.emoji}
                  </div>
                  <span style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 800, background: `${C.accent}25`, color: C.accent, border: `1px solid ${C.accent}50`, letterSpacing: '0.5px', textTransform: 'uppercase' as const }}>
                    ⭐ Featured
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: hovered === -1 ? '#fff' : '#e2e8f0', marginBottom: '0.5rem', lineHeight: 1.3, transition: 'color 0.3s' }}>
                  {featured.name}
                </h3>
                <p style={{ fontSize: '0.95rem', color: C.accent, fontWeight: 600, marginBottom: '0.75rem' }}>
                  {featured.issuer}
                </p>

                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.78rem', color: '#64748b', marginBottom: '1rem' }}>
                  <span>📅 {featured.date}</span>
                  <span>•</span>
                  <span>🔖 {featured.credentialId}</span>
                </div>

                {/* Skills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem' }}>
                  {featured.skills.map((s, j) => (
                    <span key={j} style={{
                      padding: '4px 12px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 600,
                      background: filterSkill === s ? `${C.accent}25` : `${C.primary}15`,
                      color: filterSkill === s ? C.accent : C.primary,
                      border: `1px solid ${filterSkill === s ? C.accent + '40' : C.primary + '25'}`,
                    }}>
                      {s}
                    </span>
                  ))}
                </div>

                <a href={featured.verifyUrl} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '9px 20px', borderRadius: '10px',
                  background: `linear-gradient(135deg, ${C.accent}, #a855f7)`,
                  color: '#fff', fontWeight: 700, fontSize: '0.82rem',
                  textDecoration: 'none', transition: 'transform 0.2s',
                }}>
                  ↗ Verify Credential
                </a>
              </div>

              {/* Year badge */}
              <div style={{ textAlign: 'center', padding: '1rem', borderRadius: '14px', background: `${C.accent}15`, border: `1px solid ${C.accent}30`, minWidth: '90px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: C.accent, lineHeight: 1 }}>
                  {featured.date.split(' ')[1]}
                </div>
                <div style={{ fontSize: '0.65rem', color: '#64748b', marginTop: '4px', fontWeight: 600 }}>
                  Year Earned
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Rest of certs grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {rest.map((cert, i) => {
            const idx = i + 1
            const isHovered = hovered === idx
            return (
              <div key={i}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  borderRadius: '18px', overflow: 'hidden',
                  border: `1px solid ${isHovered ? C.accent + '40' : C.primary + '12'}`,
                  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: isHovered ? '0 12px 30px rgba(0,0,0,0.3)' : 'none',
                  background: isHovered ? `${C.light}80` : `${C.light}40`,
                  position: 'relative',
                }}
              >
                {/* Gradient bar */}
                <div style={{ height: '3px', background: cert.gradient }} />

                <div style={{ padding: '1.25rem', position: 'relative' }}>
                  {/* Watermark emoji */}
                  <div style={{ position: 'absolute', top: '10px', right: '12px', fontSize: '2.5rem', opacity: 0.08, userSelect: 'none' }}>
                    {cert.emoji}
                  </div>

                  {/* Icon */}
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: cert.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', marginBottom: '0.75rem', boxShadow: '0 4px 15px rgba(0,0,0,0.25)', position: 'relative', zIndex: 1 }}>
                    {cert.emoji}
                  </div>

                  <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: isHovered ? C.accent : '#e2e8f0', marginBottom: '4px', transition: 'color 0.3s', lineHeight: 1.3 }}>
                    {cert.name}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: C.accent, fontWeight: 600, marginBottom: '8px' }}>
                    {cert.issuer}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.7rem', color: '#64748b', marginBottom: '10px' }}>
                    <span>📅 {cert.date}</span>
                    <span>🔖 {cert.credentialId}</span>
                  </div>

                  {/* Skills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '12px', minHeight: '50px' }}>
                    {cert.skills.map((s, j) => (
                      <span key={j} style={{
                        padding: '2px 8px', borderRadius: '20px', fontSize: '0.65rem', fontWeight: 600,
                        background: filterSkill === s ? `${C.accent}20` : `${C.primary}12`,
                        color: filterSkill === s ? C.accent : C.primary,
                        border: `1px solid ${filterSkill === s ? C.accent + '40' : C.primary + '20'}`,
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>

                  <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.72rem', color: C.secondary, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    ↗ Verify
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Badges section ── */}
        <div style={{ borderRadius: '18px', overflow: 'hidden', border: `1px solid ${C.secondary}18`, marginBottom: '1.75rem' }}>
          <div style={{ height: '3px', background: `linear-gradient(90deg, ${C.secondary}, ${C.primary})` }} />
          <div style={{ padding: '1.5rem 1.75rem', background: `linear-gradient(135deg, ${C.light}60, ${C.dark})` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ height: '1px', flex: 1, background: `linear-gradient(90deg, transparent, ${C.secondary}30)` }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: C.secondary, letterSpacing: '2px', textTransform: 'uppercase' as const, whiteSpace: 'nowrap' as const }}>
                🏅 Community Badges
              </span>
              <div style={{ height: '1px', flex: 1, background: `linear-gradient(90deg, ${C.secondary}30, transparent)` }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.75rem' }}>
              {data.badges.map((b, i) => (
                <div key={i}
                  onMouseEnter={() => setHoveredBadge(i)}
                  onMouseLeave={() => setHoveredBadge(null)}
                  style={{
                    textAlign: 'center', padding: '1rem', borderRadius: '14px',
                    background: hoveredBadge === i ? `${C.light}70` : `${C.light}40`,
                    border: `1px solid ${hoveredBadge === i ? C.secondary + '40' : C.primary + '12'}`,
                    transition: 'all 0.2s', cursor: 'default',
                    transform: hoveredBadge === i ? 'translateY(-3px) scale(1.02)' : 'translateY(0) scale(1)',
                  }}
                >
                  <div style={{ fontSize: '2.2rem', marginBottom: '8px', filter: hoveredBadge === i ? 'brightness(1.2)' : 'brightness(1)', transition: 'filter 0.2s' }}>
                    {b.icon}
                  </div>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, color: hoveredBadge === i ? '#fff' : '#e2e8f0', marginBottom: '3px', lineHeight: 1.3, transition: 'color 0.2s' }}>
                    {b.name}
                  </p>
                  <p style={{ fontSize: '0.65rem', color: '#64748b' }}>
                    {b.platform}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
          {data.stats.map((s, i) => {
            const colors = [C.accent, C.secondary, C.primary, C.accent]
            return (
              <div key={i} style={{ textAlign: 'center', padding: '1rem', borderRadius: '14px', background: `${C.light}40`, border: `1px solid ${colors[i]}20` }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: colors[i], lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '4px', fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
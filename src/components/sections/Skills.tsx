'use client'
import { useState, useEffect } from 'react'
import data from '../../data/skills.json'

const C = { primary: '#00ff9f', secondary: '#00d4ff', accent: '#ff006e', dark: '#0a0e27', light: '#1a1f3a' }

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)
  const [animated, setAnimated] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  // Trigger bar animation when tab changes
  useEffect(() => {
    setAnimated(false)
    const t = setTimeout(() => setAnimated(true), 80)
    return () => clearTimeout(t)
  }, [activeTab])

  const cat = data.categories[activeTab]

  // Color per level range
  const levelColor = (level: number) => {
    if (level >= 90) return C.primary
    if (level >= 80) return C.secondary
    if (level >= 70) return '#a855f7'
    return '#f97316'
  }

  const levelLabel = (level: number) => {
    if (level >= 90) return 'Expert'
    if (level >= 80) return 'Advanced'
    if (level >= 70) return 'Proficient'
    return 'Intermediate'
  }

  return (
    <div style={{ padding: '2.5rem 2rem 3rem', fontFamily: 'sans-serif', color: '#fff', minHeight: '100%', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: '2rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-10px', left: '-4px', fontSize: '5rem', fontWeight: 900, color: `${C.primary}06`, userSelect: 'none', letterSpacing: '-4px', lineHeight: 1 }}>
            SKILLS
          </div>
          <div style={{ position: 'relative' }}>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '3px', color: C.accent, textTransform: 'uppercase' as const, marginBottom: '0.5rem', padding: '4px 12px', background: `${C.accent}15`, borderRadius: '20px', border: `1px solid ${C.accent}30` }}>
              Expertise
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, background: `linear-gradient(135deg, #fff 30%, ${C.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', margin: '0.4rem 0 0.75rem', lineHeight: 1.1, letterSpacing: '-1px' }}>
              Technical Skills
            </h2>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <div style={{ height: '3px', width: '40px', background: `linear-gradient(90deg, ${C.primary}, ${C.secondary})`, borderRadius: '4px' }} />
              <div style={{ height: '3px', width: '20px', background: `${C.secondary}60`, borderRadius: '4px' }} />
              <div style={{ height: '3px', width: '8px', background: `${C.primary}30`, borderRadius: '4px' }} />
            </div>
          </div>
        </div>

        {/* ── Category tab bar ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.75rem' }}>
          {data.categories.map((c, i) => (
            <button key={i} onClick={() => setActiveTab(i)}
              style={{
                padding: '7px 16px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 700,
                cursor: 'pointer', transition: 'all 0.25s ease', border: 'none',
                background: activeTab === i ? c.gradient : `${C.light}60`,
                color: activeTab === i ? '#fff' : '#64748b',
                boxShadow: activeTab === i ? '0 4px 15px rgba(0,0,0,0.25)' : 'none',
                transform: activeTab === i ? 'translateY(-1px)' : 'translateY(0)',
              }}
            >
              {c.category}
            </button>
          ))}
        </div>

        {/* ── Active category panel ── */}
        <div style={{
          borderRadius: '20px', overflow: 'hidden',
          border: `1px solid ${C.primary}18`,
          marginBottom: '1.75rem',
        }}>
          {/* Panel header */}
          <div style={{ height: '4px', background: cat.gradient }} />
          <div style={{
            padding: '1.5rem 1.75rem',
            background: `linear-gradient(135deg, ${C.light}70, ${C.dark})`,
          }}>
            {/* Category title row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '8px', background: cat.gradient, marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#fff', letterSpacing: '0.5px' }}>{cat.category}</span>
                </div>
                <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>
                  {cat.skills.length} skills · Avg {Math.round(cat.skills.reduce((a, s) => a + s.level, 0) / cat.skills.length)}%
                </p>
              </div>
              {/* Mini legend */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end' }}>
                {[{ label: 'Expert', color: C.primary, min: 90 }, { label: 'Advanced', color: C.secondary, min: 80 }, { label: 'Proficient', color: '#a855f7', min: 70 }].map((l, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '0.65rem', color: '#64748b' }}>{l.label}</span>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: l.color }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Skill bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cat.skills.map((skill, si) => {
                const color = levelColor(skill.level)
                const isHovered = hoveredSkill === `${activeTab}-${si}`
                return (
                  <div key={si}
                    onMouseEnter={() => setHoveredSkill(`${activeTab}-${si}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    style={{ cursor: 'default' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: isHovered ? '#fff' : '#e2e8f0', transition: 'color 0.2s' }}>
                          {skill.name}
                        </span>
                        <span style={{
                          fontSize: '0.6rem', fontWeight: 700, padding: '2px 7px', borderRadius: '20px',
                          background: `${color}20`, color, border: `1px solid ${color}40`,
                          opacity: isHovered ? 1 : 0, transition: 'opacity 0.2s',
                        }}>
                          {levelLabel(skill.level)}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color, transition: 'color 0.2s' }}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Track */}
                    <div style={{ height: '8px', background: `${C.dark}`, borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
                      {/* Filled bar */}
                      <div style={{
                        height: '100%',
                        width: animated ? `${skill.level}%` : '0%',
                        background: cat.gradient,
                        borderRadius: '10px',
                        transition: `width 0.8s cubic-bezier(0.4,0,0.2,1) ${si * 80}ms`,
                        position: 'relative',
                        overflow: 'hidden',
                      }}>
                        {/* Shimmer effect */}
                        <div style={{
                          position: 'absolute', top: 0, left: '-100%', width: '60%', height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                          animation: animated ? `skillShimmer 2s ease ${si * 80 + 800}ms 1` : 'none',
                        }} />
                      </div>
                      {/* Glow at tip */}
                      {isHovered && (
                        <div style={{
                          position: 'absolute', top: '-4px', left: `calc(${skill.level}% - 6px)`,
                          width: '14px', height: '14px', borderRadius: '50%',
                          background: color, boxShadow: `0 0 10px ${color}`,
                          border: `2px solid ${C.dark}`,
                          transition: 'all 0.2s',
                        }} />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── All categories overview (mini bars) ── */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '0.75rem', marginBottom: '1.75rem',
        }}>
          {data.categories.map((c, i) => {
            const avg = Math.round(c.skills.reduce((a, s) => a + s.level, 0) / c.skills.length)
            const isActive = activeTab === i
            return (
              <button key={i} onClick={() => setActiveTab(i)}
                style={{
                  padding: '0.9rem 1rem', borderRadius: '14px', cursor: 'pointer', textAlign: 'left',
                  background: isActive ? `${C.light}80` : `${C.light}30`,
                  border: `1px solid ${isActive ? C.primary + '40' : C.primary + '10'}`,
                  transition: 'all 0.25s ease', outline: 'none',
                  transform: isActive ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: isActive ? '#fff' : '#94a3b8' }}>{c.category}</span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: isActive ? C.primary : '#64748b' }}>{avg}%</span>
                </div>
                <div style={{ height: '4px', background: `${C.dark}`, borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${avg}%`, background: c.gradient, borderRadius: '4px', transition: 'width 0.6s ease' }} />
                </div>
              </button>
            )
          })}
        </div>

        {/* ── Other tech cloud ── */}
        <div style={{
          padding: '1.5rem 1.75rem', borderRadius: '18px',
          background: `linear-gradient(135deg, ${C.dark}, ${C.light}50)`,
          border: `1px solid ${C.primary}18`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ height: '1px', flex: 1, background: `linear-gradient(90deg, transparent, ${C.primary}30)` }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: C.primary, letterSpacing: '2px', textTransform: 'uppercase' as const, whiteSpace: 'nowrap' as const }}>
              Also Familiar With
            </span>
            <div style={{ height: '1px', flex: 1, background: `linear-gradient(90deg, ${C.primary}30, transparent)` }} />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {data.otherTech.map((tech, i) => (
              <span key={i}
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
                style={{
                  padding: '5px 14px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 500,
                  background: hoveredTech === tech ? `${C.primary}20` : `${C.light}60`,
                  color: hoveredTech === tech ? C.primary : '#64748b',
                  border: `1px solid ${hoveredTech === tech ? C.primary + '40' : C.primary + '15'}`,
                  transition: 'all 0.2s ease', cursor: 'default',
                  transform: hoveredTech === tech ? 'translateY(-2px)' : 'translateY(0)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes skillShimmer {
          0% { left: -100%; }
          100% { left: 150%; }
        }
      `}</style>
    </div>
  )
}
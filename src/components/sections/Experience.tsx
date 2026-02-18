'use client'
import { useState } from 'react'
import data from '../../data/experience.json'

const C = { primary: '#00ff9f', secondary: '#00d4ff', accent: '#ff006e', dark: '#0a0e27', light: '#1a1f3a' }

export default function Experience() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [expanded, setExpanded] = useState<number[]>([0]) // First card expanded by default

  const toggleExpand = (i: number) => {
    setExpanded(prev => 
      prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
    )
  }

  // Calculate total years by summing each experience duration
  const totalYears = (() => {
    const monthMap: { [key: string]: number } = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11,
      'January': 0, 'February': 1, 'March': 2, 'April': 3, 'June': 5,
      'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
    }

    const parseDate = (dateStr: string): Date => {
      if (dateStr === 'Present') {
        return new Date()
      }
      // Try to match "Month Year" format (e.g., "Jan 2020" or "January 2020")
      const match = dateStr.match(/(\w+)\s+(\d{4})/)
      if (match) {
        const monthName = match[1]
        const year = parseInt(match[2])
        const month = monthMap[monthName] ?? 0
        return new Date(year, month, 1)
      }
      // Fallback: just year
      const yearMatch = dateStr.match(/\d{4}/)
      if (yearMatch) {
        return new Date(parseInt(yearMatch[0]), 0, 1)
      }
      return new Date()
    }

    // Sum up duration of each individual experience
    const totalMonths = data.experiences.reduce((sum, exp) => {
      const [start, end] = exp.period.split(' – ')
      const startDate = parseDate(start.trim())
      const endDate = parseDate(end.trim())
      
      const diffMs = endDate.getTime() - startDate.getTime()
      const diffMonths = diffMs / (1000 * 60 * 60 * 24 * 30.44) // Average days per month
      
      return sum + diffMonths
    }, 0)
    
    const years = totalMonths / 12
    return years.toFixed(1)
  })()

  return (
    <div style={{ padding: '2.5rem 2rem 3rem', fontFamily: 'sans-serif', color: '#fff', minHeight: '100%', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '880px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: '2.5rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-10px', left: '-4px', fontSize: '5rem', fontWeight: 900, color: `${C.primary}06`, userSelect: 'none', letterSpacing: '-4px', lineHeight: 1 }}>
            CAREER
          </div>
          <div style={{ position: 'relative' }}>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '3px', color: C.secondary, textTransform: 'uppercase' as const, marginBottom: '0.5rem', padding: '4px 12px', background: `${C.secondary}15`, borderRadius: '20px', border: `1px solid ${C.secondary}30` }}>
              Professional Journey
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, background: `linear-gradient(135deg, #fff 30%, ${C.secondary})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', margin: '0.4rem 0 0.75rem', lineHeight: 1.1, letterSpacing: '-1px' }}>
              Work Experience
            </h2>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ height: '3px', width: '40px', background: `linear-gradient(90deg, ${C.primary}, ${C.secondary})`, borderRadius: '4px' }} />
              <div style={{ height: '3px', width: '20px', background: `${C.secondary}60`, borderRadius: '4px' }} />
              <div style={{ height: '3px', width: '8px', background: `${C.primary}30`, borderRadius: '4px' }} />
            </div>
            <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.8rem', color: '#64748b' }}>
              <span>{totalYears} Years Experience</span>
              <span>•</span>
              <span>{data.experiences.length} Positions</span>
              <span>•</span>
              <span>{data.experiences.filter(e => e.period.includes('Present')).length} Current</span>
            </div>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div style={{ position: 'relative' }}>
          
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: '8px', top: '0', bottom: '0',
            width: '3px',
            background: `linear-gradient(to bottom, ${C.primary}, ${C.secondary} 40%, ${C.accent} 70%, #a855f7)`,
            borderRadius: '4px',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {data.experiences.map((exp, i) => {
              const isExpanded = expanded.includes(i)
              const isHovered = hovered === i
              const isCurrent = exp.period.includes('Present')

              return (
                <div key={i} style={{ paddingLeft: '2.75rem', position: 'relative' }}>
                  
                  {/* Timeline dot */}
                  <div style={{
                    position: 'absolute', left: '0', top: '1.75rem',
                    width: '20px', height: '20px', borderRadius: '50%',
                    background: exp.color,
                    border: `3px solid ${C.dark}`,
                    boxShadow: `0 0 ${isHovered ? '15px' : '10px'} ${exp.color}${isHovered ? 'bb' : '80'}`,
                    transition: 'all 0.3s ease',
                    zIndex: 10,
                  }}>
                    {/* Pulse for current jobs */}
                    {isCurrent && (
                      <div style={{
                        position: 'absolute', inset: '-6px',
                        borderRadius: '50%',
                        border: `2px solid ${exp.color}`,
                        animation: 'experiencePulse 2s ease-in-out infinite',
                      }} />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      borderRadius: '18px', overflow: 'hidden',
                      border: `1px solid ${isHovered ? exp.color + '40' : C.primary + '12'}`,
                      background: isHovered ? `${C.light}85` : `${C.light}40`,
                      transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                      transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
                      boxShadow: isHovered ? `0 8px 30px rgba(0,0,0,0.3)` : 'none',
                    }}
                  >
                    {/* Top color bar */}
                    <div style={{ height: '3px', background: `linear-gradient(90deg, ${exp.color}, ${exp.color}80)` }} />

                    <div style={{ padding: '1.4rem 1.6rem' }}>
                      
                      {/* Header row - clickable */}
                      <div
                        onClick={() => toggleExpand(i)}
                        style={{
                          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                          marginBottom: '0.75rem', cursor: 'pointer', gap: '1rem',
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: isHovered ? exp.color : '#fff', transition: 'color 0.3s', margin: 0 }}>
                              {exp.title}
                            </h3>
                            {isCurrent && (
                              <span style={{
                                padding: '2px 8px', borderRadius: '20px', fontSize: '0.65rem', fontWeight: 800,
                                background: `${C.primary}25`, color: C.primary,
                                border: `1px solid ${C.primary}50`, letterSpacing: '0.5px',
                              }}>
                                ACTIVE
                              </span>
                            )}
                          </div>
                          <p style={{ fontSize: '0.9rem', color: exp.color, fontWeight: 600, margin: 0 }}>
                            {exp.company}
                          </p>
                        </div>

                        {/* Expand/collapse indicator */}
                        <div style={{
                          width: '32px', height: '32px', borderRadius: '8px',
                          background: `${exp.color}15`, border: `1px solid ${exp.color}30`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          transition: 'all 0.3s ease',
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}>
                          <span style={{ fontSize: '1.1rem', color: exp.color }}>▼</span>
                        </div>
                      </div>

                      {/* Meta row */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.75rem', color: '#64748b', marginBottom: '0.75rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          📅 {exp.period}
                        </span>
                        <span>•</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          📍 {exp.location}
                        </span>
                        <span>•</span>
                        <span style={{
                          padding: '2px 8px', borderRadius: '20px', fontWeight: 600,
                          background: `${C.primary}12`, color: C.primary,
                          border: `1px solid ${C.primary}20`,
                        }}>
                          {exp.type}
                        </span>
                      </div>

                      {/* Expandable section */}
                      <div style={{
                        maxHeight: isExpanded ? '1000px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
                      }}>
                        {/* Achievements */}
                        <div style={{
                          padding: '1rem', borderRadius: '12px',
                          background: `${C.dark}60`, border: `1px solid ${exp.color}15`,
                          marginBottom: '1rem',
                        }}>
                          <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: exp.color, marginBottom: '0.75rem', letterSpacing: '0.5px', textTransform: 'uppercase' as const }}>
                            Key Achievements
                          </h4>
                          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            {exp.achievements.map((a, j) => (
                              <li key={j} style={{ display: 'flex', gap: '10px', fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6 }}>
                                <span style={{ color: exp.color, flexShrink: 0, fontSize: '0.9rem' }}>▹</span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech tags */}
                        <div>
                          <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', marginBottom: '0.6rem', letterSpacing: '0.5px', textTransform: 'uppercase' as const }}>
                            Technologies
                          </h4>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {exp.tags.map((tag, j) => (
                              <span key={j} style={{
                                padding: '4px 11px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 600,
                                background: `${exp.color}15`, color: exp.color,
                                border: `1px solid ${exp.color}25`,
                              }}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Summary stats ── */}
        <div style={{
          marginTop: '2rem',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem',
        }}>
          {[
            { label: 'Total Years', value: totalYears, color: C.primary },
            { label: 'Companies', value: data.experiences.length.toString(), color: C.secondary },
            { label: 'Current Roles', value: data.experiences.filter(e => e.period.includes('Present')).length.toString(), color: C.accent },
            { label: 'Technologies', value: `${new Set(data.experiences.flatMap(e => e.tags)).size}+`, color: '#a855f7' },
          ].map((stat, i) => (
            <div key={i} style={{
              textAlign: 'center', padding: '1rem',
              borderRadius: '14px',
              background: `${C.light}40`,
              border: `1px solid ${stat.color}20`,
            }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: stat.color, lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '4px', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes experiencePulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.4); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
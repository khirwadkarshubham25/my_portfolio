'use client'
import { useState } from 'react'
import educationData from '../../data/education.json'
import certificationsData from '../../data/certifications.json'

const C = { primary: '#00ff9f', secondary: '#00d4ff', accent: '#ff006e', dark: '#0a0e27', light: '#1a1f3a' }

export default function Education() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [hoveredCert, setHoveredCert] = useState<number | null>(null)
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<'degrees' | 'certs' | 'all'>('all')
  const [filterSkill, setFilterSkill] = useState<string | null>(null)

  // Collect all unique skills from certs
  const allSkills = Array.from(new Set(certificationsData.certifications.flatMap(c => c.skills)))

  const filteredCerts = filterSkill
    ? certificationsData.certifications.filter(c => c.skills.includes(filterSkill))
    : certificationsData.certifications

  return (
    <div style={{ padding: '2.5rem 2rem 3rem', fontFamily: 'sans-serif', color: '#fff', minHeight: '100%', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: '2.5rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-10px', left: '-4px', fontSize: '5rem', fontWeight: 900, color: `${C.primary}06`, userSelect: 'none', letterSpacing: '-4px', lineHeight: 1 }}>
            LEARN
          </div>
          <div style={{ position: 'relative' }}>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '3px', color: '#eab308', textTransform: 'uppercase' as const, marginBottom: '0.5rem', padding: '4px 12px', background: '#eab30815', borderRadius: '20px', border: '1px solid #eab30830' }}>
              Academic & Professional
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, background: 'linear-gradient(135deg, #fff 30%, #eab308)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', margin: '0.4rem 0 0.75rem', lineHeight: 1.1, letterSpacing: '-1px' }}>
              Education & Credentials
            </h2>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ height: '3px', width: '40px', background: 'linear-gradient(90deg, #eab308, #00ff9f)', borderRadius: '4px' }} />
              <div style={{ height: '3px', width: '20px', background: '#eab30860', borderRadius: '4px' }} />
              <div style={{ height: '3px', width: '8px', background: '#00ff9f30', borderRadius: '4px' }} />
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.8rem', color: '#64748b' }}>
              <span>{educationData.education.length} Degrees</span>
              <span>•</span>
              <span>{certificationsData.certifications.length} Certifications</span>
              {/* <span>•</span>
              <span>{certificationsData.badges.length} Badges</span> */}
            </div>
          </div>
        </div>

        {/* ── View toggle tabs ── */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '1.75rem' }}>
          {[
            { id: 'all', label: 'All Credentials', icon: '🎓' },
            { id: 'degrees', label: 'Formal Education', icon: '📚' },
            { id: 'certs', label: 'Certifications', icon: '🏆' },
          ].map((tab) => (
            <button key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                padding: '8px 18px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 700,
                cursor: 'pointer', transition: 'all 0.25s ease', border: 'none',
                background: activeTab === tab.id ? 'linear-gradient(135deg, #eab308, #f97316)' : `${C.light}60`,
                color: activeTab === tab.id ? '#fff' : '#64748b',
                boxShadow: activeTab === tab.id ? '0 4px 15px rgba(234,179,8,0.25)' : 'none',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── DEGREES SECTION ── */}
        {(activeTab === 'all' || activeTab === 'degrees') && (
          <div style={{ marginBottom: activeTab === 'all' ? '3rem' : '2rem' }}>
            {activeTab === 'all' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ height: '1px', flex: 1, background: `linear-gradient(90deg, transparent, #eab30830)` }} />
                <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#eab308', letterSpacing: '2px', textTransform: 'uppercase' as const, whiteSpace: 'nowrap' as const, margin: 0 }}>
                  📚 Formal Education
                </h3>
                <div style={{ height: '1px', flex: 1, background: `linear-gradient(90deg, #eab30830, transparent)` }} />
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
              {educationData.education.map((edu, i) => {
                const isHovered = hovered === i
                return (
                  <div key={i}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      borderRadius: '18px', overflow: 'hidden',
                      border: `1px solid ${isHovered ? '#eab30850' : C.primary + '12'}`,
                      transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                      boxShadow: isHovered ? '0 12px 40px rgba(234,179,8,0.15)' : 'none',
                      transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                    }}
                  >
                    <div style={{ height: '4px', background: edu.gradient }} />
                    <div style={{
                      padding: '1.5rem 1.75rem',
                      background: isHovered ? `linear-gradient(135deg, ${C.light}85, ${C.dark})` : `linear-gradient(135deg, ${C.light}50, ${C.dark})`,
                      transition: 'background 0.3s',
                    }}>
                      <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: edu.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', flexShrink: 0, boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}>
                          🎓
                        </div>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: isHovered ? '#fff' : '#e2e8f0', transition: 'color 0.3s', margin: '0 0 4px', lineHeight: 1.3 }}>
                            {edu.degree}
                          </h4>
                          <p style={{ fontSize: '0.85rem', color: '#eab308', fontWeight: 600, margin: '0 0 4px' }}>
                            {edu.field}
                          </p>
                          <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: '0 0 6px', fontWeight: 500 }}>
                            {edu.institution}
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.72rem', color: '#64748b' }}>
                            <span>📅 {edu.period}</span>
                            <span>•</span>
                            <span>📍 {edu.location}</span>
                          </div>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1rem' }}>
                        {edu.description}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {edu.courses.slice(0, 6).map((c, j) => (
                          <span key={j} style={{ padding: '3px 10px', borderRadius: '20px', fontSize: '0.68rem', fontWeight: 600, background: `${C.primary}15`, color: C.primary, border: `1px solid ${C.primary}25` }}>
                            {c}
                          </span>
                        ))}
                        {edu.courses.length > 6 && (
                          <span style={{ padding: '3px 10px', fontSize: '0.68rem', color: '#64748b' }}>
                            +{edu.courses.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* ── CERTIFICATIONS SECTION ── */}
        {(activeTab === 'all' || activeTab === 'certs') && (
          <div>
            {activeTab === 'all' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ height: '1px', flex: 1, background: `linear-gradient(90deg, transparent, ${C.accent}30)` }} />
                <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: C.accent, letterSpacing: '2px', textTransform: 'uppercase' as const, whiteSpace: 'nowrap' as const, margin: 0 }}>
                  🏆 Professional Certifications
                </h3>
                <div style={{ height: '1px', flex: 1, background: `linear-gradient(90deg, ${C.accent}30, transparent)` }} />
              </div>
            )}

            {/* Skill filter for certs */}
            {activeTab === 'certs' && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '1.5rem' }}>
                <button onClick={() => setFilterSkill(null)}
                  style={{
                    padding: '5px 14px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 700,
                    border: `1px solid ${!filterSkill ? C.accent : C.accent + '30'}`,
                    background: !filterSkill ? `${C.accent}25` : 'transparent',
                    color: !filterSkill ? C.accent : '#64748b',
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}>
                  All
                </button>
                {allSkills.map((skill, i) => (
                  <button key={i} onClick={() => setFilterSkill(filterSkill === skill ? null : skill)}
                    style={{
                      padding: '5px 14px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 600,
                      border: `1px solid ${filterSkill === skill ? C.accent + '60' : C.primary + '20'}`,
                      background: filterSkill === skill ? `${C.accent}20` : 'transparent',
                      color: filterSkill === skill ? C.accent : '#64748b',
                      cursor: 'pointer', transition: 'all 0.2s',
                    }}>
                    {skill}
                  </button>
                ))}
              </div>
            )}

            {/* Certs grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
              {filteredCerts.map((cert, i) => {
                const isHovered = hoveredCert === i
                return (
                  <div key={i}
                    onMouseEnter={() => setHoveredCert(i)}
                    onMouseLeave={() => setHoveredCert(null)}
                    style={{
                      borderRadius: '16px', overflow: 'hidden',
                      border: `1px solid ${isHovered ? C.accent + '40' : C.primary + '12'}`,
                      transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                      boxShadow: isHovered ? '0 12px 30px rgba(0,0,0,0.3)' : 'none',
                      background: isHovered ? `${C.light}80` : `${C.light}40`,
                      position: 'relative',
                    }}
                  >
                    <div style={{ height: '3px', background: cert.gradient }} />
                    <div style={{ padding: '1.25rem', position: 'relative' }}>
                      <div style={{ position: 'absolute', top: '10px', right: '12px', fontSize: '2.5rem', opacity: 0.08, userSelect: 'none' }}>
                        {cert.emoji}
                      </div>
                      <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: cert.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '25px', marginBottom: '0.75rem', boxShadow: '0 4px 15px rgba(0,0,0,0.25)', position: 'relative', zIndex: 1 }}>
                        {cert.emoji}
                      </div>
                      <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: isHovered ? C.accent : '#e2e8f0', marginBottom: '4px', transition: 'color 0.3s', lineHeight: 1.3 }}>
                        {cert.name}
                      </h4>
                      <p style={{ fontSize: '0.78rem', color: C.accent, fontWeight: 600, marginBottom: '8px' }}>
                        {cert.issuer}
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.68rem', color: '#64748b', marginBottom: '10px' }}>
                        <span>📅 {cert.date}</span>
                        <span>🔖 {cert.credentialId}</span>
                      </div>
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

            {/* Badges section */}
            {/* <div style={{ borderRadius: '16px', overflow: 'hidden', border: `1px solid ${C.secondary}18` }}>
              <div style={{ height: '3px', background: `linear-gradient(90deg, ${C.secondary}, ${C.primary})` }} />
              <div style={{ padding: '1.5rem 1.75rem', background: `linear-gradient(135deg, ${C.light}60, ${C.dark})` }}>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: C.secondary, marginBottom: '1rem', letterSpacing: '0.5px', textTransform: 'uppercase' as const }}>
                  🏅 Community Badges
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '0.75rem' }}>
                  {certificationsData.badges.map((b, i) => (
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
                      <div style={{ fontSize: '2rem', marginBottom: '8px', filter: hoveredBadge === i ? 'brightness(1.2)' : 'brightness(1)', transition: 'filter 0.2s' }}>
                        {b.icon}
                      </div>
                      <p style={{ fontSize: '0.72rem', fontWeight: 700, color: hoveredBadge === i ? '#fff' : '#e2e8f0', marginBottom: '3px', lineHeight: 1.3, transition: 'color 0.2s' }}>
                        {b.name}
                      </p>
                      <p style={{ fontSize: '0.62rem', color: '#64748b' }}>
                        {b.platform}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        )}

        {/* ── Combined Stats ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.75rem', marginTop: '2rem' }}>
          {[
            { label: 'Degrees', value: educationData.education.length.toString(), color: '#eab308' },
            { label: 'Pro Certs', value: certificationsData.certifications.length.toString(), color: C.accent },
            // { label: 'Badges', value: certificationsData.badges.length.toString(), color: C.secondary },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '1rem', borderRadius: '14px', background: `${C.light}40`, border: `1px solid ${stat.color}20` }}>
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
    </div>
  )
}
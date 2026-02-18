'use client'
import { useState } from 'react'
import data from '../../data/activity.json'

const C = { primary: '#00ff9f', secondary: '#00d4ff', accent: '#ff006e', dark: '#0a0e27', light: '#1a1f3a' }

export default function Activity() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [hoveredActivity, setHoveredActivity] = useState<number | null>(null)

  return (
    <div style={{ padding: '2.5rem 2rem 3rem', fontFamily: 'sans-serif', color: '#fff', minHeight: '100%', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: '2.5rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-10px', left: '-4px', fontSize: '5rem', fontWeight: 900, color: `${C.secondary}06`, userSelect: 'none', letterSpacing: '-4px', lineHeight: 1 }}>
            ACTIVE
          </div>
          <div style={{ position: 'relative' }}>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '3px', color: C.secondary, textTransform: 'uppercase' as const, marginBottom: '0.5rem', padding: '4px 12px', background: `${C.secondary}15`, borderRadius: '20px', border: `1px solid ${C.secondary}30` }}>
              Community Engagement
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, background: `linear-gradient(135deg, #fff 30%, ${C.secondary})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', margin: '0.4rem 0 0.75rem', lineHeight: 1.1, letterSpacing: '-1px' }}>
              Activity & Contributions
            </h2>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ height: '3px', width: '40px', background: `linear-gradient(90deg, ${C.primary}, ${C.secondary})`, borderRadius: '4px' }} />
              <div style={{ height: '3px', width: '20px', background: `${C.secondary}60`, borderRadius: '4px' }} />
              <div style={{ height: '3px', width: '8px', background: `${C.primary}30`, borderRadius: '4px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <p style={{ color: '#64748b', fontSize: '0.88rem' }}>
                {data.categories.length} Active Categories · {data.recentActivity.length} Recent Actions
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: C.primary, boxShadow: `0 0 10px ${C.primary}`, animation: 'activityPulse 2s ease-in-out infinite' }} />
                <span style={{ fontSize: '0.75rem', color: C.primary, fontWeight: 600 }}>Live</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Category cards with expand ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {data.categories.map((cat, i) => {
            const isSelected = selectedCategory === i
            return (
              <div key={i}
                onClick={() => setSelectedCategory(isSelected ? null : i)}
                style={{
                  borderRadius: '16px', overflow: 'hidden',
                  border: `1px solid ${isSelected ? C.secondary + '50' : C.primary + '12'}`,
                  cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                  transform: isSelected ? 'translateY(-3px)' : 'translateY(0)',
                  boxShadow: isSelected ? `0 8px 25px ${C.secondary}15` : 'none',
                }}
              >
                {/* Top gradient bar */}
                <div style={{ height: '3px', background: cat.gradient }} />

                <div style={{
                  padding: '1.25rem',
                  background: isSelected
                    ? `linear-gradient(135deg, ${C.light}85, ${C.dark})`
                    : `linear-gradient(135deg, ${C.light}45, ${C.dark})`,
                  transition: 'background 0.3s',
                }}>
                  {/* Icon + title */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: cat.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.25)' }}>
                        {cat.emoji}
                      </div>
                      <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: isSelected ? '#fff' : '#e2e8f0', transition: 'color 0.3s', margin: 0 }}>
                        {cat.type}
                      </h3>
                    </div>
                    <div style={{
                      width: '24px', height: '24px', borderRadius: '6px',
                      background: `${C.secondary}20`, border: `1px solid ${C.secondary}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transform: isSelected ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s',
                    }}>
                      <span style={{ fontSize: '0.75rem', color: C.secondary }}>▼</span>
                    </div>
                  </div>

                  {/* Item count badge */}
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span style={{ padding: '3px 10px', borderRadius: '20px', fontSize: '0.68rem', fontWeight: 700, background: `${C.primary}15`, color: C.primary, border: `1px solid ${C.primary}25` }}>
                      {cat.items.length} {cat.items.length === 1 ? 'Item' : 'Items'}
                    </span>
                  </div>

                  {/* Expandable items */}
                  <div style={{
                    maxHeight: isSelected ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '0.5rem' }}>
                      {cat.items.map((item, j) => (
                        <div key={j} style={{
                          borderLeft: `2px solid ${C.secondary}50`,
                          paddingLeft: '12px',
                          paddingBottom: '6px',
                        }}>
                          <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#e5e7eb', marginBottom: '2px', lineHeight: 1.4 }}>
                            {item.name}
                          </p>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
                            <span style={{ fontSize: '0.7rem', color: C.secondary, fontWeight: 600 }}>
                              {item.detail}
                            </span>
                            <span style={{ fontSize: '0.68rem', color: '#64748b' }}>
                              {item.date}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Collapsed preview (first 2 items) */}
                  {!isSelected && (
                    <div style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.5 }}>
                      {cat.items.slice(0, 2).map((item, j) => (
                        <div key={j}>• {item.name}</div>
                      ))}
                      {cat.items.length > 2 && <div>+ {cat.items.length - 2} more...</div>}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Recent activity feed ── */}
        <div style={{
          borderRadius: '18px', overflow: 'hidden',
          border: `1px solid ${C.primary}18`,
          marginBottom: '2rem',
        }}>
          <div style={{ height: '3px', background: `linear-gradient(90deg, ${C.primary}, ${C.secondary})` }} />

          <div style={{
            padding: '1.5rem 1.75rem',
            background: `linear-gradient(135deg, ${C.light}60, ${C.dark})`,
          }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: C.primary, boxShadow: `0 0 10px ${C.primary}`, animation: 'activityPulse 2s ease-in-out infinite' }} />
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                  ⚡ Recent Activity
                </h3>
              </div>
              <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>
                Last 30 Days
              </span>
            </div>

            {/* Activity feed */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {data.recentActivity.map((a, i) => (
                <div key={i}
                  onMouseEnter={() => setHoveredActivity(i)}
                  onMouseLeave={() => setHoveredActivity(null)}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: '12px',
                    padding: '12px 14px', borderRadius: '12px',
                    background: hoveredActivity === i ? `${C.light}70` : `${C.light}35`,
                    border: `1px solid ${hoveredActivity === i ? C.primary + '30' : C.primary + '10'}`,
                    transition: 'all 0.2s ease',
                    transform: hoveredActivity === i ? 'translateX(4px)' : 'translateX(0)',
                  }}
                >
                  {/* Dot indicator */}
                  <div style={{
                    width: '10px', height: '10px', borderRadius: '50%',
                    background: C.primary, flexShrink: 0, marginTop: '5px',
                    boxShadow: hoveredActivity === i ? `0 0 12px ${C.primary}` : 'none',
                    transition: 'box-shadow 0.2s',
                  }} />

                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0, lineHeight: 1.5 }}>
                      <span style={{ color: C.secondary, fontWeight: 700 }}>{a.action}</span>
                      {' '}
                      <span style={{ color: '#fff', fontWeight: 600 }}>{a.title}</span>
                    </p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '4px', fontSize: '0.7rem', color: '#64748b' }}>
                      <span style={{ fontWeight: 600 }}>{a.platform}</span>
                      <span>•</span>
                      <span>{a.time}</span>
                    </div>
                  </div>

                  {/* Platform icon placeholder */}
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '8px',
                    background: `${C.secondary}15`,
                    border: `1px solid ${C.secondary}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.85rem', flexShrink: 0,
                  }}>
                    {a.platform === 'GitHub' && '⌥'}
                    {a.platform === 'Medium' && '📝'}
                    {a.platform === 'HackTheBox' && '🎯'}
                    {a.platform === 'Stack Overflow' && '💬'}
                    {a.platform === 'LeetCode' && '⚡'}
                    {a.platform === 'Tech Meetup' && '🎤'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
          {data.stats.map((s, i) => {
            const colors = [C.primary, C.secondary, C.accent, '#a855f7']
            return (
              <div key={i} style={{
                textAlign: 'center', padding: '1rem',
                borderRadius: '14px',
                background: `${C.light}40`,
                border: `1px solid ${colors[i]}20`,
              }}>
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

      <style>{`
        @keyframes activityPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
      `}</style>
    </div>
  )
}
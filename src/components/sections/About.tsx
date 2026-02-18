'use client'
import { useState } from 'react'
import data from '../../data/about.json'

const C = {
  primary: '#00ff9f',
  secondary: '#00d4ff',
  accent: '#ff006e',
  dark: '#0a0e27',
  light: '#1a1f3a',
}

const cardGradients = [
  'linear-gradient(135deg, #00ff9f22, #00d4ff22)',
  'linear-gradient(135deg, #ff006e22, #a855f722)',
  'linear-gradient(135deg, #3b82f622, #06b6d422)',
  'linear-gradient(135deg, #f9731622, #eab30822)',
  'linear-gradient(135deg, #22c55e22, #10b98122)',
  'linear-gradient(135deg, #a855f722, #6366f122)',
]

const cardBorders = ['#00ff9f', '#a855f7', '#3b82f6', '#f97316', '#22c55e', '#a855f7']

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const renderBio = (text: string, i: number) => {
    const parts = text.split(/(<primary>.*?<\/primary>|<secondary>.*?<\/secondary>)/g)
    return (
      <p key={i} style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.9, margin: 0 }}>
        {parts.map((part, j) => {
          if (part.startsWith('<primary>'))
            return <span key={j} style={{ color: C.primary, fontWeight: 700, borderBottom: `1px solid ${C.primary}50` }}>{part.replace(/<\/?primary>/g, '')}</span>
          if (part.startsWith('<secondary>'))
            return <span key={j} style={{ color: C.secondary, fontWeight: 700, borderBottom: `1px solid ${C.secondary}50` }}>{part.replace(/<\/?secondary>/g, '')}</span>
          return part
        })}
      </p>
    )
  }

  return (
    <div style={{
      padding: '2.5rem 2rem 3rem',
      fontFamily: 'sans-serif',
      color: '#fff',
      minHeight: '100%',
      boxSizing: 'border-box',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: '2.5rem', position: 'relative' }}>
          {/* Decorative background text */}
          <div style={{
            position: 'absolute', top: '-10px', left: '-4px',
            fontSize: '5rem', fontWeight: 900, color: `${C.primary}06`,
            userSelect: 'none', letterSpacing: '-4px', lineHeight: 1,
            fontFamily: 'sans-serif',
          }}>
            ABOUT
          </div>
          <div style={{ position: 'relative' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '3px',
              color: C.primary, textTransform: 'uppercase' as const,
              marginBottom: '0.5rem',
              padding: '4px 12px',
              background: `${C.primary}15`,
              borderRadius: '20px',
              border: `1px solid ${C.primary}30`,
            }}>
              Who I Am
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800,
              background: `linear-gradient(135deg, #fff 30%, ${C.primary})`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', margin: '0.4rem 0 0.75rem',
              lineHeight: 1.1, letterSpacing: '-1px',
            }}>
              About Me
            </h2>
            <div style={{
              display: 'flex', gap: '6px', alignItems: 'center',
            }}>
              <div style={{ height: '3px', width: '40px', background: `linear-gradient(90deg, ${C.primary}, ${C.secondary})`, borderRadius: '4px' }} />
              <div style={{ height: '3px', width: '20px', background: `${C.secondary}60`, borderRadius: '4px' }} />
              <div style={{ height: '3px', width: '8px', background: `${C.primary}30`, borderRadius: '4px' }} />
            </div>
          </div>
        </div>

        {/* ── Bio + quick stats side by side ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', marginBottom: '2.5rem', alignItems: 'start' }}>

          {/* Bio paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {data.bio.map((text, i) => renderBio(text, i))}
          </div>

          {/* Quick stat pills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: '130px' }}>
            {[
              { value: '5+', label: 'Years Exp', color: C.primary },
              { value: '20+', label: 'Projects', color: C.secondary },
              { value: '3', label: 'Certs', color: C.accent },
              { value: '∞', label: 'Coffee ☕', color: '#f97316' },
            ].map((s, i) => (
              <div key={i} style={{
                textAlign: 'center', padding: '0.75rem 1rem',
                borderRadius: '14px',
                background: `${C.light}60`,
                border: `1px solid ${s.color}30`,
                boxShadow: `0 4px 15px ${s.color}10`,
              }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.65rem', color: '#6b7280', marginTop: '3px', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section divider ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${C.primary}40, transparent)` }} />
          <h3 style={{
            fontSize: '0.8rem', fontWeight: 700, color: C.primary,
            textTransform: 'uppercase' as const, letterSpacing: '2px',
            whiteSpace: 'nowrap' as const,
          }}>
            What I Bring
          </h3>
          <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, transparent, ${C.primary}40)` }} />
        </div>

        {/* ── Expertise cards ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          {data.highlights.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                padding: '1.25rem',
                borderRadius: '18px',
                background: hoveredCard === i ? cardGradients[i] : `${C.light}35`,
                border: `1px solid ${hoveredCard === i ? cardBorders[i] + '50' : C.primary + '12'}`,
                transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                transform: hoveredCard === i ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle corner glow */}
              {hoveredCard === i && (
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  width: '60px', height: '60px',
                  background: `radial-gradient(circle, ${cardBorders[i]}30, transparent 70%)`,
                  borderRadius: '0 18px 0 0',
                }} />
              )}

              {/* Emoji icon */}
              <div style={{
                width: '48px', height: '48px', borderRadius: '14px',
                background: hoveredCard === i
                  ? `linear-gradient(135deg, ${cardBorders[i]}40, ${cardBorders[i]}20)`
                  : `${C.light}80`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px', marginBottom: '0.9rem',
                border: `1px solid ${hoveredCard === i ? cardBorders[i] + '40' : C.primary + '15'}`,
                transition: 'all 0.3s ease',
                boxShadow: hoveredCard === i ? `0 4px 15px ${cardBorders[i]}25` : 'none',
              }}>
                {item.emoji}
              </div>

              <h4 style={{
                fontSize: '0.9rem', fontWeight: 700,
                color: hoveredCard === i ? '#fff' : '#e2e8f0',
                marginBottom: '0.4rem',
                transition: 'color 0.3s',
              }}>
                {item.title}
              </h4>
              <p style={{
                fontSize: '0.78rem', color: '#6b7280', lineHeight: 1.65,
                transition: 'color 0.3s',
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Fun fact / Beyond the code ── */}
        <div style={{
          padding: '1.5rem 1.75rem',
          borderRadius: '18px',
          background: `linear-gradient(135deg, ${C.dark}, ${C.light}80)`,
          border: `1px solid ${C.primary}25`,
          display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Decorative glow */}
          <div style={{
            position: 'absolute', bottom: '-20px', right: '-20px',
            width: '120px', height: '120px',
            background: `radial-gradient(circle, ${C.primary}15, transparent 70%)`,
            borderRadius: '50%',
          }} />

          <div style={{
            width: '48px', height: '48px', borderRadius: '14px', flexShrink: 0,
            background: `linear-gradient(135deg, ${C.primary}30, ${C.secondary}20)`,
            border: `1px solid ${C.primary}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '24px',
          }}>
            💡
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h4 style={{
              fontSize: '0.95rem', fontWeight: 700, color: C.primary,
              marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '6px',
            }}>
              Beyond the Code
              <span style={{
                fontSize: '0.65rem', color: C.primary, padding: '2px 8px',
                background: `${C.primary}15`, borderRadius: '20px',
                border: `1px solid ${C.primary}30`, fontWeight: 600,
              }}>Fun Fact</span>
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.8, margin: 0 }}>
              {data.funFact}
            </p>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes aboutPulse {
          0%, 100% { opacity: 0.06; }
          50% { opacity: 0.1; }
        }
      `}</style>
    </div>
  )
}
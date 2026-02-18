'use client'

import { useEffect, useState } from 'react'
import heroData from '../../data/hero.json'

const C = { primary: '#00ff9f', secondary: '#00d4ff', accent: '#ff006e', dark: '#0a0e27' }

interface HeroProps {
  onNavigate?: (section: string) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  const [displayedText, setDisplayedText] = useState('')
  const { name, title, tagline, stats, buttons, icons } = heroData

  useEffect(() => {
    let i = 0
    setDisplayedText('')
    const interval = setInterval(() => {
      if (i <= title.length) {
        setDisplayedText(title.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [title])

  const handleButton = (action: string) => {
    if (onNavigate) onNavigate(action)
  }

  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '2rem', boxSizing: 'border-box',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '700px', width: '100%' }}>

        {/* Floating icons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          {icons.map((item, i) => (
            <div key={i} style={{
              width: '64px', height: '64px', borderRadius: '16px',
              background: item.gradient, padding: '2px',
              animation: `heroFloat 6s ease-in-out infinite`,
              animationDelay: `${i * 1}s`,
            }}>
              <div style={{
                width: '100%', height: '100%', borderRadius: '14px',
                background: C.dark,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '28px',
              }}>
                {item.emoji}
              </div>
            </div>
          ))}
        </div>

        {/* Name */}
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800,
          background: `linear-gradient(135deg, ${C.primary}, ${C.secondary}, ${C.accent})`,
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text', marginBottom: '1rem',
          fontFamily: "'Orbitron', Georgia, serif", letterSpacing: '-1px',
          lineHeight: 1.2,
        }}>
          {name}
        </h1>

        {/* Typing animation */}
        <div style={{ minHeight: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.4rem)', color: '#d1d5db', fontWeight: 300, fontFamily: 'sans-serif' }}>
            {displayedText}
            <span style={{
              display: 'inline-block', width: '2px', height: '1.1em',
              background: C.primary, marginLeft: '4px',
              verticalAlign: 'text-bottom',
              animation: 'heroBlink 1s step-end infinite',
            }} />
          </p>
        </div>

        {/* Tagline */}
        <p style={{
          fontSize: 'clamp(0.82rem, 1.8vw, 1rem)', color: '#6b7280',
          marginBottom: '2rem', lineHeight: 1.8, fontFamily: 'sans-serif',
        }}>
          {tagline}
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {buttons.map((btn, i) => (
            <button key={i}
              onClick={() => handleButton(btn.action)}
              style={{
                padding: '0.75rem 2rem', borderRadius: '8px', fontWeight: 700,
                fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'sans-serif',
                transition: 'transform 0.2s, box-shadow 0.2s',
                ...(i === 0
                  ? { border: 'none', background: `linear-gradient(135deg, ${C.primary}, #06b6d4)`, color: C.dark }
                  : { border: `2px solid ${C.primary}`, background: 'transparent', color: C.primary }
                ),
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.06)'
                if (i === 0) e.currentTarget.style.boxShadow = `0 0 20px ${C.primary}60`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', maxWidth: '460px', margin: '0 auto' }}>
          {stats.map((stat, i) => {
            const colors = [C.primary, C.secondary, C.accent]
            return (
              <div key={i} style={{ textAlign: 'center', padding: '1rem', borderRadius: '12px', background: 'rgba(26,31,58,0.4)', border: `1px solid ${colors[i]}25` }}>
                <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: colors[i], fontFamily: 'sans-serif' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#6b7280', fontFamily: 'sans-serif', marginTop: '2px' }}>
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

      </div>

      <style>{`
        @keyframes heroBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes heroFloat { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
      `}</style>
    </div>
  )
}
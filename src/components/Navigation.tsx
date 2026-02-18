'use client'

import { useState } from 'react'

interface Colors {
  primary: string
  secondary: string
  accent: string
  dark: string
  darker: string
  light: string
}

interface NavigationProps {
  currentSection: string
  setCurrentSection: (section: string) => void
  isMobile: boolean
  colors: Colors
}

const navItems = [
  {
    id: 'hero', label: 'Home',
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  },
  {
    id: 'about', label: 'About',
    gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  },
  {
    id: 'projects', label: 'Projects',
    gradient: 'linear-gradient(135deg, #22c55e, #10b981)',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
  },
  {
    id: 'skills', label: 'Skills',
    gradient: 'linear-gradient(135deg, #f97316, #ef4444)',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  },
  {
    id: 'experience', label: 'Work',
    gradient: 'linear-gradient(135deg, #3b82f6, #6366f1)',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
  },
  {
    id: 'education', label: 'Education',
    gradient: 'linear-gradient(135deg, #eab308, #f97316)',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
  },
  // {
  //   id: 'activity', label: 'Activity',
  //   gradient: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
  //   svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
  // },
  {
    id: 'blog', label: 'Blog',
    gradient: 'linear-gradient(135deg, #6366f1, #a855f7)',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
  },
  {
    id: 'contact', label: 'Contact',
    gradient: 'linear-gradient(135deg, #ef4444, #ec4899)',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
  },
]

export default function Navigation({ currentSection, setCurrentSection, isMobile, colors }: NavigationProps) {
  const [hovered, setHovered] = useState<string | null>(null)
  const width = isMobile ? '56px' : '76px'
  const iconSize = isMobile ? '36px' : '44px'
  const svgSize = isMobile ? '16px' : '20px'
  const fontSize = isMobile ? '8px' : '9px'

  return (
    <div style={{
      width,
      height: '100%',
      background: `${colors.light}40`,
      borderLeft: `1px solid ${colors.primary}15`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: isMobile ? '6px' : '8px',
      padding: '8px 0',
      overflowY: 'auto',
      flexShrink: 0,
    }}>
      {navItems.map((item) => {
        const isActive = currentSection === item.id
        const isHovered = hovered === item.id

        return (
          <button
            key={item.id}
            onClick={() => setCurrentSection(item.id)}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            title={item.label}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '3px',
              padding: '4px',
              flexShrink: 0,
              transition: 'transform 0.2s ease',
              transform: isActive ? 'scale(1.1)' : isHovered ? 'scale(1.05)' : 'scale(1)',
              position: 'relative',
            }}
          >
            {/* Active indicator */}
            {isActive && (
              <div style={{
                position: 'absolute',
                left: '-4px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '3px',
                height: '60%',
                background: colors.primary,
                borderRadius: '0 3px 3px 0',
              }} />
            )}

            {/* Icon box */}
            <div style={{
              width: iconSize,
              height: iconSize,
              borderRadius: '10px',
              background: item.gradient,
              padding: '2px',
              boxShadow: isActive ? `0 4px 15px rgba(0,255,159,0.4)` : 'none',
              transition: 'box-shadow 0.3s ease',
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '8px',
                background: isActive || isHovered ? 'transparent' : colors.dark,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.3s ease',
              }}>
                <div style={{
                  width: svgSize,
                  height: svgSize,
                  color: isActive || isHovered ? '#fff' : '#d1d5db',
                }}>
                  {item.svg}
                </div>
              </div>
            </div>

            {/* Label */}
            <span style={{
              fontSize,
              color: isActive ? colors.primary : '#9ca3af',
              fontWeight: isActive ? '600' : '400',
              fontFamily: 'sans-serif',
              lineHeight: 1,
              textAlign: 'center',
              transition: 'color 0.3s ease',
            }}>
              {item.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
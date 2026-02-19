'use client'

import { useState } from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Activity from './sections/Activity'
import Blog from './sections/Blog'
import Contact from './sections/Contact'

export const COLORS = {
  primary: '#00ff9f',
  secondary: '#00d4ff',
  accent: '#ff006e',
  dark: '#0a0e27',
  darker: '#050811',
  light: '#1a1f3a',
}

const navItems = [
  { id: 'hero', label: 'Home', icon: '🏠' },
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'projects', label: 'Work', icon: '💼' },
  { id: 'skills', label: 'Skills', icon: '⚡' },
  { id: 'experience', label: 'Career', icon: '📊' },
  { id: 'education', label: 'Learn', icon: '🎓' },
//   { id: 'activity', label: 'Active', icon: '🔥' },
  { id: 'blog', label: 'Blog', icon: '📝' },
  { id: 'contact', label: 'Contact', icon: '📧' },
]

export default function MobileLayout() {
  const [currentSection, setCurrentSection] = useState<string>('hero')

  const renderSection = () => {
    switch (currentSection) {
      case 'hero': return <Hero onNavigate={setCurrentSection} />
      case 'about': return <About />
      case 'projects': return <Projects />
      case 'skills': return <Skills />
      case 'experience': return <Experience />
      case 'education': return <Education />
    //   case 'activity': return <Activity />
      case 'blog': return <Blog />
      case 'contact': return <Contact />
      default: return <Hero />
    }
  }

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: COLORS.darker,
      position: 'relative',
    }}>
      
      {/* Main content area with scroll */}
      <div style={{
        flex: 1,
        overflow: 'auto',
        background: `linear-gradient(180deg, ${COLORS.darker}, ${COLORS.dark})`,
        WebkitOverflowScrolling: 'touch',
      }}>
        {renderSection()}
      </div>

      {/* Bottom navigation bar */}
      <nav style={{
        position: 'sticky',
        bottom: 0,
        left: 0,
        right: 0,
        height: '72px',
        background: `${COLORS.light}95`,
        backdropFilter: 'blur(20px)',
        borderTop: `1px solid ${COLORS.primary}20`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0 8px',
        boxShadow: `0 -4px 20px rgba(0,0,0,0.3)`,
        zIndex: 100,
      }}>
        {navItems.map((item) => {
          const isActive = currentSection === item.id
          return (
            <button
              key={item.id}
              onClick={() => setCurrentSection(item.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                padding: '8px 6px',
                background: isActive ? `${COLORS.primary}15` : 'transparent',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                minWidth: '48px',
                flex: 1,
                maxWidth: '80px',
              }}
            >
              <span style={{
                fontSize: '20px',
                filter: isActive ? 'brightness(1.2)' : 'brightness(0.8)',
                transition: 'filter 0.2s',
              }}>
                {item.icon}
              </span>
              <span style={{
                fontSize: '10px',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? COLORS.primary : '#94a3b8',
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100%',
              }}>
                {item.label}
              </span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
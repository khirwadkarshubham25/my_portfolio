'use client'

import { useState, useEffect, CSSProperties } from 'react'
import SocialLinks from './SocialLinks'
import Navigation from './Navigation'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Activity from './sections/Activity'
import Blog from './sections/Blog'
import Contact from './sections/Contact'

interface DeviceFrameProps {
  isLoaded: boolean
}

export const COLORS = {
  primary: '#00ff9f',
  secondary: '#00d4ff',
  accent: '#ff006e',
  dark: '#0a0e27',
  darker: '#050811',
  light: '#1a1f3a',
}

export default function DeviceFrame({ isLoaded }: DeviceFrameProps) {
  const [currentSection, setCurrentSection] = useState<string>('hero')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const renderSection = () => {
    switch (currentSection) {
      case 'hero': return <Hero onNavigate={setCurrentSection} />
      case 'about': return <About />
      case 'projects': return <Projects />
      case 'skills': return <Skills />
      case 'experience': return <Experience />
      case 'education': return <Education />
      // case 'activity': return <Activity />
      case 'blog': return <Blog />
      case 'contact': return <Contact />
      default: return <Hero />
    }
  }

  const wrapperStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 1s ease, transform 1s ease',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateX(0)' : 'translateX(-200px)',
  }

  const deviceStyle: CSSProperties = {
    width: '100%',
    maxWidth: isMobile ? '420px' : '1400px',
    height: isMobile ? '85vh' : '88vh',
    background: 'linear-gradient(135deg, #1f2937, #111827, #000000)',
    borderRadius: isMobile ? '2rem' : '3rem',
    border: '8px solid #111827',
    padding: '14px',
    boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 40px rgba(0,255,159,0.05)',
    position: 'relative',
    boxSizing: 'border-box',
  }

  const screenStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    background: COLORS.dark,
    borderRadius: isMobile ? '1.5rem' : '2.2rem',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid rgba(0,255,159,0.08)',
    boxSizing: 'border-box',
  }

  const contentStyle: CSSProperties = {
    flex: 1,
    overflowY: 'auto',
    overflowX: 'hidden',
    height: '100%',
  }

  return (
    <div style={wrapperStyle}>
      <div style={deviceStyle}>

        {/* Mobile notch */}
        {isMobile && (
          <div style={{
            position: 'absolute', top: 0, left: '50%',
            transform: 'translateX(-50%)',
            width: '120px', height: '20px',
            background: '#000', borderRadius: '0 0 16px 16px',
            zIndex: 50, display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: '8px',
          }}>
            <div style={{ width: '40px', height: '3px', background: '#374151', borderRadius: '4px' }} />
            <div style={{ width: '8px', height: '8px', background: '#374151', borderRadius: '50%' }} />
          </div>
        )}

        {/* Screen bezel glow */}
        <div style={{
          position: 'absolute', inset: '14px',
          borderRadius: isMobile ? '1.5rem' : '2.2rem',
          border: '1px solid rgba(0,255,159,0.12)',
          pointerEvents: 'none', zIndex: 30,
        }} />

        {/* Main screen */}
        <div style={screenStyle}>

          {/* LEFT SIDEBAR */}
          <div style={{ flexShrink: 0, height: '100%' }}>
            <SocialLinks isMobile={isMobile} colors={COLORS} />
          </div>

          {/* CENTER CONTENT */}
          <div style={contentStyle}>
            {renderSection()}
          </div>

          {/* RIGHT SIDEBAR */}
          <div style={{ flexShrink: 0, height: '100%' }}>
            <Navigation
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
              isMobile={isMobile}
              colors={COLORS}
            />
          </div>

        </div>

        {/* Mobile home indicator */}
        {isMobile && (
          <div style={{
            position: 'absolute', bottom: '6px', left: '50%',
            transform: 'translateX(-50%)',
            width: '100px', height: '4px',
            background: '#4b5563', borderRadius: '4px', zIndex: 50,
          }} />
        )}

      </div>
    </div>
  )
}
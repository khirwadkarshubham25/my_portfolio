'use client'

import { useState, lazy, Suspense, memo } from 'react'

export const COLORS = {
  primary: '#00ff9f',
  secondary: '#00d4ff',
  accent: '#ff006e',
  dark: '#0a0e27',
  darker: '#050811',
  light: '#1a1f3a',
}

// Lazy load sections for better performance
const Hero = lazy(() => import('./sections/Hero'))
const About = lazy(() => import('./sections/About'))
const Projects = lazy(() => import('./sections/Projects'))
const Skills = lazy(() => import('./sections/Skills'))
const Experience = lazy(() => import('./sections/Experience'))
const Education = lazy(() => import('./sections/Education'))
const Activity = lazy(() => import('./sections/Activity'))
const Blog = lazy(() => import('./sections/Blog'))
const Contact = lazy(() => import('./sections/Contact'))

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

// Loading fallback component
const SectionLoader = () => (
  <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: COLORS.darker,
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: `3px solid ${COLORS.primary}30`,
      borderTop: `3px solid ${COLORS.primary}`,
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite',
    }} />
    <style>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
)

// Memoized navigation button
const NavButton = memo(({ item, isActive, onClick }: any) => (
  <button
    onClick={onClick}
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
      WebkitTapHighlightColor: 'transparent',
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
))

NavButton.displayName = 'NavButton'

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
      case 'activity': return <Activity />
      case 'blog': return <Blog />
      case 'contact': return <Contact />
      default: return <Hero onNavigate={setCurrentSection} />
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
        willChange: 'scroll-position',
      }}>
        <Suspense fallback={<SectionLoader />}>
          {renderSection()}
        </Suspense>
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
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: `1px solid ${COLORS.primary}20`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0 8px',
        boxShadow: `0 -4px 20px rgba(0,0,0,0.3)`,
        zIndex: 100,
        transform: 'translateZ(0)',
      }}>
        {navItems.map((item) => (
          <NavButton
            key={item.id}
            item={item}
            isActive={currentSection === item.id}
            onClick={() => setCurrentSection(item.id)}
          />
        ))}
      </nav>
    </div>
  )
}
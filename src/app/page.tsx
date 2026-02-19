'use client'

import { useState, useEffect } from 'react'
import DeviceFrame from '../components/DeviceFrame'
import MobileLayout from '../components/MobileLayout'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Mobile view - no device frame, direct content
  if (isMobile) {
    return (
      <main style={{
        width: '100vw',
        height: '100vh',
        background: '#050811',
        overflow: 'hidden',
        position: 'fixed',
        inset: 0,
      }}>
        <MobileLayout />
      </main>
    )
  }

  // Desktop view - with device frame
  return (
    <main style={{
      width: '100vw',
      height: '100vh',
      background: '#050811',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      boxSizing: 'border-box',
      position: 'fixed',
      inset: 0,
    }}>
      {/* Animated background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,255,159,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,159,0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
      }} />

      {/* Glow orbs */}
      <div style={{
        position: 'absolute',
        top: '25%', left: '25%',
        width: '400px', height: '400px',
        background: 'rgba(0,255,159,0.06)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        animation: 'float 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '25%', right: '25%',
        width: '400px', height: '400px',
        background: 'rgba(0,212,255,0.06)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        animation: 'float 6s ease-in-out infinite',
        animationDelay: '2s',
      }} />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        * { scrollbar-width: none; -ms-overflow-style: none; }
        *::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Device Frame fills the space */}
      <div style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}>
        <DeviceFrame isLoaded={isLoaded} />
      </div>
    </main>
  )
}
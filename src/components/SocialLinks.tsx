'use client'

import { useState } from 'react'
import socialsData from '../data/socials.json'

interface Colors {
  primary: string; secondary: string; accent: string; dark: string; darker: string; light: string
}
interface SocialLinksProps { isMobile: boolean; colors: Colors }

const svgMap: Record<string, JSX.Element> = {
  LinkedIn: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  GitHub: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
  Email: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  LeetCode: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>,
  TryHackMe: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
}

export default function SocialLinks({ isMobile, colors }: SocialLinksProps) {
  const [hovered, setHovered] = useState<string | null>(null)
  const { socials } = socialsData
  const width = isMobile ? '48px' : '64px'
  const iconSize = isMobile ? '18px' : '22px'

  return (
    <div style={{
      width, height: '100%', background: `${colors.light}40`,
      borderRight: `1px solid ${colors.primary}15`,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: '24px', flexShrink: 0,
    }}>
      {socials.map((social) => (
        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" title={social.name}
          onMouseEnter={() => setHovered(social.name)}
          onMouseLeave={() => setHovered(null)}
          style={{
            color: hovered === social.name ? social.hoverColor : '#9ca3af',
            transform: hovered === social.name ? 'scale(1.2)' : 'scale(1)',
            transition: 'all 0.3s ease',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            textDecoration: 'none',
            filter: hovered === social.name ? `drop-shadow(0 0 6px ${social.hoverColor})` : 'none',
          }}
        >
          <div style={{ width: iconSize, height: iconSize }}>
            {svgMap[social.name]}
          </div>
        </a>
      ))}
    </div>
  )
}
'use client'

import { useState } from 'react'
import type { IconType } from 'react-icons'
import { FaLinkedin, FaGithub, FaShieldAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiLeetcode, SiTryhackme, SiHackthebox } from 'react-icons/si'
import socialsData from '../data/socials.json'

interface Colors {
  primary: string; secondary: string; accent: string; dark: string; darker: string; light: string
}
interface SocialLinksProps { isMobile: boolean; colors: Colors }

// Maps the icon-name strings in socials.json to real react-icons components.
// A name missing from this map renders nothing instead of crashing.
const iconMap: Record<string, IconType> = {
  FaLinkedin,
  FaGithub,
  MdEmail,
  SiLeetcode,
  SiTryhackme,
  SiHackthebox,
  FaShieldAlt, // stand-in for LetsDefend (no brand icon in Simple Icons)
}

export default function SocialLinks({ isMobile, colors }: SocialLinksProps) {
  const [hovered, setHovered] = useState<string | null>(null)
  const { socials } = socialsData
  const width = isMobile ? '48px' : '64px'
  const iconSize = isMobile ? 18 : 22

  return (
    <div style={{
      width, height: '100%', background: `${colors.light}40`,
      borderRight: `1px solid ${colors.primary}15`,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: '24px', flexShrink: 0,
    }}>
      {socials.map((social) => {
        const Icon = iconMap[social.icon]
        return (
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
            {Icon && <Icon size={iconSize} />}
          </a>
        )
      })}
    </div>
  )
}
'use client'
import { useState } from 'react'
import data from '../../data/contact.json'

const C = { primary: '#00ff9f', secondary: '#00d4ff', accent: '#ff006e', dark: '#0a0e27', light: '#1a1f3a' }

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [hoveredInfo, setHoveredInfo] = useState<number | null>(null)
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://forminit.com/f/awngdzmb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        // Handle error - revert to idle
        setStatus('idle')
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      // Handle network error
      setStatus('idle')
      alert('Network error. Please check your connection and try again.')
    }
  }

  const inputBaseStyle = {
    width: '100%', padding: '12px 16px', borderRadius: '10px',
    background: C.dark, color: '#fff', fontSize: '0.875rem',
    outline: 'none', fontFamily: 'sans-serif',
    boxSizing: 'border-box' as const,
    transition: 'all 0.3s ease',
  }

  return (
    <div style={{ padding: '2.5rem 2rem 3rem', fontFamily: 'sans-serif', color: '#fff', minHeight: '100%', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: '2.5rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-10px', left: '-4px', fontSize: '5rem', fontWeight: 900, color: `${C.accent}06`, userSelect: 'none', letterSpacing: '-4px', lineHeight: 1 }}>
            REACH
          </div>
          <div style={{ position: 'relative' }}>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '3px', color: C.accent, textTransform: 'uppercase' as const, marginBottom: '0.5rem', padding: '4px 12px', background: `${C.accent}15`, borderRadius: '20px', border: `1px solid ${C.accent}30` }}>
              Let's Connect
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, background: `linear-gradient(135deg, #fff 30%, ${C.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', margin: '0.4rem 0 0.75rem', lineHeight: 1.1, letterSpacing: '-1px' }}>
              Get In Touch
            </h2>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ height: '3px', width: '40px', background: `linear-gradient(90deg, ${C.accent}, ${C.primary})`, borderRadius: '4px' }} />
              <div style={{ height: '3px', width: '20px', background: `${C.accent}60`, borderRadius: '4px' }} />
              <div style={{ height: '3px', width: '8px', background: `${C.primary}30`, borderRadius: '4px' }} />
            </div>
            <p style={{ color: '#64748b', fontSize: '0.88rem' }}>
              Have a project in mind? Let's discuss how we can work together
            </p>
          </div>
        </div>

        {/* ── Two column layout ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.8fr)', gap: '1.5rem', marginBottom: '2rem' }}>

          {/* Left column - Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            {/* Contact cards */}
            {data.info.map((info, i) => (
              <a key={i} href={info.href}
                onMouseEnter={() => setHoveredInfo(i)}
                onMouseLeave={() => setHoveredInfo(null)}
                style={{
                  display: 'flex', gap: '14px', alignItems: 'center',
                  padding: '1rem 1.25rem', borderRadius: '16px',
                  textDecoration: 'none',
                  background: hoveredInfo === i
                    ? `linear-gradient(135deg, ${C.light}90, ${C.dark})`
                    : `linear-gradient(135deg, ${C.light}50, ${C.dark})`,
                  border: `1px solid ${hoveredInfo === i ? C.accent + '40' : C.primary + '12'}`,
                  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                  transform: hoveredInfo === i ? 'translateX(4px) scale(1.02)' : 'translateX(0) scale(1)',
                  boxShadow: hoveredInfo === i ? `0 8px 25px rgba(0,0,0,0.3)` : 'none',
                }}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: info.gradient, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px', flexShrink: 0,
                  boxShadow: hoveredInfo === i ? '0 4px 15px rgba(0,0,0,0.3)' : 'none',
                  transition: 'box-shadow 0.3s',
                }}>
                  {info.emoji}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: '0.7rem', color: '#64748b', marginBottom: '3px', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' as const }}>
                    {info.label}
                  </p>
                  <p style={{
                    fontSize: '0.88rem', fontWeight: 700,
                    color: hoveredInfo === i ? C.accent : '#e2e8f0',
                    transition: 'color 0.3s', margin: 0,
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const,
                  }}>
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div style={{
              padding: '1.25rem', borderRadius: '16px',
              background: `linear-gradient(135deg, ${C.primary}10, ${C.secondary}08)`,
              border: `1px solid ${C.primary}20`,
            }}>
              <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', marginBottom: '12px', letterSpacing: '0.3px' }}>
                Connect on Social Media
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {data.socials.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(i)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    title={s.name}
                    style={{
                      width: '44px', height: '44px', borderRadius: '12px',
                      background: hoveredSocial === i ? `${C.light}80` : `${C.light}50`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      textDecoration: 'none', fontSize: '16px',
                      color: hoveredSocial === i ? s.color : '#94a3b8',
                      border: `1px solid ${hoveredSocial === i ? s.color + '40' : C.primary + '15'}`,
                      fontWeight: 700, transition: 'all 0.25s ease',
                      transform: hoveredSocial === i ? 'translateY(-3px) scale(1.08)' : 'translateY(0) scale(1)',
                      boxShadow: hoveredSocial === i ? `0 6px 20px ${s.color}30` : 'none',
                    }}
                  >
                    {s.emoji}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div style={{
              padding: '1rem 1.25rem', borderRadius: '16px',
              background: `linear-gradient(135deg, ${C.light}60, ${C.dark})`,
              border: `1px solid ${C.primary}15`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <div style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: '#22c55e', boxShadow: '0 0 10px #22c55e',
                  animation: 'contactPulse 2s ease-in-out infinite',
                }} />
                <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                  Available for Work
                </p>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                {data.availability}
              </p>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div style={{
            borderRadius: '20px', overflow: 'hidden',
            border: `1px solid ${C.accent}18`,
          }}>
            {/* Gradient bar */}
            <div style={{ height: '4px', background: `linear-gradient(90deg, ${C.accent}, ${C.primary})` }} />

            <form onSubmit={handleSubmit} style={{
              padding: '1.75rem 2rem',
              background: `linear-gradient(135deg, ${C.light}60, ${C.dark})`,
              display: 'flex', flexDirection: 'column', gap: '1.25rem',
            }}>
              
              {/* Form header */}
              <div style={{ marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>
                  Send a Message
                </h3>
                <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>
                  Fill out the form and I'll get back to you within 24 hours
                </p>
              </div>

              {/* Name + Email row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', marginBottom: '8px', letterSpacing: '0.3px' }}>
                    YOUR NAME *
                  </label>
                  <input
                    style={{
                      ...inputBaseStyle,
                      border: `2px solid ${focusedField === 'name' ? C.accent : C.primary + '30'}`,
                    }}
                    type="text" value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', marginBottom: '8px', letterSpacing: '0.3px' }}>
                    YOUR EMAIL *
                  </label>
                  <input
                    style={{
                      ...inputBaseStyle,
                      border: `2px solid ${focusedField === 'email' ? C.accent : C.primary + '30'}`,
                    }}
                    type="email" value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', marginBottom: '8px', letterSpacing: '0.3px' }}>
                  SUBJECT *
                </label>
                <input
                  style={{
                    ...inputBaseStyle,
                    border: `2px solid ${focusedField === 'subject' ? C.accent : C.primary + '30'}`,
                  }}
                  type="text" value={form.subject}
                  onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Project inquiry / Job opportunity"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', marginBottom: '8px', letterSpacing: '0.3px' }}>
                  MESSAGE *
                </label>
                <textarea
                  style={{
                    ...inputBaseStyle,
                    minHeight: '140px', resize: 'vertical' as const,
                    border: `2px solid ${focusedField === 'message' ? C.accent : C.primary + '30'}`,
                  }}
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  required
                />
              </div>

              {/* Submit button */}
              <button type="submit" disabled={status === 'sending'}
                style={{
                  padding: '14px 24px', borderRadius: '12px',
                  border: 'none', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  background: status === 'sent'
                    ? `linear-gradient(135deg, #22c55e, #10b981)`
                    : `linear-gradient(135deg, ${C.accent}, #a855f7)`,
                  color: '#fff', fontWeight: 800, fontSize: '0.95rem',
                  fontFamily: 'sans-serif',
                  opacity: status === 'sending' ? 0.7 : 1,
                  transition: 'all 0.3s ease',
                  boxShadow: status !== 'sending' ? '0 4px 15px rgba(0,0,0,0.2)' : 'none',
                }}
                onMouseEnter={e => {
                  if (status !== 'sending') e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {status === 'idle' && '✉ Send Message'}
                {status === 'sending' && '⏳ Sending...'}
                {status === 'sent' && '✅ Message Sent Successfully!'}
              </button>

              {/* Success message */}
              {status === 'sent' && (
                <div style={{
                  padding: '12px 16px', borderRadius: '12px',
                  background: '#22c55e15', border: '1px solid #22c55e40',
                  color: '#22c55e', fontSize: '0.85rem', fontWeight: 600,
                  textAlign: 'center',
                }}>
                  Thanks for reaching out! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* ── Footer note ── */}
        <div style={{
          textAlign: 'center', padding: '1.25rem',
          borderRadius: '14px',
          background: `linear-gradient(135deg, ${C.primary}08, ${C.accent}06)`,
          border: `1px solid ${C.primary}12`,
        }}>
          <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0, lineHeight: 1.7 }}>
            💬 <span style={{ color: '#94a3b8', fontWeight: 600 }}>Response Time:</span> Usually within 24 hours • 
            <span style={{ color: '#94a3b8', fontWeight: 600 }}> All inquiries welcome</span> • 
            Available for <span style={{ color: C.primary, fontWeight: 700 }}>freelance projects</span> and <span style={{ color: C.accent, fontWeight: 700 }}>full-time opportunities</span>
          </p>
        </div>

      </div>

      <style>{`
        @keyframes contactPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
      `}</style>
    </div>
  )
}
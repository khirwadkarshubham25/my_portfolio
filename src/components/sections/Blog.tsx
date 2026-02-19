'use client'
import { useState } from 'react'
import data from '../../data/blog.json'

const C = { primary: '#00ff9f', secondary: '#00d4ff', accent: '#ff006e', dark: '#0a0e27', light: '#1a1f3a' }

export default function Blog() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [email, setEmail] = useState('')
  const [filterCategory, setFilterCategory] = useState<string | null>(null)
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success'>('idle')

  // Get unique categories
  const categories = Array.from(new Set(data.posts.map(p => p.category)))

  const filtered = filterCategory
    ? data.posts.filter(p => p.category === filterCategory)
    : data.posts

  const [featured, ...rest] = filtered

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribeStatus('success')
      setTimeout(() => { setEmail(''); setSubscribeStatus('idle') }, 3000)
    }
  }

  return (
    <div style={{ padding: '2.5rem 2rem 3rem', fontFamily: 'sans-serif', color: '#fff', minHeight: '100%', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: '2rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-10px', left: '-4px', fontSize: '5rem', fontWeight: 900, color: `${C.primary}06`, userSelect: 'none', letterSpacing: '-4px', lineHeight: 1 }}>
            WRITE
          </div>
          <div style={{ position: 'relative' }}>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '3px', color: '#a855f7', textTransform: 'uppercase' as const, marginBottom: '0.5rem', padding: '4px 12px', background: '#a855f715', borderRadius: '20px', border: '1px solid #a855f730' }}>
              Thought Leadership
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, background: 'linear-gradient(135deg, #fff 30%, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', margin: '0.4rem 0 0.75rem', lineHeight: 1.1, letterSpacing: '-1px' }}>
              Blog & Articles
            </h2>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ height: '3px', width: '40px', background: 'linear-gradient(90deg, #a855f7, #6366f1)', borderRadius: '4px' }} />
              <div style={{ height: '3px', width: '20px', background: '#a855f760', borderRadius: '4px' }} />
              <div style={{ height: '3px', width: '8px', background: '#a855f730', borderRadius: '4px' }} />
            </div>
            <p style={{ color: '#64748b', fontSize: '0.88rem' }}>
              {data.posts.length} Articles · {data.stats.find(s => s.label === 'Total Views')?.value} Total Views
            </p>
          </div>
        </div>

        {/* ── Category filter ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '1.75rem' }}>
          <button
            onClick={() => setFilterCategory(null)}
            style={{
              padding: '5px 14px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 700,
              border: `1px solid ${!filterCategory ? '#a855f7' : '#a855f730'}`,
              background: !filterCategory ? '#a855f725' : 'transparent',
              color: !filterCategory ? '#a855f7' : '#64748b',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
          >
            All Posts
          </button>
          {categories.map((cat, i) => (
            <button key={i}
              onClick={() => setFilterCategory(filterCategory === cat ? null : cat)}
              style={{
                padding: '5px 14px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 600,
                border: `1px solid ${filterCategory === cat ? '#a855f760' : C.primary + '20'}`,
                background: filterCategory === cat ? '#a855f720' : 'transparent',
                color: filterCategory === cat ? '#a855f7' : '#64748b',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Featured article ── */}
        {featured && (
          <div
            onMouseEnter={() => setHovered(-1)}
            onMouseLeave={() => setHovered(null)}
            style={{
              marginBottom: '1.5rem', borderRadius: '20px', overflow: 'hidden',
              border: `1px solid ${hovered === -1 ? '#a855f750' : '#a855f718'}`,
              transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
              boxShadow: hovered === -1 ? '0 12px 40px #a855f720' : 'none',
              cursor: 'pointer', textDecoration: 'none', display: 'block',
            }}
          >
            {/* Gradient bar */}
            <div style={{ height: '4px', background: featured.gradient }} />

            <div style={{
              padding: '1.75rem 2rem',
              background: hovered === -1
                ? `linear-gradient(135deg, ${C.light}90, ${C.dark})`
                : `linear-gradient(135deg, ${C.light}55, ${C.dark})`,
              display: 'grid', gridTemplateColumns: '1fr auto',
              gap: '1.5rem', alignItems: 'start',
              transition: 'background 0.3s',
            }}>

              <div>
                {/* Category badge + featured */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                  <span style={{ padding: '4px 14px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 800, background: featured.gradient, color: '#fff' }}>
                    {featured.category}
                  </span>
                  <span style={{ padding: '3px 10px', borderRadius: '20px', fontSize: '0.65rem', fontWeight: 800, background: '#a855f725', color: '#a855f7', border: '1px solid #a855f750', letterSpacing: '0.5px', textTransform: 'uppercase' as const }}>
                    ★ Featured
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: hovered === -1 ? '#fff' : '#e2e8f0', marginBottom: '0.75rem', lineHeight: 1.3, transition: 'color 0.3s' }}>
                  {featured.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.8, marginBottom: '1rem', maxWidth: '600px' }}>
                  {featured.excerpt}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem' }}>
                  {featured.tags.map((tag, j) => (
                    <span key={j} style={{ padding: '3px 10px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 600, background: '#a855f715', color: '#a855f7', border: '1px solid #a855f725' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', color: '#64748b', marginBottom: '1.25rem' }}>
                  <span>📅 {featured.date}</span>
                  <span>•</span>
                  <span>⏱ {featured.readTime}</span>
                  <span>•</span>
                  <span>👁 {featured.views}</span>
                </div>

                <a 
                  href={featured.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 22px', borderRadius: '10px', background: 'linear-gradient(135deg, #a855f7, #6366f1)', color: '#fff', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}
                >
                  Read Full Article →
                </a>
              </div>

              {/* Reading time visualization */}
              <div style={{ textAlign: 'center', padding: '1.25rem 1rem', borderRadius: '14px', background: '#a855f715', border: '1px solid #a855f730', minWidth: '100px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#a855f7', lineHeight: 1 }}>
                  {featured.readTime.split(' ')[0]}
                </div>
                <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '4px', fontWeight: 600 }}>
                  min read
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Article grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {rest.map((post, i) => {
            const idx = i + 1
            const isHovered = hovered === idx
            return (
              <div 
                key={i}
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  borderRadius: '18px', overflow: 'hidden', cursor: 'pointer',
                  border: `1px solid ${isHovered ? '#a855f740' : C.primary + '12'}`,
                  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: isHovered ? '0 12px 30px rgba(0,0,0,0.3)' : 'none',
                  background: isHovered ? `${C.light}80` : `${C.light}40`,
                  display: 'flex', flexDirection: 'column', textDecoration: 'none',
                }}
              >
                {/* Gradient bar */}
                <div style={{ height: '3px', background: post.gradient }} />

                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  
                  {/* Category */}
                  <span style={{ display: 'inline-block', padding: '3px 12px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 800, background: post.gradient, color: '#fff', alignSelf: 'flex-start' }}>
                    {post.category}
                  </span>

                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: isHovered ? '#a855f7' : '#e2e8f0', lineHeight: 1.4, transition: 'color 0.3s', minHeight: '2.8em' }}>
                    {post.title}
                  </h3>

                  <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.7, flex: 1 }}>
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', minHeight: '28px' }}>
                    {post.tags.slice(0, 3).map((tag, j) => (
                      <span key={j} style={{ padding: '2px 8px', borderRadius: '20px', fontSize: '0.65rem', fontWeight: 600, background: '#a855f712', color: '#a855f7', border: '1px solid #a855f720' }}>
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span style={{ fontSize: '0.65rem', color: '#64748b', padding: '2px' }}>+{post.tags.length - 3}</span>
                    )}
                  </div>

                  {/* Meta + CTA */}
                  <div style={{ paddingTop: '8px', borderTop: `1px solid ${C.primary}10` }}>
                    <div style={{ display: 'flex', gap: '10px', fontSize: '0.68rem', color: '#64748b', marginBottom: '10px' }}>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.views}</span>
                    </div>
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#a855f7', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none' }}
                    >
                      Read More <span style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.3s' }}>→</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Newsletter subscription ── */}
        {/* <div style={{ borderRadius: '18px', overflow: 'hidden', border: `1px solid ${C.primary}18`, marginBottom: '1.75rem' }}>
          <div style={{ height: '3px', background: `linear-gradient(90deg, ${C.primary}, #a855f7)` }} />
          <div style={{ padding: '1.75rem 2rem', background: `linear-gradient(135deg, ${C.light}60, ${C.dark})` }}>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  📬 Subscribe to Newsletter
                  {subscribeStatus === 'success' && (
                    <span style={{ fontSize: '0.7rem', padding: '3px 10px', borderRadius: '20px', background: `${C.primary}20`, color: C.primary, border: `1px solid ${C.primary}40` }}>
                      ✓ Subscribed!
                    </span>
                  )}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
                  Get the latest articles delivered to your inbox weekly
                </p>
              </div>
              <div style={{ display: 'flex', gap: '8px', flex: 1, minWidth: '280px', maxWidth: '420px' }}>
                <input
                  type="email" value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={{ flex: 1, padding: '12px 16px', borderRadius: '10px', background: C.dark, border: `1px solid ${C.primary}30`, color: '#fff', fontSize: '0.85rem', outline: 'none', fontFamily: 'sans-serif' }}
                />
                <button type="submit" style={{ padding: '12px 24px', borderRadius: '10px', background: `linear-gradient(135deg, ${C.primary}, #06b6d4)`, color: C.dark, fontWeight: 800, fontSize: '0.85rem', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'sans-serif' }}>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div> */}

        {/* ── Stats ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
          {data.stats.map((s, i) => {
            const colors = ['#a855f7', C.secondary, C.primary, C.accent]
            return (
              <div key={i} style={{ textAlign: 'center', padding: '1rem', borderRadius: '14px', background: `${C.light}40`, border: `1px solid ${colors[i]}20` }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: colors[i], lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '4px', fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
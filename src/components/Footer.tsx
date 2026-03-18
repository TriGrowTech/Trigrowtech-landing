'use client';
import { useApp } from '@/context/AppContext';

export default function Footer() {
  const { lang, t } = useApp();

  return (
    <footer style={{ background: '#050C16', borderTop: '1px solid rgba(43,124,193,0.2)' }}>

      {/* ── CTA BAND ── */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '4rem 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
          <div>
            <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2B7CC1', marginBottom: 10 }}>
              {t('Ready to build?', 'बनाने के लिए तैयार?')}
            </p>
            <h3 style={{ fontFamily: "'Geist', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              {t("Let's turn your idea into a product.", 'आपके आइडिया को प्रोडक्ट बनाते हैं।')}
            </h3>
          </div>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            height: 44, padding: '0 24px',
            background: '#2B7CC1', color: '#fff',
            fontFamily: "'Geist', sans-serif", fontSize: 14, fontWeight: 600,
            borderRadius: 10, textDecoration: 'none',
          }}>
            {t('Start a project', 'प्रोजेक्ट शुरू करें')} →
          </a>
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 2rem 3rem' }}>
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img src="/tgt-logo.png" alt="TrigrowTech" style={{ width: 28, height: 28, objectFit: 'contain' }}
                onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <span style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: '-0.01em', color: '#fff' }}>
                Trigrow<span style={{ color: '#2B7CC1' }}>Tech</span>
              </span>
            </div>

            <p style={{ fontFamily: "'Geist', sans-serif", fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.45)', maxWidth: 210, marginBottom: 24 }}>
              {t(
                'We build software that works — fast, clean, and built to grow with you.',
                'हम ऐसा सॉफ़्टवेयर बनाते हैं जो काम करे।'
              )}
            </p>

            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { label: 'X', href: 'https://twitter.com/trigrowtech', svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                { label: 'LinkedIn', href: 'https://linkedin.com/company/trigrowtech', svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { label: 'Instagram', href: 'https://instagram.com/trigrowtech', svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                { label: 'Email', href: 'mailto:trigrowtech@gmail.com', svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg> },
              ].map(s => (
                <a key={s.label} href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  title={s.label}
                  className="footer-social-btn">
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="footer-heading">{t('Services', 'सेवाएं')}</p>
            {[
              [t('Web Applications', 'वेब एप्लिकेशन'), '#services'],
              [t('SaaS Products', 'SaaS प्रोडक्ट'), '#services'],
              [t('API & Backend', 'API / बैकएंड'), '#services'],
              [t('Tech Consulting', 'टेक कंसल्टिंग'), '#services'],
            ].map(([label, href]) => (
              <a key={String(label)} href={String(href)} className={`footer-link ${lang === 'hi' ? 'font-hindi' : ''}`}>
                {label}
              </a>
            ))}
          </div>

          {/* Products */}
          <div>
            <p className="footer-heading">{t('Products', 'प्रोडक्ट्स')}</p>
            <a href="https://orbitle.trigrowtech.in" target="_blank" rel="noopener noreferrer" className="footer-link">
              Orbitle
            </a>
            <p style={{ fontFamily: "'Geist', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.22)', marginBottom: 14, marginTop: -4 }}>
              {t('White-label travel SaaS', 'व्हाइट-लेबल ट्रैवल SaaS')}
            </p>
            <a href="#contact" className={`footer-link ${lang === 'hi' ? 'font-hindi' : ''}`}>
              {t('Join Waitlist', 'वेटलिस्ट')}
            </a>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-heading">{t('Contact Us', 'संपर्क करें')}</p>
            <a href="mailto:trigrowtech@gmail.com" className="footer-link" style={{ wordBreak: 'break-all' }}>
              trigrowtech@gmail.com
            </a>
            <a href="https://trigrowtech.in" target="_blank" rel="noopener noreferrer" className="footer-link">
              trigrowtech.in
            </a>
            <div style={{ marginTop: 16, fontFamily: "'Geist', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.28)', lineHeight: 1.8 }}>
              <p>{t('Delhi NCR, India', 'दिल्ली एनसीआर, भारत')}</p>
              <p>India — 201010</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} TrigrowTech. {t('All rights reserved.', 'सर्वाधिकार सुरक्षित।')}
          </p>
          <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
            {t('Designed & built in India', 'भारत में निर्मित')} 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
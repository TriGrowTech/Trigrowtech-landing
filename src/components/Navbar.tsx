'use client';
import { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

const NAV = [
  { en: 'Services', hi: 'सेवाएं',  href: '#services' },
  { en: 'Orbitle',  hi: 'Orbitle',  href: '#orbitle'  },
  { en: 'About',    hi: 'परिचय',   href: '#about'    },
  { en: 'Contact',  hi: 'संपर्क',  href: '#contact'  },
];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="2" x2="12" y2="4"/>
      <line x1="12" y1="20" x2="12" y2="22"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="2" y1="12" x2="4" y2="12"/>
      <line x1="20" y1="12" x2="22" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar() {
  const { lang, setLang, theme, toggleTheme, t } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'dark:bg-ink/95 bg-paper/95 backdrop-blur-2xl border-b hairline dark:border-steel/30 border-mist/60'
          : ''
      }`}>
        <nav className="max-w-[1400px] mx-auto px-8 h-[64px] flex items-center justify-between gap-8">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-8 h-8 flex-shrink-0">
              <img src="/tgt-logo.png"
                onError={(e) => { (e.target as HTMLImageElement).src = '/tgt-logo.svg'; }}
                alt="TrigrowTech" className="w-full h-full object-contain" />
            </div>
            <span className="font-heading font-semibold text-[15px] tracking-[0.1em] uppercase dark:text-paper text-ink whitespace-nowrap">
              Trigrow<span className="text-blue">Tech</span>
            </span>
          </a>

          {/* Center nav — no fixed widths, just overflow:hidden on the inner span */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {NAV.map(n => (
              <a
                key={n.href}
                href={n.href}
                className="relative flex items-center justify-center flex-shrink-0
                  transition-colors duration-200 dark:text-slate hover:text-blue dark:hover:text-sky text-dim"
                style={{ height: 28 }}
              >
                {/* Invisible spacer — always renders both labels to reserve max width */}
                <span aria-hidden className="invisible block text-[14px] tracking-[0.1em] uppercase font-heading font-medium whitespace-nowrap px-1">
                  {n.en.length >= (n.hi?.length ?? 0) ? n.en : n.hi}
                </span>

                {/* Animated visible label */}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={lang}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.14 }}
                    className={`absolute inset-0 flex items-center justify-center whitespace-nowrap
                      text-[14px] font-heading font-medium
                      ${lang === 'hi' ? 'font-hindi normal-case tracking-normal' : 'tracking-[0.1em] uppercase'}`}
                  >
                    {lang === 'hi' ? n.hi : n.en}
                  </motion.span>
                </AnimatePresence>
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">

            {/* Lang switcher — shows target language, fixed width */}
            <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="relative h-8 rounded-sm overflow-hidden flex items-center justify-center
                hairline dark:border-steel border-mist
                dark:text-slate text-dim
                dark:hover:border-blue/50 hover:border-blue dark:hover:text-sky hover:text-blue
                transition-all"
              style={{ minWidth: 72 }}
              title={lang === 'en' ? 'Switch to Hindi' : 'Switch to English'}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={lang}
                  initial={{ opacity: 0, y: 7 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -7 }}
                  transition={{ duration: 0.18 }}
                  className={`absolute text-[13px] font-medium whitespace-nowrap px-3
                    ${lang === 'en' ? 'font-hindi' : 'font-mono tracking-[0.06em] uppercase'}`}
                >
                  {lang === 'en' ? 'हिंदी' : 'English'}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="h-8 w-8 flex items-center justify-center rounded-sm hairline dark:border-steel border-mist
                dark:text-slate text-dim dark:hover:border-blue/50 hover:border-blue dark:hover:text-sky hover:text-blue transition-all"
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.span key="moon"
                    initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    style={{ display: 'flex' }}>
                    <MoonIcon />
                  </motion.span>
                ) : (
                  <motion.span key="sun"
                    initial={{ opacity: 0, rotate: 30, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -30, scale: 0.7 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    style={{ display: 'flex' }}>
                    <SunIcon />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* CTA — flex-shrink-0 + whitespace-nowrap so it never squishes */}
            <a href="#contact"
              className="flex-shrink-0 h-9 px-5 flex items-center bg-blue text-white text-[13px] tracking-[0.08em] uppercase font-heading font-semibold hover:bg-blue-2 transition-colors rounded-sm whitespace-nowrap">
              {t('Start Project', 'शुरू करें')}
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(true)} className="md:hidden dark:text-slate text-dim p-1 flex-shrink-0">
            <div className="space-y-1.5">
              <div className="w-5 h-px dark:bg-mist bg-steel-2"/>
              <div className="w-3 h-px dark:bg-mist bg-steel-2"/>
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 dark:bg-ink/80 bg-paper/80 backdrop-blur-xl"
              onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-72 z-50 dark:bg-ink-2 bg-white border-l hairline dark:border-steel/30 border-mist p-8 flex flex-col">
              <button onClick={() => setOpen(false)} className="self-end dark:text-slate text-dim mb-10 text-lg">×</button>
              <div className="flex flex-col gap-7 flex-1">
                {NAV.map(n => (
                  <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                    className="relative h-6 flex items-center overflow-hidden
                      text-[14px] tracking-[0.1em] uppercase font-heading font-medium
                      dark:text-mist text-steel hover:text-blue dark:hover:text-sky transition-colors">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={lang}
                        initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.14 }}
                        className={`absolute ${lang === 'hi' ? 'font-hindi normal-case tracking-normal text-[14px]' : ''}`}>
                        {lang === 'hi' ? n.hi : n.en}
                      </motion.span>
                    </AnimatePresence>
                  </a>
                ))}
              </div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <button onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
                    className="relative flex-1 h-10 rounded-sm hairline dark:border-steel border-mist overflow-hidden flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.span key={lang}
                        initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute text-[13px] font-medium dark:text-slate text-dim
                          ${lang === 'en' ? 'font-hindi' : 'font-mono tracking-widest uppercase'}`}>
                        {lang === 'en' ? 'हिंदी' : 'English'}
                      </motion.span>
                    </AnimatePresence>
                  </button>
                  <button onClick={toggleTheme}
                    className="flex-1 h-10 rounded-sm hairline dark:border-steel border-mist dark:text-slate text-dim flex items-center justify-center gap-2 text-[13px] tracking-widest uppercase font-heading">
                    <AnimatePresence mode="wait">
                      {theme === 'dark' ? (
                        <motion.span key="moon-m" initial={{ opacity: 0, rotate: -20 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 20 }} transition={{ duration: 0.18 }} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <MoonIcon /> Light
                        </motion.span>
                      ) : (
                        <motion.span key="sun-m" initial={{ opacity: 0, rotate: 20 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -20 }} transition={{ duration: 0.18 }} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <SunIcon /> Dark
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
                <a href="#contact" onClick={() => setOpen(false)}
                  className="block h-11 bg-blue text-white text-[13px] tracking-widest uppercase font-heading font-semibold flex items-center justify-center rounded-sm">
                  {t('Start Project', 'शुरू करें')}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
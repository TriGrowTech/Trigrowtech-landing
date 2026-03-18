'use client';
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useApp } from '@/context/AppContext';

export default function Orbitle() {
  const { lang, t } = useApp();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="orbitle" ref={ref} className="py-24 overflow-hidden dark:bg-ink bg-paper">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-12">

        {/* ── Highlighted container ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="orbitle-card"
        >
          {/* Subtle grid overlay */}
          <div className="orbitle-grid-overlay" />

          {/* Top label row */}
          <div className="orbitle-topbar">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
              <span className="orbitle-eyebrow">{t('Flagship Product', 'प्रमुख प्रोडक्ट')}</span>
            </div>
            <a
              href="https://orbitle.trigrowtech.in"
              target="_blank" rel="noopener noreferrer"
              className="orbitle-visit-link"
            >
              {t('Visit Product', 'प्रोडक्ट देखें')}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-60">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Main grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* ── Left copy ── */}
            <div>
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <h2 className="orbitle-title">ORBITLE</h2>
                <p className="orbitle-tagline">
                  {t('White-label Travel SaaS · Built in India', 'व्हाइट-लेबल ट्रैवल SaaS · भारत में निर्मित')}
                </p>
              </motion.div>

              {/* Problem + What it does */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.25 }}
                className="mt-8 space-y-6"
              >
                <div>
                  <p className="orbitle-section-label">{t('The Problem', 'समस्या')}</p>
                  <p className={`orbitle-body ${lang === 'hi' ? 'font-hindi' : ''}`}>
                    {t(
                      'Indian travel operators were stuck managing bookings via WhatsApp groups and Excel sheets. No proper product existed for ₹33/day.',
                      'भारतीय ट्रैवल ऑपरेटर्स WhatsApp ग्रुप और Excel शीट से बुकिंग मैनेज कर रहे थे। ₹33/दिन में कोई प्रॉपर प्रोडक्ट नहीं था।'
                    )}
                  </p>
                </div>
                <div>
                  <p className="orbitle-section-label">{t('What Orbitle Does', 'Orbitle क्या करता है')}</p>
                  <p className={`orbitle-body ${lang === 'hi' ? 'font-hindi' : ''}`}>
                    {t(
                      'A complete white-label travel portal — branded to your company — with package management, agent dashboards, booking flows, and payment collection out of the box.',
                      'एक पूर्ण white-label ट्रैवल पोर्टल — आपकी कंपनी के ब्रांड में — पैकेज मैनेजमेंट, एजेंट डैशबोर्ड, बुकिंग और पेमेंट के साथ।'
                    )}
                  </p>
                </div>
              </motion.div>

              {/* Feature list */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.35 }}
                className="mt-8 orbitle-features"
              >
                {[
                  [t('Operator Portal', 'ऑपरेटर पोर्टल'), t('Full package & booking management', 'पूर्ण पैकेज और बुकिंग मैनेजमेंट')],
                  [t('Agent Dashboard', 'एजेंट डैशबोर्ड'), t('Sub-agent creation, tracking, commissions', 'सब-एजेंट क्रिएशन, ट्रैकिंग, कमीशन')],
                  [t('Package Catalog', 'पैकेज कैटलॉग'), t('Rich media, pricing tiers, itineraries', 'रिच मीडिया, प्राइसिंग टियर, इटिनरेरी')],
                  [t('White-label', 'व्हाइट-लेबल'), t('Your logo, your domain, your brand', 'आपका लोगो, आपका डोमेन, आपका ब्रांड')],
                ].map(([feature, desc], i) => (
                  <div key={i} className="orbitle-feature-row">
                    <span className={`orbitle-feature-name ${lang === 'hi' ? 'font-hindi' : ''}`}>{feature}</span>
                    <span className={`orbitle-feature-desc ${lang === 'hi' ? 'font-hindi' : ''}`}>{desc}</span>
                  </div>
                ))}
              </motion.div>

              {/* Pricing */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="mt-8 flex gap-3"
              >
                {[
                  { plan: t('Operator', 'ऑपरेटर'), price: '₹33', unit: t('/day', '/दिन') },
                  { plan: t('Agent', 'एजेंट'), price: '₹17', unit: t('/day', '/दिन') },
                ].map(p => (
                  <div key={p.plan} className="orbitle-price-card">
                    <p className={`orbitle-price-label ${lang === 'hi' ? 'font-hindi' : ''}`}>{p.plan}</p>
                    <p className="orbitle-price-amount">{p.price}</p>
                    <p className={`orbitle-price-unit ${lang === 'hi' ? 'font-hindi' : ''}`}>{p.unit}</p>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.45 }}
                className="mt-8 flex gap-3"
              >
                <a href="https://orbitle.trigrowtech.in" target="_blank" rel="noopener noreferrer"
                  className="orbitle-btn-primary">
                  {t('Explore Orbitle', 'Orbitle देखें')}
                </a>
                <a href="#contact" className="orbitle-btn-ghost">
                  {t('Join Waitlist', 'वेटलिस्ट')}
                </a>
              </motion.div>
            </div>

            {/* ── Right — dashboard mockup ── */}
            <motion.div style={{ y }} className="lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Browser chrome */}
                <div className="orbitle-browser">
                  <div className="orbitle-browser-bar">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/40" />
                    </div>
                    <div className="flex-1 mx-3 h-6 bg-white/5 rounded flex items-center px-3">
                      <span className="font-mono text-[11px] text-white/30">orbitle.trigrowtech.in/dashboard</span>
                    </div>
                  </div>

                  {/* Dashboard content */}
                  <div className="orbitle-dashboard">
                    {/* Top bar */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-0.5">{t('Dashboard', 'डैशबोर्ड')}</p>
                        <h3 className="font-semibold text-white text-sm">{t('Good morning, Ravi', 'सुप्रभात, Ravi')}</h3>
                      </div>
                      <button className="h-7 px-3 bg-blue text-white font-mono text-[11px] tracking-wider rounded-md">+ {t('Package', 'पैकेज')}</button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2.5 mb-4">
                      {[['142', t('Bookings', 'बुकिंग')], ['28', t('Packages', 'पैकेज')], ['₹3.2L', t('Revenue', 'रेवेन्यू')]].map(([v, l]) => (
                        <div key={String(l)} className="bg-white/5 rounded-lg p-3 border border-white/8">
                          <p className="text-white font-semibold text-xl leading-none mb-1">{v}</p>
                          <p className={`font-mono text-[9px] tracking-widest uppercase text-white/30 ${lang === 'hi' ? 'font-hindi normal-case text-[10px]' : ''}`}>{l}</p>
                        </div>
                      ))}
                    </div>

                    {/* Package list */}
                    <div>
                      <p className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-2.5">{t('Recent Packages', 'हाल के पैकेज')}</p>
                      <div className="space-y-1.5">
                        {[
                          ['Manali Winter Getaway', '5D/4N', '₹18,999', 'active'],
                          ['Kerala Backwaters', '7D/6N', '₹24,500', 'active'],
                          ['Rajasthan Heritage', '8D/7N', '₹31,000', 'draft'],
                        ].map(([name, dur, price, status]) => (
                          <div key={String(name)} className="flex items-center gap-3 bg-white/4 rounded-lg px-3 py-2.5 border border-white/6">
                            <div className="w-6 h-6 bg-gradient-to-br from-blue to-steel rounded-md flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                              {(name as string)[0]}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white/90 text-[11px] font-medium truncate">{name}</p>
                              <p className="font-mono text-[9px] text-white/30">{dur}</p>
                            </div>
                            <p className="font-semibold text-[11px] text-sky-400">{price}</p>
                            <span className={`font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-md ${
                              status === 'active'
                                ? 'bg-emerald-500/15 text-emerald-400'
                                : 'bg-white/8 text-white/30'
                            }`}>{status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
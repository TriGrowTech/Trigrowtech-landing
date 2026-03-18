'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useApp } from '@/context/AppContext';

const SERVICES = [
  {
    num: '01',
    en: { title: 'Custom Web Development', short: 'Full-stack web applications', desc: 'End-to-end web apps built with modern stacks — Next.js, Node.js, PostgreSQL. Optimized for performance, built to scale.' },
    hi: { title: 'कस्टम वेब डेवलपमेंट', short: 'फुल-स्टैक वेब एप्लिकेशन', desc: 'मॉडर्न टेक स्टैक से बने एंड-टू-एंड वेब ऐप्स — Next.js, Node.js, PostgreSQL। परफॉर्मेंस के लिए ऑप्टिमाइज़।' },
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    num: '02',
    en: { title: 'SaaS Product Design & Build', short: 'Multi-tenant platforms', desc: 'We architect and ship complete SaaS products — from database schema to UI — built for real operators to run businesses on.' },
    hi: { title: 'SaaS प्रोडक्ट डिज़ाइन और बिल्ड', short: 'मल्टी-टेनेंट प्लेटफॉर्म', desc: 'हम पूरे SaaS प्रोडक्ट आर्किटेक्ट और शिप करते हैं — डेटाबेस स्कीमा से UI तक।' },
    tags: ['Architecture', 'Multi-tenant', 'SaaS'],
  },
  {
    num: '03',
    en: { title: 'Mobile App Development', short: 'iOS & Android', desc: 'React Native and native mobile apps that feel polished on every device. Fast performance, clean UX, production-grade code.' },
    hi: { title: 'मोबाइल ऐप डेवलपमेंट', short: 'iOS और Android', desc: 'React Native और नेटिव मोबाइल ऐप्स जो हर डिवाइस पर पॉलिश्ड फील करते हैं।' },
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    num: '04',
    en: { title: 'API & Backend Engineering', short: 'Robust server infrastructure', desc: 'REST and GraphQL APIs, microservices, background jobs, and cloud infrastructure that handles real traffic reliably.' },
    hi: { title: 'API और बैकएंड इंजीनियरिंग', short: 'मजबूत सर्वर इन्फ्रास्ट्रक्चर', desc: 'REST और GraphQL APIs, माइक्रोसर्विसेज़ और क्लाउड इन्फ्रास्ट्रक्चर।' },
    tags: ['REST', 'GraphQL', 'NestJS'],
  },
  {
    num: '05',
    en: { title: 'UI/UX Design', short: 'Figma to production', desc: 'Interface design that converts — clean information hierarchy, thoughtful interactions, designed for real users not portfolios.' },
    hi: { title: 'UI/UX डिज़ाइन', short: 'Figma से प्रोडक्शन तक', desc: 'इंटरफेस डिज़ाइन जो कन्वर्ट करे — रियल यूज़र्स के लिए।' },
    tags: ['Figma', 'Prototyping', 'Design Systems'],
  },
  {
    num: '06',
    en: { title: 'Tech Consulting', short: 'Strategy & architecture', desc: 'Technical audits, architecture reviews, team augmentation, and strategic roadmapping for founders who need to build right.' },
    hi: { title: 'टेक कंसल्टिंग', short: 'रणनीति और आर्किटेक्चर', desc: 'टेक्निकल ऑडिट, आर्किटेक्चर रिव्यू, और रोडमैपिंग।' },
    tags: ['Audit', 'Roadmap', 'Architecture'],
  },
];

function ServiceRow({ s, i }: { s: typeof SERVICES[0]; i: number }) {
  const { lang, t } = useApp();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group grid grid-cols-[60px_1fr_auto] lg:grid-cols-[80px_1fr_200px_160px] gap-6 items-start py-8 border-b hairline dark:border-steel/40 border-mist/60 hover:dark:bg-ink-2/50 hover:bg-paper-2/50 transition-colors -mx-8 px-8 cursor-default"
    >
      {/* Number */}
      <span className="font-mono text-[11px] tracking-widest dark:text-mist text-mist pt-1">{s.num}</span>

      {/* Title + desc */}
      <div>
        <h3 className={`font-heading font-semibold text-lg dark:text-paper text-ink mb-1.5 group-hover:text-blue transition-colors ${lang === 'hi' ? 'font-hindi' : ''}`}>
          {lang === 'hi' ? s.hi.title : s.en.title}
        </h3>
        <p className={`text-[15px] dark:text-slate text-dim leading-relaxed max-w-lg ${lang === 'hi' ? 'font-hindi' : ''}`}>
          {lang === 'hi' ? s.hi.desc : s.en.desc}
        </p>
      </div>

      {/* Tags — hidden on mobile */}
      <div className="hidden lg:flex flex-wrap gap-1.5 pt-1">
        {s.tags.map(tag => (
          <span key={tag} className="font-mono text-[11px] tracking-widest uppercase dark:text-slate text-dim hairline dark:border-steel/50 border-mist px-2 py-1 rounded-sm">
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <div className="flex items-start pt-1 justify-end">
        <a href="#contact"
          className="font-mono text-[11px] tracking-widest uppercase dark:text-mist text-mist group-hover:text-blue transition-colors flex items-center gap-1.5">
          {t('Inquire', 'पूछें')} →
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const { lang, t } = useApp();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="services" className="dark:bg-ink bg-paper py-24">
      <div className="max-w-[1400px] mx-auto px-8 xl:px-24">

        {/* Section header */}
        <div ref={ref} className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div initial={{opacity:0,x:-12}} animate={inView ? {opacity:1,x:0} : {}} transition={{duration:0.5}}
              className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-blue" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-blue">{t('What We Do', 'हम क्या करते हैं')}</span>
            </motion.div>
            <motion.h2 initial={{opacity:0,y:20}} animate={inView ? {opacity:1,y:0} : {}} transition={{duration:0.7, delay:0.1}}
              className={`font-display text-[clamp(36px,6vw,80px)] leading-[0.95] dark:text-paper text-ink ${lang === 'hi' ? 'font-heading font-semibold text-[clamp(30px,5vw,60px)]' : ''}`}>
              {t('SERVICES', 'सेवाएं')}
            </motion.h2>
          </div>
          <motion.p initial={{opacity:0}} animate={inView ? {opacity:1} : {}} transition={{delay:0.3}}
            className={`max-w-xs text-[15px] dark:text-slate text-dim leading-relaxed ${lang === 'hi' ? 'font-hindi' : ''}`}>
            {t(
              'From MVP to enterprise scale — we cover the full stack and deliver.',
              'MVP से एंटरप्राइज़ स्केल तक — हम पूरा स्टैक कवर करते हैं।'
            )}
          </motion.p>
        </div>

        {/* Table header */}
        <div className="hidden lg:grid grid-cols-[80px_1fr_200px_160px] gap-6 pb-4 border-b hairline dark:border-steel/50 border-mist -mx-8 px-8">
          {['#', t('Service', 'सेवा'), t('Stack', 'स्टैक'), ''].map((h, i) => (
            <span key={i} className="font-mono text-[11px] tracking-[0.25em] uppercase dark:text-mist text-mist">{h}</span>
          ))}
        </div>

        {/* Service rows */}
        {SERVICES.map((s, i) => <ServiceRow key={s.num} s={s} i={i} />)}

        {/* Bottom CTA */}
        <div className="pt-10 flex justify-center">
          <a href="#contact"
            className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] uppercase dark:text-slate text-dim dark:hover:text-sky hover:text-blue transition-colors group">
            <span>{t('All services include free consultation', 'सभी सेवाओं में मुफ्त परामर्श शामिल')}</span>
            <div className="w-6 h-px dark:bg-slate bg-mist group-hover:w-10 group-hover:bg-blue transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}

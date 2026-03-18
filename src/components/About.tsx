'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useApp } from '@/context/AppContext';

const PILLARS = [
  {
    num: '01',
    en: { title: 'We ship, not just plan', body: 'No endless discovery phases. We move from brief to working product fast — with real code, not Figma prototypes.' },
    hi: { title: 'हम शिप करते हैं, सिर्फ प्लान नहीं', body: 'अंतहीन डिस्कवरी फेज नहीं। हम ब्रीफ से वर्किंग प्रोडक्ट तक तेज़ी से बढ़ते हैं।' },
  },
  {
    num: '02',
    en: { title: 'We build our own products', body: 'Orbitle is live. We think like founders, not contractors — which means we make smarter tradeoffs for your product.' },
    hi: { title: 'हम अपने प्रोडक्ट भी बनाते हैं', body: 'Orbitle लाइव है। हम कॉन्ट्रैक्टर की तरह नहीं, फाउंडर की तरह सोचते हैं।' },
  },
  {
    num: '03',
    en: { title: 'India-native, globally capable', body: 'Deep knowledge of Indian markets, payment flows, and user behaviors — with the technical quality global companies expect.' },
    hi: { title: 'भारत-नेटिव, ग्लोबली कैपेबल', body: 'भारतीय बाज़ारों और पेमेंट फ्लो की गहरी समझ — ग्लोबल टेक क्वालिटी के साथ।' },
  },
  {
    num: '04',
    en: { title: 'Architecture you can grow into', body: 'We design systems for where you\'re going, not just where you are today. Clean code, documented, maintainable.' },
    hi: { title: 'आर्किटेक्चर जो स्केल करे', body: 'हम सिस्टम वहाँ के लिए डिज़ाइन करते हैं जहाँ आप जा रहे हैं, न कि जहाँ आप आज हैं।' },
  },
];

export default function About() {
  const { lang, t } = useApp();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="dark:bg-ink bg-paper py-32">
      <div className="max-w-[1400px] mx-auto px-8 xl:px-24">

        <div className="grid lg:grid-cols-[1fr_2fr] gap-20">

          {/* Left sticky label */}
          <div>
            <motion.div initial={{opacity:0,x:-12}} animate={inView ? {opacity:1,x:0} : {}} transition={{duration:0.5}}
              className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-blue" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-blue">{t('Why Us', 'हम क्यों')}</span>
            </motion.div>
            <motion.h2 initial={{opacity:0,y:20}} animate={inView ? {opacity:1,y:0} : {}} transition={{duration:0.7, delay:0.1}}
              className={`font-display text-[clamp(36px,5vw,72px)] leading-[0.95] dark:text-paper text-ink mb-8 ${lang === 'hi' ? 'font-heading font-semibold text-[clamp(28px,4vw,52px)]' : ''}`}>
              {t('WHY\nTRIGROW\nTECH', 'TrigrowTech\nक्यों')}
            </motion.h2>
            <motion.p initial={{opacity:0}} animate={inView ? {opacity:1} : {}} transition={{delay:0.4}}
              className={`text-[15px] dark:text-slate text-dim leading-relaxed ${lang === 'hi' ? 'font-hindi' : ''}`}>
              {t(
                'We\'re a small, senior team. Every project is handled by people who have actually built and shipped products.',
                'हम एक छोटी, सीनियर टीम हैं। हर प्रोजेक्ट उन लोगों द्वारा हैंडल किया जाता है जिन्होंने प्रोडक्ट शिप किए हैं।'
              )}
            </motion.p>
          </div>

          {/* Right — pillars */}
          <div className="space-y-0">
            {PILLARS.map((p, i) => (
              <motion.div key={p.num}
                initial={{opacity:0, x:20}} animate={inView ? {opacity:1, x:0} : {}}
                transition={{duration:0.6, delay:0.15 + i*0.1, ease:[0.22,1,0.36,1]}}
                className="grid grid-cols-[48px_1fr] gap-6 py-8 border-b hairline dark:border-steel/40 border-mist/60">
                <span className="font-mono text-xs tracking-widest dark:text-mist text-mist pt-1">{p.num}</span>
                <div>
                  <h3 className={`font-heading font-semibold text-base dark:text-paper text-ink mb-2 ${lang === 'hi' ? 'font-hindi' : ''}`}>
                    {lang === 'hi' ? p.hi.title : p.en.title}
                  </h3>
                  <p className={`text-[15px] dark:text-slate text-dim leading-relaxed ${lang === 'hi' ? 'font-hindi' : ''}`}>
                    {lang === 'hi' ? p.hi.body : p.en.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '@/context/AppContext';

const WORDS_EN = ['Web Applications', 'SaaS Platforms', 'Mobile Apps', 'Backend Systems', 'Digital Products'];
const WORDS_HI = ['वेब एप्लिकेशन', 'SaaS प्लेटफॉर्म', 'मोबाइल ऐप्स', 'बैकएंड सिस्टम', 'डिजिटल प्रोडक्ट्स'];

function TypeCycle({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, words]);

  return (
    <span className="shimmer-text font-display">
      {displayed}<span className="cursor-blink opacity-60" />
    </span>
  );
}

export default function Hero() {
  const { lang, t } = useApp();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize);

    const cols = Math.floor(W / 60);
    const rows = Math.floor(H / 60);
    type Dot = { x: number; y: number; ox: number; oy: number; phase: number; speed: number; };
    const dots: Dot[] = [];
    for (let c = 0; c <= cols; c++) {
      for (let r = 0; r <= rows; r++) {
        dots.push({ x: c * 60, y: r * 60, ox: c * 60, oy: r * 60, phase: Math.random() * Math.PI * 2, speed: 0.4 + Math.random() * 0.6 });
      }
    }

    let frame = 0;
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      frame++;
      const isDark = document.documentElement.classList.contains('dark');
      dots.forEach(d => {
        d.x = d.ox + Math.sin(frame * 0.008 * d.speed + d.phase) * 4;
        d.y = d.oy + Math.cos(frame * 0.006 * d.speed + d.phase) * 3;
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(43,124,193,0.25)' : 'rgba(43,124,193,0.15)';
        ctx.fill();
      });
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 70) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = isDark
              ? `rgba(26,58,92,${0.4 * (1 - dist/70)})`
              : `rgba(43,124,193,${0.12 * (1 - dist/70)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col dark:bg-ink bg-paper overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-50" />
      <div className="absolute top-[60px] left-0 right-0 rule opacity-40" />

      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
        <div className="w-px h-16 dark:bg-blue/30 bg-mist/60" />
        <p className="font-mono text-[9px] tracking-[0.3em] uppercase dark:text-slate text-dim rotate-180"
          style={{ writingMode: 'vertical-rl' }}>
          {t('EST. 2025 · INDIA', 'स्थापित 2024 · भारत')}
        </p>
        <div className="w-px h-16 dark:bg-blue/30 bg-mist/60" />
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
        <div className="w-px h-16 dark:bg-blue/30 bg-mist/60" />
        <p className="font-mono text-[9px] tracking-[0.3em] uppercase dark:text-slate text-dim"
          style={{ writingMode: 'vertical-rl' }}>
          trigrowtech.in
        </p>
        <div className="w-px h-16 dark:bg-blue/30 bg-mist/60" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1400px] mx-auto w-full px-8 xl:px-24 pt-24 pb-16">

        <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.1}}
          className="flex items-center gap-3 mb-10">
          <div className="w-8 h-px bg-blue" />
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-blue">
            {t('Custom Tech Solutions', 'कस्टम टेक सॉल्यूशन्स')}
          </span>
        </motion.div>

        {/* Line 1 — "WE BUILD" — overflow-hidden is fine here, Latin text is predictable */}
        <div className="mb-4 overflow-hidden pb-2">
          <motion.h1
            initial={{y:80, opacity:0}} animate={{y:0, opacity:1}}
            transition={{duration:0.9, ease:[0.22,1,0.36,1], delay:0.2}}
            className={`font-display text-[clamp(52px,10vw,140px)] leading-[0.92] tracking-wide dark:text-paper text-ink
              ${lang === 'hi' ? 'font-heading font-semibold text-[clamp(40px,7vw,100px)]' : ''}`}>
            {t('WE BUILD', 'हम बनाते हैं')}
          </motion.h1>
        </div>

        {/* Line 2 — TypeCycle — NO overflow-hidden, padding top/bottom for Hindi ascenders/descenders */}
        <div className="mb-10 pt-3 pb-4">
          <motion.div
            initial={{y:80,opacity:0}} animate={{y:0,opacity:1}}
            transition={{duration:0.9, ease:[0.22,1,0.36,1], delay:0.35}}
            className={`font-display text-[clamp(52px,10vw,140px)] leading-[1.05]
              ${lang === 'hi' ? 'font-heading font-semibold text-[clamp(40px,7vw,100px)]' : ''}`}>
            <TypeCycle words={lang === 'hi' ? WORDS_HI : WORDS_EN} />
          </motion.div>
        </div>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7, delay:0.6}}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-md">
            <p className={`text-lg dark:text-slate text-dim leading-relaxed mb-8 ${lang === 'hi' ? 'font-hindi' : ''}`}>
              {t(
                'TrigrowTech is a software company that builds custom digital products and SaaS platforms for founders, operators, and enterprises across India.',
                'TrigrowTech एक सॉफ्टवेयर कंपनी है जो भारत भर के फाउंडर्स, ऑपरेटर्स और एंटरप्राइज़ के लिए कस्टम डिजिटल प्रोडक्ट्स और SaaS प्लेटफॉर्म बनाती है।'
              )}
            </p>
            <div className="flex gap-4">
              <a href="#contact"
                className="h-11 px-7 flex items-center bg-blue text-white text-[11px] tracking-[0.15em] uppercase font-heading font-semibold hover:bg-blue-2 transition-colors duration-200 rounded-sm">
                {t('Start a Project', 'प्रोजेक्ट शुरू करें')}
              </a>
              <a href="#services"
                className="h-11 px-7 flex items-center hairline dark:border-steel/60 border-mist dark:text-slate text-dim text-[11px] tracking-[0.15em] uppercase font-heading font-semibold dark:hover:border-blue/50 hover:border-blue dark:hover:text-sky hover:text-blue transition-all rounded-sm">
                {t('Our Services', 'सेवाएं')}
              </a>
            </div>
          </div>

          <div className="flex gap-10 lg:pb-1">
            {[
              { num: '50+', en: 'Projects', hi: 'प्रोजेक्ट्स' },
              { num: '4+', en: 'Products Built', hi: 'प्रोडक्ट्स' },
              { num: '2025', en: 'Founded', hi: 'स्थापित' },
            ].map((s, i) => (
              <motion.div key={s.num} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay: 0.7 + i * 0.1}}>
                <div className="font-display text-4xl dark:text-paper text-ink tracking-wide">{s.num}</div>
                <div className={`text-xs tracking-[0.15em] uppercase dark:text-slate text-dim mt-1 ${lang === 'hi' ? 'font-hindi normal-case tracking-normal text-[11px]' : 'font-mono'}`}>
                  {lang === 'hi' ? s.hi : s.en}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
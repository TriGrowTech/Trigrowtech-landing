'use client';
import { useApp } from '@/context/AppContext';

const items = [
  'Custom Web Applications',
  'SaaS Architecture',
  'Mobile Development',
  'API Engineering',
  'UI/UX Design',
  'Tech Consulting',
  'Orbitle — Travel SaaS',
  'White-label Products',
];

export default function Marquee() {
  const { t } = useApp();
  const doubled = [...items, ...items];

  return (
    <div className="dark:bg-ink-2 bg-paper-2 border-y hairline dark:border-steel/40 border-mist/60 py-4 overflow-hidden">
      <div className="flex marquee-track gap-0 whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center flex-shrink-0">
            <span className="font-mono text-xs tracking-[0.25em] uppercase dark:text-slate text-dim px-8">{item}</span>
            <span className="text-blue/40 font-mono">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

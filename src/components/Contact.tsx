'use client';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useApp } from '@/context/AppContext';

const PROJECT_TYPES = [
  ['Web Application', 'वेब एप्लिकेशन'],
  ['Mobile App', 'मोबाइल ऐप'],
  ['SaaS Product', 'SaaS प्रोडक्ट'],
  ['Tech Consulting', 'टेक कंसल्टिंग'],
  ['API / Backend', 'API / बैकएंड'],
  ['Other', 'अन्य'],
];

const BUDGETS = ['Under ₹50K', '₹50K–₹2L', '₹2L–₹5L', '₹5L+'];
const TIMELINES_EN = ['ASAP', '1–3 months', '3–6 months', 'Flexible'];
const TIMELINES_HI = ['जल्द से जल्द', '1–3 महीने', '3–6 महीने', 'फ्लेक्सिबल'];

type Form = {
  name: string; email: string; phone: string; company: string;
  type: string; budget: string; timeline: string; description: string;
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Contact() {
  const { lang, t } = useApp();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [form, setForm] = useState<Form>({
    name: '', email: '', phone: '', company: '',
    type: '', budget: '', timeline: '', description: '',
  });
  const [sent, setSent] = useState(false);

  const set = (k: keyof Form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = () => {
    const sub = `Project Inquiry — ${form.name}${form.company ? ` (${form.company})` : ''}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || '—'}`,
      `Company: ${form.company || '—'}`,
      `Project Type: ${form.type}`,
      `Budget: ${form.budget}`,
      `Timeline: ${form.timeline}`,
      `\nDescription:\n${form.description}`,
    ].join('\n');
    window.location.href = `mailto:trigrowtech@gmail.com?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const Field = ({
    label, children,
  }: { label: string; children: React.ReactNode }) => (
    <div className="contact-field">
      <label className="contact-label">{label}</label>
      {children}
    </div>
  );

  const inputCls =
    'contact-input';

  return (
    <section id="contact" ref={ref} className="contact-section">
      <div className="contact-inner">

        {/* Header */}
        <motion.div {...fadeUp(0)} animate={inView ? fadeUp(0).animate : fadeUp(0).initial}
          className="contact-header">
          <span className="contact-eyebrow">{t("Contact", "संपर्क")}</span>
          <h2 className="contact-title">
            {t("Start a project", "प्रोजेक्ट शुरू करें")}
          </h2>
          <p className="contact-subtitle">
            {t(
              "Tell us what you're building. We'll get back within 24 hours.",
              "हमें बताएं आप क्या बना रहे हैं। हम 24 घंटे में जवाब देंगे।"
            )}
          </p>
        </motion.div>

        {sent ? (
          <motion.div {...fadeUp(0.1)} className="contact-success">
            <div className="contact-success-icon">✓</div>
            <h3>{t('Email client opened', 'ईमेल क्लाइंट खुल गया')}</h3>
            <p>{t('We respond within 24 hours.', 'हम 24 घंटे में जवाब देते हैं।')}</p>
            <button onClick={() => setSent(false)} className="contact-link-btn">
              {t('Submit another →', 'दोबारा भेजें →')}
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="contact-body"
          >
            {/* Left — form */}
            <div className="contact-form-col">

              {/* Name + Email */}
              <div className="contact-row">
                <Field label={t('Name', 'नाम')}>
                  <input type="text" className={inputCls}
                    placeholder={t('Your full name', 'आपका पूरा नाम')}
                    value={form.name} onChange={set('name')} />
                </Field>
                <Field label={t('Email', 'ईमेल')}>
                  <input type="email" className={inputCls}
                    placeholder="you@company.com"
                    value={form.email} onChange={set('email')} />
                </Field>
              </div>

              {/* Phone + Company */}
              <div className="contact-row">
                <Field label={t('Phone', 'फोन')}>
                  <input type="tel" className={inputCls}
                    placeholder="+91 98765 43210"
                    value={form.phone} onChange={set('phone')} />
                </Field>
                <Field label={t('Company', 'कंपनी')}>
                  <input type="text" className={inputCls}
                    placeholder={t('Optional', 'वैकल्पिक')}
                    value={form.company} onChange={set('company')} />
                </Field>
              </div>

              {/* Project type */}
              <Field label={t('Project type', 'प्रोजेक्ट प्रकार')}>
                <div className="contact-chips">
                  {PROJECT_TYPES.map(([en, hi]) => (
                    <button key={en} type="button"
                      onClick={() => setForm(f => ({ ...f, type: en }))}
                      className={`contact-chip ${form.type === en ? 'active' : ''}`}>
                      {lang === 'hi' ? hi : en}
                    </button>
                  ))}
                </div>
              </Field>

              {/* Budget + Timeline */}
              <div className="contact-row">
                <Field label={t('Budget', 'बजट')}>
                  <div className="contact-chips">
                    {BUDGETS.map(b => (
                      <button key={b} type="button"
                        onClick={() => setForm(f => ({ ...f, budget: b }))}
                        className={`contact-chip ${form.budget === b ? 'active' : ''}`}>
                        {b}
                      </button>
                    ))}
                  </div>
                </Field>
                <Field label={t('Timeline', 'टाइमलाइन')}>
                  <div className="contact-chips">
                    {TIMELINES_EN.map((tl, i) => (
                      <button key={tl} type="button"
                        onClick={() => setForm(f => ({ ...f, timeline: tl }))}
                        className={`contact-chip ${form.timeline === tl ? 'active' : ''}`}>
                        {lang === 'hi' ? TIMELINES_HI[i] : tl}
                      </button>
                    ))}
                  </div>
                </Field>
              </div>

              {/* Description */}
              <Field label={t('Description', 'विवरण')}>
                <textarea rows={4} className={inputCls + ' contact-textarea'}
                  placeholder={t(
                    'What are you building? Describe the problem, requirements, and goals.',
                    'आप क्या बना रहे हैं? समस्या, ज़रूरतें और लक्ष्य बताएं।'
                  )}
                  value={form.description} onChange={set('description')} />
              </Field>

              {/* Submit row */}
              <div className="contact-submit-row">
                <span className="contact-note">{t('Response within 24 hours', '24 घंटे में जवाब')}</span>
                <button onClick={submit} className="contact-submit-btn">
                  {t('Send inquiry', 'भेजें')} →
                </button>
              </div>
            </div>

            {/* Right — info panel */}
            <div className="contact-info-col">
              <div className="contact-info-card">
                <p className="contact-info-label">{t('Email', 'ईमेल')}</p>
                <p className="contact-info-value">trigrowtech@gmail.com</p>
              </div>
              <div className="contact-info-card">
                <p className="contact-info-label">{t('Website', 'वेबसाइट')}</p>
                <p className="contact-info-value">trigrowtech.in</p>
              </div>
              <div className="contact-info-card">
                <p className="contact-info-label">{t('Location', 'स्थान')}</p>
                <p className="contact-info-value">{t('Ghaziabad, India', 'गाज़ियाबाद, भारत')}</p>
              </div>
              <div className="contact-info-card contact-info-note">
                <p>{t('We work with startups, agencies, and businesses across India and globally.', 'हम पूरे भारत और विश्व में स्टार्टअप, एजेंसी और बिज़नेस के साथ काम करते हैं।')}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
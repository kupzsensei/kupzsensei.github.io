'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, NeonButton } from '@/components/ui';
import { useInView } from '@/hooks';
import siteData from '@/data/site.json';

export default function Contact() {
  const { ref, inView } = useInView(0.2);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="05" title="CONTACT" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="border border-cyan/10 bg-surface/50 p-8 backdrop-blur-sm"
        >
          <div className="mb-6 font-mono text-xs text-green">
            guest@portfolio:~$ send-message
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-mono text-xs text-cyan mb-2">
                &gt; ENTER NAME:
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-cyan/20 py-2 font-mono text-sm text-white focus:border-cyan focus:outline-none transition-colors"
                placeholder="Your name..."
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-cyan mb-2">
                &gt; ENTER EMAIL:
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-cyan/20 py-2 font-mono text-sm text-white focus:border-cyan focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-cyan mb-2">
                &gt; ENTER MESSAGE:
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-cyan/20 py-2 font-mono text-sm text-white focus:border-cyan focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <NeonButton type="submit" variant="cyan">
              {submitted ? '[ TRANSMITTED ]' : '[ TRANSMIT ]'}
            </NeonButton>
          </form>

          {/* Social links */}
          <div className="mt-10 space-y-2 border-t border-cyan/10 pt-6">
            <div className="font-mono text-xs text-green">
              guest@portfolio:~$ list-links
            </div>
            <div className="space-y-1">
              {siteData.socials.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="block font-mono text-xs text-muted transition-colors hover:text-cyan"
                >
                  &gt; {link.label.toUpperCase().padEnd(12, '.')}
                  <span className="text-cyan"> {link.url}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio Inquiry');
    const body = encodeURIComponent(`Hi, my name is ${form.name}.\n\n${form.message}\n\n(${form.email})`);
    window.location.href = `mailto:you@email.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-20 sm:px-8">
      <div className="mb-10 flex items-center gap-3">
        <div className="h-8 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-emerald-400" />
        <h2 className="text-2xl font-bold sm:text-3xl">Contact</h2>
      </div>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-border bg-card/60 p-6 shadow-xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Name">
            <Input name="name" value={form.name} onChange={onChange} placeholder="Your name" required />
          </Field>
          <Field label="Email">
            <Input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@example.com" required />
          </Field>
        </div>
        <Field label="Message" className="mt-4">
          <Textarea name="message" value={form.message} onChange={onChange} placeholder="Tell me about your project..." rows={5} required />
        </Field>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20"
        >
          <Mail size={18} /> Send message
        </motion.button>
      </motion.form>
    </section>
  );
}

function Field({ label, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <div className="mb-2 text-sm font-medium">{label}</div>
      {children}
    </label>
  );
}

function Input(props) {
  return (
    <motion.input
      whileFocus={{ boxShadow: '0 0 0 3px rgba(217, 70, 239, 0.25)' }}
      className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 outline-none transition-colors placeholder:text-muted-foreground/60"
      {...props}
    />
  );
}

function Textarea(props) {
  return (
    <motion.textarea
      whileFocus={{ boxShadow: '0 0 0 3px rgba(34, 211, 238, 0.25)' }}
      className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 outline-none transition-colors placeholder:text-muted-foreground/60"
      {...props}
    />
  );
}

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive UI Kit',
    desc: 'A component library with motion-first primitives and accessibility baked in.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Course Platform',
    desc: 'Teaching platform with video chapters, quizzes, and analytics.',
    tags: ['TypeScript', 'Node.js', 'Postgres'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Parallax charts and live metrics powered by websockets.',
    tags: ['React', 'WebSockets', 'D3'],
    link: '#',
    repo: '#',
  },
];

function TiltCard({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);
  const springX = useSpring(rotateX, { stiffness: 120, damping: 12 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 12 });

  function onMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  }

  function onMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d' }}
      className="group relative h-full w-full rounded-2xl border border-zinc-200/20 bg-white/60 p-6 backdrop-blur will-change-transform dark:border-zinc-700/50 dark:bg-zinc-900/40"
    >
      {children}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}

export default function ProjectsAndContact() {
  return (
    <section id="projects" className="relative w-full py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-4xl"
        >
          Featured Projects
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <TiltCard>
                <div style={{ transform: 'translateZ(24px)', transformStyle: 'preserve-3d' }}>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-zinc-200/30 bg-white/40 px-2 py-0.5 text-[11px] text-zinc-700 backdrop-blur dark:border-zinc-700/50 dark:bg-zinc-900/40 dark:text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href={p.repo}
                      className="inline-flex items-center gap-1 text-sm font-medium text-zinc-800 transition-colors hover:text-fuchsia-500 dark:text-zinc-100"
                    >
                      <Github className="h-4 w-4" /> Repo
                    </a>
                    <a
                      href={p.link}
                      className="inline-flex items-center gap-1 text-sm font-medium text-zinc-800 transition-colors hover:text-cyan-500 dark:text-zinc-100"
                    >
                      <ExternalLink className="h-4 w-4" /> Live
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <div id="contact" className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold text-zinc-900 dark:text-white"
            >
              Let’s build something great
            </motion.h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Have a project, workshop, or collaboration in mind? I’d love to hear about it.
            </p>
          </div>
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = Object.fromEntries(new FormData(form).entries());
              console.log('Contact form submission', data);
              form.reset();
              alert('Thanks! I will get back to you soon.');
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-zinc-200/20 bg-white/60 p-6 backdrop-blur dark:border-zinc-700/50 dark:bg-zinc-900/40"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FloatingInput label="Name" name="name" />
              <FloatingInput label="Email" name="email" type="email" />
            </div>
            <div className="mt-4">
              <FloatingInput label="Subject" name="subject" />
            </div>
            <div className="mt-4">
              <FloatingTextarea label="Message" name="message" />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform duration-300 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function FloatingInput({ label, name, type = 'text' }) {
  return (
    <label className="group relative block">
      <input
        name={name}
        type={type}
        placeholder=" "
        className="peer h-12 w-full rounded-xl border border-zinc-300/50 bg-white/70 px-4 text-sm text-zinc-900 outline-none transition focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/30 dark:border-zinc-700/60 dark:bg-zinc-900/60 dark:text-zinc-100"
        required
      />
      <span className="pointer-events-none absolute left-3 top-3 px-1 text-xs text-zinc-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-focus:-top-2 peer-focus:bg-white/70 peer-focus:text-[11px] peer-focus:text-fuchsia-500 dark:peer-focus:bg-zinc-900/60">
        {label}
      </span>
    </label>
  );
}

function FloatingTextarea({ label, name }) {
  return (
    <label className="group relative block">
      <textarea
        name={name}
        rows={5}
        placeholder=" "
        className="peer w-full rounded-xl border border-zinc-300/50 bg-white/70 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 dark:border-zinc-700/60 dark:bg-zinc-900/60 dark:text-zinc-100"
        required
      />
      <span className="pointer-events-none absolute left-3 top-3 px-1 text-xs text-zinc-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-focus:-top-2 peer-focus:bg-white/70 peer-focus:text-[11px] peer-focus:text-cyan-500 dark:peer-focus:bg-zinc-900/60">
        {label}
      </span>
    </label>
  );
}

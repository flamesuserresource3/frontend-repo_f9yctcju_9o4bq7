import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Video } from 'lucide-react';

const items = [
  {
    title: 'Interactive UI Kit',
    desc: 'A component library with motion primitives and themeable tokens.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    github: '#',
    live: '#',
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Streaming metrics with websockets, charts, and command palette.',
    tags: ['TypeScript', 'Vite', 'WebSockets'],
    github: '#',
    live: '#',
  },
  {
    title: 'Teaching: React Patterns',
    desc: 'Workshop series covering state, performance, and architecture.',
    tags: ['Teaching', 'Workshops', 'DX'],
    github: '#',
    live: '#',
    icon: Video,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8">
      <div className="mb-10 flex items-center gap-3">
        <div className="h-8 w-1 rounded-full bg-gradient-to-b from-emerald-400 to-cyan-400" />
        <h2 className="text-2xl font-bold sm:text-3xl">Projects & Teaching</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((item, i) => (
          <ParallaxCard key={item.title} index={i} {...item} />
        ))}
      </div>
    </section>
  );
}

function ParallaxCard({ title, desc, tags, github, live, index, icon: Icon }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -2 : 2]);

  return (
    <motion.article
      ref={ref}
      style={{ y, rotate }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-5 shadow-lg backdrop-blur-sm transition-transform hover:-translate-y-1"
    >
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/15 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-400/15 blur-2xl" />
      </div>

      <div className="mb-3 flex items-center gap-2">
        {Icon ? (
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 text-fuchsia-500">
            <Icon size={18} />
          </div>
        ) : (
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20" />
        )}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <p className="mb-4 text-sm text-muted-foreground">{desc}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-border bg-background/60 px-2 py-1 text-xs text-foreground/80">
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <a
          href={github}
          className="inline-flex items-center gap-1 text-sm text-foreground/90 transition-colors hover:text-foreground"
        >
          <Github size={16} /> Code
        </a>
        <a
          href={live}
          className="inline-flex items-center gap-1 text-sm text-foreground/90 transition-colors hover:text-foreground"
        >
          <ExternalLink size={16} /> Live
        </a>
      </div>
    </motion.article>
  );
}

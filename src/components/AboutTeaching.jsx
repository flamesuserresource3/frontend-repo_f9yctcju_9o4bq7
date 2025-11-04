import { motion } from 'framer-motion';
import { BookOpen, Video, Code } from 'lucide-react';

export default function AboutTeaching() {
  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6 } }),
  };

  return (
    <section id="about" className="relative w-full py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-4xl"
        >
          About Me & Teaching
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-3xl text-center text-zinc-600 dark:text-zinc-400"
        >
          I’m a creator at heart and an engineer by craft. I design delightful interfaces, build high-performance systems, and teach practical skills that empower others to ship.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: Code,
              title: 'Engineering',
              desc:
                'Frontend-first mindset with strong fundamentals in TypeScript, React, Node.js, and modern tooling.',
              color: 'from-fuchsia-500/20 to-cyan-400/20',
            },
            {
              icon: BookOpen,
              title: 'Teaching',
              desc:
                'Experienced instructor and mentor. Workshops, bootcamps, and curriculum design focused on real-world outcomes.',
              color: 'from-emerald-500/20 to-teal-400/20',
            },
            {
              icon: Video,
              title: 'Content',
              desc:
                'Produce concise, hands-on videos and articles that simplify complex topics with visuals and code demos.',
              color: 'from-indigo-500/20 to-purple-400/20',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200/20 bg-white/60 p-6 backdrop-blur dark:border-zinc-700/50 dark:bg-zinc-900/40"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.color}`} />
              <div className="relative">
                <card.icon className="h-8 w-8 text-zinc-800 dark:text-zinc-200" />
                <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

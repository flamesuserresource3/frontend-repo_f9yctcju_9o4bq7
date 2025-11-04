import { motion } from 'framer-motion';
import { Palette, Layers, Rocket } from 'lucide-react';

const skills = [
  { name: 'React', level: 95, color: 'from-sky-500 to-cyan-400', icon: Rocket },
  { name: 'TypeScript', level: 90, color: 'from-blue-500 to-indigo-400', icon: Layers },
  { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-amber-500', icon: Palette },
  { name: 'Node.js', level: 85, color: 'from-emerald-500 to-teal-400', icon: Layers },
  { name: 'CSS / Tailwind', level: 93, color: 'from-fuchsia-500 to-pink-500', icon: Palette },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-4xl"
        >
          Skills
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-zinc-200/20 bg-white/60 p-5 backdrop-blur dark:border-zinc-700/50 dark:bg-zinc-900/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <s.icon className="h-6 w-6 text-zinc-800 dark:text-zinc-200" />
                  <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{s.name}</span>
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">{s.level}%</span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-zinc-200/60 dark:bg-zinc-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className={`h-full rounded-full bg-gradient-to-r ${s.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

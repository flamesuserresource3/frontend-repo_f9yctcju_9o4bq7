import { motion } from 'framer-motion';
import { BookOpen, Code2, GraduationCap } from 'lucide-react';

const skills = [
  { name: 'React', level: 92 },
  { name: 'TypeScript', level: 88 },
  { name: 'JavaScript', level: 95 },
  { name: 'Node.js', level: 80 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Testing (Jest/Vitest)', level: 78 },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8">
      <div className="mb-10 flex items-center gap-3">
        <div className="h-8 w-1 rounded-full bg-gradient-to-b from-fuchsia-500 to-cyan-400" />
        <h2 className="text-2xl font-bold sm:text-3xl">About Me</h2>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3"
        >
          <p className="text-muted-foreground">
            I’m a creative engineer who blends code, design, and education. I build scalable frontends,
            teach modern web technologies, and share knowledge through articles and videos.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Feature icon={Code2} title="Engineer" desc="Building fast, reliable, and accessible UIs." />
            <Feature icon={BookOpen} title="Teacher" desc="Workshops and mentoring for devs and teams." />
            <Feature icon={GraduationCap} title="Creator" desc="Tech videos and tutorials with clarity." />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2"
        >
          <h3 className="mb-3 text-lg font-semibold">Skills</h3>
          <div className="space-y-4">
            {skills.map((s) => (
              <div key={s.name} className="">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-medium">{s.name}</span>
                  <span className="text-xs text-muted-foreground">{s.level}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-foreground/30">
      <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 text-fuchsia-500">
        <Icon size={20} />
      </div>
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-sm text-muted-foreground">{desc}</div>
    </div>
  );
}

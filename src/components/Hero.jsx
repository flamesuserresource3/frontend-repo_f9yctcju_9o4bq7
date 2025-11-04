import { useEffect, useMemo, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  const titles = useMemo(
    () => [
      'Frontend Engineer',
      'Software Engineer',
      'Software Teacher',
      'Content Creator',
    ],
    []
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % titles.length);
    }, 2000);
    return () => clearInterval(id);
  }, [titles.length]);

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, -80]);

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-500/30 to-cyan-400/30 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/20 to-emerald-400/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200/20 bg-zinc-50/60 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-zinc-700/50 dark:bg-zinc-900/40 dark:text-zinc-200">
            <Rocket className="h-3.5 w-3.5 text-fuchsia-500" />
            Crafting delightful experiences
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-white md:text-6xl">
            Hi, I’m <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">Your Name</span>
          </h1>

          <div className="mt-3 h-8 overflow-hidden">
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-medium text-zinc-700 dark:text-zinc-300"
            >
              {titles[index]}
            </motion.div>
          </div>

          <p className="mt-5 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
            I build fast, accessible, and visually-striking products. I also teach developers and create content that makes complex topics feel simple and fun.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl border border-zinc-300/40 bg-white/60 px-5 py-3 text-sm font-semibold text-zinc-800 backdrop-blur transition-colors hover:border-zinc-400 dark:border-zinc-700/60 dark:bg-zinc-900/40 dark:text-zinc-100"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div style={{ y: parallaxY }} className="relative h-[420px] w-full md:h-[520px]">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-b from-white/20 to-transparent backdrop-blur-sm dark:from-white/5" />
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>
      </div>
    </section>
  );
}

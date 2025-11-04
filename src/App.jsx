import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import AboutTeaching from './components/AboutTeaching';
import Skills from './components/Skills';
import ProjectsAndContact from './components/ProjectsAndContact';
import { Sun, Moon } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored ?? (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-100">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/40 bg-white/70 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-bold tracking-tight">
            <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">Portfolio</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-fuchsia-500">About</a>
            <a href="#skills" className="hover:text-cyan-500">Skills</a>
            <a href="#projects" className="hover:text-emerald-500">Projects</a>
            <a href="#contact" className="hover:text-indigo-500">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200/50 bg-white/70 text-zinc-800 transition hover:scale-105 dark:border-zinc-700/60 dark:bg-zinc-900/50 dark:text-zinc-100"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <AboutTeaching />
        <Skills />
        <ProjectsAndContact />
      </main>

      <footer className="mt-24 border-t border-zinc-200/40 py-10 text-center text-xs text-zinc-500 dark:border-zinc-800/60 dark:text-zinc-400">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

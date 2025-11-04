import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Top nav with theme toggle */}
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-8">
          <a href="#home" className="text-sm font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">Portfolio</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="text-muted-foreground transition-colors hover:text-foreground">About</a>
            <a href="#portfolio" className="text-muted-foreground transition-colors hover:text-foreground">Work</a>
            <a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">Contact</a>
          </nav>
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:border-foreground/40"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>

      <footer className="border-t border-border/60 bg-background/80">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>

      {/* Page entrance subtle fade */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="pointer-events-none fixed inset-0 bg-background"
      />
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`relative mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 sm:px-10 ${
          scrolled
            ? "glass rounded-full py-3 shadow-[0_1px_20px_-8px_rgba(0,0,0,0.08)] w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)]"
            : "w-full"
        }`}
      >
        <Link
          to="/"
          className="font-serif text-lg tracking-tight text-foreground"
          aria-label="Catalina — Inicio"
          onClick={handleLinkClick}
        >
          Catalina<span className="text-sage">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 text-sm text-muted-foreground md:flex">
          <a href="/#perfil" className="transition-colors hover:text-foreground">
            Perfil
          </a>
          <a href="/#proyectos" className="transition-colors hover:text-foreground">
            Proyectos
          </a>
          <a href="/#contacto" className="transition-colors hover:text-foreground">
            Contacto
          </a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="/#contacto"
          className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium tracking-wide text-background transition-all hover:opacity-90 sm:px-5 sm:text-sm md:inline-flex"
        >
          Hablemos
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className="flex items-center justify-center rounded-full p-2 text-foreground transition-colors hover:bg-secondary/40 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full mt-3 bg-background rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] md:hidden z-50 border border-border/60"
            >
              <nav className="flex flex-col gap-5 text-lg font-serif tracking-wide text-foreground">
                <a
                  href="/#perfil"
                  onClick={handleLinkClick}
                  className="transition-colors hover:text-sage"
                >
                  Perfil
                </a>
                <a
                  href="/#proyectos"
                  onClick={handleLinkClick}
                  className="transition-colors hover:text-sage"
                >
                  Proyectos
                </a>
                <a
                  href="/#contacto"
                  onClick={handleLinkClick}
                  className="transition-colors hover:text-sage"
                >
                  Contacto
                </a>
                <a
                  href="/#contacto"
                  onClick={handleLinkClick}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground py-3 text-sm font-medium tracking-wide text-background transition-all hover:opacity-90 w-full font-sans"
                >
                  Hablemos
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}


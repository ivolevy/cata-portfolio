import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      style={{ position: "fixed", zIndex: 1000 }}
      className={`inset-x-0 top-0 flex h-16 w-full items-center transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F4F0] border-b border-[#E5E2DD] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:px-10">
        <Link
          to="/"
          className="font-serif text-lg tracking-tight text-[#1A1A1A]"
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
          className="relative z-[110] flex h-10 w-10 items-center justify-center rounded-full p-2 text-[#1A1A1A] transition-colors hover:bg-secondary/40 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#1A1A1A" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#1A1A1A" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full mx-4 mt-2 bg-[#F7F4F0] rounded-2xl p-6 shadow-xl md:hidden z-[90] border border-[#E5E2DD]"
            >
              <nav className="flex flex-col gap-5 text-lg font-serif tracking-wide text-[#1A1A1A]">
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



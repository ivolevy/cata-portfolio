import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 sm:px-10 ${
          scrolled
            ? "glass rounded-full py-3 shadow-[0_1px_20px_-8px_rgba(0,0,0,0.08)] w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)]"
            : "w-full"
        }`}
      >
        <Link
          to="/"
          className="font-serif text-lg tracking-tight text-foreground"
          aria-label="Catalina — Inicio"
        >
          Catalina<span className="text-sage">.</span>
        </Link>
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
        <a
          href="/#contacto"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium tracking-wide text-background transition-all hover:opacity-90 sm:px-5 sm:text-sm"
        >
          Hablemos
        </a>
      </div>
    </header>
  );
}

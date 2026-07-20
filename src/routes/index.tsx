import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Instagram,
  MapPin,
  Phone,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/lib/projects";

import heroImg from "@/assets/WhatsApp Image 2026-07-19 at 23.51.04.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
});

const habilidades = [
  "Organización y planificación de eventos",
  "Comunicación interpersonal",
  "Creatividad",
  "Atención al detalle",
  "Trabajo en equipo",
  "Resolución de problemas",
];

const herramientas = [
  "Canva",
  "Microsoft Office",
  "Google Workspace",
  "IA aplicada a eventos y contenido",
];

const idiomas = [
  { lang: "Español", level: "Nativo" },
  { lang: "Inglés", level: "Básico" },
];

const formacion = [
  {
    school: "Universidad de Palermo",
    period: "2026 – Actualidad",
    detail: "Tecnicatura en Organización de Eventos",
  },
  {
    school: "Escuela Secundaria N.º 4 \"Leandro N. Alem\"",
    period: "Egresada",
    detail: "Orientación en arte y diseño",
  },
];

function Index() {
  return (
    <main className="relative overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Profile />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center bg-beige-soft pt-28 sm:pt-32 lg:items-end"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-32 top-1/3 h-[520px] w-[520px] rounded-full bg-sage-soft blur-3xl opacity-70" />
        <div className="absolute -right-24 top-10 h-[360px] w-[360px] rounded-full bg-beige blur-3xl opacity-60" />
      </div>

      {/* Adorable Smiling French Bulldog Line Art (Profile) - positioned at the bottom left, overlapping next section */}
      <div
        className="absolute left-[-20px] bottom-[-30px] sm:left-0 sm:bottom-[-40px] md:bottom-[-60px] lg:bottom-[-20px] h-[160px] w-[160px] pointer-events-none select-none sm:h-[220px] sm:w-[220px] md:h-[280px] md:w-[280px] lg:h-[340px] lg:w-[340px] z-20"
        style={{ opacity: 0.35 }}
      >
        <img
          src="/bulldog_lineart.png"
          alt="Adorable Smiling French Bulldog Profile"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 pb-16 sm:px-10 md:pb-24 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6 lg:pt-10">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight text-balance"
          >
            Hola, soy{" "}
            <span className="italic text-sage">Catalina</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl"
          >
            Estudiante de Organización de Eventos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 hidden flex-wrap items-center gap-3 sm:flex"
          >
            <a
              href="#perfil"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:opacity-90"
            >
              Conoceme un poco
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              Mira mis proyectos
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-6">
          {/* Custom SVG ClipPath for the wavy organic mirror shape */}
          <svg className="absolute h-0 w-0" aria-hidden="true">
            <defs>
              <clipPath id="hero-blob" clipPathUnits="objectBoundingBox">
                <path d="M0.5 0.02 C0.85 0.02, 0.92 0.12, 0.88 0.32 C0.84 0.48, 0.94 0.58, 0.92 0.75 C0.9 0.92, 0.72 0.98, 0.5 0.98 C0.28 0.98, 0.1 0.92, 0.08 0.75 C0.06 0.58, 0.16 0.48, 0.12 0.32 C0.08 0.12, 0.15 0.02, 0.5 0.02 Z" />
              </clipPath>
            </defs>
          </svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, filter: "blur(14px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-[4/5] w-full max-w-[520px]"
            style={{ filter: "drop-shadow(0 25px 50px rgba(60,50,40,0.15))" }}
          >
            <div
              className="relative h-full w-full overflow-hidden bg-secondary"
              style={{ clipPath: "url(#hero-blob)" }}
            >
              <motion.img
                src={heroImg}
                alt="Retrato editorial de Catalina, organizadora de eventos"
                width={1200}
                height={1500}
                style={{ y, scale }}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

            {/* Matching delicate frame overlay */}
            <svg
              viewBox="0 0 1 1"
              className="absolute inset-0 h-full w-full pointer-events-none z-20"
              preserveAspectRatio="none"
            >
              <path
                d="M0.5 0.02 C0.85 0.02, 0.92 0.12, 0.88 0.32 C0.84 0.48, 0.94 0.58, 0.92 0.75 C0.9 0.92, 0.72 0.98, 0.5 0.98 C0.28 0.98, 0.1 0.92, 0.08 0.75 C0.06 0.58, 0.16 0.48, 0.12 0.32 C0.08 0.12, 0.15 0.02, 0.5 0.02 Z"
                fill="none"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="0.005"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{ opacity }}
        className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>Scroll</span>
          <span className="relative block h-10 w-px overflow-hidden bg-border">
            <motion.span
              className="absolute inset-x-0 top-0 h-4 bg-foreground"
              animate={{ y: ["-100%", "260%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </div>
      </motion.div>
    </section>
  );
}



function Projects() {
  return (
    <section id="proyectos" className="relative bg-secondary/50 py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Proyectos seleccionados
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Un poco de lo que <span className="italic text-sage">hice</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground text-pretty">
              Tres trabajos donde cuidé desde la primera idea hasta el último
              detalle. Cliqueá para ver el proceso completo.
            </p>
          </Reveal>
        </div>

        <div className="space-y-8 md:space-y-12">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const flip = index % 2 === 1;
  return (
    <Reveal>
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="group block overflow-hidden rounded-[2rem] border border-border/60 bg-background shadow-[0_20px_60px_-40px_rgba(60,50,40,0.4)] transition-all duration-500 hover:shadow-[0_30px_90px_-40px_rgba(60,50,40,0.5)]"
      >
        <div className={`grid grid-cols-1 lg:grid-cols-12 ${flip ? "lg:[direction:rtl]" : ""}`}>
          <div className="relative aspect-[4/3] overflow-hidden lg:col-span-7 lg:aspect-[4/3] lg:[direction:ltr]">
            <img
              src={project.cover}
              alt={project.name}
              width={1400}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute left-6 top-6 flex items-center gap-2 rounded-full bg-background/85 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground backdrop-blur">
              <span className="text-foreground">{project.index}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 p-8 sm:p-12 lg:col-span-5 lg:[direction:ltr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-sage">
                {project.category}
              </p>
              <h3 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                {project.name}
              </h3>
              <p className="mt-5 hidden text-base leading-relaxed text-muted-foreground text-pretty sm:block">
                {project.short}
              </p>
            </div>

            <div className="flex items-center justify-end gap-4">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                Ver proyecto
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

function Profile() {
  return (
    <section id="perfil" className="relative bg-beige-soft/60 py-28 sm:py-40">
      {/* Decorative puppy line art in the top right with background blur */}
      <div className="absolute right-[-100px] top-[-50px] h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] rounded-full bg-sage-soft/15 blur-[80px] sm:blur-[120px] pointer-events-none select-none z-0" />
      <div
        className="absolute right-0 top-10 lg:top-48 h-[160px] w-[160px] pointer-events-none select-none sm:h-[220px] sm:w-[220px] md:h-[280px] md:w-[280px] lg:h-[340px] lg:w-[340px]"
        style={{ opacity: 0.25 }}
      >
        <img
          src="/puppy_lineart.png"
          alt="Adorable Puppy Line Art Profile"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 sm:px-10 relative z-10">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Perfil profesional
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Formación, herramientas y{" "}
              <span className="italic text-sage">habilidades</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              ¡Hola! Soy Cata, tengo 19 años y soy de Vedia, provincia de Buenos Aires. Me mudé a la ciudad para estudiar la Licenciatura en Organización de Eventos en la Universidad de Palermo, impulsada por mis ganas de crecer profesionalmente y desarrollar mi creatividad.
              <br />
              <br />
              Me apasiona la planificación, el diseño y la creación de experiencias que conecten con las personas, tanto en espacios presenciales como en medios digitales. Disfruto pensar propuestas donde la estética, la decoración, la identidad visual y el cuidado de cada detalle transmitan una idea, una emoción o la esencia de una marca.
              <br />
              <br />
              Me considero una persona organizada, creativa, comprometida y con muchas ganas de aprender. Busco mi primera oportunidad profesional para seguir desarrollándome en proyectos vinculados a la organización, la comunicación, el diseño de experiencias y la creación de contenidos que generen impacto.

            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="h-full rounded-3xl border border-border bg-background p-8 sm:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Formación académica
              </p>
              <ul className="mt-8 space-y-8">
                {formacion.map((f) => (
                  <li key={f.school} className="border-l border-sage/60 pl-6">
                    <div>
                      <h3 className="font-serif text-xl tracking-tight sm:text-2xl">
                        {f.school}
                      </h3>
                      <span className="mt-1 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        {f.period}
                      </span>
                    </div>
                    <p className="mt-2 text-base text-muted-foreground">
                      {f.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="h-full rounded-3xl border border-border bg-background p-8 sm:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Idiomas
              </p>
              <ul className="mt-6 space-y-3">
                {idiomas.map((i) => (
                  <li
                    key={i.lang}
                    className="flex items-baseline justify-between border-b border-border/60 pb-3 last:border-0"
                  >
                    <span className="font-serif text-xl tracking-tight">
                      {i.lang}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {i.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="h-full rounded-3xl border border-border bg-background p-8 sm:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Habilidades
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {habilidades.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm text-foreground/80"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="h-full rounded-3xl border border-border bg-background p-8 sm:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Herramientas
              </p>
              <ul className="mt-6 space-y-2">
                {herramientas.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-3 font-serif text-lg tracking-tight"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Decorative dog with crown line art in the bottom left - placed at the end of the stacking context to overlay card backgrounds */}
        <div className="absolute left-[-150px] bottom-[-300px] sm:bottom-[-330px] md:bottom-[-390px] lg:bottom-[-470px] h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] rounded-full bg-sage-soft/10 blur-[80px] sm:blur-[120px] pointer-events-none select-none z-10" />
        <div
          className="absolute left-[-40px] sm:left-[-70px] md:left-[-90px] lg:left-[-110px] bottom-[-180px] sm:bottom-[-200px] md:bottom-[-240px] lg:bottom-[-300px] h-[160px] w-[160px] pointer-events-none select-none sm:h-[220px] sm:w-[220px] md:h-[280px] md:w-[280px] lg:h-[340px] lg:w-[340px] z-30"
          style={{ opacity: 0.15 }}
        >
          <img
            src="/dog_crown_lineart.png"
            alt="Adorable Dog with Crown Line Art Profile"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="relative py-28 sm:py-40">
      {/* Decorative cat line art in the top left with background blur */}
      <div className="absolute left-[-120px] top-[-80px] h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-full bg-sage-soft/10 blur-[80px] sm:blur-[120px] pointer-events-none select-none z-0" />
      <div
        className="absolute left-[-10px] sm:left-[-5px] md:left-0 lg:left-2 top-10 h-[140px] w-[140px] pointer-events-none select-none sm:h-[180px] sm:w-[180px] md:h-[230px] md:w-[230px] lg:h-[280px] lg:w-[280px] z-10"
        style={{ opacity: 0.15 }}
      >
        <img
          src="/cat_profile_spot.png?v=3"
          alt="Adorable Cat Profile Line Art with Spot"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Decorative cat with yellow eyes line art in the top right with background blur */}
      <div className="absolute right-[-120px] top-[-160px] sm:top-[-200px] md:top-[-240px] lg:top-[-280px] h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-full bg-sage-soft/10 blur-[80px] sm:blur-[120px] pointer-events-none select-none z-0" />
      <div
        className="absolute right-[-10px] sm:right-[-5px] md:right-0 lg:right-2 top-[-70px] sm:top-[-90px] md:top-[-120px] lg:top-[-150px] h-[140px] w-[140px] pointer-events-none select-none sm:h-[180px] sm:w-[180px] md:h-[230px] md:w-[230px] lg:h-[280px] lg:w-[280px] z-10"
        style={{ opacity: 0.15 }}
      >
        <img
          src="/cat_profile_yellow_eyes.png?v=3"
          alt="Adorable Cat Profile Line Art with Yellow Eyes"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center sm:px-10 relative z-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Contacto
          </p>
        </Reveal>
        <Reveal delay={0.35}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <a
              href="mailto:wauthierasurabarrenamariacatal@gmail.com"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> wauthierasurabarrenamariacatal@gmail.com
            </a>
            <a
              href="tel:+5492364227196"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4" /> +54 9 2364 22 7196
            </a>
            <a
              href="https://www.instagram.com/portf.catalina_/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Instagram className="h-4 w-4" /> @portf.catalina_
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Palermo, CABA
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-xs text-muted-foreground sm:px-10">
        <p className="font-serif text-base text-foreground">
          Catalina Wauthier
        </p>
        <p>2026 ©</p>
      </div>
    </footer>
  );
}

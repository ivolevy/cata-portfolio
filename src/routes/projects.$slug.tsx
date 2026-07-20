import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { getProject, projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.project.name} — Catalina` },
            { name: "description", content: loaderData.project.short },
            { property: "og:title", content: `${loaderData.project.name} — Catalina` },
            { property: "og:description", content: loaderData.project.short },
            { property: "og:image", content: loaderData.project.cover },
            { property: "og:type", content: "article" },
          ],
        }
      : {},
  component: ProjectPage,
  notFoundComponent: ProjectNotFound,
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="font-serif text-2xl italic">Este proyecto no cargó</p>
          <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="mt-6 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm text-background"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  },
});

function ProjectNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="font-serif text-5xl italic">Sin resultado</p>
        <p className="mt-3 text-sm text-muted-foreground">
          Este proyecto no está disponible.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-foreground px-6 py-3 text-sm text-background"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <Reveal>
            <a
              href="/#proyectos"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Todos los proyectos
            </a>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <Reveal delay={0.05}>
                <p className="text-xs uppercase tracking-[0.3em] text-sage">
                  {project.index} · {project.category}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] tracking-tight text-balance">
                  {project.name}
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
                  {project.description}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={0.25}>
                <dl className="space-y-6 rounded-2xl border border-border bg-secondary/50 p-6">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      Año
                    </dt>
                    <dd className="mt-1 font-serif text-xl">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      Herramientas
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {project.tools.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/80"
                        >
                          {t}
                        </span>
                      ))}
                    </dd>
                  </div>
                  {project.videoUrl && (
                    <div className="border-t border-border/60 pt-4">
                      <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        Video
                      </dt>
                      <dd className="mt-2">
                        <a
                          href={project.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-all hover:opacity-90"
                        >
                          Ver video emotivo
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="mt-16 sm:mt-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.97, filter: "blur(14px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] bg-secondary shadow-[0_30px_100px_-40px_rgba(60,50,40,0.45)]"
          >
            <img
              src={project.cover}
              alt={project.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* What I did + Objectives */}
      <section className="py-28 sm:py-36">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Lo que hice
            </p>
            <ul className="mt-6 space-y-4">
              {project.role.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 border-b border-border/60 pb-4 text-base text-foreground/85"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Objetivos
            </p>
            <ul className="mt-6 space-y-4">
              {project.objectives.map((o) => (
                <li
                  key={o}
                  className="flex items-start gap-3 border-b border-border/60 pb-4 text-base text-foreground/85"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-beige-soft/60 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Proceso creativo
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Cómo lo <span className="italic text-sage">construimos</span>.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {project.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-background p-8">
                  <span className="font-mono text-xs tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Galería
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-6">
            {project.gallery.map((g, i) => (
              <Reveal
                key={i}
                delay={i * 0.05}
                className={
                  i === 0
                    ? "md:col-span-6"
                    : i === 1
                      ? "md:col-span-4"
                      : "md:col-span-2"
                }
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-secondary">
                  <img
                    src={g}
                    alt={`${project.name} — imagen ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-[1.04]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-secondary/50 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Resultados
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Lo que <span className="italic text-sage">quedó</span>.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {project.results.map((r, i) => (
              <Reveal key={r} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-background p-8">
                  <span className="font-serif text-4xl italic text-sage">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-base leading-relaxed text-foreground/85 text-pretty">
                    {r}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Next */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group flex flex-wrap items-end justify-between gap-6 border-t border-border pt-10"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Próximo proyecto
              </p>
              <p className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                {next.name}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium">
              Ver proyecto
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

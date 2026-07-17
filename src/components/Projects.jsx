import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Boxes,
  ChevronDown,
  Code2,
  Filter,
  Layers3,
  LockKeyhole,
  Sparkles,
  Target,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, projectCategories } from '../data/projects.js';

function FeaturedCase({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.018] p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-mint/30 md:p-7"
    >
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-electric/10 blur-3xl transition group-hover:bg-mint/10" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-mint">Caso 0{index + 1}</span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
            {project.category}
          </span>
        </div>

        <h3 className="mt-7 text-2xl font-black leading-tight text-white md:text-3xl">{project.title}</h3>
        <p className="mt-4 text-sm leading-6 text-slate-400">{project.problem}</p>

        <div className="mt-6 space-y-3 border-y border-white/10 py-5">
          <div className="grid grid-cols-[auto_1fr] gap-3">
            <Target className="mt-0.5 h-4 w-4 text-mint" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Decisión de producto</p>
              <p className="mt-1 text-sm leading-6 text-slate-200">{project.initiative}</p>
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-3">
            <Layers3 className="mt-0.5 h-4 w-4 text-electric" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Sistema construido</p>
              <p className="mt-1 text-sm leading-6 text-slate-200">{project.solution}</p>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-mint/15 bg-mint/[0.065] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-mint">Valor para el negocio</p>
          <p className="mt-2 text-sm leading-6 text-slate-200">{project.impact}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((tech) => (
            <span key={tech} className="rounded-full border border-white/[0.07] bg-white/[0.035] px-3 py-1 text-xs text-slate-400">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-mint transition hover:gap-3">
              Ver evidencia en GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-xs text-slate-500">
              <LockKeyhole className="h-4 w-4" /> Caso anonimizado por confidencialidad
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="glass card-hover flex h-full flex-col rounded-3xl p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-electric/10 text-electric">
          <Boxes className="h-5 w-5" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">{project.category}</span>
      </div>
      <h3 className="mt-5 text-xl font-black leading-tight text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{project.improvement}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((tech) => (
          <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">{tech}</span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        {project.github ? (
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-mint transition hover:gap-3">
            Ver repositorio <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-xs text-slate-600">
            <LockKeyhole className="h-3.5 w-3.5" /> Evidencia privada
          </span>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [active, setActive] = useState('Todos');
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((project) => project.featured).slice(0, 3);
  const secondary = projects.filter((project) => !project.featured);
  const filtered = useMemo(
    () => (active === 'Todos' ? secondary : secondary.filter((project) => project.category === active)),
    [active]
  );

  return (
    <section id="proyectos" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.58fr] lg:items-end">
        <div>
          <p className="badge"><Sparkles className="h-4 w-4 text-warning" /> Evidencia seleccionada</p>
          <h2 className="section-title mt-5">Tres casos que resumen cómo genero valor.</h2>
          <p className="section-subtitle">
            No son ejercicios aislados: conectan datos, arquitectura, modelación y decisiones de negocio en sistemas que pueden operar y evolucionar.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-sm leading-6 text-slate-400">
          <p className="font-bold text-white">Criterio de selección</p>
          <p className="mt-2">Relevancia para fintech, complejidad técnica y capacidad de convertir una señal operativa en una acción concreta.</p>
        </div>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {featured.map((project, index) => (
          <FeaturedCase key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <Code2 className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
          <div>
            <p className="font-bold text-white">Más evidencia técnica</p>
            <p className="mt-1 text-sm text-slate-500">Explora proyectos adicionales de ML, riesgo, automatización, NLP y data engineering.</p>
          </div>
        </div>
        <button onClick={() => setShowAll((value) => !value)} className="btn-ghost shrink-0 !px-5 !py-2.5 text-sm" aria-expanded={showAll}>
          {showAll ? 'Ocultar proyectos' : `Ver ${secondary.length} proyectos más`}
          <ChevronDown className={`h-4 w-4 transition ${showAll ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {showAll && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="mr-1 inline-flex items-center gap-2 text-sm font-bold text-slate-300"><Filter className="h-4 w-4" /> Filtrar:</span>
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActive(category)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    active === category ? 'bg-mint text-ink' : 'border border-white/10 bg-white/5 text-slate-400 hover:border-mint/40 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => <ProjectCard key={project.title} project={project} />)}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-10 flex items-start gap-3 rounded-2xl border border-electric/15 bg-electric/[0.055] p-5 text-sm leading-6 text-slate-400">
        <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
        <p><strong className="text-slate-200">Confidencialidad:</strong> los casos del sector financiero están anonimizados. La información expone el problema, mis decisiones técnicas y la arquitectura sin revelar datos, clientes ni reglas sensibles.</p>
      </div>
    </section>
  );
}

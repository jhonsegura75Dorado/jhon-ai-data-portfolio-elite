import { Layers3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { toolGroups } from '../data/tools.js';

const groupDescriptions = [
  'Exploración, transformación, feature engineering y modelos reproducibles.',
  'Productos analíticos que traducen señales en decisiones de operación y negocio.',
  'Pipelines, almacenamiento, despliegue y componentes que pueden evolucionar.',
  'Agentes, RAG y servicios de IA con contexto, controles y trazabilidad.',
];

export default function TechStack() {
  return (
    <section id="herramientas" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24">
      <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
        <div>
          <p className="badge"><Layers3 className="h-4 w-4 text-mint" /> Stack técnico</p>
          <h2 className="section-title mt-5">Herramientas organizadas por capacidad.</h2>
        </div>
        <p className="text-base leading-7 text-slate-400 md:text-lg">
          Más que una lista de logos: estas son las capas que conecto para construir soluciones de extremo a extremo.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {toolGroups.map((group, index) => (
          <motion.article
            key={group.group}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="glass rounded-3xl p-6 md:p-7"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mint">Capacidad 0{index + 1}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-white">{group.group}</h3>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-500">{group.tools.length} tecnologías</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">{groupDescriptions[index]}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <span key={tool.name} className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs font-semibold text-slate-300">
                  {tool.name}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

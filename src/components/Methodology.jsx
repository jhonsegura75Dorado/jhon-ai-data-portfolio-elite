import { Code2, Gauge, PenTool, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Entender la decisión',
    text: 'Conecto el requerimiento con el riesgo, la oportunidad y la decisión que realmente debe mejorar.',
    output: 'Problema y métrica de éxito',
    icon: Search,
  },
  {
    title: 'Diseñar el sistema',
    text: 'Defino fuentes, reglas, features, arquitectura y controles antes de elegir la herramienta.',
    output: 'Arquitectura y contrato de datos',
    icon: PenTool,
  },
  {
    title: 'Construir evidencia',
    text: 'Desarrollo pipelines, modelos, APIs o interfaces en incrementos verificables y reproducibles.',
    output: 'Producto funcional',
    icon: Code2,
  },
  {
    title: 'Validar y operar',
    text: 'Mido calidad, error, estabilidad, explicabilidad y adopción para convertir el prototipo en capacidad real.',
    output: 'Métricas y siguiente iteración',
    icon: Gauge,
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24">
      <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.025] p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="badge">Sistema de trabajo</p>
            <h2 className="section-title mt-5">Del problema a una capacidad operativa.</h2>
          </div>
          <p className="text-base leading-7 text-slate-400 md:text-lg">
            Mi enfoque combina pensamiento de producto, ingeniería y ciencia de datos. La tecnología es una decisión posterior al problema, no el punto de partida.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="relative rounded-3xl border border-white/[0.08] bg-ink/60 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-electric/10 text-electric">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-black text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mint">Salida</p>
                  <p className="mt-1 text-xs font-semibold text-slate-300">{step.output}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

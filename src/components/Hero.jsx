import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  MapPin,
  Radar,
  ShieldCheck,
} from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const productFlow = [
  { icon: Database, label: 'Señales', detail: 'Datos transaccionales, operativos y financieros' },
  { icon: Radar, label: 'Inteligencia', detail: 'Forecasting, segmentación, riesgo y anomalías' },
  { icon: ShieldCheck, label: 'Decisión', detail: 'Productos accionables, trazables y escalables' },
];

function Counter({ value, suffix = '', label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / 1200, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value]);

  return (
    <div ref={ref} className="border-l border-white/10 pl-4 first:border-l-0 first:pl-0 sm:first:border-l sm:first:pl-4">
      <p className="font-display text-3xl font-bold text-white">
        {display}<span className="text-mint">{suffix}</span>
      </p>
      <p className="mt-1 text-xs leading-5 text-slate-500">{label}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 md:pt-40">
      <div className="grid gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <span className="badge border-mint/20 bg-mint/[0.07] text-mint">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" />
              Data Scientist · Data & AI Product Builder
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
              <MapPin className="h-3.5 w-3.5" /> Colombia · Remoto
            </span>
          </div>

          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl xl:text-[4.6rem]">
            Construyo sistemas de datos e IA que convierten <span className="gradient-text">señales en decisiones</span>.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
            Soy <strong className="font-semibold text-white">Jhon Alexander Segura Dorado</strong>. Diseño productos analíticos,
            modelos predictivos y agentes de IA para anticipar riesgos, optimizar operaciones y hacer accionables grandes volúmenes de datos.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
            {['Fintech y banca', 'ML explicable', 'Pipelines AWS/Azure', 'AI agents'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-mint" /> {item}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#proyectos" className="btn-primary">
              Explorar casos <ArrowRight className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/jhon-alexander-segura-dorado-a19b47185/" target="_blank" rel="noreferrer" className="btn-ghost">
              <BriefcaseBusiness className="h-5 w-5" /> Perfil LinkedIn
            </a>
            <a href="https://github.com/jhonsegura75Dorado" target="_blank" rel="noreferrer" className="icon-link" aria-label="GitHub de Jhon Segura">
              <Code2 className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative"
          aria-label="Resumen del perfil y proceso de trabajo"
        >
          <div className="absolute -right-8 -top-10 -z-10 h-44 w-44 rounded-full bg-electric/25 blur-3xl" />
          <div className="glass overflow-hidden rounded-[2rem] p-3 shadow-glow">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0d14] p-5 md:p-6">
              <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                <img
                  src={`${import.meta.env.BASE_URL}profile-photo.jpeg`}
                  alt="Jhon Alexander Segura Dorado"
                  className="h-20 w-20 rounded-2xl border border-electric/30 object-cover object-top"
                />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mint">Perfil profesional</p>
                  <h2 className="mt-1 font-display text-xl font-bold text-white">Data & AI con visión de negocio</h2>
                  <p className="mt-1 text-sm text-slate-400">+4 años · Sector financiero</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {productFlow.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="group grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3.5 transition hover:border-electric/30 hover:bg-white/[0.045]">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric/10 text-electric">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">{item.label}</p>
                        <p className="mt-0.5 text-xs leading-5 text-slate-500">{item.detail}</p>
                      </div>
                      <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
                    </div>
                  );
                })}
              </div>

              <a href="#proyectos" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-mint transition hover:gap-3">
                Ver evidencia técnica <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.aside>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mt-16 grid grid-cols-2 gap-7 rounded-2xl border-y border-white/10 py-7 sm:grid-cols-4"
      >
        <Counter value={4} suffix="+" label="Años en datos y sector financiero" />
        <Counter value={15} suffix="+" label="Casos de datos, ML e IA" />
        <Counter value={2} label="Libros técnicos publicados" />
        <Counter value={4} suffix=".º" label="Reto internacional de innovación" />
      </motion.div>
    </section>
  );
}

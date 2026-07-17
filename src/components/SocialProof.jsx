import { Award, BadgeCheck, BookOpenCheck, GraduationCap, Medal, ShieldCheck } from 'lucide-react';

const educationItems = [
  {
    icon: GraduationCap,
    title: 'Ingeniero Industrial · Unicomfacauca',
    detail: 'Formación base en procesos, operación, productividad, análisis y resolución estructurada de problemas.',
  },
  {
    icon: BookOpenCheck,
    title: 'Maestría en Análisis de Datos',
    detail: 'Profundización en ciencia de datos, modelación, analítica aplicada y toma de decisiones basada en información.',
  },
  {
    icon: ShieldCheck,
    title: 'Especialización en Análisis Financiero de Datos · Uniandes',
    detail: 'Enfoque aplicado a lectura financiera, indicadores, riesgo, negocio y analítica para decisiones estratégicas.',
  },
  {
    icon: BadgeCheck,
    title: 'Credencial Data Engineer · IBM',
    detail: 'Base técnica para procesamiento, integración, transformación y construcción de soluciones de datos.',
  },
];

const recognitionItems = [
  {
    icon: Medal,
    title: 'Participación internacional · Desafío de Innovación Copernicus',
    detail:
      'Participación en iniciativa de RedCLARA con el proyecto Satellite Data Interpreter, orientado a imágenes satelitales, IA y procesamiento de lenguaje natural.',
  },
  {
    icon: Award,
    title: 'Reconocimiento académico e investigativo',
    detail:
      'Representación de Unicomfacauca en un reto internacional de innovación; el proyecto obtuvo cuarto lugar según publicación institucional.',
  },
];

const domains = ['Banca', 'Fintech', 'Operaciones', 'Transaccionalidad', 'Riesgo', 'Automatización', 'IA aplicada'];

export default function SocialProof() {
  return (
    <section id="prueba-social" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="badge"><BadgeCheck className="h-4 w-4 text-mint" /> Estudios, credenciales y reconocimientos</p>
          <h2 className="section-title mt-5">Base académica, credenciales y reconocimiento.</h2>
          <p className="section-subtitle">
            Una trayectoria que conecta ingeniería, finanzas, ciencia de datos, comunicación técnica e innovación aplicada.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {domains.map((domain) => (
              <span key={domain} className="rounded-full border border-electric/20 bg-electric/10 px-4 py-2 text-sm font-bold text-electric">
                {domain}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            {educationItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass rounded-[2rem] p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mint/15 text-mint">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-black leading-6 text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {recognitionItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[2rem] border border-warning/25 bg-warning/10 p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-warning/15 text-warning">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

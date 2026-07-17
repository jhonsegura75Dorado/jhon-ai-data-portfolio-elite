import { ArrowUpRight, BriefcaseBusiness, Code2, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0b0d14] p-7 md:p-12 lg:p-16">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-electric/20 blur-[100px]" />
        <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-mint/10 blur-[100px]" />

        <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="badge border-mint/20 text-mint">Disponible para conversaciones de alto impacto</p>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              ¿Tu equipo necesita convertir datos complejos en una <span className="gradient-text">decisión más inteligente</span>?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Conversemos sobre roles sénior, productos de datos, analítica financiera, ML aplicado o sistemas de IA para operaciones.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:jhonsegura2506@gmail.com?subject=Conversación%20sobre%20Data%20%26%20AI" className="btn-primary">
                <Mail className="h-5 w-5" /> Escribirme
              </a>
              <a href="www.linkedin.com/in/jhon-alexander-segura-dorado-a19b47185" target="_blank" rel="noreferrer" className="btn-ghost">
                <BriefcaseBusiness className="h-5 w-5" /> Ver LinkedIn
              </a>
            </div>
          </div>

          <div className="grid gap-3">
            <a href="mailto:jhonsegura2506@gmail.com" className="contact-link">
              <span className="contact-icon"><Mail className="h-5 w-5" /></span>
              <span><small>Correo</small>jhonsegura2506@gmail.com</span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-slate-600" />
            </a>
            <a href="https://www.linkedin.com/in/jhon-alexander-s-a19b47185" target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-icon"><BriefcaseBusiness className="h-5 w-5" /></span>
              <span><small>Perfil profesional</small>LinkedIn</span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-slate-600" />
            </a>
            <a href="https://github.com/jhonsegura75Dorado" target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-icon"><Code2 className="h-5 w-5" /></span>
              <span><small>Código y proyectos</small>GitHub</span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-slate-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

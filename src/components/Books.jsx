import { ArrowUpRight, BookOpen, Building2, Calendar, Library, PenLine, Users } from 'lucide-react';
import { books } from '../data/books.js';

export default function Books() {
  return (
    <section id="libros" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="badge">
            <BookOpen className="h-4 w-4 text-mint" /> Libros y publicaciones académicas
          </p>
          <h2 className="section-title mt-5">También convierto experiencia en conocimiento.</h2>
          <p className="section-subtitle">
            Dos publicaciones técnicas del Sello Editorial Unicomfacauca que demuestran capacidad para investigar, estructurar y comunicar conocimiento aplicado.
          </p>

          <div className="mt-8 rounded-[2rem] border border-mint/20 bg-mint/10 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mint/15 text-mint">
                <PenLine className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">Producción académica aplicada</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Esta sección muestra una faceta diferencial: capacidad de investigar, estructurar conocimiento y comunicarlo de forma práctica para formación técnica.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {books.map((book) => (
            <article key={book.title} className="glass card-hover overflow-hidden rounded-[2rem]">
              <div className="grid gap-0 md:grid-cols-[0.35fr_0.65fr]">
                <div className="relative flex min-h-[260px] flex-col justify-between border-b border-white/10 bg-gradient-to-br from-electric/20 via-mint/10 to-warning/10 p-6 md:border-b-0 md:border-r">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-mint">
                      <Library className="h-7 w-7" />
                    </div>
                    <p className="mt-6 text-xs uppercase tracking-[0.32em] text-slate-400">{book.role}</p>
                    <h3 className="mt-3 text-2xl font-black leading-tight text-white">{book.title}</h3>
                  </div>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-ink/40 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-mint">{book.year}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-300">{book.collection}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-6 text-slate-300">{book.description}</p>

                  <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                    <div className="flex items-start gap-3 rounded-2xl bg-white/[0.03] p-3">
                      <Users className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                      <span>{book.authors}</span>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl bg-white/[0.03] p-3">
                      <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                      <span>{book.publisher}</span>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl bg-white/[0.03] p-3">
                      <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
                      <span>{book.date}</span>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl bg-white/[0.03] p-3">
                      <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                      <span>{book.isbn}</span>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-electric/20 bg-electric/10 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-electric">Enfoque</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">{book.focus}</p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={book.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-mint px-5 py-3 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:shadow-glow"
                    >
                      Ver publicación <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href={book.detailsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-mint/40 hover:text-mint"
                    >
                      Ver ficha editorial <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

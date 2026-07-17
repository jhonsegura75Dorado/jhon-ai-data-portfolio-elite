import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { href: '#proyectos', label: 'Casos' },
  { href: '#metodologia', label: 'Método' },
  { href: '#herramientas', label: 'Stack' },
  { href: '#prueba-social', label: 'Credenciales' },
  { href: '#libros', label: 'Publicaciones' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-ink/85 shadow-[0_12px_40px_rgba(0,0,0,.25)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#inicio" className="group flex items-center gap-3 font-display font-bold tracking-tight" aria-label="Ir al inicio">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-electric/30 bg-gradient-to-br from-electric/20 to-mint/10 text-sm font-black text-white transition group-hover:border-mint/60">
            JS
          </span>
          <span className="leading-tight">
            <span className="block text-sm text-white">Jhon Segura</span>
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500 sm:block">Data · AI · Product</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="#contacto" className="btn-primary hidden !px-5 !py-2 text-sm lg:inline-flex">
          Contactar <ArrowUpRight className="h-4 w-4" />
        </a>

        <button
          className="rounded-xl border border-white/10 p-2 text-slate-200 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-slate-200">
                {link.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="btn-primary self-start !px-5 !py-2 text-sm">
              Contactar <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

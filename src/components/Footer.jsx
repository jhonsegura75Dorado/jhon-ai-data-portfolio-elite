export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
        © {new Date().getFullYear()} Jhon Alexander Segura Dorado · Data & AI Portfolio
      </p>
      <p className="mt-2 text-sm text-slate-600">Diseñado para comunicar impacto, arquitectura y criterio técnico.</p>
    </footer>
  );
}

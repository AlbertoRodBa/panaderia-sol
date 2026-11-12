export function Esencia() {
  return (
    <section className="grid bg-black text-white md:min-h-[480px] md:grid-cols-2">
      <div
        aria-hidden="true"
        className="relative min-h-[300px] bg-cover bg-center md:min-h-[480px]"
        style={{ backgroundImage: "url('/images/background-esencia.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent md:bg-gradient-to-r md:from-transparent md:via-black/10 md:to-black" />
      </div>
      <div className="flex items-center px-6 pb-16 pt-8 md:px-12 md:py-16 lg:px-20">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl md:text-4xl">Tiempo, harina y fuego</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Partimos de noche para tener pan calentito en la mañana. Trabajamos sin aditivos y dejamos que la masa repose entre 18 y 24 horas antes de meterla al horno de madrugada. Sin apuros, para que salga un pan rico, con buena miga y que aguante bien hasta el día siguiente.
          </p>
        </div>
      </div>
    </section>
  );
}

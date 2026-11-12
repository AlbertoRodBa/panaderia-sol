import { Boton } from "@/components/ui/Boton";
import { Foto } from "@/components/ui/Foto";

export function Hero() {
  return (
    <section id="inicio" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
      <div className="hero-fade-in">
        <h1 className="font-serif text-4xl leading-tight md:text-6xl">
          Pan de tradición y pastelería de horno, hechos cada mañana.
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-cacao">
          Marraquetas, hallullas y pan de masa madre, horneados dos veces al día. También realizamos encargos por WhatsApp.
        </p>
        <Boton href="#vitrina" className="mt-10">Ver vitrina de hoy</Boton>
      </div>
      <Foto
        src="/images/panaderia-heroimg.jpg"
        alt="Variedad de panes recién horneados en la vitrina de la panadería"
        proporcion="aspect-[6/5]"
        sizes="(min-width: 768px) 50vw, 100vw"
        priority
        className="rounded-[2rem] hero-fade-in hero-fade-in-delayed"
      />
    </section>
  );
}

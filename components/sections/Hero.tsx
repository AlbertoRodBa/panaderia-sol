import { Boton } from "@/components/ui/Boton";
import { Foto } from "@/components/ui/Foto";

export function Hero() {
  return (
    <section id="inicio" className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-12 md:grid-cols-2 md:gap-12 md:py-28">
      <div className="order-2 hero-fade-in md:order-1">
        <h1 className="font-serif text-4xl leading-tight md:text-6xl">
          Pan y pastelería de tradición hechos con dedicación.
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-cacao">
          Disfruta de una variedad de productos para acompañar tus días en casa. También realizamos encargos por WhatsApp.
        </p>
        <Boton href="#vitrina" className="mt-10">Ver vitrina de hoy</Boton>
      </div>
      <Foto
        src="/images/panaderia-heroimg.jpg"
        alt="Variedad de panes recién horneados en la vitrina de la panadería"
        proporcion="aspect-[6/5]"
        sizes="(min-width: 768px) 50vw, 100vw"
        priority
        className="order-1 rounded-[2rem] hero-fade-in hero-fade-in-delayed md:order-2"
      />
    </section>
  );
}

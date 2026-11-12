import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FormularioContacto } from "@/components/sections/FormularioContacto";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contacto | ${SITE.nombre}`,
  description: `Ponte en contacto con ${SITE.nombre}.`,
};

export default function Contacto() {
  const direccion = SITE.direccion.join(", ");
  const mapa = `https://www.google.com/maps?q=${encodeURIComponent(direccion)}&output=embed`;

  return (
    <>
      <Header />
      <main>
        <section className="bg-avena px-6 py-16 md:py-20">
          <div className="mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-corteza-oscuro">Estamos para ayudarte</p>
            <h1 className="mt-3 font-serif text-4xl text-espresso md:text-5xl">Contacto</h1>
            <p className="mt-4 text-lg leading-relaxed text-cacao">Déjanos tus datos y cuéntanos en qué podemos ayudarte.</p>
            <FormularioContacto />
          </div>
        </section>
        <section aria-label={`Mapa de ${SITE.nombre}`}>
          <iframe
            title={`Mapa de ${SITE.nombre}`}
            src={mapa}
            className="block h-[350px] w-full border-0 md:h-[450px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

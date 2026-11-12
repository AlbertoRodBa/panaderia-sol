import { Boton } from "@/components/ui/Boton";
import { SITE } from "@/lib/site";

const enlaceSubrayado = "underline underline-offset-4";

export function Visitanos() {
  return (
    <section id="visitanos" className="bg-avena py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-3">
        <div>
          <h2 className="font-serif text-3xl">Pan caliente</h2>
          <p className="mt-4 font-serif text-4xl text-corteza-oscuro">{SITE.panCaliente.join(" y ")}</p>
          <p className="mt-2 text-sm text-cacao">Todos los días.</p>
        </div>

        <div className="text-cacao">
          <h3 className="font-serif text-xl text-espresso">Dónde estamos</h3>
          <address className="mt-4 not-italic">
            {SITE.direccion.map((linea) => (
              <span key={linea} className="block">{linea}</span>
            ))}
          </address>
          <div className="mt-4 flex gap-5 text-sm font-medium text-corteza-oscuro">
            <a className={enlaceSubrayado} href={SITE.maps}>Google Maps</a>
          </div>
        </div>

        <div className="text-cacao">
          <h3 className="font-serif text-xl text-espresso">Atención</h3>
          <div className="mt-4">
            {SITE.horarios.map((h) => (
              <p key={h}>{h}</p>
            ))}
          </div>
          <Boton href={SITE.whatsapp} className="mt-6 text-sm">Encargar por WhatsApp</Boton>
        </div>
      </div>
    </section>
  );
}

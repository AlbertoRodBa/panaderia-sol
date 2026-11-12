"use client";

import { useState, type FormEvent } from "react";

type EstadoEnvio = "idle" | "exito" | "fallo";

export function FormularioContacto() {
  const [estado, setEstado] = useState<EstadoEnvio>("idle");

  function enviarFormulario(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEstado(navigator.onLine ? "exito" : "fallo");
  }

  return (
    <form onSubmit={enviarFormulario} className="mt-8 space-y-4">
      <div>
        <label htmlFor="nombre" className="mb-1.5 block text-base font-medium text-espresso">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          autoComplete="name"
          placeholder="Tu nombre"
          required
          className="w-full rounded-lg border border-tostado bg-white px-4 py-2.5 text-espresso placeholder:text-cacao/60 outline-none transition focus:border-corteza-oscuro"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-base font-medium text-espresso">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="nombre@ejemplo.com"
          required
          className="w-full rounded-lg border border-tostado bg-white px-4 py-2.5 text-espresso placeholder:text-cacao/60 outline-none transition focus:border-corteza-oscuro"
        />
      </div>
      <div>
        <label htmlFor="mensaje" className="mb-1.5 block text-base font-medium text-espresso">Tu mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          placeholder="¿En qué podemos ayudarte?"
          required
          className="w-full resize-y rounded-lg border border-tostado bg-white px-4 py-2.5 text-espresso placeholder:text-cacao/60 outline-none transition focus:border-corteza-oscuro"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-corteza-oscuro px-10 py-3.5 font-medium text-harina transition-colors hover:bg-espresso"
      >
        Enviar
      </button>
      <p aria-live="polite" role="status" className="text-sm">
        {estado === "exito" && (
          <span className="text-green-800">
            ¡Gracias por escribirnos! Nos pondremos en contacto contigo pronto.
          </span>
        )}
        {estado === "fallo" && (
          <span className="text-red-800">
            No hay conexión a internet. Revisa tu conexión e inténtalo de nuevo.
          </span>
        )}
      </p>
    </form>
  );
}

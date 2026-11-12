"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { PRODUCTOS } from "@/data/productos";
import { ProductoCard } from "@/components/ui/ProductoCard";

export function Vitrina() {
  const vitrinaRef = useRef<HTMLUListElement>(null);
  const arrastreRef = useRef<{ x: number; scrollLeft: number; pointerId: number } | null>(null);
  const [bordes, setBordes] = useState({ inicio: true, fin: false });

  const actualizarBordes = useCallback(() => {
    const vitrina = vitrinaRef.current;
    if (!vitrina) return;

    setBordes({
      inicio: vitrina.scrollLeft <= 1,
      fin: vitrina.scrollLeft + vitrina.clientWidth >= vitrina.scrollWidth - 1,
    });
  }, []);

  useEffect(() => {
    const vitrina = vitrinaRef.current;
    if (!vitrina) return;

    actualizarBordes();
    const observer = new ResizeObserver(actualizarBordes);
    observer.observe(vitrina);
    window.addEventListener("resize", actualizarBordes);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", actualizarBordes);
    };
  }, [actualizarBordes]);

  function desplazar(direccion: -1 | 1) {
    const vitrina = vitrinaRef.current;
    if (!vitrina) return;

    const tarjetas = Array.from(vitrina.children);
    const posicion = vitrina.getBoundingClientRect().left;
    const indiceActual = tarjetas.reduce((indiceMasCercano, tarjeta, indice) => {
      const distancia = Math.abs(tarjeta.getBoundingClientRect().left - posicion);
      const distanciaMasCercana = Math.abs(
        tarjetas[indiceMasCercano].getBoundingClientRect().left - posicion,
      );
      return distancia < distanciaMasCercana ? indice : indiceMasCercano;
    }, 0);
    const indiceDestino = Math.max(0, Math.min(tarjetas.length - 1, indiceActual + direccion));
    const destino = tarjetas[indiceDestino].getBoundingClientRect().left - posicion + vitrina.scrollLeft;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

    vitrina.scrollTo({ left: destino, behavior });
  }

  function iniciarArrastre(event: PointerEvent<HTMLUListElement>) {
    if (event.pointerType !== "mouse" || event.button !== 0) return;

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    arrastreRef.current = {
      x: event.pageX,
      scrollLeft: event.currentTarget.scrollLeft,
      pointerId: event.pointerId,
    };
  }

  function arrastrar(event: PointerEvent<HTMLUListElement>) {
    if (arrastreRef.current?.pointerId !== event.pointerId) return;
    event.currentTarget.scrollLeft =
      arrastreRef.current.scrollLeft - (event.pageX - arrastreRef.current.x);
  }

  function terminarArrastre(event: PointerEvent<HTMLUListElement>) {
    if (arrastreRef.current?.pointerId !== event.pointerId) return;
    arrastreRef.current = null;
  }

  return (
    <section id="vitrina" className="bg-avena py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between gap-6">
          <h2 className="font-serif text-3xl md:text-4xl">Nuestra vitrina</h2>
        </div>

        <div className="relative mt-10">
          <button
            type="button"
            onClick={() => desplazar(-1)}
            aria-label="Ver productos anteriores"
            disabled={bordes.inicio}
            className="absolute left-1 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-tostado/70 bg-harina/95 text-espresso shadow-sm transition-[background-color,color,opacity] hover:bg-harina disabled:cursor-default disabled:opacity-35"
            style={{ top: "min(39vw, 9rem)" }}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => desplazar(1)}
            aria-label="Ver productos siguientes"
            disabled={bordes.fin}
            className="absolute right-1 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-tostado/70 bg-harina/95 text-espresso shadow-sm transition-[background-color,color,opacity] hover:bg-harina disabled:cursor-default disabled:opacity-35"
            style={{ top: "min(39vw, 9rem)" }}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
          <ul
            ref={vitrinaRef}
            aria-label="Productos de la vitrina"
            className="carousel-scroll flex snap-x snap-mandatory gap-6 overflow-x-auto px-12 pb-5 sm:gap-8"
            onScroll={actualizarBordes}
            onPointerDown={iniciarArrastre}
            onPointerMove={arrastrar}
            onPointerUp={terminarArrastre}
            onPointerCancel={terminarArrastre}
          >
            {PRODUCTOS.map((p) => (
              <ProductoCard
                key={p.nombre}
                producto={p}
                className="w-[min(78vw,18rem)] shrink-0 snap-start sm:w-72"
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

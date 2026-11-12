"use client";

import { useEffect, useState } from "react";
import { Boton } from "@/components/ui/Boton";
import { ANUNCIOS } from "@/data/anuncios";
import { SITE } from "@/lib/site";

const ENLACES = [
  { href: "/#inicio", texto: "Inicio" },
  { href: "/#vitrina", texto: "Productos" },
  { href: "/#visitanos", texto: "Ubicación y horarios" },
  { href: "/contacto", texto: "Contacto" },
];

export function Header() {
  const [desplazado, setDesplazado] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    function actualizarHeader() {
      setDesplazado(window.scrollY > 24);
    }

    actualizarHeader();
    window.addEventListener("scroll", actualizarHeader, { passive: true });
    return () => window.removeEventListener("scroll", actualizarHeader);
  }, []);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header
      className={`sticky top-0 z-20 border-b backdrop-blur transition-colors duration-300 ${
        desplazado
          ? "border-white/15 bg-corteza-oscuro text-white"
          : "border-tostado/30 bg-harina/90 text-espresso"
      }`}
    >
      <div className="announcement-bar bg-[#3F3D3B] py-2 text-sm text-harina">
        <div className="announcement-track" aria-hidden="true">
          {[0, 1, 2].map((copia) => (
            <div className="announcement-group" key={copia}>
              {ANUNCIOS.map((anuncio) =>
                anuncio.enlace ? (
                  <a key={anuncio.texto} href={anuncio.enlace}>{anuncio.texto}</a>
                ) : (
                  <span key={anuncio.texto}>{anuncio.texto}</span>
                ),
              )}
            </div>
          ))}
        </div>
        <p className="sr-only">
          {ANUNCIOS.map((anuncio, indice) => (
            <span key={anuncio.texto}>
              {indice > 0 ? " " : ""}
              {anuncio.enlace ? <a href={anuncio.enlace}>{anuncio.texto}</a> : anuncio.texto}.
            </span>
          ))}
        </p>
      </div>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Principal">
        <a href="/" onClick={cerrarMenu} className="font-serif text-xl font-semibold">{SITE.nombre}</a>
        <ul className={`hidden gap-8 text-sm md:flex ${desplazado ? "text-white/90" : "text-cacao"}`}>
          {ENLACES.map((e) => (
            <li key={e.texto}>
              <a
                className={`transition-colors ${desplazado ? "hover:text-white" : "hover:text-espresso"}`}
                href={e.href}
              >
                {e.texto}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Boton
            href={SITE.whatsapp}
            variante={desplazado ? "contornoOscuro" : "contorno"}
          >
            ¡Haz tu pedido!
          </Boton>
        </div>
        <button
          type="button"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          aria-controls="menu-movil"
          onClick={() => setMenuAbierto((abierto) => !abierto)}
          className={`flex size-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 md:hidden ${
            desplazado ? "text-white hover:bg-white/10" : "text-espresso"
          }`}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.75">
            {menuAbierto ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      {menuAbierto && (
        <div
          id="menu-movil"
          className={`border-t px-6 pb-5 pt-3 md:hidden ${
            desplazado ? "border-white/15 bg-corteza-oscuro" : "border-tostado/30 bg-harina"
          }`}
        >
          <ul className="mx-auto flex max-w-6xl flex-col">
            {ENLACES.map((enlace) => (
              <li key={enlace.texto}>
                <a
                  href={enlace.href}
                  onClick={cerrarMenu}
                  className={`block py-3 text-sm ${desplazado ? "text-white/90" : "text-cacao"}`}
                >
                  {enlace.texto}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Boton
                href={SITE.whatsapp}
                onClick={cerrarMenu}
                variante={desplazado ? "contornoOscuro" : "contorno"}
              >
                Hacer pedido
              </Boton>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

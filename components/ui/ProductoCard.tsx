import { Foto } from "./Foto";
import type { Producto } from "@/data/productos";

export function ProductoCard({ producto, className }: { producto: Producto; className?: string }) {
  return (
    <li className={`group ${className ?? ""}`}>
      <Foto
        src={producto.imagen}
        alt={producto.nombre}
        proporcion="aspect-square"
        className="rounded-2xl"
        sizes="(min-width: 640px) 288px, 78vw"
      />
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-serif text-lg transition-colors group-hover:text-corteza-oscuro">{producto.nombre}</h3>
      </div>
    </li>
  );
}

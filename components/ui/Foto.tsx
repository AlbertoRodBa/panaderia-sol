import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  /** Proporción del contenedor, ej. "aspect-square" */
  proporcion: string;
  className?: string;
};

export function Foto({ src, alt, sizes, priority, proporcion, className = "rounded-2xl" }: Props) {
  return (
    <div className={`relative overflow-hidden bg-avena ${proporcion} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
      />
    </div>
  );
}

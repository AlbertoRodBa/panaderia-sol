type Props = {
  href: string;
  variante?: "solido" | "contorno" | "contornoOscuro";
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const base = "inline-block rounded-full font-medium transition-colors";
const variantes = {
  solido: "bg-corteza-oscuro px-7 py-3.5 text-harina hover:bg-espresso",
  contorno: "border border-corteza px-4 py-2 text-sm text-corteza-oscuro hover:bg-corteza hover:text-harina",
  contornoOscuro: "border border-white/70 px-4 py-2 text-sm text-white hover:bg-espresso hover:text-white",
};

export function Boton({ href, variante = "solido", children, className = "", onClick }: Props) {
  return (
    <a href={href} onClick={onClick} className={`${base} ${variantes[variante]} ${className}`}>
      {children}
    </a>
  );
}

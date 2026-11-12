import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-espresso px-6 py-10 text-center text-sm text-harina/80">
      © {new Date().getFullYear()} {SITE.nombre}
    </footer>
  );
}

import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { BotonWhatsappFlotante } from "@/components/layout/BotonWhatsappFlotante";
import { SITE } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: `${SITE.nombre} | Pan y pastelería de horno`,
  description: `Marraquetas, masa madre y pastelería hechas cada mañana. Pan caliente a las ${SITE.panCaliente.join(" y ")} hrs.`,
  icons: {
    icon: "/images/favicon-1.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        {children}
        <BotonWhatsappFlotante />
      </body>
    </html>
  );
}

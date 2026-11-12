import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Vitrina } from "@/components/sections/Vitrina";
import { Esencia } from "@/components/sections/Esencia";
import { Visitanos } from "@/components/sections/Visitanos";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Vitrina />
        <Esencia />
        <Visitanos />
      </main>
      <Footer />
    </>
  );
}

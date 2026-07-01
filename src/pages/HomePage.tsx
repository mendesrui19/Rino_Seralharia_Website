import { Nav } from "../components/layout/Nav";
import { Hero } from "../components/sections/Hero";
import { Ticker } from "../components/sections/Ticker";
import { Sobre } from "../components/sections/Sobre";
import { Services } from "../components/sections/Services";
import { Obras } from "../components/sections/Obras";
import { PorqueNos } from "../components/sections/PorqueNos";
import { Testemunhos } from "../components/sections/Testemunhos";
import { LocalSEO } from "../components/sections/LocalSEO";
import { FAQ } from "../components/sections/FAQ";
import { Contacto } from "../components/sections/Contacto";
import { Footer } from "../components/sections/Footer";
import { WhatsAppFloat } from "../components/ui/WhatsAppFloat";
import { StructuredData } from "../components/seo/StructuredData";
import { PageMeta } from "../components/seo/PageMeta";
import { homeSeo, SITE_URL } from "../lib/seo-data";

export function HomePage() {
  return (
    <>
      <PageMeta
        title={homeSeo.title}
        description={homeSeo.description}
        canonical={`${SITE_URL}/`}
      />
      <StructuredData />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Sobre />
        <Services />
        <Obras />
        <Testemunhos />
        <PorqueNos />
        <LocalSEO />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

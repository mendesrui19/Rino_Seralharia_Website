import { Nav } from "./components/layout/Nav";
import { Hero } from "./components/sections/Hero";
import { Ticker } from "./components/sections/Ticker";
import { Sobre } from "./components/sections/Sobre";
import { Services } from "./components/sections/Services";
import { Obras } from "./components/sections/Obras";
import { PorqueNos } from "./components/sections/PorqueNos";
import { Testemunhos } from "./components/sections/Testemunhos";
import { Contacto } from "./components/sections/Contacto";
import { Footer } from "./components/sections/Footer";
import { WhatsAppFloat } from "./components/ui/WhatsAppFloat";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Sobre />
        <Services />
        <Obras />
        <Testemunhos />
        <PorqueNos />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;

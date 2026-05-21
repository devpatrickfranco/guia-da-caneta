import { HeroSection } from './sections/HeroSection';
import { IdentificationSection } from './sections/IdentificationSection';
import { AprenderSection } from './sections/AprenderSection';
import { ErrosSection } from './sections/ErrosSection';
import { RecebeSection } from './sections/RecebeSection';
import { ProvaSocialSection } from './sections/ProvaSocialSection';
import { FaqSection } from './sections/FaqSection';
import { GarantiaSection } from './sections/GarantiaSection';
import { FinalCtaSection } from './sections/FinalCtaSection';
import { FooterSection } from './sections/FooterSection';

function App() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <HeroSection />
      <IdentificationSection />
      <AprenderSection />
      <ErrosSection />
      <RecebeSection />
      <ProvaSocialSection />
      <FaqSection />
      <GarantiaSection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  );
}

export default App;

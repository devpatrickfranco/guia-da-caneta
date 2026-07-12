import { Routes, Route } from 'react-router-dom';
import { HeroSection } from './sections/HeroSection';
import { IdentificationSection } from './sections/IdentificationSection';
import { AprenderSection } from './sections/AprenderSection';
import { ErrosSection } from './sections/ErrosSection';
import { RecebeSection } from './sections/RecebeSection';
import { FaqSection } from './sections/FaqSection';
import { GarantiaSection } from './sections/GarantiaSection';
import { FinalCtaSection } from './sections/FinalCtaSection';
import { FooterSection } from './sections/FooterSection';
import PlanoAlimentar100 from './pages/upsell';

function HomePage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <HeroSection />
      <IdentificationSection />
      <AprenderSection />
      <ErrosSection />
      <RecebeSection />
      <FaqSection />
      <GarantiaSection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/planoalimentar100" element={<PlanoAlimentar100 />} />
    </Routes>
  );
}

export default App;

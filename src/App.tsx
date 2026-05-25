import { useEffect } from 'react';
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
  useEffect(() => {

    const linkCheckout = 'https://pay.kiwify.com.br/6hK1S0P';

    let urlBackRedirect = linkCheckout;
    
    // Pega as UTMs da Utmfy/Meta da URL da LP e arrasta para o checkout
    urlBackRedirect = urlBackRedirect.trim() +
      (urlBackRedirect.indexOf('?') > 0 ? '&' : '?') +
      window.location.search.replace('?', '').toString();

    // Injeta os estados no histórico do navegador para prender o botão voltar
    window.history.pushState({}, '', window.location.href);
    window.history.pushState({}, '', window.location.href);

    const handleBackButton = () => {
      setTimeout(() => {
        window.location.href = urlBackRedirect;
      }, 1);
    };

    window.addEventListener('popstate', handleBackButton);

    // Limpa o listener caso o componente desmonte
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

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

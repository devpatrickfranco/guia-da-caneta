import { Container } from '../components/ui/Container';
import { Accordion } from '../components/ui/Accordion';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Reveal } from '../components/ui/Reveal';
import { FAQ } from '../constants';

const faqItems = FAQ.map((item, i) => ({
  id: `faq-${i}`,
  question: item.question,
  answer: item.answer,
}));

export function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-24 relative">
      <div className="absolute bottom-0 right-0 w-80 h-80 glow-orange opacity-[0.05] pointer-events-none" />

      <Container>
        <SectionTitle
          tag="faq"
          title="Perguntas frequentes"
          description="Ainda com dúvidas? Talvez a resposta esteja aqui."
        />

        <Reveal direction="up" className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-2xl px-4 sm:px-8">
            <Accordion items={faqItems} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

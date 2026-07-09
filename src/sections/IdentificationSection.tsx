import { Container } from '../components/ui/Container';
import { Card, CardDescription, CardIcon, CardTitle } from '../components/ui/Card';
import { SectionTitle } from '../components/ui/SectionTitle';
import { StaggerContainer, StaggerItem } from '../components/ui/Reveal';
import { IDENTIFICATION_PAINS } from '../constants';

const painIcons = ['🧾', '😰', '🥗', '💸', '💉', '📌'];

export function IdentificationSection() {
  return (
    <section id="identification" className="py-16 sm:py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] glow-orange opacity-[0.08] pointer-events-none" />

      <Container>
        <SectionTitle
          tag="primeiras semanas"
          title="A receita vem com o remédio. Mas quase nunca vem com um manual."
          description="É exatamente nesse vazio — entre a consulta e a rotina em casa — que a maioria das dúvidas aparece."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {IDENTIFICATION_PAINS.map((pain, i) => (
            <StaggerItem key={i}>
              <Card variant="glass" hover className="h-full">
                <CardIcon>{painIcons[i]}</CardIcon>
                <CardTitle>{pain.title}</CardTitle>
                <CardDescription>{pain.description}</CardDescription>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

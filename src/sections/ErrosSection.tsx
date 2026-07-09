import { Container } from '../components/ui/Container';
import { Card, CardDescription, CardTitle } from '../components/ui/Card';
import { SectionTitle } from '../components/ui/SectionTitle';
import { StaggerContainer, StaggerItem } from '../components/ui/Reveal';
import { ERROS } from '../constants';

const errorIcons = ['🍽️', '📈', '💪', '💧', '👥', '🚨'];

export function ErrosSection() {
  return (
    <section id="erros" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/5 to-transparent pointer-events-none" />

      <Container>
        <SectionTitle
          tag="erros comuns"
          title="Os erros que mais travam as primeiras semanas"
          description="O problema quase nunca é falta de força de vontade. É começar sem saber o que observar e sem uma rotina mínima para seguir."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ERROS.map((erro, i) => (
            <StaggerItem key={i}>
              <Card variant="default" hover className="h-full border-destructive/20">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-destructive/10 text-xl mb-4">
                  {errorIcons[i]}
                </div>
                <CardTitle className="text-foreground">{erro.title}</CardTitle>
                <CardDescription>{erro.description}</CardDescription>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

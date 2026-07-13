import { Container } from '../components/ui/Container';
import { Card, CardDescription, CardTitle } from '../components/ui/Card';
import { SectionTitle } from '../components/ui/SectionTitle';
import { StaggerContainer, StaggerItem } from '../components/ui/Reveal';
import { CHAPTERS } from '../constants';

export function AprenderSection() {
  return (
    <section id="aprender" className="py-16 sm:py-24 relative">
      <div className="absolute top-0 right-0 w-96 h-96 glow-orange opacity-[0.06] pointer-events-none" />

      <Container>
        <SectionTitle
          tag="por dentro do sistema"
          title="Tudo que você precisa nos primeiros dias, organizado em módulos práticos"
          description="Não é um ebook para estudar. É um roteiro prático para consultar conforme você vive cada fase do tratamento."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CHAPTERS.map((chapter) => (
            <StaggerItem key={chapter.number}>
              <Card variant="glass" hover className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-lg">
                    {chapter.icon}
                  </span>
                  <span className="text-xs font-bold text-primary tracking-wider">
                    MÓDULO {String(chapter.number).padStart(2, '0')}
                  </span>
                </div>
                <CardTitle>{chapter.title}</CardTitle>
                <CardDescription className="mt-auto pt-2">
                  {chapter.description}
                </CardDescription>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

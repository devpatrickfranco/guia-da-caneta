import { Container } from '../components/ui/Container';
import { Card, CardTitle } from '../components/ui/Card';
import { SectionTitle } from '../components/ui/SectionTitle';
import { StaggerContainer, StaggerItem } from '../components/ui/Reveal';
import { TESTIMONIALS } from '../constants';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-primary' : 'text-border'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function ProvaSocialSection() {
  return (
    <section id="prova-social" className="py-16 sm:py-24 relative">
      <div className="absolute top-0 left-0 w-80 h-80 glow-orange opacity-[0.05] pointer-events-none" />

      <Container>
        <SectionTitle
          tag="depoimentos"
          title="Quem já leu recomenda"
          description="Veja o que dizem pessoas que compraram o guia antes de começar o tratamento."
        />

        <StaggerContainer className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {TESTIMONIALS.map((testimonial, i) => (
            <StaggerItem key={i}>
              <Card
                variant="glass"
                hover
                className="h-full flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  {/* Avatar fallback */}
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-lg text-primary font-bold flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-sm mb-0.5">{testimonial.name}</CardTitle>
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Rating summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-surface border border-border">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">
              4.9 de 5 — centenas de leitoras satisfeitas
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

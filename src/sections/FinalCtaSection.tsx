import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { SITE_CONFIG } from '../constants';

const finalReasons = [
  'Clareza antes de começar',
  'Evite erros que custam caro',
  'Baixo investimento',
  'Acesso imediato',
];

export function FinalCtaSection() {
  return (
    <section id="cta-final" className="py-16 sm:py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] glow-orange opacity-[0.12] pointer-events-none" />

      <Container>
        <Reveal direction="up" className="text-center max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
            Comece sua jornada com{' '}
            <span className="text-gradient">informação</span> — não no escuro.
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
            Você não precisa começar o tratamento com dúvidas. Invista alguns
            minutos para se preparar e tomar as melhores decisões.
          </p>

          {/* Reasons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
            {finalReasons.map((reason, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-sm text-foreground/80"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {reason}
              </span>
            ))}
          </div>

          {/* Pricing reminder */}
          <div className="mb-8">
            <span className="text-5xl sm:text-6xl font-black text-gradient">
              {SITE_CONFIG.priceCurrent}
            </span>
            <div className="mt-1">
              <span className="text-lg text-muted-foreground line-through mr-3">
                {SITE_CONFIG.priceFull}
              </span>
              <span className="text-sm text-muted-foreground">
                ou {SITE_CONFIG.priceParcelado}
              </span>
            </div>
          </div>

          <Button size="xl" href={SITE_CONFIG.checkoutUrl} className="shine-effect text-lg px-12">
            {SITE_CONFIG.ctaFinal}
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            ✅ Acesso imediato · Acesso vitalício · {SITE_CONFIG.guaranteeDays} dias de garantia
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SITE_CONFIG } from '../constants';

export function GarantiaSection() {
  return (
    <section id="garantia" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <Container>
        <Reveal direction="up">
          <div className="max-w-3xl mx-auto text-center bg-card border border-border rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-[-50%] left-[-50%] w-full h-full glow-orange opacity-20 pointer-events-none" />

            <div className="relative z-10">
              {/* Shield icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center text-3xl sm:text-4xl mx-auto mb-6">
                🛡️
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
                Você tem {SITE_CONFIG.guaranteeDays} dias para testar{' '}
                <span className="text-gradient">sem risco</span>
              </h2>

              <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
                Se o material não fizer sentido para você, basta solicitar o
                reembolso dentro do prazo de {SITE_CONFIG.guaranteeDays} dias.
                Devolvemos 100% do seu investimento, sem burocracia.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Sem burocracia
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Reembolso total
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Sem perguntas
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardTitle, CardDescription } from '../components/ui/Card';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Reveal, StaggerContainer, StaggerItem } from '../components/ui/Reveal';
import { SITE_CONFIG, BONUS } from '../constants';

export function RecebeSection() {
  return (
    <section id="recebe" className="py-16 sm:py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] glow-orange opacity-[0.1] pointer-events-none" />

      <Container>
        <SectionTitle
          tag="tudo incluso"
          title="O que você recebe dentro do sistema"
          description="Material completo, organizado por fase, com módulos práticos e ferramentas rápidas para os primeiros dias."
        />

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 items-start max-w-5xl mx-auto">
          <Reveal direction="up" className="lg:col-span-3">
            <Card variant="glass" className="relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent" />

              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary/15 flex items-center justify-center text-3xl sm:text-4xl flex-shrink-0">
                  📘
                </div>
                <div className="flex-1 min-w-0">
                  <Badge variant="premium" className="mb-3">Produto principal</Badge>
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                    SISTEMA PRIMEIRAS SEMANAS™
                  </h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">
                    O acompanhamento completo para quem está começando a caneta de emagrecimento. Inclui módulos por fase, rotina alimentar, lista de compras, receitas e painel de consulta rápida.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal direction="up" delay={0.2} className="lg:col-span-2">
            <Card variant="elevated" className="border-primary/30 relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-32 h-32 glow-orange opacity-40 pointer-events-none" />

              <div className="relative z-10">
                <p className="text-sm text-muted-foreground mb-2">Valor percebido</p>
                <p className="text-3xl text-muted-foreground line-through font-bold mb-4">
                  {SITE_CONFIG.priceFull}
                </p>

                <div className="mb-2">
                  <span className="text-5xl font-black text-gradient">
                    {SITE_CONFIG.priceCurrent}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  ou {SITE_CONFIG.priceParcelado}
                </p>

                <Button size="lg" fullWidth href={SITE_CONFIG.checkoutUrl} className="shine-effect">
                  {SITE_CONFIG.ctaPrimary}
                </Button>

                <p className="text-xs text-muted-foreground mt-4">
                  ✅ Acesso imediato · Uso no celular · 7 dias de garantia
                </p>
              </div>
            </Card>
          </Reveal>
        </div>

        <div className="mt-12 sm:mt-16">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
            + <span className="text-primary font-bold">ferramentas práticas</span> incluídas
          </h3>
          <StaggerContainer className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {BONUS.map((bonus, i) => (
              <StaggerItem key={i}>
                <Card variant="default" hover className="h-full text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-xl mx-auto mb-4">
                    {i === 0 ? '📅' : i === 1 ? '🛒' : '📌'}
                  </div>
                  <CardTitle>{bonus.title}</CardTitle>
                  <CardDescription>{bonus.description}</CardDescription>
                  <Badge variant="premium" className="mt-4">
                    Incluso
                  </Badge>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}

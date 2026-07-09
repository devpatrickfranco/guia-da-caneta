import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Reveal } from '../components/ui/Reveal';
import { motion } from 'framer-motion';
import { SITE_CONFIG, HERO_BENEFITS } from '../constants';
import { StickyCtaMobile } from '../components/landing/StickyCtaMobile';

function ProductMockup({ desktop = false }: { desktop?: boolean }) {
  return (
    <div className="relative flex items-center justify-center w-full">
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ transform: 'translateY(-10px)' }}
      >
        <div
          className={`${desktop ? 'w-[400px] h-[400px]' : 'w-[320px] h-[320px]'} rounded-full`}
          style={{
            background:
              'radial-gradient(circle, rgba(255,115,0,0.15) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="absolute -top-2 right-4 sm:right-8 z-20">
        <div className="bg-surface/80 backdrop-blur-md border border-primary/20 rounded-xl px-3.5 py-2 text-xs font-semibold text-accent shadow-lg">
          Edição 2026
        </div>
      </div>

      <div className="absolute top-1/4 -left-2 sm:-left-4 z-20">
        <div className="bg-surface/80 backdrop-blur-md border border-border/80 rounded-xl px-3 py-1.5 text-[11px] font-semibold text-muted-foreground shadow-lg">
          Módulos 1 a 6
        </div>
      </div>

      <div className="absolute bottom-[18%] -right-1 z-20">
        <div className="bg-surface/80 backdrop-blur-md border border-border/80 rounded-xl px-3 py-1.5 text-[11px] font-semibold text-muted-foreground shadow-lg">
          Consulta rápida
        </div>
      </div>

      <div className="absolute -bottom-1 left-6 z-20">
        <div className="bg-surface/80 backdrop-blur-md border border-border/80 rounded-xl px-3 py-1.5 text-[11px] font-semibold text-muted-foreground shadow-lg">
          Acesso imediato
        </div>
      </div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30, rotateX: 5, rotateY: -3 }}
        animate={{
          opacity: 1,
          y: desktop ? -80 : -6,
          rotateX: 2,
          rotateY: -3,
        }}
        transition={{
          duration: 0.9,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.4,
        }}
        whileHover={{
          y: desktop ? -88 : -12,
          scale: 1.015,
          rotateX: 1,
          rotateY: -2,
          transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
        }}
        style={{ perspective: '1200px' }}
      >
        <div
          className="relative w-[300px] sm:w-[360px] rounded-3xl overflow-hidden"
          style={{
            transform: 'rotateY(-3deg) rotateX(2deg)',
            boxShadow: `
              0 25px 50px -12px rgba(0,0,0,0.6),
              0 0 0 1px rgba(255,115,0,0.12),
              0 0 30px -10px rgba(255,115,0,0.08)
            `,
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/60 via-primary to-accent z-30" />

          <div className="relative bg-gradient-to-b from-[#1a1208] to-[#0f0b06] rounded-3xl">
            <div
              className="absolute inset-0 opacity-[0.03] rounded-3xl pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,115,0,0.06) 0%, transparent 70%)' }} />

            <div className="relative p-5 sm:p-6">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/livro.webp"
                  alt="Sistema Primeiras Semanas - Material prático para caneta de emagrecimento"
                  className="w-full h-full object-cover"
                  loading="eager"
                />

                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.02) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.06) 100%)'
                }} />

                <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/5 pointer-events-none" />
              </div>
            </div>

            <div className="relative px-5 sm:px-6 pb-4 sm:pb-5">
              <div className="flex items-center justify-between border-t border-white/5 pt-3 sm:pt-4">
                <div>
                  <span className="block text-[10px] tracking-[0.15em] uppercase text-muted-foreground/60 font-medium">
                    Sistema Primeiras Semanas™
                  </span>
                  <span className="block text-[11px] text-accent font-semibold mt-0.5">
                    Guia prático por fase
                  </span>
                </div>
                <div className="text-right">
                  <span className="block text-lg font-black text-primary leading-none">
                    {SITE_CONFIG.priceCurrent}
                  </span>
                  <span className="block text-[10px] text-muted-foreground line-through">
                    {SITE_CONFIG.priceFull}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <svg
        className="absolute -bottom-4 right-0 w-24 h-24 opacity-[0.04] pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.3" />
        <line x1="5" y1="50" x2="20" y2="50" stroke="white" strokeWidth="0.3" />
        <line x1="80" y1="50" x2="95" y2="50" stroke="white" strokeWidth="0.3" />
        <line x1="50" y1="5" x2="50" y2="20" stroke="white" strokeWidth="0.3" />
        <line x1="50" y1="80" x2="50" y2="95" stroke="white" strokeWidth="0.3" />
      </svg>
    </div>
  );
}

export function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center overflow-hidden pt-12 sm:pt-20 pb-16 sm:pb-24"
      >
        <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] glow-orange opacity-70 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] glow-orange opacity-30 pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="flex flex-col gap-6 lg:gap-7">
              <Reveal direction="up" delay={0.1}>
                <Badge variant="premium" className="text-xs">
                  <span className="text-primary">✦</span>
                  Sistema prático para as primeiras semanas
                </Badge>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <h1 className="text-[clamp(30px,4vw,62px)] font-black leading-none tracking-[-0.03em]">
                  Começou a caneta e não sabe{' '}
                  <span className="text-gradient">exatamente o que fazer</span> nos primeiros dias?
                </h1>
              </Reveal>

              <div className="block lg:hidden my-2">
                <Reveal direction="up" delay={0.25}>
                  <ProductMockup />
                </Reveal>
              </div>

              <Reveal direction="up" delay={0.3}>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Um acompanhamento simples, organizado por fase, para você saber
                  o que é normal sentir, o que comer, quando se preocupar e como
                  proteger músculo, cabelo e energia usando Ozempic, Mounjaro,
                  Wegovy ou similares.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.35}>
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <Button size="xl" href={SITE_CONFIG.checkoutUrl} className="animate-cta-pulse shine-effect">
                    {SITE_CONFIG.ctaPrimary}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  {SITE_CONFIG.priceParcelado} · Acesso imediato ·
                  Módulos 1 a 6 · Painel de consulta rápida
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.4}>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {HERO_BENEFITS.map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className="text-primary flex-shrink-0 mt-0.5">✔</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <Reveal direction="right" delay={0.3}>
                <ProductMockup desktop />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <StickyCtaMobile />
    </>
  );
}

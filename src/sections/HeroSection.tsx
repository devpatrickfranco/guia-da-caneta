import type { CSSProperties } from 'react';

import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { SITE_CONFIG, HERO_BENEFITS } from '../constants';
import { StickyCtaMobile } from '../components/landing/StickyCtaMobile';

function ProductMockup({ desktop = false }: { desktop?: boolean }) {
  const heroCardStyle = {
    '--hero-card-y': desktop ? '-80px' : '-6px',
    '--hero-card-hover-y': desktop ? '-88px' : '-12px',
  } as CSSProperties;

  return (
    <div className="relative flex w-full items-center justify-center">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{ transform: 'translateY(-10px)' }}
        aria-hidden="true"
      >
        <div
          className={`${
            desktop ? 'h-[400px] w-[400px]' : 'h-[320px] w-[320px]'
          } rounded-full`}
          style={{
            background:
              'radial-gradient(circle, rgba(255,115,0,0.15) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="absolute -top-2 right-4 z-20 sm:right-8">
        <div className="rounded-xl border border-primary/20 bg-surface/80 px-3.5 py-2 text-xs font-semibold text-accent shadow-lg backdrop-blur-md">
          Edição 2026
        </div>
      </div>

      <div className="absolute top-1/4 -left-2 z-20 sm:-left-4">
        <div className="rounded-xl border border-border/80 bg-surface/80 px-3 py-1.5 text-[11px] font-semibold text-muted-foreground shadow-lg backdrop-blur-md">
          Módulos 1 a 6
        </div>
      </div>

      <div className="absolute right-[-0.25rem] bottom-[18%] z-20">
        <div className="rounded-xl border border-border/80 bg-surface/80 px-3 py-1.5 text-[11px] font-semibold text-muted-foreground shadow-lg backdrop-blur-md">
          Consulta rápida
        </div>
      </div>

      <div className="absolute -bottom-1 left-6 z-20">
        <div className="rounded-xl border border-border/80 bg-surface/80 px-3 py-1.5 text-[11px] font-semibold text-muted-foreground shadow-lg backdrop-blur-md">
          Acesso imediato
        </div>
      </div>

      <div
        className="hero-card relative z-10"
        style={heroCardStyle}
      >
        <div
          className="relative w-[300px] overflow-hidden rounded-3xl sm:w-[360px]"
          style={{
            transform: 'rotateY(-3deg) rotateX(2deg)',
            boxShadow: `
              0 25px 50px -12px rgba(0,0,0,0.6),
              0 0 0 1px rgba(255,115,0,0.12),
              0 0 30px -10px rgba(255,115,0,0.08)
            `,
          }}
        >
          <div
            className="absolute top-0 right-0 left-0 z-30 h-[3px] bg-gradient-to-r from-primary/60 via-primary to-accent"
            aria-hidden="true"
          />

          <div className="relative rounded-3xl bg-gradient-to-b from-[#1a1208] to-[#0f0b06]">
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute top-1/2 left-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,115,0,0.06) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            <div className="relative p-5 sm:p-6">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/livro.webp"
                  alt="Sistema Primeiras Semanas — material prático para as primeiras semanas de uso de canetas de emagrecimento"
                  width={768}
                  height={1024}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover"
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to bottom, rgba(0,0,0,0.02) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.06) 100%)',
                  }}
                  aria-hidden="true"
                />

                <div
                  className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-white/5"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="relative px-5 pb-4 sm:px-6 sm:pb-5">
              <div className="flex items-center justify-between border-t border-white/5 pt-3 sm:pt-4">
                <div>
                  <span className="block text-[10px] font-medium tracking-[0.15em] text-muted-foreground/60 uppercase">
                    Sistema Primeiras Semanas™
                  </span>

                  <span className="mt-0.5 block text-[11px] font-semibold text-accent">
                    Guia prático por fase
                  </span>
                </div>

                <div className="text-right">
                  <span className="block text-lg leading-none font-black text-primary">
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
      </div>

      <svg
        className="pointer-events-none absolute right-0 -bottom-4 h-24 w-24 opacity-[0.04]"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="white"
          strokeWidth="0.5"
        />
        <circle
          cx="50"
          cy="50"
          r="30"
          stroke="white"
          strokeWidth="0.3"
        />
        <line
          x1="5"
          y1="50"
          x2="20"
          y2="50"
          stroke="white"
          strokeWidth="0.3"
        />
        <line
          x1="80"
          y1="50"
          x2="95"
          y2="50"
          stroke="white"
          strokeWidth="0.3"
        />
        <line
          x1="50"
          y1="5"
          x2="50"
          y2="20"
          stroke="white"
          strokeWidth="0.3"
        />
        <line
          x1="50"
          y1="80"
          x2="50"
          y2="95"
          stroke="white"
          strokeWidth="0.3"
        />
      </svg>
    </div>
  );
}

export function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-[90vh] items-center overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24"
      >
        <div
          className="glow-orange pointer-events-none absolute top-[-20%] right-[-20%] h-[60%] w-[60%] opacity-70"
          aria-hidden="true"
        />

        <div
          className="glow-orange pointer-events-none absolute bottom-[-10%] left-[-10%] h-[40%] w-[40%] opacity-30"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-6 lg:gap-7">
              <Badge variant="premium" className="text-xs">
                <span className="text-primary" aria-hidden="true">
                  ✦
                </span>
                Sistema prático para as primeiras semanas
              </Badge>

              <h1 className="text-[clamp(30px,4vw,62px)] leading-none font-black tracking-[-0.03em]">
                Começou a caneta e não sabe{' '}
                <span className="text-gradient">
                  exatamente o que fazer
                </span>{' '}
                nos primeiros dias?
              </h1>

              <div className="my-2 block lg:hidden">
                <img
                  src="/livro.webp"
                  alt="Sistema Primeiras Semanas"
                  width={768}
                  height={1024}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="mx-auto h-auto w-[300px] rounded-2xl"
                />
              </div>

              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Um acompanhamento simples, organizado por fase, para você saber
                o que é normal sentir, o que comer, quando se preocupar e como
                proteger músculo, cabelo e energia usando Ozempic, Mounjaro,
                Wegovy ou similares.
              </p>

              <div>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="xl"
                    href={SITE_CONFIG.checkoutUrl}
                    className="animate-cta-pulse shine-effect"
                  >
                    {SITE_CONFIG.ctaPrimary}
                  </Button>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  {SITE_CONFIG.priceParcelado} · Acesso imediato · Módulos 1 a 6
                  · Painel de consulta rápida
                </p>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {HERO_BENEFITS.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span
                      className="mt-0.5 flex-shrink-0 text-primary"
                      aria-hidden="true"
                    >
                      ✔
                    </span>

                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden items-center justify-center lg:flex">
              <ProductMockup desktop />
            </div>
          </div>
        </Container>
      </section>

      <StickyCtaMobile />
    </>
  );
}

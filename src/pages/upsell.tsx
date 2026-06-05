import { useEffect, useRef, useState } from "react";

// ─── tipos ────────────────────────────────────────────────────────────────────
interface Depoimento {
  iniciais: string;
  cor: string;
  nome: string;
  cidade: string;
  texto: string;
}

// ─── dados ────────────────────────────────────────────────────────────────────
const depoimentos: Depoimento[] = [
  {
    iniciais: "CS",
    cor: "#3b82f6",
    nome: "Camila S.",
    cidade: "São Paulo",
    texto:
      "O guia me ensinou o que fazer. O plano me disse o que comer hoje, amanhã e na semana. São coisas diferentes — e precisava dos dois.",
  },
  {
    iniciais: "RM",
    cor: "#8b5cf6",
    nome: "Rodrigo M.",
    cidade: "Porto Alegre",
    texto:
      "Tenho vontade de doce toda noite e isso estava travando tudo. O plano já veio com substituições certeiras pra esse horário.",
  },
  {
    iniciais: "PL",
    cor: "#14b8a6",
    nome: "Patrícia L.",
    cidade: "Recife",
    texto:
      "Não consigo comer de manhã com a caneta. O plano adaptou tudo pro meu horário real. Finalmente faz sentido pra mim.",
  },
];

const inclusos = [
  "Cardápio semanal adaptado ao seu padrão de fome",
  "Horários de refeição ajustados à sua rotina",
  "Substituições para suas vontades específicas (doce, salgado, noturno)",
  "Meta de proteína calculada para o seu peso",
  "Lista de compras da semana gerada automaticamente",
  "Dicas para os momentos do dia em que você mais trava",
];

// ─── constantes — substitua pelos valores reais ───────────────────────────────
const VIDEO_URL = "VIDEO_URL_AQUI.mp4";
const CTA_URL = "LINK_ONE_CLICK_AQUI";
const RECUSA_URL = "LINK_CONFIRMACAO_GUIA_AQUI";
const CTA_DELAY_MS = 240_000; // 4 minutos
const CTA_VIDEO_TIME = 240;   // segundos

// ─── componente principal ─────────────────────────────────────────────────────
export default function Upsell() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ctaVisivel, setCtaVisivel] = useState(false);
  const [soundOverlay, setSoundOverlay] = useState(false);
  const [pauseOverlay, setPauseOverlay] = useState(false);
  const [thumbnailVisivel, setThumbnailVisivel] = useState(true);
  const [progresso, setProgresso] = useState(0);
  const ctaReveladoRef = useRef(false);

  // ── revela CTA ──────────────────────────────────────────────────────────────
  function revelarCTA() {
    if (ctaReveladoRef.current) return;
    ctaReveladoRef.current = true;
    setCtaVisivel(true);

    setTimeout(() => {
      document
        .querySelector<HTMLElement>(".cta-scroll-target")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 800);

    if (navigator.vibrate) navigator.vibrate(200);
  }

  // ── pixel ────────────────────────────────────────────────────────────────────
  function handleCTAClick() {
    if (typeof (window as any).fbq !== "undefined") {
      (window as any).fbq("track", "Clique_Upsell_1", {
        value: 27,
        currency: "BRL",
      });
    }
  }

  // ── timer fallback ──────────────────────────────────────────────────────────
  useEffect(() => {
    const t = setTimeout(revelarCTA, CTA_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  // ── eventos do player ───────────────────────────────────────────────────────
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => video.play().catch(() => {});

    const onTimeUpdate = () => {
      if (video.currentTime >= 0.1 && video.muted) setSoundOverlay(true);
      if (video.currentTime >= CTA_VIDEO_TIME) revelarCTA();

      const real = video.currentTime / (video.duration || 1);
      setProgresso(Math.min(real * 1.35, 0.92) * 100);
    };

    const onPlay = () => {
      setSoundOverlay(false);
      setPauseOverlay(false);
    };

    const onPause = () => {
      if (video.currentTime > 0) setPauseOverlay(true);
    };

    const onEnded = () => revelarCTA();

    const onSuspend = () => {
      if (video.currentTime === 0) setThumbnailVisivel(true);
    };

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);
    video.addEventListener("suspend", onSuspend);

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("suspend", onSuspend);
    };
  }, []);

  function handleContainerClick(e: React.MouseEvent) {
    const video = videoRef.current;
    if (!video) return;
    const target = e.target as HTMLElement;
    if (target.id === "pause-resume-btn" || target.closest("#pause-resume-btn")) return;

    if (video.paused) {
      video.play();
    } else if (video.muted) {
      video.muted = false;
      setSoundOverlay(false);
    }
  }

  function handleThumbnailClick() {
    const video = videoRef.current;
    if (!video) return;
    setThumbnailVisivel(false);
    video.load();
    video.play().catch(() => {});
  }

  function handlePauseResume(e: React.MouseEvent) {
    e.stopPropagation();
    videoRef.current?.play();
  }

  // ─── render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">

      {/* BLOCO 1 — Barra de urgência */}
      <div className="sticky top-0 z-50 h-11 flex items-center justify-center bg-amber-500 text-white text-[13px] sm:text-sm font-semibold px-4">
        <p>⚠️ Esta oferta exclusiva expira quando você sair desta página</p>
      </div>

      <main className="mx-auto w-full max-w-[640px] px-5">

        {/* BLOCO 2 — Headline */}
        <section className="pt-8 text-center">
          <p className="text-[13px] font-bold uppercase tracking-wider text-green-600 mb-4">
            PARABÉNS, {"{PRIMEIRO_NOME}"}!
          </p>
          <h1 className="text-[28px] sm:text-[32px] font-bold leading-tight text-gray-900">
            O Guia te deu as regras.<br />
            Agora você precisa do<br />
            plano feito para você.
          </h1>
          <p className="mt-5 text-base text-gray-600 leading-relaxed max-w-[560px] mx-auto">
            Cada pessoa que usa a caneta sente a fome de um jeito diferente.
            Tem quem acorde sem apetite mas enfrente vontade de doce à noite.
            Tem quem coma pouco de manhã mas trave no almoço.
          </p>
          <p className="mt-3 text-base text-gray-600 leading-relaxed max-w-[560px] mx-auto">
            Um plano genérico ignora isso. O seu não vai.
          </p>
        </section>

        {/* BLOCO 3 — Player */}
        <section className="mt-8">
          <div
            className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-900 shadow-md cursor-pointer"
            onClick={handleContainerClick}
          >
            {/* Thumbnail */}
            {thumbnailVisivel && (
              <div
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900"
                onClick={(e) => { e.stopPropagation(); handleThumbnailClick(); }}
              >
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white text-sm sm:text-base font-semibold text-center px-6 max-w-xs">
                  Seu plano alimentar para a caneta — feito para o seu perfil
                </p>
              </div>
            )}

            {/* Vídeo */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              playsInline
              preload="metadata"
              src={VIDEO_URL}
            />

            {/* Sound overlay */}
            <div
              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 transition-opacity duration-300"
              style={{ opacity: soundOverlay ? 1 : 0, pointerEvents: soundOverlay ? "auto" : "none" }}
            >
              <p className="text-white text-base sm:text-lg font-bold drop-shadow-lg">
                🔊 Clique para ouvir
              </p>
            </div>

            {/* Pause overlay */}
            <div
              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/50 px-6 transition-opacity duration-300"
              style={{ opacity: pauseOverlay ? 1 : 0, pointerEvents: pauseOverlay ? "auto" : "none" }}
            >
              <p className="text-white text-sm sm:text-base text-center leading-relaxed mb-4 max-w-sm">
                Espere — isso foi feito especificamente para quem acabou de comprar o Guia
              </p>
              <button
                id="pause-resume-btn"
                onClick={handlePauseResume}
                className="px-6 py-3 rounded-lg bg-white text-gray-900 text-sm font-bold shadow-lg hover:bg-gray-100 transition-colors"
              >
                Continuar assistindo
              </button>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
              <div
                className="h-full bg-white/70 transition-all duration-300"
                style={{ width: `${progresso}%` }}
              />
            </div>
          </div>
        </section>

        {/* BLOCOS 4–11 — travados até revelarCTA() */}
        <div
          className="transition-opacity duration-[600ms] ease-out"
          style={{
            opacity: ctaVisivel ? 1 : 0,
            pointerEvents: ctaVisivel ? "auto" : "none",
            height: ctaVisivel ? "auto" : 0,
            overflow: ctaVisivel ? "visible" : "hidden",
          }}
        >
          {/* BLOCO 4 — Social proof */}
          <section className="mt-10">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-5 px-5 scrollbar-hide">
              {depoimentos.map((d) => (
                <div
                  key={d.nome}
                  className="min-w-[280px] sm:min-w-[300px] snap-start rounded-xl border border-gray-100 bg-white p-5 shadow-sm shrink-0"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                      style={{ backgroundColor: d.cor }}
                    >
                      {d.iniciais}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{d.nome}</p>
                      <p className="text-xs text-gray-400">{d.cidade}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{d.texto}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BLOCO 5 — Apresentação do produto */}
          <section className="cta-scroll-target pt-10 pb-8 text-center">
            <h2 className="text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
              Seu Plano Alimentar Personalizado<br />
              para o tratamento com GLP-1
            </h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed max-w-[520px] mx-auto">
              Um plano gerado a partir do seu perfil — seus horários de fome,
              suas preferências, sua rotina. Não de mais ninguém.
            </p>

            {/* 3 passos */}
            <div className="mt-10 flex flex-col sm:flex-row gap-8 sm:gap-6">
              {[
                { n: 1, titulo: "Você responde", desc: "7 perguntas rápidas sobre como sente a fome" },
                { n: 2, titulo: "O plano é gerado", desc: "Com base no seu perfil específico" },
                { n: 3, titulo: "Você recebe", desc: "No mesmo e-mail, pronto para aplicar hoje" },
              ].map(({ n, titulo, desc }) => (
                <div key={n} className="flex-1 flex flex-col items-center text-center">
                  <div className="w-11 h-11 rounded-full bg-green-600 text-white flex items-center justify-center text-lg font-bold mb-3">
                    {n}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{titulo}</h3>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
              ))}
            </div>

            {/* Inclusos */}
            <div className="mt-10 text-left max-w-[480px] mx-auto space-y-3">
              {inclusos.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* BLOCO 6 — Preço */}
          <section className="py-8 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-[11px] font-bold uppercase tracking-wider mb-6">
              EXCLUSIVO PARA CLIENTES DO GUIA DA CANETA
            </span>
            <p className="text-base text-gray-400 line-through mb-1">Valor avulso: R$ 67,00</p>
            <p className="text-sm text-gray-500 mb-2">Por ser cliente:</p>
            <p className="text-[44px] sm:text-[48px] font-black text-gray-900 leading-none mb-2">
              R$ <span className="text-green-600">27</span>,00
            </p>
            <p className="text-[13px] text-gray-400">Cobrado uma única vez. Acesso imediato após o quiz.</p>
          </section>

          {/* BLOCO 7 — CTA principal */}
          <CTABlock onAccept={handleCTAClick} recusaUrl={RECUSA_URL} />

          {/* BLOCO 9 — Garantia */}
          <section className="mt-8 py-8 px-6 border border-gray-100 rounded-xl bg-gray-50 text-center">
            <svg className="w-10 h-10 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <h3 className="text-[15px] font-bold text-gray-900 uppercase tracking-wider mb-2">
              GARANTIA INCONDICIONAL DE 7 DIAS
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[420px] mx-auto">
              Se o plano gerado não fizer sentido para o seu perfil,
              é só mandar um e-mail. Devolvemos 100% — sem perguntas.
            </p>
          </section>

          {/* BLOCO 10 — Urgência textual */}
          <div className="mt-8 text-center">
            <p className="text-[13px] sm:text-sm text-gray-800 font-semibold leading-relaxed max-w-[480px] mx-auto">
              Esta oferta aparece apenas nesta página e não volta depois que você sair.
              O plano personalizado não está disponível para compra avulsa por este valor.
            </p>
          </div>

          {/* BLOCO 11 — Segundo CTA */}
          <div className="mt-8 pb-8">
            <CTABlock onAccept={handleCTAClick} recusaUrl={RECUSA_URL} />
          </div>
        </div>

        {/* BLOCO 12 — Rodapé */}
        <footer className="py-6 border-t border-gray-100 text-center">
          <p className="text-[11px] text-gray-400 leading-relaxed">
            © 2026 · Material Educativo · Este conteúdo não substitui orientação médica
          </p>
          <p className="text-[11px] text-gray-400 mt-1">
            <a href="#" className="hover:underline">Política de Privacidade</a>
            <span className="mx-1">·</span>
            <a href="#" className="hover:underline">Termos de Uso</a>
          </p>
        </footer>

      </main>
    </div>
  );
}

// ─── sub-componente CTA (reutilizado no bloco 7 e 11) ────────────────────────
function CTABlock({
  onAccept,
  recusaUrl,
}: {
  onAccept: () => void;
  recusaUrl: string;
}) {
  return (
    <section className="text-center">
      <a
        href={CTA_URL}
        onClick={onAccept}
        className="inline-flex items-center justify-center w-full h-[60px] sm:h-16 bg-green-600 hover:bg-green-700 text-white text-[17px] sm:text-lg font-bold rounded-xl shadow-lg transition-colors duration-200 no-underline"
      >
        SIM! Quero meu plano personalizado por R$ 27 →
      </a>
      <p className="mt-3 text-[12px] text-gray-400">
        🔒 Pagamento seguro — sem digitar nada. Adicionado ao pedido anterior.
      </p>
      <p className="mt-4 text-[13px] text-gray-500">
        O acesso chega no mesmo e-mail da compra do Guia.<br />
        Você responde o quiz logo após confirmar.
      </p>
      <div className="mt-5">
        <a
          href={recusaUrl}
          className="text-[12px] text-gray-400 no-underline hover:underline transition-colors"
        >
          Não, obrigado. Vou seguir apenas com o Guia por enquanto.
        </a>
      </div>
    </section>
  );
}

import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  CalendarCheck, 
  Lock, 
  HeartHandshake,
  GraduationCap,
  UserCheck,
  MessageCircle,
  ChevronDown
} from 'lucide-react';
import {
  FloralCornerAccent,
  FloralSectionDivider,
  GoldSparkle,
  FloralCardBranchTopLeft,
  FloralCardBudBottomRight,
  FloralCardBorderVineTop,
  FloralCardStemBottomLeft,
  FloralCardSingleBlossom,
  FloralCardTwinLeaves
} from './components/FloralElements';

export default function App() {
  const whatsappUrl = "https://wa.me/5512991715684?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20primeira%20conversa.";

  return (
    <div className="min-h-screen flex flex-col justify-between" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      
      {/* ==========================================================================
          CABEÇALHO / HEADER
          ========================================================================== */}
      <header 
        id="header"
        className="w-full border-b sticky top-0 z-40 backdrop-blur-md"
        style={{ 
          borderColor: 'var(--color-border-subtle)',
          backgroundColor: 'rgba(249, 248, 245, 0.88)'
        }}
      >
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-col">
            <span 
              className="text-lg font-semibold tracking-tight"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
            >
              Psicóloga Isabele Costa
            </span>
            <span 
              className="text-xs font-medium"
              style={{ color: 'var(--color-text-muted)' }}
            >
              CRP 06/214123
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border"
              style={{ 
                backgroundColor: 'var(--color-sage-soft)', 
                color: 'var(--color-primary-forest)',
                borderColor: 'var(--color-sage-light)'
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-sage-dark)' }}></span>
              <span>Atendimento 100% online</span>
            </div>
          </div>
        </div>
      </header>

      {/* ==========================================================================
          CONTEÚDO PRINCIPAL / HERO
          ========================================================================== */}
      <main id="main-content" className="flex-1">
        <section 
          id="hero"
          aria-labelledby="hero-title"
          className="relative overflow-hidden pt-14 pb-16 sm:pt-20 sm:pb-24 md:pt-28 md:pb-32"
          style={{
            background: 'linear-gradient(180deg, #fdfbfc 0%, #fcf3f7 50%, #fdfbfc 100%)'
          }}
        >
          {/* Brilho suave em degradê (Luz de amanhecer quente e sutil) */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[620px] sm:w-[860px] lg:w-[1100px] h-[380px] sm:h-[480px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(242, 216, 228, 0.65) 0%, rgba(251, 240, 245, 0.45) 45%, rgba(253, 251, 252, 0) 72%)',
              filter: 'blur(50px)'
            }}
            aria-hidden="true"
          />

          {/* Formas orgânicas e fluidas (Manchas suaves e acolhedoras com baixa opacidade) */}
          <div 
            className="absolute -top-12 -left-24 w-80 sm:w-96 h-80 sm:h-96 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(168, 108, 143, 0.15) 0%, rgba(242, 216, 228, 0.1) 45%, transparent 70%)',
              filter: 'blur(45px)'
            }}
            aria-hidden="true"
          />
          <div 
            className="absolute top-1/3 -right-20 w-80 sm:w-[440px] h-80 sm:h-[440px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(176, 92, 124, 0.12) 0%, rgba(251, 240, 245, 0.3) 50%, transparent 75%)',
              filter: 'blur(50px)'
            }}
            aria-hidden="true"
          />

          {/* ======================================================================
              FLORAIS LATERAIS DO HERO (floral-1.svg à esquerda e floral-2.svg à direita)
              Com fundo transparente, harmonia orgânica (esquerda levemente mais alta)
              e opacidade suave para respiro e foco no conteúdo
              ====================================================================== */}
          {/* Floral 1 - Lateral Esquerda (levemente mais alto para composição harmônica) */}
          <div 
            className="absolute z-0 pointer-events-none select-none transition-all duration-300
              /* Celular: discreto no topo/canto esquerdo, sem interferir no texto ou botão */
              -top-8 -left-6 sm:-top-4 sm:left-0 w-32 sm:w-44 h-auto opacity-15 sm:opacity-20
              /* Desktop (md+): na lateral esquerda, alinhado à borda e posicionado ligeiramente mais alto */
              md:top-[44%] md:-translate-y-1/2 md:left-0 lg:left-1 xl:left-3
              md:w-[260px] lg:w-[320px] xl:w-[370px] 2xl:w-[410px]
              md:h-[82%] md:max-h-[760px]
              md:opacity-40 lg:opacity-55 xl:opacity-70"
            aria-hidden="true"
          >
            <img 
              id="hero-floral-left"
              src="/assets/foto/floral-1.svg" 
              alt="" 
              className="w-full h-full object-contain object-left" 
              style={{ mixBlendMode: 'multiply' }}
              loading="eager"
            />
          </div>

          {/* Floral 2 - Lateral Direita (levemente mais baixo para contraste e equilíbrio dinâmico) */}
          <div 
            className="absolute z-0 pointer-events-none select-none transition-all duration-300
              /* Celular: discreto no rodapé/canto direito, sem interferir no texto ou botão */
              -bottom-8 -right-6 sm:-bottom-4 sm:right-0 w-32 sm:w-44 h-auto opacity-15 sm:opacity-20
              /* Desktop (md+): na lateral direita, alinhado à borda e posicionado ligeiramente mais abaixo */
              md:top-[54%] md:-translate-y-1/2 md:right-0 lg:right-1 xl:right-3
              md:w-[260px] lg:w-[320px] xl:w-[370px] 2xl:w-[410px]
              md:h-[82%] md:max-h-[760px]
              md:opacity-40 lg:opacity-55 xl:opacity-70"
            aria-hidden="true"
          >
            <img 
              id="hero-floral-right"
              src="/assets/foto/floral-2.svg" 
              alt="" 
              className="w-full h-full object-contain object-right" 
              style={{ mixBlendMode: 'multiply' }}
              loading="eager"
            />
          </div>

          {/* Conteúdo Centralizado em Coluna Única */}
          <div className="relative z-10 max-w-[840px] mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
            
            {/* Selos de Confiança (Pequenas etiquetas discretas e refinadas) */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-6 sm:mb-8">
              <span 
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border shadow-xs"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                  borderColor: 'var(--color-border-subtle)',
                  color: 'var(--color-sage-dark)',
                  backdropFilter: 'blur(6px)'
                }}
              >
                <ShieldCheck size={14} style={{ color: 'var(--color-gold-accent)' }} />
                <span>Psicóloga Isabele Costa · CRP 06/214123</span>
              </span>

              <span 
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border shadow-xs"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                  borderColor: 'var(--color-border-subtle)',
                  color: 'var(--color-sage-dark)',
                  backdropFilter: 'blur(6px)'
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-gold-accent)' }}></span>
                <span>Atendimento 100% online</span>
              </span>
            </div>

            {/* Título Principal (Ponto Central de Destaque com Tamanho Generoso) */}
            <h1 
              id="hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-normal leading-[1.18] sm:leading-[1.12] tracking-[-0.02em] max-w-[20ch] mb-5 sm:mb-6"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                color: 'var(--color-primary-dark)' 
              }}
            >
              Você não precisa dar conta de tudo sozinha.
            </h1>

            {/* Subtítulo Acolhedor */}
            <p 
              className="text-base sm:text-lg md:text-[1.15rem] leading-relaxed max-w-[54ch] mb-8 sm:mb-9"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Um espaço de terapia online para mulheres fortalecerem a autoestima, se libertarem da autocobrança e cultivarem relações mais saudáveis.
            </p>

            {/* Citação Elegante de Carl Rogers */}
            <div 
              className="relative max-w-[580px] w-full mx-auto px-6 py-5 sm:px-7 sm:py-5 rounded-2xl border shadow-xs mb-8 sm:mb-10 text-center"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.72)',
                borderColor: 'var(--color-border-subtle)',
                backdropFilter: 'blur(8px)'
              }}
            >
              {/* Traço sutil na cor de destaque */}
              <div 
                className="w-8 h-[2px] mx-auto mb-3 rounded-full"
                style={{ backgroundColor: 'var(--color-gold-accent)' }}
                aria-hidden="true"
              />

              <blockquote 
                className="italic text-base sm:text-[1.05rem] leading-relaxed mb-2"
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--color-text-quote)' 
                }}
              >
                &ldquo;O paradoxo curioso é que quando eu me aceito como eu sou, então eu mudo.&rdquo;
              </blockquote>

              <cite 
                className="not-italic text-xs sm:text-[13px] font-semibold tracking-wider uppercase block"
                style={{ color: 'var(--color-sage-dark)' }}
              >
                Carl Rogers
              </cite>
            </div>

            {/* Botão de WhatsApp Convidativo e Visível */}
            <div className="flex flex-col items-center justify-center w-full sm:w-auto">
              <a
                id="btn-whatsapp-hero"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-lg w-full sm:w-auto focus-visible:outline-2 focus-visible:outline-offset-3"
                style={{ 
                  backgroundColor: 'var(--color-primary-dark)',
                  boxShadow: 'var(--shadow-btn)'
                }}
                aria-label="Falar no WhatsApp para agendar primeira conversa"
              >
                {/* SVG WhatsApp Oficial */}
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Indicador Sutil de "Role para baixo" */}
            <a
              href="#sobre"
              className="mt-10 sm:mt-12 inline-flex flex-col items-center gap-1.5 text-xs font-medium transition-all duration-200 hover:opacity-100 opacity-70 group focus-visible:outline-2"
              style={{ color: 'var(--color-sage-dark)' }}
              aria-label="Rolar para baixo para conhecer a psicóloga Isabele Costa"
            >
              <span className="text-[11px] font-medium tracking-wider uppercase">
                Conheça a psicóloga
              </span>
              <ChevronDown 
                size={18} 
                className="transition-transform duration-200 group-hover:translate-y-1 animate-bounce" 
                style={{ color: 'var(--color-gold-accent)' }} 
              />
            </a>

          </div>
        </section>

        {/* Divisória Floral Elegante */}
        <FloralSectionDivider color="var(--color-gold-accent)" opacity={0.5} />

        {/* ==========================================================================
            SEÇÃO: SOBRE A ISABELE (Apresentação da Psicóloga)
            ========================================================================== */}
        <section 
          id="sobre"
          aria-labelledby="about-title"
          className="relative overflow-hidden py-14 sm:py-20 md:py-24 border-t"
          style={{ 
            backgroundColor: 'var(--color-bg-card)',
            borderColor: 'var(--color-border-subtle)'
          }}
        >
          {/* Detalhe floral sutil no canto da seção Sobre */}
          <FloralCornerAccent 
            position="top-right" 
            size={105} 
            opacity={0.25} 
            color="var(--color-gold-accent)"
            className="absolute top-2 right-2 hidden md:block" 
          />

          <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Coluna 1: Foto Principal da Isabele Costa com Moldura e Selo */}
              <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
                <div className="relative w-full max-w-[380px]">
                  
                  {/* Fundo decorativo sutil */}
                  <div 
                    className="absolute -inset-2.5 sm:-inset-3 rounded-3xl rotate-1 opacity-90"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--color-sage-soft) 0%, var(--color-sage-light) 100%)' 
                    }}
                    aria-hidden="true"
                  ></div>

                  {/* Moldura da Foto da Isabele */}
                  <div 
                    className="relative rounded-2xl p-2.5 sm:p-3 shadow-md border group"
                    style={{ 
                      backgroundColor: 'var(--color-bg-card)',
                      borderColor: 'var(--color-border-subtle)',
                      boxShadow: 'var(--shadow-card)'
                    }}
                  >
                    {/* Detalhe botânico artesanal no canto da moldura da foto */}
                    <FloralCardBudBottomRight 
                      className="absolute -top-2.5 -right-2.5 pointer-events-none z-10" 
                      size={40} 
                      opacity={0.65} 
                      color="var(--color-gold-accent)" 
                    />
                    <div 
                      className="relative w-full h-[390px] sm:h-[430px] rounded-xl overflow-hidden flex flex-col justify-end"
                      style={{ 
                        backgroundColor: 'var(--color-sage-soft)'
                      }}
                    >
                      <img 
                        src="/assets/foto/foto-isabele-costa.webp" 
                        alt="Foto da Psicóloga Isabele Costa (CRP 06/214123)"
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Selo flutuante de acolhimento e ética */}
                      <div 
                        className="relative z-10 m-3 p-3 rounded-xl backdrop-blur-md border shadow-sm flex items-center gap-3"
                        style={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          borderColor: 'var(--color-border-subtle)'
                        }}
                      >
                        <div 
                          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ 
                            backgroundColor: 'var(--color-gold-light)',
                            border: '1px solid var(--color-gold-border)',
                            color: 'var(--color-gold-accent)'
                          }}
                        >
                          <Lock size={16} />
                        </div>
                        <div>
                          <p 
                            className="text-xs font-bold leading-tight"
                            style={{ color: 'var(--color-primary-dark)' }}
                          >
                            Espaço Seguro & Confidencial
                          </p>
                          <p 
                            className="text-[11px] leading-tight"
                            style={{ color: 'var(--color-text-muted)' }}
                          >
                            Atendimento ético conforme o CFP
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Coluna 2: Conteúdo Textual & Credenciais */}
              <div className="lg:col-span-7 flex flex-col gap-6 text-left order-2 lg:order-2">
                
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2.5">
                  <span className="w-6 h-[1.5px]" style={{ backgroundColor: 'var(--color-sage-medium)' }}></span>
                  <span 
                    className="text-xs sm:text-sm font-semibold tracking-wider uppercase"
                    style={{ color: 'var(--color-sage-dark)' }}
                  >
                    Apresentação
                  </span>
                </div>

                {/* Título da Seção */}
                <h2 
                  id="about-title"
                  className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight tracking-tight inline-flex items-center gap-2.5"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
                >
                  <span>Prazer, sou a Isabele</span>
                  <GoldSparkle size={14} className="opacity-75" />
                </h2>

                {/* Parágrafos Exatos */}
                <div className="flex flex-col gap-4 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-main)' }}>
                  <p>
                    Prazer, sou a Isabele Costa, psicóloga (CRP 06/214123). Acredito que toda pessoa merece um espaço para ser ouvida sem pressa e sem julgamento, e é isso que ofereço nas sessões: um lugar leve, onde você conduz o que precisa falar, no seu tempo.
                  </p>

                  <p>
                    Meu trabalho é guiado pela Abordagem Centrada na Pessoa, dentro da psicologia fenomenológica humanista. Na prática, isso quer dizer que eu não chego com respostas prontas. Eu caminho ao seu lado enquanto você se entende melhor e encontra o seu próprio jeito de seguir.
                  </p>

                  <p>
                    Atendo online desde 2022, com um cuidado especial no acompanhamento de mulheres e no acolhimento de pessoas LGBTQIAPN+. Aqui, você pode ser exatamente quem você é.
                  </p>
                </div>

                {/* Credenciais como lista simples e organizada */}
                <div 
                  className="relative overflow-hidden rounded-xl p-5 border mt-2"
                  style={{ 
                    backgroundColor: 'var(--color-bg-subtle)',
                    borderColor: 'var(--color-border-subtle)'
                  }}
                >
                  {/* Detalhe botânico sutil correndo na borda superior direita */}
                  <FloralCardBorderVineTop 
                    className="absolute top-1.5 right-2 pointer-events-none" 
                    opacity={0.6} 
                    color="var(--color-gold-accent)" 
                  />

                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap size={18} style={{ color: 'var(--color-primary-forest)' }} />
                    <span 
                      className="text-xs sm:text-sm font-bold tracking-wide uppercase"
                      style={{ color: 'var(--color-primary-forest)' }}
                    >
                      Credenciais & Formação
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: 'var(--color-gold-accent)' }}></span>
                      <span><strong style={{ color: 'var(--color-primary-dark)' }}>Pós-graduação:</strong> Psicologia Clínica pela PUC-RS (em conclusão)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: 'var(--color-gold-accent)' }}></span>
                      <span><strong style={{ color: 'var(--color-primary-dark)' }}>Abordagem:</strong> Centrada na Pessoa (fenomenológica-humanista)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: 'var(--color-gold-accent)' }}></span>
                      <span><strong style={{ color: 'var(--color-primary-dark)' }}>Atendimento:</strong> online pela plataforma Google Meet</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: 'var(--color-gold-accent)' }}></span>
                      <span><strong style={{ color: 'var(--color-primary-dark)' }}>Registro:</strong> CRP 06/214123</span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Divisória Floral Elegante */}
        <FloralSectionDivider color="var(--color-gold-accent)" opacity={0.5} />

        {/* ==========================================================================
            SEÇÃO: COMO FUNCIONA A TERAPIA ONLINE (Passo a passo do atendimento)
            ========================================================================== */}
        <section 
          className="relative overflow-hidden w-full py-16 sm:py-24" 
          id="como-funciona"
          style={{ backgroundColor: 'var(--color-bg-base)' }}
        >
          {/* Detalhe floral sutil no canto inferior esquerdo */}
          <FloralCornerAccent 
            position="bottom-left" 
            size={95} 
            opacity={0.22} 
            color="var(--color-gold-accent)"
            className="absolute bottom-4 left-4 hidden lg:block" 
          />

          <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
            
            {/* Cabeçalho da Seção */}
            <div className="max-w-[680px] mx-auto text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-2">
                <span className="w-5 h-[1.5px]" style={{ backgroundColor: 'var(--color-sage-medium)' }}></span>
                <span 
                  className="text-xs sm:text-sm font-bold tracking-widest uppercase"
                  style={{ color: 'var(--color-sage-dark)' }}
                >
                  Passo a Passo
                </span>
                <span className="w-5 h-[1.5px]" style={{ backgroundColor: 'var(--color-sage-medium)' }}></span>
              </div>

              <h2 
                className="text-3xl sm:text-4xl font-semibold mb-3 tracking-tight"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
              >
                Como funciona a terapia online
              </h2>

              <p 
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Começar é mais simples do que parece. Este é o caminho até a sua primeira sessão:
              </p>
            </div>

            {/* Grade de 4 Passos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 mb-12 sm:mb-16">
              
              {/* Passo 1 */}
              <div 
                className="relative overflow-hidden rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                {/* Ramo botânico no canto superior direito */}
                <FloralCardBranchTopLeft 
                  className="absolute top-1.5 right-1.5 pointer-events-none" 
                  style={{ transform: 'scaleX(-1)' }}
                  size={42} 
                  opacity={0.65} 
                  color="var(--color-gold-accent)" 
                />

                <div 
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg mb-4 flex-shrink-0"
                  style={{ 
                    backgroundColor: 'var(--color-sage-soft)',
                    border: '1px solid var(--color-border-subtle)',
                    color: 'var(--color-primary-forest)',
                    fontFamily: 'var(--font-serif)'
                  }}
                >
                  1
                </div>
                <h3 
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
                >
                  Primeiro contato
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-main)' }}
                >
                  você me chama no WhatsApp e combinamos uma primeira conversa, sem pressa.
                </p>
              </div>

              {/* Passo 2 - Sem enfeite para respiro visual */}
              <div 
                className="rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                <div 
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg mb-4 flex-shrink-0"
                  style={{ 
                    backgroundColor: 'var(--color-sage-soft)',
                    border: '1px solid var(--color-border-subtle)',
                    color: 'var(--color-primary-forest)',
                    fontFamily: 'var(--font-serif)'
                  }}
                >
                  2
                </div>
                <h3 
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
                >
                  Combinamos o horário
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-main)' }}
                >
                  escolhemos juntos o melhor dia e horário para os nossos encontros semanais.
                </p>
              </div>

              {/* Passo 3 */}
              <div 
                className="relative overflow-hidden rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                {/* Florzinha botânica no canto inferior direito */}
                <FloralCardBudBottomRight 
                  className="absolute bottom-2 right-2 pointer-events-none" 
                  size={40} 
                  opacity={0.65} 
                  color="var(--color-gold-accent)" 
                />

                <div 
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg mb-4 flex-shrink-0"
                  style={{ 
                    backgroundColor: 'var(--color-sage-soft)',
                    border: '1px solid var(--color-border-subtle)',
                    color: 'var(--color-primary-forest)',
                    fontFamily: 'var(--font-serif)'
                  }}
                >
                  3
                </div>
                <h3 
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
                >
                  Nos encontramos por vídeo
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-main)' }}
                >
                  as sessões acontecem pelo Google Meet, em um ambiente reservado e sigiloso, de onde você estiver. Cada uma dura cerca de 50 minutos, podendo se estender um pouco conforme a sua necessidade e a disponibilidade do horário.
                </p>
              </div>

              {/* Passo 4 */}
              <div 
                className="relative overflow-hidden rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                {/* Haste botânica sutil no canto inferior esquerdo */}
                <FloralCardStemBottomLeft 
                  className="absolute bottom-1.5 left-1.5 pointer-events-none" 
                  size={36} 
                  opacity={0.65} 
                  color="var(--color-gold-accent)" 
                />

                <div 
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg mb-4 flex-shrink-0"
                  style={{ 
                    backgroundColor: 'var(--color-sage-soft)',
                    border: '1px solid var(--color-border-subtle)',
                    color: 'var(--color-primary-forest)',
                    fontFamily: 'var(--font-serif)'
                  }}
                >
                  4
                </div>
                <h3 
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
                >
                  Seguimos no seu ritmo
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-main)' }}
                >
                  semana a semana, construímos um espaço de cuidado contínuo, respeitando o seu tempo.
                </p>
              </div>

            </div>

            {/* Botão de WhatsApp */}
            <div className="flex flex-col items-center justify-center text-center">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md"
                style={{ 
                  backgroundColor: 'var(--color-primary-dark)',
                  boxShadow: 'var(--shadow-btn)'
                }}
                aria-label="Falar no WhatsApp para iniciar meu processo terapêutico"
              >
                {/* SVG WhatsApp Oficial */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Quero iniciar meu processo</span>
              </a>
            </div>

          </div>
        </section>

        {/* Divisória Floral Elegante */}
        <FloralSectionDivider color="var(--color-gold-accent)" opacity={0.5} />

        {/* ==========================================================================
            SEÇÃO: TALVEZ VOCÊ SE IDENTIFIQUE COM ISSO (Temas / Para quem é)
            ========================================================================== */}
        <section 
          className="w-full py-16 sm:py-24" 
          id="temas"
          style={{ backgroundColor: 'var(--color-bg-subtle)' }}
        >
          <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
            
            {/* Cabeçalho da Seção */}
            <div className="max-w-[720px] mx-auto text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-2">
                <span className="w-5 h-[1.5px]" style={{ backgroundColor: 'var(--color-sage-medium)' }}></span>
                <span 
                  className="text-xs sm:text-sm font-bold tracking-widest uppercase"
                  style={{ color: 'var(--color-sage-dark)' }}
                >
                  Para quem é
                </span>
                <span className="w-5 h-[1.5px]" style={{ backgroundColor: 'var(--color-sage-medium)' }}></span>
              </div>

              <h2 
                className="text-3xl sm:text-4xl font-semibold mb-3 tracking-tight inline-flex items-center justify-center gap-2 flex-wrap"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
              >
                <span>Talvez você se identifique com isso</span>
                <GoldSparkle size={14} className="opacity-75" />
              </h2>

              <p 
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Cada história é única, mas é comum que alguns sentimentos se repitam. Talvez você reconheça aqui um pouco do que tem vivido:
              </p>
            </div>

            {/* Grade de 6 Temas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
              
              {/* Tema 1 */}
              <div 
                className="relative overflow-hidden rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                {/* Folhinhas duplas no canto superior direito */}
                <FloralCardTwinLeaves 
                  className="absolute top-2.5 right-2.5 pointer-events-none" 
                  size={32} 
                  opacity={0.65} 
                  color="var(--color-gold-accent)" 
                />

                <div 
                  className="w-2 h-2 rounded-full mb-3 flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-gold-accent)' }}
                ></div>
                <h3 
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
                >
                  Autocrítica e autocobrança
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  aquela voz interna que raramente te dá descanso.
                </p>
              </div>

              {/* Tema 2 - Sem enfeite para respiro visual */}
              <div 
                className="rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                <div 
                  className="w-2 h-2 rounded-full mb-3 flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-gold-accent)' }}
                ></div>
                <h3 
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
                >
                  Baixa autoestima e inseguranças
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  a sensação de nunca ser o bastante.
                </p>
              </div>

              {/* Tema 3 */}
              <div 
                className="relative overflow-hidden rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                {/* Botão floral delicado no canto inferior direito */}
                <FloralCardBudBottomRight 
                  className="absolute bottom-2 right-2 pointer-events-none" 
                  size={36} 
                  opacity={0.65} 
                  color="var(--color-gold-accent)" 
                />

                <div 
                  className="w-2 h-2 rounded-full mb-3 flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-gold-accent)' }}
                ></div>
                <h3 
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
                >
                  Relacionamentos que machucam
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  vínculos que pesam mais do que acolhem.
                </p>
              </div>

              {/* Tema 4 */}
              <div 
                className="relative overflow-hidden rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                {/* Gavinha sutil correndo na borda superior */}
                <FloralCardBorderVineTop 
                  className="absolute top-1 right-2 pointer-events-none" 
                  opacity={0.6} 
                  color="var(--color-gold-accent)" 
                />

                <div 
                  className="w-2 h-2 rounded-full mb-3 flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-gold-accent)' }}
                ></div>
                <h3 
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
                >
                  Ansiedade e preocupação constante
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  a mente que não desliga.
                </p>
              </div>

              {/* Tema 5 */}
              <div 
                className="relative overflow-hidden rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                {/* Haste botânica sutil no canto inferior esquerdo */}
                <FloralCardStemBottomLeft 
                  className="absolute bottom-1.5 left-1.5 pointer-events-none" 
                  size={36} 
                  opacity={0.65} 
                  color="var(--color-gold-accent)" 
                />

                <div 
                  className="w-2 h-2 rounded-full mb-3 flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-gold-accent)' }}
                ></div>
                <h3 
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
                >
                  Autoconhecimento e autoaceitação
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  a vontade de se entender e se aceitar como você é.
                </p>
              </div>

              {/* Tema 6 - Sem enfeite para respiro visual */}
              <div 
                className="rounded-2xl p-6 sm:p-7 flex flex-col border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                <div 
                  className="w-2 h-2 rounded-full mb-3 flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-gold-accent)' }}
                ></div>
                <h3 
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
                >
                  Fases de transição e recomeços
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  mudanças que trazem dúvidas e inseguranças.
                </p>
              </div>

            </div>

            {/* Fechamento da Seção */}
            <div 
              className="relative max-w-[720px] mx-auto text-center p-6 sm:p-7 rounded-2xl border mb-10 sm:mb-12 overflow-hidden"
              style={{ 
                backgroundColor: 'rgba(231, 215, 236, 0.4)',
                borderColor: 'var(--color-border-subtle)'
              }}
            >
              {/* Detalhes florais variados nos cantos do quadro de acolhimento */}
              <FloralCardSingleBlossom 
                size={38} 
                opacity={0.65} 
                color="var(--color-gold-accent)" 
                className="absolute top-2 right-2 pointer-events-none" 
              />
              <FloralCardStemBottomLeft 
                size={40} 
                opacity={0.65} 
                color="var(--color-gold-accent)" 
                className="absolute bottom-1 left-1 pointer-events-none" 
              />

              <p 
                className="relative z-10 text-sm sm:text-base leading-relaxed font-medium"
                style={{ color: 'var(--color-primary-forest)' }}
              >
                Se você se reconheceu em algum desses pontos, saiba que não precisa lidar com isso só. Aqui, cada um desses temas tem espaço para ser acolhido.
              </p>
            </div>

            {/* Botão de WhatsApp */}
            <div className="flex flex-col items-center justify-center text-center">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md"
                style={{ 
                  backgroundColor: 'var(--color-primary-dark)',
                  boxShadow: 'var(--shadow-btn)'
                }}
                aria-label="Falar no WhatsApp para conversar sobre o que sinto"
              >
                {/* SVG WhatsApp Oficial */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Quero conversar sobre o que sinto</span>
              </a>
            </div>

          </div>
        </section>

        {/* Divisória Floral Elegante */}
        <FloralSectionDivider color="var(--color-gold-accent)" opacity={0.5} />

        {/* ==========================================================================
            SEÇÃO: PERGUNTAS FREQUENTES (FAQ)
            ========================================================================== */}
        <section 
          className="w-full py-16 sm:py-24" 
          id="faq"
          style={{ backgroundColor: 'var(--color-bg-base)' }}
        >
          <div className="max-w-[860px] mx-auto px-5 sm:px-8">
            
            {/* Cabeçalho da Seção */}
            <div className="text-center mb-10 sm:mb-14">
              <div className="inline-flex items-center justify-center gap-2 mb-2">
                <span className="w-5 h-[1.5px]" style={{ backgroundColor: 'var(--color-sage-medium)' }}></span>
                <span 
                  className="text-xs sm:text-sm font-bold tracking-widest uppercase"
                  style={{ color: 'var(--color-sage-dark)' }}
                >
                  Dúvidas Comuns
                </span>
                <span className="w-5 h-[1.5px]" style={{ backgroundColor: 'var(--color-sage-medium)' }}></span>
              </div>

              <h2 
                className="text-3xl sm:text-4xl font-semibold tracking-tight"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
              >
                Perguntas frequentes
              </h2>
            </div>

            {/* Lista de Perguntas (Acordeão) */}
            <div className="flex flex-col gap-3.5">
              
              {/* Pergunta 1 */}
              <details 
                className="group relative overflow-hidden rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors" style={{ color: 'var(--color-primary-dark)' }}>
                  <span>A terapia online funciona mesmo?</span>
                  <div className="flex items-center gap-2.5 flex-shrink-0">
                    <FloralCardTwinLeaves 
                      className="pointer-events-none" 
                      size={22} 
                      opacity={0.65} 
                      color="var(--color-gold-accent)" 
                    />
                    <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ color: 'var(--color-sage-dark)' }} />
                  </div>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  Sim. A terapia online segue os mesmos princípios e o mesmo cuidado do atendimento presencial. O que muda é o formato: nos encontramos por vídeo, com a mesma escuta, a mesma atenção e o mesmo sigilo.
                </div>
              </details>

              {/* Pergunta 2 - Sem enfeite para respiro visual */}
              <details 
                className="group rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors" style={{ color: 'var(--color-primary-dark)' }}>
                  <span>Como funciona o sigilo?</span>
                  <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ color: 'var(--color-sage-dark)' }} />
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  Tudo o que você compartilha nas sessões é confidencial e protegido pelo Código de Ética da Psicologia. É um espaço seguro, só seu.
                </div>
              </details>

              {/* Pergunta 3 - Sem enfeite para respiro visual */}
              <details 
                className="group rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors" style={{ color: 'var(--color-primary-dark)' }}>
                  <span>Do que eu preciso para participar?</span>
                  <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ color: 'var(--color-sage-dark)' }} />
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  Um aparelho com câmera e internet, e um lugar reservado onde você se sinta à vontade para conversar. As sessões acontecem pelo Google Meet.
                </div>
              </details>

              {/* Pergunta 4 */}
              <details 
                className="group relative overflow-hidden rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors" style={{ color: 'var(--color-primary-dark)' }}>
                  <span>Com que frequência são as sessões?</span>
                  <div className="flex items-center gap-2.5 flex-shrink-0">
                    <FloralCardSingleBlossom 
                      className="pointer-events-none" 
                      size={22} 
                      opacity={0.65} 
                      color="var(--color-gold-accent)" 
                    />
                    <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ color: 'var(--color-sage-dark)' }} />
                  </div>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  Em geral, os encontros são semanais, com dia e horário combinados entre nós. Isso pode ser ajustado conforme a sua necessidade.
                </div>
              </details>

              {/* Pergunta 5 - Sem enfeite para respiro visual */}
              <details 
                className="group rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors" style={{ color: 'var(--color-primary-dark)' }}>
                  <span>Quanto tempo dura cada sessão?</span>
                  <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ color: 'var(--color-sage-dark)' }} />
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  Cada sessão dura cerca de 50 minutos, podendo se estender um pouco conforme a sua necessidade e a disponibilidade do horário.
                </div>
              </details>

              {/* Pergunta 6 */}
              <details 
                className="group relative overflow-hidden rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors" style={{ color: 'var(--color-primary-dark)' }}>
                  <span>Qual é o valor da sessão?</span>
                  <div className="flex items-center gap-2.5 flex-shrink-0">
                    <FloralCardStemBottomLeft 
                      className="pointer-events-none" 
                      size={24} 
                      opacity={0.65} 
                      color="var(--color-gold-accent)" 
                    />
                    <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ color: 'var(--color-sage-dark)' }} />
                  </div>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  Os valores são informados na nossa primeira conversa, pelo WhatsApp, para que eu possa te explicar tudo com calma.
                </div>
              </details>

              {/* Pergunta 7 - Sem enfeite para respiro visual */}
              <details 
                className="group rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors" style={{ color: 'var(--color-primary-dark)' }}>
                  <span>Você emite recibo para reembolso?</span>
                  <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ color: 'var(--color-sage-dark)' }} />
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  Sim. Emito recibo das sessões, que você pode usar para pedir reembolso ao seu plano de saúde, caso ele ofereça esse benefício.
                </div>
              </details>

              {/* Pergunta 8 */}
              <details 
                className="group relative overflow-hidden rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors" style={{ color: 'var(--color-primary-dark)' }}>
                  <span>Como faço para começar?</span>
                  <div className="flex items-center gap-2.5 flex-shrink-0">
                    <FloralCardBudBottomRight 
                      className="pointer-events-none" 
                      size={24} 
                      opacity={0.65} 
                      color="var(--color-gold-accent)" 
                    />
                    <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ color: 'var(--color-sage-dark)' }} />
                  </div>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  É só me chamar no WhatsApp. A partir daí, combinamos a sua primeira conversa.
                </div>
              </details>

            </div>

          </div>
        </section>

        {/* Divisória Floral Elegante */}
        <FloralSectionDivider color="var(--color-gold-accent)" opacity={0.5} />

        {/* ==========================================================================
            SEÇÃO: CHAMADA FINAL (CTA)
            ========================================================================== */}
        <section 
          className="relative overflow-hidden w-full py-16 sm:py-24 text-center border-t" 
          id="contato"
          style={{ 
            backgroundColor: 'var(--color-bg-subtle)',
            borderColor: 'var(--color-border-subtle)'
          }}
        >
          {/* Detalhes florais discretos nos cantos da chamada final */}
          <FloralCornerAccent 
            position="top-left" 
            size={105} 
            opacity={0.22} 
            color="var(--color-gold-accent)"
            className="absolute top-2 left-2 hidden sm:block" 
          />
          <FloralCornerAccent 
            position="top-right" 
            size={105} 
            opacity={0.22} 
            color="var(--color-gold-accent)"
            className="absolute top-2 right-2 hidden sm:block" 
          />

          <div className="relative z-10 max-w-[760px] mx-auto px-5 sm:px-8 flex flex-col items-center">
            <h2 
              className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 inline-flex items-center justify-center gap-2.5 flex-wrap"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
            >
              <span>Quando você quiser começar, estarei por aqui.</span>
              <GoldSparkle size={15} className="opacity-80" />
            </h2>
            <p 
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-[620px]"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Dar o primeiro passo já é um cuidado com você. Vamos conversar e ver, sem pressa, se faz sentido começarmos.
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md"
              style={{ 
                backgroundColor: 'var(--color-primary-dark)',
                boxShadow: 'var(--shadow-btn)'
              }}
              id="btn-cta-final-whatsapp-react"
              aria-label="Falar no WhatsApp para conversar sem pressa com a psicóloga"
            >
              {/* SVG WhatsApp Oficial */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Vamos conversar sem pressa</span>
            </a>
          </div>
        </section>

      </main>

      {/* ==========================================================================
          RODAPÉ / FOOTER
          ========================================================================== */}
      <footer 
        className="w-full pt-12 pb-8 border-t"
        style={{ 
          borderColor: 'var(--color-border-subtle)',
          backgroundColor: 'var(--color-bg-base)'
        }}
      >
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8 flex flex-col gap-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-lg" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}>
                Psicóloga Isabele Costa · CRP 06/214123
              </span>
              <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                Atendimento psicológico online para todo o Brasil
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm">
              <div style={{ color: 'var(--color-text-muted)' }}>
                WhatsApp:{' '}
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                  style={{ color: 'var(--color-primary-forest)' }}
                >
                  (12) 99171-5684
                </a>
              </div>
              <div style={{ color: 'var(--color-text-muted)' }}>
                E-mail:{' '}
                <a 
                  href="mailto:psiisabelecosta@gmail.com"
                  className="font-medium hover:underline"
                  style={{ color: 'var(--color-primary-forest)' }}
                >
                  psiisabelecosta@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div 
            className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
            style={{ 
              borderColor: 'var(--color-border-subtle)',
              color: 'var(--color-text-muted)' 
            }}
          >
            <div className="flex items-center gap-3">
              <span>© 2026 Isabele Costa</span>
              <span>·</span>
              <a href="#privacidade" className="underline hover:text-gray-900 transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* ==========================================================================
          BOTÃO FLUTUANTE DO WHATSAPP (Fixo no canto inferior direito)
          ========================================================================== */}
      <a
        id="btn-whatsapp-floating"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 group flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          backgroundColor: '#25D366',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45), 0 2px 8px rgba(0, 0, 0, 0.12)'
        }}
        aria-label="Falar com a Psicóloga Isabele Costa no WhatsApp"
      >
        {/* Efeito de Pulso */}
        <span 
          className="absolute inset-0 rounded-full animate-ping opacity-35 pointer-events-none"
          style={{ backgroundColor: '#25D366', animationDuration: '2.5s' }}
          aria-hidden="true"
        />
        
        {/* Tooltip no Hover */}
        <span 
          className="absolute right-[calc(100%+12px)] opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none whitespace-nowrap text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full text-white shadow-md"
          style={{ backgroundColor: 'var(--color-primary-dark)' }}
        >
          Falar no WhatsApp
        </span>

        {/* Ícone Oficial WhatsApp */}
        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}


import React from 'react';

interface FloralProps {
  className?: string;
  color?: string;
  opacity?: number;
  style?: React.CSSProperties;
}

/**
 * Grande grafismo floral em linha contínua para o fundo do Hero.
 * Traço fino, botânico, orgânico e elegante, desenhado para baixa opacidade.
 */
export function HeroFloralBackground({
  className = '',
  color = 'var(--color-gold-accent)',
  opacity = 0.14,
  style = {}
}: FloralProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      style={{ opacity, ...style }}
      aria-hidden="true"
    >
      {/* Ramo Floral da Esquerda */}
      <svg
        className="absolute -left-12 sm:left-4 top-12 sm:top-8 w-[280px] sm:w-[380px] lg:w-[460px] h-auto max-h-[90%]"
        viewBox="0 0 320 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 450 C 40 380, 75 320, 95 240 C 110 180, 100 120, 130 60 C 145 30, 175 15, 195 25 C 215 35, 205 70, 185 85 C 160 100, 140 85, 145 65"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Pétalas e Flores Superiores */}
        <path
          d="M175 35 C 180 15, 205 10, 220 25 C 235 40, 220 65, 195 65"
          stroke={color}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M195 25 C 215 15, 240 25, 245 45 C 250 65, 225 80, 205 75"
          stroke={color}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        {/* Folha 1 - Superior Direita */}
        <path
          d="M125 150 C 150 140, 185 145, 210 165 C 180 180, 145 175, 120 160 Z"
          stroke={color}
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M125 152 C 155 156, 185 162, 208 165"
          stroke={color}
          strokeWidth="0.8"
          strokeDasharray="2 3"
        />
        {/* Folha 2 - Esquerda Média */}
        <path
          d="M100 220 C 70 200, 35 205, 15 225 C 40 245, 80 240, 98 226 Z"
          stroke={color}
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M98 223 C 65 221, 35 223, 17 225"
          stroke={color}
          strokeWidth="0.8"
          strokeDasharray="2 3"
        />
        {/* Ramo Secundário com Botão Floral */}
        <path
          d="M92 260 C 130 255, 165 270, 190 295 C 170 305, 145 300, 88 275"
          stroke={color}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M190 295 C 205 290, 220 300, 222 315 C 220 330, 200 335, 185 325 C 175 315, 180 300, 190 295 Z"
          stroke={color}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        {/* Folha 3 - Inferior */}
        <path
          d="M60 360 C 85 345, 120 350, 140 370 C 115 385, 80 380, 56 368 Z"
          stroke={color}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        {/* Pequenos Zarcilhos / Curvas fluidas */}
        <path
          d="M130 95 C 150 90, 170 100, 168 115 C 165 125, 150 125, 145 118"
          stroke={color}
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>

      {/* Ramo Floral da Direita */}
      <svg
        className="absolute -right-12 sm:right-4 top-16 sm:top-12 w-[280px] sm:w-[380px] lg:w-[460px] h-auto max-h-[90%]"
        viewBox="0 0 320 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'scaleX(-1)' }}
      >
        <path
          d="M20 450 C 35 370, 70 310, 95 230 C 115 170, 105 110, 135 55 C 150 25, 180 15, 200 25 C 220 38, 210 75, 185 88 C 160 100, 142 85, 146 65"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Flor delicada em linha contínua no topo */}
        <path
          d="M185 30 C 195 10, 220 8, 235 25 C 245 42, 230 65, 205 65"
          stroke={color}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M200 25 C 225 15, 250 28, 252 50 C 250 70, 225 82, 210 75"
          stroke={color}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        {/* Folha Superior */}
        <path
          d="M120 145 C 145 130, 180 135, 205 155 C 175 170, 140 165, 118 152 Z"
          stroke={color}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        {/* Folha Média */}
        <path
          d="M95 220 C 65 200, 30 205, 12 225 C 38 242, 75 238, 92 226 Z"
          stroke={color}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        {/* Ramo Secundário */}
        <path
          d="M85 270 C 120 265, 155 280, 180 305 C 160 315, 135 310, 82 285"
          stroke={color}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M180 305 C 195 300, 210 310, 212 322 C 210 335, 192 340, 178 332 C 170 322, 172 310, 180 305 Z"
          stroke={color}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        {/* Folha Inferior */}
        <path
          d="M55 350 C 80 335, 115 340, 135 360 C 110 375, 75 370, 52 358 Z"
          stroke={color}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/**
 * Detalhe floral de canto discreto (ramo botânico com folhas finas e botão floral).
 * Perfeito para cantos de seções e cartões decorativos.
 */
export function FloralCornerAccent({
  className = '',
  color = 'var(--color-gold-accent)',
  opacity = 0.35,
  position = 'top-right',
  size = 96,
  style = {}
}: FloralProps & {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number;
}) {
  const rotationMap = {
    'top-right': '',
    'top-left': 'scaleX(-1)',
    'bottom-right': 'scaleY(-1)',
    'bottom-left': 'scale(-1, -1)'
  };

  const transformStyle = rotationMap[position];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{
        opacity,
        transform: transformStyle,
        ...style
      }}
      aria-hidden="true"
    >
      {/* Caule Principal Curvo */}
      <path
        d="M95 5 C 80 25, 60 45, 35 60 C 20 70, 10 82, 5 95"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Botão Floral no Canto */}
      <path
        d="M95 5 C 92 12, 85 14, 80 10 C 76 6, 82 2, 90 2 C 94 2, 96 4, 95 5 Z"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Folha 1 */}
      <path
        d="M75 22 C 65 14, 52 18, 48 26 C 58 28, 70 26, 75 22 Z"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Folha 2 */}
      <path
        d="M58 40 C 45 42, 38 52, 40 60 C 48 56, 55 48, 58 40 Z"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Folha 3 */}
      <path
        d="M38 58 C 26 55, 18 64, 18 72 C 28 70, 34 64, 38 58 Z"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Pequeno Zarcilho Curvo */}
      <path
        d="M78 20 C 82 28, 88 32, 92 30 C 95 28, 94 24, 90 24"
        stroke={color}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Divisória elegante entre seções com ramo central floral contínuo.
 * Traz transição suave com traço fino em dourado ou tom escuro da marca.
 */
export function FloralSectionDivider({
  className = '',
  color = 'var(--color-gold-accent)',
  opacity = 0.55,
  style = {}
}: FloralProps) {
  return (
    <div
      className={`w-full flex items-center justify-center my-6 sm:my-8 pointer-events-none select-none ${className}`}
      style={{ opacity, ...style }}
      aria-hidden="true"
    >
      <div className="w-full max-w-[480px] sm:max-w-[620px] px-4 flex items-center">
        {/* Linha da Esquerda com fade */}
        <div 
          className="flex-1 h-[1px]" 
          style={{ 
            background: `linear-gradient(to right, transparent, ${color})` 
          }} 
        />

        {/* Motivo Floral Central (Flor de lótus / folhas finas contínuas) */}
        <svg
          className="w-16 sm:w-20 h-7 mx-2 flex-shrink-0"
          viewBox="0 0 80 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Haste Contínua Horizontal */}
          <path
            d="M0 14 C 12 14, 20 15, 26 14"
            stroke={color}
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M54 14 C 60 15, 68 14, 80 14"
            stroke={color}
            strokeWidth="1"
            strokeLinecap="round"
          />
          {/* Pétala Central (Cálice) */}
          <path
            d="M40 4 C 36 10, 36 16, 40 22 C 44 16, 44 10, 40 4 Z"
            stroke={color}
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          {/* Pétala Esquerda */}
          <path
            d="M40 22 C 32 20, 27 15, 29 9 C 33 11, 37 16, 40 22 Z"
            stroke={color}
            strokeWidth="1"
            strokeLinecap="round"
          />
          {/* Pétala Direita */}
          <path
            d="M40 22 C 48 20, 53 15, 51 9 C 47 11, 43 16, 40 22 Z"
            stroke={color}
            strokeWidth="1"
            strokeLinecap="round"
          />
          {/* Ponto Central Sutil */}
          <circle cx="40" cy="14" r="1.2" fill={color} />
        </svg>

        {/* Linha da Direita com fade */}
        <div 
          className="flex-1 h-[1px]" 
          style={{ 
            background: `linear-gradient(to left, transparent, ${color})` 
          }} 
        />
      </div>
    </div>
  );
}

/**
 * Brilho dourado minúsculo e discreto (estrela de 4 pontas suave).
 * Para posicionar com moderação próximo a títulos e badges especiais.
 */
export function GoldSparkle({
  className = '',
  color = 'var(--color-gold-accent)',
  size = 14,
  opacity = 0.85,
  style = {}
}: FloralProps & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block pointer-events-none select-none flex-shrink-0 ${className}`}
      style={{ opacity, ...style }}
      aria-hidden="true"
    >
      <path d="M12 0 C12 6.5, 17.5 12, 24 12 C17.5 12, 12 17.5, 12 24 C12 17.5, 6.5 12, 0 12 C6.5 12, 12 6.5, 12 0 Z" />
    </svg>
  );
}

/**
 * Ramo botânico artesanal para canto superior de cards.
 * Curva fluida com folhas alongadas e traço fino contínuo.
 */
export function FloralCardBranchTopLeft({
  className = '',
  color = 'var(--color-gold-accent)',
  opacity = 0.32,
  size = 52,
  style = {}
}: FloralProps & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, ...style }}
      aria-hidden="true"
    >
      {/* Haste Principal Arqueada */}
      <path
        d="M2 6 C 14 12, 28 20, 36 34 C 42 44, 46 54, 48 58"
        stroke={color}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {/* Folha 1 - Superior */}
      <path
        d="M12 11 C 18 6, 26 8, 30 14 C 24 16, 17 14, 12 11 Z"
        stroke={color}
        strokeWidth="1.0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Folha 2 - Lateral */}
      <path
        d="M25 18 C 34 16, 40 22, 42 29 C 34 29, 28 24, 25 18 Z"
        stroke={color}
        strokeWidth="1.0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Folha 3 - Inferior */}
      <path
        d="M34 32 C 30 38, 24 42, 18 40 C 20 34, 28 32, 34 32 Z"
        stroke={color}
        strokeWidth="0.95"
        strokeLinecap="round"
      />
      {/* Pequena ponta de botão floral */}
      <path
        d="M2 6 C 5 2, 9 4, 8 7 C 7 9, 3 8, 2 6 Z"
        stroke={color}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Florzinha botânica estilizada com haste e duas folhas delicadas.
 * Ideal para cantos inferiores de cards e molduras.
 */
export function FloralCardBudBottomRight({
  className = '',
  color = 'var(--color-gold-accent)',
  opacity = 0.35,
  size = 48,
  style = {}
}: FloralProps & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, ...style }}
      aria-hidden="true"
    >
      {/* Haste ascendente curva */}
      <path
        d="M48 50 C 42 38, 32 28, 26 18"
        stroke={color}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {/* Folha direita */}
      <path
        d="M40 40 C 47 38, 52 42, 50 48 C 44 48, 40 44, 40 40 Z"
        stroke={color}
        strokeWidth="0.95"
        strokeLinecap="round"
      />
      {/* Folha esquerda */}
      <path
        d="M33 30 C 25 30, 20 24, 22 18 C 28 20, 31 25, 33 30 Z"
        stroke={color}
        strokeWidth="0.95"
        strokeLinecap="round"
      />
      {/* Botão floral no ápice */}
      <path
        d="M26 18 C 24 12, 17 10, 16 16 C 16 22, 23 21, 26 18 Z"
        stroke={color}
        strokeWidth="1.0"
        strokeLinecap="round"
      />
      <path
        d="M22 14 C 20 8, 25 5, 29 8 C 32 11, 29 16, 26 18"
        stroke={color}
        strokeWidth="1.0"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Raminho que corre sutilmente pela borda superior ou inferior do card.
 * Proporciona variação longitudinal orgânica.
 */
export function FloralCardBorderVineTop({
  className = '',
  color = 'var(--color-gold-accent)',
  opacity = 0.3,
  style = {}
}: FloralProps) {
  return (
    <svg
      width="96"
      height="24"
      viewBox="0 0 96 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, ...style }}
      aria-hidden="true"
    >
      {/* Linha da gavinha */}
      <path
        d="M2 18 C 20 8, 42 16, 64 8 C 76 4, 88 10, 94 6"
        stroke={color}
        strokeWidth="1.0"
        strokeLinecap="round"
      />
      {/* Folha 1 */}
      <path
        d="M24 13 C 28 8, 36 9, 38 14 C 33 16, 27 15, 24 13 Z"
        stroke={color}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      {/* Folha 2 */}
      <path
        d="M52 14 C 54 19, 62 20, 65 15 C 60 13, 55 13, 52 14 Z"
        stroke={color}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      {/* Folha 3 pequena */}
      <path
        d="M74 6 C 78 2, 84 3, 85 7 C 80 8, 76 7, 74 6 Z"
        stroke={color}
        strokeWidth="0.85"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Haste botânica sutil que sobe a partir do canto inferior esquerdo.
 */
export function FloralCardStemBottomLeft({
  className = '',
  color = 'var(--color-gold-accent)',
  opacity = 0.32,
  size = 46,
  style = {}
}: FloralProps & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, ...style }}
      aria-hidden="true"
    >
      <path
        d="M4 48 C 8 36, 16 26, 26 16 C 32 10, 40 6, 46 4"
        stroke={color}
        strokeWidth="1.05"
        strokeLinecap="round"
      />
      {/* Folha lateral interna */}
      <path
        d="M14 34 C 18 28, 26 30, 27 36 C 21 38, 16 37, 14 34 Z"
        stroke={color}
        strokeWidth="0.95"
        strokeLinecap="round"
      />
      {/* Folha lateral externa */}
      <path
        d="M24 20 C 22 14, 14 14, 12 20 C 17 22, 22 22, 24 20 Z"
        stroke={color}
        strokeWidth="0.95"
        strokeLinecap="round"
      />
      {/* Botão final delicado */}
      <path
        d="M42 6 C 44 2, 49 3, 48 7 C 46 9, 43 8, 42 6 Z"
        stroke={color}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Flor aberta em linha contínua ultra-delicada.
 */
export function FloralCardSingleBlossom({
  className = '',
  color = 'var(--color-gold-accent)',
  opacity = 0.32,
  size = 36,
  style = {}
}: FloralProps & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, ...style }}
      aria-hidden="true"
    >
      {/* Pétalas em espiral/contorno contínuo */}
      <path
        d="M20 14 C 17 8, 11 10, 11 16 C 11 21, 16 22, 20 25 C 24 22, 29 21, 29 16 C 29 10, 23 8, 20 14 Z"
        stroke={color}
        strokeWidth="1.0"
        strokeLinecap="round"
      />
      <path
        d="M13 18 C 7 19, 8 26, 14 28 C 17 28, 19 25, 20 25"
        stroke={color}
        strokeWidth="0.95"
        strokeLinecap="round"
      />
      <path
        d="M27 18 C 33 19, 32 26, 26 28 C 23 28, 21 25, 20 25"
        stroke={color}
        strokeWidth="0.95"
        strokeLinecap="round"
      />
      <path
        d="M20 25 C 20 31, 22 36, 25 38"
        stroke={color}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      {/* Pequena folha de apoio */}
      <path
        d="M21 29 C 26 29, 30 33, 29 36 C 24 35, 22 32, 21 29 Z"
        stroke={color}
        strokeWidth="0.85"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Dupla de pequenas folhas com nervura central sutil.
 * Ideal para bordas de itens de FAQ e cartões compactos.
 */
export function FloralCardTwinLeaves({
  className = '',
  color = 'var(--color-gold-accent)',
  opacity = 0.3,
  size = 28,
  style = {}
}: FloralProps & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, ...style }}
      aria-hidden="true"
    >
      {/* Haste minúscula */}
      <path
        d="M4 28 C 12 24, 18 18, 24 8"
        stroke={color}
        strokeWidth="0.95"
        strokeLinecap="round"
      />
      {/* Folha 1 */}
      <path
        d="M14 20 C 13 14, 18 11, 23 11 C 21 16, 17 19, 14 20 Z"
        stroke={color}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      {/* Folha 2 */}
      <path
        d="M17 16 C 23 15, 28 18, 29 23 C 24 23, 19 20, 17 16 Z"
        stroke={color}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

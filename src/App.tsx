import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  CalendarCheck, 
  Lock, 
  Copy, 
  Check, 
  Code, 
  HeartHandshake,
  GraduationCap,
  UserCheck,
  MessageCircle,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);

  const whatsappUrl = "https://wa.me/5512991715684?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20primeira%20conversa.";

  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Psicóloga Isabele Costa | Terapia Online · Mulheres & LGBTQIAPN+</title>
  <meta name="description" content="Atendimento psicológico online com a Psicóloga Isabele Costa (CRP 06/214123). Espaço seguro e acolhedor com foco no público feminino e LGBTQIAPN+.">

  <!-- Google Fonts: Fraunces & Mulish -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Mulish:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">

  <style>
    /* ==========================================================================
       VARIÁVEIS CSS MODULARES (Roxo Escuro & Rosa Claro Acolhedor)
       ========================================================================== */
    :root {
      /* Roxo escuro: profundidade, escuta e elegância */
      --color-primary-dark: #2b1539;
      --color-primary-forest: #3c1e4f;
      --color-primary-hover: #1e0d29;
      
      /* Tons de rosa claro e blush suave */
      --color-sage-dark: #6e3d5c;
      --color-sage-medium: #a86c8f;
      --color-sage-light: #f2d8e4;
      --color-sage-soft: #fbf0f5;
      --color-sage-tint: #fcf5f8;
      
      /* Off-white e rosa suave para fundos */
      --color-bg-base: #fdfbfc;
      --color-bg-card: #ffffff;
      --color-bg-subtle: #f8edf3;
      
      /* Rosa acentuado e detalhes */
      --color-gold-accent: #b05c7c;
      --color-gold-hover: #964866;
      --color-gold-light: #fdf2f6;
      --color-gold-border: #f0cddb;
      
      /* Textos e contrastes (Acessibilidade WCAG AA) */
      --color-text-main: #24142d;
      --color-text-muted: #65516b;
      --color-text-light: #ffffff;
      --color-text-quote: #341842;
      
      /* Bordas */
      --color-border-subtle: #eedce6;
      --color-border-medium: #dfc2d3;
      
      /* Tipografia */
      --font-serif: 'Fraunces', Georgia, serif;
      --font-sans: 'Mulish', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      
      /* Espaçamentos modulares */
      --space-2xs: 0.25rem;  /* 4px */
      --space-xs: 0.5rem;    /* 8px */
      --space-sm: 0.75rem;   /* 12px */
      --space-md: 1rem;      /* 16px */
      --space-lg: 1.5rem;    /* 24px */
      --space-xl: 2rem;      /* 32px */
      --space-2xl: 3rem;     /* 48px */
      --space-3xl: 4.5rem;   /* 72px */
      --space-4xl: 6rem;     /* 96px */
      
      /* Layout & Raio */
      --container-max-w: 1160px;
      --radius-sm: 8px;
      --radius-md: 14px;
      --radius-lg: 22px;
      --radius-xl: 32px;
      --radius-pill: 9999px;
      
      /* Sombras */
      --shadow-subtle: 0 4px 20px -4px rgba(27, 56, 43, 0.04);
      --shadow-card: 0 12px 36px -8px rgba(27, 56, 43, 0.08);
      --shadow-btn: 0 4px 14px rgba(27, 56, 43, 0.16);
      --shadow-btn-hover: 0 6px 22px rgba(27, 56, 43, 0.24);
      
      /* Transição */
      --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      font-family: var(--font-sans);
      background-color: var(--color-bg-base);
      color: var(--color-text-main);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      scroll-behavior: smooth;
    }

    body {
      min-height: 100vh;
      background-color: var(--color-bg-base);
    }

    :focus-visible {
      outline: 2px solid var(--color-primary-dark);
      outline-offset: 3px;
      border-radius: var(--radius-sm);
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }

    .container {
      width: 100%;
      max-width: var(--container-max-w);
      margin-left: auto;
      margin-right: auto;
      padding-left: var(--space-lg);
      padding-right: var(--space-lg);
    }

    /* HEADER */
    .site-header {
      padding-top: var(--space-lg);
      padding-bottom: var(--space-md);
      border-bottom: 1px solid var(--color-border-subtle);
      background-color: rgba(249, 248, 245, 0.85);
      backdrop-filter: blur(8px);
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .header-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--space-sm);
    }

    .brand {
      display: flex;
      flex-direction: column;
    }

    .brand-name {
      font-family: var(--font-serif);
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--color-primary-dark);
      letter-spacing: -0.01em;
    }

    .brand-crp {
      font-size: 0.8rem;
      color: var(--color-text-muted);
      font-weight: 500;
    }

    .badge-online {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background-color: var(--color-sage-soft);
      color: var(--color-primary-forest);
      padding: 0.35rem 0.85rem;
      border-radius: var(--radius-pill);
      font-size: 0.8125rem;
      font-weight: 600;
      border: 1px solid var(--color-sage-light);
    }

    .status-dot {
      width: 7px;
      height: 7px;
      background-color: var(--color-sage-dark);
      border-radius: 50%;
      display: inline-block;
    }

    /* HERO SECTION */
    .hero-section {
      padding-top: var(--space-2xl);
      padding-bottom: var(--space-3xl);
      position: relative;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-2xl);
      align-items: center;
    }

    @media (min-width: 900px) {
      .hero-grid {
        grid-template-columns: 1.15fr 0.85fr;
        gap: var(--space-3xl);
      }
      .hero-section {
        padding-top: var(--space-3xl);
        padding-bottom: var(--space-4xl);
      }
    }

    /* Conteúdo Textual */
    .hero-content {
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
    }

    .hero-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--color-sage-dark);
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }

    .hero-eyebrow-line {
      width: 24px;
      height: 1px;
      background-color: var(--color-sage-medium);
    }

    .hero-title {
      font-family: var(--font-serif);
      font-size: clamp(2rem, 4.5vw, 3.25rem);
      font-weight: 500;
      line-height: 1.2;
      color: var(--color-primary-dark);
      letter-spacing: -0.02em;
    }

    .hero-subtitle {
      font-size: 1.125rem;
      line-height: 1.65;
      color: var(--color-text-muted);
      max-width: 58ch;
      font-weight: 400;
    }

    /* Citação de Carl Rogers */
    .quote-box {
      background-color: var(--color-sage-soft);
      border-left: 3px solid var(--color-gold-accent);
      border-radius: 0 var(--radius-md) var(--radius-md) 0;
      padding: var(--space-md) var(--space-lg);
      margin-top: var(--space-xs);
      margin-bottom: var(--space-xs);
    }

    .quote-text {
      font-family: var(--font-serif);
      font-style: italic;
      font-size: 1.05rem;
      color: var(--color-text-quote);
      line-height: 1.5;
      margin-bottom: var(--space-2xs);
    }

    .quote-author {
      font-family: var(--font-sans);
      font-style: normal;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-sage-dark);
      display: block;
    }

    /* CTA Único */
    .hero-actions {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-md);
      margin-top: var(--space-xs);
    }

    .btn-whatsapp {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      background-color: var(--color-primary-dark);
      color: var(--color-text-light);
      text-decoration: none;
      font-size: 1.05rem;
      font-weight: 600;
      padding: 0.95rem 1.9rem;
      border-radius: var(--radius-pill);
      box-shadow: var(--shadow-btn);
      transition: all var(--transition-normal);
      border: 1px solid var(--color-primary-forest);
      width: 100%;
      max-width: 320px;
    }

    .btn-whatsapp:hover {
      background-color: var(--color-primary-hover);
      box-shadow: var(--shadow-btn-hover);
      transform: translateY(-2px);
    }

    .btn-whatsapp:active {
      transform: translateY(0);
    }

    .btn-icon-whatsapp {
      width: 22px;
      height: 22px;
      fill: currentColor;
    }

    /* Sinais de Confiança */
    .trust-indicators {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--space-md);
      font-size: 0.875rem;
      color: var(--color-text-muted);
      padding-top: var(--space-xs);
      border-top: 1px solid var(--color-border-subtle);
      width: 100%;
    }

    .trust-item {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-weight: 500;
    }

    .trust-icon {
      color: var(--color-gold-accent);
      flex-shrink: 0;
    }

    .trust-divider {
      color: var(--color-border-medium);
    }

    /* COLUNA DA FOTO / PLACEHOLDER DA PSICÓLOGA */
    .hero-media {
      display: flex;
      justify-content: center;
      position: relative;
    }

    .photo-card-wrapper {
      position: relative;
      width: 100%;
      max-width: 390px;
    }

    .photo-backdrop {
      position: absolute;
      inset: -10px;
      background: linear-gradient(135deg, var(--color-sage-light), var(--color-sage-soft));
      border-radius: var(--radius-xl);
      transform: rotate(-1.5deg);
      z-index: 1;
    }

    .photo-card {
      position: relative;
      background-color: var(--color-bg-card);
      border-radius: var(--radius-lg);
      padding: var(--space-sm);
      box-shadow: var(--shadow-card);
      border: 1px solid var(--color-border-subtle);
      z-index: 2;
      overflow: hidden;
    }

    .photo-placeholder {
      width: 100%;
      height: 420px;
      border-radius: calc(var(--radius-lg) - var(--space-sm));
      background-color: var(--color-sage-soft);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .photo-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      border-radius: inherit;
    }

    .photo-overlay-card {
      position: absolute;
      bottom: var(--space-md);
      left: var(--space-md);
      right: var(--space-md);
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
      padding: var(--space-sm) var(--space-md);
      border-radius: var(--radius-md);
      border: 1px solid var(--color-border-subtle);
      box-shadow: var(--shadow-subtle);
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .photo-badge-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: var(--color-gold-light);
      border: 1px solid var(--color-gold-border);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-gold-accent);
      flex-shrink: 0;
    }

    .photo-badge-title {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--color-primary-dark);
      line-height: 1.2;
    }

    .photo-badge-desc {
      font-size: 0.75rem;
      color: var(--color-text-muted);
      line-height: 1.3;
    }

    /* ==========================================================================
       SEÇÃO: SOBRE A ISABELE
       ========================================================================== */
    .about-section {
      padding: var(--space-3xl) var(--space-lg);
      background-color: var(--color-bg-card);
      border-top: 1px solid var(--color-border-subtle);
      border-bottom: 1px solid var(--color-border-subtle);
    }

    @media (min-width: 768px) {
      .about-section {
        padding: var(--space-4xl) var(--space-lg);
      }
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-2xl);
      align-items: center;
    }

    @media (min-width: 900px) {
      .about-grid {
        grid-template-columns: 5fr 7fr;
        gap: var(--space-3xl);
      }
    }

    .about-media {
      display: flex;
      justify-content: center;
      position: relative;
    }

    .about-photo-wrapper {
      position: relative;
      width: 100%;
      max-width: 360px;
    }

    .about-photo-backdrop {
      position: absolute;
      inset: -10px;
      background: linear-gradient(135deg, var(--color-sage-soft), var(--color-sage-light));
      border-radius: var(--radius-xl);
      transform: rotate(1.5deg);
      z-index: 1;
    }

    .about-photo-card {
      position: relative;
      background-color: var(--color-bg-card);
      border-radius: var(--radius-lg);
      padding: var(--space-sm);
      box-shadow: var(--shadow-card);
      border: 1px solid var(--color-border-subtle);
      z-index: 2;
    }

    .about-photo-placeholder {
      width: 100%;
      height: 390px;
      border-radius: calc(var(--radius-lg) - var(--space-sm));
      background-color: var(--color-sage-soft);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .about-img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.6s ease;
    }

    .about-photo-card:hover .about-img {
      transform: scale(1.03);
    }

    .about-photo-caption {
      position: relative;
      z-index: 2;
      background: linear-gradient(to top, rgba(36, 20, 45, 0.85) 0%, rgba(36, 20, 45, 0.4) 60%, transparent 100%);
      padding: var(--space-lg) var(--space-md) var(--space-md);
      color: #ffffff;
      text-align: left;
    }

    .about-photo-caption-tag {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--color-sage-light);
      margin-bottom: 3px;
    }

    .about-photo-caption-text {
      font-size: 0.84rem;
      color: #ffffff;
      opacity: 0.95;
      margin: 0;
      font-family: var(--font-sans);
      line-height: 1.35;
    }

    .about-content {
      display: flex;
      flex-direction: column;
    }

    .about-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xs);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-sage-dark);
      margin-bottom: var(--space-xs);
    }

    .about-title {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.25;
      color: var(--color-primary-dark);
      letter-spacing: -0.015em;
      margin-bottom: var(--space-lg);
    }

    @media (min-width: 768px) {
      .about-title {
        font-size: 2.35rem;
      }
    }

    .about-paragraphs {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      margin-bottom: var(--space-xl);
    }

    .about-paragraph {
      font-size: 0.98rem;
      line-height: 1.7;
      color: var(--color-text-main);
      margin: 0;
    }

    @media (min-width: 768px) {
      .about-paragraph {
        font-size: 1.02rem;
      }
    }

    .about-credentials {
      background-color: var(--color-bg-subtle);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-md);
      padding: var(--space-lg);
    }

    .about-credentials-title {
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--color-primary-forest);
      margin-bottom: var(--space-sm);
      display: flex;
      align-items: center;
      gap: var(--space-xs);
    }

    .credentials-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .credentials-item {
      display: flex;
      align-items: flex-start;
      gap: 0.6rem;
      font-size: 0.9rem;
      line-height: 1.5;
      color: var(--color-text-main);
    }

    .credentials-bullet {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: var(--color-gold-accent);
      margin-top: 0.5rem;
      flex-shrink: 0;
    }

    .credentials-item strong {
      color: var(--color-primary-dark);
      font-weight: 600;
    }

    /* ==========================================================================
       SEÇÃO: COMO FUNCIONA A TERAPIA ONLINE
       ========================================================================== */
    .steps-section {
      padding: var(--space-3xl) var(--space-lg);
      background-color: var(--color-bg-page);
    }

    @media (min-width: 768px) {
      .steps-section {
        padding: var(--space-4xl) var(--space-lg);
      }
    }

    .steps-header {
      text-align: center;
      max-width: 680px;
      margin: 0 auto var(--space-3xl);
    }

    .steps-eyebrow {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xs);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-sage-dark);
      margin-bottom: var(--space-xs);
    }

    .steps-title {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.25;
      color: var(--color-primary-dark);
      letter-spacing: -0.015em;
      margin-bottom: var(--space-sm);
    }

    @media (min-width: 768px) {
      .steps-title {
        font-size: 2.35rem;
      }
    }

    .steps-intro {
      font-size: 1rem;
      line-height: 1.6;
      color: var(--color-text-muted);
      margin: 0;
    }

    @media (min-width: 768px) {
      .steps-intro {
        font-size: 1.05rem;
      }
    }

    .steps-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-lg);
      max-width: 1160px;
      margin: 0 auto var(--space-3xl);
    }

    @media (min-width: 640px) {
      .steps-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-xl);
      }
    }

    @media (min-width: 1024px) {
      .steps-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-lg);
      }
    }

    .step-card {
      background-color: var(--color-bg-card);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-lg);
      padding: var(--space-xl) var(--space-lg);
      display: flex;
      flex-direction: column;
      position: relative;
      box-shadow: var(--shadow-card);
      transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    }

    .step-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px -5px rgba(36, 20, 45, 0.08);
      border-color: var(--color-border-medium);
    }

    .step-number-badge {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background-color: var(--color-sage-soft);
      border: 1px solid var(--color-border-subtle);
      color: var(--color-primary-forest);
      font-family: var(--font-serif);
      font-size: 1.15rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--space-md);
      flex-shrink: 0;
    }

    .step-title {
      font-family: var(--font-serif);
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 1.35;
      color: var(--color-primary-dark);
      margin-bottom: var(--space-xs);
    }

    .step-desc {
      font-size: 0.92rem;
      line-height: 1.6;
      color: var(--color-text-main);
      margin: 0;
      flex-grow: 1;
    }

    .steps-cta-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: var(--space-sm);
    }

    /* ==========================================================================
       SEÇÃO: TALVEZ VOCÊ SE IDENTIFIQUE COM ISSO (PARA QUEM É)
       ========================================================================== */
    .topics-section {
      padding: var(--space-3xl) var(--space-lg);
      background-color: var(--color-bg-subtle);
    }

    @media (min-width: 768px) {
      .topics-section {
        padding: var(--space-4xl) var(--space-lg);
      }
    }

    .topics-header {
      text-align: center;
      max-width: 720px;
      margin: 0 auto var(--space-3xl);
    }

    .topics-eyebrow {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xs);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-sage-dark);
      margin-bottom: var(--space-xs);
    }

    .topics-title {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.25;
      color: var(--color-primary-dark);
      letter-spacing: -0.015em;
      margin-bottom: var(--space-sm);
    }

    @media (min-width: 768px) {
      .topics-title {
        font-size: 2.35rem;
      }
    }

    .topics-intro {
      font-size: 1rem;
      line-height: 1.6;
      color: var(--color-text-muted);
      margin: 0;
    }

    @media (min-width: 768px) {
      .topics-intro {
        font-size: 1.05rem;
      }
    }

    .topics-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-md);
      max-width: 1160px;
      margin: 0 auto var(--space-2xl);
    }

    @media (min-width: 640px) {
      .topics-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-lg);
      }
    }

    @media (min-width: 1024px) {
      .topics-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-lg);
      }
    }

    .topic-card {
      background-color: var(--color-bg-card);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-lg);
      padding: var(--space-xl) var(--space-lg);
      display: flex;
      flex-direction: column;
      box-shadow: var(--shadow-card);
      transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    }

    .topic-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px -5px rgba(36, 20, 45, 0.08);
      border-color: var(--color-border-medium);
    }

    .topic-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--color-gold-accent);
      margin-bottom: var(--space-md);
    }

    .topic-title {
      font-family: var(--font-serif);
      font-size: 1.15rem;
      font-weight: 600;
      line-height: 1.35;
      color: var(--color-primary-dark);
      margin-bottom: var(--space-xs);
    }

    .topic-desc {
      font-size: 0.92rem;
      line-height: 1.6;
      color: var(--color-text-muted);
      margin: 0;
    }

    .topics-closing {
      max-width: 700px;
      margin: 0 auto var(--space-2xl);
      text-align: center;
      padding: var(--space-lg) var(--space-xl);
      background-color: rgba(231, 215, 236, 0.35);
      border-radius: var(--radius-lg);
      border: 1px solid var(--color-border-subtle);
    }

    .topics-closing p {
      font-size: 0.98rem;
      line-height: 1.65;
      color: var(--color-primary-forest);
      font-weight: 500;
      margin: 0;
    }

    .topics-cta-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: var(--space-sm);
    }

    /* ==========================================================================
       SEÇÃO: PERGUNTAS FREQUENTES (FAQ)
       ========================================================================== */
    .faq-section {
      padding: var(--space-3xl) var(--space-lg);
      background-color: var(--color-bg-page);
    }

    @media (min-width: 768px) {
      .faq-section {
        padding: var(--space-4xl) var(--space-lg);
      }
    }

    .faq-header {
      text-align: center;
      max-width: 680px;
      margin: 0 auto var(--space-3xl);
    }

    .faq-eyebrow {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xs);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-sage-dark);
      margin-bottom: var(--space-xs);
    }

    .faq-title {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.25;
      color: var(--color-primary-dark);
      letter-spacing: -0.015em;
      margin-bottom: 0;
    }

    @media (min-width: 768px) {
      .faq-title {
        font-size: 2.35rem;
      }
    }

    .faq-list {
      max-width: 820px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .faq-item {
      background-color: var(--color-bg-card);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: 0 2px 10px -2px rgba(36, 20, 45, 0.04);
      transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
    }

    .faq-item:hover {
      border-color: var(--color-border-medium);
      box-shadow: var(--shadow-card);
    }

    .faq-item[open] {
      border-color: var(--color-sage-medium);
      box-shadow: var(--shadow-card);
    }

    .faq-question {
      padding: var(--space-lg) var(--space-xl);
      font-family: var(--font-sans);
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--color-primary-dark);
      cursor: pointer;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-md);
      user-select: none;
      transition: color 0.2s ease;
    }

    .faq-question::-webkit-details-marker {
      display: none;
    }

    .faq-question:hover {
      color: var(--color-sage-dark);
    }

    .faq-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      color: var(--color-sage-dark);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .faq-item[open] .faq-icon {
      transform: rotate(180deg);
      color: var(--color-primary-forest);
    }

    .faq-answer {
      padding: 0 var(--space-xl) var(--space-lg) var(--space-xl);
      font-size: 0.95rem;
      line-height: 1.65;
      color: var(--color-text-muted);
      border-top: 1px solid transparent;
      animation: faqFadeIn 0.25s ease-out;
    }

    @keyframes faqFadeIn {
      from {
        opacity: 0;
        transform: translateY(-4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* ==========================================================================
       SEÇÃO: CHAMADA FINAL (CTA)
       ========================================================================== */
    .cta-final-section {
      padding: var(--space-3xl) var(--space-lg);
      background-color: var(--color-bg-subtle);
      text-align: center;
    }

    @media (min-width: 768px) {
      .cta-final-section {
        padding: var(--space-4xl) var(--space-lg);
      }
    }

    .cta-final-content {
      max-width: 680px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .cta-final-title {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.25;
      color: var(--color-primary-dark);
      letter-spacing: -0.015em;
      margin-bottom: var(--space-md);
    }

    @media (min-width: 768px) {
      .cta-final-title {
        font-size: 2.35rem;
      }
    }

    .cta-final-desc {
      font-size: 1.05rem;
      line-height: 1.65;
      color: var(--color-text-muted);
      margin-bottom: var(--space-2xl);
    }

    @media (min-width: 768px) {
      .cta-final-desc {
        font-size: 1.12rem;
      }
    }

    /* ==========================================================================
       RODAPÉ / FOOTER
       ========================================================================== */
    .site-footer {
      background-color: var(--color-bg-page);
      border-top: 1px solid var(--color-border-subtle);
      padding: var(--space-3xl) var(--space-lg) var(--space-2xl);
      color: var(--color-text-muted);
    }

    .footer-inner {
      max-width: 1160px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: var(--space-2xl);
    }

    .footer-top {
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
      justify-content: space-between;
    }

    @media (min-width: 768px) {
      .footer-top {
        flex-direction: row;
        align-items: flex-start;
      }
    }

    .footer-brand {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .footer-brand-title {
      font-family: var(--font-serif);
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--color-primary-dark);
    }

    .footer-brand-crp {
      font-size: 0.9rem;
      color: var(--color-sage-dark);
      font-weight: 600;
    }

    .footer-brand-scope {
      font-size: 0.88rem;
      color: var(--color-text-muted);
      margin-top: 2px;
    }

    .footer-contact {
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-size: 0.9rem;
    }

    .footer-contact a {
      color: var(--color-primary-forest);
      text-decoration: none;
      transition: color 0.2s ease, text-decoration 0.2s ease;
    }

    .footer-contact a:hover {
      text-decoration: underline;
      color: var(--color-primary-dark);
    }

    .footer-bottom {
      border-top: 1px solid var(--color-border-subtle);
      padding-top: var(--space-lg);
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      align-items: center;
      justify-content: space-between;
      font-size: 0.82rem;
    }

    @media (min-width: 640px) {
      .footer-bottom {
        flex-direction: row;
      }
    }

    .footer-policy-link {
      color: var(--color-text-muted);
      text-decoration: underline;
      text-underline-offset: 3px;
      transition: color 0.2s ease;
    }

    .footer-policy-link:hover {
      color: var(--color-primary-dark);
    }

    /* Botão Flutuante do WhatsApp */
    .whatsapp-float {
      position: fixed;
      bottom: 1.5rem;
      right: 1.5rem;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 58px;
      height: 58px;
      background-color: #25D366;
      color: #ffffff;
      border-radius: 50%;
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4), 0 2px 8px rgba(0, 0, 0, 0.15);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      text-decoration: none;
    }

    .whatsapp-float:hover {
      transform: scale(1.08) translateY(-2px);
      box-shadow: 0 10px 25px rgba(37, 211, 102, 0.55), 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .whatsapp-float:active {
      transform: scale(0.96);
    }

    .whatsapp-float-icon {
      width: 32px;
      height: 32px;
      fill: currentColor;
    }

    .whatsapp-float-tooltip {
      position: absolute;
      right: calc(100% + 12px);
      background-color: var(--color-primary-dark);
      color: #ffffff;
      font-size: 0.85rem;
      font-weight: 600;
      white-space: nowrap;
      padding: 0.45rem 0.85rem;
      border-radius: var(--radius-pill);
      box-shadow: var(--shadow-sm);
      opacity: 0;
      visibility: hidden;
      transform: translateX(8px);
      transition: all 0.2s ease;
      pointer-events: none;
    }

    .whatsapp-float:hover .whatsapp-float-tooltip {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }

    .whatsapp-float-pulse {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background-color: #25D366;
      opacity: 0.4;
      animation: wa-pulse 2.5s infinite cubic-bezier(0.4, 0, 0.6, 1);
      z-index: -1;
    }

    @keyframes wa-pulse {
      0% {
        transform: scale(1);
        opacity: 0.5;
      }
      70% {
        transform: scale(1.4);
        opacity: 0;
      }
      100% {
        transform: scale(1.4);
        opacity: 0;
      }
    }
  </style>
</head>
<body>

  <!-- ==========================================================================
       CABEÇALHO / HEADER
       ========================================================================== -->
  <header class="site-header" id="header">
    <div class="container header-inner">
      <div class="brand">
        <span class="brand-name">Psicóloga Isabele Costa</span>
        <span class="brand-crp">CRP 06/214123</span>
      </div>
      <div class="badge-online">
        <span class="status-dot"></span>
        <span>Atendimento 100% online</span>
      </div>
    </div>
  </header>

  <!-- ==========================================================================
       CONTEÚDO PRINCIPAL
       ========================================================================== -->
  <main id="main-content">
    
    <!-- SEÇÃO HERO (Primeira seção da landing page) -->
    <section class="hero-section" id="hero" aria-labelledby="hero-heading">
      <div class="container">
        <div class="hero-grid">
          
          <!-- Coluna 1: Conteúdo Textual & CTA -->
          <div class="hero-content">
            
            <div class="hero-eyebrow">
              <span class="hero-eyebrow-line"></span>
              <span>Psicoterapia Online · Mulheres & LGBTQIAPN+</span>
            </div>

            <h1 class="hero-title" id="hero-heading">
              Você não precisa dar conta de tudo só.
            </h1>

            <p class="hero-subtitle">
              Um espaço de terapia online com foco no público feminino e LGBTQIAPN+, para fortalecer a autoestima, aliviar a autocobrança e cultivar relações mais saudáveis.
            </p>

            <!-- Citação Carl Rogers em destaque sutil -->
            <div class="quote-box">
              <blockquote class="quote-text">
                "O paradoxo curioso é que quando eu me aceito como eu sou, então eu mudo."
              </blockquote>
              <cite class="quote-author">Carl Rogers</cite>
            </div>

            <!-- Botão Principal Único -->
            <div class="hero-actions">
              <a 
                href="https://wa.me/5512991715684?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20primeira%20conversa." 
                class="btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp para agendar primeira conversa"
              >
                <svg class="btn-icon-whatsapp" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Agendar primeira conversa</span>
              </a>
            </div>

            <!-- Sinais de Confiança Visíveis -->
            <div class="trust-indicators">
              <div class="trust-item">
                <svg class="trust-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                <span>Psicóloga Isabele Costa · CRP 06/214123</span>
              </div>
              <span class="trust-divider">·</span>
              <div class="trust-item">
                <svg class="trust-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                <span>Atendimento 100% online</span>
              </div>
            </div>

          </div>

          <!-- Coluna 2: Espaço reservado para a Foto da Psicóloga (Placeholder) -->
          <div class="hero-media">
            <div class="photo-card-wrapper">
              <div class="photo-backdrop"></div>
              
              <div class="photo-card">
                <div class="photo-placeholder">
                  <!-- Foto profissional da Psicóloga Isabele Costa -->
                  <img 
                    src="/assets/foto/foto-isabele-costa.webp" 
                    alt="Foto profissional da Psicóloga Isabele Costa (CRP 06/214123)" 
                    class="photo-img"
                    loading="lazy"
                  />
                  
                  <!-- Selo flutuante de acolhimento ético -->
                  <div class="photo-overlay-card">
                    <div class="photo-badge-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="photo-badge-title">Espaço Seguro & Confidencial</p>
                      <p class="photo-badge-desc">Atendimento ético conforme o CFP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SEÇÃO: SOBRE A ISABELE (Apresentação da psicóloga) -->
    <section class="about-section" id="sobre" aria-labelledby="about-heading">
      <div class="container">
        <div class="about-grid">
          
          <!-- Coluna 1: Foto da Psicóloga Isabele Costa -->
          <div class="about-media">
            <div class="about-photo-wrapper">
              <div class="about-photo-backdrop"></div>
              
              <div class="about-photo-card">
                <div class="about-photo-placeholder">
                  <img 
                    src="/assets/foto/foto-isabele-costa-2.jpg" 
                    alt="Foto da Psicóloga Isabele Costa (CRP 06/214123)" 
                    class="about-img"
                    loading="lazy"
                  />
                  <div class="about-photo-caption">
                    <div class="about-photo-caption-tag">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      <span>Isabele Costa</span>
                    </div>
                    <p class="about-photo-caption-text">Psicóloga Clínica · CRP 06/214123</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Coluna 2: Conteúdo Textual & Credenciais -->
          <div class="about-content">
            
            <div class="about-eyebrow">
              <span class="hero-eyebrow-line"></span>
              <span>Apresentação</span>
            </div>

            <h2 class="about-title" id="about-heading">
              Prazer, sou a Isabele
            </h2>

            <div class="about-paragraphs">
              <p class="about-paragraph">
                Prazer, sou a Isabele Costa, psicóloga (CRP 06/214123). Acredito que toda pessoa merece um espaço para ser ouvida sem pressa e sem julgamento, e é isso que ofereço nas sessões: um lugar leve, onde você conduz o que precisa falar, no seu tempo.
              </p>

              <p class="about-paragraph">
                Meu trabalho é guiado pela Abordagem Centrada na Pessoa, dentro da psicologia fenomenológica humanista. Na prática, isso quer dizer que eu não chego com respostas prontas. Eu caminho ao seu lado enquanto você se entende melhor e encontra o seu próprio jeito de seguir.
              </p>

              <p class="about-paragraph">
                Atendo online desde 2022, com um cuidado especial no acompanhamento de mulheres e no acolhimento de pessoas LGBTQIAPN+. Aqui, você pode ser exatamente quem você é.
              </p>
            </div>

            <!-- Credenciais como lista simples e organizada -->
            <div class="about-credentials">
              <div class="about-credentials-title">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                <span>Credenciais & Formação</span>
              </div>
              <ul class="credentials-list">
                <li class="credentials-item">
                  <span class="credentials-bullet"></span>
                  <span><strong>Pós-graduação:</strong> Psicologia Clínica pela PUC-RS (em conclusão)</span>
                </li>
                <li class="credentials-item">
                  <span class="credentials-bullet"></span>
                  <span><strong>Abordagem:</strong> Centrada na Pessoa (fenomenológica-humanista)</span>
                </li>
                <li class="credentials-item">
                  <span class="credentials-bullet"></span>
                  <span><strong>Atendimento:</strong> online pela plataforma Google Meet</span>
                </li>
                <li class="credentials-item">
                  <span class="credentials-bullet"></span>
                  <span><strong>Registro:</strong> CRP 06/214123</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- SEÇÃO: COMO FUNCIONA A TERAPIA ONLINE (Passo a passo do atendimento) -->
    <section class="steps-section" id="como-funciona" aria-labelledby="steps-heading">
      <div class="container">
        
        <!-- Cabeçalho da Seção -->
        <div class="steps-header">
          <div class="steps-eyebrow">
            <span class="hero-eyebrow-line"></span>
            <span>Passo a Passo</span>
            <span class="hero-eyebrow-line"></span>
          </div>
          <h2 class="steps-title" id="steps-heading">
            Como funciona a terapia online
          </h2>
          <p class="steps-intro">
            Começar é mais simples do que parece. Este é o caminho até a sua primeira sessão:
          </p>
        </div>

        <!-- Grade de 4 Passos -->
        <div class="steps-grid">
          
          <!-- Passo 1 -->
          <div class="step-card">
            <div class="step-number-badge">1</div>
            <h3 class="step-title">Primeiro contato</h3>
            <p class="step-desc">
              você me chama no WhatsApp e combinamos uma primeira conversa, sem pressa.
            </p>
          </div>

          <!-- Passo 2 -->
          <div class="step-card">
            <div class="step-number-badge">2</div>
            <h3 class="step-title">Combinamos o horário</h3>
            <p class="step-desc">
              escolhemos juntos o melhor dia e horário para os nossos encontros semanais.
            </p>
          </div>

          <!-- Passo 3 -->
          <div class="step-card">
            <div class="step-number-badge">3</div>
            <h3 class="step-title">Nos encontramos por vídeo</h3>
            <p class="step-desc">
              as sessões acontecem pelo Google Meet, em um ambiente reservado e sigiloso, de onde você estiver. Cada uma dura cerca de 50 minutos, podendo se estender um pouco conforme a sua necessidade e a disponibilidade do horário.
            </p>
          </div>

          <!-- Passo 4 -->
          <div class="step-card">
            <div class="step-number-badge">4</div>
            <h3 class="step-title">Seguimos no seu ritmo</h3>
            <p class="step-desc">
              semana a semana, construímos um espaço de cuidado contínuo, respeitando o seu tempo.
            </p>
          </div>

        </div>

        <!-- Botão de Ação / WhatsApp -->
        <div class="steps-cta-wrapper">
          <a 
            href="https://wa.me/5512991715684?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20primeira%20conversa." 
            class="btn-whatsapp" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp para iniciar meu processo terapêutico"
          >
            <svg class="btn-icon-whatsapp" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Quero iniciar meu processo</span>
          </a>
        </div>

      </div>
    </section>

    <!-- SEÇÃO: TALVEZ VOCÊ SE IDENTIFIQUE COM ISSO (Temas / Para quem é) -->
    <section class="topics-section" id="temas" aria-labelledby="topics-heading">
      <div class="container">
        
        <!-- Cabeçalho da Seção -->
        <div class="topics-header">
          <div class="topics-eyebrow">
            <span class="hero-eyebrow-line"></span>
            <span>Para quem é</span>
            <span class="hero-eyebrow-line"></span>
          </div>
          <h2 class="topics-title" id="topics-heading">
            Talvez você se identifique com isso
          </h2>
          <p class="topics-intro">
            Cada história é única, mas é comum que alguns sentimentos se repitam. Talvez você reconheça aqui um pouco do que tem vivido:
          </p>
        </div>

        <!-- Grade de 6 Temas -->
        <div class="topics-grid">
          
          <!-- Tema 1 -->
          <div class="topic-card">
            <div class="topic-indicator"></div>
            <h3 class="topic-title">Autocrítica e autocobrança</h3>
            <p class="topic-desc">
              aquela voz interna que raramente te dá descanso.
            </p>
          </div>

          <!-- Tema 2 -->
          <div class="topic-card">
            <div class="topic-indicator"></div>
            <h3 class="topic-title">Baixa autoestima e inseguranças</h3>
            <p class="topic-desc">
              a sensação de nunca ser o bastante.
            </p>
          </div>

          <!-- Tema 3 -->
          <div class="topic-card">
            <div class="topic-indicator"></div>
            <h3 class="topic-title">Relacionamentos que machucam</h3>
            <p class="topic-desc">
              vínculos que pesam mais do que acolhem.
            </p>
          </div>

          <!-- Tema 4 -->
          <div class="topic-card">
            <div class="topic-indicator"></div>
            <h3 class="topic-title">Ansiedade e preocupação constante</h3>
            <p class="topic-desc">
              a mente que não desliga.
            </p>
          </div>

          <!-- Tema 5 -->
          <div class="topic-card">
            <div class="topic-indicator"></div>
            <h3 class="topic-title">Autoconhecimento e autoaceitação</h3>
            <p class="topic-desc">
              a vontade de se entender e se aceitar como você é.
            </p>
          </div>

          <!-- Tema 6 -->
          <div class="topic-card">
            <div class="topic-indicator"></div>
            <h3 class="topic-title">Fases de transição e recomeços</h3>
            <p class="topic-desc">
              mudanças que trazem dúvidas e inseguranças.
            </p>
          </div>

        </div>

        <!-- Fechamento da Seção -->
        <div class="topics-closing">
          <p>
            Se você se reconheceu em algum desses pontos, saiba que não precisa lidar com isso só. Aqui, cada um desses temas tem espaço para ser acolhido.
          </p>
        </div>

        <!-- Botão de Ação / WhatsApp -->
        <div class="topics-cta-wrapper">
          <a 
            href="https://wa.me/5512991715684?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20primeira%20conversa." 
            class="btn-whatsapp" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp para conversar sobre o que sinto"
          >
            <svg class="btn-icon-whatsapp" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Quero conversar sobre o que sinto</span>
          </a>
        </div>

      </div>
    </section>

    <!-- SEÇÃO: PERGUNTAS FREQUENTES (FAQ) -->
    <section class="faq-section" id="faq" aria-labelledby="faq-heading">
      <div class="container">
        
        <!-- Cabeçalho da Seção -->
        <div class="faq-header">
          <div class="faq-eyebrow">
            <span class="hero-eyebrow-line"></span>
            <span>Dúvidas Comuns</span>
            <span class="hero-eyebrow-line"></span>
          </div>
          <h2 class="faq-title" id="faq-heading">
            Perguntas frequentes
          </h2>
        </div>

        <!-- Lista de Perguntas e Respostas (Acordeão) -->
        <div class="faq-list">
          
          <!-- Pergunta 1 -->
          <details class="faq-item">
            <summary class="faq-question">
              <span>A terapia online funciona mesmo?</span>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="faq-answer">
              Sim. A terapia online segue os mesmos princípios e o mesmo cuidado do atendimento presencial. O que muda é o formato: nos encontramos por vídeo, com a mesma escuta, a mesma atenção e o mesmo sigilo.
            </div>
          </details>

          <!-- Pergunta 2 -->
          <details class="faq-item">
            <summary class="faq-question">
              <span>Como funciona o sigilo?</span>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="faq-answer">
              Tudo o que você compartilha nas sessões é confidencial e protegido pelo Código de Ética da Psicologia. É um espaço seguro, só seu.
            </div>
          </details>

          <!-- Pergunta 3 -->
          <details class="faq-item">
            <summary class="faq-question">
              <span>Do que eu preciso para participar?</span>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="faq-answer">
              Um aparelho com câmera e internet, e um lugar reservado onde você se sinta à vontade para conversar. As sessões acontecem pelo Google Meet.
            </div>
          </details>

          <!-- Pergunta 4 -->
          <details class="faq-item">
            <summary class="faq-question">
              <span>Com que frequência são as sessões?</span>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="faq-answer">
              Em geral, os encontros são semanais, com dia e horário combinados entre nós. Isso pode ser ajustado conforme a sua necessidade.
            </div>
          </details>

          <!-- Pergunta 5 -->
          <details class="faq-item">
            <summary class="faq-question">
              <span>Quanto tempo dura cada sessão?</span>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="faq-answer">
              Cada sessão dura cerca de 50 minutos, podendo se estender um pouco conforme a sua necessidade e a disponibilidade do horário.
            </div>
          </details>

          <!-- Pergunta 6 -->
          <details class="faq-item">
            <summary class="faq-question">
              <span>Qual é o valor da sessão?</span>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="faq-answer">
              Os valores são informados na nossa primeira conversa, pelo WhatsApp, para que eu possa te explicar tudo com calma.
            </div>
          </details>

          <!-- Pergunta 7 -->
          <details class="faq-item">
            <summary class="faq-question">
              <span>Você emite recibo para reembolso?</span>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="faq-answer">
              Sim. Emito recibo das sessões, que você pode usar para pedir reembolso ao seu plano de saúde, caso ele ofereça esse benefício.
            </div>
          </details>

          <!-- Pergunta 8 -->
          <details class="faq-item">
            <summary class="faq-question">
              <span>Como faço para começar?</span>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="faq-answer">
              É só me chamar no WhatsApp. A partir daí, combinamos a sua primeira conversa.
            </div>
          </details>

        </div>

      </div>
    </section>

    <!-- ==========================================================================
         SEÇÃO: CHAMADA FINAL (CTA)
         ========================================================================== -->
    <section class="cta-final-section" id="contato" aria-labelledby="cta-final-heading">
      <div class="container">
        <div class="cta-final-content">
          <h2 class="cta-final-title" id="cta-final-heading">
            Quando você quiser começar, estarei por aqui.
          </h2>
          <p class="cta-final-desc">
            Dar o primeiro passo já é um cuidado com você. Vamos conversar e ver, sem pressa, se faz sentido começarmos.
          </p>
          <a 
            href="https://wa.me/5512991715684?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20primeira%20conversa." 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn-whatsapp"
            id="btn-cta-final-whatsapp"
            aria-label="Falar no WhatsApp para conversar sem pressa com a psicóloga"
          >
            <svg class="btn-icon-whatsapp" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.05 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.39C16.32 14.27 15.11 13.67 14.88 13.59C14.66 13.5 14.5 13.46 14.33 13.71C14.17 13.96 13.71 14.5 13.57 14.66C13.43 14.83 13.29 14.85 13.04 14.72C12.79 14.6 11.99 14.34 11.04 13.49C10.3 12.83 9.8 12.02 9.66 11.77C9.52 11.52 9.64 11.39 9.77 11.26C9.88 11.15 10.02 10.97 10.15 10.82C10.28 10.67 10.32 10.57 10.4 10.4C10.49 10.24 10.44 10.1 10.38 9.97C10.32 9.85 9.82 8.63 9.61 8.13C9.41 7.64 9.2 7.71 9.05 7.7C8.91 7.69 8.75 7.69 8.58 7.69C8.41 7.69 8.14 7.75 7.91 8C7.68 8.25 7.04 8.85 7.04 10.07C7.04 11.29 7.93 12.47 8.05 12.63C8.18 12.8 9.79 15.28 12.26 16.34C12.85 16.59 13.3 16.74 13.66 16.86C14.25 17.05 14.79 17.02 15.22 16.96C15.7 16.89 16.69 16.36 16.9 15.78C17.11 15.19 17.11 14.69 17.04 14.59C16.98 14.47 16.82 14.51 16.57 14.39Z"/>
            </svg>
            <span>Vamos conversar sem pressa</span>
          </a>
        </div>
      </div>
    </section>

  </main>

  <!-- ==========================================================================
       RODAPÉ / FOOTER
       ========================================================================== -->
  <footer class="site-footer" id="footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="footer-brand-title">Psicóloga Isabele Costa · CRP 06/214123</span>
          <span class="footer-brand-scope">Atendimento psicológico online para todo o Brasil</span>
        </div>
        <div class="footer-contact">
          <div>WhatsApp: <a href="https://wa.me/5512991715684?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20primeira%20conversa." target="_blank" rel="noopener noreferrer">(12) 99171-5684</a></div>
          <div>E-mail: <a href="mailto:psiisabelecosta@gmail.com">psiisabelecosta@gmail.com</a></div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Isabele Costa</span>
        <a href="#privacidade" class="footer-policy-link">Política de Privacidade</a>
      </div>
    </div>
  </footer>

  <!-- ==========================================================================
       BOTÃO FLUTUANTE DO WHATSAPP
       ========================================================================== -->
  <a 
    href="https://wa.me/5512991715684?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20primeira%20conversa."
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-float"
    id="whatsapp-float-btn"
    aria-label="Falar com a Psicóloga Isabele Costa no WhatsApp"
  >
    <div class="whatsapp-float-pulse" aria-hidden="true"></div>
    <span class="whatsapp-float-tooltip">Falar no WhatsApp</span>
    <svg class="whatsapp-float-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>

</body>
</html>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(standaloneHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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

            {/* Botão de exportação/cópia do arquivo HTML único */}
            <button
              onClick={() => setShowCodeModal(true)}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-colors hover:bg-white"
              style={{ 
                color: 'var(--color-sage-dark)', 
                borderColor: 'var(--color-border-medium)',
                backgroundColor: 'transparent'
              }}
              title="Ver código do arquivo único HTML"
            >
              <Code size={14} />
              <span>Ver Código HTML</span>
            </button>
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
          className="py-12 sm:py-16 md:py-20 lg:py-24"
        >
          <div className="max-w-[860px] mx-auto px-5 sm:px-8 text-center flex flex-col items-center gap-6 sm:gap-7">
            
            {/* Eyebrow / Identificador sutil */}
            <div 
              className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full border shadow-sm"
              style={{ 
                backgroundColor: 'var(--color-sage-soft)',
                borderColor: 'var(--color-sage-medium)',
                color: 'var(--color-sage-dark)'
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-gold-accent)' }}></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Psicoterapia Online · Mulheres & LGBTQIAPN+
              </span>
            </div>

            {/* Título Principal */}
            <h1 
              id="hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium leading-[1.18] tracking-tight max-w-[22ch]"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
            >
              Você não precisa dar conta de tudo só.
            </h1>

            {/* Subtítulo */}
            <p 
              className="text-base sm:text-lg md:text-[1.15rem] leading-relaxed max-w-[56ch]"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Um espaço de terapia online com foco no público feminino e LGBTQIAPN+, para fortalecer a autoestima, aliviar a autocobrança e cultivar relações mais saudáveis.
            </p>

            {/* Citação Carl Rogers (Destaque sutil com autoria) */}
            <div 
              className="rounded-2xl py-4 px-6 my-1 border max-w-[580px] w-full text-center"
              style={{ 
                backgroundColor: 'var(--color-sage-soft)',
                borderColor: 'var(--color-sage-medium)'
              }}
            >
              <blockquote 
                className="italic text-base sm:text-[1.1rem] leading-relaxed mb-1.5"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-quote)' }}
              >
                &ldquo;O paradoxo curioso é que quando eu me aceito como eu sou, então eu mudo.&rdquo;
              </blockquote>
              <cite 
                className="not-italic text-xs sm:text-sm font-semibold block"
                style={{ color: 'var(--color-sage-dark)' }}
              >
                — Carl Rogers
              </cite>
            </div>

            {/* Botão de Ação Principal (Único) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                id="btn-whatsapp-hero"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md w-full sm:w-auto"
                style={{ 
                  backgroundColor: 'var(--color-primary-dark)',
                  boxShadow: 'var(--shadow-btn)'
                }}
                aria-label="Falar no WhatsApp para agendar primeira conversa"
              >
                {/* SVG WhatsApp Oficial */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Agendar primeira conversa</span>
              </a>
            </div>

            {/* Sinais de Confiança Visíveis */}
            <div 
              className="pt-4 mt-1 border-t flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs sm:text-sm w-full"
              style={{ 
                borderColor: 'var(--color-border-subtle)',
                color: 'var(--color-text-muted)'
              }}
            >
              <div className="inline-flex items-center gap-1.5 font-medium">
                <ShieldCheck size={16} style={{ color: 'var(--color-gold-accent)' }} />
                <span>Psicóloga Isabele Costa · CRP 06/214123</span>
              </div>
              <span className="hidden sm:inline" style={{ color: 'var(--color-border-medium)' }}>•</span>
              <div className="inline-flex items-center gap-1.5 font-medium">
                <CalendarCheck size={16} style={{ color: 'var(--color-gold-accent)' }} />
                <span>Atendimento 100% online</span>
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================================================
            SEÇÃO: SOBRE A ISABELE (Apresentação da Psicóloga)
            ========================================================================== */}
        <section 
          id="sobre"
          aria-labelledby="about-title"
          className="py-14 sm:py-20 md:py-24 border-t"
          style={{ 
            backgroundColor: 'var(--color-bg-card)',
            borderColor: 'var(--color-border-subtle)'
          }}
        >
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
                  className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight tracking-tight"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
                >
                  Prazer, sou a Isabele
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
                  className="rounded-xl p-5 border mt-2"
                  style={{ 
                    backgroundColor: 'var(--color-bg-subtle)',
                    borderColor: 'var(--color-border-subtle)'
                  }}
                >
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

        {/* ==========================================================================
            SEÇÃO: COMO FUNCIONA A TERAPIA ONLINE (Passo a passo do atendimento)
            ========================================================================== */}
        <section 
          className="w-full py-16 sm:py-24" 
          id="como-funciona"
          style={{ backgroundColor: 'var(--color-bg-base)' }}
        >
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

              {/* Passo 2 */}
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
                className="text-3xl sm:text-4xl font-semibold mb-3 tracking-tight"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
              >
                Talvez você se identifique com isso
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
                  Autocrítica e autocobrança
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  aquela voz interna que raramente te dá descanso.
                </p>
              </div>

              {/* Tema 2 */}
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
                  Autoconhecimento e autoaceitação
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  a vontade de se entender e se aceitar como você é.
                </p>
              </div>

              {/* Tema 6 */}
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
              className="max-w-[720px] mx-auto text-center p-6 sm:p-7 rounded-2xl border mb-10 sm:mb-12"
              style={{ 
                backgroundColor: 'rgba(231, 215, 236, 0.4)',
                borderColor: 'var(--color-border-subtle)'
              }}
            >
              <p 
                className="text-sm sm:text-base leading-relaxed font-medium"
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
                className="group rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors" style={{ color: 'var(--color-primary-dark)' }}>
                  <span>A terapia online funciona mesmo?</span>
                  <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ color: 'var(--color-sage-dark)' }} />
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  Sim. A terapia online segue os mesmos princípios e o mesmo cuidado do atendimento presencial. O que muda é o formato: nos encontramos por vídeo, com a mesma escuta, a mesma atenção e o mesmo sigilo.
                </div>
              </details>

              {/* Pergunta 2 */}
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

              {/* Pergunta 3 */}
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
                className="group rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors" style={{ color: 'var(--color-primary-dark)' }}>
                  <span>Com que frequência são as sessões?</span>
                  <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ color: 'var(--color-sage-dark)' }} />
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  Em geral, os encontros são semanais, com dia e horário combinados entre nós. Isso pode ser ajustado conforme a sua necessidade.
                </div>
              </details>

              {/* Pergunta 5 */}
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
                className="group rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors" style={{ color: 'var(--color-primary-dark)' }}>
                  <span>Qual é o valor da sessão?</span>
                  <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ color: 'var(--color-sage-dark)' }} />
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  Os valores são informados na nossa primeira conversa, pelo WhatsApp, para que eu possa te explicar tudo com calma.
                </div>
              </details>

              {/* Pergunta 7 */}
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
                className="group rounded-2xl border shadow-xs transition-all duration-200 hover:shadow-sm"
                style={{ 
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none font-semibold text-base sm:text-lg transition-colors" style={{ color: 'var(--color-primary-dark)' }}>
                  <span>Como faço para começar?</span>
                  <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ color: 'var(--color-sage-dark)' }} />
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  É só me chamar no WhatsApp. A partir daí, combinamos a sua primeira conversa.
                </div>
              </details>

            </div>

          </div>
        </section>

        {/* ==========================================================================
            SEÇÃO: CHAMADA FINAL (CTA)
            ========================================================================== */}
        <section 
          className="w-full py-16 sm:py-24 text-center border-t" 
          id="contato"
          style={{ 
            backgroundColor: 'var(--color-bg-subtle)',
            borderColor: 'var(--color-border-subtle)'
          }}
        >
          <div className="max-w-[760px] mx-auto px-5 sm:px-8 flex flex-col items-center">
            <h2 
              className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}
            >
              Quando você quiser começar, estarei por aqui.
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

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowCodeModal(true)}
                className="inline-flex items-center gap-1 hover:underline text-xs"
                style={{ color: 'var(--color-primary-forest)' }}
              >
                <Code size={13} />
                <span>Ver código HTML único completo</span>
              </button>
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

      {/* ==========================================================================
          MODAL DE CÓDIGO HTML ÚNICO COMPLETO (Para copiar e usar em 1 arquivo)
          ========================================================================== */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border overflow-hidden"
            style={{ borderColor: 'var(--color-border-medium)' }}
          >
            <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: 'var(--color-border-subtle)' }}>
              <div>
                <h3 className="font-semibold text-sm sm:text-base" style={{ color: 'var(--color-primary-dark)', fontFamily: 'var(--font-serif)' }}>
                  Código HTML Único (Single File com CSS Embutido)
                </h3>
                <p className="text-xs text-gray-500">
                  Pronto para salvar como <code>index.html</code> ou colar em qualquer hospedagem.
                </p>
              </div>
              <button
                onClick={() => setShowCodeModal(false)}
                className="text-gray-400 hover:text-gray-700 text-lg px-2 py-1"
              >
                ✕
              </button>
            </div>

            <div className="p-4 flex-1 overflow-auto bg-gray-900 text-gray-100 font-mono text-xs">
              <pre><code>{standaloneHtmlCode}</code></pre>
            </div>

            <div className="p-4 border-t flex justify-end gap-2 bg-gray-50">
              <button
                onClick={copyToClipboard}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white transition-colors"
                style={{ backgroundColor: 'var(--color-primary-dark)' }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copiado com sucesso!' : 'Copiar Código HTML'}</span>
              </button>
              <button
                onClick={() => setShowCodeModal(false)}
                className="px-4 py-2 rounded-lg text-xs font-medium border bg-white hover:bg-gray-100 text-gray-700"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}


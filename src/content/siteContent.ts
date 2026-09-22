/**
 * =========================================================================
 * 📝 SITE CONTENT & TEXT CONFIGURATION
 * =========================================================================
 * 
 * Edit any text on the website directly in this file.
 * Changes here are immediately reflected across all pages and components.
 * 
 * TABLE OF CONTENTS:
 * 1. brand       - Global brand info, social media, contact details
 * 2. navigation  - Header menu links and buttons
 * 3. home        - Homepage hero, portfolio teaser, about/features, and contact form
 * 4. portfolio   - Portfolio listing and detail page texts
 * 5. blog        - Journal/blog listing and detail page texts
 * 6. footer      - Footer texts, copyright, and signature
 * 7. notFound    - 404 page texts
 * =========================================================================
 */

export const siteContent = {
  // ==========================================
  // 1. BRAND & GLOBAL CONTACT
  // ==========================================
  brand: {
    name: "Marcos Alex",
    tagline: "Produção audiovisual focada em você.",
    email: "marcosalexov@gmail.com",
    phone: "+55 41 98421-6095",
    whatsappUrl:
      "https://wa.me/5541984216095?text=Ol%C3%A1%20Marcos,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20solicitar%20uma%20proposta%20audiovisual.",
    whatsappCtaText: "Whatsapp (+55 41 98421-6095)",
    location: "CwB/PR - Brasil",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/marcos-alex/",
      instagram: "https://www.instagram.com/marcos_lex1",
    },
    // Envio direto do formulário (sem abrir aplicativo de e-mail / mailto):
    // Obtenha sua chave gratuita em https://web3forms.com inserindo seu e-mail:
    web3FormsAccessKey: "", // Cole sua chave Web3Forms aqui
    formspreeUrl: "", // Ou insira a URL do seu Formspree aqui se preferir
  },

  // ==========================================
  // 2. NAVIGATION (HEADER & FULLSCREEN MENU)
  // ==========================================
  navigation: {
    menuButtonText: "Menu",
    closeAriaLabel: "Fechar menu e voltar para a home page",
    homeAriaLabel: "Voltar para a página inicial",
    links: [
      { label: "Portfólio", href: "/portfolio" },
      { label: "Sobre", href: "/#about" },
      { label: "Contato", href: "/#contact" },
    ],
  },

  // ==========================================
  // 3. HOMEPAGE (src/pages/Index.tsx)
  // ==========================================
  home: {
    // Top Hero Section
    hero: {
      badge: "FILMMAKER & FOTÓGRAFO",
      headingLine1: "Marcos Alex",
      headingLine2: "", // Optional 2nd animated line
      ctaButton: "Portfólio",
      ctaHref: "/portfolio",
    },

    // Selected Work / Portfolio Slider section
    portfolioSection: {
      badge: "Produções Selecionadas",
      title: "Portfólio",
      viewAllButton: "Ver todos",
      viewAllHref: "/portfolio",
      emptyState: "Nenhum projeto no portfólio no momento.",
    },

    // About Marcos Alex & Storytelling features
    aboutSection: {
      badge: "SOBRE MIM",
      title: "Marcos Alex",
      carouselImages: [
        { alt: "Marcos Alex fotografando durante um evento corporativo" },
        { alt: "Marcos Alex capturando fotografia ao ar livre" },
        { alt: "Marcos Alex operando uma câmera de cinema profissional" },
        { alt: "Marcos Alex em gravação com estabilizador gimbal" },
      ],
      features: [
        {
          id: "storytelling",
          badge: "STORYTELLING",
          title: "Storytelling através das lentes",
          description:
            "Fotografar a captar momentos vai além da qualidade imediada, a história por trás é o que realmente encanta quem vê.",
        },
        {
          id: "impact",
          badge: "DIREÇÃO CRIATIVA",
          title: "Impacto",
          description:
            "Todos têm sua a marca. E toda produção é contruída a partir disso. A direção criativa é guiada pela essência de cada projeto.",
        },
        {
          id: "filmmaking",
          badge: "FILMMAKING",
          title: "Compromisso com a Qualidade",
          description:
            "Desde documentários até captação de eventos. A linguagem cinematográfica se adapta, sempre com propósito e resultado incomparável.",
        },
        {
          id: "photography",
          badge: "FOTOGRAFIA",
          title: "Momentos para serem lembrados",
          description:
            "Experiência extensa com eventos, retratos e viagens. Know-how que garante que cada momento seja capturado da melhor forma.",
        },
      ],
    },

    // Contact & Inquiry Section
    contactSection: {
      badge: "CONTATO",
      title: "Mande uma Mensagem",
      whatsappButtonText: "Whatsapp (+55 41 98421-6095)",
      form: {
        nameLabel: "Nome",
        namePlaceholder: "Seu melhor nome",
        nameError: "O nome é obrigatório",

        emailLabel: "Email",
        emailPlaceholder: "Seu melhor email",
        emailErrorEmpty: "O email é obrigatório",
        emailErrorInvalid: "Por favor, insira um email válido",

        projectTypeLabel: "Tipo de projeto",
        projectTypePlaceholder: "Eventos, vídeos, fotografia, criação de conteúdo ou outros.",

        messageLabel: "Mensagem",
        messagePlaceholder: "Conte mais sobre seu projeto",
        messageError: "A mensagem é obrigatória",

        submitButton: "Enviar",
        submittingButton: "Enviando...",
        successTitle: "Mensagem enviada!",
        successDescription:
          "Obrigado pela sua mensagem, logo mais irei lhe retornar!",
        resetButton: "Mandar outra mensagem",
      },
    },
  },

  // ==========================================
  // 4. PORTFOLIO PAGES (Portfolio.tsx & Detail)
  // ==========================================
  portfolioPage: {
    badge: "Projetos",
    title: "Projetos de sucesso",
    description: "Capturando momentos que conectam e encantam o público.",
    emptyTitle: "Nenhum projeto ainda",
    emptyDescription: "Os projetos aparecerão aqui quando forem adicionados.",
    errorMessage: "Erro ao carregar o portfólio. Por favor, tente novamente mais tarde.",
    detail: {
      backButton: "Voltar ao Portfólio",
      clientLabel: "Cliente",
      roleLabel: "Função",
      yearLabel: "Ano",
      servicesLabel: "Serviços",
      aboutHeading: "Sobre o Projeto",
      videosTab: "Vídeos",
      photosTab: "Fotografia",
      emptyMedia: "Nenhuma mídia adicionada a este projeto ainda.",
    },
  },

  // ==========================================
  // 5. FOOTER (Footer.tsx)
  // ==========================================
  footer: {
    brandName: "Marcos Alex",
    tagline: "Storytelling com propósito e resultado.",
    exploreHeading: "Explorar",
    connectHeading: "Contato",
    portfolioLinkLabel: "Portfólio",
    email: "marcosalexov@gmail.com",
    location: "CwB/PR - Brasil",
    copyrightSuffix: "Todos os direitos reservados.",
    signature: "Produzido com intenção e propósito",
  },

  // ==========================================
  // 7. NOT FOUND (404 Page)
  // ==========================================
  notFound: {
    title: "404",
    subtitle: "Ops! Página não encontrada",
    returnHomeButton: "Voltar para o início",
  },
} as const;

export type SiteContent = typeof siteContent;
export default siteContent;

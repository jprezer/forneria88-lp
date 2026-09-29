export default {
  preset: "warm",

  brand: {
    name: "Forneria 88",
    shortName: "88",
    tagline: "Pizza de longa fermentação, feita com tempo e ingredientes selecionados.",
    logo: "/assets/forneria88-logo.jpg",
    logoAlt: "Logo da Forneria 88",
  },

  seo: {
    title: "Forneria 88 | Pizza de longa fermentação em Araucária",
    description:
      "Forneria 88 em Araucária: pizzas de longa fermentação, ingredientes selecionados e uma experiência feita para dividir.",
    keywords: [
      "pizzaria em Araucária",
      "pizza em Araucária",
      "pizza longa fermentação",
      "Forneria 88",
      "pizzaria no Centro de Araucária",
    ],
    canonical: "https://forneria88-lp.vercel.app/",
    locale: "pt_BR",
    schemaType: "Restaurant",
  },

  announcement: {
    label: "Araucária · Centro Comercial Portal das Araucárias",
    actionLabel: "Pedir pelo WhatsApp",
  },

  contact: {
    primaryLabel: "Pedir em Araucária",
    footerPrimaryLabel: "Falar com a Forneria",
    primaryUrl: "https://wa.me/5541984980088?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido.",
    phone: "+5541984980088",
    instagramLabel: "Ver Instagram",
    socialLabel: "Instagram",
    instagramUrl: "https://www.instagram.com/forneria88/",
    mapsUrl: "https://share.google/xTdN8a9CvfAxoCHjX",
  },

  navigation: [
    { label: "A casa", href: "#servicos" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Como chegar", href: "#visite" },
  ],

  hero: {
    kicker: "Pizza de longa fermentação",
    title: ["A massa tem", "seu próprio", "tempo."],
    accentLine: -1,
    description:
      "Ingredientes selecionados, forno aceso e uma pizza feita com calma — para virar o melhor momento da noite.",
    image: "/assets/forneria88-fachada.jpg",
    imageAlt: "Fachada da Forneria 88 em Araucária",
    imagePosition: "58% center",
    proofLabel: "Araucária",
    proofValue: "Terça a domingo · 18h às 22h",
    scrollLabel: "Conheça a Forneria",
  },

  statement: {
    label: "O ingrediente que não se apressa",
    text: "Longa fermentação não é detalhe: é o tempo que dá leveza à massa, aroma ao forno e vontade de dividir mais uma fatia.",
    accent: "mais uma fatia.",
  },

  services: {
    title: "Feita para quem repara no sabor.",
    description:
      "A Forneria 88 transforma uma noite comum em mesa cheia: técnica na massa, ingredientes escolhidos e uma casa que convida a ficar.",
    items: [
      {
        title: "Longa fermentação",
        description:
          "Uma massa conduzida com tempo, para chegar leve, aromática e com a textura que começa pela borda.",
        detail: "Tempo · técnica · leveza",
      },
      {
        title: "Ingredientes selecionados",
        description:
          "Sabores pensados para valorizar cada combinação, do primeiro corte à última fatia.",
        detail: "Pizza artesanal",
      },
      {
        title: "Noite na Forneria",
        description:
          "Uma casa em Araucária para reunir gente, pedir uma boa pizza e deixar a conversa render.",
        detail: "Terça a domingo · 18h às 22h",
      },
    ],
  },

  gallery: {
    label: "Forno, massa e mesa",
    title: "A experiência começa antes da primeira fatia.",
    items: [
      {
        image: "/assets/forneria88-forno.jpg",
        alt: "Forno da Forneria 88 iluminado à noite",
        caption: "Forno aceso",
      },
      {
        image: "/assets/forneria88-pizza.jpg",
        alt: "Pizza artesanal da Forneria 88",
        caption: "Feita na casa",
      },
      {
        image: "/assets/forneria88-fachada.jpg",
        alt: "Entrada da Forneria 88 em Araucária",
        caption: "Araucária",
      },
    ],
  },

  reviews: {
    label: "Avaliações no Google",
    title: "Uma pizzaria que Araucária recomenda.",
    rating: "4,6",
    total: "130 avaliações no Google",
    sourceLabel: "Ver avaliações no Google Maps",
    items: [
      {
        quote:
          "Esta pizzaria é sensacional: produtos feitos com alta qualidade, rápidos, preço justo e ambiente top. A embalagem de entrega da pizza também é térmica.",
        author: "Pedro Alexandre de Salles",
        score: "5/5 no Google",
      },
    ],
  },

  location: {
    label: "Venha para a Forneria",
    title: "No Centro de Araucária, perto da sua fome.",
    description:
      "Encontre a Forneria 88 no Centro Comercial Portal das Araucárias. Uma boa pizza, um lugar gostoso e a noite bem aproveitada.",
    actionLabel: "Abrir no Google Maps",
    addressLines: [
      "Av. Dr. Vítor do Amaral, 1398",
      "Centro · Araucária — PR",
    ],
    address: {
      street: "Av. Dr. Vítor do Amaral, 1398",
      city: "Araucária",
      region: "PR",
      postalCode: "83702-000",
      country: "BR",
    },
    hours: [
      "Terça a domingo · 18h às 22h",
      "Segunda-feira · fechado",
    ],
    openingHours: [
      {
        days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "18:00",
        closes: "22:00",
      },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps?q=Av.+Dr.+V%C3%ADtor+do+Amaral,+1398,+Arauc%C3%A1ria,+PR&output=embed",
  },

  theme: {
    accent: "oklch(70% 0.09 83)",
    accentStrong: "oklch(78% 0.08 83)",
    ink: "oklch(17% 0.012 250)",
    paper: "oklch(95% 0.012 85)",
    displayFont: "'Cormorant Garamond', Georgia, serif",
    bodyFont: "Manrope, Arial, sans-serif",
  },
};

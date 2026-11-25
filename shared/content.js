export const instagram = "https://www.instagram.com/hypnodyssee.biennaitre/";
export const services = [
  {
    id: "bain",
    prices: [["Bain bébé", 80]],
    title: "Le bain thérapeutique bébé",
    image: "bain-therapeutique",
    imageWidth: 1400,
    imageHeight: 1398,
    imageAlt: "Un nouveau-né repose dans les mains d’une adulte pendant le bain.",
    meta: "80 € · environ 1 h 30",
    short: "Un instant suspendu, un cadeau de bienvenue.",
    text: "Un instant suspendu pour accueillir les émotions et offrir à bébé un moment de douceur. À Rivery, Hélène vous accueille au sein de l’association pour vivre un Thalasso Bain Bébé®, après avoir été formée à l’École du Bien naître de Sonia Krief, créatrice de cette approche. Un véritable moment de douceur, d’écoute et de détente profonde, proposé dans les premières semaines de vie de votre bébé.",
    detail:
      "Idéalement réalisé au cours des 21 premiers jours de vie, le bain peut être proposé jusqu’à l’âge d’un mois. Pour les bébés prématurés, l’âge corrigé est pris en compte. Le bain thérapeutique est également disponible en carte cadeau, pour offrir un moment unique, riche en émotions. Pour prolonger ce moment, un reportage photo avec Les Photos de Cécile est possible en option (+ 100 €). Dans le Santerre, Émilie propose également des bains thérapeutiques à domicile, autour de Rosières-en-Santerre, Roye et Péronne. Le matériel nécessaire est fourni pour chaque prestation.",
  },
  {
    id: "allaitement",
    prices: [["Rendez-vous ponctuel", 40], ["Parcours de trois rencontres", 100]],
    title: "L’accompagnement à l’allaitement",
    image: "allaitement",
    imageWidth: 966,
    imageHeight: 1200,
    imageAlt: "Un nouveau-né tète au sein.",
    meta: "40 € ou 100 € · à domicile ou à Rivery",
    short: "Un accompagnement avant et après la naissance.",
    text: "Vous souhaitez préparer votre allaitement pendant la grossesse ou être accompagnée lors des premiers jours avec bébé ? Hélène vous propose un accompagnement personnalisé, à domicile ou au sein de l’association à Rivery, adapté à votre histoire, vos envies et vos besoins. Formée à l’École du Bien Naître auprès de Carole Hervé, spécialiste de l’allaitement maternel, Hélène vous accompagne avec des connaissances actualisées et une approche bienveillante.",
    detail:
      "Un rendez-vous ponctuel (40 €) ou un parcours de trois rencontres (100 €) pour vous accompagner à chaque étape :",
    steps: [
      "Se préparer : comprendre l’allaitement et anticiper les premiers jours.",
      "Le retour à la maison : trouver vos repères et accompagner la mise en place de l’allaitement.",
      "Le suivi et les ajustements : répondre à vos questions et adapter l’accompagnement à l’évolution de vos besoins.",
    ],
    note: "Trois rencontres pour avancer pas à pas, poser des bases solides et vivre votre allaitement avec confiance et sérénité. Cette formation a bénéficié du soutien financier de la Région Hauts-de-France.",
  },
  {
    id: "portage",
    prices: [["Atelier par participant", 6]],
    title: "La danse en portage",
    image: "portage",
    imageWidth: 900,
    imageHeight: 600,
    imageAlt: "Une mère danse avec son bébé en écharpe.",
    meta: "6 € par participant · environ 1 h",
    short: "Quelques pas en musique, votre bébé contre vous.",
    text: "Estelle invite les parents et leurs enfants de 0 à 2 ans à partager un moment de complicité en musique. Une parenthèse joyeuse pour bouger, danser et profiter ensemble. Aucun besoin de savoir danser ! Pas de chorégraphie à apprendre, chacun évolue librement, à son rythme et selon ses envies. L’essentiel est de partager ce moment avec son bébé.",
    detail:
      "Venez avec votre écharpe de portage ou un porte-bébé physiologique adapté. Une écharpe peut être prêtée sur demande, selon les disponibilités.",
  },
  {
    id: "massage",
    prices: [["Massage à domicile", 55]],
    title: "Le massage bébé",
    image: "massage",
    imageWidth: 900,
    imageHeight: 600,
    imageAlt: "Des mains massent le pied d’un bébé allongé.",
    meta: "55 € · 1 h",
    short: "Découvrir chez vous les gestes d’un massage doux.",
    text: "Rislaine vient à domicile pour échanger sur les besoins de votre enfant, puis réaliser un massage. Vous pouvez découvrir les gestes avec elle et les reprendre ensuite avec votre bébé.",
    detail: "Le matériel et l’huile de massage sont fournis.",
  },
];
export const childcareRates = [
  { period: "Jour · 7 h–19 h", hourly: 12, packagePrice: 45, hours: 4 },
  { period: "Soirée · 19 h–23 h", hourly: 13, packagePrice: 50, hours: 4 },
  { period: "Nuit · 23 h–7 h", hourly: 15, packagePrice: 110, hours: 8 },
];

export const subjects = [
  ...services.map((s) => s.title),
  "Les Cafés Bien naître",
  "Le réseau baby-sitting",
  "Autre demande",
];
export const gallery = [
  ["rencontres", "Rencontres", "Deux bébés sur un tapis d’éveil.", false],
  [
    "accompagner",
    "Accompagner chaque famille",
    "Deux nouveau-nés emmaillotés côte à côte.",
    false,
  ],
  ["lacher-prise", "Lâcher-prise", "Un nouveau-né repose dans les mains d’une adulte pendant le bain.", false],
  [
    "apres-bain",
    "Respecter chaque rythme",
    "Après le bain, un nouveau-né repose dans une serviette grise.",
    false,
  ],
  ["apaisement", "Apaisement", "Les pieds d’un bébé dépassent d’un lange vert dans l’eau.", false],
  ["soutien", "Soutien", "Des mains soutiennent les pieds d’un bébé.", false],
  ["confiance", "Confiance", "La main d’un bébé agrippe un doigt adulte, en noir et blanc.", false],
  [
    "douceur",
    "Douceur",
    "Une adulte se penche au-dessus d’un nouveau-né dans le bain.",
    false,
  ],
];

export const minimumMessageLength = 10;

export function isMessageLongEnough(message) {
  return Array.from(message.trim()).length >= minimumMessageLength;
}

export function isValidContactPhone(phone) {
  if (typeof phone !== "string" || phone.length > 32) return false;
  const number = phone.trim();
  return (
    !number ||
    (/^\+?[\d ().-]+$/.test(number) &&
      /^\d{7,15}$/.test(number.replace(/\D/g, "")))
  );
}

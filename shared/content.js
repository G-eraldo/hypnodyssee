export const instagram = "https://www.instagram.com/hypnodyssee.biennaitre/";
export const services = [
  {
    id: "bain",
    title: "Le bain thérapeutique bébé",
    image: "premier-bain",
    meta: "80 € · environ 1 h 30",
    short: "Un instant suspendu, un cadeau de bienvenue.",
    text: "Un instant suspendu pour accueillir les émotions et offrir à bébé un moment de douceur. À Rivery, Hélène vous accueille au sein de l’association pour vivre un Thalasso Bain Bébé®, après avoir été formée à l’École du Bien naître de Sonia Krief, créatrice de cette approche. Un véritable moment de douceur, d’écoute et de détente profonde, proposé dans les premières semaines de vie de votre bébé.",
    detail:
      "Idéalement réalisé au cours des 21 premiers jours de vie, le bain peut être proposé jusqu’à l’âge d’un mois. Pour les bébés prématurés, l’âge corrigé est pris en compte. Le bain thérapeutique est également disponible en carte cadeau, pour offrir un moment unique, riche en émotions. Pour prolonger ce moment, un reportage photo avec Les Photos de Cécile est possible en option (+ 100 €). Dans le Santerre, Émilie propose également des bains thérapeutiques à domicile, autour de Rosières-en-Santerre, Roye et Péronne. Le matériel nécessaire est fourni pour chaque prestation.",
  },
  {
    id: "allaitement",
    title: "L’accompagnement à l’allaitement",
    image: "allaitement",
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
    title: "La danse en portage",
    image: "portage",
    meta: "6 € par participant · environ 1 h",
    short: "Quelques pas en musique, votre bébé contre vous.",
    text: "Estelle invite les parents et leurs enfants de 0 à 2 ans à partager un moment de complicité en musique. Une parenthèse joyeuse pour bouger, danser et profiter ensemble. Aucun besoin de savoir danser ! Pas de chorégraphie à apprendre, chacun évolue librement, à son rythme et selon ses envies. L’essentiel est de partager ce moment avec son bébé.",
    detail:
      "Venez avec votre écharpe de portage ou un porte-bébé physiologique adapté. Une écharpe peut être prêtée sur demande, selon les disponibilités.",
  },
  {
    id: "massage",
    title: "Le massage bébé",
    image: "massage",
    meta: "55 € · 1 h",
    short: "Découvrir chez vous les gestes d’un massage doux.",
    text: "Rislaine vient à domicile pour échanger sur les besoins de votre enfant, puis réaliser un massage. Vous pouvez découvrir les gestes avec elle et les reprendre ensuite avec votre bébé.",
    detail: "Le matériel et l’huile de massage sont fournis.",
  },
];
export const subjects = [
  ...services.map((s) => s.title),
  "Les Cafés Bien naître",
  "Le réseau baby-sitting",
  "Autre demande",
];
export const gallery = [
  ["bain-noir-blanc", "Les mains qui accueillent", "Une adulte soutient la tête du nouveau-né dans le bain, en noir et blanc."],
  ["premier-bain", "Au creux du bain", "Dans l’eau, un bébé endormi serre la main qui le soutient."],
  ["apres-bain", "Dans la serviette", "Après le bain, un nouveau-né repose dans une serviette grise."],
  ["petite-main", "La petite main", "Gros plan sur un bébé qui porte ses doigts à sa bouche."],
  ["enveloppement", "L’enveloppement", "Un nouveau-né enveloppé dans un lange, photographié en noir et blanc."],
  ["flotter", "Un instant suspendu", "Un bébé avec une tétine se repose dans l’eau."],
  ["souvenir", "Le souvenir du bain", "Les mains d’une adulte entourent le visage du bébé pendant le bain."],
  ["sortie", "La sortie du lange", "Une adulte accompagne le bébé à la sortie du lange."],
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

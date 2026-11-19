export const instagram = "https://www.instagram.com/hypnodyssee.biennaitre/";
export const services = [
  {
    id: "bain",
    title: "Le bain thérapeutique",
    image: "premier-bain",
    meta: "80 € · environ 1 h 30",
    short: "Un premier bain au rythme de votre nouveau-né.",
    text: "À Rivery, Hélène vous accueille pour un Thalasso Bain Bébé® inspiré de l’approche de Sonia Krief. Dans le Santerre, Émilie se déplace à domicile autour de Rosières-en-Santerre, Roye et Péronne. Le matériel est fourni.",
    detail:
      "L’association propose ce bain dans les premières semaines. À Rivery, un reportage avec Les photos de Cécile est possible en option (+ 100 €).",
  },
  {
    id: "allaitement",
    title: "L’allaitement",
    image: "allaitement",
    meta: "40 € ou 100 € · à domicile",
    short: "Un accompagnement avant et après la naissance.",
    text: "Vous souhaitez préparer l’allaitement ou poser vos questions au retour à la maison ? Hélène vous accompagne à domicile, en tenant compte de votre quotidien.",
    detail:
      "Deux rendez-vous à 40 € ou un parcours de trois rendez-vous à 100 € pour préparer la naissance, accompagner le retour à la maison et ajuster le suivi.",
  },
  {
    id: "portage",
    title: "La danse en portage",
    image: "portage",
    meta: "6 € par participant · environ 1 h",
    short: "Quelques pas en musique, votre bébé contre vous.",
    text: "Estelle invite les parents et leurs enfants de 0 à 2 ans à danser ensemble. Chacun suit la musique à son rythme, y compris pour une toute première séance.",
    detail:
      "Venez avec une écharpe ou un porte-bébé physiologique adapté. Une écharpe peut être prêtée sur demande, selon les disponibilités.",
  },
  {
    id: "massage",
    title: "Le massage bébé",
    image: "massage",
    meta: "55 € · 1 h à 1 h 15",
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

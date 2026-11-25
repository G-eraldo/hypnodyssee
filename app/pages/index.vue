<script setup>
definePageMeta({})
import { services, instagram } from '#shared/content';
useSeoMeta({ title: 'Accompagnement périnatal à Rivery, près d’Amiens', description: 'Bain bébé, allaitement, Cafés Bien naître et ateliers pour les futurs et jeunes parents à Rivery, près d’Amiens.' })
const avis = [
  { auteur: 'Happy Pediatry', extrait: 'Un grand merci pour ce moment merveilleux, aussi bien pour bébé que pour les parents.' },
  { auteur: 'Emeline Lemaire', extrait: 'Un grand merci pour ce moment magnifique et inoubliable. Merci pour votre douceur autour de ma princesse.' },
  { auteur: 'Léa R', extrait: 'Un bain qui restera un souvenir éternel. Un moment de douceur, de sérénité et d’émotion que je garderai précieusement en mémoire. Merci encore !' }
]
const googleProfile = 'https://share.google/BpcWvy3vg8UkgJUzW'
</script>
<template>
  <div>
    <section class="hero">
      <div class="hero-grid shell">
        <div class="hero-copy">
          <p class="eyebrow"><i></i> Association périnatale à but non lucratif (loi 1901)</p>
          <h1>Hypn’Odyssée <span class="signature">Bien naître</span> <span class="hero-local">Accompagnement périnatal à Rivery, près d’Amiens</span></h1>
          <h2>Accompagner les premiers liens,<br>soutenir les premiers pas.</h2>
          <p class="intro">À Rivery, près d’Amiens, Hypn’Odyssée Bien Naître accompagne les familles tout au long des
            1000 premiers jours, de la grossesse aux deux ans de l’enfant. Bain thérapeutique bébé, accompagnement à
            l’allaitement, ateliers parents-bébés, Cafés Bien Naître… Des moments d’écoute, de douceur et de partage
            pour vivre sereinement les premiers pas de la parentalité.</p>
          <div class="actions">
            <NuxtLink class="pill" to="/prestations">Découvrir les prestations</NuxtLink>
            <NuxtLink class="line-link" to="/a-propos">L’association</NuxtLink>
          </div>
        </div>
        <figure class="album">
          <div class="arch"><img src="/images/douceur.webp" srcset="/images/douceur-520.webp 520w, /images/douceur.webp 1067w" sizes="(max-width: 700px) 67vw, 38vw" fetchpriority="high" width="1067" height="1600"
              alt="Une adulte se penche au-dessus d’un nouveau-né dans le bain"></div>
          <div class="snapshot"><img src="/images/accueil-allaitement.webp" srcset="/images/accueil-allaitement-240.webp 240w, /images/accueil-allaitement.webp 560w" sizes="(max-width: 700px) 26vw, 13vw" width="560" height="559"
              alt="Un bébé tète au sein"><span>Accompagner en confiance</span></div>
          <figcaption>Rivery <b>✧</b> Somme</figcaption>
        </figure>
      </div>
    </section>
    <div class="ribbon">
      <div class="shell">
        <a href="#cafes">Café Bien naître</a><b aria-hidden="true">✧</b>
        <NuxtLink to="/prestations#bain">Thérapeutique Bain bébé</NuxtLink><b aria-hidden="true">✧</b>
        <NuxtLink to="/prestations#allaitement">Allaitement</NuxtLink><b aria-hidden="true">✧</b>
        <NuxtLink to="/prestations#relais">Relai parental</NuxtLink>
      </div>
    </div>
    <section class="section shell">
      <p class="eyebrow"><i></i> Les prestations</p>
      <h2>Des ateliers pour <em>parents et bébés.</em></h2>
      <div class="cards">
        <NuxtLink v-for="s in services" :key="s.id" :to="'/prestations#' + s.id" class="card"><img loading="lazy"
            :src="'/images/' + s.image + '.webp'" :alt="s.imageAlt" :width="s.imageWidth" :height="s.imageHeight"
            :srcset="`/images/${s.image}-400.webp 400w, /images/${s.image}.webp ${s.imageWidth}w`" sizes="(max-width: 860px) 44vw, 19rem">
          <h3>{{ s.title }}</h3>
          <p>{{ s.short }}</p>
        </NuxtLink>
      </div>
    </section>
    <section id="cafes" class="cafe">
      <div class="shell feature"><img loading="lazy" src="/images/cafe.webp" srcset="/images/cafe-520.webp 520w, /images/cafe.webp 1000w" sizes="(max-width: 700px) 91vw, 41vw" width="1000" height="667"
          alt="Des parents échangent autour d’une table">
        <div>
          <p class="eyebrow">Amiens &amp; alentours</p>
          <h2>Les Cafés<br><em>Bien naître.</em></h2>
          <p>Des rencontres pour les parents, tout simplement. Chaque premier jeudi du mois, retrouvez-nous à Amiens et
            aux alentours pour un moment convivial autour d’un thème différent à chaque rencontre.</p>
          <p>Un lieu, un thème, une pause gourmande… L’occasion d’échanger librement, de partager vos expériences et de
            rencontrer d’autres parents, dans une ambiance chaleureuse et bienveillante.</p>
          <p>Futurs et jeunes parents, vos bébés de la naissance à 2 ans sont les bienvenus !</p>
          <NuxtLink class="pill" :to="{ path: '/contact', query: { sujet: 'Les Cafés Bien naître' } }">Demander la prochaine
            date</NuxtLink>
        </div>
      </div>
    </section>
    <section class="shell section">
      <div class="panel">
        <p class="eyebrow"><i></i> Maison Pour Tous de Rivery</p>
        <h2>Les rendez-vous <em>Bien Naître.</em></h2>
        <p>Chaque troisième mardi du mois (jour à confirmer), retrouvez-nous à la Maison Pour Tous de Rivery pour un
          temps collectif autour de la parentalité, avec un thème différent à chaque rencontre.</p>
        <p>Des moments de découverte, de partage et d’échange, animés par nos professionnelles.</p>
        <p>Retrouvez toute notre programmation et les prochaines dates
          <a class="line-link" :href="instagram" target="_blank" rel="noopener noreferrer">sur Instagram</a> !</p>
      </div>
    </section>
    <section class="shell section relay">
      <div>
        <p class="eyebrow"><i></i> Amiens et alentours</p>
        <h2>Besoin d’un <em>relais ?</em></h2>
      </div>
      <div>
        <p>Le réseau baby-sitting met les familles en relation avec des étudiantes sages-femmes disponibles pour garder
          leurs enfants.</p>
        <NuxtLink class="line-link" to="/prestations#relais">Voir les tarifs de garde</NuxtLink>
      </div>
    </section>
    <section id="avis" class="reviews" aria-labelledby="avis-titre">
      <div class="shell section">
        <p class="eyebrow"><i></i> Avis Google</p>
        <h2 id="avis-titre">Les mots <em>des familles.</em></h2>
        <p class="review-score"><strong>5,0 / 5</strong> <span aria-hidden="true">★★★★★</span> · 11 avis Google</p>
        <div class="review-grid">
          <figure v-for="avisParent in avis" :key="avisParent.auteur">
            <blockquote>« {{ avisParent.extrait }} »</blockquote>
            <figcaption>{{ avisParent.auteur }}</figcaption>
          </figure>
        </div>
        <a class="pill" :href="googleProfile" target="_blank" rel="noopener noreferrer">Donner mon avis sur Google</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-local { display: block; font: 500 1rem/1.4 var(--ui); letter-spacing: normal; margin-top: 1rem }
.reviews { background: #f3e6df }
.review-score { margin: 1rem 0 2rem; font: 1rem/1.5 var(--ui) }
.review-score strong { font-size: 1.35rem }
.review-score span { color: var(--wine); letter-spacing: .08em }
.review-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 2rem; margin-bottom: 2rem }
.review-grid figure { margin: 0; border-top: 1px solid var(--rule); padding-top: 1rem }
.review-grid blockquote { font: 1.15rem/1.5 var(--body); letter-spacing: normal; margin: 0 0 .8rem }
.review-grid figcaption { font: .85rem var(--ui) }
@media (max-width: 700px) { .review-grid { grid-template-columns: 1fr; gap: 1.25rem } }
</style>

<script setup>
definePageMeta({})
import { services } from '#shared/content';
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
          <p class="eyebrow"><i></i> Association périnatale</p>
          <h1>Hypn’Odyssée<span class="signature">Bien naître</span></h1>
          <h2>Accompagner les premiers liens,<br>soutenir les premiers pas.</h2>
          <p class="intro">À Rivery, près d’Amiens, notre association accompagne les familles de la grossesse aux deux ans de l’enfant.
            Retrouvez Hélène pour un bain bébé, un accompagnement à l’allaitement ou un Café Bien naître.</p>
          <div class="actions">
            <NuxtLink class="pill" to="/prestations">Découvrir les prestations</NuxtLink>
            <NuxtLink class="line-link" to="/a-propos">L’association</NuxtLink>
          </div>
        </div>
        <figure class="album">
          <div class="arch"><img src="/images/premier-bain.webp" fetchpriority="high" width="1078" height="1424"
              alt="Un nouveau-né tient la main qui le soutient dans le bain"></div>
          <div class="snapshot"><img src="/images/bain-noir-blanc.webp" alt="" width="165" height="185"><span>Le premier
              bain</span></div>
          <figcaption>Rivery <b>✧</b> Somme</figcaption>
        </figure>
      </div>
    </section>
    <div class="ribbon">
      <div class="shell">
        <a href="#cafes">Café Bien naître</a><b aria-hidden="true">✧</b>
        <NuxtLink to="/prestations#bain">Bain bébé</NuxtLink><b aria-hidden="true">✧</b>
        <NuxtLink to="/prestations#allaitement">Allaitement</NuxtLink><b aria-hidden="true">✧</b>
        <NuxtLink to="/prestations#relais">Réseau de garderie</NuxtLink>
      </div>
    </div>
    <section class="section shell">
      <p class="eyebrow"><i></i> Les prestations</p>
      <h2>Des ateliers pour <em>parents et bébés.</em></h2>
      <div class="cards">
        <NuxtLink v-for="s in services" :key="s.id" :to="'/prestations#' + s.id" class="card"><img loading="lazy"
            :src="'/images/' + s.image + '.webp'" alt="">
          <h3>{{ s.title }}</h3>
          <p>{{ s.short }}</p>
        </NuxtLink>
      </div>
    </section>
    <section id="cafes" class="cafe">
      <div class="shell feature"><img loading="lazy" src="/images/cafe.webp"
          alt="Des parents échangent autour d’une table">
        <div>
          <p class="eyebrow">Rivery &amp; Amiens</p>
          <h2>Les Cafés<br><em>Bien naître.</em></h2>
          <p>Un thème, une pause gourmande et le temps de discuter entre parents. Allaitement, retour à la maison,
            petits bonheurs du quotidien… Vos bébés sont les bienvenus jusqu’à deux ans.</p>
          <NuxtLink class="pill" :to="{ path: '/contact', query: { sujet: 'Les Cafés Bien naître' } }">Demander la prochaine
            date</NuxtLink>
        </div>
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

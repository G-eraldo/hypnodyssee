<script setup>
definePageMeta({})
import { services } from '#shared/content';
useSeoMeta({ title: 'Accompagnement périnatal à Rivery et Amiens', description: 'Bain bébé, allaitement, Cafés Bien naître et ateliers pour les futurs et jeunes parents à Rivery, près d’Amiens.' })
</script>
<template>
  <div>
    <section class="hero">
      <div class="hero-grid shell">
        <div class="hero-copy">
          <p class="eyebrow"><i></i> Association périnatale</p>
          <h1>Hypn’Odyssée<span class="signature">Bien naître</span></h1>
          <h2>Accompagner les premiers liens,<br>soutenir les premiers pas.</h2>
          <p class="intro">À Rivery, près d’Amiens, des rencontres et des gestes pour vous accompagner de la grossesse
            aux deux ans de votre enfant.</p>
          <div class="actions">
            <NuxtLink class="pill" to="/prestations">Découvrir les prestations <span>→</span></NuxtLink>
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
      <div class="shell"><span>Autour de la naissance</span><b>✧</b><a href="#cafes">Cafés Bien naître</a><b>✧</b>
        <NuxtLink to="/prestations#bain">Bain bébé</NuxtLink><b>✧</b>
        <NuxtLink to="/prestations#allaitement">Allaitement</NuxtLink>
      </div>
    </div>
    <section class="section shell">
      <p class="eyebrow"><i></i> Les prestations</p>
      <h2>Au rythme de <em>votre famille.</em></h2>
      <div class="cards">
        <NuxtLink v-for="s in services" :key="s.id" :to="'/prestations#' + s.id" class="card"><img loading="lazy"
            :src="'/images/' + s.image + '.webp'" alt="">
          <h3>{{ s.title }} <span>↗</span></h3>
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
            date <span>→</span></NuxtLink>
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
        <NuxtLink class="line-link" to="/prestations#relais">Voir les tarifs de garde →</NuxtLink>
      </div>
    </section>
  </div>
</template>

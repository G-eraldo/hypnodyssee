<script setup>
import { instagram } from '#shared/content'
const links = [['/', 'Accueil'], ['/prestations', 'Prestations'], ['/galerie', 'Galerie'], ['/a-propos', 'À propos']]
const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })
useSeoMeta({ ogImage: '/images/premier-bain.webp', twitterCard: 'summary_large_image' })
</script>
<template>
  <a class="skip" href="#contenu">Aller au contenu</a>
  <header class="site-head" @keydown.esc="open = false">
    <div class="bar shell">
      <div class="brand"><a :href="instagram" aria-label="Hypn’Odyssée sur Instagram"><img src="/images/sceau.webp"
            width="54" height="54" alt=""></a>
        <NuxtLink to="/">Hypn’Odyssée<small>Bien naître</small></NuxtLink>
      </div>
      <button class="menu" :aria-expanded="open" aria-controls="nav" @click="open = !open">{{ open ? 'Fermer ×' : 'Menu
        ☰' }}</button>
      <nav id="nav" :class="{ open }" aria-label="Navigation principale">
        <NuxtLink v-for="[url, label] in links" :key="url" :to="url">{{ label }}</NuxtLink>
        <NuxtLink class="pill" to="/contact">Nous contacter <span>↗</span></NuxtLink>
      </nav>
    </div>
  </header>
  <main id="contenu">
    <NuxtPage />
  </main>
  <footer>
    <div class="shell foot">
      <div class="brand">
        <NuxtLink to="/">Hypn’Odyssée<small>Bien naître</small></NuxtLink>
      </div>
      <p>Association loi 1901<br>83 rue Thuillier Delambre, 80136 Rivery</p>
      <div><a :href="instagram">Instagram ↗</a><br>
        <NuxtLink to="/contact#informations">Informations légales et confidentialité</NuxtLink>
      </div>
    </div>
  </footer>
</template>

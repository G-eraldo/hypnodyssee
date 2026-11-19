<script setup>
import { instagram } from '#shared/content'
const links = [['/', 'Accueil'], ['/prestations', 'Prestations'], ['/galerie', 'Galerie'], ['/a-propos', 'À propos']]
const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })
useSeoMeta({
  ogImage: withSiteUrl('/images/premier-bain.webp'),
  ogImageWidth: 1078,
  ogImageHeight: 1424,
  ogImageType: 'image/webp',
  ogImageAlt: 'Un nouveau-né tient la main qui le soutient pendant son bain.',
  ogLocale: 'fr_FR'
})
useSchemaOrg([defineOrganization({
  telephone: '+33634095103',
  email: 'helene.guignant@gmail.com',
  foundingDate: '2023',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '83 rue Thuillier Delambre',
    postalCode: '80136',
    addressLocality: 'Rivery',
    addressCountry: 'FR'
  }
})])
</script>
<template>
  <a class="skip" href="#contenu">Aller au contenu</a>
  <header class="site-head" @keydown.esc="open = false">
    <div class="bar shell">
      <div class="brand"><a :href="instagram" aria-label="Hypn’Odyssée sur Instagram"><img src="/images/sceau.webp"
            width="54" height="54" alt=""></a>
        <NuxtLink to="/">Hypn’Odyssée<small>Bien naître</small></NuxtLink>
      </div>
      <button class="menu" :aria-expanded="open" aria-controls="nav" @click="open = !open"><span v-if="open">Fermer</span><span v-else>Menu</span></button>
      <nav id="nav" :class="{ open }" aria-label="Navigation principale">
        <NuxtLink v-for="[url, label] in links" :key="url" :to="url">{{ label }}</NuxtLink>
        <NuxtLink class="pill" to="/contact">Nous contacter</NuxtLink>
      </nav>
    </div>
  </header>
  <main id="contenu">
    <NuxtPage />
  </main>
  <footer>
    <div class="shell footer-content">
      <NuxtLink to="/" class="footer-brand">
        <img src="/images/sceau.webp" alt="" width="52" height="52">
        Hypn’Odyssée Bien naître
      </NuxtLink>
      <nav aria-label="Liens de pied de page" class="footer-links">
        <NuxtLink v-for="[url, label] in links" :key="url" :to="url">{{ label }}</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
        <NuxtLink to="/mentions-legales">Mentions légales</NuxtLink>
        <NuxtLink to="/confidentialite">Confidentialité</NuxtLink>
      </nav>
      <a class="social-link" :href="instagram" aria-label="Hypn’Odyssée sur Instagram">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/>
          <circle cx="17.4" cy="6.7" r="1.1" fill="currentColor" stroke="none"/>
        </svg>
      </a>
      <p>© {{ new Date().getFullYear() }} Hypn’Odyssée Bien naître, tous droits réservés —
        Site réalisé par <a href="https://lafabriqueducode.fr" target="_blank" rel="noopener noreferrer">La Fabrique du Code</a>
      </p>
    </div>
  </footer>
</template>

<script setup>
definePageMeta({})
import { subjects } from '#shared/content'
useSeoMeta({ title: 'Contact à Rivery', description: 'Contactez Hélène à Rivery pour un bain bébé, un atelier, un Café Bien naître ou une demande de baby-sitting près d’Amiens.' })
const route = useRoute()
const form = reactive({ name: '', email: '', subject: subjects.includes(route.query.sujet) ? route.query.sujet : '', message: '', website: '' })
const state = ref('')
async function send() {
  if (state.value === 'pending') return
  state.value = 'pending'
  try {
    await $fetch('/api/contact', { method: 'POST', body: form })
    state.value = 'success'
    Object.assign(form, { name: '', email: '', subject: '', message: '', website: '' })
  } catch { state.value = 'error' }
}
</script>
<template>
  <div class="shell section">
    <p class="eyebrow"><i></i> Contact</p>
    <h1>Parlons de <em>vos envies.</em></h1>
    <div class="contactgrid">
      <aside>
        <h2>Joindre Hélène</h2>
        <p>Pour organiser une rencontre, choisir un atelier ou faire appel au réseau baby-sitting.</p><a
          class="line-link" href="tel:+33634095103">06 34 09 51 03</a>
        <p>83 rue Thuillier Delambre<br>80136 Rivery</p>
      </aside>
      <form @submit.prevent="send"><label>Votre nom<input v-model="form.name" required maxlength="100"
            autocomplete="name"></label><label>Votre adresse e-mail<input v-model="form.email" required type="email"
            maxlength="254" autocomplete="email"></label><label>Votre demande<select v-model="form.subject" required>
            <option disabled value="">Choisir un sujet</option>
            <option v-for="s in subjects" :key="s">{{ s }}</option>
          </select></label><label>Votre message<textarea v-model="form.message" required rows="5"
            maxlength="3000"></textarea></label><input v-model="form.website" hidden tabindex="-1" autocomplete="off"
          aria-hidden="true"><small>Ces informations permettent à l’association de répondre à votre demande. Évitez
          d’inclure des informations médicales.</small><button class="pill" :disabled="state === 'pending'">{{
            state === 'pending' ? 'Envoi en cours…' : 'Envoyer mon message →' }}</button>
        <p role="status" aria-live="polite">{{ state === 'success' ? 'Merci, votre message a été envoyé à l’association.'
          : state === 'error' ? 'Votre message n’a pas été envoyé. Réessayez ou appelez Hélène au 06 34 09 51 03.' : '' }}
        </p>
      </form>
    </div>
    <section id="informations" class="legal">
      <h2>Informations légales et confidentialité</h2>
      <p>Ce site présente l’association loi 1901 Hypn’Odyssée Bien naître, 83 rue Thuillier Delambre, 80136 Rivery.
        Création du site par La Fabrique du Code.</p>
      <p>Le formulaire transmet votre nom, votre adresse e-mail, le sujet et votre message à l’association via Resend.
        Pour toute question concernant vos données ou pour en demander la suppression, contactez Hélène au 06 34 09 51
        03.</p>
    </section>
  </div>
</template>

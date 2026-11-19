<script setup>
definePageMeta({})
import {
  subjects,
  minimumMessageLength,
  isMessageLongEnough,
  isValidContactPhone
} from '#shared/content'
useSeoMeta({ title: 'Contacter Hélène Guignant à Rivery', description: 'Contactez Hélène à Rivery pour un bain bébé, un atelier, un Café Bien naître ou une demande de baby-sitting près d’Amiens.' })
const route = useRoute()
const form = reactive({ name: '', firstName: '', email: '', phone: '', subject: subjects.includes(route.query.sujet) ? route.query.sujet : '', message: '', website: '', privacyRead: false })
const state = ref('')
const messageField = ref()
const phoneField = ref()
let timeout

function dismissToast() {
  clearTimeout(timeout)
  state.value = ''
}

function validateFields() {
  messageField.value.setCustomValidity(isMessageLongEnough(form.message) ? '' : `Écrivez au moins ${minimumMessageLength} caractères.`)
  phoneField.value.setCustomValidity(isValidContactPhone(form.phone) ? '' : 'Vérifiez le numéro de téléphone, indicatif compris.')
}

onBeforeUnmount(() => clearTimeout(timeout))
async function send(event) {
  if (state.value === 'pending') return
  validateFields()
  if (!event.currentTarget.reportValidity()) return
  clearTimeout(timeout)
  state.value = 'pending'
  try {
    await $fetch('/api/contact', { method: 'POST', body: form })
    state.value = 'success'
    timeout = setTimeout(dismissToast, 7000)
    Object.assign(form, { name: '', firstName: '', email: '', phone: '', subject: '', message: '', website: '', privacyRead: false })
  } catch { state.value = 'error' }
}
useSchemaOrg([defineWebPage({ '@type': 'ContactPage' })])
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
        <p><a class="line-link" href="mailto:helene.guignant@gmail.com">helene.guignant@gmail.com</a></p>
        <p>83 rue Thuillier Delambre<br>80136 Rivery</p>
      </aside>
      <form @submit.prevent="send">
        <div class="flex flex-row gap-4">
          <label class="min-w-0 flex-1">Votre nom
            <input v-model="form.name" required maxlength="100" autocomplete="family-name">
          </label>
          <label class="min-w-0 flex-1">Votre prénom
            <input v-model="form.firstName" required maxlength="100" autocomplete="given-name">
          </label>
        </div>
        <label>Votre adresse e-mail<input v-model="form.email" required type="email"
            maxlength="254" autocomplete="email"></label><label>Votre téléphone (facultatif)
            <input ref="phoneField" v-model="form.phone" type="tel" maxlength="32" autocomplete="tel" @input="validateFields">
          </label><label>Votre demande<select class="subject-select" v-model="form.subject" required>
            <option disabled value="">Choisir un sujet</option>
            <option v-for="s in subjects" :key="s">{{ s }}</option>
          </select></label><label>Votre message ({{ minimumMessageLength }} caractères minimum)<textarea ref="messageField" v-model="form.message" :minlength="minimumMessageLength" @input="validateFields" required rows="5"
            maxlength="3000"></textarea></label><input v-model="form.website" hidden tabindex="-1" autocomplete="off"
          aria-hidden="true"><small>Seul le téléphone est facultatif. Hélène utilise ces informations pour répondre à votre demande. Évitez d’inclure des informations médicales.</small>
        <div class="privacy-check">
          <input id="privacy-read" v-model="form.privacyRead" type="checkbox" required>
          <div><label for="privacy-read">J’ai pris connaissance de la politique de confidentialité.</label>
            <NuxtLink to="/confidentialite" target="_blank" rel="noopener noreferrer">Lire la politique de confidentialité (nouvel onglet)</NuxtLink>
          </div>
        </div>
        <button class="pill" :disabled="state === 'pending'">{{
            state === 'pending' ? 'Envoi en cours…' : 'Envoyer mon message' }}</button>
      </form>
    </div>
    <Transition name="toast">
      <div v-if="state === 'success' || state === 'error'" class="contact-toast" :class="state">
        <div :role="state === 'error' ? 'alert' : 'status'">
          <strong>{{ state === 'success' ? 'Message envoyé' : 'Échec de l’envoi' }}</strong>
          <p v-if="state === 'success'">Merci, votre demande a été transmise à Hélène.</p>
          <p v-else>Votre saisie est conservée. Réessayez ou appelez Hélène au <a href="tel:+33634095103">06 34 09 51 03</a>.</p>
        </div>
        <button type="button" aria-label="Fermer la notification" @click="dismissToast">×</button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.subject-select {
  appearance: none;
  padding-inline-end: 2.6rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23382b32' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m3 6 5 5 5-5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right .8rem center;
  background-size: 1rem;
}
@media (forced-colors: active) {
  .subject-select { appearance: auto; background-image: none }
}
.contact-toast {
  position: fixed;
  z-index: 20;
  right: max(1rem, env(safe-area-inset-right));
  bottom: max(1rem, env(safe-area-inset-bottom));
  width: min(25rem, calc(100% - 2rem));
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  gap: .75rem;
  border: 1px solid var(--rule);
  border-left: .3rem solid #43715c;
  border-radius: .75rem;
  background: var(--paper);
  box-shadow: 0 .5rem 2rem #35213029;
  font: .94rem/1.5 var(--ui);
}
.contact-toast.error { border-left-color: var(--wine) }
.contact-toast p { margin: .25rem 0 0 }
.contact-toast a { text-decoration: underline; white-space: nowrap }
.contact-toast button { margin-left: auto; min-width: 44px; min-height: 44px; font-size: 1.5rem }
.toast-enter-active, .toast-leave-active { transition: opacity .15s }
.toast-enter-from, .toast-leave-to { opacity: 0 }
</style>

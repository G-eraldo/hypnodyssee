<script setup>
import { services, childcareRates } from '#shared/content';
useSeoMeta({ title: 'Prestations et tarifs à Rivery, près d’Amiens', description: 'Bain bébé, allaitement, danse en portage, massage bébé et réseau de baby-sitting à Rivery et autour d’Amiens. Retrouvez les tarifs et les modalités.' })
const identity = withSiteUrl('/').value + '#identity'
const childcare = {
    id: 'relais',
    title: 'Le réseau baby-sitting',
    text: 'Mise en relation des familles avec des étudiantes sages-femmes pour une garde à domicile.',
    prices: childcareRates.flatMap(rate => [
        [rate.period + ' · une heure', rate.hourly],
        [rate.period + ' · forfait ' + rate.hours + ' h', rate.packagePrice]
    ])
}
const pageUrl = withSiteUrl('/prestations').value
const serviceGraph = [...services, childcare].map(service => ({
    '@type': 'Service',
    '@id': pageUrl + '#' + service.id,
    url: pageUrl + '#' + service.id,
    name: service.title,
    description: service.text,
    ...(service.image && { image: withSiteUrl('/images/' + service.image + '.webp').value }),
    areaServed: service.id === 'bain' ? ['Rivery', 'Santerre'] : 'Amiens et alentours',
    provider: { '@id': identity },
    offers: service.prices.map(([name, price]) => ({ '@type': 'Offer', name, price, priceCurrency: 'EUR' }))
}))
useHead({
    script: [{
        key: 'prestations',
        type: 'application/ld+json',
        textContent: JSON.stringify({ '@context': 'https://schema.org', '@graph': serviceGraph })
    }]
})
</script>
<template>
    <div class="shell section">
        <p class="eyebrow"><i></i> Pour les futurs et jeunes parents</p>
        <h1>Prestations</h1>
        <p>Des professionnelles passionnées par leurs spécialités, réunies par une même envie : prendre soin des
            familles et accompagner les premiers liens. Retrouvez ci-dessous les tarifs, les durées et les modalités de
            chaque accompagnement.</p>
        <nav class="jump" aria-label="Choisir une prestation"><a v-for="s in services" :key="s.id" :href="'#' + s.id">{{
                s.title }}</a><a href="#relais">Baby-sitting</a></nav>
        <article v-for="s in services" :id="s.id" :key="s.id" class="service"><img :src="'/images/' + s.image + '.webp'"
                :alt="s.imageAlt" :width="s.imageWidth" :height="s.imageHeight"
            :srcset="`/images/${s.image}-400.webp 400w, /images/${s.image}.webp ${s.imageWidth}w`" sizes="(max-width: 700px) 91vw, 36vw" loading="lazy">
            <div>
                <p class="eyebrow">{{ s.meta }}</p>
                <h2>{{ s.title }}</h2>
                <p>{{ s.text }}</p>
                <p>{{ s.detail }}</p>
                <ol v-if="s.steps" class="steps">
                    <li v-for="(step, i) in s.steps" :key="i">{{ step }}</li>
                </ol>
                <p v-if="s.note" class="note">{{ s.note }}</p>
                <NuxtLink class="line-link" :to="{ path: '/contact', query: { sujet: s.title } }">Échanger avec l’association
                </NuxtLink>
            </div>
        </article>
        <section id="relais" class="panel">
            <p class="eyebrow">Amiens et alentours</p>
            <h2>Le réseau baby-sitting</h2>
            <p>Besoin de souffler, de prendre du temps pour vous ? L’association vous met en relation avec des étudiantes
                sages-femmes disponibles pour garder vos enfants à votre domicile.</p>
            <p>Indiquez-nous vos besoins : horaires souhaités, lieu d’habitation, nombre d’enfants, âges et attentes
                particulières. Nous vous orienterons vers une étudiante susceptible de vous accompagner.</p>
            <p><strong>Modalités pratiques :</strong></p>
            <ul class="modalities">
                <li>Garde réalisée à votre domicile.</li>
                <li>Déclaration de la garde par les parents auprès de l’Urssaf (CESU ou Pajemploi selon votre situation).</li>
                <li>Les parents restent les employeurs de l’étudiante et assurent les démarches administratives liées à son emploi.</li>
            </ul>
            <table>
                <caption class="sr-only">Tarifs de garde proposés</caption>
                <thead>
                    <tr>
                        <th>Créneau</th>
                        <th>À l’heure</th>
                        <th>Forfait</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="rate in childcareRates" :key="rate.period">
                        <td>{{ rate.period }}</td>
                        <td>{{ rate.hourly }} €</td>
                        <td>{{ rate.packagePrice }} € / {{ rate.hours }} h</td>
                    </tr>
                </tbody>
            </table>
            <NuxtLink class="pill" :to="{ path: '/contact', query: { sujet: 'Le réseau baby-sitting' } }">Demander une mise en
                relation</NuxtLink>
        </section>
        <section id="deplacements" class="panel">
            <p class="eyebrow">Déplacements</p>
            <h2>Se déplacer</h2>
            <p>Les déplacements sont offerts dans un rayon de 20 km autour d’Amiens. Au-delà, des frais kilométriques
                peuvent être appliqués.</p>
            <p>Cette condition ne concerne pas les bains thérapeutiques proposés à domicile dans le Santerre, qui
                disposent de leurs propres modalités de déplacement.</p>
        </section>
    </div>
</template>

<style scoped>
.steps {
    margin: 0 0 1rem;
    padding-left: 1.4rem;
}
.steps li {
    margin-bottom: .55rem;
}
.note {
    font-style: italic;
    color: #5c494e;
}
.modalities {
    margin: .5rem 0 1rem;
    padding-left: 1.4rem;
}
.modalities li {
    margin-bottom: .4rem;
}
</style>

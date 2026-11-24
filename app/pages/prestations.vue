<script setup>
definePageMeta({})
import { services } from '#shared/content';
useSeoMeta({ title: 'Bain bébé, allaitement et ateliers près d’Amiens : tarifs', description: 'Comparez les tarifs, durées et lieux des bains bébé, de l’accompagnement allaitement, de la danse en portage et du massage bébé dans la Somme.' })
const identity = withSiteUrl('/').value + '#identity'
useSchemaOrg(services.map(service => defineService({
    '@id': withSiteUrl('/prestations').value + '#' + service.id,
    name: service.title,
    description: service.text,
    image: withSiteUrl('/images/' + service.image + '.webp').value,
    provider: { '@id': identity }
})))
</script>
<template>
    <div class="shell section">
        <p class="eyebrow"><i></i> Pour les futurs et jeunes parents</p>
        <h1>Nos <em>accompagnements.</em></h1>
        <p>Des professionnelles passionnées par leurs spécialités, réunies par une même envie : prendre soin des
            familles et accompagner les premiers liens. Retrouvez ci-dessous les tarifs, les durées et les modalités de
            chaque accompagnement.</p>
        <nav class="jump" aria-label="Choisir une prestation"><a v-for="s in services" :key="s.id" :href="'#' + s.id">{{
                s.title }}</a><a href="#relais">Baby-sitting</a></nav>
        <article v-for="s in services" :id="s.id" :key="s.id" class="service"><img :src="'/images/' + s.image + '.webp'"
                :alt="s.short" loading="lazy">
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
                    <tr>
                        <td>Jour · 7 h–19 h</td>
                        <td>12 €</td>
                        <td>45 € / 4 h</td>
                    </tr>
                    <tr>
                        <td>Soirée · 19 h–23 h</td>
                        <td>13 €</td>
                        <td>50 € / 4 h</td>
                    </tr>
                    <tr>
                        <td>Nuit · 23 h–7 h</td>
                        <td>15 €</td>
                        <td>110 € / 8 h</td>
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

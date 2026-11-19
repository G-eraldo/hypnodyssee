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
        <h1>Bain bébé et <em>ateliers périnataux.</em></h1>
        <p>Hélène vous accueille à Rivery, près d’Amiens, pour le bain de votre nouveau-né. Pour un bain chez vous, Émilie se déplace dans le Santerre. Retrouvez ci-dessous les tarifs, les durées et les modalités de chaque accompagnement.</p>
        <nav class="jump" aria-label="Choisir une prestation"><a v-for="s in services" :key="s.id" :href="'#' + s.id">{{
                s.title }}</a><a href="#relais">Baby-sitting</a></nav>
        <article v-for="s in services" :id="s.id" :key="s.id" class="service"><img :src="'/images/' + s.image + '.webp'"
                :alt="s.short" loading="lazy">
            <div>
                <p class="eyebrow">{{ s.meta }}</p>
                <h2>{{ s.title }}</h2>
                <p>{{ s.text }}</p>
                <p>{{ s.detail }}</p>
                <NuxtLink class="line-link" :to="{ path: '/contact', query: { sujet: s.title } }">Échanger avec l’association
                </NuxtLink>
            </div>
        </article>
        <section id="relais" class="panel">
            <p class="eyebrow">Amiens et alentours</p>
            <h2>Le réseau baby-sitting</h2>
            <p>Indiquez vos horaires, le nombre d’enfants, leur âge et vos besoins. L’association vous met en relation
                avec des étudiantes sages-femmes disponibles.</p>
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
    </div>
</template>

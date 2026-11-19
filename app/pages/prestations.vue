<script setup>
definePageMeta({})
import { services } from '#shared/content';
useSeoMeta({ title: 'Prestations, ateliers et tarifs', description: 'Comparez les tarifs, durées et lieux des bains bébé, de l’accompagnement allaitement, de la danse en portage et du massage bébé dans la Somme.' })
</script>
<template>
    <div class="shell section">
        <p class="eyebrow"><i></i> Pour les futurs et jeunes parents</p>
        <h1>Les <em>prestations.</em></h1>
        <nav class="jump" aria-label="Choisir une prestation"><a v-for="s in services" :key="s.id" :href="'#' + s.id">{{
                s.title }}</a><a href="#relais">Baby-sitting</a></nav>
        <article v-for="s in services" :id="s.id" :key="s.id" class="service"><img :src="'/images/' + s.image + '.webp'"
                :alt="s.short" loading="lazy">
            <div>
                <p class="eyebrow">{{ s.meta }}</p>
                <h2>{{ s.title }}</h2>
                <p>{{ s.text }}</p>
                <p>{{ s.detail }}</p>
                <NuxtLink class="line-link" :to="{ path: '/contact', query: { sujet: s.title } }">Échanger avec l’association →
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
                relation →</NuxtLink>
        </section>
    </div>
</template>

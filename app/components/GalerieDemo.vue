<script setup>
import { gallery } from '#shared/content'

const props = defineProps({
    variant: { type: String, required: true }
})

const variants = [
    { id: 'a', short: 'A · Duos', note: 'Deux photos par rangée, à la même hauteur : elles se font face comme les deux pages d’un album.' },
    { id: 'b', short: 'B · Trios', note: 'Trois photos par rangée sur ordinateur, une seule grande sur téléphone : des rangées pleines, jamais de trou.' },
    { id: 'c', short: 'C · Bandes à balayer', note: 'Les photos défilent sur une bande horizontale à faire glisser du doigt : une découverte photo par photo.' }
]

const current = computed(() => variants.find((v) => v.id === props.variant) ?? variants[0])

/* Ratios réels des huit fichiers, pour des rangées à hauteur égale sans rogner. */
const ratios = {
    rencontres: 1600 / 1200,
    accompagner: 1198 / 1600,
    'lacher-prise': 1080 / 1102,
    'apres-bain': 1096 / 1434,
    apaisement: 675 / 1200,
    soutien: 932 / 1400,
    confiance: 932 / 1400,
    'bain-noir-blanc': 1074 / 1436
}

const items = gallery.map(([file, label, description, embedded], i) => ({
    file, label, description, embedded, i,
    ratio: ratios[file] ?? 0.75
}))

const rowsA = [[0, 1], [2, 3], [4, 5], [6, 7]]
const rowsB = [[0, 1, 2], [3, 4, 5], [6, 7]]

const dialog = ref()
const index = ref(0)
const strip = ref()
function show(i) { index.value = i; dialog.value.showModal() }
function move(n) { index.value = (index.value + n + gallery.length) % gallery.length }
function slide(n) {
    const el = strip.value
    if (el) el.scrollBy({ left: n * el.clientWidth * 0.8, behavior: 'smooth' })
}

useSeoMeta({
    title: () => `Galerie — proposition ${current.value.short} (démonstration)`,
    description: 'Proposition de mise en page de la galerie photos, en démonstration.'
})
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })
</script>

<template>
    <div class="shell section">
        <p class="eyebrow"><i></i> Galerie photos · démonstration</p>
        <h1>L’esprit <em>Hypn’Odyssée.</em></h1>
        <p class="intro">Des rencontres, des émotions et de précieux moments partagés.</p>

        <nav class="demo-switch" aria-label="Propositions de mise en page">
            <NuxtLink v-for="v in variants" :key="v.id" :to="'/galerie-' + v.id" :class="{ active: v.id === variant }"
                :aria-current="v.id === variant ? 'page' : undefined">{{ v.short }}</NuxtLink>
            <NuxtLink to="/galerie">Version actuelle</NuxtLink>
        </nav>
        <p class="demo-note"><strong>{{ current.short }}</strong> — {{ current.note }}</p>

        <div v-if="variant === 'a'" class="rows-a">
            <div v-for="(row, ri) in rowsA" :key="ri" class="demo-row">
                <button v-for="i in row" :key="items[i].file" class="demo-item" type="button"
                    :style="{ '--r': items[i].ratio }" @click="show(i)">
                    <img loading="lazy" :src="'/images/' + items[i].file + '.webp'"
                        :alt="items[i].embedded ? '' : items[i].description">
                    <span class="demo-caption">{{ items[i].label }}</span>
                </button>
            </div>
        </div>

        <div v-else-if="variant === 'b'" class="rows-b">
            <div v-for="(row, ri) in rowsB" :key="ri" class="demo-row">
                <button v-for="i in row" :key="items[i].file" class="demo-item" type="button"
                    :style="{ '--r': items[i].ratio }" @click="show(i)">
                    <img loading="lazy" :src="'/images/' + items[i].file + '.webp'"
                        :alt="items[i].embedded ? '' : items[i].description">
                    <span class="demo-caption">{{ items[i].label }}</span>
                </button>
            </div>
        </div>

        <div v-else class="strip-wrap">
            <div ref="strip" class="strip">
                <button v-for="item in items" :key="item.file" class="demo-item" type="button" @click="show(item.i)">
                    <img loading="lazy" :src="'/images/' + item.file + '.webp'"
                        :alt="item.embedded ? '' : item.description">
                    <span class="demo-caption">{{ item.label }}</span>
                </button>
            </div>
            <p class="strip-hint">Faites glisser la bande du doigt pour voir les autres photos.</p>
            <div class="strip-nav">
                <button type="button" aria-label="Photos précédentes" @click="slide(-1)">← Précédentes</button>
                <button type="button" aria-label="Photos suivantes" @click="slide(1)">Suivantes →</button>
            </div>
        </div>

        <dialog ref="dialog" aria-label="Photographie agrandie" @keydown.left="move(-1)" @keydown.right="move(1)"
            @click.self="dialog.close()"><button class="close" autofocus @click="dialog.close()">Fermer ×</button>
            <figure class="dialog-photo"><img :src="'/images/' + gallery[index][0] + '.webp'"
                    :alt="gallery[index][3] ? '' : gallery[index][2]">
                <figcaption class="demo-caption">{{ gallery[index][1] }}</figcaption>
            </figure>
            <div class="controls"><button aria-label="Photo précédente" @click="move(-1)">Précédente</button><span
                    aria-live="polite">{{ index + 1 }}/{{ gallery.length }}</span><button
                    aria-label="Photo suivante" @click="move(1)">Suivante</button></div>
        </dialog>
    </div>
</template>

<style scoped>
.demo-switch {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    margin-top: 1.6rem;
}

.demo-switch a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: .5rem 1.1rem;
    border: 1px solid var(--rule);
    border-radius: 3rem;
    font: 500 .85rem/1.3 var(--ui);
    color: var(--wine);
    text-decoration: none;
}

.demo-switch a.active {
    background: var(--wine);
    color: #fff0e6;
    border-color: var(--wine);
}

.demo-note {
    max-width: 44rem;
    margin-top: 1rem;
    font: .95rem/1.55 var(--ui);
    color: #5c494e;
}

.demo-row {
    display: flex;
    align-items: flex-start;
    gap: .9rem;
    margin-bottom: 1.7rem;
}

.demo-item {
    display: block;
    flex-grow: var(--r, 1);
    flex-shrink: 1;
    flex-basis: 0;
    min-width: 0;
    width: auto;
    margin: 0;
    padding: 0;
    text-align: left;
}

.demo-item img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: var(--r, .75);
    border-radius: .4rem;
}

.demo-caption {
    display: block;
    margin-top: .5rem;
    font: clamp(1.15rem, 3.4vw, 1.55rem)/1.15 var(--display);
    color: var(--wine);
}

/* A — duos à hauteur égale, grille plafonnée pour rester lisible */
.rows-a {
    margin-top: 2.5rem;
    max-width: 66rem;
}

.rows-a .demo-row {
    gap: 1.1rem;
    margin-bottom: 2rem;
}

/* B — trios sur ordinateur, une grande photo par rangée sur téléphone */
.rows-b {
    margin-top: 2.5rem;
}

@media (min-width: 900px) {
    .rows-a {
        margin-inline: auto;
    }

    .rows-a .demo-row {
        gap: 1.8rem;
        margin-bottom: 2.8rem;
    }

    .rows-b .demo-row {
        gap: 1.6rem;
        margin-bottom: 2.6rem;
    }
}

@media (max-width: 699px) {
    .rows-b .demo-row {
        flex-direction: column;
        gap: 1.4rem;
        margin-bottom: 1.6rem;
    }
}

/* C — bande horizontale à balayer */
.strip-wrap {
    margin-top: 2.5rem;
}

.strip {
    display: flex;
    gap: .9rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: .8rem;
    overscroll-behavior-x: contain;
}

.strip .demo-item {
    flex: 0 0 78%;
    scroll-snap-align: start;
}

.strip-hint {
    margin: .4rem 0 .6rem;
    font: .82rem/1.4 var(--ui);
    color: #5c494e;
}

.strip-nav {
    display: flex;
    gap: .75rem;
}

.strip-nav button {
    min-height: 44px;
    padding: .5rem 1.1rem;
    border: 1px solid var(--rule);
    border-radius: 3rem;
    background: #f6eae5;
    color: var(--wine);
    font: 500 .85rem var(--ui);
}

@media (min-width: 700px) {
    .strip .demo-item {
        flex-basis: 38%;
    }
}

@media (min-width: 1024px) {
    .strip .demo-item {
        flex-basis: 26%;
    }
}

.dialog-photo {
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
}

.dialog-photo img {
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 65dvh;
    aspect-ratio: auto;
}
</style>

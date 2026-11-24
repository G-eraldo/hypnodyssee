<script setup>
definePageMeta({})
import { gallery } from '#shared/content'
useSeoMeta({ title: 'L’esprit Hypn’Odyssée en photos', description: 'Des rencontres, des émotions et de précieux moments partagés : la galerie de l’association Hypn’Odyssée Bien naître.' })
const dialog = ref()
const index = ref(0)
function show(i) { index.value = i; dialog.value.showModal() }
function move(n) { index.value = (index.value + n + gallery.length) % gallery.length }
useSchemaOrg([defineWebPage({
    '@type': 'ImageGallery',
    image: gallery.map(([file, caption, description]) => ({
        '@type': 'ImageObject',
        contentUrl: withSiteUrl('/images/' + file + '.webp').value,
        caption,
        description
    }))
})])
</script>
<template>
    <div class="shell section">
        <p class="eyebrow"><i></i> Galerie photos</p>
        <h1>L’esprit <em>Hypn’Odyssée.</em></h1>
        <p class="intro">Des rencontres, des émotions et de précieux moments partagés.</p>
        <div class="gallery"><button v-for="([file, label, description], i) in gallery" :key="file" @click="show(i)"><img
                    loading="lazy" :src="'/images/' + file + '.webp'" :alt="description"><span>{{ label }}</span></button></div>
        <dialog ref="dialog" aria-label="Photographie agrandie" @keydown.left="move(-1)" @keydown.right="move(1)"
            @click.self="dialog.close()"><button class="close" autofocus @click="dialog.close()">Fermer ×</button><img
                :src="'/images/' + gallery[index][0] + '.webp'" :alt="gallery[index][2]">
            <div class="controls"><button aria-label="Photo précédente" @click="move(-1)">Précédente</button><span
                    aria-live="polite">{{ gallery[index][1] }} · {{ index + 1 }}/{{ gallery.length }}</span><button
                    aria-label="Photo suivante" @click="move(1)">Suivante</button></div>
        </dialog>
    </div>
</template>

<style scoped>
.gallery {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 2.5rem 1.4rem;
    margin-top: 2.5rem;
    align-items: start;
}
.gallery button {
    margin: 0;
    display: block;
    text-align: left;
}
.gallery img {
    width: 100%;
    object-fit: cover;
    border-radius: .4rem;
}
.gallery button span {
    display: block;
    margin-top: .55rem;
    font: 1.5rem var(--display);
    color: var(--wine);
}
.gallery button:nth-child(1) { grid-column: span 7; }
.gallery button:nth-child(1) img { aspect-ratio: 3 / 2; }
.gallery button:nth-child(2) { grid-column: span 5; margin-top: 4.5rem; }
.gallery button:nth-child(2) img { aspect-ratio: 4 / 5; }
.gallery button:nth-child(3) { grid-column: span 4; }
.gallery button:nth-child(3) img { aspect-ratio: 1 / 1; }
.gallery button:nth-child(4) { grid-column: span 4; margin-top: 2.5rem; }
.gallery button:nth-child(4) img { aspect-ratio: 4 / 5; }
.gallery button:nth-child(5) { grid-column: span 4; margin-top: 1rem; }
.gallery button:nth-child(5) img { aspect-ratio: 4 / 5; }
.gallery button:nth-child(6) { grid-column: span 4; }
.gallery button:nth-child(6) img { aspect-ratio: 3 / 4; }
.gallery button:nth-child(7) { grid-column: span 4; margin-top: 3rem; }
.gallery button:nth-child(7) img { aspect-ratio: 3 / 4; }
.gallery button:nth-child(8) { grid-column: span 4; margin-top: 1.5rem; }
.gallery button:nth-child(8) img { aspect-ratio: 3 / 4; }

@media (max-width: 860px) {
    .gallery {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.7rem 1rem;
    }
    .gallery button:nth-child(n) { grid-column: span 1; margin-top: 0; }
    .gallery button:nth-child(n) img { aspect-ratio: 4 / 5; }
    .gallery button:nth-child(even) { margin-top: 2.4rem; }
}
</style>

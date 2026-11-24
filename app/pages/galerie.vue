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
        <div class="gallery"><button v-for="([file, label, description, embedded], i) in gallery" :key="file" @click="show(i)" class="figure"><img
                    loading="lazy" :src="'/images/' + file + '.webp'" :alt="description"><span v-if="!embedded" class="overlay-caption">{{ label }}</span></button></div>
        <dialog ref="dialog" aria-label="Photographie agrandie" @keydown.left="move(-1)" @keydown.right="move(1)"
            @click.self="dialog.close()"><button class="close" autofocus @click="dialog.close()">Fermer ×</button><img
                :src="'/images/' + gallery[index][0] + '.webp'" :alt="gallery[index][2]">
            <div class="controls"><button aria-label="Photo précédente" @click="move(-1)">Précédente</button><span
                    aria-live="polite">{{ gallery[index][3] ? '' : gallery[index][1] + ' · ' }}{{ index + 1 }}/{{ gallery.length }}</span><button
                    aria-label="Photo suivante" @click="move(1)">Suivante</button></div>
        </dialog>
    </div>
</template>

<style scoped>
.gallery {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem 1.4rem;
    margin-top: 2.5rem;
    align-items: start;
}
.gallery button {
    margin: 0;
    display: block;
    text-align: left;
    position: relative;
}
.gallery img {
    width: 100%;
    height: auto;
    aspect-ratio: auto;
    object-fit: cover;
    border-radius: .4rem;
    display: block;
}
.overlay-caption {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    background: #252525;
    color: #fff;
    font: 500 .85rem/1.3 var(--ui);
    letter-spacing: .02em;
    padding: .6rem .75rem;
    text-align: center;
    border-radius: 0 0 .4rem .4rem;
}
@media (max-width: 1023px) {
    .gallery { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 699px) {
    .gallery { grid-template-columns: 1fr; gap: 1.6rem; }
}
</style>

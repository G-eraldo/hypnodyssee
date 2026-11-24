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
        <div class="gallery"><button v-for="([file, label, description, embedded], i) in gallery" :key="file" @click="show(i)"><img
                    loading="lazy" :src="'/images/' + file + '.webp'" :alt="embedded ? '' : description"><span class="caption">{{ label }}</span></button></div>
        <dialog ref="dialog" aria-label="Photographie agrandie" @keydown.left="move(-1)" @keydown.right="move(1)"
            @click.self="dialog.close()"><button class="close" autofocus @click="dialog.close()">Fermer ×</button>
            <figure class="dialog-photo"><img :src="'/images/' + gallery[index][0] + '.webp'" :alt="gallery[index][3] ? '' : gallery[index][2]">
                <figcaption class="caption">{{ gallery[index][1] }}</figcaption>
            </figure>
            <div class="controls"><button aria-label="Photo précédente" @click="move(-1)">Précédente</button><span
                    aria-live="polite">{{ index + 1 }}/{{ gallery.length }}</span><button
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
}
.gallery img {
    width: 100%;
    height: auto;
    aspect-ratio: auto;
    object-fit: cover;
    border-radius: .4rem;
    display: block;
}
.caption {
    display: block;
    margin-top: .5rem;
    font: 1.55rem var(--display);
    color: var(--wine);
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
}
@media (max-width: 1023px) {
    .gallery { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 699px) {
    .gallery { grid-template-columns: 1fr; gap: 1.6rem; }
}
</style>

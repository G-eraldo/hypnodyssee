<script setup>
definePageMeta({})
import { gallery } from '#shared/content'
useSeoMeta({ title: 'Le bain bébé en photos à Rivery', description: 'Un album des bains bébé de l’association Hypn’Odyssée Bien naître, au fil du lange, de l’eau et des premiers gestes.' })
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
        <h1>Le bain bébé <em>en photos.</em></h1>
        <p class="intro">De l’enveloppement à la sortie de l’eau, découvrez les premiers bains en images.
            <NuxtLink class="line-link" to="/prestations#bain">Voir le déroulement et le tarif du bain bébé</NuxtLink></p>
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

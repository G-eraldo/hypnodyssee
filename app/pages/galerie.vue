<script setup>
definePageMeta({})
import { gallery } from '#shared/content'
useSeoMeta({ title: 'Galerie des premiers bains', description: 'Un album des bains bébé de l’association Hypn’Odyssée Bien naître, au fil du lange, de l’eau et des premiers gestes.' })
const dialog = ref()
const index = ref(0)
function show(i) { index.value = i; dialog.value.showModal() }
function move(n) { index.value = (index.value + n + gallery.length) % gallery.length }
</script>
<template>
    <div class="shell section">
        <p class="eyebrow"><i></i> Galerie photos</p>
        <h1>Les premiers <em>instants.</em></h1>
        <p class="intro">De l’enveloppement à la sortie de l’eau, l’album des bains de l’association.</p>
        <div class="gallery"><button v-for="([file, label], i) in gallery" :key="file" @click="show(i)"><img
                    loading="lazy" :src="'/images/' + file + '.webp'" alt=""><span>{{ label }}</span></button></div>
        <dialog ref="dialog" aria-label="Photographie agrandie" @keydown.left="move(-1)" @keydown.right="move(1)"
            @click.self="dialog.close()"><button class="close" autofocus @click="dialog.close()">Fermer ×</button><img
                :src="'/images/' + gallery[index][0] + '.webp'" :alt="gallery[index][1]">
            <div class="controls"><button aria-label="Photo précédente" @click="move(-1)">Précédente</button><span
                    aria-live="polite">{{ gallery[index][1] }} · {{ index + 1 }}/{{ gallery.length }}</span><button
                    aria-label="Photo suivante" @click="move(1)">Suivante</button></div>
        </dialog>
    </div>
</template>

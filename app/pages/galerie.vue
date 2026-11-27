<script setup>
definePageMeta({})
import { gallery } from '#shared/content'
useSeoMeta({ title: 'L’esprit Hypn’Odyssée en photos', description: 'Des rencontres, des émotions et de précieux moments partagés : la galerie de l’association Hypn’Odyssée Bien naître.' })

const dialog = ref()
const index = ref(0)
function show(i) { index.value = i; dialog.value.showModal() }
function move(n) { index.value = (index.value + n + gallery.length) % gallery.length }

/* Ratios réels des photos : les largeurs suivent ces proportions, donc les
   photos d’une même rangée ont la même hauteur, sans rognage. */
const ratios = {
    rencontres: 1600 / 1200,
    accompagner: 1080 / 1441,
    'lacher-prise': 1600 / 1598,
    'apres-bain': 1096 / 1434,
    apaisement: 775 / 1377,
    soutien: 1067 / 1600,
    confiance: 1067 / 1600,
    douceur: 1067 / 1600
}

const photos = gallery.map(([file, label, description, embedded]) => ({
    file, label, description, embedded,
    ratio: ratios[file] ?? 0.75
}))

/* Trois photos par rangée : les rangées sont recalculées à partir du nombre
   de photos, pour qu’une nouvelle image entre automatiquement dans la grille. */
const rows = computed(() => {
    const perRow = 3
    const out = []
    for (let start = 0; start < photos.length; start += perRow) {
        const row = []
        for (let i = start; i < Math.min(start + perRow, photos.length); i += 1) row.push(i)
        out.push(row)
    }
    return out
})

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
        <div class="galerie">
            <div v-for="(row, ri) in rows" :key="ri" class="galerie-row">
                <button v-for="i in row" :key="photos[i].file" class="galerie-photo" type="button"
                    :style="{ '--r': photos[i].ratio }" @click="show(i)"><img loading="lazy"
                        :src="'/images/' + photos[i].file + '.webp'"
                        :alt="photos[i].embedded ? '' : photos[i].description"><span class="caption">{{ photos[i].label
                        }}</span></button>
            </div>
        </div>
        <p class="text-sm">Crédit photo · <a class="underline"
                href="https://lesphotosdececile.fr">@lesphotosdececile80</a></p>
        <dialog ref="dialog" aria-label="Photographie agrandie" @keydown.left="move(-1)" @keydown.right="move(1)"
            @click.self="dialog.close()"><button class="close" autofocus @click="dialog.close()">Fermer ×</button>
            <figure class="dialog-photo"><img :src="'/images/' + gallery[index][0] + '.webp'"
                    :alt="gallery[index][3] ? '' : gallery[index][2]">
                <figcaption class="caption">{{ gallery[index][1] }}</figcaption>
            </figure>
            <div class="controls"><button aria-label="Photo précédente" @click="move(-1)">Précédente</button><span
                    aria-live="polite">{{ index + 1 }}/{{ gallery.length }}</span><button aria-label="Photo suivante"
                    @click="move(1)">Suivante</button></div>
        </dialog>
    </div>
</template>

<style scoped>
.galerie {
    margin-top: 2.5rem;
}

.galerie-row {
    display: flex;
    align-items: flex-start;
    gap: 1.6rem;
    margin-bottom: 2.6rem;
}

.galerie-photo {
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

.galerie-photo img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: var(--r, .75);
    border-radius: .4rem;
}

.caption {
    display: block;
    margin-top: .5rem;
    font: 1.55rem/1.15 var(--display);
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
    aspect-ratio: auto;
}

@media (max-width: 699px) {
    .galerie-row {
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 1.7rem;
    }

    .galerie-photo {
        flex: 0 0 auto;
        width: 100%;
    }

    .caption {
        font-size: 1.35rem;
    }
}
</style>

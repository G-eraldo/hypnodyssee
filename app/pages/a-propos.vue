<script setup>
definePageMeta({})
useSeoMeta({ title: 'Hélène Guignant et l’association', description: 'Découvrez l’histoire d’Hypn’Odyssée Bien naître, fondée en 2023 à Rivery, et les cinq femmes qui accompagnent son projet.' })
const equipe = [['Hélène', 'Fondatrice et accompagnante périnatale. Elle accueille les familles pour le bain à Rivery et les accompagne dans leur allaitement.'], ['Émilie', 'Elle se déplace chez les familles du Santerre pour proposer le Thalasso Bain Bébé® à domicile.'], ['Estelle', 'Elle anime les séances de danse en portage pour les parents et leurs enfants de 0 à 2 ans.'], ['Rislaine', 'Elle propose le massage bébé à domicile et partage avec les parents les gestes à reprendre chez eux.'], ['Ingrid', 'Elle approfondit ses connaissances des besoins du jeune enfant.']]
useSchemaOrg([defineWebPage({ '@type': 'AboutPage' })])
</script>
<template>
    <div class="shell section">
        <p class="eyebrow"><i></i> L’association · depuis 2023</p>
        <h1>Hélène Guignant <em>et l’association.</em></h1>
        <div class="service"><img src="/images/bain-noir-blanc.webp"
                alt="Un nouveau-né soutenu par les mains d’une adulte">
            <div>
                <h2>Une histoire née à Amiens</h2>
                <p>Hélène Guignant accompagne les enfants et leurs parents depuis 2013. Après les urgences pédiatriques,
                    elle rejoint en 2018 la maternité du CHU Amiens-Picardie.</p>
                <p>Au fil des rencontres, une envie prend forme. Comment rester aux côtés des parents une fois rentrés à
                    la maison ? Formée au Thalasso Bain Bébé® et à l’allaitement maternel, Hélène fonde Hypn’Odyssée
                    Bien naître en 2023.</p>
                <blockquote>« Devenir parent ne s’arrête pas à la sortie de l’hôpital ! »<cite>Hélène Guignant</cite>
                </blockquote>
                <NuxtLink class="line-link" to="/prestations#bain">Découvrir le bain bébé avec Hélène</NuxtLink>
            </div>
        </div>
        <h2>Les femmes de <em>l’association.</em></h2>
        <div v-for="[name, role] in equipe" :key="name" class="person">
            <h3>{{ name }}</h3>
            <p>{{ role }}</p>
        </div>
        <section class="panel">
            <p class="eyebrow"><i></i> Soutenir</p>
            <h2>Soutenir <em>Hypn’Odyssée Bien Naître.</em></h2>
            <p>Chaque don contribue directement au développement de nos projets et de nos actions auprès des familles
                durant les 1000 premiers jours.</p>
            <p><strong>Notre association fonctionne exclusivement grâce à l’engagement bénévole de ses membres.</strong>
                Toutes les personnes qui la font vivre donnent de leur temps et de leurs compétences sans rémunération.</p>
            <p>Les recettes générées par nos activités sont intégralement conservées au sein de l’association et
                réinvesties dans ses projets, son fonctionnement et ses actions auprès des familles. Aucun bénéfice n’est
                distribué aux membres.</p>
            <p>Votre soutien nous permet d’imaginer et de concrétiser de nouvelles initiatives au service des parents et
                de leurs enfants.</p>
            <p>Chaque contribution compte. Merci de faire grandir nos projets à nos côtés !</p>
        </section>
    </div>
</template>

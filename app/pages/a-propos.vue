<script setup>
definePageMeta({})
useSeoMeta({ title: 'Hélène Guignant et l’association', description: 'Découvrez l’histoire d’Hypn’Odyssée Bien naître, fondée en 2023 à Rivery, et les cinq femmes qui accompagnent son projet.' })
const equipe = [['Hélène Guignant', 'Fondatrice, accompagnante périnatale et auxiliaire de puériculture. Elle accueille les familles pour le bain à Rivery et les accompagne dans leur allaitement.'], ['Émilie', 'Elle se déplace chez les familles du Santerre pour proposer le Thalasso Bain Bébé® à domicile.'], ['Estelle', 'Elle anime les séances de danse en portage pour les parents et leurs enfants de 0 à 2 ans.'], ['Rislaine', 'Elle propose le massage bébé à domicile et partage avec les parents les gestes à reprendre chez eux.'], ['Ingrid', 'En formation en naturopathie et pédiatrie, elle approfondit ses connaissances des besoins du jeune enfant.']]
</script>
<template>
    <div class="shell section">
        <p class="eyebrow"><i></i> L’association · depuis 2023</p>
        <h1>Autour des <em>premiers liens.</em></h1>
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
            </div>
        </div>
        <h2>Les femmes de <em>l’association.</em></h2>
        <div v-for="[name, role] in equipe" :key="name" class="person">
            <h3>{{ name }}</h3>
            <p>{{ role }}</p>
        </div>
    </div>
</template>

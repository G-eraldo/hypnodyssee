<script setup>
defineProps({ title: String, introduction: String })
</script>
<template>
  <article class="shell section document">
    <h1>{{ title }}</h1>
    <div class="document-body">
      <p class="eyebrow">Hypn’Odyssée Bien naître</p>
      <p>{{ introduction }}</p>
      <p class="updated">Mis à jour le <time datetime="2026-11-19">19 novembre 2026</time></p>
      <slot />
    </div>
  </article>
</template>

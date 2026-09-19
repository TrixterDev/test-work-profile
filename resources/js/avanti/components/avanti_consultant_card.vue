<script setup lang="ts">
import AvantiButton from './avanti_button.vue'
import AvantiAvatar from './avanti_avatar.vue'
const emit = defineEmits<{ open: [] }>()
function openChat() { emit('open') }
</script>

<template>
  <section class="consultant-card">
    <AvantiAvatar src="/images/avatar-manager.png" alt="Schierano Deborah" initials="SD" size="consultant" />
    <div><h2>Schierano Deborah</h2><p>Salve, Mi chiamo Deborah, sarò la sua consulente</p></div>
    <span class="badge consultant-card__badge">2</span>
    <AvantiButton class="consultant-card__action" variant="quiet" aria-label="Apri chat" @click="openChat" />
  </section>
</template>

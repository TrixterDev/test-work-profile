<script setup lang="ts">
import AvantiButton from './avanti_button.vue'
const emit = defineEmits<{ navigate: [page: string]; assistance: [] }>()
function goHome() { emit('navigate', 'Home') }
function goDocuments() { emit('navigate', 'Documenti') }
function goProfile() { emit('navigate', 'Profilo') }
function openAssistance() { emit('assistance') }
</script>

<template>
  <nav class="mobile-navigation" aria-label="Navigazione mobile">
    <AvantiButton variant="nav" icon="home" active @click="goHome">Home</AvantiButton>
    <AvantiButton variant="nav" icon="document" @click="goDocuments">Documenti</AvantiButton>
    <AvantiButton variant="nav" icon="user" @click="goProfile">Profilo</AvantiButton>
    <AvantiButton variant="primary" icon="chat" @click="openAssistance">ASSISTENZA</AvantiButton>
  </nav>
</template>

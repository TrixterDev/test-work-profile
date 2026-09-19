<script setup lang="ts">
import AvantiButton from './avanti_button.vue'
import AvantiAvatar from './avanti_avatar.vue'

const emit = defineEmits<{ assistance: []; navigate: [page: string] }>()
function openAssistance() { emit('assistance') }
function goHome() { emit('navigate', 'Home') }
function goDocuments() { emit('navigate', 'Documenti') }
function goProfile() { emit('navigate', 'Profilo') }
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner">
      <div class="brand"><img class="brand__logo" src="/images/avanti-logo.svg" alt="Avanti" /></div>
      <nav class="site-header__nav" aria-label="Navigazione principale">
        <AvantiButton variant="nav" icon="home" @click="goHome">Home</AvantiButton>
        <AvantiButton variant="nav" icon="document" @click="goDocuments">Documenti</AvantiButton>
        <AvantiButton variant="nav" icon="user" active @click="goProfile">Profilo</AvantiButton>
      </nav>
      <AvantiButton class="site-header__assistance" variant="primary" icon="chat" @click="openAssistance">ASSISTENZA <span class="badge">4</span></AvantiButton>
      <div class="site-header__mobile-actions">
        <AvantiButton variant="icon" icon="bell" aria-label="Notifiche" @click="openAssistance" />
        <span class="badge badge--bell">4</span>
        <AvantiAvatar src="/images/avatar-profile.png" alt="Marco Rossi" initials="MR" size="small" /><span>MR</span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { Profile } from '../data/avanti_profile.fixture'
import AvantiAvatar from './avanti_avatar.vue'

defineProps<{ profile: Profile }>()
</script>

<template>
  <div class="page-intro">
    <div class="page-intro__person">
      <AvantiAvatar src="/images/avatar-profile.png" :alt="profile.firstName" initials="MR" />
      <div><strong>{{ profile.firstName }}</strong><small>{{ profile.email }}</small></div>
    </div>
    <div class="breadcrumbs">Piattaforma <span>/</span><strong>Home</strong></div>
  </div>
</template>

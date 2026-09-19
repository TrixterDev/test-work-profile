<script setup lang="ts">
import type { Profile } from '../data/avanti_profile.fixture'
import AvantiDataRow from './avanti_data_row.vue'
defineProps<{ profile: Profile }>()
</script>

<template>
  <section class="card profile-summary" aria-label="Riepilogo dati personali">
    <h2>Dati personali</h2>
    <AvantiDataRow label="Cognome" :value="profile.surname" />
    <AvantiDataRow label="Nome" :value="profile.firstName" />
  </section>
</template>

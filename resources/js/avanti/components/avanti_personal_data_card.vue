<script setup lang="ts">
import type { Profile } from '../data/avanti_profile.fixture'
import AvantiButton from './avanti_button.vue'
import AvantiIcon from './avanti_icon.vue'
import AvantiDataRow from './avanti_data_row.vue'
defineProps<{ profile: Profile }>()
const emit = defineEmits<{ editName: []; copyIban: [] }>()
function handleEdit() { emit('editName') }
function handleCopy() { emit('copyIban') }
</script>

<template>
  <section class="card personal-card">
    <div class="card-title-row"><h2>Dati personali</h2><AvantiButton @click="handleEdit">Modifica nome</AvantiButton></div>
    <AvantiDataRow label="Cognome" :value="profile.surname" />
    <AvantiDataRow label="Nome" :value="profile.firstName" />
    <AvantiDataRow label="Email" :value="profile.email" />
    <AvantiDataRow label="Importo approvato" :value="profile.approvedAmount" />
    <AvantiDataRow label="Tipo di documento" :value="profile.documentType" />
    <AvantiDataRow label="Tipo di documento" :value="profile.documentNumber" />
    <div class="iban-label">IBAN</div>
    <div class="iban-value"><strong>{{ profile.iban }}</strong><AvantiButton variant="icon" aria-label="Copia IBAN" @click="handleCopy"><AvantiIcon name="copy" :size="17" /></AvantiButton></div>
  </section>
</template>

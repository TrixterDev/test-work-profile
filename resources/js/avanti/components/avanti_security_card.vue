<script setup lang="ts">
import AvantiButton from './avanti_button.vue'
import AvantiIcon from './avanti_icon.vue'
import AvantiEmailVerification from './avanti_email_verification.vue'
defineProps<{ verified: boolean }>()
const emit = defineEmits<{ changePassword: []; changeEmail: []; requestCode: [] }>()
function changePassword() { emit('changePassword') }
function changeEmail() { emit('changeEmail') }
function requestCode() { emit('requestCode') }
</script>

<template>
  <section class="card security-card">
    <h2 class="security-card__heading"><span class="security-card__icon"><AvantiIcon name="shield" :size="20" /></span>Sicurezza</h2>
    <div class="security-action"><p>Cambia la password del tuo account.</p><AvantiButton @click="changePassword">Cambia password</AvantiButton></div>
    <div class="security-action"><p>Cambia l'indirizzo email del tuo account.</p><AvantiButton @click="changeEmail">Cambia email</AvantiButton></div>
    <AvantiEmailVerification :verified="verified" @request-code="requestCode" />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AvantiButton from './avanti_button.vue'
import AvantiIcon from './avanti_icon.vue'
const props = defineProps<{ verified: boolean }>()
const verificationLabel = computed(() => props.verified ? 'Verificata' : 'Non verificata')
const emit = defineEmits<{ requestCode: [] }>()
function requestCode() { emit('requestCode') }
</script>

<template>
  <div class="email-verification">
    <div class="email-verification__title"><span class="email-verification__question"><AvantiIcon name="question" :size="17" /></span><strong>Verifica email</strong><span class="verification-pill">{{ verificationLabel }}</span></div>
    <p>Verifica il tuo indirizzo email per proteggere il tuo account.</p>
    <AvantiButton variant="primary" :disabled="verified" @click="requestCode">Invia codice</AvantiButton>
  </div>
</template>

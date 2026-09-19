<script setup lang="ts">
import { computed } from 'vue'
import type { ProfileStep } from '../data/avanti_profile.fixture'
import AvantiProgressStep from './avanti_progress_step.vue'
const props = defineProps<{ steps: ProfileStep[] }>()
const completed = computed(() => props.steps.filter(step => step.status === 'complete').length)
const current = computed(() => props.steps.findIndex(step => step.status === 'current') + 1)
</script>

<template>
  <section class="card progress-card" aria-label="Stato della pratica">
    <div class="card-heading"><strong>Passo {{ current }} di {{ steps.length }}</strong><span>{{ completed }} / {{ steps.length }} completati</span></div>
    <div class="progress-card__track">
      <AvantiProgressStep v-for="step in steps" :key="step.label" :step="step" />
    </div>
  </section>
</template>

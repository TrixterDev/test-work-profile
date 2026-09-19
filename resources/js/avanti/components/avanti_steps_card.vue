<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ProfileStep } from '../data/avanti_profile.fixture'
import AvantiStepRow from './avanti_step_row.vue'
import AvantiButton from './avanti_button.vue'
const props = defineProps<{ steps: ProfileStep[] }>()
const emit = defineEmits<{ selectStep: [step: ProfileStep] }>()
const collapsed = ref(false)
const completedCount = computed(() => props.steps.filter(step => step.status === 'complete').length)
const collapseLabel = computed(() => collapsed.value ? 'Mostra passaggi' : 'Nascondi passaggi')
const bars = computed(() => props.steps.map(step => ({
  label: step.label,
  className: `steps-card__bar--${step.status}`,
})))
function toggleCollapsed() { collapsed.value = !collapsed.value }
function selectStep(step: ProfileStep) { emit('selectStep', step) }
</script>

<template>
  <section class="card steps-card">
    <div class="steps-card__heading">
      <div><small>COMPLETA TUTTI GLI STEP</small><h2>Per il prelievo dei fondi, completa tutti gli step</h2></div>
      <span class="steps-card__count">{{ completedCount }} / {{ steps.length }} completati</span>
      <AvantiButton variant="icon" icon="chevron" :aria-label="collapseLabel" :active="collapsed" @click="toggleCollapsed" />
    </div>
    <div v-if="!collapsed">
      <AvantiStepRow v-for="step in steps" :key="step.label" :step="step" @select="selectStep" />
      <div class="steps-card__bars"><span v-for="bar in bars" :key="bar.label" :class="bar.className" /></div>
    </div>
  </section>
</template>

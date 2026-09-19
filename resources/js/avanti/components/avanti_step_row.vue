<script setup lang="ts">
import { computed } from 'vue'
import type { ProfileStep } from '../data/avanti_profile.fixture'
import AvantiIcon from './avanti_icon.vue'
import AvantiButton from './avanti_button.vue'
const props = defineProps<{ step: ProfileStep }>()
const emit = defineEmits<{ select: [step: ProfileStep] }>()
const rowClass = computed(() => ['step-row', `step-row--${props.step.status}`])
const isComplete = computed(() => props.step.status === 'complete')
const isWaiting = computed(() => props.step.status === 'waiting')
const actionLabel = computed(() => `Apri ${props.step.label}`)
function handleSelect() { emit('select', props.step) }
</script>

<template>
  <div :class="rowClass">
    <span class="step-row__icon"><AvantiIcon :name="step.icon" :size="19" /></span>
    <div class="step-row__description"><strong>{{ step.label }}</strong><small>{{ step.subtitle }}</small></div>
    <AvantiButton v-if="!isComplete" variant="icon" icon="arrow" :aria-label="actionLabel" :disabled="isWaiting" @click="handleSelect" />
    <span v-else class="step-row__check"><AvantiIcon name="check" :size="16" /></span>
  </div>
</template>

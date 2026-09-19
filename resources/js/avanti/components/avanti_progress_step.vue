<script setup lang="ts">
import { computed } from 'vue'
import type { ProfileStep } from '../data/avanti_profile.fixture'
import AvantiIcon from './avanti_icon.vue'
const props = defineProps<{ step: ProfileStep }>()
const stepClass = computed(() => ['progress-step', `progress-step--${props.step.status}`])
const iconName = computed(() => props.step.status === 'complete' ? 'check' : props.step.icon)
</script>

<template>
  <div :class="stepClass">
    <span class="progress-step__circle"><AvantiIcon :name="iconName" :size="17" /></span>
    <span class="progress-step__label">{{ step.shortLabel }}</span>
  </div>
</template>

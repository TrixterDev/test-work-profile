<script setup lang="ts">
import { computed, useSlots } from 'vue'
import AvantiIcon from './avanti_icon.vue'

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'outline' | 'quiet' | 'icon' | 'nav'
  icon?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  active?: boolean
  ariaLabel?: string
}>(), { variant: 'outline', type: 'button', disabled: false, active: false })

const slots = useSlots()
const hasLabel = computed(() => Boolean(slots.default))
const buttonClass = computed(() => [
  'avanti-button',
  `avanti-button--${props.variant}`,
  { 'is-active': props.active },
])
const emit = defineEmits<{ click: [event: MouseEvent] }>()
function handleClick(event: MouseEvent) { emit('click', event) }
</script>

<template>
  <button :type="type" :disabled="disabled" :aria-label="ariaLabel" :class="buttonClass" @click="handleClick">
    <AvantiIcon v-if="icon" :name="icon" :size="18" />
    <span v-if="hasLabel"><slot /></span>
  </button>
</template>

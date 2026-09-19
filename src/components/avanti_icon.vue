<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{ name: string; size?: number }>(), { size: 20 })
const iconClass = computed(() => ['avanti-icon', `avanti-icon--${props.name}`, `avanti-icon--${props.size}`])
</script>

<template>
  <span :class="iconClass" aria-hidden="true" />
</template>

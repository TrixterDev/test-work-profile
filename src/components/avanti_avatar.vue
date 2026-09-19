<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<{
  src: string
  alt: string
  initials: string
  size?: 'regular' | 'small' | 'consultant'
}>(), { size: 'regular' })

const failed = ref(false)
const avatarClass = computed(() => ['avatar', `avatar--${props.size}`])
function handleError() { failed.value = true }
</script>

<template>
  <img v-if="!failed" :src="src" :alt="alt" :class="avatarClass" @error="handleError" />
  <span v-else :class="avatarClass" :aria-label="alt">{{ initials }}</span>
</template>

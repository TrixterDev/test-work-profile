<script setup lang="ts">
import { ref } from 'vue'
import AvantiButton from './avanti_button.vue'

const props = defineProps<{ name: string }>()
const emit = defineEmits<{ save: [name: string]; close: [] }>()
const nextName = ref(props.name)

function handleSave() {
  const name = nextName.value.trim()
  if (name) emit('save', name)
}
function handleClose() { emit('close') }
</script>

<template>
  <div class="dialog-backdrop" @click.self="handleClose">
    <form class="card name-dialog" @submit.prevent="handleSave">
      <h2>Modifica nome</h2>
      <label for="avanti-profile-name">Nome</label>
      <input id="avanti-profile-name" v-model="nextName" required />
      <div>
        <AvantiButton @click="handleClose">Annulla</AvantiButton>
        <AvantiButton type="submit" variant="primary">Salva</AvantiButton>
      </div>
    </form>
  </div>
</template>

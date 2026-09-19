<script setup lang="ts">
import { ref } from 'vue'
import { profileFixture, stepsFixture } from '../data/avanti_profile.fixture'
import AvantiHeader from '../components/avanti_header.vue'
import AvantiMobileNavigation from '../components/avanti_mobile_navigation.vue'
import AvantiProgressCard from '../components/avanti_progress_card.vue'
import AvantiProfileSummary from '../components/avanti_profile_summary.vue'
import AvantiPersonalDataCard from '../components/avanti_personal_data_card.vue'
import AvantiSecurityCard from '../components/avanti_security_card.vue'
import AvantiStepsCard from '../components/avanti_steps_card.vue'
import AvantiConsultantCard from '../components/avanti_consultant_card.vue'
import AvantiProfileIntro from '../components/avanti_profile_intro.vue'
import AvantiNameDialog from '../components/avanti_name_dialog.vue'

const profile = ref({ ...profileFixture })
const notice = ref('')
const editingName = ref(false)

function showNotice(message: string) { notice.value = message }
function editName() { editingName.value = true }
function saveName(name: string) {
  profile.value.firstName = name
  editingName.value = false
  showNotice('Nome aggiornato.')
}
function cancelName() { editingName.value = false }
async function copyIban() {
  if (profile.value.iban === '-') { showNotice('IBAN non disponibile.'); return }
  try { await navigator.clipboard.writeText(profile.value.iban); showNotice('IBAN copiato.') }
  catch { showNotice('Impossibile copiare IBAN.') }
}
</script>

<template>
  <AvantiHeader />
  <main class="page-shell">
    <AvantiProfileIntro :profile="profile" />
    <div class="profile-layout">
      <AvantiProgressCard class="profile-layout__progress" :steps="stepsFixture" />
      <AvantiProfileSummary class="profile-layout__summary" :profile="profile" />
      <div class="profile-layout__left"><AvantiPersonalDataCard :profile="profile" @edit-name="editName" @copy-iban="copyIban" /><AvantiSecurityCard :verified="profile.emailVerified" /></div>
      <div class="profile-layout__right"><AvantiStepsCard :steps="stepsFixture" /><AvantiConsultantCard /></div>
    </div>
    <p v-if="notice" class="notice" role="status">{{ notice }}</p>
  </main>
  <AvantiMobileNavigation />
  <AvantiNameDialog v-if="editingName" :name="profile.firstName" @save="saveName" @close="cancelName" />
</template>

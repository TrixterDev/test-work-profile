export type Profile = {
  firstName: string
  surname: string
  email: string
  approvedAmount: string
  documentType: string
  documentNumber: string
  iban: string
  emailVerified: boolean
}

export type ProfileStep = {
  label: string
  shortLabel: string
  subtitle: string
  icon: string
  status: 'complete' | 'current' | 'waiting'
}

export const profileFixture: Profile = {
  firstName: 'Marco Rossi',
  surname: 'Intesa Sanpaolo S.p.A.',
  email: 'ikoei@09gmail.com',
  approvedAmount: '12 000 €',
  documentType: 'Passaporto',
  documentNumber: 'AB1234567',
  iban: '-',
  emailVerified: false,
}

export const stepsFixture: ProfileStep[] = [
  { label: 'Simulazione completata', shortLabel: 'Simul.', subtitle: 'Completato', icon: 'chart', status: 'complete' },
  { label: 'Credito approvato', shortLabel: 'Approv.', subtitle: 'Completato', icon: 'shield', status: 'complete' },
  { label: 'Account creato', shortLabel: 'Account', subtitle: 'Completato', icon: 'user', status: 'complete' },
  { label: 'Documenti caricati', shortLabel: 'Docum.', subtitle: 'Step attuale • Azione richiesta', icon: 'upload', status: 'current' },
  { label: 'Contratto firmato', shortLabel: 'Firma', subtitle: 'In attesa', icon: 'pen', status: 'waiting' },
]

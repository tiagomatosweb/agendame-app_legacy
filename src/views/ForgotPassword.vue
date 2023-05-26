<template>
  <div>
    <template v-if="state === 'forgotPassword'">
      <div>Esqueci senha</div>

      <VTextField v-model="email" />
      <VBtn @click="forgotPasword">Solicitar token</VBtn>
    </template>

    <template v-else-if="state === 'resetPassword'">
      <div>Resetar senha</div>

      <VTextField v-model="token" />
      <VTextField type="password" v-model="password" />
      <VBtn @click="resetPassword">Redefinir senha</VBtn>
      <a href="" @click.stop.prevent="changeToForgotPassword">Voltar</a>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '@/store/auth';

const email = ref()
const password = ref()
const token = ref()
const state = ref('forgotPassword')

function forgotPasword() {
  const authStore = useAuth()
  authStore.forgotPassword(email.value)
    .then(() => {
      changeToResetPassword()
    })
}

function resetPassword() {
  const authStore = useAuth()
  authStore.resetPassword(token.value, password.value)
    .then(() => {
      changeToForgotPassword()
    })
}

function changeToResetPassword() {
  state.value = 'resetPassword'
}

function changeToForgotPassword() {
  email.value = ''
  password.value = ''
  token.value = ''
  state.value = 'forgotPassword'
}
</script>











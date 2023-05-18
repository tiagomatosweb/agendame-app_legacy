<template>
  <VContainer>
    <VTextField v-model="firstName" />
    <VTextField v-model="lastName" />
    <VTextField type="email" v-model="email" />
    <VTextField type="password" v-model="password" />
    <VBtn @click="register">Cadastrar</VBtn>
  </VContainer>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '@/store/auth';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');

function register() {
  const authStore = useAuth();
  authStore.register(firstName.value, lastName.value, email.value, password.value)
}
</script>
















<template>
  <VContainer>
    Quick deploy
    <VTextField v-model="email" />
    <VTextField v-model="password" />
    <VBtn @click="login">Login</VBtn>
  </VContainer>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '@/store/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuth()

const email = ref('test@example.com');
const password = ref('password');

function login() {
  authStore.login(email.value, password.value).then(() => {
    router.push({ name: 'dashboard' });
  })
}
</script>

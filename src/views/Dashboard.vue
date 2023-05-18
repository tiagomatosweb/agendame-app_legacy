<template>
  <VContainer>
    Dashboard

    <VBtn @click="logout">Logout</VBtn>
    <pre>
      {{ meStore.user }}
    </pre>
  </VContainer>
</template>

<script setup>
import { useAuth } from '@/store/auth';
import { useRouter } from 'vue-router';
import { useMe } from '@/store/me';

const meStore = useMe();
const authStore = useAuth();
const router = useRouter()

function logout() {
  authStore.logout().then(() => {
    router.push({ name: 'login' })
  })
}
</script>

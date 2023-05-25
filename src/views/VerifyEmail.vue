<template>
  <div>
    <div v-if="isLoading">
      Verificando
    </div>

    <div v-else-if="!isReady">
      Ops! Parece que esse token está inválido!
<!--TODO: mapear errors-->
<!--      Ops! Você já verificou seu email.-->
    </div>

    <div v-else>
      Email verificado <br>
      Obrigado, {{ state.data.first_name }} por verificar seu email!
    </div>
  </div>
</template>

<script setup>
import { useAuth } from '@/store/auth';
import { useRoute } from 'vue-router';
import { useAsyncState } from '@vueuse/core'

const authStore = useAuth()
const route = useRoute()

const { state, isReady, isLoading } = useAsyncState(
  authStore.verifyEmail(route.query.token).then(r => r.data),
)
</script>

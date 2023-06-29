<template>
  <VContainer>
    Dashboard <br>
    <VBtn @click="subscribe()" :loading="loading">Assinar</VBtn>
  </VContainer>
</template>

<script setup>
import { useSubscription } from "@/store/subscription";
import {ref} from "vue";

const loading = ref(false)
function subscribe() {
  loading.value = true
  const subscriptionStore = useSubscription()
  subscriptionStore.subscribe().then((response) => {
    if (response?.stripe_url) {
      window.location.href = response?.stripe_url
    }
  }).catch(() => {
    loading.value = false
  })
}
</script>

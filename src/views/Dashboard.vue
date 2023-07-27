<template>
  <VContainer>
    Dashboard <br>
    <VBtn v-if="can('ship_product')">Despachar produto</VBtn>
    <VBtn v-if="can('delete_user')">Deletar usuário</VBtn>
    <pre>{{user}}</pre>
  </VContainer>
</template>

<script setup>
import { useMe } from "@/store/me";

const { user, can } = useMe()
</script>

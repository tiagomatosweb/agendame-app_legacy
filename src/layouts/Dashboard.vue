<template>
  <v-app>
    <TheHeader />

    <v-main>
      <v-container fluid class="page-wrapper">
        <div class="maxWidth">
          <RouterView />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import TheHeader from "@/components/Shell/TheHeader.vue";
</script>

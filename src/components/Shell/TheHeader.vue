<template>
  <v-navigation-drawer left elevation="0"  app class="leftSidebar"  v-model="sidebarDrawer">
    <div class="pa-5">
      <Logo />
    </div>

    <div>
<!--      <perfect-scrollbar class="scrollnavbar">-->
        <v-list class="pa-6">
          <v-list-subheader color="darkText" class="smallCap text-uppercase text-subtitle-2 mt-5 font-weight-bold">MENU</v-list-subheader>

          <v-list-item
            rounded
            class="mb-1"
            active-color="primary"
          >
            <!---If icon-->
            <template v-slot:prepend>
              <v-icon icon="mdi-account" />
            </template>

            <v-list-item-title>User</v-list-item-title>
          </v-list-item>
        </v-list>

        <div class="pa-4">
<!--          <ExtraBox />-->
        </div>
<!--      </perfect-scrollbar>-->
    </div>

  </v-navigation-drawer>

  <v-app-bar elevation="0" height="70">
    <div class="d-flex align-center justify-space-between w-100">
      <div>
        <v-btn class="hidden-lg-and-up ms-md-3 ms-sm-5 ms-3 text-muted" @click="sidebarDrawer = !sidebarDrawer" icon variant="flat"
               size="small">
          <v-icon icon="mdi-menu" />
        </v-btn>
      </div>

      <div>
        <UserDropdown />
      </div>
    </div>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";
import Logo from "@/components/logo/Logo.vue";
import UserDropdown from "@/components/UserDropdown.vue";

const sidebarDrawer = ref(true);
</script>

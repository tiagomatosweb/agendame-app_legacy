<template>
    <v-menu :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-btn class="profileBtn custom-hover-primary" variant="text" v-bind="props" icon>
                <v-avatar size="35">
                    <img src="@/assets/images/users/avatar-1.jpg" height="35" alt="user" />
                </v-avatar>
            </v-btn>
        </template>

        <v-sheet rounded="md" width="200" elevation="10" class="mt-2">
            <v-list class="py-0" lines="one" density="compact">
                <v-list-item value="item1" active-color="primary" >
                    <template v-slot:prepend>
                        <v-icon icon="mdi-account-outline" />
                    </template>
                    <v-list-item-title class="pl-4 text-body-1">My Profile</v-list-item-title>
                </v-list-item>
                <v-list-item value="item2" active-color="primary">
                    <template v-slot:prepend>
<!--                        <MailIcon stroke-width="1.5" size="20"/>-->
                    </template>
                    <v-list-item-title  class="pl-4 text-body-1">My Account</v-list-item-title>
                </v-list-item>
                <v-list-item value="item3" active-color="primary">
                    <template v-slot:prepend>
<!--                        <ListCheckIcon stroke-width="1.5"  size="20"/>-->
                    </template>
                    <v-list-item-title class="pl-4 text-body-1">My Task</v-list-item-title>
                </v-list-item>
            </v-list>
            <div class="pt-4 pb-4 px-5 text-center">
                <v-btn color="primary" variant="outlined" block @click="logout">Logout</v-btn>
            </div>
        </v-sheet>
    </v-menu>
</template>

<script setup>
import { useAuth } from "@/store/auth";
import { useRouter } from "vue-router";

const authStore = useAuth();
const router = useRouter()

function logout() {
  authStore.logout().then(() => {
    router.push({ name: 'login' })
  })
}
</script>

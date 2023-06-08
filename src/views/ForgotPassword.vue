<template>
  <div class="authentication">
    <v-container fluid class="pa-3">
      <v-row class="h-100vh d-flex justify-center align-center">
        <v-col cols="12" lg="4" xl="3" class="d-flex align-center">
          <v-card rounded="md" elevation="10" class="px-sm-1 px-0 withbg mx-auto" max-width="500">
            <v-card-item class="pa-sm-8">
              <div class="d-flex justify-center py-4">
                <Logo />
              </div>

              <div class="text-body-1 text-muted text-center mb-3">Your Social Campaigns</div>

              <v-row
                v-if="state === 'forgotPassword'"
                class="d-flex mb-3"
              >
                <v-col cols="12">
                  <v-label class="font-weight-bold mb-1">E-mail</v-label>
                  <v-text-field variant="outlined" type="email" hide-details color="primary"></v-text-field>
                </v-col>

                <v-col cols="12" >
                  <v-btn color="primary" size="large" block flat @click="forgotPasword">Solicitar token</v-btn>
                </v-col>
              </v-row>

              <v-row
                v-else-if="state === 'resetPassword'"
                class="d-flex mb-3"
              >
                <v-col cols="12">
                  <v-label class="font-weight-bold mb-1">Token</v-label>
                  <v-text-field variant="outlined" type="text" hide-details color="primary"></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-label class="font-weight-bold mb-1">Nova senha</v-label>
                  <v-text-field variant="outlined" type="text" hide-details color="primary"></v-text-field>
                </v-col>

                <v-col cols="12" >
                  <v-btn color="primary" size="large" block flat @click="resetPassword">Redefinir senha</v-btn>
                </v-col>
              </v-row>

              <h6 class="text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3">
                Lembrou?
                <RouterLink :to="{ name: 'login' }"
                            class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2">
                  Login</RouterLink>
              </h6>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '@/store/auth';
import Logo from "@/components/logo/Logo.vue";

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











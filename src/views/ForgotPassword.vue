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

                <v-alert
                        v-if="isReset"
                    type="success"
                    text="Senha alterada com sucesso"
                    :icon="false"
                    class="mb-3"
                />

              <ForgotPasswordForm
                      v-if="state === 'forgotPassword'"
                      @after-request="changeToResetPassword"
              />

              <ResetPasswordForm
                      v-else-if="state === 'resetPassword'"
                      @after-reset="changeToForgotPassword"
              />

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
import ForgotPasswordForm from "@/components/Auth/ForgotPasswordForm.vue";
import ResetPasswordForm from "@/components/Auth/ResetPasswordForm.vue";

const state = ref('forgotPassword')
const isReset = ref(false)

function changeToResetPassword() {
  state.value = 'resetPassword'
}

function changeToForgotPassword() {
  state.value = 'forgotPassword'
  isReset.value = true
}
</script>











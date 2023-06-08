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

              <v-row class="d-flex mb-3">
                <v-col cols="12">
                  <v-label class="font-weight-bold mb-1">E-mail</v-label>
                  <v-text-field variant="outlined" hide-details color="primary"></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-label class="font-weight-bold mb-1">Senha</v-label>
                  <v-text-field variant="outlined" type="password"  hide-details color="primary"></v-text-field>
                </v-col>

                <v-col cols="12" class="pt-0">
                  <div class="d-flex flex-wrap align-center ml-n2">
                    <div class="ml-sm-auto">
                      <RouterLink :to="{ name: 'forgotPassword'}"
                                  class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">Esqueci minh senha</RouterLink>
                    </div>
                  </div>
                </v-col>

                <v-col cols="12" class="pt-0">
                  <v-btn to="/" color="primary" size="large" block flat>Login</v-btn>
                </v-col>
              </v-row>

              <h6 class="text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3">
                Novo aqui?
                <RouterLink :to="{ name: 'register' }"
                            class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2">
                  Crie uma conta</RouterLink>
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
import Logo from '@/components/logo/Logo.vue'
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

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
                  <v-label class="font-weight-bold mb-1">Primeiro nome</v-label>
                  <v-text-field variant="outlined" hide-details color="primary"></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-label class="font-weight-bold mb-1">Sobrenome</v-label>
                  <v-text-field variant="outlined" hide-details color="primary"></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-label class="font-weight-bold mb-1">E-mail</v-label>
                  <v-text-field variant="outlined" type="email" hide-details color="primary"></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-label class="font-weight-bold mb-1">Senha</v-label>
                  <v-text-field variant="outlined" type="password"  hide-details color="primary"></v-text-field>
                </v-col>
                <v-col cols="12" >
                  <v-btn to="/" color="primary" size="large" block flat>Cadastrar</v-btn>
                </v-col>
              </v-row>

              <h6 class="text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3">
                Já é cadastrado?
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

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');

function register() {
  const authStore = useAuth();
  authStore.register(firstName.value, lastName.value, email.value, password.value)
}
</script>
















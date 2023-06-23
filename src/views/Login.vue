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
                    v-if="errorMessage"
                    type="error"
                    :text="errorMessage"
                    :icon="false"
                    class="mb-3"
                />

                <form @submit="submit">
                  <v-row class="d-flex mb-3">
                    <v-col cols="12">
                      <v-label class="font-weight-bold mb-1">E-mail</v-label>
                      <v-text-field
                              v-model="email"
                              variant="outlined"
                              color="primary"
                              :hide-details="!errors.email"
                              :error-messages="errors.email"
                      />
                    </v-col>

                    <v-col cols="12">
                      <v-label class="font-weight-bold mb-1">Senha</v-label>
                      <v-text-field
                              v-model="password"
                              variant="outlined"
                              type="password"
                              color="primary"
                              :hide-details="!errors.password"
                              :error-messages="errors.password"
                      />
                    </v-col>

                    <v-col cols="12" class="pt-0">
                      <div class="text-right">
                          <RouterLink :to="{ name: 'forgotPassword'}"
                                      class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">Esqueci minha senha</RouterLink>
                      </div>
                    </v-col>

                    <v-col cols="12" class="pt-0">
                      <v-btn
                              type="submit"
                          color="primary"
                          size="large"
                          block
                          flat
                          :loading="isSubmitting"
                          :disabled="isSubmitting"
                      >Login</v-btn>
                    </v-col>
                  </v-row>
                </form>

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
import Logo from '@/components/logo/Logo.vue'
import { useAuth } from '@/store/auth';
import { useRouter } from 'vue-router';
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup'
import messages from "@/utils/messages";
import { ref } from "vue";

const errorMessage = ref(null)
const router = useRouter()
const authStore = useAuth()

const schema = yup.object({
    email: yup.string().required().email().label('E-mail'),
    password: yup.string().required().label('Senha'),
});

const { handleSubmit, errors, isSubmitting } = useForm({
    validationSchema: schema,
})

const submit = handleSubmit((values) => {
    errorMessage.value = null
    return authStore.login(values.email, values.password).then(() => {
        router.push({ name: 'dashboard' });
    }).catch((e) => {
        errorMessage.value = messages[e.response.data.error]
    })
})

const { value: email } = useField('email');
const { value: password } = useField('password');
</script>

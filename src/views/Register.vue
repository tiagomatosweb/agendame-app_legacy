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
                      <v-label class="font-weight-bold mb-1">Primeiro nome</v-label>
                      <v-text-field
                              v-model="firstName"
                              variant="outlined"
                              :hide-details="!errors.first_name"
                              :error-messages="errors.first_name"
                              color="primary"></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-label class="font-weight-bold mb-1">Sobrenome</v-label>
                      <v-text-field
                              v-model="lastName"
                              variant="outlined"
                              color="primary"
                              :hide-details="!errors.last_name"
                              :error-messages="errors.last_name"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-label class="font-weight-bold mb-1">E-mail</v-label>
                      <v-text-field
                              v-model="email"
                              variant="outlined"
                              type="email"
                              color="primary"
                              :hide-details="!errors.email"
                              :error-messages="errors.email"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-label class="font-weight-bold mb-1">Senha</v-label>
                      <v-text-field v-model="password" variant="outlined" type="password" color="primary"
                                    :hide-details="!errors.password"
                                    :error-messages="errors.password"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" >
                      <v-btn
                              type="submit"
                              color="primary"
                              size="large"
                              block
                              flat
                              :loading="isSubmitting"
                              :disabled="isSubmitting"
                      >Cadastrar</v-btn>
                    </v-col>
                  </v-row>
                </form>

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
import { useRouter } from 'vue-router';
import Logo from "@/components/logo/Logo.vue";
import messages from "@/utils/messages";
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'

const authStore = useAuth();
const router = useRouter();
const errorMessage = ref(null)

const schema = yup.object({
    first_name: yup.string().required().label('Primeiro nome'),
    email: yup.string().required().email().label('E-mail'),
    password: yup.string().required().min(8).label('Senha'),
});

const { handleSubmit, errors, isSubmitting } = useForm({
    validationSchema: schema,
})

const submit = handleSubmit((values) => {
    errorMessage.value = null
    return authStore.register(values.first_name, values.last_name, values.email, values.password).then(() => {
        router.push({ name: 'login' });
    }).catch((e) => {
        errorMessage.value = messages[e.response.data.error]
    })
})

const { value: firstName } = useField('first_name');
const { value: lastName } = useField('last_name');
const { value: email } = useField('email');
const { value: password } = useField('password');
</script>
















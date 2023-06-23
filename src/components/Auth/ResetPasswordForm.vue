<template>
  <form @submit="submit">
    <v-alert
      v-if="errorMessage"
      type="error"
      :text="errorMessage"
      :icon="false"
      class="mb-3"
    />

  <v-row class="d-flex mb-3">
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Token</v-label>
      <v-text-field v-model="token" variant="outlined" type="text" color="primary" :hide-details="!errors.token"
                    :error-messages="errors.token"></v-text-field>
    </v-col>

    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Nova senha</v-label>
      <v-text-field v-model="password" variant="outlined" type="password" color="primary" :hide-details="!errors.password"
                    :error-messages="errors.password"></v-text-field>
    </v-col>

    <v-col cols="12" >
      <v-btn type="submit" color="primary" size="large" block flat :loading="isSubmitting"
             :disabled="isSubmitting">Redefinir senha</v-btn>
    </v-col>
  </v-row>
  </form>
</template>

<script setup>
import { useAuth } from "@/store/auth";
import messages from "@/utils/messages";
import { ref } from "vue";
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'

const emits = defineEmits(['after-reset'])

const errorMessage = ref(null)
const authStore = useAuth()

const schema = yup.object({
  token: yup.string().required().label('Token'),
  password: yup.string().required().min(8).label('Senha'),
});

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
})

const submit = handleSubmit((values) => {
  errorMessage.value = null

  return authStore.resetPassword(values.token, values.password)
    .then(() => {
      emits('after-reset')
    }).catch((e) => {
      errorMessage.value = messages[e.response.data.error]
    })
})

const { value: token } = useField('token');
const { value: password } = useField('password');
</script>

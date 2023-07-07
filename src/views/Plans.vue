<template>
  <v-container>
    <h2 class="text-h2 text-center pt-10">Planos flexíveis</h2>

    <div
      v-if="isLoading"
      class="pa-5"
    >
      <div class="text-center">
        <v-progress-circular
          indeterminate
          color="primary"
        />
      </div>
    </div>

    <template v-else>
      <v-row justify="center" class="mt-1 mb-sm-10 mb-5">
        <v-col cols="auto">
          <div class="d-flex items-center justify-center">
            <v-label class="text-subtitle-1 ma-none">Mensal</v-label>
            <v-switch
              v-model="frequency"
              color="primary"
              true-value="yearly"
              false-value="monthly"
              class="mx-4"
              hide-details
            />
            <v-label class="text-subtitle-1">Anual</v-label>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="plan in plans" :key="plan.id">
          <v-card elevation="10" border class="pa-sm-8 pa-4">
            <div class="d-flex justify-space-between">
              <h4 class="text-body-2 text-medium-emphasis text-uppercase">{{ plan.label }}</h4>
            </div>

            <div class="d-flex align-center mt-4">
              <sup class="text-h6 mt-n3 pr-2">R$</sup>
              <h2 class="display-1">{{ isYearly ? plan.price_yearly : plan.price_monthly }}</h2>
              <span class="text-medium-emphasis font-weight-medium mt-4 ml-2">
                {{ isYearly ? '/ano' : '/mês' }}
              </span>
            </div>

            <div class="description pt-5 pb-2">
              <span v-html="plan.description" />
            </div>

            <v-btn block flat color="primary" size="large" @click="selectPlan(plan.id)">Selecione</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script setup>
import { useAuth } from "@/store/auth";
import { useRouter } from 'vue-router'
import { useAsyncState } from "@vueuse/core";
import { usePlans } from "@/store/plans";
import {computed, ref} from "vue";
import { useSubscription } from "@/store/subscription";

const plansStore = usePlans();
const { state: plans, isLoading } = useAsyncState(
  plansStore.getPlans(),
  {}
)

const frequency = ref('monthly')
const isYearly = computed(() => frequency.value === 'yearly')

const router = useRouter()
const authStore = useAuth()

function selectPlan(planId) {
  if (!authStore.isLoggedIn) {
    return router.push({ name: 'login' })
  }

  const subscriptionStore = useSubscription()
  subscriptionStore.subscribe(planId, frequency.value).then((response) => {
    if (response?.stripe_url) {
      window.location.href = response?.stripe_url
    }
  }).catch(() => {
  })
}

</script>

<style scoped>
.description {
  font-size: 14px;
}
.description ul {
  list-style: none;
  font-weight: 500;
}
</style>

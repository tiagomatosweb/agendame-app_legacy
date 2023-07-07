import { defineStore } from 'pinia';
import axios from 'axios';

export const useSubscription = defineStore('subscription', {
  state: () => ({}),

  actions: {
    subscribe(planId, frequency) {
      return axios.post('/api/subscribe', {
        plan_id: planId,
        frequency
      }).then(r => r.data);
    }
  }
})

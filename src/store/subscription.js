import { defineStore } from 'pinia';
import axios from 'axios';

export const useSubscription = defineStore('subscription', {
  state: () => ({}),

  actions: {
    subscribe() {
      return axios.post('/api/subscribe').then(r => r.data);
    }
  }
})

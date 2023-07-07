import { defineStore } from 'pinia';
import axios from 'axios';

export const usePlans = defineStore('plans', {
  state: () => ({}),

  actions: {
    getPlans() {
      return axios.get('/api/plans').then(r => r.data.data);
    }
  }
})

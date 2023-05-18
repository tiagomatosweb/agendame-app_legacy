import { defineStore } from 'pinia';
import axios from 'axios';

export const useMe = defineStore('me', {
  state: () => ({
    user: null
  }),

  actions: {
    async getMe() {
      this.user = await axios.get('/api/me').then(r => r.data.data);
    }
  }
})

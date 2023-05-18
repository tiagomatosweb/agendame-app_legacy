import { defineStore } from 'pinia';
import { useMe } from '@/store/me';
import axios from 'axios';

export const useAuth = defineStore('auth', {
  state: () => ({}),

  actions: {
    sanctum() {
      return axios.get('sanctum/csrf-cookie');
    },
    login(email, password) {
      const meStore = useMe()

      return axios.post('api/login', {
        email, password
      }).then(r => {
        meStore.user = r.data.data
      })
    },
    logout() {
      const meStore = useMe()
      return axios.post('api/logout').then(() => {
        meStore.user = null
      })
    },
    register(firstName, lastName = '', email, password) {
      return axios.post('api/register', {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
      })
    }
  },
  getters: {
    isLoggedIn() {
      const meStore = useMe()
      return !!meStore.user
    }
  }
})

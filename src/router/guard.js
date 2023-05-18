import { useAuth } from '@/store/auth';

export const auth = (to, from, next) => {
  const authStore = useAuth();
  if (!authStore.isLoggedIn) {
    next({ name: 'login' })
  } else {
    next()
  }
}

export const redirectIfAuthenticated = (to, from, next) => {
  const authStore = useAuth();
  if (authStore.isLoggedIn) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
}

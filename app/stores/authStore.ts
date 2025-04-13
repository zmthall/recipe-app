import type { User } from 'firebase/auth'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const error = ref<string | undefined>(undefined);
  const authResolved = ref<boolean>(false)
  const errorTimeout = ref<NodeJS.Timeout | undefined>(undefined);
  
  const authenticated = computed(() => !!user.value)

  watch(error, (newError) => {
    if(errorTimeout.value) {
      clearTimeout(errorTimeout.value)
      errorTimeout.value = undefined;
    }

    if(newError) {
      errorTimeout.value = setTimeout(() => {
        error.value = undefined
      }, 10000);
    } 
  })

  return {
    user,
    error,
    authenticated,
    authResolved
  }
})

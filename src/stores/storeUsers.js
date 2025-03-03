import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useUserStore = defineStore('userStore', () => {
  const users = ref([]);
  const isLoading = ref(false); 
  const apiError = ref(null);

  const fetchUsers = async () => {
    isLoading.value = true;
    apiError.value = null;
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log('API Response:', response.data);
      users.value = response.data; 
    } catch (err) {
      apiError.value = 'Failed to fetch users. Please try again later.'; 
      console.error('API Error:', err);
    } finally {
      isLoading.value = false;
    }
  };

  return { users, isLoading, apiError, fetchUsers };
});
<template>
  <div class="container mt-4">
    <SearchSort @updateSearch="searchQuery = $event" @updateSort="isAscending = $event" />
    <div v-if="loading" class="alert alert-info mt-3">Loading...</div>
    <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
    <table v-if="users && users.length > 0" class="table table-striped mt-3">
      <thead>
        <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Email</th>
          <th>Company Name</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in filteredUsers" :key="user.id" class="user-row">
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.company.name }}</td>
          <td>
            <button @click.stop="selectUser(user)" class="btn btn-sm btn-primary" title="View Details">
              <i class="fa fa-eye"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else-if="!loading && !error && users && users.length === 0" class="alert alert-warning mt-3">No users found.</div>
    <UserModal v-if="selectedUser" :show="modalOpen" :user="selectedUser" @close="modalOpen = false" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useUserStore } from '../stores/storeUsers';
import SearchSort from '../components/SearchSort.vue';
import UserModal from '../components/UserModal.vue';

const userStore = useUserStore();
const { users, isLoading: loading, apiError: error, fetchUsers } = userStore;

const searchQuery = ref('');
const isAscending = ref(true);
const modalOpen = ref(false);
const selectedUser = ref(null);

onMounted(() => {
  console.log('Component mounted, fetching users...');
  fetchUsers();
});

const filteredUsers = computed(() => {
  if (!users || users.length === 0) {
    return [];
  }

  let result = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );

  return result.sort((a, b) =>
    isAscending.value ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );
});

const selectUser = (user) => {
  selectedUser.value = user;
  modalOpen.value = true;
};
</script>

<style scoped>
.user-row {
  cursor: pointer;
}

.btn-primary {
  background: #ffa200 !important;
  border: none !important;
}
</style>
<template>
    <div class="search-sort-container mb-3">
      <input v-model="searchQuery" @input="updateSearch" type="text" class="search-input" placeholder="Search users..." />
      <button class="sort-button" type="button" @click="toggleSort">
        Sort <span class="sort-arrow">{{ isAscending ? '▲' : '▼' }}</span>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  const searchQuery = ref('');
  const isAscending = ref(true);
  const emit = defineEmits(['updateSearch', 'updateSort']);
  
  const updateSearch = () => {
    emit('updateSearch', searchQuery.value);
  };
  
  const toggleSort = () => {
    isAscending.value = !isAscending.value;
    emit('updateSort', isAscending.value);
  };
  </script>
  
  <style scoped>
  .search-sort-container {
    display: flex;
    align-items: center;
  }
  
  .search-input {
    border: 1px solid #ced4da;
    border-radius: 4px;
    padding: 0.375rem 0.75rem;
    flex-grow: 1;
  }
  
  .sort-button {
    background-color: #f8f9fa;
    border: 1px solid #ced4da;
    border-radius: 4px;
    padding: 0.375rem 0.75rem;
    cursor: pointer;
    margin-left: 10px;
  }
  
  .sort-arrow {
    margin-left: 5px;
  }
  </style>
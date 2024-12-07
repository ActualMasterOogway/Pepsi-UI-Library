<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const searchQuery = ref('');
const router = useRouter();

const handleSearch = () => {
  // TODO: Implement search functionality
  console.log('Searching for:', searchQuery.value);
};
</script>

<template>
  <div class="docs-search">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search documentation..."
      @keyup.enter="handleSearch"
    />
  </div>
</template>

<style lang="scss" scoped>
.docs-search {
  margin-bottom: 2rem;

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-size: 1rem;
    background-color: var(--background);
    color: var(--text-primary);

    &:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 2px rgba(0, 75, 147, 0.1);
    }

    &::placeholder {
      color: var(--text-secondary);
    }
  }
}
</style>
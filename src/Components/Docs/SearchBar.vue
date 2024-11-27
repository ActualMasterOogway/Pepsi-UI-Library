<template>
  <div>
    <input
      type="text"
      v-model="query"
      placeholder="Search documentation..."
      class="search-bar"
    />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      query: ''
    };
  }
};
</script>

<style scoped lang="sass">
.search-bar
  width: 100%
  padding: 8px
  font-size: 16px
  border: 1px solid #ccc
  border-radius: 4px
  margin-bottom: 16px
</style>
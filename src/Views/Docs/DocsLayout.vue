<script setup lang="ts">
import DocsSidebar from './Components/DocsSidebar.vue';
import DocsSearch from './Components/DocsSearch.vue';
</script>

<template>
  <div class="docs-layout">
    <DocsSidebar />
    <div class="docs-content">
      <DocsSearch />
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.docs-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: calc(100vh - 64px);

  .docs-content {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>
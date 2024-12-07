<script setup lang="ts">
import TheNavbar from './Components/TheNavbar.vue';
</script>

<template>
  <div class="app">
    <TheNavbar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
.app {
  min-height: 100vh;
  background-color: var(--background);
  color: var(--text-primary);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
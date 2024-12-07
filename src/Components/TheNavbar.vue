<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from '../Composables/useTheme';

const { isDark, toggleTheme } = useTheme();
const isMenuOpen = ref(false);
</script>

<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="logo">
        Pepsi UI Library
      </router-link>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
      <router-link to="/docs" class="navbar-item">Documentation</router-link>
      <router-link to="/contributors" class="navbar-item">Contributors</router-link>
      <router-link to="/updates" class="navbar-item">Updates</router-link>
      
      <div class="navbar-end">
        <button @click="toggleTheme" class="theme-toggle">
          {{ isDark ? '🌙' : '☀️' }}
        </button>
        <a href="https://discord.gg/pepsi-ui" target="_blank" class="discord-button">
          Join Discord
        </a>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: var(--background);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary);
  }

  .navbar-menu {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .navbar-item {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      color: var(--primary);
    }
  }

  .discord-button {
    background-color: var(--primary);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    
    &:hover {
      background-color: var(--accent);
    }
  }
}
</style>
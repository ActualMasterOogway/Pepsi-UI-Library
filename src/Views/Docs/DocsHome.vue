<script setup lang="ts">
import { ref } from 'vue';

const quickLinks = ref([
  {
    title: 'Installation',
    description: 'Get started with Pepsi UI Library in your Roblox game',
    path: '/docs/getting-started#installation',
  },
  {
    title: 'Components',
    description: 'Explore our collection of pre-built UI components',
    path: '/docs/components',
  },
  {
    title: 'Examples',
    description: 'View real-world examples and implementations',
    path: '/docs/examples',
  },
]);
</script>

<template>
  <div class="docs-home">
    <h1>Documentation</h1>
    <p class="intro">
      Welcome to the Pepsi UI Library documentation. Here you'll find everything you need to create
      beautiful and responsive user interfaces for your Roblox games.
    </p>

    <div class="quick-links">
      <h2>Quick Links</h2>
      <div class="links-grid">
        <router-link
          v-for="link in quickLinks"
          :key="link.path"
          :to="link.path"
          class="quick-link"
        >
          <h3>{{ link.title }}</h3>
          <p>{{ link.description }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.docs-home {
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  .intro {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 3rem;
    max-width: 800px;
  }

  .quick-links {
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
    }

    .links-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .quick-link {
      padding: 1.5rem;
      background-color: var(--background);
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      text-decoration: none;
      transition: transform 0.2s, box-shadow 0.2s;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      h3 {
        font-size: 1.2rem;
        color: var(--primary);
        margin-bottom: 0.5rem;
      }

      p {
        color: var(--text-secondary);
        font-size: 0.95rem;
        margin: 0;
      }
    }
  }
}
</style>
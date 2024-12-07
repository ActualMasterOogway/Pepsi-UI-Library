<script setup lang="ts">
import { ref } from 'vue';

const menuItems = ref([
  {
    title: 'Getting Started',
    path: '/docs/getting-started',
  },
  {
    title: 'Components',
    items: [
      { title: 'Button', path: '/docs/components/button' },
      { title: 'Input', path: '/docs/components/input' },
      { title: 'Modal', path: '/docs/components/modal' },
    ],
  },
  {
    title: 'Utilities',
    items: [
      { title: 'Theming', path: '/docs/utilities/theming' },
      { title: 'Layout', path: '/docs/utilities/layout' },
    ],
  },
]);
</script>

<template>
  <aside class="docs-sidebar">
    <nav>
      <div v-for="(item, index) in menuItems" :key="index" class="menu-section">
        <h3>{{ item.title }}</h3>
        <ul v-if="item.items">
          <li v-for="subItem in item.items" :key="subItem.path">
            <router-link :to="subItem.path" class="menu-link">
              {{ subItem.title }}
            </router-link>
          </li>
        </ul>
        <router-link v-else :to="item.path" class="menu-link">
          {{ item.title }}
        </router-link>
      </div>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
.docs-sidebar {
  background-color: var(--background);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem;
  height: 100%;

  .menu-section {
    margin-bottom: 2rem;

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .menu-link {
      display: block;
      padding: 0.5rem 0;
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.2s;

      &:hover, &.router-link-active {
        color: var(--primary);
      }
    }
  }
}
</style>
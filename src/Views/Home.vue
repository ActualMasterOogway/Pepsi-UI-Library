<script setup lang="ts">
import { ref } from 'vue';

const features = ref([
  {
    title: 'Customizable UI',
    description: 'Build beautiful, responsive interfaces with our customizable components',
    icon: '🎨'
  },
  {
    title: 'Developer-Friendly',
    description: 'Intuitive API with comprehensive documentation and examples',
    icon: '👩‍💻'
  },
  {
    title: 'Optimized for Roblox',
    description: 'Built specifically for Roblox game development',
    icon: '🎮'
  }
]);
</script>

<template>
  <main class="home">
    <section class="hero">
      <h1>Welcome to Pepsi UI Library</h1>
      <p class="subtitle">The modern UI framework for Roblox developers</p>
      <div class="cta-buttons">
        <router-link to="/docs" class="cta-button primary">Get Started</router-link>
        <a href="https://discord.gg/pepsi-ui" target="_blank" class="cta-button secondary">
          Join the Community
        </a>
      </div>
    </section>

    <section class="features">
      <h2>Why Choose Pepsi UI?</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.home {
  .hero {
    text-align: center;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
    color: white;

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;

    .cta-button {
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: bold;
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-2px);
      }

      &.primary {
        background-color: var(--secondary);
        color: white;
      }

      &.secondary {
        background-color: transparent;
        border: 2px solid white;
        color: white;
      }
    }
  }

  .features {
    padding: 4rem 2rem;
    background-color: var(--background);

    h2 {
      text-align: center;
      margin-bottom: 3rem;
      color: var(--text-primary);
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .feature-card {
      padding: 2rem;
      background-color: var(--background);
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;

      .feature-icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      h3 {
        color: var(--text-primary);
        margin-bottom: 1rem;
      }

      p {
        color: var(--text-secondary);
      }
    }
  }
}
</style>
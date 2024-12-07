<script setup lang="ts">
import { ref } from 'vue';

interface Contributor {
  username: string;
  avatar: string;
  contributions: number;
  badges: string[];
  rank: string;
}

const contributors = ref<Contributor[]>([
  {
    username: 'PepsiDev',
    avatar: 'https://github.com/pepsidev.png',
    contributions: 156,
    badges: ['🏆 Core Team', '⭐ Top Contributor', '🚀 Performance Master'],
    rank: 'Diamond'
  },
  {
    username: 'RobloxPro',
    avatar: 'https://github.com/robloxpro.png',
    contributions: 89,
    badges: ['🎮 Game Expert', '📚 Documentation Hero'],
    rank: 'Gold'
  },
  {
    username: 'UIWizard',
    avatar: 'https://github.com/uiwizard.png',
    contributions: 67,
    badges: ['🎨 Design Master', '💡 Innovation Star'],
    rank: 'Silver'
  }
]);

const getRankColor = (rank: string): string => {
  const colors = {
    Diamond: '#B9F2FF',
    Gold: '#FFD700',
    Silver: '#C0C0C0',
    Bronze: '#CD7F32'
  };
  return colors[rank as keyof typeof colors] || '#C0C0C0';
};
</script>

<template>
  <div class="contributors">
    <header class="contributors-header">
      <h1>Contributors Hall of Fame</h1>
      <p>Celebrating the amazing developers who make Pepsi UI Library possible.</p>
    </header>

    <div class="contributors-grid">
      <div 
        v-for="contributor in contributors" 
        :key="contributor.username" 
        class="contributor-card"
      >
        <div class="contributor-header">
          <img :src="contributor.avatar" :alt="contributor.username" class="avatar" />
          <div class="rank-badge" :style="{ backgroundColor: getRankColor(contributor.rank) }">
            {{ contributor.rank }}
          </div>
        </div>
        
        <div class="contributor-info">
          <h3>{{ contributor.username }}</h3>
          <p class="contributions">{{ contributor.contributions }} contributions</p>
          
          <div class="badges">
            <span 
              v-for="(badge, index) in contributor.badges" 
              :key="index" 
              class="badge"
            >
              {{ badge }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="join-section">
      <h2>Want to Contribute?</h2>
      <p>Join our community and help make Pepsi UI Library even better!</p>
      <div class="cta-buttons">
        <a href="https://github.com/pepsi-ui/library" target="_blank" class="github-button">
          View on GitHub
        </a>
        <a href="https://discord.gg/pepsi-ui" target="_blank" class="discord-button">
          Join Discord
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contributors {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  &-header {
    text-align: center;
    margin-bottom: 3rem;

    h1 {
      font-size: 2.5rem;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    p {
      color: var(--text-secondary);
      font-size: 1.2rem;
    }
  }

  &-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }
}

.contributor-card {
  background-color: var(--background);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }

  .contributor-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
    }

    .rank-badge {
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-weight: bold;
      font-size: 0.9rem;
      color: #333;
    }
  }

  .contributor-info {
    h3 {
      font-size: 1.3rem;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .contributions {
      color: var(--text-secondary);
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .badges {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      .badge {
        background-color: var(--primary);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 15px;
        font-size: 0.8rem;
      }
    }
  }
}

.join-section {
  text-align: center;
  padding: 3rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;

    a {
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: bold;
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-2px);
      }
    }

    .github-button {
      background-color: var(--text-primary);
      color: var(--background);
    }

    .discord-button {
      background-color: var(--primary);
      color: white;
    }
  }
}
</style>
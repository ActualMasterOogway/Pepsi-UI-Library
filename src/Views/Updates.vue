<script setup lang="ts">
import { ref } from 'vue';

interface Update {
  version: string;
  date: string;
  type: 'release' | 'upcoming' | 'announcement';
  title: string;
  description: string;
  changes?: string[];
}

const updates = ref<Update[]>([
  {
    version: 'v1.2.0',
    date: 'Coming Soon',
    type: 'upcoming',
    title: 'Advanced Animation System',
    description: 'New animation system with predefined transitions and custom animation support.',
    changes: [
      'Add new Animation API for component transitions',
      'Introduce custom animation presets',
      'Improve performance for complex animations',
      'Add documentation and examples'
    ]
  },
  {
    version: 'v1.1.0',
    date: '2024-02-15',
    type: 'release',
    title: 'Enhanced Component Library',
    description: 'Major update introducing new components and improvements.',
    changes: [
      'Added DataTable component',
      'Added Toast notification system',
      'Improved Button component with new variants',
      'Fixed various accessibility issues'
    ]
  },
  {
    type: 'announcement',
    version: '',
    date: '2024-02-01',
    title: 'Community Showcase Program',
    description: 'We\'re excited to announce our new Community Showcase Program! Share your Pepsi UI implementations and get featured in our documentation.',
  }
]);

const getTypeIcon = (type: Update['type']): string => {
  const icons = {
    release: '🚀',
    upcoming: '✨',
    announcement: '📢'
  };
  return icons[type];
};

const getTypeClass = (type: Update['type']): string => {
  return `update-card--${type}`;
};
</script>

<template>
  <div class="updates">
    <header class="updates-header">
      <h1>Updates & Announcements</h1>
      <p>Stay up to date with the latest changes and upcoming features.</p>
    </header>

    <div class="updates-timeline">
      <div
        v-for="update in updates"
        :key="`${update.version}-${update.date}`"
        class="update-card"
        :class="getTypeClass(update.type)"
      >
        <div class="update-header">
          <div class="update-meta">
            <span class="update-icon">{{ getTypeIcon(update.type) }}</span>
            <span class="update-version" v-if="update.version">{{ update.version }}</span>
            <span class="update-date">{{ update.date }}</span>
          </div>
          <span class="update-type">{{ update.type }}</span>
        </div>

        <div class="update-content">
          <h2>{{ update.title }}</h2>
          <p>{{ update.description }}</p>

          <ul v-if="update.changes" class="update-changes">
            <li v-for="(change, index) in update.changes" :key="index">
              {{ change }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="updates-footer">
      <h2>Stay Connected</h2>
      <p>Join our community to get real-time updates and participate in discussions.</p>
      <div class="social-links">
        <a href="https://github.com/pepsi-ui/library" target="_blank" class="social-button github">
          Follow on GitHub
        </a>
        <a href="https://discord.gg/pepsi-ui" target="_blank" class="social-button discord">
          Join Discord
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.updates {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

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

  &-timeline {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 4rem;
  }
}

.update-card {
  background-color: var(--background);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid var(--primary);

  &--release {
    border-left-color: var(--primary);
  }

  &--upcoming {
    border-left-color: var(--secondary);
  }

  &--announcement {
    border-left-color: var(--accent);
  }

  .update-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .update-meta {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      .update-icon {
        font-size: 1.2rem;
      }

      .update-version {
        font-weight: bold;
        color: var(--primary);
      }

      .update-date {
        color: var(--text-secondary);
        font-size: 0.9rem;
      }
    }

    .update-type {
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: bold;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .update-content {
    h2 {
      font-size: 1.3rem;
      color: var(--text-primary);
      margin-bottom: 0.75rem;
    }

    p {
      color: var(--text-secondary);
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    .update-changes {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        position: relative;
        padding-left: 1.5rem;
        margin-bottom: 0.5rem;
        color: var(--text-secondary);

        &::before {
          content: '•';
          position: absolute;
          left: 0.5rem;
          color: var(--primary);
        }
      }
    }
  }
}

.updates-footer {
  text-align: center;
  padding-top: 3rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.8rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }

  .social-links {
    display: flex;
    gap: 1rem;
    justify-content: center;

    .social-button {
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: bold;
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-2px);
      }

      &.github {
        background-color: var(--text-primary);
        color: var(--background);
      }

      &.discord {
        background-color: var(--primary);
        color: white;
      }
    }
  }
}
</style>
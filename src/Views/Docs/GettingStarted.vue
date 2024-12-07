<script setup lang="ts">
import { ref } from 'vue';

const installationSteps = ref([
  {
    title: 'Install the Package',
    code: 'npm install @pepsi-ui/roblox',
  },
  {
    title: 'Import Components',
    code: "local PepsiUI = require('@pepsi-ui/roblox')",
  },
]);
</script>

<template>
  <div class="getting-started">
    <h1>Getting Started</h1>
    
    <section class="installation">
      <h2>Installation</h2>
      <p>Follow these steps to add Pepsi UI Library to your Roblox game:</p>
      
      <div class="steps">
        <div v-for="(step, index) in installationSteps" :key="index" class="step">
          <h3>{{ step.title }}</h3>
          <pre><code>{{ step.code }}</code></pre>
        </div>
      </div>
    </section>

    <section class="usage">
      <h2>Basic Usage</h2>
      <p>
        After installation, you can start using Pepsi UI components in your game.
        Here's a simple example:
      </p>
      <pre><code>local Button = PepsiUI.Button.new()
Button.Text = "Click Me!"
Button.Parent = game.Players.LocalPlayer.PlayerGui</code></pre>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.getting-started {
  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: var(--text-primary);
  }

  section {
    margin-bottom: 3rem;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    p {
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
  }

  .steps {
    .step {
      margin-bottom: 2rem;

      h3 {
        font-size: 1.2rem;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
      }
    }
  }

  pre {
    background-color: #1a1a1a;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;

    code {
      color: #fff;
      font-family: 'Fira Code', monospace;
    }
  }
}
</style>
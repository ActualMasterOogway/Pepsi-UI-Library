<script setup lang="ts">
const quotes = [
  "Seems this page has been pepsied.",
  "Pepsi was here.",
  "Oops! This page fizzled out.",
  "No bubbles here, just a missing page!",
  "You've reached the empty can."
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
</script>

<template>
  <div class="not-found">
    <h1>404</h1>
    <p class="quote">{{ randomQuote }}</p>
    <router-link to="/" class="home-button">Return Home</router-link>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;

  h1 {
    font-size: 6rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }

  .quote {
    font-size: 1.5rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }

  .home-button {
    background-color: var(--primary);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-2px);
      background-color: var(--accent);
    }
  }
}
</style>
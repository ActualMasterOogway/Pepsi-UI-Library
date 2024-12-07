import { ref, watch } from 'vue';
import { usePreferredDark } from '@vueuse/core';

export function useTheme() {
  const isDark = ref(usePreferredDark().value);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  watch(isDark, (newValue) => {
    document.documentElement.setAttribute('data-theme', newValue ? 'dark' : 'light');
  }, { immediate: true });

  return {
    isDark,
    toggleTheme,
  };
}
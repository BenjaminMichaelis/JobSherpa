<template>
  <div class="text-center">
    <v-btn @click="toggleTheme"
      ><v-icon icon="mdi-moon-waning-crescent"></v-icon
    ></v-btn>
  </div>
</template>

<script lang="ts">
import { useTheme } from "vuetify";

export default {
  setup() {
    const theme = useTheme();

    return {
      theme,
      toggleTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark"),
    };
  },
};
</script>

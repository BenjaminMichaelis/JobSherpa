<template>
  <v-layout>
    <v-navigation-drawer expand-on-hover rail>
      <v-list>
        <v-list-item
          prepend-avatar="src\assets\default_profile.png"
          title="Default Profile"
          subtitle="DefaultProfile@gmailcom"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          @click="toggleTheme"
          prepend-icon="mdi-theme-light-dark"
          title="Change Theme"
          value="mytheme"
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main style="height: 250px"></v-main>
  </v-layout>
</template>
<script>
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

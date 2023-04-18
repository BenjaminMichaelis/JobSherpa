<template>
  <v-app id="vue-app">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list>
        <div v-for="(link, i) in sidebarLinks" :key="i">
          <template v-if="link.isVisible">
            <v-divider v-if="link.isDivider" />

            <v-list-item v-else link :to="link.route">
              <v-row class="align-center">
                <v-col cols="2">
                  <v-list-item-action>
                    <v-icon> {{ link.icon }} </v-icon>
                  </v-list-item-action>
                </v-col>
                <v-col cols="auto">
                  <v-list-item>
                    <v-list-item-title> {{ link.name }} </v-list-item-title>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-list-item>
          </template>
        </div>

        <v-divider />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark dense clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <v-btn color="black" size="x-large" variant="plain" to="/">
          JobSherpa
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-divider class="px-3 py-1 mr-3" vertical />
      <v-btn
        @click="toggleTheme"
        :icon="
          theme.global.current.value.dark
            ? 'mdi-weather-sunny'
            : 'mdi-moon-waning-crescent'
        "
      ></v-btn>
    </v-app-bar>
    <v-main>
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
    <v-footer class="bg-grey-lighten-1">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in footerLinks"
          :key="link.name"
          :href="link.uri"
          :prepend-icon="link.icon"
          stacked
          variant="text"
          color="white"
          target="_blank"
          rel="noopener noreferrer"
          class="mx-2"
          >{{ link.name }}</v-btn
        >
        <v-col class="text-center mt-4" cols="12">
          <v-icon size="small" icon="mdi-copyright"></v-icon>
          {{ new Date().getFullYear() }}
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
import { useTheme } from "vuetify";
import { DARK_THEME } from "@/lib/symbols";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
onMounted(() => {
  const storedTheme = localStorage.getItem(DARK_THEME);

  if (storedTheme) {
    if (storedTheme === "true") {
      theme.global.name.value = "dark";
    } else {
      theme.global.name.value = "light";
    }
  } else
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
});
const theme = useTheme();

const store = useStore();

const isAuthenticated = computed(() => store.getters.isAuthenticated);

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
  localStorage.setItem(DARK_THEME, theme.global.current.value.dark.toString());
}
type Link = {
  name: string;
  uri: string;
  icon: string;
};
const footerLinks: Link[] = [
  {
    name: "Github",
    uri: "https://github.com/BenjaminMichaelis/JobSherpa",
    icon: "mdi-github",
  },
];
const drawer = ref(false);
const sidebarLinks = computed(() => {
  const links = [
    {
      route: "/",
      icon: "mdi-home",
      name: "Home",
      isVisible: true,
      isDivider: false,
    },
    {
      route: "/dashboard",
      icon: "mdi-view-dashboard-variant",
      name: "Dashboard",
      isVisible: true,
      isDivider: false,
    },
    {
      route: "",
      icon: "",
      name: "",
      isVisible: true,
      isDivider: true,
    },
    {
      route: "/login",
      icon: "mdi-login",
      name: "Login",
      isVisible: !isAuthenticated.value,
      isDivider: false,
    },
    {
      route: "/logout",
      icon: "mdi-logout",
      name: "Logout",
      isVisible: isAuthenticated.value,
      isDivider: false,
    },
    {
      route: "/register",
      icon: "mdi-account-plus",
      name: "Register",
      isVisible: true,
      isDivider: false,
    },
    {
      route: "/settings",
      icon: "mdi-account-cog",
      name: "Settings",
      isVisible: true,
      isDivider: false,
    },
    {
      route: "/about",
      icon: "mdi-information",
      name: "About",
      isVisible: true,
      isDivider: false,
    },
  ];

  return links.filter((link) => link.isVisible);
});
</script>

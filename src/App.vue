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
        <v-list-item>
          <v-row class="align-center">
            <v-col cols="2">
              <v-list-item-action>
                <v-icon>fas fa-sign-out</v-icon>
              </v-list-item-action>
            </v-col>
            <v-col cols="auto">
              <v-list-item>
                <v-list-item-title>Sign Out</v-list-item-title>
                <v-list-item-subtitle> </v-list-item-subtitle>
              </v-list-item>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark dense clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <router-link to="/" class="white--text" style="text-decoration: none">
          JobSherpa
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-divider class="px-3 py-1 mr-3" vertical />
      <SettingsMenu />
    </v-app-bar>
    <v-main>
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import SettingsMenu from "./components/SettingsMenu.vue";
const drawer = ref(false);
const sidebarLinks = [
  {
    route: "/",
    icon: "mdi-magnify",
    name: "Home",
    isVisible: true,
    isDivider: false,
  },
];
</script>

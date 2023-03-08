<template>
  <v-app>
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>JobSherpa</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn variant="text" icon="mdi-magnify"></v-btn>

      <v-btn :to="'/login'" variant="text" icon="mdi-login"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list :items="items"></v-list>
    </v-navigation-drawer>
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
import router from "./router";
const loginDialog = false;
const drawer = ref(false);
const items = [
  {
    title: "Foo",
    value: "foo",
  },
  {
    title: "Bar",
    value: "bar",
  },
  {
    title: "Fizz",
    value: "fizz",
  },
  {
    title: "Buzz",
    value: "buzz",
  },
];
</script>

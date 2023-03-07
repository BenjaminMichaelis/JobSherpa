<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>JobSherpa</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn variant="text" icon="mdi-magnify"></v-btn>

    <v-btn variant="text" icon="mdi-filter"></v-btn>

    <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer">
    <v-list :items="items"></v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { ref } from "vue";
const drawer = ref(false);
let items: [
  {
    title: "Foo";
    value: "foo";
  },
  {
    title: "Bar";
    value: "bar";
  },
  {
    title: "Fizz";
    value: "fizz";
  },
  {
    title: "Buzz";
    value: "buzz";
  }
];
</script>

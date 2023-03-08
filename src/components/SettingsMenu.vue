<template>
  <div class="text-center">
    <v-menu offset-y transition="slide-y-transition" bottom :close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon>
          <v-icon>fas fa-gear </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(setting, index) in settings.filter((s) => s.show)" :key="index"
          @click="setting.click(setting)">
          <v-list-item-title class="mr-5">
            {{ setting.name }}
          </v-list-item-title>

          <v-list-item-icon>
            <v-icon>{{ setting.preIcon }}</v-icon>
          </v-list-item-icon>

          <v-switch class="mt-2 ml-1" v-model="setting.state" />

          <v-list-item-icon class="ml-0">
            <v-icon>{{ setting.postIcon }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts" setup>
import { DARK_THEME } from "@/lib/symbols";
import { useTheme } from 'vuetify'
import { computed } from 'vue'

const settings = computed({
  // getter
  get() {
    return [{show: true,
        state: useTheme(),
        name: "Dark Mode",
        preIcon: "fas fa-sun",
        postIcon: "fas fa-moon",
        click: toggleDarkMode(useTheme()),}]
  },
  // setter
  set(newValue) {
    var temp = newValue
    newValue = temp;
  }
})

function toggleDarkMode(setting: any) {
  useTheme().global.name.value = !useTheme().global.current.value.dark ? 'light' : 'dark';
  setting.state = useTheme().global.current.value.dark;
  localStorage.setItem(DARK_THEME, useTheme().global.current.value.dark.toString());
}
</script>

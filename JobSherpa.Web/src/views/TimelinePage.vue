<template>
  <v-timeline>
    <v-timeline-item v-for="(item, index) in sortedItems" :key="index">
      <v-card>
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-subtitle>{{ formatDate(item.date) }}</v-card-subtitle>
        <v-card-text>{{ item.type }}</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import { ToDo } from "@/models/ToDo";

export default {
  data() {
    return {
      todos: [
        new ToDo(
          "1",
          "Interview with Google",
          new Date(2023, 3, 15),
          "Interview"
        ),
        new ToDo(
          "2",
          "Phone call with Software Inc",
          new Date(2023, 3, 18),
          "Event"
        ),
        new ToDo(
          "3",
          "Interview with Apple Co",
          new Date(2023, 3, 20),
          "Interview"
        ),
      ],
    };
  },
  computed: {
    sortedItems() {
      return this.sortTodosByDate();
    },
  },
  methods: {
    formatDate(date) {
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    },
    sortTodosByDate() {
      return this.todos.slice().sort((a, b) => a.date - b.date);
    },
  },
};
</script>

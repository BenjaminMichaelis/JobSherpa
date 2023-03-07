<template>
  <v-container class="pa-10">
    <v-row>
      <h1>Welcome User</h1>
    </v-row>
    <v-row>
      <v-col v-for="job in jobs" :key="job.id" cols="2" lg="3">
        <JobCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import JobCard from "@/components/JobCard.vue";

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    value: "Google",
  },
  {
    id: 2,
    title: "Waitress",
    value: "The Restaurant",
  },
  {
    id: 3,
    title: "Basketball Player",
    value: "Chicago Bulls",
  },
  {
    id: 4,
    title: "Student",
    value: "WSU",
  },
];
</script>

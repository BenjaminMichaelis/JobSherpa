<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <v-card-item>
      <v-card-title>{{ job.name }}</v-card-title>

      <v-card-subtitle>
        <span class="me-1">{{ job.company }}</span>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0"> </v-row>

      <div class="my-4 text-subtitle-1">{{ job.salary }}</div>

      <div>
        <span class="text-subtitle-1">Skills:</span>
        <v-chip-group>
          <v-chip v-for="(skill, index) in job.skills" :key="index">
            {{ skill }}
          </v-chip>
        </v-chip-group>
      </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Upcoming</v-card-title>

    <v-card-text>
      <v-checkbox
        v-for="(event, index) in job.events"
        v-bind:key="index"
        :label="event"
      ></v-checkbox>
    </v-card-text>
    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Recent Activity</v-card-title>
    <v-card-text v-for="activity in job.activities" v-bind:key="activity">
      {{ activity }}
    </v-card-text>
    <router-link :to="{ name: 'job-details', params: { id: job.id } }">{{
      "More details"
    }}</router-link>
  </v-card>
</template>

<script lang="ts" setup>
import { Job } from "@/job";
defineProps<{
  job: Job;
}>();
const loading = false;
</script>

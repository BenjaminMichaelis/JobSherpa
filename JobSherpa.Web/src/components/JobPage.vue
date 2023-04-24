<template>
  <v-container class="pa-lg-10">
    <v-card :loading="loading">
      <v-toolbar color="primary" dark>
        <v-btn icon @click="$router.back()">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title>{{ job.name }}</v-toolbar-title>
        <v-toolbar-items>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-container align="center">
        <v-card-text>
          <v-card-item>
            <v-card-title></v-card-title>

            <v-card-subtitle>
              <span class="me-1">{{ job.company }}</span>
            </v-card-subtitle>
          </v-card-item>
          <v-row align="center" class="mx-0">
            <v-col>
              <v-icon class="me-1">mdi-map-marker</v-icon>
              {{ job.location }}
            </v-col>
          </v-row>

          <div class="my-4 text-subtitle-1">{{ job.salary }}</div>

          <div>
            <span class="text-subtitle-1">Skills:</span>
            <v-chip-group class="justify-center">
              <v-chip v-for="(skill, index) in job.skills" :key="index">
                {{ skill.name }}
              </v-chip>
            </v-chip-group>
          </div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title>Description</v-card-title>

        <v-card-text>{{ job.desc }}</v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title>Position</v-card-title>

        <v-card-text>{{ job.position }}</v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title>Upcoming</v-card-title>

        <v-card-text v-for="(event, index) in job.events" v-bind:key="index">
          <v-checkbox :label="event"></v-checkbox>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title>Recent Activity</v-card-title>

        <v-card-text v-for="activity in job.activities" v-bind:key="activity">
          {{ activity }}
        </v-card-text>
      </v-container>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { Job } from "@/models/job";
defineProps<{
  job: Job;
}>();
const loading = false;
</script>

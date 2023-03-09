<template>
  <v-container class="pa-10">
    <v-row>
      <h1>Welcome User</h1>
    </v-row>
    <v-row>
      <v-col v-for="job in jobList" :key="job.id" cols="2" lg="3">
        <JobCard :job="job" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import JobCard from "@/components/JobCard.vue";
</script>

<script lang="ts">
import { JobList } from "@/api/jobs";
//import { Job } from "@/job";
export default {
  name: "JobPage",
  data() {
    return {
      jobList: JobList,
    };
  },
};
</script>

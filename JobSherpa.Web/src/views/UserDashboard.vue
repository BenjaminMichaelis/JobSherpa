<template>
  <v-container class="pa-10">
    <v-row>
      <h1>Welcome User</h1>
      {{users}}
      {{ typeof(users) }}
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
import UserDataService from "@/services/UserDataService";
import { onBeforeMount } from 'vue'
var users;
async function GetUsers() {
  debugger;
  users = await UserDataService.getAll();
}
</script>

<script lang="ts">
import { JobList } from "@/api/jobs";
export default {
  async created() {
    debugger;
    await GetUsers();
  },
  name: "JobPage",
  data() {
    return {
      jobList: JobList,
    };
  },
};
</script>

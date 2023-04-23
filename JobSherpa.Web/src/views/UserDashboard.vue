<template>
  <v-container class="pa-10">
    <v-row>
      <h1>Welcome {{ loggedInUserName }}</h1>
      <v-btn color="primary" class="ml-3" @click="showNewJobForm = true"
        >Add New Job</v-btn
      >
    </v-row>
    <v-row>
      <NewJobForm v-model="showNewJobForm" :userId="store.state.user.id" />
    </v-row>
    <v-row>
      <v-col v-for="job in jobs" :key="job.id" cols="2" lg="3">
        <JobCard :job="job" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import JobCard from "@/components/JobCard.vue";
import NewJobForm from "@/components/NewJobForm.vue";
import UserDataService from "@/services/UserDataService";
import { Ref, ref, computed, watchEffect, onMounted } from "vue";
import { useStore } from "vuex";
import { Job } from "@/models/job"; // Import Job model

const store = useStore();

const loggedInUserName = ref("");
if (store.state.user) {
  loggedInUserName.value = store.state.user.name;
}

const users = ref(null);

async function GetUsers() {
  const data = (await UserDataService.getAll()).data;
  users.value = data;
}

const jobs = ref(null);

const showNewJobForm = ref(false);

async function getJobs() {
  try {
    const jobsData = await UserDataService.getUserJobs(
      store.state.user.username
    );
    console.log("jobsData:", jobsData);
    jobs.value = jobsData;
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
}

(async function onMounted() {
  GetUsers();
  getJobs();
})();
</script>

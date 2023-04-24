<template>
  <div v-if="jobs">
    <JobPage :job="jobs[0]" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script lang="ts" setup>
import JobPage from "@/components/JobPage.vue";
import { JobList } from "@/api/jobs";
import { Job } from "@/models/job";
import UserDataService from "@/services/UserDataService";
import { Ref, ref, computed, watchEffect, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const route = useRoute();

const store = useStore();

const loggedInUserName = ref("");
if (store.state.user) {
  loggedInUserName.value = store.state.user.name;
}

const users = ref(null);
const jobs = ref(null);
const currJob = ref(null);

async function GetUsers() {
  const data = (await UserDataService.getAll()).data;
  users.value = data;
}
async function getJobs() {
  try {
    const jobsData = await UserDataService.getUserJobs(
      store.state.user.username
    );
    console.log("jobsData:", jobsData);
    jobs.value = jobsData;
    const curjobdata = await UserDataService.getJobById(
      route.params.id.toString()
    );
    currJob.value = curjobdata.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
}
(async function onMounted() {
  GetUsers();
  getJobs();
})();
</script>

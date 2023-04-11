<template>
  <v-container class="pa-10">
    <v-row>
      <h1>Welcome {{ loggedInUserName }}</h1>
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
import { ref } from "vue";
import { useStore } from "vuex";

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

(async function onMounted() {
  GetUsers();
})();
</script>

<script lang="ts">
import { JobList } from "@/api/jobs";
import { list } from "postcss";
export default {
  name: "JobPage",
  data() {
    return {
      jobList: JobList,
    };
  },
};
</script>

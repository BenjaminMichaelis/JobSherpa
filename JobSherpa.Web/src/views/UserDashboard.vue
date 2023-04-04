<template>
  <v-container class="pa-10">
    <v-row>
      <h1>Welcome User</h1>
      {{ users }}
      {{ typeof users }}
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
import { User } from "@/models/user";
import { ref } from "vue";

const users = ref(null);

async function GetUsers() {
  const data = (await UserDataService.getAll()).data;
  users.value = data;
  // users.value = User[];
  // data.array.forEach(element => {
  //   users.value.push(new User(element.username, element.password, element.createdAt, element.updatedAt))
  // });
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

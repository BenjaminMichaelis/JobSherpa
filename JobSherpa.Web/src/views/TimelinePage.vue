<template>
  <v-timeline>
    <v-timeline-item v-for="(item, index) in sortedItems" :key="index">
      <v-card>
        <v-card-title>{{ item.name }}</v-card-title>
        <v-card-subtitle>
          Events: {{ item.events.join(", ") }}
          <br />
          Activities: {{ item.activities.join(", ") }}
        </v-card-subtitle>
        <v-card-text>{{ formatDate(item.jobDate) }}</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { Job } from "@/models/job";
import UserDataService from "@/services/UserDataService";

export default {
  setup() {
    const store = useStore();

    const jobs = ref(null);

    const getJobs = async () => {
      try {
        const jobsData = await UserDataService.getUserJobs(
          store.state.user.username
        );
        console.log("jobsData:", jobsData);
        jobs.value = jobsData;
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    onMounted(getJobs);

    const formatDate = (date) => {
      const d = new Date(date);
      return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
    };

    const sortedItems = computed(() => {
      if (!jobs.value) {
        return [];
      }
      return jobs.value
        .slice()
        .sort((a, b) => new Date(a.jobDate) - new Date(b.jobDate));
    });

    return { formatDate, sortedItems };
  },
};
</script>

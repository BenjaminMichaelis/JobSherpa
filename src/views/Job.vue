<template>
  <div v-if="curJob">
    <JobPage :job="curJob" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script lang="ts">
import JobPage from "@/components/JobPage.vue";
import { JobList } from "@/api/jobs";
import { Job } from "@/job";
export default {
  name: "Job",
  components: {
    JobPage,
  },
  data() {
    return {
      curJob: null as Job | null | undefined,
    };
  },
  created() {
    this.curJob = JobList.find(
      (job) => job.id === this.$route.params.id?.toString()
    );
  },
};
</script>

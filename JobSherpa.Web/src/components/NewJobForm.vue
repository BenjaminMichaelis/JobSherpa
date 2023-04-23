<template>
  <v-dialog v-model="dialog" max-width="800">
    <template>
      <v-btn color="primary" class="mb-3" @click="dialog = true">
        Add New Job
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Add New Job</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="job.name"
                label="Job Title"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="job.company"
                label="Company"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="job.position"
                label="Position"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="job.location"
                label="Location"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-textarea
                v-model="job.desc"
                label="Description"
                required
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="job.salary" label="Salary"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-textarea v-model="job.events" label="Events"></v-textarea>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-textarea
                v-model="job.activities"
                label="Activities"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-textarea v-model="job.skills" label="Skills"></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Cancel
        </v-btn>
        <v-btn color="blue darken-1" text @click="submitJob">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import UserDataService from "../services/UserDataService";

const store = useStore();
const dialog = ref(false);

const job = ref({
  name: "",
  company: "",
  desc: "",
  location: "",
  events: "",
  activities: "",
  position: "",
  salary: "",
  skills: "",
});

const user = computed(() => {
  console.log(store.state.user);
  return store.state.user;
});

function splitInput(input) {
  return input.split(",").map((item) => item.trim());
}

async function submitJob() {
  if (
    !job.value.name ||
    !job.value.company ||
    !job.value.desc ||
    !job.value.location ||
    !job.value.position ||
    !job.value.salary ||
    !job.value.skills ||
    job.value.skills.length == 0
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  const userId = user.value ? user.value.username : null;
  if (!userId) {
    alert("User not found. Please log in to add a job.");
    return;
  }

  try {
    const newJob = {
      name: job.value.name,
      company: job.value.company,
      desc: job.value.desc,
      location: job.value.location,
      events: splitInput(job.value.events),
      activities: splitInput(job.value.activities),
      position: job.value.position,
      salary: job.value.salary,
      skills: splitInput(job.value.skills),
      userId,
    };
    console.log(job.value);
    await UserDataService.createJob(newJob);
    dialog.value = false;
    alert("Job created successfully.");
  } catch (error) {
    console.error("Error creating job:", error);
    alert("Failed to create job. Please try again.");
  }
}
</script>

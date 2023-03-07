<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <v-card-item>
      <v-card-title>Example Job Title</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Sample Company</span>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0"> </v-row>

      <div class="my-4 text-subtitle-1">Salary: $40,000</div>

      <div class="px-4">
        <span class="text-subtitle-1">Skills</span>
        <v-chip-group v-model="selection">
          <v-chip>SQL</v-chip>

          <v-chip>React</v-chip>

          <v-chip>C#</v-chip>

          <v-chip>C++</v-chip>
        </v-chip-group>
      </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Upcoming</v-card-title>

    <v-card-text>
      <v-checkbox label="Submit Cover Letter on February 3"></v-checkbox>
      <v-checkbox label="Interview #1 on March 5"></v-checkbox>
    </v-card-text>
    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Recent Activity</v-card-title>
    <v-card-text>
      Submitted Resume on January 8th
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
const loading = false;
const selection = 1;
</script>

<template>
  <v-container class="pa-lg-10">
    <v-card class="mx-auto">
      <v-card-title>About Us</v-card-title>
      <v-card-subtitle
        >We help you stay organized in your job search</v-card-subtitle
      >
      <v-card-text>
        <div>
          As I am a university student approaching graduation, I realized
          currently using a combination of apps, excel sheets, pen and paper,
          and my own memory to keep track of different job opportunities as well
          as the statuses of each. This makes it easy to let different deadlines
          slip through the cracks, as well as information being spread across
          many different mediums and sites, and additionally, and services that
          can potentially begin to solve this issue, either cost money or sell
          personal data.
        </div>
        <div class="pt-4">
          Services that can potentially begin to solve this issue, either cost
          money or sell personal data. This web app would use a dashboard to
          give a quick look into what the statuses of different job applications
          were, as well as tracking the details of each one, allowing for all
          the information around job searching to be clearly, cleanly,
          conveniently located in one centralized location. The information will
          be displayed in easy-to-read formats, with intuitive interactive
          cards. The application will not only simplify the job search process,
          but also speed it up by taking on much of the task of organizing and
          tracking information, reducing the time and effort required to keep
          everything in order. There are also many ways we can build upon this
          concept, the current scope of the project is the main dashboard and
          jobs within it are personally created and maintained like a bulletin
          board.
        </div>
        <v-expansion-panels class="pt-3">
          <v-expansion-panel>
            <v-expansion-panel-title class="text-h6"
              >Our goal is to help people keep track of their job
              search.<template v-slot:actions>
                <v-icon color="green" icon="mdi-chevron-down">
                </v-icon> </template
            ></v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="pt-4">With this app, you can track:</div>
              <ul class="pl-4 pt-2">
                <li>Jobs you have applied to</li>
                <li>Jobs you are interested in</li>
                <li>Jobs you are waiting to hear back from</li>
              </ul>
              <div class="pt-4">You can also track:</div>
              <ul class="pl-4 pt-2">
                <li>Deadlines</li>
                <li>Interviews</li>
                <li>Job Offers</li>
              </ul>
              <div class="pt-4">You can also track:</div>
              <ul class="pl-4 pt-2">
                <li>Notes</li>
                <li>Contacts</li>
                <li>Documents</li>
              </ul>
              <div class="pt-4">In addition to the above, you can:</div>
              <ul class="pl-4 pt-2">
                <li>Set up alerts for deadlines</li>
                <li>Set up alerts for interviews</li>
                <li>Set up alerts for job offers</li>
              </ul>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

        <div class="pt-6">We hope you find this app useful!</div>

        <h2 class="pt-6">Technology Stack and Resources:</h2>
        <ul class="pl-4 pt-2">
          <li>
            <v-btn
              href="https://nodejs.org/"
              variant="text"
              density="compact"
              target="_blank"
              rel="noopener noreferrer"
              >Node.js</v-btn
            >
          </li>
          <li>
            <v-btn
              href="https://www.typescriptlang.org/"
              variant="text"
              density="compact"
              target="_blank"
              rel="noopener noreferrer"
              >TypeScript</v-btn
            >
          </li>
          <li>
            <v-btn
              href="https://vuejs.org/"
              variant="text"
              density="compact"
              target="_blank"
              rel="noopener noreferrer"
              >Vue.js</v-btn
            >
          </li>
          <li>
            <v-btn
              href="https://vuetifyjs.com/"
              variant="text"
              density="compact"
              target="_blank"
              rel="noopener noreferrer"
              >Vuetify</v-btn
            >
          </li>
          <li>
            <v-btn
              href="https://fonts.google.com/icons"
              variant="text"
              density="compact"
              target="_blank"
              rel="noopener noreferrer"
              >Material Design Icons</v-btn
            >
          </li>
        </ul>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup></script>

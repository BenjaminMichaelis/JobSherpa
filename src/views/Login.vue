<template>
  <v-container>
    <v-row no-gutters style="height: 150px">
      <v-col align-self="center">
        <v-sheet class="pa-2 ma-2">
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login Screen</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <form ref="form" @submit.prevent="login()">
                <v-text-field
                  v-model="username"
                  name="username"
                  label="Username"
                  type="text"
                  placeholder="username"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="password"
                  required
                ></v-text-field>
                <v-btn type="submit" class="mt-4" color="primary" value="log in"
                  >Login</v-btn
                >
              </form>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const { username } = this;
      console.log(username + "logged in");
    },
  },
};
</script>

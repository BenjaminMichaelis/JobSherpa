<template>
  <v-card class="mx-auto" max-width="500">
    <v-toolbar flat color="primary">
      <v-btn icon="mdi-account"></v-btn>

      <v-toolbar-title class="font-weight-light">
        User Profile
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="isEditing = !isEditing">
        <v-fade-transition leave-absolute>
          <v-icon v-if="isEditing">mdi-close</v-icon>

          <v-icon v-else>mdi-pencil</v-icon>
        </v-fade-transition>
      </v-btn>
    </v-toolbar>

    <v-card-text>
      <v-form fast-fail ref="form" @submit.prevent v-model="formValid">
        <v-text-field
          :disabled="!isEditing"
          v-model="user.name"
          color="white"
          label="Name"
          :rules="NameRules"
        ></v-text-field>
        <v-text-field
          :disabled="!isEditing"
          v-model="user.email"
          color="white"
          label="Email"
          :rules="EmailRules"
        ></v-text-field>
        <v-text-field
          :disabled="!isEditing"
          v-model="user.password"
          color="white"
          label="Password"
          :rules="PasswordRules"
        ></v-text-field>
      </v-form>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn :disabled="!isEditing || !formValid" @click="save"> Save </v-btn>
    </v-card-actions>

    <v-snackbar
      v-model="hasSaved"
      :timeout="2000"
      attach
      position="absolute"
      location="bottom left"
    >
      Your profile has been updated
    </v-snackbar>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UserDataService from "@/services/UserDataService";

export default {
  data: () => ({
    hasSaved: false,
    isEditing: null,
    formValid: false,
    NameRules: [
      (value) => {
        if (value?.length > 3) {
          return true;
        }

        return "Must be at least 3 characters";
      },
    ],
    PasswordRules: [
      (value) => {
        if (value?.length > 5) return true;
        return "Must be at least 5 characters.";
      },
    ],
    EmailRules: [
      (value) => {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

        return "Must be a valid e-mail.";
      },
    ],
  }),

  computed: {
    ...mapGetters(["user"]),
    formIsValid() {
      if (!this.$refs.form) return false;
      return (
        this.NameRules.every((rule) => rule(this.user.name)) &&
        this.PasswordRules.every((rule) => rule(this.user.password)) &&
        this.EmailRules.every((rule) => rule(this.user.email))
      );
    },
  },

  async created() {
    await this.loadUserProfile(this.user.username);
  },

  methods: {
    ...mapActions(["setUser"]),

    async loadUserProfile(userId) {
      try {
        const response = await UserDataService.get(userId);
        this.setUser(response.data);
      } catch (error) {
        console.error("Error loading user profile:", error);
      }
    },

    async save() {
      await this.updateUserProfile(this.user.username, this.user);
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
    },

    async updateUserProfile(userId, userData) {
      try {
        await UserDataService.update(userId, userData);
      } catch (error) {
        console.error("Error updating user profile:", error);
      }
    },
  },
};
</script>

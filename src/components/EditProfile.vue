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
      <v-form fast-fail @submit.prevent>
        <v-text-field
          :disabled="!isEditing"
          v-model="firstName"
          color="white"
          label="First Name"
          :rules="NameRules"
        ></v-text-field>
      </v-form>

      <v-form fast-fail @submit.prevent>
        <v-text-field
          :disabled="!isEditing"
          v-model="lastName"
          color="white"
          label="Last Name"
          :rules="NameRules"
        ></v-text-field>
      </v-form>

      <v-form fast-fail @submit.prevent>
        <v-text-field
          :disabled="!isEditing"
          v-model="password"
          color="white"
          label="Password"
          :rules="PasswordRules"
        ></v-text-field>
      </v-form>

      <v-text-field
        :disabled="!isEditing"
        v-model="email"
        color="white"
        label="Email"
        :rules="EmailRules"
      ></v-text-field>

      <v-autocomplete
        :disabled="!isEditing"
        :items="states"
        :custom-filter="customFilter"
        v-model="state"
        color="white"
        item-title="name"
        item-value="abbr"
        label="State"
      ></v-autocomplete>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn :disabled="!isEditing" @click="save"> Save </v-btn>
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
export default {
  data: () => ({
    hasSaved: false,
    isEditing: null,
    model: null,
    states: [
      { name: "Florida", abbr: "FL", id: 1 },
      { name: "Georgia", abbr: "GA", id: 2 },
      { name: "Nebraska", abbr: "NE", id: 3 },
      { name: "California", abbr: "CA", id: 4 },
      { name: "New York", abbr: "NY", id: 5 },
    ],
    firstName: "Current First Name Goes Here",
    lastName: "Current Last Name Goes Here",
    state: "Current State Goes Here",
    email: "Current Email Goes Here",
    password: "*******",
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

  methods: {
    customFilter(item, queryText, itemText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    save() {
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
    },
  },
};
</script>

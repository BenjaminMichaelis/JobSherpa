<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-card width="400" class="mx-auto" border="none" variant="outlined">
      <v-toolbar color="primary" dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <v-form fast-fail @submit.prevent="register">
        <v-text-field
          variant="underlined"
          v-model="state.name"
          :error-messages="v$.name.$errors.map((e) => e.$message)"
          :counter="10"
          label="Name"
          required
          @input="v$.name.$touch"
          @blur="v$.name.$touch"
        ></v-text-field>
        <v-text-field
          variant="underlined"
          v-model="state.email"
          :error-messages="v$.email.$errors.map((e) => e.$message)"
          label="E-mail"
          required
          @input="v$.email.$touch"
          @blur="v$.email.$touch"
        ></v-text-field>
        <v-text-field
          variant="underlined"
          v-model="state.username"
          :error-messages="v$.username.$errors.map((e) => e.$message)"
          label="User Name"
          required
          @input="v$.username.$touch"
          @blur="v$.username.$touch"
        ></v-text-field>
        <v-text-field
          variant="underlined"
          v-model="state.password"
          :error-messages="v$.password.$errors.map((e) => e.$message)"
          required
          @input="v$.password.$touch"
          @blur="v$.password.$touch"
          label="Password"
        ></v-text-field>

        <v-btn
          type="submit"
          variant="elevated"
          color="primary"
          block
          class="mt-2"
          @click="v$.$validate"
          >Register</v-btn
        >
        <v-btn
          variant="outlined"
          color="primary"
          class="mt-2"
          block
          @click="clear"
          >Clear</v-btn
        >
      </v-form>
      <div class="mt-2">
        <p class="text-body-2">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
import { useRouter } from "vue-router";
import UserDataService from "@/services/UserDataService";

const initialState = {
  name: "",
  email: "",
  username: "",
  password: "",
};

const rules = {
  name: { required },
  email: { required, email },
  username: { required },
  password: { required },
};

const state = reactive({
  ...initialState,
});

const v$ = useVuelidate(rules, state);
const router = useRouter();

function clear() {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
}

async function register() {
  if (v$.value.$invalid) {
    return;
  }

  try {
    console.log("made it here!");
    const response = await UserDataService.register(
      state.name,
      state.email,
      state.username,
      state.password
    );
    console.log(response.data);
    router.push({ name: "login" });
    // Navigate to the login page or desired page after successful registration
  } catch (error) {
    console.error(error);
    // Show an error message
  }
}
</script>

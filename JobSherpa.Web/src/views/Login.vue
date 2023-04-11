<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-card width="400" class="mx-auto" border="none" variant="outlined">
      <v-toolbar color="primary" dark>
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <v-form @submit.prevent="login">
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
        <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>

        <v-btn
          type="submit"
          variant="elevated"
          color="primary"
          block
          class="mt-2"
        >
          Login
        </v-btn>
        <v-btn
          variant="outlined"
          color="primary"
          class="mt-2"
          block
          @click="clear"
        >
          Clear
        </v-btn>
      </v-form>
      <div class="mt-2">
        <p class="text-body-2">
          Don't already have an account? <a href="/register">Register</a>
        </p>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import UserDataService from "@/services/UserDataService";

type StateType = {
  username: string;
  password: string;
  isFormValid: boolean;
  [key: string]: string | boolean;
};

const initialState: StateType = {
  username: "",
  password: "",
  isFormValid: false,
};

const rules = {
  username: { required },
  password: { required },
};

const state = reactive({
  ...initialState,
});

const v$ = useVuelidate(rules, state);
const router = useRouter();
const store = useStore();

function clear() {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
}

async function login() {
  if (v$.value.$invalid) {
    console.log("error, not valid");
    return;
  }

  try {
    console.log("made it here");
    const response = await UserDataService.login(
      state.username,
      state.password
    );
    console.log(response.data);
    store.dispatch("setUser", response.data);
    router.push({ name: "userdashboard" });
    // Save the user object to a Vuex store or localStorage and navigate to the desired page
  } catch (error) {
    console.error(error);
    // Show an error message
  }
}
</script>

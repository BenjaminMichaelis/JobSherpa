<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto">
      <v-form fast-fail @submit.prevent="login">
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
          @click="v$.$validate"
          >Login</v-btn
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
          Don't already have an account? <a href="/register">Register</a>
        </p>
      </div>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const initialState = {
  username: "",
  password: "",
};

const rules = {
  username: { required },
  password: { required },
};

const state = reactive({
  ...initialState,
});

const v$ = useVuelidate(rules, state);

function clear() {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
}

function login() {
  // Just placeholder code, should be removed
  if (v$.value.$invalid) {
    return;
  }
}
</script>

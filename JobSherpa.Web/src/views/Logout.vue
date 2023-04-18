<template>
  <div></div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "Logout",
  setup() {
    const store = useStore();
    const router = useRouter();

    store.dispatch("logout");
    router.push({ name: "login" });

    return {};
  },
};
</script>

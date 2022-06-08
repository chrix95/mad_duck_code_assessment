<template>
  <notifications />
  <router-view></router-view>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["loading"]),
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>

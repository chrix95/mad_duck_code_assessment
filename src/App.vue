<template>
  <notifications />
  <div class="parent-background">
    <router-view></router-view>
  </div>
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
.parent-background {
  background-color: #5C979B;
}
</style>

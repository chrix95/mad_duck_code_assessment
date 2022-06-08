<template>
  <notifications />
  <div class="parent-background">
    <router-view></router-view>
    <Footer-Section />
  </div>
</template>

<script>
import { mapState } from "vuex";
import FooterSection from "@/components/FooterSection.vue";
export default {
  name: "App",
  computed: {
    ...mapState(["loading"]),
  },
  components: { FooterSection },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.parent-background {
  background-color: #5C979B;
  position: relative;
}
</style>

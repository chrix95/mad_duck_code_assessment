<template>
  <div class="row justify-content-start mt-3 mb-1">
    <div class="col-lg-6">
      <Top-Card />
    </div>
  </div>
  <div class="row justify-content-start">
    <div class="col-lg-12">
      <Bottom-Card />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TopCard from "@/components/Temperature/TopCard.vue";
import BottomCard from "@/components/Temperature/BottomCard.vue";
export default {
  name: "TemperaturView",
  computed: {
    ...mapState(["loading"]),
  },
  components: { TopCard, BottomCard },
  mounted() {},
  data() {},
  methods: {},
};
</script>

<style scoped>
</style>

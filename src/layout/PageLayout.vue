<template>
  <section class="content">
    <div class="container">
      <div class="row justify-content-start">
        <div class="col">
          <div class="header">
            <router-link to="/">
              <img src="@/assets/img/logo.png" alt="logo icon" class="img-fluid">
            </router-link>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageLayout",
  components: {},
}
</script>

<style scoped>
section.content {
  background: url("@/assets/img/background.png");
}
</style>

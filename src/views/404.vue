<template>
  <div class="row justify-content-center align-items-center g-0 height-100">
    <div class="col-sm-10 col-lg-6">
      <div class="d-flex flex-column justify-content-center h-100">
        <h4 class="text-center">404 Not Found</h4>
        <p class="text-center">
          Oops! you seem lost, no worries we will handle the redirection to
          the entry point, If this doesn't happen, kindly click the button
          below.
        </p>
        <div class="text-center">
          <router-link to="/">
            <button type="button" class="btn btn-orange w-75 fw-600">
              <i class="fa fa-arrow-left"></i>
              Back to Home
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "404Page",
};
</script>
<style scoped>
</style>
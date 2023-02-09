<template>
  <div class="container-fluid g-0">
    <div class="row mb-4">
      <div class="col">
        <button type="button" class="btn btn-light" @click="$router.go(-1)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
          </svg>
        </button>
      </div>
      <div class="col flex-grow-1">

      </div>
      <div class="col"></div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="card">
        <div class="p-4">
          <Step1 />
          <Step2 />
          <Step3 />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Step1 from './Step1.vue';
import Step2 from './Step2.vue';
import Step3 from './Step3.vue';
export default {
  name: 'AlunosNovo',
  components: {
    Step1, Step2, Step3
  },
  mounted() {
    this.$store.dispatch('getAllTurmas')
  }
}

</script>

<style lang="scss" scoped>
.card {
  min-width: 450px;
  max-width: 100%;
}
</style>
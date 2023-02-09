<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Breadcrumb></Breadcrumb>
      </div>
      <div class="col d-flex justify-content-end">
        <button type="button" class="btn btn-secondary btn-lg text-white d-flex align-items-center gap-2"><svg
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload"
            viewBox="0 0 16 16">
            <path
              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
            <path
              d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
          </svg>Importar
          Cadastro</button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        licen;as
      </div>
      <div class="col d-flex justify-content-end">
        acessos
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-secondary btn-lg text-white d-flex align-items-center gap-1"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus"
            viewBox="0 0 16 16">
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>Novo Aluno</button>
      </div>
      <div class="col d-flex justify-content-end">
        Pesquisa
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../../../components/Breadcrumb.vue"
export default {
  name: 'AlunosList',
  components: {
    Breadcrumb
  }
}

</script>

<style lang="scss" scoped>

</style>
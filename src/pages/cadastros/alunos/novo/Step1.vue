<template>
  <div>
    <h4 class="fs-4 text-center">Dados do Aluno</h4>
    <p class="text-center">Em poucos passos, crie um novo acesso de aluno.</p>

    <FormKit type="form" :actions="false" #default="{ disabled }" @submit="submitHandler">
      <div class="mb-4">
        <FormKit type="text" name="name" id="name" validation="required|length:5,100" label="Nome do Aluno" />
      </div>
      <div class="mb-4">
        <FormKit type="email" name="email" id="email" validation="email|100" label="Email do aluno" />
      </div>

      <div class="row gx-2">
        <div class="col">
          <FormKit type="button" label="Cancelar" />
        </div>
        <div class="col">
          <FormKit type="submit" label="Continuar" />
        </div>
      </div>
    </FormKit>
  </div>
</template>

<script>
export default {
  name: 'Step1',
  methods: {
    submitHandler() {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
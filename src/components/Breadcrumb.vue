<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item" v-for="(matched, idx) in this.$route.matched" :key="idx">
        <router-link :to="{ path: matched.path }">
          {{ matched.name }}
        </router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "Breadcrumb",
}

</script>

<style lang="scss" scoped>

</style>
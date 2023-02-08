<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 bg-white shadow" style="width: 260px;">
    <a href="/" class="d-flex align-items-center mb-3 mt-3 link-dark text-decoration-none">
      <Logo></Logo>
    </a>
    <Menu></Menu>
  </div>

</template>
<script>
import Logo from "./Logo.vue"
import Menu from "./Menu.vue"
export default {
  name: 'Sidebar',
  components: { Logo, Menu }
}
</script>
<style lang="scss">

</style>
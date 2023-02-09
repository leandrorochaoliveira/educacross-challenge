<template>
  <li class="nav-item">
    <router-link :to="{ path: path }"
      class="nav-link link-dark py-2 lh-lg mb-1 fw-semibold d-flex  align-items-center gap-2"
      :class="{ 'active text-primary': active }">
      <slot name="icon"></slot>
      <span class="ml-2">{{ title }}</span>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    title: {
      required: true,
    },
    path: {
      required: true,
    }
  },
  computed: {
    active() {
      return this.$router.currentRoute.value.path == this.path
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-item .nav-link.active {
  background-color: rgb(0, 189, 185, 0.2);

  &:hover {
    color: #fff !important;
    background-color: rgb(0, 189, 185, 1);
  }
}
</style>
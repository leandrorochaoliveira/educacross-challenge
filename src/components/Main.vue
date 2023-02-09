<template>
  <div class="d-flex h-100">
    <Sidebar></Sidebar>
    <main class="flex-fill flex-grow-1 p-4">
      <Navbar></Navbar>
      <router-view></router-view>
    </main>
  </div>

</template>
<script>

import Sidebar from './sidebar/Sidebar.vue';
import Navbar from './Navbar.vue';
export default {
  name: 'Main',
  components: {
    Sidebar, Navbar
  }
}

</script>
<style lang="scss" scoped>
main {
  background-color: #efefef;
}
</style>
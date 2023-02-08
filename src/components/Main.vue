<template>
  <div class="d-flex h-100">
    <Sidebar></Sidebar>
    <div class="flex-fill flex-grow-1 bg-light p-4">
      <Navbar></Navbar>
      <router-view></router-view>
    </div>
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
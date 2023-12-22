<script>
import NavBar from './components/NavBar.vue';
// import { ref, reactive, computed, onMounted } from 'vue';

export default {
  components: {
    NavBar
  }
}
</script>

<template>
  <NavBar />
  <router-view />
</template>

<style></style>

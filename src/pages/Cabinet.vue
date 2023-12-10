<script setup>
import DownPage from "../components/DownPage.vue";
</script>

<template>
  <div class="cabinet">
    Cabinet
    <div class="wrapfooter"></div>
    <DownPage />
  </div>
</template>

<style lang="scss" scoped>
.cabinet {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .wrapfooter {
    flex-grow: 1;
  }
}
</style>

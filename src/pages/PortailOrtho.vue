<script setup>
import Patientele from "../components/Patientele.vue";
import Planning from "../components/Planning.vue";
import ComptesRendusOrtho from "../components/ComptesRendusOrtho.vue";
import MessageriePatient from "../components/MessageriePatient.vue";
import ListeAttente from "../components/ListeAttente.vue";
import DownPage from "../components/DownPage.vue";

const isActive = ref(1);
</script>

<template>
  <div class="portailOrthoPage">
    <div class="portailOrtho">
      <NavBarOrtho @setActive="isActive = $event" />

      <div class="portailOrthoDetails">
        <Patientele v-if="isActive === 1" />
        <Planning v-else-if="isActive === 2" />
        <MessageriePatient v-else-if="isActive === 3" />
        <ListeAttente v-else />
      </div>
    </div>

    <div class="wrapfooter"></div>
    <DownPage />
  </div>
</template>

<style lang="scss" scoped>
.portailOrthoPage {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .wrapfooter {
    flex-grow: 1;
  }
}
</style>

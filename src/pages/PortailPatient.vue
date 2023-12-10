<script setup>
import { ref } from "vue";
import NavBarPatient from "../components/NavBarPatient.vue";
import RdvPatient from "../components/RdvPatient.vue";
import ComptesRendusPatient from "../components/ComptesRendusPatient.vue";
import MessageriePatient from "../components/MessageriePatient.vue";
import DownPage from "../components/DownPage.vue";

const isActive = ref(1);

</script>

<template>
  <div>
    <div class="portailPatient">
      <NavBarPatient @setActive="isActive = $event" />
      <div class="portailPatientDetails">
        <RdvPatient v-if="isActive === 1" />
        <ComptesRendusPatient v-else-if="isActive === 2" />
        <MessageriePatient v-else />
      </div>
    </div>
    <DownPage />
  </div>
</template>

<style lang="scss" scoped>
.portailPatient {
  display: flex;
  justify-content: center;

  .portailPatientDetails {
    width: 85vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

<script setup>
import { ref } from "vue";
import NavBarOrtho from "../components/NavBarOrtho.vue";
import Patientele from "../components/Patientele.vue";
import Planning from "../components/Planning.vue";
import ComptesRendusOrtho from "../components/ComptesRendusOrtho.vue";
import ListeAttente from "../components/ListeAttente.vue";
// import DownPage from "../components/DownPage.vue";

const isActive = ref(1);
</script>

<template>
  <div>
    <div class="portailOrtho">
      <NavBarOrtho @setActive="isActive = $event" />
      <div class="portailOrthoDetails">
        <Patientele v-if="isActive === 1" />
        <Planning v-else-if="isActive === 2" />
        <ComptesRendusOrtho v-else-if="isActive === 3" />
        <ListeAttente v-else />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portailOrtho {
  display: flex;
  justify-content: center;
}
.portailOrthoDetails {
  width: 85vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

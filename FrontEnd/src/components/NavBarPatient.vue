<script setup>
const emits = defineEmits(["setActive"]);

const setActive = (value) => {
  emits("setActive", value);
};
</script>

<template>
  <div class="navBarPatient">
    <div class="infoPatient">Nom Prenom</div>
    <router-link to="/mesrdv" @click="setActive(1)">Mes RDV</router-link>
    <router-link to="/mescomptesrendus" @click="setActive(2)"
      >Comptes rendus</router-link
    >
    <router-link to="/messageriepatient" @click="setActive(3)"
      >Messagerie</router-link
    >
  </div>
</template>

<style lang="scss" scoped>
.navBarPatient {
  display: flex;
  flex-direction: column;
  width: 15vw;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-primary);
  color: white;
  font-size: 2rem;

  a {
    color: white;
    transition: all 0.5s ease;

    &:hover {
      color: var(--color-secondary);
    }
    //
  }
}
</style>

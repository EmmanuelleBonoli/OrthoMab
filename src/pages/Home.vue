<script setup>
import DownPage from "../components/DownPage.vue";


</script>

<template>
  <div class="home">
    <div class="connexionPro">
      <router-link class="logIn" to="/espaceconnexion"
        >Se Connecter</router-link
      >
    </div>
    <div class="presentation">Orthophoniste : Marie-Annick B</div>
    <div class="connexionPatient">
      <div class="pathFormulaire">
        <img class="imgHome" src="/images/bureau2.jpg" alt="bureau2" />
        <router-link to="/demanderdv">Demander un rdv</router-link>
      </div>
      <div class="pathPatient">
        <img class="imgHome" src="/images/bureau3.jpg" alt="bureau3" />
        <router-link to="/portailpatient"
          >Accéder à son espace Patient</router-link
        >
      </div>
    </div>
    <div class="wrapfooter"></div>

    <DownPage />

  </div>
</template>

<style lang="scss" scoped></style>

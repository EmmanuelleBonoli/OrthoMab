<script setup>
import { ref } from "vue";
import DownPage from "../components/DownPage.vue";
import ModalConnexion from "../components/ModalConnexion.vue";

const isModalOpen = ref(false);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>

<template>
  <div class="home">
    <div class="connexionPro">
      <!-- <button class="login" @click="toggleModal">Se connecter</button> -->
      <ModalConnexion :isModalOpen="isModalOpen" @close="toggleModal" />
    </div>
    <div class="presentation">Cabinet d'Orthophonie : Marie-Annick BONOLI</div>
    <div class="intro">
      Avec plus de 10ans d'expérience, j'accompagne mes patients au sein de mon
      cabinet situé sur la commune de Cormeilles-en-Parisis.
    </div>
    <div class="connexionPatient">
      <div class="pathFormulaire">
        <img class="imgHome" src="/images/bureau3.jpg" alt="bureau2" />
        <router-link to="/demanderdv">Demander un rdv</router-link>
      </div>
      <div class="pathPatient">
        <img class="imgHome" src="/images/bureau2.jpg" alt="bureau3" />
        <router-link to="/portailpatient"
          >Accéder à son espace personnel</router-link
        >
      </div>
    </div>

    <div class="wrapfooter"></div>
    <DownPage />
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
  color: black;
  background-color: #edf3f8;
  

  .connexionPro {
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 2%;
    height: 10vh;
  }

  .login {
    padding: 0.4%;
    border-radius: 10px;
    border: 1px solid black;
    background-color: var(--color-primary);
    color: white;
    &:hover {
      background-color: var(--color-secondary);
    }
  }

  .presentation {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 20vh;
    font-size: 8rem;
    background-color: var(--color-primary);
    font-family: var(--fontfamilyTitle);
    color: white;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }
  .intro {
    margin: auto;
    padding: 3%;
    font-size: 2.3rem;
    font-family: var(--fontfamilyText);
    width: 50vw;
    text-align: center;
  }
  .connexionPatient {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    // padding-top: 5%;
    gap: 2vh;

    a {
      text-decoration: none;
      padding: 1% 5% 1% 5%;
      border-radius: 10px;
      border: 1px solid black;
      background-color: var(--color-primary);
      color: white;
      font-family: var(--fontfamilyTitle);
      font-size: 2.5rem;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 1);

      &:hover {
        background-color: var(--color-secondary);
      }
    }
  }

  .pathFormulaire,
  .pathPatient {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #d1e5f8;
    min-width: 25vw;
    height: 40vh;
    border-radius: 5px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
  }

  .imgHome {
    width: 80%;
    padding: 1vh;
    object-fit: contain;
  }

  .wrapfooter {
    flex-grow: 1;
  }
}
</style>

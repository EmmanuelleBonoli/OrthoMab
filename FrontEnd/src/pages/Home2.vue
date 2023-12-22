<script setup>
// import DownPage from "../components/DownPage.vue";
import NavBar from "../components/NavBar.vue";
</script>

<template>
  <div class="home">
    <div class="presentation">
      <h1>Cabinet d'Orthophonie</h1>
      <h2>Marie-Annick BONOLI</h2>
    </div>
    <div class="infoGen">
      <h2>Qu'est ce que l'orthophonie ?</h2>
      <p>
        Un orthophoniste est un professionnel de la santé spécialisé dans
        l'évaluation, le diagnostic et la prise en charge des difficultés liées
        à la parole, au langage oral et écrit, à la compréhension, à la voix,
        ainsi qu'à la déglutition.
      </p>
      <p>
        Les personnes de tous âges peuvent bénéficier des services d'un
        orthophoniste, des jeunes enfants ayant des retards de développement du
        langage ou des difficultés d'apprentissage, aux adultes souffrant de
        troubles de la voix, de bégaiement, d'aphasie (perte partielle ou totale
        de la capacité de parler, comprendre ou utiliser le langage) après un
        accident vasculaire cérébral (AVC), de troubles de la déglutition, et
        bien plus encore.
      </p>
      <!-- <p>
        Les orthophonistes évaluent les besoins individuels et élaborent des
        programmes de traitement personnalisés pour aider leurs patients.
      </p> -->
    </div>
    <div class="pathFormulaire">
        <img class="imgHome" src="/images/bureau3.jpg" alt="bureau2" />
        <router-link to="/demanderdv">Demander un rdv</router-link>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  min-height: 100vh;
  font-family: var(--fontfamilyText);
  background-color: rgb(252, 246, 238);

  .presentation {
    background: url(./images/header.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 30vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    margin-top: 1%;
    h1,
    h2 {
      // backdrop-filter: blur(7px) saturate(70%);
      color: white;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.7);
      font-family: var(--fontfamilyText2);
    }
  }
  .infoGen {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: var(--fontfamilyText);
      font-size: 1.5rem;
      padding: 3% 0 1% 5%;
      width: 70vw;
    h2{
        padding-bottom: 1%;
    }
    }
    .pathFormulaire {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2vh;
    // background-color: var(--color-secondary);
    min-width: 25vw;
    height: 40vh;
    border-radius: 5px;
    // box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
  }

  .imgHome {
    width: 80%;
    border-radius: 5px;
    object-fit: contain;
  }

  a {
      text-decoration: none;
      padding: 1% 5% 1% 5%;
      border-radius: 10px;
      border: 1px solid black;
      background-color: var(--color-secondary);
      color: white;
      font-family: var(--fontfamilyText);
      font-size: 2rem;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 1);

      &:hover {
        background-color: var(--color-primary);
      }
    }
  //   .wrapfooter {
  //     flex-grow: 1;
  //   }
}
</style>

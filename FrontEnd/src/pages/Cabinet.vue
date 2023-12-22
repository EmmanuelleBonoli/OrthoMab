<script setup>
// import DownPage from "../components/DownPage.vue";
</script>

<template>
  <div class="cabinet">
    <h1>Le cabinet</h1>
    <div class="presentation">
      <div class="descInt">
        <div class="waiting">
          <img src="/images/salleAttente.jpg" alt="salle d'attente" />
          <div>
            Dans l'attente de votre rendez-vous, vous pourrez vous installer
            dans une salle d'attente confortable.
          </div>
        </div>
        <div class="office">
          <div>Du matériel diversifié et adapté à tous les patients !</div>
          <div>
            <img
              src="/images/matosBureau.jpg"
              alt="Matériels Orthophonie"
            /><img
              src="/images/matosBureau2.webp"
              alt="Matériels Orthophonie"
            />
          </div>
        </div>
      </div>
      <div class="descAdress">
        <img src="/images/cabinet.jpg" alt="salle d'attente" />
        <h2>Adresse :</h2>
        <div>
        <p>14 square Boris Vian</p>
        <p>95 240 Cormeilles en parisis</p>
      </div>
      <div>
        <p>A seulement quelques minutes à pied de la gare !</p>
        <p>A proximité immédiate des lignes de bus : 30-05, 9520</p>
      </div>
      <div>
        Parking le plus proche : 3 rue de la gare
      </div>
      </div>
    </div>
    <!-- <div class="wrapfooter"></div>
    <DownPage /> -->
  </div>
</template>

<style lang="scss" scoped>
.cabinet {
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  text-align: center;
  min-height: 100vh;
  padding-top: 2%;
  background-color: rgb(252, 246, 238);
  
  h1 {
    font-family: var(--fontfamilyText2);
    font-size: 7rem;
    padding: 0.5%;
    background: url(/images/map5.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    text-shadow: 0px 4px 4px var(--color-primary);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }
.presentation{
  display: flex;
  justify-content: space-around;
  padding: 2%;
  gap:1vw;

  .descInt{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap:1vh;

  }
  .descAdress{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 40vw;
    font-size: 1.5rem;
    font-family: var(--fontfamilyText);
    background-color: var(--color-secondary);
    padding: 1%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    color: white;
    h2{
      font-family: var(--fontfamilyTitle);
      border-bottom: 1px solid white;
    }
    img{
      width: 90%;
    }
  }
}
  .waiting,
  .office {
    padding: 2%;
    gap: 5vw;
     display: flex;
     align-items: center;
    font-family: var(--fontfamilyText);
    font-size: 1.5rem;
    border: 1px solid #d1e5f8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    img {
      padding: 2%;
      
    }
  }
  .waiting{
    img{
    width:20vw;
  }
  }
  .office{
    img{
      width: 15vw;
    }
    }
  // .wrapfooter {
  //   flex-grow: 1;
  // }
}
</style>

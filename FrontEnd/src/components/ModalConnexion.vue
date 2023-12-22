<template>
  <div v-if="login" class="container-connexion">
    <div class="connexion-form">
      <div class="header-container">
        <p class="close" @click="closeModal">X</p>
        <h1>Connexion</h1>
      </div>
      <div class="login-container">
        <p>Entrez votre identifiant</p>
        <input type="text" class="pseudo" />

        <p>Entrez votre mot de passe</p>
        <div class="mdp-container">
          <input
            :type="motDePasseVisible ? 'text' : 'password'"
            class="motdepasse"
            @click="handleInputClick"
          />
          <img v-if="motDePasseVisible"
            src="/images/Mdp_see.png"
            alt="eye"
            class="mdp"
            @click="toggleMotDePasseVisibility"
          />
          <img v-else
            src="/images/Mdp_unsee.png"
            alt="eye"
            class="mdp"
            @click="toggleMotDePasseVisibility" />
        </div>
        <button type="submit" class="btn-inscription" @click="submitForm">
          Se connecter
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue";

const { emit } = getCurrentInstance();

const props = defineProps({
  login: Boolean
});

const motDePasseVisible = ref(false);


const toggleMotDePasseVisibility = () => {
  motDePasseVisible.value = !motDePasseVisible.value;
};

const submitForm = () => {
  // Ajoutez votre logique de soumission du formulaire ici
  // Cette fonction est déclenchée lorsque le bouton "Se connecter" est cliqué
};

const closeModal = () => {
  emit("close-modal");
};

</script>

<style lang="scss" scoped>
.container-connexion {
  background-color: #ffffff00;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
    padding-top: 8%;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(10px);

  .close{
    display: flex;
    justify-content: end;
    padding-right: 7%;
    font-size: 3vh;
    cursor: pointer;
  }
  .connexion-form {
    border-radius: 15px;
    border: 2px solid white;
    width: 22vw;
    height: 28vw;
    background-color: var(--color-secondary)
  }

  .header-container {
    text-align: center;
    width: 100%;
    padding-top: 8%;

    h1 {
      font-size: 30px;
      color: var(--color-primary);
      font-family: var(--fontfamilyText2);
    }
  }

  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 8%;
    width: 100%;
    height: 60%;
  }
  p {
    font-family: var(--fontfamilyText);
    font-weight: bold;
    font-family: var(--secondary-font);
    font-size: 18px;
    color: #ffffff;
    text-align: center;
  }

  input {
    font-family: var(--fontfamilyText);
    padding: 5px;
    font-size: 18px;
    color: white;
  }

  .pseudo,
  .motdepasse {
    background-color: var(--color-primary);
    border: 1px solid white;
    border-radius: 5px;
    width: 15vw;
    height: 45px;
  }
  .mdp-container {
    position: relative;
    display: flex;
    align-items: center;
    .mdp {
      width: 25px;
      position: absolute;
      right: 10px; // Ajuste la position de l'icône
      cursor: pointer;
    }
  }
  .btn-inscription {
    cursor: pointer;
    color: white;
    font-size: 18px;
    font-weight: bold;
    background-color: var(--color-primary);
    border: 1px solid white;
    width: 8vw;
    height: 45px;
    border-radius: 5px;
  }
}
</style>

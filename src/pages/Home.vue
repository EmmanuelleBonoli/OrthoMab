<script setup>
import { ref } from "vue";
import DownPage from "../components/DownPage.vue";

const isModalOpen = ref(false);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>

<template>
  <div class="home">
    <div class="connexionPro">
      <button class="login" @click="toggleModal">Se connecter</button>
      <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
          <span @click="toggleModal" class="close">&times;</span>
          <form class="form">
            <p class="form-title">Entrez vos identifiants :</p>
            <div class="input-container">
              <input placeholder="john@example.com" type="email" />
              <span>
                <svg
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
            </div>
            <div class="input-container">
              <input
                placeholder="Tapez ici votre mot de passe"
                type="password"
              />

              <span>
                <svg
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
            </div>
            <button class="submit" type="submit">Sign in</button>

            <a class="signup-link" href="">Mot de passe oublié ?</a>
          </form>
        </div>
      </div>
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

  .connexionPro {
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 2%;
    height: 10vh;
  }

  .login{
    padding: 0.4%;
    border-radius: 10px;
    border: 1px solid black;
    background-color: var(--color-accent);
  }
  .modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 45vw;
    height: 50vh;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
}

.presentation {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  font-size: 3rem;
  background-color: var(--color-primary);
}

.connexionPatient {
  display: flex;
  justify-content: space-around;
  padding-top: 5%;

  a {
    text-decoration: none;
    padding: 1%;
    border-radius: 10px;
    border: 1px solid black;
    background-color: var(--color-accent);
  }
}

.pathFormulaire,
.pathPatient {
  display: flex;
  flex-direction: column;
  object-fit: contain;
  align-items: center;
}

.imgHome {
  height: 40vh;
  padding: 1vh;
}

.wrapfooter {
  flex-grow: 1;
}

.form {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  height: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.form-title {
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: #000;
}

.input-container {
  position: relative;
}

.input-container input,
.form button {
  outline: none;
  border: 1px solid #e5e7eb;
  margin: 8px 0;
}

.input-container input {
  background-color: #fff;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 1.5rem;
  width: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.input-container span {
  display: grid;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  place-content: center;
}

.input-container span svg {
  color: #9ca3af;
  width: 1.5rem;
  height: 1.5rem;
}

.submit {
  display: block;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0.5rem;
  text-transform: uppercase;
}
.signup-link {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  text-decoration: underline;
}

</style>

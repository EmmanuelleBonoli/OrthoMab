<template>
    <nav class="navbar">
      <RouterLink to="/" class="nav-link">Accueil</RouterLink> 
      <RouterLink to="/demanderdv" class="nav-link">Demande RDV</RouterLink>
      <RouterLink to="/cabinet" class="nav-link">Voir le cabinet</RouterLink>
      <button type="button" class="login" @click="handleLogin">Espace personnel</button>
      <ModalConnexion :login="login" @close-modal="handleLogin" />
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ModalConnexion from './ModalConnexion.vue';
  
  const login = ref(false);
  
  function handleLogin() {
    login.value = !login.value;
  }
  </script>
  

<style lang="scss" scoped>
 .navbar{
        width: 100vw;
        display: flex;
        background-color: var(--color-secondary);
        justify-content: flex-end;
        align-items: center;
        height: 5vh;
        gap: 3vw;
        padding-right: 4vw;
        position: fixed;
        

        a{
            color: white;
            font-size: 1.5rem;
            transition: all 0.7s ease;

            &:hover{
               font-weight: bold;
            }
            
         
        }
        .router-link-active{
                border-bottom: solid 2px var(--color-primary);
                font-weight: bold;
            }

            .login{
                background-color: var(--color-primary);
                color: white;
                padding: 0.2vh 0.5vw 0.2vh 0.5vw;
                border: 1px solid black;
                border-radius: 5px;
                &:hover {
        background-color: var(--color-secondary);
      }
            }
    }
</style>
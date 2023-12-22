<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="footer">
    <div>Tous droits réservés</div>
    <router-link to="/mentionslegales">Mentions Légales</router-link>

    <router-link v-if="route.path === '/cabinet'" to="/"
      >Revenir à l'accueil
    </router-link>
    <router-link v-else to="/cabinet">Voir le cabinet </router-link>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vh;
  background-color: var(--color-secondary);
  color: white;
  font-size: 1.5rem;


  a {
    color: white;
    font-weight: bold;
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.1);
      color: var(--color-primary);
    }
  }
}
</style>

<template>
     <div class="navBarOrtho">
        <div class="infoOrtho">Orthophoniste Marie-Annick BONOLI</div>
        <router-link to="/mapatientele" @click="setActive(1)">Ma patientèle</router-link>
        <router-link to="/monplanning" @click="setActive(2)">Mon planning</router-link>
        <router-link to="/mescomptesrendusortho" @click="setActive(3)">Mes comptes-rendus</router-link>
        <router-link to="/malistedattente" @click="setActive(4)">Liste d'attente</router-link>
    </div>
</template>

<script setup>

const emits = defineEmits(['setActive']);

const setActive = (value) => {
  emits('setActive', value);
};
</script>

<style lang="scss" scoped>
.navBarOrtho{
    display: flex;
    flex-direction: column;
    width: 15vw;
    height: 100vh;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-secondary);
    color: white;
    font-size: 2rem;
  
    .infoOrtho{
        text-align: center;
    }
    a{
        color:white;
        transition: all 0.5s ease;

        &:hover{
            color: var(--color-secondary);
        }
        // 
        
    }
}
</style>
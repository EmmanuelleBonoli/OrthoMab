<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import PortailOrtho from "./PortailOrtho.vue";
import PortailPatient from "./PortailPatient.vue";

const userConnected = ref("");
const isAdmin = ref(false);

onMounted(()=>{
  axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/1`
      )
      .then((response) => {const userData = response.data;
      userConnected.value = userData;
      isAdmin.value = response.data.admin === 1;})
.catch((error) => {console.log(error)})
      

}
 


);
</script>

<template>
  <div>
    <template v-if="userConnected === null">
      <div class="loading">Loading...</div>
    </template>

    <template v-else>
      <PortailOrtho v-if="isAdmin" :userConnected="userConnected" />
      <PortailPatient v-else :userConnected="userConnected" />
    </template>
  </div>
</template>

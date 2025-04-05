<script lang="ts" setup>
import ProfileView from './ProfileView.vue'
</script>
<template>
  <h1 class="text-5xl font-bold text-center font-stretch-90">
    Welcome to PlantSync!
    <font-awesome-icon icon="fa-solid fa-seedling" />
  </h1>
  <div class="p-4">
    <RouterLink to="/add" class="drop-shadow">+ Dodaj roślinę</RouterLink>
    <h1 class="text-2xl">
      Obecna pogoda i zadania na dzisiaj w formie listy oraz ostanio dodana roślina
    </h1>
  </div>
  <ProfileView />
</template>

<style scoped></style>

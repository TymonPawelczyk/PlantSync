<script lang="ts" setup></script>
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
  <RouterLink to="/profile" class="btn">
    <font-awesome-icon icon="fa-solid fa-user" />
  </RouterLink>
</template>

<style scoped>
.btn {
  display: grid;
  place-items: center;
  background-color: var(--color-stone-200);
  color: black;
  margin: 15%;
  border-radius: 5px;
  &:hover {
    background-color: var(--color-stone-700);
    color: white;
    transition: 0.4s;
  }
}
</style>

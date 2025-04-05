// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AddPlantView from '@/views/AddPlantView.vue'
import PlantDetailsView from '@/views/PlantDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'AddPlant',
    component: AddPlantView
  },
  {
    path: '/plant',
    name: 'PlantDetails',
    component: PlantDetailsView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

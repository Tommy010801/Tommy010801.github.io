import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Karriere from '@/views/Karriere.vue'
import Projekte from '@/views/Projekte.vue'

const routes = [
    
    {path: '/', name: 'Home', component: Home},
    {path: '/karriere', name: 'Karriere', component: Karriere},
    {path: '/projekte', name: 'Projekte', component: Projekte}

]
  

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
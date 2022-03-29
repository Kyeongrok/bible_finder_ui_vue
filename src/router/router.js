import {createRouter, createWebHistory} from 'vue-router';
import about from '@/views/Seats';
import HelloWorld from "@/views/BibleFinder";

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes:[
    { path:"/", name: "home", component:HelloWorld },
    { path:"/about", name: "about", component:about }
  ]
})

export default router

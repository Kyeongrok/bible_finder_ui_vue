import {createRouter, createWebHistory} from 'vue-router';
import about from '@/views/SeatsArrangement';
import HelloWorld from "@/views/BibleFinder";

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes:[
    { path:"/", name: "home", component:HelloWorld },
    { path:"/seats-arr", name: "seats-arr", component:about }
  ]
})

export default router

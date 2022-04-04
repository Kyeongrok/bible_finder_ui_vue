import {createRouter, createWebHistory} from 'vue-router';
import about from '@/views/SeatsArrangement';
import HelloWorld from "@/views/BibleFinder";
import NaverShoppingCrawl from "@/views/NaverShoppingCrawl";
import ExcelDownload from "@/views/ExcelDownload";
import ElectronicCar from "@/views/ElectronicCar";


const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes:[
    { path:"/", name: "home", component:HelloWorld },
    { path:"/seats-arr", name: "seats-arr", component:about },
    { path:"/naver-shopping", name: "naver-shopping", component:NaverShoppingCrawl },
    { path:"/excel", name: "excel", component:ExcelDownload },
    { path:"/electronic", name: "electronic-car", component:ElectronicCar },
  ]
})

export default router

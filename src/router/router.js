import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '../views/HelloWorld';
import pageOne from '../views/About';

Vue.use(VueRouter)

const routes = [
  { path:"/", name: "home", component:HelloWorld },
  { path:"/about", name: "about", component:pageOne }

];

const router = new VueRouter({
  mode: "history",
  routes,
});
export default router

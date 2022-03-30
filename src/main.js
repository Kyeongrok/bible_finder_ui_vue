import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import VueCookies from 'vue3-cookies'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"

const app = createApp(App)
app.use(router)
app.use(VueCookies)
app.use(VueCookies, {
  expireTimes: "7d",
  path: "/",
  domain: "",
  secure: true,
  sameSite: "None"
});
app.mount('#app')


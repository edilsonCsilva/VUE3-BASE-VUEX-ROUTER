import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'   //jogar no Diretorio separado
import { createStore } from 'vuex'




import App from './App.vue'
import HelloWorld from "./components/HelloWorld.vue";
import About from "./components/About.vue"







// 1. Define route components.
// These can be imported from other files


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: HelloWorld },
  { path: '/about', component: About },
]



const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})


//Route interceptor
router.beforeEach(async (to, from, next) => {

  console.log("de=> ", to, "PAra", from)
  /*
  if ( to.matched.some (record =>  record.meta.auth ) &&  to.meta.auth ）{// determine whether the route needs login permission
    let token = localStorage.getItem('token');
 
 
    if (token) {// gets whether the current token exists
      next()
    } else {
      //There is no token, re authentication is required
      next({
        path: '/auth/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
  */

  next();
});




export const store = createStore({
  state() {
    return {
      count: 1
    }
  }
})




const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
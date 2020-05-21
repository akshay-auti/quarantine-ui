import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

import {getters} from '../store'

// import  Store  from '@/store'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    // const publicPages = ['/'];
    // const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user')
    if(to.matched.some(record => record.meta.requiresAuth)) {
    if (loggedIn) {
    return next()
    }
    return next({name: 'login'})
    }
    next()
    })
  

  // Router.beforeEach((to, from, next) => {
  //   // redirect to login page if not logged in and trying to access a restricted page
  //   const publicPages = ['/login'];
  //   const authRequired = !publicPages.includes(to.path);
  //   const loggedIn = localStorage.getItem('user')
  //   console.log("loggedIn----", loggedIn)
    
  //   if (authRequired && !loggedIn ) {
  //   next('/login')
  //   } else {
  //   next()
  //   }
    
  //   })

  return Router
}

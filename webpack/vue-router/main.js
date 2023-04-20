// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// const NotFound = { template: '<p>Page not found</p>' }
// const Home = { template: '<p>home page</p>' }
// const About = { template: '<p>about page</p>' }
import VueRouter from 'vue-router'
import NotFound from './components/NotFound'
import Home from './components/Home'
import About from './components/About'
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path:'/',component: Home},
  {path:'/about',component: About}
]
const router=new VueRouter({
  routes
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template:"<router-view></router-view>"
})



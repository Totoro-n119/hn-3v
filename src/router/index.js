import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index'
import Classify from '../views/Classify/index'
import Hello from '../views/Hello/index'
import Favorite from '../views/Hello/Favorite/index'
import History from '../views/Hello/History/index'
import Login from '../views/Login/index'
import My from '../views/My/index'
import Ranking from '../views/Ranking/index'
import Register from '../views/Register/index'
import Search from '../views/Search/index'
import SearchResult from '../views/SearchResult/index'
import Vip from '../views/Vip/index'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/classify', component: Classify },
    {
      path: '/hello',
      component: Hello,
      children: [
        { path: 'favorite', component: Favorite },
        { path: 'history', component: History },
        { path: '', redirect: '/hello/favorite' }
      ]
    },
    { path: '/login', component: Login },
    { path: '/my', component: My },
    { path: '/ranking', component: Ranking },
    { path: '/register', component: Register },
    { path: '/search', component: Search },
    { path: '/search-resul', component: SearchResult },
    { path: '/vip', component: Vip },
    { path: '/', redirect: '/home' }

  ]
})
export default router

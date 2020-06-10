import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Category from '../views/Category.vue'
import CategoriesList from '../views/CategoriesList.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'main',
  component: Main,
  children: [{
      path: '/categories/create',
      name: 'category',
      component: Category
    },
    {
      path: '/categories/list',
      name: 'categoriesList',
      component: CategoriesList
    }
  ]
}]

const router = new VueRouter({
  routes
})

export default router

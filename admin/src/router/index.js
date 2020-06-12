import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

import Category from '../views/Category.vue'
import CategoriesList from '../views/CategoriesList.vue'
import Item from '../views/Item.vue'
import ItemsList from '../views/ItemsList.vue'
import Hero from '../views/Hero.vue'
import HeroList from '../views/HeroList.vue'
import Article from '../views/Article.vue'
import ArticleList from '../views/ArticleList.vue'
import Ad from '../views/Ad.vue'
import AdList from '../views/AdList.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'main',
  component: Main,
  children: [{
      path: '/categories/create',
      component: Category
    },
    {
      path: '/categories/list',
      component: CategoriesList
    },
    {
      path: '/categories/edit/:id',
      component: Category,
      props: true
    },

    {
      path: '/items/create',
      component: Item
    },
    {
      path: '/items/list',
      component: ItemsList
    },
    {
      path: '/items/edit/:id',
      component: Item,
      props: true
    },

    {
      path: '/heros/create',
      component: Hero
    },
    {
      path: '/heros/list',
      component: HeroList
    },
    {
      path: '/heros/edit/:id',
      component: Hero,
      props: true
    },

    {
      path: '/articles/create',
      component: Article
    },
    {
      path: '/articles/list',
      component: ArticleList
    },
    {
      path: '/articles/edit/:id',
      component: Article,
      props: true
    },

    {
      path: '/ads/create',
      component: Ad
    },
    {
      path: '/ads/list',
      component: AdList
    },
    {
      path: '/ads/edit/:id',
      component: Ad,
      props: true
    }
  ]

}]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes
})

export default router

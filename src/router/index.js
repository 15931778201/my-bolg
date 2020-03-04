import Vue from 'vue'
import Router from 'vue-router'
import ListArticle from '@/views/ListArticle'
import CreateArticle from '@/views/CreateArticle'
import ModifyArticle from '@/views/ModifyArticle'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    redirect: '/article/index'
  }, {
    path: '/article/index',
    name: 'ListArticle',
    component: ListArticle
  }, {
    path: '/article/create',
    name: 'CreateArticle',
    component: CreateArticle
  }, {
    path: '/article/modify/:id',
    name: 'ModifyArticle',
    component: ModifyArticle
  }]
})

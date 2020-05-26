import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:(resolve)=>{require(['../view/home.vue'],resolve)},
      children:[
        {
          path: '/',
          name: 'home',
          component:(resolve)=>{require(['../components/theme.vue'],resolve)},
        }
      ]
    }
  ]
})

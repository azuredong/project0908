import Vue from 'vue'
import Router from 'vue-router'
import Template from '@/components/Template'
import AxiosDemo from '@/components/AxiosDemo'
import MovieDetail from '@/components/MovieDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Template
    },
    {
      path: '/axiosDemo',
      name: '打开二级页面示例',
      component: AxiosDemo,
    },
    {
      path: '/others',
      name: '其他菜单',
      component: Template
    },
    {
      path: '/movies/:id',
      name: '影片详情',
      component: MovieDetail
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

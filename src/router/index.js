import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Me1 from '@/components/Me1'
import Me2 from '@/components/Me2'
import Rurl from '@/components/Rurl'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  //mode:'history',/*地址栏路径去掉#:http://127.0.0.1:2000/hi2 hash:有#*/
  routes: [
    {
      path: '/',
      alias:'/home',
      name: 'HelloWorld',
      components: {//7、 多模块多router-view 要写components
        default:HelloWorld,//默认的router-view
        left:Me1,
        right:Me2
      }
    },
    {
      path:'/rurl/:newsId/:newsTitle',
      name:'rurl',
      /**
       * 9、路由中的钩子函数：
       * 但是在路由文件中我们只能写一种beforeEnter,不可以写离开，
       * 可以在模板中写 => 去Rurl.vue
       */ 
    /*   beforeEnter:(to,from,next) => {
        console.log('我进入了Rurl模板');
        console.log(to);
        console.log(from);
        //next(false); //不向下跳转
        next({path:'/'}); //next(true):向下跳转;next({path:'/'}:传参：跳转路径) 
      }, */
      component:Rurl
    },
    {
      path:'/gohome',
      redirect:'/'/* 重定向  页面路径：" http://127.0.0.1:2000/#/ " */
    },
    {
      path:'/goRurl/:newsId/:newsTitle',/* 正则验证： /goRurl/:newsId(\\d+)//:newsTitle*/
      redirect:'/rurl/:newsId/:newsTitle'
    },
    {
      path:'/Hi1',
      name:'alias_hi1',
      component:Hi1,
      alias:'/shirleyHi1'  /* 页面路径不一样：" http://127.0.0.1:2000/#/shirleyHi1 " */
    },
    {
      path:'*',
      name:'error',
      component:Error
    },
    {
      path:'/hi',
      /* name:'Hi', */
      component:Hi,
      children:[
        {path:'/',name:'Hello/Hi', },/* component:Hi配置模板出现的结果就是会出现2行一样的内容 */
        {path:'/hi1', name:'hi1',component:Hi1},
        {path:'/hi2', name:'hi2',component:Hi2},
      ]
    }
  ]
})

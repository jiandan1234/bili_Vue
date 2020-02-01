import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/Home"
import Tab from "@/components/Tab"
import Biaodan from "@/components/Biaodan"
import Default from "@/components/Default"
import Try from '@/components/Try';
import Filter from "@/components/Filter"
import Lifec from '@/components/Lifec';
import Tsdemo from '@/components/Tsdemo';
// 组件练习的路由
import Zujian from "@/views/Zujian"

import Mock from "@/components/Mock"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      children:[
        {
          path:"try",
          name:"Try",
          component:Try
        }
      ]
    },
    {
      path:"/mock",
      name:"Mock",
      component:Mock
    },

    // 组件
    {
      path:"/zujian",
      name: "Zujian",
      component: Zujian,
      // children:[
      //   {
      //     path:"zujian2",
      //     name:"Zujian2",
      //     component: () => import("@/views/Zujian2")
      //   },
      // ]
    },
  
    
    // {
    //   path: "/tab",
    //   name: "Tab",
    //   component: Tab

    // },
    {
      path: "/biaodan",
      name: "Biaodan",
      component: Biaodan

    },
    // {
    //   path: "/default",
    //   name: "Default",
    //   component: Default
    // },
    // {
    //   path: "/filter",
    //   name: "Filter",
    //   component: Filter
    // },
    // {
    //   path: "/lifec",
    //   name: "Lifec",
    //   component: Lifec
    // },
    // {
    //   path: "/tsdemo",
    //   name: "Tsdemo",
    //   component: Tsdemo
    // },
    {
      path: "/promise",
      name: "Promise",
      component:()=>import("@/Promise_demo/Promise")
    },
    // {
    //   path: "/lianxie",
    //   name: "Lianxie",
    //   component:Lianxie
    // }
  ]
})

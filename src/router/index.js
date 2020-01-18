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
// import Zujian3 from "@/views/Zujian3"
import Zujian4 from "@/views/Zujian4"
import Zujian5 from "@/views/Zujian5"
import Zujian6 from "@/views/Zujian6"

import Promise from "@/components/Promise"

Vue.use(Router)

export default new Router({
  routes: [

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
      path:"/zujian",
      name: "Zujian",
      component: Zujian,
      children:[
        {
          path:"zujian2",
          name:"Zujian2",
          component: () => import("@/views/Zujian2")
        },
        {
          path:"zujian3",
          name:"Zujian2",
          component:() => import ("@/views/Zujian3")
        }
       

      ]
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "/tab",
      name: "Tab",
      component: Tab

    },
    {
      path: "/biaodan",
      name: "Biaodan",
      component: Biaodan

    },
    {
      path: "/default",
      name: "Default",
      component: Default
    },
    {
      path: "/filter",
      name: "Filter",
      component: Filter
    },
    {
      path: "/lifec",
      name: "Lifec",
      component: Lifec
    },
    {
      path: "/tsdemo",
      name: "Tsdemo",
      component: Tsdemo
    },
    {
      path: "/zujian",
      name: "Zujian",
      component: Zujian
    },
    // {
    //   path: "/zujian2",
    //   name: "Zujian2",
    //   component: Zujian2
    // },
    {
      path: "/zujian3",
      name: "Zujian3",
      component: Zujian3
    },
    {
      path: "/zujian4",
      name: "Zujian4",
      component: Zujian4
    },
    {
      path: "/zujian5",
      name: "Zujian5",
      component: Zujian5
    },
    {
      path: "/zujian6",
      name: "Zujian6",
      component: Zujian6
    },
    {
      path: "/promise",
      name: "Promise",
      component:Promise
    }
  ]
})

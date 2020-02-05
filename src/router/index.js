import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tab from "@/components/Tab"
import Biaodan from "@/components/Biaodan"
import Default from "@/components/Default"
import Filter from "@/components/Filter"
import Lifec from '@/components/Lifec';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/home",
      name: "Home",
      component: ()=>import("@/components/Home"),
      children:[
        {
          path:"try",
          name:"Try",
          component:()=>import("@/components/Try")
        }
      ]
    },
// mock练习
    {
      path:"/mock",
      name:"Mock",
      component:()=>import("@/components/Mock")
    },

    // 组件
    {
      path:"/zujian",
      name: "Zujian",
      component:()=>import("@/views/ZJ/Zujian"),
      // children:[
      //   {
      //     path:"zujian2",
      //     name:"Zujian2",
      //     component: () => import("@/views/Zujian2")
      //   },
      // ]
    },
    {
      path: "/promise",
      name: "Promise",
      component:()=>import("@/Promise_demo/Promise"),
      children:[
        {
          path:"/promise2",
          name:"Promise2",
          component:()=>import("@/Promise_demo/Promise2")
        },
        {
          path:"/promise3",
          name:"Promise3",
          component:()=>import("@/Promise_demo/Promise3")
        }

      ]
    },
    {
      path:"/fetch",
      name:"Fetch",
      component:()=>import("@/Promise_demo/Fetch")
    },
    {
      path:"/book",
      component:()=>import("@/views/Book_Manage/Tsdemo"),
    }
  ]
})

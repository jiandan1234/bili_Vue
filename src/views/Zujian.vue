<template>
<!-- 自定义组件练习 -->
  <div class="zujian">
    <!-- 1.全局组件化 -->
      <!-- <button-counter></button-counter>
      <hello-world></hello-world> -->

    <!-- 2.局部组件化 -->
    <!-- <hello-world></hello-world>
    <hello-tom></hello-tom>
    <hello-jerry></hello-jerry> -->

    <!-- 3.父组件传给子组件 -->
    <div>{{pmsg}}</div>
    <menu-item title="来自父组件的值"></menu-item>
    <menu-item :title="ptitle"></menu-item>
    <zujian2/>
    <zujian3 />
    <zujian4 />
    <zujian5 />
    <zujian6 />
    <router-view></router-view>

  </div>
</template>

<script>
import zujian2 from "@/views/Zujian2"
import zujian3 from "@/views/Zujian3"
import zujian4 from "@/views/Zujian4"
import zujian5 from "@/views/Zujian5"
import zujian6 from "@/views/Zujian6"
import Vue from "vue";
// Vue.component("button-counter",{
//     data:function(){
//         return{
//             count:0
//         }
//     },
//     template:'<button @click="handle">点击了{{count}}次</button>',
//     methods:{
//       handle:function(){
//         this.count +=2;
//       }
//     }
// })
// --------------------------------------------------
//组件字符串化 
// Vue.component("button-counter",{
//     data:function(){
//         return{
//             count:0
//         }
//     },
//     template:`
//     <div>
//     <button @click="handle">点击了{{count}}次</button>
//     <button>测试</button>
//     <HelloWorld></HelloWorld>
//     </div>
//     `,
//     methods:{
//       handle:function(){
//         this.count +=2;
//       }
//     }
// })

// 3.注册新的组件：驼峰法命名“组件名称”
// Vue.component("HelloWorld",{
//   data:function(){
//     return{
//       msg:"HelloWorld"
//     }

//   },
//   template:`
//      <div>{{msg}}<div>
//   `,
//   methods:{

//   },

// })

// 4.局部组件化
// var HelloWorld={
//   data:function(){
//     return{
//       msg:"HelloWorld"
//     }
//   },
//   template:'<div>{{msg}}</div>'
// };
// var HelloTom={
//   data:function(){
//     return{
//       msg:"HelloTom"
//     }
//   },
//   template:"<div>{{msg}}</div>"
// };

// var HelloJerry={
//   data:function(){
//     return{
//       msg:"HelloJerry"
//     }
//   },
//   template:"<div>{{msg}}</div>"
// };
// ------------------------------------------
// 父组件向子组件传值
Vue.component("menu-item",{
  props:['title'],
  data:function(){
    return{
      
      msg:"子组件本身的数据"
    }
  },
  template:"<div>{{msg + '-'+ title}}</div>"
})
export default {
  name: "zujian",
  components:{
zujian2,zujian3,zujian4,zujian5,zujian6
  },
  data() {
    return {
      pmsg:"父组件本身数据,组件1",
      ptitle:"动态绑定属性"
    };
  },
  // components:{
  //   "hello-world":HelloWorld,
  //   "hello-tom":HelloTom,
  //   "hello-jerry":HelloJerry
  // },
  methods: {
  
  },
  watch: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zujian {
  width: 50%;
  height: 30%;
  border:5px solid green;
  display: flex;
  flex-wrap:wrap;
}
</style>

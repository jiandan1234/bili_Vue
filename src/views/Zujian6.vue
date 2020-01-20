<template>
  <div class="zujian6">
    <!--1.组件插槽-->
    <!-- <alter-box>有bug发生</alter-box>
    <alter-box>有bug发生</alter-box> -->

    <!-- 2.具名插槽用法 -->
    <!-- <alter-box>
      <p slot="header">标题信息</p>
      <p>内容1</p>
      <p>内容2</p>
       <p slot="footer">底部信息</p>
    </alter-box> -->

    <!-- 3.作用域插槽 -->
    <fruit-list :list="list">
      <template slot-scope="slotProps">
        <strong  v-if="slotProps.info.id==2" class="current">{{slotProps.info.name}}</strong>
      </template>
    </fruit-list>
  </div>
</template>

<script>
import Vue from "vue";

// 1.组件插槽
// Vue.component("alter-box",{
//   template:`
//   <div>
//     <strong>ERROR:</strong>
//     <slot>默认内容</slot>
//   </div>
//   `
// })

// 2.具名插槽使用
// Vue.component("alter-box",{
//   template:`
//   <div>
//     <header>
//       <slot name="header"></slot>
//     </header>
//      <main>
//       <slot></slot>
//     </main>
//      <footer>
//       <slot name="footer"></slot>
//     </footer>
//   </div>
//   `
// })

// 3.作用域插槽
Vue.component("fruit-list",{
  props:["list"],
  template:`
  <div>
    <li :key="item.id" v-for="item in list">
    <slot :info="item">{{item.name}}</slot>
    </li>
  </div>
  `
})
export default {
  name: "zujian6",
  data() {
    return {
     list:[
       {
         id:1,
         name:'apple'
       },
       {
         id:2,
         name:"pear"
       },
       {
         id:3,
         name:"banana"
       }
     ]
    };
  },

  methods: {
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zujian6 {
  width: 100%;
  height: 100%;
}
.current{
  color: aqua;
}
</style>

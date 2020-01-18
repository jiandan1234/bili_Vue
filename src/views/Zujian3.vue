<template>
  <!--子组件向父组件传值练习-->
  <div class="zujian3">
    <div  >{{pmsg}}</div>
    <!-- <menu-item :parr="parr"></menu-item> -->
    <!-- 监听子组件的 enlarge-text一定注意-->
    <menu-item :parr="parr" @enlarge-text="handle" :style="{fontSize:fontSize+'px'}"></menu-item>
  </div>
</template>

<script>
import Vue from "vue";
//props传递参数原则：单向数据流，不建议用parr.push('lemon')方式
// $emit()触发自定义事件
Vue.component("menu-item", {
  props: ["parr"],
  template: `
  <div>
    <ul>
      <li v-for="(item,index) in parr">{{item}}</li>
    </ul>
    <button @click="parr.push('lemon')">点击</button>
    <button @click='$emit("enlarge-text")'>扩大父组件中字体大小</button>
  </div>
  `
});
export default {
  name: "zujian3",
  data() {
    return {
      pmsg: "父组件本身数据",
      parr: ["apple", "orange", "banana"],
      fontSize:10,
    };
  },

  methods: {
    handle:function(){
      // 扩大字体大小
      this.fontSize +=5;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zujian3 {
  width: 100px;
  height: 200px;
}
</style>

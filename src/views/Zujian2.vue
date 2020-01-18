<template>
  <!-- 组件props属性值类型练习
     1.字符串
     2.数字
     3.布尔值
     4.数组
     5.对象
  -->
  <div class="zujian2">
    <div>{{pmsg}}</div>
    <menu-item :pstr="pstr" :pnum="12" :pboo="true" :parr="parr" :pobj='pobj'></menu-item>
  </div>
</template>

<script>
import Vue from "vue";
Vue.component("menu-item", {
  props: ["pstr", "pnum", "pboo", "parr","pobj"],
  template: `
  <div>
     <div>{{pstr + '-' + pnum}}</div>
     <div>{{pboo}}</div>
     <ul >
       <li :key="index" v-for="(item,index) in parr">{{item}}</li>
     </ul>
     <div>
       <span>{{pobj.name}}</span>
       <span>{{pobj.age}}</span>
     </div>
  </div>
  `
});
export default {
  name: "zujian2",
  data() {
    return {
      pmsg: "父组件本身数据",
      pstr: "hello",
      parr: ["apple", "orange", "banana"],
      pobj:{
        name:"zhangsan",
        age:12
      }
    };
  },

  methods: {},
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zujian2 {
  width:200px;
  height: 200px;
  border: 1px solid blue;
}
</style>

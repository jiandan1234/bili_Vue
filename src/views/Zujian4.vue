<template>
  <!--子组件向父组件传值练习--携带参数用$evnet来接收-->
  <div class="zujian4">
    <div :style="{fontSize:fontSize+'px'}">{{pmsg}}</div>
    <menu-item :parr="parr" @enlarge-text="handle($event)"></menu-item>
  </div>
</template>

<script>
import Vue from "vue";
Vue.component("menu-item",{
  props:["parr"],
  template:`
  <div>
    <ul>
      <li :key="index" v-for="(item,index) in parr">{{item}}</li>
    </ul>
    <button @click="$emit('enlarge-text',5)">扩大父组件中字体的大小</button>
  </div>
  `

})

export default {
  name: "zujian4",
  data() {
    return {
      pmsg: "父组件本身数据,组件4",
      parr: ["apple", "orange", "banana"],
      fontSize:10,
    };
  },

  methods: {
    handle:function(val){
      // 扩大字体大小
      this.fontSize +=val;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zujian4 {
  width: 200px;
  height: 200px;
  border:1px solid blueviolet;
}
</style>

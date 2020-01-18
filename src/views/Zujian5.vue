<template>
  <!--非父子组件传递（兄弟组件）-->
  <div class="zujian4">
    <div>父组件</div>
    <div>
      <button @click="handle">销毁</button>
    </div>
    <test-tom></test-tom>
    <test-jerry></test-jerry>
  </div>
</template>

<script>
import Vue from "vue";
// 提供事件中心
var hub = new Vue();

Vue.component("test-tom",{
data:function(){
  return{
    num:0
  }
},
template:`
<div>
  <div>TOM:{{num}}</div>
  <div>
    <button @click="handle">点击</button>
  </div>
</div>
`,
methods:{
  handle:function(){
// 监听兄弟组件的对方的事件
hub.$emit("jerry-event",2);
  }
},
mounted:function(){
  // 监听事件
  hub.$on("tom-event",(val)=>{
    this.num +=val
  })
}
});

// jerry
Vue.component("test-jerry",{
data:function(){
  return{
    num:0
  }
},
template:`
<div>
  <div>Jerry:{{num}}</div>
  <div>
    <button @click="handle">点击</button>
  </div>
</div>
`,
methods:{
  handle:function(){
    // 监听对方的事件
 hub.$emit("tom-event",1);
  }
},
mounted:function(){
  // 监听事件
  hub.$on("jerry-event",(val)=>{
    this.num +=val
  })
}
});
export default {
  name: "zujian4",
  data() {
    return {
      pmsg: "父组件本身数据",
      parr: ["apple", "orange", "banana"],
      fontSize:10,
    };
  },

  methods: {
    handle:function(){
      hub.$off("tom-event");
      hub.$off("jerry-event");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zujian4 {
  width: 100%;
  height: 100%;
}
</style>

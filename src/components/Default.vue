<template>
  <div class="default">
    <!--1. 自定义指令 -->
    <!-- <input type="text" v-focus> -->
    <!-- 2.自定义指令带参数 -->
     <!-- <input type="text" v-color="msg"> -->
     <!-- 3.计算属性 -->
     <div>{{reverseString}}</div>
     <div>{{reverseString}}</div>
     <div>{{reverseMessage()}}</div>
     <div>{{reverseMessage()}}</div>
  </div>
</template>

<script>
import Vue from 'vue'

// Vue.directive('focus', {
//   // 当被绑定的元素插入到 DOM 中时……
//   inserted: function (el) {
//     // 聚焦元素
//     el.focus()
//   }
// })

// 带参数
Vue.directive("color",{
  bind:function(el,binding){
    console.log(binding.value.color);
    el.style.backgroundColor=binding.value.color;
  }
}
)

export default {
  name: 'default',
  data () {
    return {
      // msg:{
      //   color:"green"
      // }
      msg:"Hello"
    }
  },
  methods:{
    reverseMessage:function(){
      console.log("methods")
      return this.msg.split("").reverse().join('');
    }
    
  },
  computed:{
    reverseString:function(){
      console.log("computed")
      return this.msg.split("").reverse().join('');
    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.default{
  width: 100%;
  height: 100%;
}
input{
  margin-left: 10px;
}
</style>

<template>
  <div class="promise2">
<!-- promise常用的API-实例方法 -->
    <div>{{msg}}</div>
  </div>
</template>

<script>
function foo(){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      // resolve(123);
      reject("error")
    },100);
  })
}
// foo()
//   .then(function(data){
//     console.log(data)
//   })
//   .catch(function(data){
//     console.log(data)
//   })
//   .finally(function(){
//     console.log("finally")
//   });
// foo（）下方代码可以用以下代替
// 可以让then同时接受两个参数，第一个为正常情况的放回值，第二个为异常情况的放回值
foo()
  .then(function(data){
    console.log(data)
  },function(data){
    console.log(data)
  })
  .finally(function(){
    console.log("finally")
  });









export default {
  name: "watch",
  data() {
    return {
      msg:"promise2页面"
    };
  },
  methods: {
  
  },
  watch: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.promise2{
  width: 200px;
  height: 200px;
  /* border:10px solid black; */
}
</style>

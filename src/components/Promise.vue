<template>
  <div class="promise">

  </div>
</template>

<script>
// 1.promise基本用法
// console.dir(Promise);
// var p = new Promise(function(resolve,reject){
//   // 这里用于实现异步任务
//   setTimeout(function(){
//     var flag=true;
//     if(flag){
//       resolve("hello");
//     }else{
//       reject("出错了")
//     }
//   },100)
// });
// p.then(function(data){
// console.log(data)
// },function(info){
//   console.log(info)
// })

// 2.基于promise处理ajax
// 封装一个函数
// function queryData(url){
//   var p = new Promise(function(resolve,reject){
//     var xhr = new XMLHttpRequest();
//     // 指定回调函数
//     xhr.onreadystatechange =function(){
//       if(xhr.readyState !=4) return;
//       if(xhr.readyState = 4 && xhr.status==200){
//         // 处理正常的情况
//         resolve(xhr.responseText);
//       }else{
//         // 处理异常情况
//         reject("服务器错误")
//       }
//     };
//     xhr.open("get",url);
//     xhr.send(null);
//   });
//   return p;
// }
  // 调用
  // queryData("")
export default {
  name: "promise",
  data() {
    return {
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
.promise {
  width: 100%;
  height: 100%;
}
</style>

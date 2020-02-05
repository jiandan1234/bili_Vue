<template>
  <div class="promise3">
<!-- promise常用的API-对象方法Promise.all() Promise.race() -->
    <div>{{msg}}</div>
  </div>
</template>

<script>
function queryData(url) {
  var p = new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    // 指定回调函数
    xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) return;
      if ((xhr.readyState = 4 && xhr.status == 200)) {
        // 处理正常的情况
        resolve(xhr.responseText);
      } else {
        // 处理异常情况
        reject("服务器错误");
      }
    };
    xhr.open("get", url);
    xhr.send(null);
  });
}
// 由于课程用个json-server做了拦截，我暂时不会拦截设计，只能做了一个记录
  var p1 = queryData("http://localhost:3000/a1");
  var p2 = queryData("http://localhost:3000/a2");
  var p3 = queryData("http://localhost:3000/a3");
Promise.all([p1,p2,p3]).then(function(result){
  console.log(result)
})//返回结果为P1,P2,P3的返回结果
Promise.race([p1,p2,p3]).then(function(result){
  console.log(result)
})//返回结果为最先返回的的那个，例如P2的返回结果











export default {
  name: "watch",
  data() {
    return {
      msg:"promise3页面"
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
.promise3{
  width: 200px;
  height: 200px;
  /* border:10px solid black; */
}
</style>

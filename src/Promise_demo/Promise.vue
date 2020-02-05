<template>
  <div class="promise">
    <div>111</div>
    <ul>
      <li>
        <router-link tag="div" :to='{name:"Promise2"}'>promise2按钮</router-link>
      </li>
      <li>
        <router-link tag="div" :to='{name:"Promise3"}'>promise3按钮</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
// 1.promise基本用法
// console.log(typeof Promise)
// console.dir(Promise);
var p = new Promise(function(resolve, reject) {
  // 这里用于实现异步任务
  setTimeout(function() {
    var flag = true;
    if (flag) {
      // 正常情况
      resolve("hello");
    } else {
      // 异常情况
      reject("出错了");
    }
  }, 100);
});
p.then(
  function(data) {
    console.log(data);
  },
  function(info) {
    console.log(info);
  }
);

// 2.基于promise处理ajax
// 封装一个函数
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
  // 返回实例对象
  return p;
}
// queryData("http://localhost:3000/post")
// .then(function(data){
//   console.log(data);
// },function(info){
//   console.log(info);
// }
// )
// ==================================
// 发送多个ajax请求并保证顺序
queryData("http://localhost:3000/post").then(function(data) {
  console.log(data);
  return queryData("http:");
});
export default {
  name: "promise",
  data() {
    return {};
  },
  methods: {},
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.promise {
  width: 400px;
  height: 400px;
  border: 1px solid red;
}
ul{
  width: 50%;
  height: 50%;
  border: 1px solid red;
  float: left;
  position: relative;
}
</style>

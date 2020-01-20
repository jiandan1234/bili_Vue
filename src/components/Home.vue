<template>
  <div class="home">
    <!-- 1.v-cloak -->
    <!-- <div v-cloak>{{msg}}</div>
    <div v-text="msg"></div>
    <div v-html="msg1"></div>
    <div v-pre>{{msg}}</div>-->

    <!-- 2.事件绑定 -->
    <!-- <div>{{num}}</div>
    <div>
      <button @click="Sum(123,$event)">点击</button>
      <button @click="Sum1">点击2</button>
      <input type="text" v-on:keyup.AAA="handle">
    </div>-->

    <!-- 3.v-bind -->
    <!-- <a v-bind:href="url">百度一下</a>
    <button v-on:click="changeurl">切换url</button>-->

    <!-- 4.v-mode深入理解 -->
    <!-- <div>{{msg}}</div> -->
    <!-- <input type="text" v-bind:value="msg" v-on:input="changeinput"> -->
    <!-- <input type="text" v-bind:value="msg" v-on:input="msg=$event.target.value"> -->
    <!-- <input type="text" v-model="msg"> -->

    <!-- 5.样式绑定--对象语法 -->
    <!-- <div v-bind:class={active:isActive,error:isError}></div>
    <button v-on:click="ChangeSytle">切换</button>-->

    <!-- 6.样式绑定--数组语法 -->
    <!-- <div v-bind:class="[activeClass,errorClass]">测试样式</div> -->
    <!-- <button v-on:click="ChangeSytle1">切换样式</button> -->

    <!-- 7.样式绑定详细介绍 -->
    <!-- <div v-bind:class="[activeClass,errorClass,{test:isTest}]">测试样式</div> -->
    <!-- <button v-on:click="ChangeSytle2">切换样式</button> -->

    <!-- 8.style内联样式 -->
    <!-- <div v-bind:style="{border:borderStyle,width:widthStyle,height:heightStyle}"></div>
    <div v-bind:style=objStyles></div>
    <button v-on:click="ChangeStyle3">切换</button>-->

    <!-- v-if -->
    <!-- <div v-if="score>=90">优秀</div>
    <div v-else-if="score<90&&score>=80">良好</div>
    <div v-else-if="score<80&&score>60">一般</div>
    <div v-else>比较差</div>
    <div v-show="flag">测试v-show</div>
    <button v-on:click="ChangeShow">切换show</button>-->

    <!-- v-for -->
    <!-- <div>水果列表</div>
    <ul>
      <li v-for="item in fruits">{{item}}</li>
      <li v-for="(item,index) in fruits">{{item}}---{{index}}</li>
      <li v-for="item in myFruits">
        <span>{{item.ename}}</span>
        <span>---------------</span>
        <span>{{item.cname}}</span>
      </li>
      <li :key="item.id" v-for="item in fruits">{{item}}</li>
    </ul>-->

    <!-- 详细讲解v-if和v-for -->
    <!-- <div v-if ='v==13' v-for="(v,k,i) in obj">{{v}}--{{k}}--{{i}}</div> -->

    <!-- tab案例 -->
    <div class="contant">
    <ul class="tab">
      <li class="list" :key="item.id" v-for="(item,index) in list">{{item.title}}</li>
    </ul>
    <div class="current" :key="item.id" v-for="(item,index) in list">
      <img :src="item.path" alt="" class="img1">
    </div>
    <router-link :to="{name:'Try'}">子路由练习</router-link>
    <router-view></router-view>
    <!-- <div>
      <img src="../assets/img/orange.jpg" alt="" class="img img2">
    </div>
    <div>
      <img src="../assets/img/lemon.jpeg" alt="" class="img img3">
    </div> -->
  </div>
  </div>
</template>

<script>
// 使用原生js遍历对象
// var obj = {
//   uname: "lisi",
//   age: 12,
//   gender: "male"
// };
// for (var key in obj) {
//   console.log(key, obj[key]);
// }
Vue.config.keyCodes.AAA = 65;
export default {
  name: "Home",
  data() {
    return {
      msg: "Hello vue",
      msg1: "<h1>HTML</h1>",
      num: 0,
      url: "http://www.baidu.com",
      isActive: true,
      isError: true,
      activeClass: "active",
      errorClass: "error",
      isTest: true,
      borderStyle: "1px solid blue",
      widthStyle: "100px",
      heightStyle: "100px",
      objStyles: {
        border: "1px solid red",
        width: "200px",
        height: "100px"
      },
      score: 80,
      flag: true,
      fruits: ["apple", "orange", "pear"],
      myFruits: [
        {
          id: 1,
          ename: "apple",
          cname: "苹果"
        },
        {
          id: 2,
          ename: "orange",
          cname: "橘子"
        },
        {
          id: 3,
          ename: "pear",
          cname: "梨"
        }
      ],
      obj: {
        uname: "lisi",
        age: 12,
        gender: "male"
      },
      
      list:[{
        id:1,
        title:"apple",
        path:"../assets/img/apple.jpg"
      },
      {
        id:2,
        title:"orange",
        path:"../assets/img/orange.jpg"
      },
      {
        id:3,
        title:"lemon",
        path:"../assets/img/lemon.jpeg"
      },

      ]

    };
  },
  methods: {
    Sum: function(p) {
      console.log(p);
      console.log(event.target);
      this.num++;
    },
    Sum1: function(event) {
      console.log(event.target.innerHTML);
    },
    handle: function(event) {
      console.log(event.keyCode);
    },
    changeurl: function() {
      //修改url地址
      this.url = "https://cn.vuejs.org/";
    },
    changeinput: function(event) {
      console.log(event);
      this.msg = event.target.value;
    },
    ChangeSytle: function() {
      // 控制isActive值在true和false之前切换
      this.isActive = !this.isActive;
    },
    ChangeSytle1: function() {
      this.activeClass = "";
      this.errorClass = "";
    },
    ChangeSytle2: function() {
      this.isTest = !this.isError;
    },
    ChangeStyle3: function() {
      this.heightStyle = "200px";
      this.objStyles.width = "100px";
    },
    ChangeShow: function() {
      this.flag = !this.flag;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

[v-cloak] {
  display: none;
}
.home{
  width: 100%;
  height: 100%;
  border: 1px solid red;
}
.contant{
  width: 40%;
  height: 50%;
  /* border: 1px solid red; */
}
.tab{
  width: 80%;
  height: 20%;
  border: 1px solid red;
  
}
.current{
  display: block;
  width: 80%;
  height: 80%;
  border: 2px solid blue;
}
.img{
  display: none;
}
.img1{
  height: 100%;
  width: 100%;
  border: 1px solid blue;
  float: left;

}
ul>li{
  float: left;
  width: 33.33%;
  height: 100%;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
}
.active {
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
.error {
  background-color: aqua;
}
.test {
  color: #808800;
}
</style>

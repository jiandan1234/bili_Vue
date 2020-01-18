<template>
  <div class="watch">
    <!--1. 监听器的练习 -->
    <div>
      <div>
        <span>名:</span>
        <span>
          <input type="text" v-model="firstName" />
        </span>
      </div>
      <div>
        <span>姓:</span>
        <input type="text" v-model="lastName" />
      </div>
      <div>{{fullName}}</div>
    </div>

    <!-- 2.输入框中输入姓名，失去焦点时验证是否存在，如果已经存在，提示从新输入，如果不存在，提示可以使用 -->
    <div>
      <span>用户名：</span>
      <span>
        <input type="text" v-model.lazy="uname" />
      </span>
      <!-- 提示信息显示到页面中 -->
      <span>{{tip}}</span>
    </div>
  </div>
</template>

<script>
/*
侦听器：
1.采用侦听器监听用户名的变化
2.调用后台接口进行验证
3.根据验证的结果调整提示信息
 */
export default {
  name: "watch",
  data() {
    return {
      firstName: "Jim",
      lastName: "Green",
      // fullName:"Jim Green"
      uname: "",
      tip: "" //提示信息
    };
  },

  computed: {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  },

  //   watch:{
  //       firstName:function(val){
  //           this.fullName=val+" "+this.lastName;
  //       },
  //       lastName:function(val){
  //           this.fullName=this.firstName+' '+val;
  //       }
  //   }

  // 2.部分内容
  methods: {
    // 实现接口调用,但是我们可以用定时任务的方式模拟接口的调用
    checkName:function(uname){
    // 模拟接口调用
    var that = this;
    setTimeout(function(){
      if(uname == "admin"){
      that.tip = "用户名已存在，请更换一个";
    }else{
      that.tip = '用户名可用'
    }
      },2000);
      }
  },
  watch: {
    uname: function(val) {
      // 调用后台接口
      this.checkName(val);
      this.tip = '正在验证...'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.watch {
  width: 100%;
  height: 100%;
}
</style>

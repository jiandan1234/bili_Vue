<template>
<!-- 从https://www.jb51.net/article/120603.htm 页面学的mock实例练习-->
  <div class="mock">
    <h1>{{msg}}</h1>
    <h2>测试axios+mockj练习</h2>
    <ul>
      <li v-for="(item,index) in data" :key="index">{{item.author_name}}</li>
    </ul>
  </div>
</template>

<script>


export default {
  name: "watch",
  data() {
    return {
      msg:"mock练习",
      data:[]
    };
  },
  created:function(){

  },
  mounted:function(){
    this.getAlldata();
  },
  methods: {
    getAlldata(){
      console.log("nihaoma");
      let that = this;
      this.axios.get("/user")
      .then(function(res){
        console.log("连接成功");
        that.data = res.data.data
      })
      .catch(function(error){
        console.log("连接错误"+error)
      });
    }
  
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mock {
  width: 400px;
  height: 400px;
  border:1px solid #fa85f1;
}
ul{
  width: 400px;
  height: 100px;
  /* border:1px solid #fa85f1; */
}
li{
  width: 60px;
  height: 20px;
  border:1px solid #fa85f1;
  /* float: left; */
  display: inline-block;
}
</style>

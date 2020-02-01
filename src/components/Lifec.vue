<template>
  <div class="lifec">
    <div>{{msg}}</div>
    <!-- 生命周期练习 -->
    <button @click="update">更新</button>
     
  </div>
</template>

<script>
export default {
  name: 'default',
  data () {
    return {
      msg:'生命周期'
    }
  },
  methods:{
    update:function(){
      this.msg="hello"
    }
  },
  beforeCreate:function(){
    console.log("beforeCreate")
  },
  created:function(){
    console.log("created")
  },
  beforeMount:function(){
    console.log("beforeMount");
  },
  mounted:function(){
    console.log("mounted");
  },
  beforeUpdate:function(){
    console.log("beforeUpdate");
  },
  updated:function(){
    console.log("updated");
  },
  beforeDestroy:function(){
    console.log("beforeDestroy");
  },
  destroyed:function(){
    console.log("destroyed");
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lifec{
  width: 100%;
  height: 100%;
}
</style>

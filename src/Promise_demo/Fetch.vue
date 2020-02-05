<template>
  <div class="fetch">
    <div>fetch练习</div>
  </div>
</template>

<script>

// fetch API基本用法

fetch("/data",{
  method:"get"
})
.then(function(data){
  // text()属于fetchAPI的一部分，并且返回一个promise实例对象，用于获取后台返回的数据
  return data.text()
}).then(function(data){
  console.log(data)
})









export default {
  name: "watch",
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
.fetch {
  width: 100%;
  height: 100%;
}
</style>

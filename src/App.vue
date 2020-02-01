<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  
}
html,body{
  height:100% ;
  width: 100%;
  border:1px solid blue;
}
img{
  float:left;
  border:1px solid blue;
}
*{
  list-style: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
}
</style>

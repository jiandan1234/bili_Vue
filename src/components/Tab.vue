<template>
  <div class="tabdemo">
     <!-- tab案例 -->
    <div class="tab">
    <ul>
      <li :class="currentIndex==index?'active':''" :key="item.id" v-for="(item,index) in list">{{item.title}}</li>
    </ul>
    <div :class="currentIndex==index?'current':''" :key="item.id" v-for="(item,index) in list">
      <img :src="item.path" alt=""/>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {
    return {
      currentIndex:0,//选项卡当前的索引
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

    }
  },
  methods:{

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabdemo{
  width: 100%;
  height: 100%;
  border:1px solid red;
}
.tab ul li{
  float: left;
  width: 100px;
  height:45px;
  border: 1px solid #808888;
  text-align: center;
  line-height: 45px;
  border-top: 1px solid red;
  border-right: 1px solid red;
  cursor: pointer;
}
.tab ul li:first-child{
  border-left: 1px solid blue;
}
.tab ul li.active{
  background-color: orange;
}
.tab div{
  width: 500px;
  height: 300px;
  display: none;
  text-align: center;
  font-size: 30px;
  line-height: 300px;
  border:2px solid blue;
  border-top: 0px;
}
.tab div.current{
  display: block;
}
</style>

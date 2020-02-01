<template>
  <div class="tsdemo">

    <!-- 图书管理练习 -->
    <!-- <div>
      <span>
        <input type="text" v-model="fname">
        <button @click="add">添加</button>
        <button @click="del">删除</button>
        <button @click="change">替换</button>
      </span>
    </div>
    <ul>
      <li :key="index" v-for="(item,index) in list">{{item}}</li>
    </ul>-->

    <div class="tab">
      <div class="inp">
        <h1>图书管理</h1>
        <div>
          <label for="id">编号:</label>
          <input type="text" id="top-inp" v-model="id" :disabled="flag" />
          <label for="name">名称:</label>
          <input type="text" id="top-inp" v-model="name" />
          <button @click="handle">提交</button>
        </div>
      </div>
      <thead>
        <tr>
          <th>序号</th>
          <th>名称</th>
          <th>时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.id" v-for="item in books">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.date}}</td>
          <td>
            <a href @click.prevent="toEdit(item.id)">修改</a>
            <span>|</span>
            <a href @click.prevent='deleteBook(item.id)'>删除</a>
          </td>
        </tr>
      </tbody>
    </div>
  </div>
</template>

<script>
export default {
  name: "default",
  data() {
    return {
      // list:["apple","pear","orange"],
      // fname:""
      flag: false,
      id: "序号",
      name: "名称",
      books: [
        {
          id: 1,
          name: "三国演义",
          date: ""
        },
        {
          id: 2,
          name: "水浒传",
          date: ""
        },
        {
          id: 3,
          name: "红楼梦",
          date: ""
        },
        {
          id: 4,
          name: "西游记",
          date: ""
        }
      ]
    };
  },
  methods: {
    // 1.
    // add:function(){
    //   this.list.push(this.fname);
    // },
    // del:function(){
    //   this.list.pop();
    // },
    // change:function(){
    //   this.list =this.list.slice(0,2)
    // }
    handle: function() {
      if (this.flag) {
        // 编辑
        // 根据当前的id更新数组中的数据
        this.books.some((item)=>{
          if(item.id==this.id){
            item.name=this.name;
            // 完成更新操作之后，需终止循环
           return true;
          }
        });
        this.flag = false;
      } else {
        // 添加
        // 添加图书
        var book = {};
        book.id = this.id;
        book.name = this.name;
        book.date = "";
        this.books.push(book);
        // 清空表单
        this.id = "";
        this.name = "";
      }
      this.id='';
      this.name='';

    },
    toEdit: function(id) {
      // 禁止修改id
      this.flag = true;
      // console.log(id);
      // 根据ID查询出要编辑的数据
      var book = this.books.filter(function(item) {
        return item.id == id;
      });
      console.log(book);
      // 把获取到的信息填充到表单
      this.id = book[0].id;
      this.name = book[0].name;
    },
    deleteBook:function(id){
      // 删除图书
      // 第一种方法
      // 步骤：1.从id数组中查找元素索引
      // var index=this.books.findIndex(function(item){
      //   return item.id ==id;
      // });
      // console.log(index);
      // // 2.根据索引删除数组元素
      // this.books.splice(index,1);
      // -----------------------------
      // 第二种方法
      this.books=this.books.filter(function(item){
        return item.id != id;
      })

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tsdemo {
  width: 100%;
  height: 100%;
}
.inp {
  width: 600px;
  height: 80px;
  border: 1px solid red;
  background: aquamarine;
}

#top-inp {
  margin: 5px;
}

.tab {
  width: 600px;
  height: 400px;
  border: 1px solid red;
}
div thead > tr > th {
  border: 1px solid black;
  width: 100px;
  height: 40px;
  background-color: aquamarine;
}
div tbody > tr > td {
  width: 100px;
  height: 40px;
  border: 1px solid black;
  text-align: center;
  vertical-align: center;
}
</style>

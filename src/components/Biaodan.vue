<template>
  <div class="biaodan">
     <!-- 表单练习 -->
     <form action="http://www.baidu.com">
       <!--姓名 -->
       <div class="name-main">
         <span>姓名:</span>
         <input type="text" v-model="uname">
       </div>
       <!-- 性别 -->
       <div class="sex-main lef">
         <span>性别:</span>
         <input type="radio" id="male" value="1" v-model="gender">
         <label for="male" class="male">男</label>
         <input type="radio" name="" id="female" value="2" v-model="gender">
         <label for="female">女</label>
       </div>
       <!-- 爱好 -->
       <div class="like-main">
         <span>爱好:</span>
         <input type="checkbox" id="ball" value="1" v-model="hobby">
         <label for="ball">篮球</label>
         <input type="checkbox" id="sing" value="2" v-model="hobby">
         <label for="sing">唱歌</label>
         <input type="checkbox" id="code" value="3" v-model="hobby">
         <label for="code">代码</label>
       </div>
       <!-- 职业 -->
       <div class="profession-main">
         <span>职业:</span>
         <select v-model="profession" multiple="true">
           <option value="0">请选择职业</option>
           <option value="1">教师</option>
           <option value="2">软件工程师</option>
           <option value="3">律师</option>
         </select>
       </div>
       <div class="resume-main">
         <span>个人简历:</span>
         <textarea v-model="desc"></textarea>
       </div>
       <div>
         <input type="submit" name="" id="" @click.prevent="handle">
       </div>
     </form>
  </div>
</template>

<script>
export default {
  name: 'biaodan',
  data () {
    return {
      uname:"请输入",
      gender:1,
      hobby:["2","3"],
      profession:["2"],
      desc:"nihao"
    }
  },
  methods:{
    handle:function(){
      // console.log(this.uname)
      // console.log(this.gender)
      // console.log(this.hobby.toString())
      console.log(this.profession)

    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.biaodan{
  width: 100%;
  height: 100%;
}
form{
  width: 40%;
  height: 40%;
  text-align: left
}
form div{
 height: 40px;
 line-height: 40px;
 margin-left: 10px;
}
form div:nth-child(4){
  height: auto;
}
form div span:first-child{
  display: inline-block;
  width: 100px;
}

</style>

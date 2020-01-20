const Mock = require("mockjs");//获取mockjs的插件
//获取mock.Random对象
const Random = Mock.Random;
// 造新闻列表数据
//定义生成的数据的规则
const produceNewData = function(){
    let articles = [];
    for ( let i =0;i<100;i++){
        let newArticleobject ={
            title:Random.csentence(5,30),// Random.csentence( min, max )
            thumbnail_pic_s:Random.dataImage("300*250","mock的图片"),
            author_name:Random.cname(),//随机生成一个常见的中文姓名
            date:Random.date()+ '' + Random.time() 
        }
    articles.push(newArticleobject)
    }
    return{
        articles:articles
    }
};
//生成100个用户登入信息
const produceUserInfo=function(){
    let Users=[];
    let type=['游客','会员','管理员'];
    for(let i=0;i<100;i++){
     let obj=Mock.mock({
      userId:i+1,
      userName:Random.cname(),
      userEmail:Random.email(),
      'userType|+1':type
     })
     Users.push(obj);
    }
  };
   
  //生成一篇文章详情
  const articleDetail=function(){
   let obj={};
   obj.author_name=Random.cname();
   obj.title=Random.csentence(5, 30);
   obj.publish_date=Random.date();
   obj.content=Random.paragraph(100);
   obj.view=Random.integer(0, 10000);
   obj.source='今日头条'
   
   return{
    data:obj
   }
   
  };
   
  //生成类型列表数据
  const getlist=function(){
   let arr=[]
   for(let i=0;i<100;i++){
     let obj={};
     obj.id=i+1;
     obj.title=Random.csentence(5, 30);
     obj.date=Random.date();
     arr.push(obj);
   }
   return {
    data:arr
   }
  };
  const adminInfo=[
   {
    name:'admin',
    password:'admin',
    email:'4399@qq.com'
   },{
    name:'test',
    password:'test',
    email:'1341313944@qq.com'
   },{
    name:'admin',
    password:'abc123',
    email:'112360@qq.com'
   },{
   
   }
]

// 定义访问数据的接口
Mock.mock("/view/aa","post",produceNewData);
Mock.mock('/view/bb',"post",produceUserInfo);
Mock.mock("/view/detail","post",articleDetail);
Mock.mock("/view/list","post",getlist);

// 用户名密码验证
Mock.mock("/view/login","post",function(req){
    let obj ={};
    if(req.body){
        let name =req.body.split("&")[0];
        let password =req.body.split("&")[1];
        adminInfo.forEach(item=>{
            if(item.name === name || item.name ===item.email){
                if(item.password === password){
                    obj.name = item.name;
                }
            }
        })
        return obj;
    }
})
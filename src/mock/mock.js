const Mock = require("mockjs");//获取mockjs的插件
//获取mock.Random对象
const Random = Mock.Random;

// mock需要给三个参数,url(与axios请求是传的url一致,我这个是本地启动的项目就直接用本地域名了)
// 请求类型: get post...其他看文档
// 数据处理函数,函数需要return数据
Mock.mock('http://localhost:8081/test/city', 'get', () => {
  let citys = []
  for (let i = 0; i < 10; i++) {
    let obj = {
      id: i+1,
      city: Random.city(),
      color: Random.color()
    }
    citys.push(obj)
  }
  return {cityList: citys}
})
// post请求,带参数,参数会在data中返回,会返回url,type,body三个参数,可以把data打印出来看看
Mock.mock('http://localhost:8081/test/cityInfo', 'post', (data) => {
  // 请求传过来的参数在body中,传回的是json字符串,需要转义一下
  const info= JSON.parse(data.body)
  return {
    img: Random.image('200x100', '#4A7BF7', info.name)
  }
})































// 造新闻列表数据
//定义生成的数据的规则
// const produceNewData = function(){
//     let articles = [];
//     for ( let i =0;i<100;i++){
//         let newArticleobject ={
//             title:Random.csentence(5,30),// Random.csentence( min, max )
//             thumbnail_pic_s:Random.dataImage("300*250","mock的图片"),
//             author_name:Random.cname(),//随机生成一个常见的中文姓名
//             date:Random.date()+ '' + Random.time() 
//         }
//     articles.push(newArticleobject)
//     }
//     return{
//         articles:articles
//     }
// };
// //生成100个用户登入信息
// const produceUserInfo=function(){
//     let Users=[];
//     let type=['游客','会员','管理员'];
//     for(let i=0;i<100;i++){
//      let obj=Mock.mock({
//       userId:i+1,
//       userName:Random.cname(),
//       userEmail:Random.email(),
//       'userType|+1':type
//      })
//      Users.push(obj);
//     }
//   };
   
//   //生成一篇文章详情
//   const articleDetail=function(){
//    let obj={};
//    obj.author_name=Random.cname();
//    obj.title=Random.csentence(5, 30);
//    obj.publish_date=Random.date();
//    obj.content=Random.paragraph(100);
//    obj.view=Random.integer(0, 10000);
//    obj.source='今日头条'
   
//    return{
//     data:obj
//    }
   
//   };
   
//   //生成类型列表数据
//   const getlist=function(){
//    let arr=[]
//    for(let i=0;i<100;i++){
//      let obj={};
//      obj.id=i+1;
//      obj.title=Random.csentence(5, 30);
//      obj.date=Random.date();
//      arr.push(obj);
//    }
//    return {
//     data:arr
//    }
//   };
//   const adminInfo=[
//    {
//     name:'admin',
//     password:'admin',
//     email:'4399@qq.com'
//    },{
//     name:'test',
//     password:'test',
//     email:'1341313944@qq.com'
//    },{
//     name:'admin',
//     password:'abc123',
//     email:'112360@qq.com'
//    },{
   
//    }
// ]

// // 定义访问数据的接口
// Mock.mock("/view/aa","post",produceNewData);
// Mock.mock('/view/bb',"post",produceUserInfo);
// Mock.mock("/view/detail","post",articleDetail);
// Mock.mock("/view/list","post",getlist);

// // 用户名密码验证
// Mock.mock("/view/login","post",function(req){
//     let obj ={};
//     if(req.body){
//         let name =req.body.split("&")[0];
//         let password =req.body.split("&")[1];
//         adminInfo.forEach(item=>{
//             if(item.name === name || item.name ===item.email){
//                 if(item.password === password){
//                     obj.name = item.name;
//                 }
//             }
//         })
//         return obj;
//     }
// })
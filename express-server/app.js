// // 服务器报错模块
// var createError = require('http-errors');
// // express是一个函数
// var express = require('express');
// // path核心模块
// var path = require('path');
// // 解决cookie的模块
// var cookieParser = require('cookie-parser');
// // 日志模块
// var logger = require('morgan');


// // index路由
// var indexRouter = require('./routes/index');
// // users路由
// var usersRouter = require('./routes/users');
// var dataRouter = require("./routes/data");

// // app监听函数
// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');


// // 使用模板 中间件 请求req和回复res之间的一个应用
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// // express.static 中间件来设置静态文件路径
// app.use("/public",express.static(path.join(__dirname, 'public')));//http://localhost:3000/public/images/qr.png
// // app.use(express.static(path.join(__dirname, 'public')));//http://localhost:3000/images/qr.png

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use("/data",dataRouter)

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   // 使用下一个插件
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// app.listen("3000",()=>{
//   console.log("服务已经启动...")
// })
// module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;

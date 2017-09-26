// 加载express模块
var express = require('express');
var path = require("path");
var favicon = require("serve-favicon");
// 生成express实例
var app = express();
// 设定express实例参数
// 设定访问端口
app.set('port',process.env.PORT || 1234);
// 视图存放目录
app.set('view', path.join(__dirname, 'view'));
// 网页模板引擎
app.set('view engine', 'swig');

app.use(favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router());

// 设定静态文件目录（比如图片/js/css地址）
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'));


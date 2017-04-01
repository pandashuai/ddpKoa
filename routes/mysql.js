var mysql = require('koa-mysql');
// 配置数据 库参数 
var db = mysql.createPool({ user: 'root', password: 'root', database: 'test_koa', host: 'localhost' });

var test = module.exports = {
    checkLogin: function (param) {
    	return db.query("select * from user where username = ? and password = ?", param);
    }
};
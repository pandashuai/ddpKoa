var router = require('koa-router')();
var mysql = require('./mysql');

router.get('/', function *(next) {
	this.local.title ='这是前台！';
    yield this.render('index', this.local);
});

router.get('/login', function*(next) {
    if (this.session.id) {
        return this.redirect('/admin');
    }
    yield this.render('login', {
        title: 'login!'
    });
}).post('/login', function*(next) {
    var name = this.request.body.username || '';
    var pwd = this.request.body.pwd || '';
    if (!name || !pwd) {
        return this.body = '账号或密码不允许为空';
    }
    var rows = [];
    try {
        rows = yield mysql.checkLogin([name, pwd]);
    } catch (err) {
        console.log(err);
        return tthis.body = '500Error!';
    }
    if (rows.length <= 0) {
        return this.body = '账号或密码错误！';
    }
    this.session.id = rows[0].id;
    return this.redirect('back');
});
router.get('/logout', function*(next) {
    delete this.session.id;
    return this.redirect('/');
});
module.exports = router;

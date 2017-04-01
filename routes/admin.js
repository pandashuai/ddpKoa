var router = require('koa-router')();

router.prefix('/admin');

router.get('*', function*(next) {
    if(!this.session.id){
      return this.redirect('/login');
    }
    yield next;
});

router.get('/', function *(next) {
  yield this.render('admin', {
     title: '这是后台！' 
   });
});

router.get('/bar', function *(next) {
	 this.response.type = 'text/html';
  this.body = '<h1>this is a admin/bar response! </h1><a href="/logout">退出</a>';
});

module.exports = router;

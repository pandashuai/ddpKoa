DROP DATABASE IF EXISTS `test_koa`;
CREATE DATABASE `test_koa`;

use test_koa;


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` char(20) DEFAULT '',
  `password` char(32) DEFAULT ''
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='用户表';

INSERT INTO `user` VALUES (1,'admin','123456');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
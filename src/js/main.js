/**
 * webpack主入口文件
 * 引入首次需要启动的相关文件
 * 初始less文件、公共服务文件、公共指令文件、配置文件
 */
require('../less/index.less');
require('../less/variable.less');
require('./app/app');
require('./app/directive/_directives');
require('./app/routers/_routers');
require('./app/services/_servicecs');
require('./app/config/config');


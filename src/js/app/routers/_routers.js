/** 
 * 所有router引入文件
*/
'use strict';
module.exports=angular.module('router',[
  /**tabs router */
  require('../../../modules/tabs/_tabsRouter'),
  /**首页 */
  require('../../../modules/home/_homeRouter'),
  /**大神跟单 */
  require('../../../modules/follow/_followRouter')
])
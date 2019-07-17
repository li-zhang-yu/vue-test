/**
 * 日期时间工具类
 *
 * @author lizhangyu
 * @Date 2019-07-15
 */

//date类型转String类型
function dateToString(date){

  var date = new Date(date).toJSON();

  var newDate=new Date(+new Date(date)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');

  return newDate;
}

//将方法暴露
export default {
  dateToString
}

/**
 *  封装操作本地localstorage本地存储的方法  模块化的文件
 */

var storage={
  set(key,value){
    localStorage.setItem(key,JSON.stringify(value));
  },
  get(key){
    return JSON.parse(localStorage.getItem(key));
  },
  remove(){
    localStorage.removeItem(key)
  }

}

export default storage;

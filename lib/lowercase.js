const helper = require('./helper');

var lowerCaseKeys = function(o){
  if (helper.isObject(o)){
    Object.keys(o).forEach(function(item){
      o[item.toLowerCase()] = helper.getValue(o,item);
      lowerCaseKeys(o[item]);
      if (item.toLowerCase() !== item) {
        delete o[item];
      }
    });
  }
};

module.exports = function(obj){
  if (!obj){
    return null;
  }
  if (helper.isObject(obj)){
    Object.keys(obj).forEach(function(item){
      obj[item.toLowerCase()] = helper.getValue(obj,item);
      lowerCaseKeys(obj[item]);
      if (item.toLowerCase() !== item) {
          delete obj[item];
      }
    });
    return obj;
  }
};

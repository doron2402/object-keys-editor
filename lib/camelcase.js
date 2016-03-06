const helper = require('./helper');

var camelCaseKeys = function(o){
  if (helper.isObject(o)){
    Object.keys(o).forEach(function(item){
      o[helper.toCamelCase(item)] = helper.getValue(o,item);
      camelCaseKeys(o[item]);
      if (helper.toCamelCase(item) !== item) {
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
      obj[helper.toCamelCase(item)] = helper.getValue(obj,item);
      camelCaseKeys(obj[item]);
      if (helper.toCamelCase(item) !== item) {
          delete obj[item];
      }
    });
    return obj;
  }
};

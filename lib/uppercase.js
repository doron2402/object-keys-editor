const helper = require('./helper.js');

var upperCaseKeys = function(o){
  if (helper.isObject(o)){
    Object.keys(o).forEach(function(item){
      o[item.toUpperCase()] = helper.getValue(o,item);
      upperCaseKeys(o[item]);
      if (item.toUpperCase() !== item){
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
      obj[item.toUpperCase()] = helper.getValue(obj,item);
      upperCaseKeys(obj[item]);
      if (item.toUpperCase() !== item){
        delete obj[item];
      }
    });
    return obj;
  }
};

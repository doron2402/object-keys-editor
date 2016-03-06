const helper = require('./helper');

var pascalCaseKeys = function(o){
  if (helper.isObject(o)){
    Object.keys(o).forEach(function(item){
      o[helper.toPascalCode(item)] = helper.getValue(o,item);
      pascalCaseKeys(o[item]);
      if (helper.toPascalCode(item) !== item){
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
      obj[helper.toPascalCode(item)] = helper.getValue(obj,item);
      pascalCaseKeys(obj[item]);
      if (helper.toPascalCode(item) !== item){
        delete obj[item];
      }
    });
    return obj;
  }
};

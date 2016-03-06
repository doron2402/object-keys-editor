var upperCaseKeys = function(o){
  if (typeof o === 'object'){
    Object.keys(o).forEach(function(item){
      o[item.toUpperCase()] = o[item];
      upperCaseKeys(o[item]);
      if (item.toUpperCase() !== item){
        delete o[item];
      }
    });
  }
}

module.exports = function(obj){
  if (!obj){
    return null;
  }

  if (typeof obj === 'object'){
    Object.keys(obj).forEach(function(item){
      obj[item.toUpperCase()] = obj[item];
      upperCaseKeys(obj[item]);
      if (item.toUpperCase() !== item){
        delete obj[item];
      }
    });
    return obj;
  }
};

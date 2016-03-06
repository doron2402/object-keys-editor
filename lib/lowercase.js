var lowerCaseKeys = function(o){
  if (typeof o === 'object'){
    Object.keys(o).forEach(function(item){
      o[item.toLowerCase()] = o[item];
      lowerCaseKeys(o[item]);
      delete o[item];
    });
  }
}

module.exports = function(obj){
  if (!obj){
    return null;
  }
  if (typeof obj === 'object'){
    Object.keys(obj).forEach(function(item){
      obj[item.toLowerCase()] = obj[item];
      lowerCaseKeys(obj[item]);
      if (item.toLowerCase() !== item) {
          delete obj[item];
      }
    });
    return obj;
  }
};

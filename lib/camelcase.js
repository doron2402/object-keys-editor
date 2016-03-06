var toCamelCase = function(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

var camelCaseKeys = function(o){
  if (typeof o === 'object'){
    Object.keys(o).forEach(function(item){
      o[toCamelCase(item)] = o[item];
      camelCaseKeys(o[item]);
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
      obj[toCamelCase(item)] = obj[item];
      camelCaseKeys(obj[item]);
      if (toCamelCase(item) !== item) {
          delete obj[item];
      }
    });
    return obj;
  }
};

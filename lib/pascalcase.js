var toPascalCode = function(str) {
  return str.replace(/\w+/g,function(w){
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  }).replace(/\s+/g, '');
}

var pascalCaseKeys = function(o){
  if (typeof o === 'object'){
    Object.keys(o).forEach(function(item){
      o[toPascalCode(item)] = o[item];
      pascalCaseKeys(o[item]);
      if (toPascalCode(item) !== item){
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
      obj[toPascalCode(item)] = obj[item];
      pascalCaseKeys(obj[item]);
      if (toPascalCode(item) !== item){
        delete obj[item];
      }
    });
    return obj;
  }
};

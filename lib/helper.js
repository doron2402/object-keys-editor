module.exports = {
  isObject: (obj) => {
    if (obj !== null && typeof obj === 'object'){
      return true;
    }
    return false;
  },
  toCamelCase: (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
  },
  toPascalCode: (str) => {
    return str.replace(/\w+/g,(w) => {
      return w[0].toUpperCase() + w.slice(1).toLowerCase();
    }).replace(/\s+/g, '');
  },
  getValue: (o, item) => o[item] === undefined ? null : o[item]
};

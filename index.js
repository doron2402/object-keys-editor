'use strict';

const modeOptions = ['lowercase','camelcase', 'pascalcase', 'uppercase'];
module.exports = function objectKeys(options){
  var mode = modeOptions[0];
  if (options.mode && modeOptions.indexOf(options.mode) !== -1){
    mode = options.mode;
  }

  return require(`./lib/${mode}`);
};

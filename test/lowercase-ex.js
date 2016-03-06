const expect = require('chai').expect;
const objectKeys = require('../index');

describe('Object Keys Editor', function(){
  describe('When Need to lowercase all the keys', function(){
    var tmpObj = {};
    var newObj = {};
    before(function(){
      tmpObj = {
        UserName: 'Doron',
        passWord: '****',
        Name: {
          First: 'Doron'
        },
        alreadylowercase: true,
        someOtherVal: null,
        undefinedValue: undefined
      };
      newObj = objectKeys({mode: 'lowercase'})(tmpObj);
    });
    it('Should lowercase all the keys', function(){
      expect(newObj).to.have.property('password').and.equal('****');
      expect(newObj).to.have.property('username').and.equal('Doron');
    });
    it('Should lowercase nested keys', function(){
      expect(newObj).to.have.deep.property('name.first', 'Doron');
    });
    it('Should not delete when already lowercase', function(){
      expect(newObj).to.have.deep.property('alreadylowercase', true);
    });
    it('Should handle null value', function(){
      expect(newObj.someOtherVal).to.be.an('undefined');
    });
    it('Should handle undefined values', function(){
      expect(newObj.undefinedValue).to.be.an('undefined');
    });
  });
});

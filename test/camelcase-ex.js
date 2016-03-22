const expect = require('chai').expect;
const objectKeys = require('../index');

describe('Object Keys Editor', function(){
  describe('When Need to camelCase all keys', function(){
    var tmpObj = {};
    var newObj = {};
    before(function(){
      tmpObj = {
        UserName: 'Doron',
        PassWord: '****',
        Name: {
          'mid name': 'Middle name',
          FirstName: 'Doron'
        },
        whenAlreadyCamel: true,
        IsActiveUser: false,
      };
      newObj = objectKeys({mode: 'camelcase'})(tmpObj);
    });
    it('Should camelcase all the keys', function(){
      expect(newObj).to.have.property('passWord').and.equal('****');
      expect(newObj).to.have.property('userName').and.equal('Doron');
    });
    it('Should camelcase nested keys', function(){
      expect(newObj).to.have.deep.property('name.firstName', 'Doron');
      expect(newObj).to.have.deep.property('name.midName', 'Middle name');
    });
    it('When already camel case it should not delete the key', function(){
      expect(newObj).to.have.deep.property('whenAlreadyCamel', true);
    });
    it('Should handle a false boolean value', function() {
      expect(newObj).to.have.property('isActiveUser', false);
    });
  });
});

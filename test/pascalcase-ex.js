const expect = require('chai').expect;
const objectKeys = require('../index');

describe('Object Keys Editor', function(){
  describe('When Need to pascal case all keys', function(){
    var tmpObj = {};
    var newObj = {};
    before(function(){
      tmpObj = {
        username: 'Doron',
        passWord: '****',
        Name: {
          'mid name': 'Middle name',
          first: 'Doron'
        },
        Alreadyascalcase: true
      };
      newObj = objectKeys({mode: 'pascalcase'})(tmpObj);
    });
    it('Should pascal case all the keys', function(){
      expect(newObj).to.have.property('Password').and.equal('****');
      expect(newObj).to.have.property('Username').and.equal('Doron');
    });
    it('Should pascal case nested keys', function(){
      expect(newObj).to.have.deep.property('Name.First', 'Doron');
      expect(newObj).to.have.deep.property('Name.MidName', 'Middle name');
    });
    it('Should not delete the key when already Pascal case', function(){
      expect(newObj).to.have.property('Alreadyascalcase').and.equal(true);
    });
  });
});

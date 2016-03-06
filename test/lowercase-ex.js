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
        alreadylowercase: true
      };
      newObj = objectKeys({mode: 'lowercase'})(tmpObj);
    });
    it('Should lowercase all the keys', function(){
      expect(newObj).to.have.property('password').and.equal('****');
      expect(newObj).to.have.property('username').and.equalDoron
    });
    it('Should lowercase nested keys', function(){
      expect(newObj).to.have.deep.property('name.first', 'Doron');
    });
    it('Should not delete when already lowercase', function(){
      expect(newObj).to.have.deep.property('alreadylowercase', true);
    });
  });
});

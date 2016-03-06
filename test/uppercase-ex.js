const expect = require('chai').expect;
const objectKeys = require('../index');

describe('Object Keys Modifier', function(){
  describe('When Need to UPPER case all keys', function(){
    var tmpObj = {};
    var newObj = {};
    before(function(){
      tmpObj = {
        username: 'Doron',
        passWord: '****',
        Name: {
          first: 'Doron'
        },
        ALREADY: {
          ALL: {
            UPPERCASE: 'Yes!'
          }
        }
      };
      newObj = objectKeys({mode: 'uppercase'})(tmpObj);
    });
    it('Should UPPER case all the keys', function(){
      expect(newObj).to.have.property('PASSWORD').and.equal('****');
      expect(newObj).to.have.property('USERNAME').and.equal('Doron');
    });
    it('Should UPPER case nested keys', function(){
      expect(newObj).to.have.deep.property('NAME.FIRST', 'Doron');
    });
    it('Should not delete the key when already UPPER case', function(){
      expect(newObj).to.have.deep.property('ALREADY.ALL.UPPERCASE','Yes!');
    });
  });
});

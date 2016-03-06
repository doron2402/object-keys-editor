# object-keys-modifier

Version: 1.0.0

## How to use quick guide
```
npm i --save object-keys-modifier
```
```javascript
const objectKeys = require('');
var newObj = objectKeys({mode: 'pascalcase'})({
    name: 'some name'
});
// newObj = { Name: 'some name' }
```


## Example for pascal case
from this:
```javascript
{
  name: 'some name',
  userName: 'doron'
}
// TO
{
  Name: 'some name',
  Username: 'doron'
}
```

### how to use
```javascript
const objectKeys = require('');
var newObj = objectKeys({mode: 'pascalcase'})({
    name: 'some name'
});
// newObj = { Name: 'some name' }
```


## Example for camel case
from this:
```javascript
{
  Name: {
    FirstName: 'a',
    LastName: 'b'
  },
  UserName: 'doron',
  'some weird field': true
}
// TO
{
  name: {
    firstName: 'a',
    lastName: 'b'
  },
  userName: 'doron',
  someWeirdField: true
}
```
### how to use
```javascript
const objectKeys = require('');
var newObj = objectKeys({mode: 'camelcase'})({
    UserName: 'some name'
});
// newObj = { userName: 'some name' }
```


## Example for lowercase
from this:
```javascript
{
  Name: {
    FirstName: 'a',
    LastName: 'b'
  }
}
// TO
{
  name: {
    firstname: 'a',
    lastname: 'b'
  }
}
```
### how to use
```javascript
const objectKeys = require('');
var newObj = objectKeys({mode: 'lowercase'})({
    UserName: 'some name'
});
// newObj = { username: 'some name' }
```

## Question & PR's
- Write test
- Follow same coding style
- rebase to single commit
- Think about performance
- Ping on twitter so I'll merge your code [@segaldoron](https://twitter.com/segaldoron)

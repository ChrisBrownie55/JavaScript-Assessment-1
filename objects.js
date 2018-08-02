//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
  name: 'Jake Overall',
  age: 29,
  'hair color': 'brown'
};

me.name = 'Chris Brown';
me.age = 18;
me['hair color'] = 'dirty blonde';

//2. Iterate over the object to console.log the propery or key names.
Object.keys(me).forEach(key => console.log(`${key}:\t${me[key]}`));

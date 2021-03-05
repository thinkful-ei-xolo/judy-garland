let sayHi= require('./greetings');  //importing the sayHello function from our greetings.js file
let {add, subtract} = require('./calculator');
let sayGoodbye = require('./otherfolder/otherfile');
sayHi("bob"); //executing the imported function


add(6,4);
subtract(10,2);
/*
calc.add(6,4);
calc.subtract(7,3);
calc.divide(10,3);
calc.multiply(7,22);
*/
//What will this log?
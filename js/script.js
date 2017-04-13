/*
var
function
return
this
new

location ??
name ??
*/

// .length method
// console.log("anystring".length);

// var str = "anotherStringThisOneVeryLong";
// console.log(str.length);

// .charAt()
// console.log(str.charAt());
// console.log(str.charAt(8));
// console.log(str.charAt(250));

// .indexOf()
// console.log(str.indexOf('t'));
// console.log(str.indexOf('T'));

// .concat()
// var hello = 'hello';
// console.log(hello.concat(' Javascript'));

// .substring()
// var myName = 'Chris';
// console.log(myName.substring(0, 3));
// console.log(myName.substring(3, 6));
// console.log(myName.substring(3));

// .substring
// var myHome = 'FresnoYeah'
// console.log(myHome.substr(0, 3));
// console.log(myHome.substr(3, 2));
// console.log(myHome.substr(3));

// console.log(myHome.substring(6, 3));
// console.log(myHome.substring(3, 6));

// .toLowerCase()
// var myDog = 'Allie';
// console.log(myDog.toLowerCase());

// .toUpperCase()
// myDog = 'Callie';
// console.log(myDog.toUpperCase());

// .trim()
// var extraSpaces = '          stuff    and    things      ';
// console.log(extraSpaces);
// console.log(extraSpaces.trim());

// Number Methods
//Number.isInteger()
// console.log(Number.isInteger(5));
// console.log(Number.isInteger(5.5));
// console.log(Number.isInteger(NaN));

// Number.parsefloat()
// console.log(Number.parseFloat('5.2'));
// console.log(Number.parseFloat('365.1 degrees'));
// console.log(Number.parseFloat('Lex Murphy is 11'));

// Number.parseInt()
// console.log(Number.parseInt(89));
// console.log(Number.parseInt('words words'));
// console.log(Number.parseInt('word'));

// var userNum = parseInt(prompt('pick a number'));
// console.log(typeof userNum);

// Number.isNaN()
// console.log(Number.isNaN(5));
// console.log(Number.isNaN('chris'));
// console.log(isNaN('chris'));
// console.log(Number.isNaN(NaN));
// console.log(isNaN(NaN));

//coersion ??

// var userNum = parseInt(prompt('pick a number'));
// console.log(Number.isNaN (userNum));

//Date Object
// var newDate = new Date();
// console.log(newDate);

// getDate()
// console.log(newDate.getDate());

//getFullYear()
// console.log(newDate.getFullYear());

//getDay() // day of the week
// console.log(newDate.getDay());

//getMonth() //month of year !!zero based!!
// console.log(newDate.getMonth());

// if(newDate.getDay() == 3){
  // console.log('April');
// }

// var fullMonth = newDate.toLocaleString('en-us', {month: 'long'});
// var numDate = newDate.toLocaleString('en-us', {day: '2-digit'});
// var fullYear = newDate.getFullYear();
// console.log(fullMonth + ' ' + numDate + ', ' + fullYear);

// Math Object
  /*
  += adding
  -= subtraction
  *= multiplication
  /= division
  %= modulus
  ++ = Incrementor
  -- = Decrementor
*/
// var x = 5;
// console.log(x);

// x++;
// console.log(x);
// x++;
// console.log(x);

var rand = Math.random();

 // 0-1
console.log(rand);

var roundUp = Math.ceil(8.3);
console.log(roundUp);

var roundDown = Math.floor(9.9);
console.log(roundDown);

var roundNum = Math.round(4.5);
console.log(roundNum);

var randNum = Math.floor(Math.random()*101)+1;
console.log(randNum);
prompt('What is your first name?');
prompt('What is your last name?');




// max(), min()
//pow(x, y)
// sqrt(x)

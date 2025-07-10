greeting();
//here we can call the function before decalaring it,in order to any order
//this feature is known as hoisting
//hoisting is only applicable to normal function declaring like below not using like with variable
function greeting() {
  console.log(`Hello!0`);
}
//function can also be used and stored as values;
let var1 = function greeting() {
  console.log(`Hello!`);
};
console.log(var1);
console.log(typeof var1);
//we can conclude that function is also a type of value
var1();
//here we can call the function using variable name itself
//there is no need of giving another name of a function
var1 = function () {
  console.log(`Hello!2`);
};
var1();
//the above function without name is known as anonymous function
/*
we can implement functions in objects also
*/
const obj1 = {
  time: "night",
  fun: function () {
    console.log(`Hello! 3`);
  },
  //can declare with function name or else like anonymous function
};
obj1.fun();
//we can declare like below
/*
we can pass a function as parameter into another function
*/
function funct_check(param) {
  param();
}
funct_check(function () {
  console.log(`Hello 4`);
  //this function declaration at here is known as CallBack
});
//set_time_out is a function that will run the function in future as per our need
setTimeout(function () {
  console.log(`Hello 5`);
  console.log(`Hello 6`);
  //here this hello 6 code has to wait for hello 5 code to run
  //this type of code is known as synchronous code
}, 5000);
//here the time has to be denoted with milli seconds
//1 second=1000 millisecond
console.log(`next line`);
//as the above line coded next to the setTimeOut function the compiler will not wait to finish that time
//it wll automatically comes and reads the next line
//This type of code is known as Asynchronous code
setInterval(function () {
  console.log(`Hello 7`);
}, 5000);
/*
here the set_interval function runs the function repeatedly after the given milliseconds interval of time
*/
console.log(`next line 2`);
//set_interval is also an asynchronous code
/*
another method to loop an array using function is given below
*/
["write maths", "read english", "live life"].forEach(function (value) {
  console.log(value);
  if (value === "live life") console.log(`found`);
});
//here the parameter in the forEach function will traverse each element in an array
//here the parameter value will save every array element inside the variable value,and do its functions
["write maths", "read english", "live life"].forEach(function (value, index) {
  if (value === "read english") return;
  //return function works almost same like continue
  //this will skip this and move into next function
  console.log(index);
  console.log(value);
  if (value === "live life") console.log(`found`);
});
//the second parameter denotes the index number of the array
//Normal Function
const normal_fun = function () {
  console.log("Hello Using Normal Function");
  return 5;
};
normal_fun();
const check1 = normal_fun();
console.log(check1);
//Here below is Arrow Function it is an Easier way to write Function
const arr_fun = () => {
  console.log("Hello using Arrow Function!");
};
arr_fun();
const arr_fun2 = (Lover) => {
  console.log(`Love you ${Lover}`);
};
arr_fun2("Harini");
//more shorter way like below
//we can return the value in a function using without return keyword
const arr_func3 = () => 3 + 3;
console.log(arr_func3());
//we can apply arrow function usage in For Each Function
["Love", "Like", "Life"].forEach((value) => {
  if (value === "Life") console.log("found");
});

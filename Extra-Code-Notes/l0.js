//JS has 3 datatypes 1.Number 2.String 3.Boolean
console.log(Number("ksa"));
console.log(String(98219));
console.log(Boolean(0));

console.log(document.getElementById("p1").textContent);
document.getElementById("b1").onclick = function () {
  document.getElementById("p2").textContent =
    document.getElementById("t1").value;
};
// like above we can make operations with attribute getElementById

//like above we can take input from window prompt
//console.log(window.prompt("Enter something with Window Prompt"));

//Below are built-in methods in Math Library
console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(5.9));
console.log(Math.round(5.1));
console.log(Math.ceil(5.8));
console.log(Math.floor(5.8));
//trunc will remove the decimals only give the int part
console.log(Math.trunc(5.9008));
console.log(Math.pow(5, 8));
console.log(Math.sqrt(9));
console.log(Math.log(5.8));
console.log(Math.sin(1));
console.log(Math.cos(0));
console.log(Math.tan(1));
console.log(Math.abs(-5.8));
console.log(Math.sign(-58));
//if -ve means it gives -1 if +ve means it gives +1
console.log(Math.max(5, 8, 1));
console.log(Math.min(5, -8));

//below denotes for checked property
document.getElementById("b2").onclick = function () {
  if (
    document.getElementById("rb").checked ||
    document.getElementById("rb2").checked
  ) {
    document.getElementById("p3").textContent = "radio button clicked";
  } else {
    document.getElementById("p3").textContent = "radio button NOT Clicked";
  }
};

//below is switch case syntax in JS
//switch is a replacement for multiple if-else statments
let a = 2;
switch (a) {
  case 1:
    console.log("Its One");
    break;
  //use break statement to conclude every condition statement
  case 2:
    console.log("Its Two");
    break;
  default:
    console.log("No Number it Is");
    break;
}
//by using True in switch-case in JS
let marks = 95;
let grade;
switch (true) {
  case marks >= 90:
    grade = "A";
    break;
  case marks < 90:
    grade = "less than A";
    break;
}
console.log(grade);

//String Methods are described below
let b = "Shri Harini  ";
//string indexing can be done like below and also with method named charAt
console.log(b[2]);
console.log(b.charAt(2));
//gives first occurence of character its index
console.log(b.indexOf("i"));
//below gives last index of that character in that string
console.log(b.lastIndexOf("i"));
console.log(b.length);
console.log(b.trim());
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.repeat(5));
console.log(b.startsWith(" "));
console.log(b.endsWith(" "));
console.log(b.replaceAll(" ", "*"));
//in both padStart and padEnd first argument will be the max length of string characters
//remaining spaces will be filled with 2nd argument depends on start and end
console.log(b.padStart(20, "/"));
console.log(b.padEnd(10, "-"));
//splits the array with user defined character
console.log(b.split(" "));

//string slicing (start,end) with only 2 argument with only one argument it is defaultly considerred as start argument
console.log(b.slice(5, 12));
console.log(b.slice(7));
//negative indexing is also possible like below
console.log(b.slice(-4));

//Method Chaining - combing multiple methods can be done like below
console.log(b.trim().toUpperCase().repeat(3));

// == value equality operator
// == (double equal to) is only checks the values and also it converts both into string datatypes
console.log("3.96" == 3.91);
console.log("3.96" == 3.96);
//while using triple equal to it gives false because both are different datatypes
console.log("3.96" === 3.96);

//let and var
// by using let we can't define variables with same names but using var it is possible
// let is block scoped cannot be used outside function but var can be possible with above
function f1() {
  let d = 2;
}
//console.log(e);
function f2() {
  let e = 2;
}
//console.log(d);
let d1 = 1;
//let d1=2
//above will show scope error due to let
//f1();
//f2();
function f3() {
  var f = 2;
}
function f4() {
  var g = 2;
}
var d2 = 2;
var d2 = 2;
//console.log(f);
f3();

//spread operators (...)
//spread operators will spread and split the each characters in the string
let name = "Harini";
console.log([...name].join("-"));
//spreading with arrays
let arr1 = ["love", "lover", "lovers"];
let arr2 = ["2love", "2lover", "2lovers"];
console.log(...arr1);
//spreading 2 strings like combining
console.log(...arr1, ...arr2);

//array methods
arr1.push("Harini");
//push adds at last
arr1.unshift("Shri");
//adds at first

arr1.pop();
//removes last

arr1.shift();
//removes first

arr1.sort().reverse();
console.log(arr1);

//of will access every element in the array
for (let i of arr1) {
  console.log(i);
}

//rest parameter will be explained below
function rest_func(...res) {
  return res;
}
//above is rest paramters which bundles arguments into array and returns it
console.log(rest_func("love", "loverp", "koll"));

//callback means passing function into another function

//all below works like the above callback method by applying the callback function to every element

//below are different types of function attributes
arr1.forEach(function (element, index, array) {
  array[index] = Boolean(Element);
});
//above foreach will apply the function into each element in the array
console.log(arr1);
arr1.forEach(function (element, index, array) {
  array[index] = 9;
});
console.log(arr1);

//below map function will apply function to every element and returns a new array
console.log(
  arr1.map(function (element) {
    return Boolean(element);
  })
);

arr1 = [9, 8, 7];
//it returns an array by filtering the only required elements
console.log(
  arr1.filter(function (element, index) {
    return element % 2 !== 0;
  })
);

//reduce function will reduce into one value
console.log(
  arr1.reduce(function (accumulator, element) {
    return accumulator + element;
    //after everytime access of element in the array accumulator will get updated each time by accumulator will get modified as returned element after every element access
    //here accumulator gets added after every time adding the element
  })
);
console.log(
  arr1.reduce(function (x, y) {
    return Math.min(x, y);
  })
);

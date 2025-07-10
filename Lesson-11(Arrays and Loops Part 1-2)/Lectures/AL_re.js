const arr1 = [1, 2, 3];
let arr2 = arr1;
//here refernce of the arr2 is equal to arr1
arr2.push(4);
console.log(arr1);
console.log(arr2);
/*
here we have pushed and changed only the value of arr2 but arr1 also changed
because arrays are references
so the 1st array stores the reference of the arr2
so rather than copying array values it stores the refernce the arr2
*/
arr2 = arr1.slice();
//here to remove the above problem we can use this slice function to make copy of the array values
arr2.push(5);
console.log(arr1);
console.log(arr2);
const [firstvalue, secondvalue] = [1, 2, 3];
//these 2 variables in bracket of this array will store the values of first 2 array index values
console.log(firstvalue);
console.log(secondvalue);
for (let i = 0; i <= 10; i++) {
  if (i === 3) {
    continue;
  }
  //continue statement just skips one iteration(one run of the loop)
  //here it will only skip the i===3 loop and starts run to i=4 loop and then....
  console.log(i);
  if (i === 8) break;
  //break statement used to exit the loop early(exits from entire loop)
}
for (let i = 0; i <= 10; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
//using above with while loop
let i = 0;
while (i <= 10) {
  if (i % 3 === 0) {
    i++;
    //here we have to give the increement step otherwise it will become an infinite loop runs with same value
    continue;
  }
  console.log(i);
  i++;
}
//using functions in loops

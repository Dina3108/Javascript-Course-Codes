function arr_check(arr, search_element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search_element) {
      console.log(i);
      break;
    }
    if (i === arr.length - 1 && arr[i] !== search_element) {
      console.log(-1);
    }
  }
}
let arr1 = ["hello", "world", "search", "good"];
arr_check(arr1, "search");
arr1 = ["not", "found"];
arr_check(arr1, "search");
arr1 = ["hello", "world", "search", "good", "search"];
arr_check(arr1, "search");
function arr_word_check(arr, word) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      console.log(i);
      break;
    }
    if (i === arr.length - 1 && arr[i] !== word) {
      console.log(-1);
    }
  }
}
arr1 = ["green", "red", "blue", "red"];
arr_word_check(arr1, "red");
arr_word_check(arr1, "yellow");
let food = [];
function removeEgg(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "egg") continue;
    else food.push(arr[i]);
  }
  return food;
}
let var3 = removeEgg(["egg", "apple", "egg", "egg", "ham"]);
console.log(var3);
function removeEgg_2(arr) {
  let egg = 0;
  food = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "egg") {
      egg++;
    }
    if (arr[i] === "egg" && egg < 3) continue;
    else {
      food.push(arr[i]);
    }
  }
  return food;
}
var3 = removeEgg_2(["egg", "apple", "egg", "egg", "ham"]);
console.log(var3);
//when reverse array as input
let arr4 = ["egg", "apple", "egg", "egg", "ham"];
let arr5 = arr4.reverse();
console.log(arr5);
let var4 = removeEgg_2(arr5);
console.log(var4);
//removing last 2 eggs from the array
function remove_last_egg(arr) {
  let egg = 0;
  food = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "egg") {
      egg++;
    }
    if (arr[i] === "egg" && egg === 1) {
      food.push(arr[i]);
    } else if (arr[i] === "egg" && egg < 4) continue;
    else {
      food.push(arr[i]);
    }
  }
  return food;
}
let arr6 = ["egg", "apple", "egg", "egg", "ham"];
let var5 = remove_last_egg(arr6);
console.log(var5);
function remove_last_egg_reverse(arr) {
  let egg = 0;
  food = [];
  let arr2 = arr.slice();
  console.log(arr);
  let arr_rev = arr2.reverse();
  for (let i = 0; i < arr_rev.length; i++) {
    if (arr_rev[i] === "egg") {
      egg++;
    }
    if (arr_rev[i] === "egg" && egg === 1) {
      food.push(arr_rev[i]);
    } else if (arr_rev[i] === "egg" && egg < 4) continue;
    else {
      food.push(arr_rev[i]);
    }
  }
  return food;
}
let var6 = remove_last_egg_reverse(["egg", "apple", "egg", "egg", "ham"]);
console.log(var6);
//FizzBuzz problem
for (let i = 1; i < 21; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log(`FizzBuzz`);
  else if (i % 3 === 0) console.log(`Fizz`);
  else if (i % 5 === 0) console.log(`Buzz`);
  else console.log(i);
}
function arr_word_check(arr, word) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      console.log(i);
      break;
    }
    if (i === arr.length - 1 && arr[i] !== word) {
      console.log(-1);
    }
  }
}
arr1 = ["green", "red", "blue", "red"];
arr_word_check(arr1, "red");
arr_word_check(arr1, "yellow");
function unique(arr) {}
let var8 = unique(["red", "green", "red", "green"]);
console.log(var8);
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
// Example usage:
const strings = ["apple", "banana", "apple", "orange", "banana", "grape"];
const uniqueStrings = removeDuplicates(strings);
console.log(uniqueStrings);

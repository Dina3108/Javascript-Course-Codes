const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);
function lastValueArray(arr) {
  return arr[arr.length - 1];
}
const arr1 = [1, 20, 22, 24, 5];
const arr2 = ["hi", "hello", "good"];
let var1 = lastValueArray(arr1);
console.log(var1);
var1 = lastValueArray(arr2);
console.log(var1);
function arraySwap(arr) {
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr;
}
var1 = arraySwap(arr1);
console.log(var1);
var1 = arraySwap(arr2);
console.log(var1);
let count = 0;
for (let i = 0; i < 11; i += 2) {
  count++;
}
console.log(count);
count = 0;
for (let i = 5; i >= 0; i--) {
  count++;
}
console.log(count);
count = 0;
let i = 0;
while (i < 11) {
  i += 2;
  count++;
}
console.log(count);
count = 0;
i = 5;
do {
  count++;
  i--;
} while (i >= 0);
console.log(count);
let arr3 = [1, 2, 3];
function addOne(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i]++;
  }
  return arr;
}
let var3 = addOne(arr3);
console.log(var3);
let arr4 = [-2, -1, 0, 99];
var3 = addOne(arr4);
console.log(var3);
function addNum(arr, num) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + num;
  }
  return arr;
}
arr3 = [1, 2, 3];
var3 = addNum(arr3, 2);
console.log(var3);
arr3 = [1, 2, 3];
var3 = addNum(arr3, 3);
console.log(var3);
arr4 = [-2, -1, 0, 99];
var3 = addNum(arr4, 2);
console.log(var3);
function addArrays(arr1, arr2) {
  arr1[0] += arr2[0];
  arr1[1] += arr2[1];
  arr1[2] += arr2[2];
  return arr1;
}
let arr6 = [1, 1, 2];
let arr7 = [1, 1, 3];
var3 = addArrays(arr6, arr7);
console.log(var3);
let arr8 = [];
function addArrays2(arr1, arr2) {
  for (let l = 0; l < arr1.length; l++) {
    arr8[l] = arr1[l] + arr2[l];
  }
  return arr8;
}
arr6 = [1, 1, 2];
arr7 = [1, 1, 3];
var3 = addArrays2(arr6, arr7);
console.log(var3);
function countPositive(arr) {
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos++;
    }
  }
  return pos;
}
let arr9 = [1, 3, -5];
var3 = countPositive(arr9);
console.log(var3);
let arr10 = [-2, 3, -5, 7, 10];
var3 = countPositive(arr10);
console.log(var3);
function minMax(arr) {
  let min = (max = 0);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  if (arr.length === 0) {
    max = null;
    min = null;
  }
  let Math = {
    min: `${min}`,
    max: `${max}`,
  };
  return Math;
}
let arr11 = [1, -3, 5];
var3 = minMax(arr11);
console.log(var3);
let arr12 = [-2, 3, -5, 7, 10];
var3 = minMax(arr12);
console.log(var3);
let arr13 = [];
var3 = minMax(arr13);
console.log(var3);
function countWords(arr) {
  let str1_count = 0;
  let str2_count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[0] === arr[i]) {
      str1_count++;
    } else if (arr[1] === arr[i]) {
      str2_count++;
    }
  }
  console.log(arr[0]);
  console.log(arr[1]);
  const res_object = {
    apple: str1_count,
    grapes: str2_count,
  };
  return res_object;
}
const var12 = countWords(["apple", "grapes", "apple", "apple"]);
console.log(var12);
function countWordOccurrences(words) {
  const wordCounts = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word in wordCounts) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  }
  console.log(wordCounts);
}
const words = ["apple", "banana", "apple", "orange", "banana", "banana"];
console.log(words[1]);
const words2 = {
  apple: 0,
  banana: 1,
  orange: 2,
};
console.log(words2["orange"]);
countWordOccurrences(words);

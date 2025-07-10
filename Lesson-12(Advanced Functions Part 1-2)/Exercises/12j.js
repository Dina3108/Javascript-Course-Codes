multiply = (a, b) => {
  return a * b;
};
console.log(multiply(2, 3));
console.log(multiply(7, 10));
count_positive = (arr) => {
  let pos = 0;
  arr.forEach((value) => {
    if (value > 0) pos++;
  });
  return pos;
};
console.log(count_positive([1, -3, 5]));
console.log(count_positive([-2, 3, -5, 7, 10]));
addNum = (arr, num) =>
  arr.map((value) => {
    return value + num;
  });
/*when we use for each fucntion we have to create an array and we have to store in it
but when we use map function it will automatically store into the array we just we have to return it
*/
console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));
removeEgg = (arr) =>
  arr.filter((value) => {
    if (value === "egg") return false;
    else return true;
  });
console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));
let count = 0;
removeEgg = (arr) =>
  arr.filter((value) => {
    if (value === "egg") {
      count++;
      if (count <= 2) return false;
      else return true;
    } else return true;
  });
console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));
document.querySelector(".js-reset-button").addEventListener(
  "click",
  (conform = () => {
    let a9 = document.querySelector(".conformation-div");
    a9.innerHTML = `<p>Are you sure you want to reset the score?</p><button class="js-yes-button">Yes</button>
    <button class="js-no-button">No</button>`;
    document.querySelector(".js-yes-button").addEventListener(
      "click",
      (yes = () => {
        let a10 = document.querySelector(".another-conform-div");
        a10.innerHTML = `<p>Score is Reseted!!!</p>`;
      })
    );
    document.querySelector(".js-no-button").addEventListener(
      "click",
      (no = () => {
        let a10 = document.querySelector(".another-conform-div");
        a10.innerHTML = `<p>No reset of Score!!!</p>`;
      })
    );
  })
);

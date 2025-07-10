console.log(document.querySelector(".a-button").innerHTML);
document.querySelector(".a-button").innerHTML = "9b done!";
console.log(document.querySelector(".a-button").innerHTML);
function coinGame(choose) {
  if (choose === "heads")
    document.querySelector(".b-ans-p").innerHTML = `You choose: ${choose} `;
  else document.querySelector(".b-ans-p").innerHTML = `You choose: ${choose} `;
}
function nameFunc() {
  let d1 = document.querySelector(".d-input").value;
  let d2 = document.querySelector(".d-ans-p");
  d2.innerHTML = `Your name is:${d1}`;
}
function enter(ek) {
  if (ek === "Enter") {
    nameFunc();
  }
}
let sum = " ";
function typing(ek2) {
  sum += ek2;
  let h1 = document.querySelector(".h-p");
  h1.innerHTML = sum;
}

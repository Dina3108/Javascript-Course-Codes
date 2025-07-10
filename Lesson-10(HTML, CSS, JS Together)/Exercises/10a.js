let value = document.querySelector(".js-button");
let v2 = value.classList.contains("js-button");
let v3 = value.classList.contains("js-button1");
console.log(v2); //as the ;ist contains that variable it shows result in the console as true
console.log(v3); //as the list doesnot contains it shows result as false

let v4 = document.querySelector(".d-button");
let v5 = v4.classList.contains("d-button");

function vd() {
  if (v5) {
    v4.classList.add("d2-button");
    v5 = 0;
  } else {
    v4.classList.remove("d2-button");
    v5 = v4.classList.contains("d-button");
  }
}
let v6 = document.querySelector(".d3-button");
let v7 = v6.classList.contains("d3-button");

function vd2() {
  if (v7) {
    v6.classList.add("d2-button");
    v7 = 0;
  } else {
    v6.classList.remove("d2-button");
    v7 = v6.classList.contains("d3-button");
  }
}

let v8 = document.querySelector(".d4-button");
let v9 = v8.classList.contains("d4-button");

function vd3() {
  if (v9) {
    v8.classList.add("d2-button");
    v9 = 0;
  } else {
    v8.classList.remove("d2-button");
    v9 = v8.classList.contains("d4-button");
  }
}

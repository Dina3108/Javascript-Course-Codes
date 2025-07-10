console.log(document.querySelector(".a-button"));
console.log((document.querySelector(".b-button").innerHTML = "9b Done!"));
function func1(select) {
  document.querySelector(".b-js").innerHTML = `You chose: ${select}`;
}
function input(value) {
  value = document.querySelector(".d-input").value;
  document.querySelector(".d-p").innerHTML = `Your name is: ${value}`;
}
function key(event) {
  let value = document.querySelector(".d-input").value;
  if (event.key === "Enter") {
    input(value);
  }
}
function costkeydown(event) {
  if (event.key === "Enter") Calculation();
}
function Calculation() {
  const innerElement = document.querySelector(".cost-input");
  let cost = Number(innerElement.value);
  //value got from the input is usaully be as string
  //so we have it into number using number function
  //for accessing input search-box dont use innerHTML use value
  if (cost <= 40) {
    cost = (cost * 100 + 1000) / 100;
    console.log(cost);
  }
  document.querySelector(".cost-result").innerHTML = cost;
}
function typing(event) {
  console.log(event.key);
  document.querySelector(".h-p").innerHTML += event.key;
  if (event.key === "Enter") document.querySelector(".h-p").innerHTML = " ";
}

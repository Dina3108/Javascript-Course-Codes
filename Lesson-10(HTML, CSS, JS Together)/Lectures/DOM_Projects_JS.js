String(25);
console.log("25" - 5);
//here while doing calculations JS will automatically convert numberString into number while Calculation
console.log("25" + 5);
//but while doing addition it will add as string
window.document;
window.console.log("window");
window.alert("hii");
/*
window is an another built-in object that describes the entire browser window
for every code writing infornt of document.body.... ,console.log , alert for all functions we have to put window infront of all code
but JS automatically adds window

*/

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
    cost += 10;
    console.log(cost);
  }
  document.querySelector(".cost-result").innerHTML = cost;
}
function Subscribe() {
  let button_Element1 = document.querySelector(".js-button1");
  if (button_Element1.innerHTML === "Subscribe") {
    button_Element1.innerHTML = "Subscribed";
    button_Element1.classList.add("js-subscribe-button");
    //syntax for adding button for onclick version of the button
  } else {
    button_Element1.innerHTML = "Subscribe";
    button_Element1.classList.remove("js-subscribe-button");
    //syntax for removing button for onclick of the button when we reclick the button
    //it transforms to original style
  }
}

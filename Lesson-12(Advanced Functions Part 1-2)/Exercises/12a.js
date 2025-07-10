const add = function () {
  console.log(2 + 3);
};
console.log(add);
add();
function runTwice(fun) {
  fun();
  fun();
}
runTwice(() => {
  console.log(`12b`);
});
runTwice(add);
//here there we don't need the input with parameter parthesis
//because inside that runTwice there is already a parameter
function button() {
  document.querySelector(".start-button").innerHTML = "Finished!";
}
function Time_out() {
  setTimeout(() => button(), 5000);
}
//As it was having a scope problem,
//settimeout function does not works for the aldready created function so we have to pre define like the function like above
/*
function Time_out() {
  setTimeout(function () {
    document.querySelector(".start-button").innerHTML = "Finished!";
  }, 5000);
}
*/
function loading() {
  document.querySelector(".start2-button").innerHTML = "Loading....";
  setTimeout(function () {
    document.querySelector(".start2-button").innerHTML = "Finished!";
  }, 3000);
}
function add_cart() {
  document.querySelector(".add-cart-p").innerHTML = "Added !";
}
function title_change() {
  setTimeout(function () {
    document.title = "No Love";
  }, 2000);
  document.title = "love";
  title_change();
}
//setInterval(() => title_change(), 2000);
let messages = 2;
document.title = `(${messages}) New Messages`;
function message_app_inc() {
  messages++;
  if (messages === 0 || messages < 0) {
    document.title = "App";
    messages = 0;
  } else {
    document.title = `(${messages}) New Messages`;
  }
}
function message_app_dec() {
  messages--;
  if (messages === 0 || messages < 0) {
    document.title = "App";
    messages = 0;
  } else {
    document.title = `(${messages}) New Messages`;
  }
}

//we are creating date-time object from the instance of Date - Class
let a = new Date();
console.log(a);
//Object created from this class will give us in the order of Day-Month-Date-Year-Hour-Minute-Second-GMT-Notation which gives us at Current-time
//In case of Month denotion 0 denotes January, 1 denotes February, 2 denotes March and follows 11 - December and 12 - denotes January , 13 - February and follows
console.log(new Date(1, 2, 3, 4, 5, 6, 7));
//below by directly passing this number it  will be calculated as seconds this billion amount of seconds is converted into date and time
console.log(new Date(179109092109));

//below are Methods created from this Date Object
console.log(a.getDate());
console.log(a.getDay());
console.log(a.getFullYear());
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getMonth());
console.log(a.getSeconds());
//getTime method will give our passed time
console.log(a.getTime());

//by using below methods we can set those also
//more and more methods are there to set
a.setDate(1);
a.setFullYear(2067);
console.log(a);
//like below we can do operations with datetime objects also
console.log(new Date(218289210) === new Date(2182892100));

//closures in functions
function fun1() {
  let b3 = 90;
  function fun2() {
    //but inner function can access variables from outer function
    console.log(b3);
  }
  fun2();
}
//in below we cant access the variables defined inside a function becauseof closure problem
//console.log(b3);
fun1();

function create_game() {
  let score = 0;
  function increase_score(points) {
    score += points;
    console.log(`${points}pts`);
  }
  function decrease_score(points) {
    score -= points;
    console.log(`${points}pts`);
  }
  function get_score() {
    return score;
  }
  //below returns an object where here below in the object all are methods
  return { increase_score, decrease_score, get_score };
}
//from the above function we can create object
const game = create_game();
game.increase_score(20);
game.decrease_score(5);
console.log(game.get_score());

/*
setTimeout - function in Javascript that allows you to schedule
             the execution of a function after an amount of time (milliseconds)
             Times are approximate (varies based on the workload of the Javascript runtime of any file)
             
             syntax : setTimeout(callback,delay)
*/
function say_hello() {
  console.log("Vankkam da Mapla!!!");
}
setTimeout(say_hello, 3000);

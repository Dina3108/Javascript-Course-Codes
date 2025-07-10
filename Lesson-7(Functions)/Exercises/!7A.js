function greet(name) {
  if (!name) console.log(`Hi There!`);
  else console.log(`Hello ${name}`);
}
greet(name);
greet(`VishalP`);
greet();
let fahrenheit;
function ctF(celcius) {
  fahrenheit = celcius * (9 / 5) + 32;
  return fahrenheit;
}
let var1 = ctF(25);
console.log(var1);
let celcius;
function ctC(fahrenheit) {
  celcius = (fahrenheit - 32) * (5 / 9);
  return celcius;
}
let var2 = ctC(86);
console.log(var2);
function convertTemp(degrees, unit) {
  if (unit === "C") {
    let c1 = ctF(degrees);
    console.log(`${c1}F`);
  } else if (unit === "F") {
    let c2 = ctC(degrees);
    console.log(`${c2}C`);
  }
}
convertTemp(25, "C");
convertTemp(86, "F");

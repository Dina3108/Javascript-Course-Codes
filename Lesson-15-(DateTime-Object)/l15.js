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

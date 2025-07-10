/*
Destructing - extract values from arrays and objects
then assign them to variables in a convenient way
[] - to perform array destructing
{} - to perform object destructing
 */

//swapping the 2 values-variables using destructing
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);
//in above you can see values in the variables got swapped

//destructing using Arrays
const colors = ["red", "green", "blue", "yellow"];
[colors[0], colors[colors.length - 1]] = [colors[colors.length - 1], colors[0]];
console.log(colors);

//separating elements from Arrays using Destruction
const [first, Second, ...Remaining] = colors;
console.log(first);
console.log(Second);
console.log(Remaining);

//Extract values from objects using Destruction
const person1 = {
  First_name: "Harini",
  Last_name: "Dinakar",
  age: 20,
};
//by like below {}-object destructing object with properties name coincides with properties of object it will extract those properties of object to those variables inside the destructor
const { First_name, age, Last_name } = person1;
console.log(First_name);
console.log(age);
console.log(Last_name);

//Destruction in Function Parameters
//in below while invoking the function inside the parameters object destruction will occur
function Func_Destruct({ First_name, Last_name, age = 20 }) {
  console.log(`Name: ${First_name} ${Last_name}`);
  console.log(`${age} Years Old`);
}
Func_Destruct(person1);

const person2 = {
  First_name: "Shri Harini",
  Last_name: "Dinakar",
};
Func_Destruct(person2);

/*
Nested Objects - Objects inside of other Objects
                 Allows you to represent more complex data structures
                 Here Chils Object is enclosed in parent object
                 Ex:
                 Person(Address{},Contact_info{})
                 Shopping_Cart(Keyboard{},Mouse{},Monitor{})
*/
const person3 = {
  Name: "Shri Harini",
  age: 20,
  Work: "IT",
  Address: {
    DoorNumber: 5,
    Street: "Vinayagar Kovil Street",
    Village: "Sellapampalayam",
  },
};
//below is the syntax for accesing a child object property inside a parent object
console.log(person3.Address.Street);

//Nested objects in the case of Classes
class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    //like below inside a class constructor we are constructing a class from another classed named Address
    this.address = new Address(...address);
  }
}
class Address {
  constructor(door_no, street, place) {
    this.door_no = door_no;
    this.street = street;
    this.place = place;
  }
}
Person4 = new Person("Shri Harini", 20, 7, "Kovil Street", "Sellapampalayam");
console.log(Person4);
//like below we can access property from a nested object created from nestes class constructors
console.log(Person4.address.place);

//Array made up of Objects
const Fruits = [
  { name: "Apple", color: "Red", calories: 90 },
  { name: "Mango", color: "Yellow", calories: 70 },
  { name: "AGraphes", color: "Blue", calories: 85 },
];
Fruits.push({ name: "Orange", color: "Orange", calories: 109 });
console.log(Fruits);
//foreach method
Fruits.forEach(
  (Element) => Element.color === "Red" && Element.calories === 100
);
console.log(Fruits);
//filter method - filter will returns an element which satisfies the condition
console.log(Fruits.filter((x) => x.color === "Red"));
//map method - will returns the array which mapping our required property/method in each element
console.log(Fruits.map((x) => x.color));
//reduce method - will returns an element after applying series of conditions
console.log(
  Fruits.reduce((x, y) => (y.calories > x.calories ? x.calories : y.calories))
);

/*Sorting Methods in case of objects,array made up of objects
sort() - method used to sort elements of an array in place,
         Sorts elements as strings in lexicographic order, not alphabetical
         lexographic - (alphabets + numbers + symbols) as strings           

    Lexicographic order Sorting
    - Component-wise comparison: Compare the first element of each sequence. If they are equal, move to the next element, and so on, until a difference is found. The sequence with the smaller element at the first point of difference comes first.

    Shorter length preference: If one sequence is a prefix of another (e.g., "cat" and "cater"), the shorter sequence is considered smaller ("cat" comes before "cater").

    Character set order: The order depends on the underlying character set (e.g., ASCII, Unicode). For example, in ASCII, uppercase letters come before lowercase letters
*/
let b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(b1.sort());
//in above we can see the above which is sorted in lexicographic method
//we can solve above problem by using below function
console.log(b1.sort((a, b) => a - b));
/*
above function works like below
    b1.sort((a, b) => a - b)
    b1 is assumed to be an array of numbers.
    The .sort() method sorts the array.
    The function (a, b) => a - b is a compare function:

    If the result is negative, a comes before b.

    If the result is positive, b comes before a.

    If the result is 0, their order doesn't change.

    For numbers, this compare function sorts the array in ascending numeric order
 */
//sorting the objects based on the each of the object's properties
//below sorts in ascending order based on calories property
console.log(Fruits.sort((a, b) => a.calories - b.calories));
//below sorts in descending order based on calories property
console.log(Fruits.sort((a, b) => b.calories - a.calories));
//when we sort using Property of String means above like method doesn't work we have to use localeCompare method
//below sorts in ascending alphabetic order
console.log(Fruits.sort((a, b) => a.name.localeCompare(b.name)));
//below sorts in descending alphabetic order
console.log(Fruits.sort((a, b) => b.name.localeCompare(a.name)));

//Shuffling the Array - It has 2 method
//First Method is below
let b2 = [1, 2, 3, 4, 5];
//below will randomly shuffle the array in lexicographial order based on difference b/w elements
console.log(b2.sort(() => Math.random() - 0.5));
//Second is using Fischer-Yates Algorithm like below
function shuffle_array(b2) {
  for (let i = 0; i < b2.length; i++) {
    const random = Math.floor(Math.random() * (i + 1));
    [b2[i], b2[random]] = [b2[random], b2[i]];
  }
  return b2;
}
console.log(shuffle_array(b2));

/*
object - A collection of related properties(attributes) and /or methods
Can represent real world projects (people,products,places)
object = { key :value,function()
}
*/
const person1 = {
  name: "Rama",
  //above are properties
  age: 20,
  alive: true,
  eat: function () {
    console.log("Iam Eating...!!!");
    //above are methods
  },
  sleep: () => {
    console.log("Iam sleeping..!!");
  },
};
//accessing properties and methods from object
console.log(person1.age);
person1.eat();
person1.sleep();

/*
this - keyword is the reference to the object where it is used to access the properties of object inside in some other places of that object

person1.name=this.name
in above both are accessed as same
*/
const person2 = {
  name: "Raja",
  age: 29,
  //important point is this keyword wont work in arrow function but it works in normal function
  fun1: () => {
    console.log(`His Name is ${this.name}\nHis Age is ${this.age}`);
  },
  fun2: function () {
    console.log(`His Name is ${this.name}\nHis Age is ${this.age}`);
  },
};
person2.fun1();
person2.fun2();

//constructor function - special method for defining the properties and methods of objects
function Car(model, year, color, price) {
  this.model = model;
  this.year = year;
  this.color = color;
  this.price = price;
  this.total_price_calculation = function (sales_Tax) {
    return this.price + this.price * sales_Tax;
  };
}

//Need to use new creating new object from a class/function
car1 = new Car("TESLA", 1995, "Red", 900000);
//can use methods from objects also
console.log(car1.total_price_calculation(90000));
//CLASS - Its ground to create objects from it and cleaner way to create objects compared to constructor function
class Product {
  //used to construct properties for the objects created from this class
  constructor(x, y) {
    this.name = x;
    this.price = y;
  }
  //like below we can define methods for objects created from that class
  display_product() {
    console.log(
      `Name of Product : ${this.name}\nPrice of Product : ${this.price}`
    );
  }
}
//like below can create objects from that class
Mixer = new Product("Mixer", 909090);
Mixer.display_product();

/*
static - keyword that defines properties or methods that belong to class itself not the objects created from that class
*/
class General_Car {
  static Car_Number = 10101;
  static Double_car_Number() {
    //below this keyword denotes Class Variables belongs to that class
    return 2 * this.Car_Number;
  }
  static Triple_car_Number() {
    //below this keyword denotes Class Variables belongs to that class
    return 3 * this.Car_Number;
  }
}
Car_Number1 = new General_Car();
//below function called from object doesn't work becuase thid function belongs to Class not to objects created from Class
//console.log(Car_Number1.Double_car_Number());
//but below work
console.log(General_Car.Double_car_Number());

//doing operations with static properties of class
class products {
  static count = 0;
  constructor(x) {
    this.name = x;
    //for accessing static variables from a class we have to call those variables/properties from that class
    products.count++;
  }
  static User_display() {
    console.log(`Total No of Users: ${products.count}`);
  }
}
p1 = new products("product1");
p2 = new products("product2");
products.User_display();

//Inheritance in OOPS of JS
//Inheritance means inheriting the properites from parent class to child class by extends keyword
class Animal {
  alive = true;
  eat() {
    console.log(`${this.name} is Eating`);
  }
  sleep() {
    console.log(`${this.name} is Sleeping`);
  }
}
//like below by using extends keyword we can inherit child from parent
class Dog extends Animal {
  name = "DOG";
}
DOG = new Dog();
DOG.eat();
//above shows that we can inherit the properites and methods from parent
//where parent methods also uses the properties from the child where it gets inherited

/*
super - keyword is used in classes to call the constructor or access the properties and methods of a parent (super class)
this - keyword denoted this object(object which presenlty you working)
super - keyword denotes parent (super class)
*/

class Birds {
  constructor(name, age) {
    this.bird_name = name;
    this.bird_age = age;
  }
}
class Small_Bird extends Birds {
  constructor(bird_name, bird_age, speed) {
    //this below super function inherits all the constructed properties and methods from the constructor of parent class
    super(bird_name, bird_age);
    this.speed = speed;
  }
}
class Large_Bird extends Birds {
  constructor(speed) {
    super();
    this.speed = "slow";
  }
}
Small_bird1 = new Small_Bird("Small_Bird1", 12, "fast");
//like below we can inherit mehods and properties from super class
console.log(Small_bird1.bird_age);

//get and set methods
/*
getter - special method that makes the property readable
setter - special method that makes the property writable

above methods are used to validate and modify a value when reading/writing a property
*/
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  //like below by using set property we can control the properties and methods of contsructor
  set width(new_width) {
    if (new_width < 0) {
      console.error("Width Cant be Negative");
    } else {
      this.width = new_width;
    }
  }

  get width() {
    return this.width;
  }
}
//by below we can see that width can be controlled with set property and can be returned with get property
//R1 = new Rectangle(12, -32);

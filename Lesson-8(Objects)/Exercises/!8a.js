const product = {
  name: "basketball",
  price: 2095,
};
console.log(product);
product.price = 2095 + 500;
console.log(product);
product["delivery-time"] = "3 days";
console.log(product);
const product2 = {
  name: "Football",
  price: "3000",
};
function comparePrice() {
  if (product.price > product2.price) {
    console.log(`With High Price \n
        ${product}`);
    console.log(product);
  } else {
    console.log(`With High Price \n
        ${product2}`);
    console.log(product2);
  }
}
comparePrice();
let var5 = "Good Morning".toUpperCase();
console.log(var5);

const items = [
  { id: 1, name: "ProductA", price: 20.99 },
  { id: 2, name: "ProductB", price: 30.49 },
  { id: 3, name: "ProductC", price: 25.0 },
  { id: 4, name: "ProductD", price: 15.75 },
];

const cart = ["1", "2", "4"];

function printCart() {
  for (var i = 0; i < cart.length; i++) {
    let currentId = parseInt(cart[i]);
    let obj = items.find((item) => item.id === currentId);
    console.log(obj.name);
  }
}

console.log(printCart());

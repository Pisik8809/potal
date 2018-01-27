document.addEventListener("DOMContentLoaded", ready);
function ready() {
  class Product {
    constructor (name, count, price) {
      this.name = name;
      this.count = count;
      this.price = price;
    }
  }

  var x = new Product('elephant', 1, 500);
  var y = new Product('ball', 1, 120);


  class Cart {
    constructor() {
      this.productList = [];
    }
    add(product) {
      this.productList.push(product);
    }
    remove(product) {
      this.productList.pop(product);
    }

    checkPrice() {
      var totalPrice = 0;
        for(var i = 0; i<this.productList.length; i++) {
          totalPrice += this.productList[i].price;
        }
        return totalPrice;
    }

    save() {
      var str = JSON.stringify(this.productList);
      localStorage.setItem('cartProduts', str);
    }

    getCartProducts() {
      var cartProducts = localStorage.getItem('cartProduts');
      this.productList = JSON.parse(cartProducts);
      console.log(cartProducts);
    }

  }


  var ourCart = new Cart();
  ourCart.add(x);
  ourCart.add(y);
  console.log(ourCart);
  var myPrice = ourCart.checkPrice();
  console.log(myPrice);
  ourCart.save();
  ourCart.getCartProducts();



}

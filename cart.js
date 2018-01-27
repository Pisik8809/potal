document.addEventListener("DOMContentLoaded", ready);
function ready() {
  class Cart {
    constructor() {}
    /*function add(product) {
      findInStorage(product.id);

      var myCount =  product.count + 1;

      var myPrice = +myProduct.price;

    }
    function remove(product.id) {
      findInStorage(product.id);
      myCount -= 1;
    }
    function list() {
      if (!productsList) {
        var productsList = document.getElementById ('list');
        var newProduct = createElement('li');
        newProduct.innerHTML = 'Название товара ' + product.name + ' Количиство' + myCartProductCount +
        ' Цена за единицу товара' + myProduct.price + ' Общая цена' + myCartPrice;
      }
    }
  function findInStorage(productId) {
      var myProduct = JSON.parce(product);
      console.log(myProduct);
    }*/
  }

  var myCart = new Cart();


  class Product {
    constructor(id, name, count, price) {
      this.id = id;
      this.name = name;
      this.count = count + ' шт.';
      this.price = price + ' грн.';
    }
  }

  var product = new Product(123, 'meat', 1, 100);
  localStorage.setItem("product", JSON.stringify(product));
  product = localStorage.getItem("product", (product));
  console.log(product);

  function findInStorage(product) {
    var myProduct = product;
    console.log(myProduct);
  }
  findInStorage(product);

}

// Cart Page Object
var CartPage = function(){
  this.totalEl = element.all(by.binding('cart.getTotal()'));
  this.cartItem = element.all(by.model('cartItem.quantity'));
  this.testEl = element(by.css('table tr:nth-child(3)'));
};

module.exports = CartPage;
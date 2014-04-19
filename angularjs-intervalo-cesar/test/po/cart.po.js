// Cart Page Object
var CartPage = function(){
  this.totalEl = element.all(by.binding('cart.getTotal()'));
  this.cartItem = element.all(by.model('cartItem.quantity'));
	this.testEl = element.all(by.id('test-elem'));
};

module.exports = CartPage;
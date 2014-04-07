var CartHomepage = function() {
  this.addToCart = element.all( by.css('[ng-click="cart.addItem(product)"]') );
  this.secondProductName = element( by.repeater('product in home.getListOfProducts()')
                            .row(1).column('name') );
  this.numberOfItems = element.all(by.binding('numberOfItems'));

  this.get = function() {
    browser.get('http://ramonvictor.github.io/angularjs-intervalo-cesar/');
  };

  this.addToCartClick = function() {
    this.addToCart.get(0).click();
  };

};

var CartPage = function(){
  this.totalEl = element.all(by.binding('cart.getTotal()'));
	this.cartItem = element.all(by.model('cartItem.quantity'));
};

describe('angular commerce homepage', function() {
	var cartHomepage = new CartHomepage();
  var cartPage = new CartPage();

  cartHomepage.get();

  it('should load the correct list of products', function() {
    expect(cartHomepage.secondProductName.getText())
      .toBe('Google Nexus 5 16GB - Black - Unlocked');
  });

  it('should add an item to the cart', function(){
  	cartHomepage.addToCartClick();
    expect(cartHomepage.numberOfItems.get(0)
      .getText()).toContain('Items: 1');
  });

  it('should update the total price', function(){
    cartHomepage.numberOfItems.get(0).click();
    expect(cartPage.totalEl.get(0).getText())
      .not.toContain('TOTAL: R$0,00');
  });

});
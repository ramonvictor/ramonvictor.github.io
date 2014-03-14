var AngularHomepage = function() {
  this.addToCart = element.all(by.partialButtonText('Add to Cart'));
  this.secondProductName = element(by.repeater('product in home.getProducts()').row(1).column('name'));
  this.numberOfItems = element.all(by.binding('numberOfItems'));

  this.get = function() {
    browser.get('http://localhost/ramonvictor.github.io/angularjs-intervalo-cesar/');
  };

  this.addToCartClick = function() {
    this.addToCart.get(0).click();
  };

};

var CartPage = function(){
	this.totalEl = element.all(by.binding('cart.getTotal()'));
};


describe('angularjs homepage', function() {
	var angularHomepage = new AngularHomepage();
  	var cartPage = new CartPage();

  	angularHomepage.get();

  it('should load the correct list of products', function() {
    expect(angularHomepage.secondProductName.getText()).toBe('Google Nexus 5 16GB - Black - Unlocked');
  });

  it('should add an item to the cart', function(){
  	angularHomepage.addToCartClick();
    expect(angularHomepage.numberOfItems.get(0).getText()).toContain('Items: 1');
  });

  it('should update the total price', function(){
    angularHomepage.numberOfItems.get(0).click();
    expect(cartPage.totalEl.get(0).getText()).not.toContain('TOTAL: R$0,00');
  });

});
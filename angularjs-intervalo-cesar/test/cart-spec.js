var CartHomepage = require('./po/home.po');
var CartPage = require('./po/cart.po');

// Test scenario

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
      .getText()).toContain('Items: 0');
  });

  it('should update the total price', function(){
    cartHomepage.numberOfItems.get(0).click();
    expect(cartPage.totalEl.get(0).getText())
      .not.toContain('TOTAL: R$0,00');
  });

});
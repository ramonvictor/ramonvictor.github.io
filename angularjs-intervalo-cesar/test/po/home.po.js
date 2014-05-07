// Home Page Object
var CartHomepage = function() {
  this.addToCart = element.all( by.css('[ng-click="cart.addItem(product)"]') );

  this.fake = element.all( by.css('#foo.bar') );

  this.secondProductName = element( by.repeater('product in home.getListOfProducts()')
                            .row(1).column('name') );
  this.numberOfItems = element.all(by.binding('numberOfItem'));

  this.get = function() {
    browser.get('http://localhost/ramonvictor.github.io/angularjs-intervalo-cesar/');
  };

  this.addToCartClick = function() {
    this.addToCart.get(0).click();
  };

};

module.exports = CartHomepage;
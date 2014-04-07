(function (app) {
    'use strict';

    function cartSummary() {
        return {
            restrict: 'E',
            templateUrl: 'app/cart/cart-summary.html',
            replace: true,
            scope: {
                numberOfItems: "@",
                total: "@"
            }
        };
    }

    app.directive('cartSummary', cartSummary);
}(angular.module('app')))
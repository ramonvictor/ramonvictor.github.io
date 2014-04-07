(function (app) {
    'use strict';

    function homeController() {
        var vm = this;
        vm.getListOfProducts = function () {
            return products;
        }
    }
    app.controller('homeController', homeController);
}(angular.module('app')));
(function () {
    'use strict';

    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
      var toBuyList = this;

      toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

      toBuyList.buyItem = function (itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
      };

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var alreadyBoughtList = this;

      alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }

    function ShoppingListCheckOffService() {
      var service = this;

      var toBuyItems = [
        { name: "Cookies", quantity: 10 },
        { name: "Flour", quantity: 3 },
        { name: "Wine", quantity: 2 },
        { name: "Heavy Cream", quantity: 1 },
        { name: "Strawberries", quantity: 20 },
        { name: "Eggs", quantity: 15},
        { name: "Chicken", quantity: 3}
    ];

    var alreadyBoughtItems = [];

    service.buyItem = function (itemIndex) {
      var item = toBuyItems[itemIndex];

      alreadyBoughtItems.push(item);

      toBuyItems.splice(itemIndex,1);
    };

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getAlreadyBoughtItems = function () {
      return alreadyBoughtItems;
    };

    }
})();

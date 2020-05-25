(function () {
  'use strict';

  angular.module('LunchCheckerApp',[])

  .controller('LunchController',LunchController);

  LunchController.$inject = ['$scope'];

  function LunchController($scope) {

    $scope.dishes="";
    $scope.message="";
    $scope.checked=false;

    $scope.checkLunch = function () {

      if ($scope.dishes.trim().length === 0) {
        $scope.empty = true;

      } else {
        $scope.checked = true;
        $scope.empty = false;
        var dishArray = $scope.dishes.split(',');
        var dishNotEmpty = dishArray.filter(function (v) {
          return v.trim() !== "";
        });
             if (dishNotEmpty.length <= 3) {
               $scope.message = 'Enjoy!';
           } else {
               $scope.message = 'Too much!';
           }

        }

      };
      }

    }
)();

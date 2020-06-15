(function () {
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfiguration);

	RoutesConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

	function RoutesConfiguration($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home' , {
			url : '/',
			templateUrl : 'templates/home.template.html'
		})
		.state('categories', {
            url: '/categories',
            templateUrl: 'templates/categories.template.html',
            controller: 'categoriesController as categoriesCtrl',
            resolve: {
                  categories: ['MenuDataService', function (MenuDataService) {
                       return MenuDataService.getAllCategories();
               }]
            }
       })
	   .state('items', {
	   		url : '/categories/{categoryShortName}',
	   		templateUrl : 'template/items.template.html',
	   		controller : 'itemsController as itemsCtrl',
	   		params : {
	   			categoryShortName : null,
	   			categoryName : null
	   		},
	   		resolve : {
	   			items : ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
	   				return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
	   			}]
	   		}

	   });
	}
})();
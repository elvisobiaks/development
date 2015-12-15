'use strict';

// Articles controller
angular.module('contactus').controller('ContactUsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles',
	function ($scope, $stateParams, $location, Authentication, Articles) {
		$scope.authentication = Authentication;

		var vm = this;
		function init_map() {
			//ngMap.getMap().then(function(map) {
			//	console.log(map.getCenter());
			//	console.log('markers', map.markers);
			//	console.log('shapes', map.shapes);
			//});
			init_map();

		}

	}
]);

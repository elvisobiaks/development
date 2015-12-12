'use strict';

// Articles controller
angular.module('ourteam').controller('OurTeamController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles',
	function ($scope, $stateParams, $location, Authentication, Articles) {
		$scope.authentication = Authentication;

		var vm = this;
		vm.resultMessage = '';

	}
]);

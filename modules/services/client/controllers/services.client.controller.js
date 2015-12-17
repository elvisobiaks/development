/**
 * Created by eobiakara on 2015/12/15.
 */
'use strict';

// Articles controller
angular.module('services').controller('ServicesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles',
	function ($scope, $stateParams, $location, Authentication, Articles) {
		$scope.authentication = Authentication;

		var vm = this;

		vm.truncate = function (text, length) {
			if (isNaN(length))
				length = 200;
			var end = "...";

			if (text.length <= length || text.length - end.length <= length) {
				return text;
			}
			else {
				return String(text).substring(0, length-end.length) + end;
			}
		};

		vm.service1MoreToggle = true;
		vm.service2MoreToggle = true;
		vm.service3MoreToggle = true;
		vm.service4MoreToggle = true;


		vm.savingsService = 'Lorem ipsum dolor sit amet, vel enim fugit torquatos in. An eum ullum ancillae hendrerit. In ludus prodesset sea. Pro ea augue dolor fabulas. Mel amet latine ex, sed utroque noluisse eu, debitis appareat duo ea. Putent senserit ne nam. An ius inani laudem, eum viris assueverit delicatissimi cu. Cum in ubique mucius rationibus, vero altera ut eam. Vix invidunt corrumpit iracundia ne, sed nemore splendide referrentur eu. Tation maluisset ei mea. Ea dicant assueverit cum, mei altera laoreet ut, solum brute comprehensam ut sea. Semper ceteros mnesarchum cum et, mea in alii lobortis sapientem. Eius movet ignota vim no, choro consequat per eu, consul fabulas deterruisset cum ne. Diam brute consectetuer est ex, dicant facete consetetur duo ei, his id option imperdiet intellegat. Ad accumsan definiebas sea. Affert nostrum gubergren usu et. Eos debet discere no. Propriae invidunt id ius, ut mel solet quaerendum theophrastus. Corpora hendrerit liberavisse te has, ut sale molestiae nam. Nec falli alienum deleniti ad, his fugit theophrastus intellegebat ne, ex sed dolorem delicata. Sea latine intellegebat id, at has commodo malorum argumentum."';

		vm.service1 = vm.truncate(vm.savingsService);
		vm.service2 = vm.truncate(vm.savingsService);
		vm.service3 = vm.truncate(vm.savingsService);
		vm.service4 = vm.truncate(vm.savingsService);
	}
]);

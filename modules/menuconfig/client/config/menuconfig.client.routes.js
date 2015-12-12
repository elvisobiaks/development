/**
 * Created by eobiakara on 2015/12/12.
 */
'use strict';

// Setting up route
angular.module('menuconfig').config(['$stateProvider',
    function ($stateProvider) {
      $stateProvider
        .state('contactus', {
          url: '/contactus',
          templateUrl: 'modules/contactus/client/views/contactus.html'
        })
         .state('team', {
            url: '/team',
            templateUrl: 'modules/ourteam/client/views/ourteam.html'
          });
    }
]);

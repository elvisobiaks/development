/**
 * Created by eobiakara on 2015/12/12.
 */
'use strict';

// Configuring the Articles module
angular.module('menuconfig').run(['Menus',
    function (Menus) {
        /**
         * About Us Menu
         */
      Menus.addMenuItem('topbar', {
          title: 'Services',
          state: 'service',
          type: '',
          roles: ['*']
        });
        /**
         * Calculator Menu
         */
      Menus.addMenuItem('topbar', {
          title: 'Calculator',
          state: 'calculator',
          type: 'dropdown',
          roles: ['*']
        });

        // Add the dropdown list item
      Menus.addSubMenuItem('topbar', 'calculator', {
          title: 'Investment Calculator',
          state: 'calculator.investment'
        });
        /**
         * Meet the Team
         */
      Menus.addMenuItem('topbar', {
          title: 'Meet the Team',
          state: 'team',
          type: '',
          roles: ['*']
        });
        /**
         * Contact Us
         */
      Menus.addMenuItem('topbar', {
          title: 'Contact Us',
          state: 'contactus',
          roles: ['*']
        });
    }
]);

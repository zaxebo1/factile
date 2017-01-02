(function() {
    'use strict';

    angular
        .module('factileApp')
        .directive('navbar', navbar);

    /** @ngInject */
    function navbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            scope: {
                creationDate: '='
            },
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController() {}
    }

})();

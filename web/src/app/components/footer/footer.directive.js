(function() {
    'use strict';

    angular
        .module('factileApp')
        .directive('footer', footer);

    /** @ngInject */
    function footer() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/footer/footer.html',
            scope: {
                creationDate: '='
            },
            controller: FooterController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function FooterController() {}
    }

})();

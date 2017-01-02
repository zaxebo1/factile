(function() {
    'use strict';

    angular
        .module('factileApp')
        .config(config);

    /** @ngInject */
    function config($logProvider, toastr, $authProvider) {
        // Enable log
        $logProvider.debugEnabled(true);

        // Set options third-party lib
        toastr.options.timeOut = 3000;
        toastr.options.positionClass = 'toast-top-right';
        toastr.options.preventDuplicates = true;
        toastr.options.progressBar = true;

        $authProvider.facebook({
          clientId: '287505401344847'
        });

        $authProvider.google({
          clientId: '1064263236398.apps.googleusercontent.com'
        });
    }

})();

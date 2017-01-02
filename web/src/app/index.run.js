(function() {
    'use strict';

    angular
        .module('factileApp')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {

        $log.debug('runBlock end');
    }

})();
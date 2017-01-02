(function() {
    'use strict';
    angular
        .module('factileApp')
        .controller('LoginController', LoginController);
    /** @ngInject */
    function LoginController($scope, $auth) {

      $scope.authenticate = function(provider) {
        $auth.authenticate(provider);
      };

    }
})();

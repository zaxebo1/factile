(function() {
    'use strict';

    angular
        .module('factileApp')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            })
            .state('newsurvey', {
                url: '/surveys/new',
                templateUrl: 'app/new-survey/new-survey.html',
                controller: 'NewSurveyController',
                controllerAs: 'newsurvey'
            })
            .state('userpreferences', {
                url: '/user/preferences',
                templateUrl: 'app/main/main.html',
                controller: 'UserPreferencesController',
                controllerAs: 'userpreferences'
            })
            .state('learn', {
                url: '/learn',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'learn'
            });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true).hashPrefix('!');

    }

})();

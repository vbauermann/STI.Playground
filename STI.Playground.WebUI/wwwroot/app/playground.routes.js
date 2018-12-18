(function () {
    'use strict';
    angular
        .module('app')
        .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function Config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/playground");
        $stateProvider
            .state('playground', {
                url: "/playground",
                templateUrl: 'app/playground.html',
                controller: 'playgroundController',
                controllerAs: 'vm'
            });
    }
})();
(function () {
    'use strict';
    angular
        .module('app')
        .config(Config);

    Config.$inject = ['$stateProvider'];
    function Config($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: "/dashboard",
                templateUrl: 'app/dashboard/dashboard.html',
                controller: 'dashboardController',
                controllerAs: 'vm'
            });
    }
})();
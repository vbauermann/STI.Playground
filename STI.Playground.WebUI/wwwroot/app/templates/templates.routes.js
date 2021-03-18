(function () {
    'use strict';
    angular
        .module('app')
        .config(Config);

    Config.$inject = ['$stateProvider'];
    function Config($stateProvider) {
        $stateProvider
            .state('templates', {
                url: "/templates",
                templateUrl: 'app/templates/templates.html',
                controller: 'templatesController',
                controllerAs: 'vm'
            });
    }
})();
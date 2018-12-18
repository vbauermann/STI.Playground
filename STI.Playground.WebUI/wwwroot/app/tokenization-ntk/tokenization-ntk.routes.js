(function () {
    'use strict';
    angular
        .module('app')
        .config(Config);

    Config.$inject = ['$stateProvider'];
    function Config($stateProvider) {
        $stateProvider
            .state('tokenization-ntk', {
                url: "/tokenization-ntk",
                templateUrl: 'app/tokenization-ntk/tokenization-ntk.html',
                controller: 'tokenizationNtkController',
                controllerAs: 'vm'
            });
    }
})();
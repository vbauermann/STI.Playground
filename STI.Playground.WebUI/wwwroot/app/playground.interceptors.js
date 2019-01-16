(function () {
    'use strict';

    angular
        .module('app')
        .run(Interceptors);

    Interceptors.$inject = ['$rootScope', '$window', 'notifyingService'];
    function Interceptors($rootScope, $window, notifyingService) {
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            notifyingService.notify('route-changed');
        });
    }

})();
(function () {
    'use strict';
    angular
        .module('app')
        .config(Config);

    Config.$inject = ['$stateProvider'];
    function Config($stateProvider) {
        $stateProvider
            .state('real-time-notification', {
                url: "/real-time-notification",
                templateUrl: 'app/real-time-notification/real-time-notification.html',
                controller: 'realTimeNotificationController',
                controllerAs: 'vm'
            });
    }
})();
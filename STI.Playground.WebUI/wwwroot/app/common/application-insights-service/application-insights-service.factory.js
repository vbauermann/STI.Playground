(function () {
    'use strict';
    angular
        .module('app')
        .factory('applicationInsightsService', function (notifyingService) {
            return {
                'enable': enable
            };

            function enable(shouldUse) {
                if (!shouldUse)
                    return;

                notifyingService.subscribe('app-started', function (data) {
                    console.log('app-started', data);
                });

                notifyingService.subscribe('route-changed', function (data) {
                    console.log('route-changed', data);
                });

                notifyingService.subscribe('http-request', function (data) {
                    console.log('http-request', data);
                });
            }
        });
})();
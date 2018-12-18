(function () {
    'use strict';
    angular.module('app', [
        'ui.router'
    ]);
    angular.module('app')
        .config(Config)
        .run();

    Config.$inject = ['$urlRouterProvider', '$httpProvider'];
    function Config($urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise("/playground");
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('./service-worker.js')
                .then(function () { console.log('SW Registered'); });
        }
    }
})();
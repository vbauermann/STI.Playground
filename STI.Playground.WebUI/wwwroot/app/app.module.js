(function () {
    'use strict';
    angular.module('app', [
        'ui.router'
    ]);
    angular.module('app')
        .config(Config)
        .run(ConfigurarApp);

    Config.$inject = ['$urlRouterProvider', '$httpProvider'];
    function Config($urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise("/playground");
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

    }

    ConfigurarApp.$inject = ['applicationInsightsService', 'notifyingService'];
    function ConfigurarApp(applicationInsightsService, notifyingService) {

        applicationInsightsService.enable(true);
        notifyingService.notify('app-started');
    }
})();
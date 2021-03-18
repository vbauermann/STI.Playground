(function () {
    'use strict';

    angular
        .module('app')
        .controller('realTimeNotificationController', realTimeNotificationController);

    realTimeNotificationController.$inject = ['signalrService', 'SignalrServer', '$timeout'];
    function realTimeNotificationController(signalrService, SignalrServer, $timeout) {
        var vm = this;
        var _hub = signalrService("playgroundNotificationSignalRHub");

        vm.loading = false;
        vm.notifications = [];
        vm.SignalrServer = SignalrServer;


        vm.connectAndConfigureSignalR = connectAndConfigureSignalR;

        function connectAndConfigureSignalR() {
            vm.loading = true;

            _hub.connect();

            //_hub.onDisconnected(function () {
            //    $timeout(function () {
            //        _hub.connect();
            //    });
            //});

            _hub.on('OnNotificationReceived', function (data) {

                console.log('OnNotificationReceived: ', data);

                if (data.tenant === 'tenant' && data.matricula === 'matricula' && data.doc === 'doc')
                    vm.notifications.push(data);

            })

            vm.loading = false;
        }
    }
})();
(function () {
    'use strict';

    angular
        .module('app')
        .controller('realTimeNotificationController', realTimeNotificationController);

    realTimeNotificationController.$inject = ['signalrService', 'SignalrServer', '$timeout'];
    function realTimeNotificationController(signalrService, SignalrServer, $timeout) {
        var vm = this;

        vm.loading = false;
        vm.notifications = [];
        vm.SignalrServer = SignalrServer;
        vm.Hub = "/chathub";


        vm.connectAndConfigureSignalR = connectAndConfigureSignalR;

        async function connectAndConfigureSignalR() {
            try {
                vm.loading = true;
                const connection = new signalR.HubConnectionBuilder()
                    .withUrl(SignalrServer + vm.Hub)
                    .configureLogging(signalR.LogLevel.Information)
                    .build();

                connection.on("ReceiveMessage", (user, message) => {
                    console.log('user: ', user, ' message: ', message);
                    vm.notifications.push({ user: user, message: message });
                });

                await connection.start();
            } catch (err) {
                console.log(err);
            } finally {
                vm.loading = false;
            }


        }
    }
})();
(function () {
    angular.module('app')
        .factory('signalrService', signalrService);

    signalrService.$inject = ['SignalrServer']

    function signalrService(SignalrServer) {

        function createHub(hubName) {
            var _connection = $.hubConnection(SignalrServer);
            var _proxy = _connection.createHubProxy(hubName);
            var connected = false;

            return {
                on: (eventName, callback) => {
                    _proxy.on(eventName, callback);
                },

                onStateChanged: (callback) => {
                    _connection.stateChanged(callback);
                },

                onError: (callback) => {
                    _connection.error(callback);
                },

                connect: () => setTimeout(() => {
                    _connection.start()
                        .done(() => { connected = true; console.log('connected'); })
                        .fail(() => { connected = false; console.log('failed to connect'); });
                }),

                disconnect: () => {
                    _connection.stop();
                },

                onDisconnected: (callback) => {
                    _connection.disconnected(callback);
                },


                reconnect: function () {
                    this.disconnect();
                    this.connect();
                }
            };
        }

        return createHub;
    }

    //angular.module('app').value('connectionStateTypes', {
    //    connecting: $.signalR.connectionState.connecting,
    //    connected: $.signalR.connectionState.connected,
    //    reconnecting: $.signalR.connectionState.reconnecting,
    //    disconnected: $.signalR.connectionState.disconnected
    //});

})();
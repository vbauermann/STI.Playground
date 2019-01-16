(function () {
    'use strict';
    angular
        .module('app')
        .factory('notifyingService', function ($rootScope) {

            return {
                subscribe: function (event, callback) {
                    var handler = $rootScope.$on(event, callback);
                },

                notify: function (event, data) {
                    $rootScope.$emit(event, data);
                }
            };
        });
})();
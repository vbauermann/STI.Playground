(function () {
    'use strict';

    angular
        .module('app')
        .controller('tokenizationNtkController', tokenizationNtkController);

    tokenizationNtkController.$inject = ['$http'];
    function tokenizationNtkController($http) {
        var vm = this;
        vm.loading = false;
        vm.customers = [];
        vm.runRequest = runRequest;


        async function runRequest() {
            vm.loading = true;
            var promise = await $http(
                {
                    method: 'POST',
                    url: 'https://api.gate2all.com.br/v1/tokenization',
                    data: JSON.parse(vm.body),
                    headers: {
                        'authenticationapi': vm.authenticationapi,
                        'authenticationkey': vm.authenticationkey
                    }
                })
                .then(function (result) {
                    vm.response = result.data;
                }, function (error) {
                    vm.error = error;
                }).finally(function () {
                    vm.loading = false;
                });
            return promise;
        }
    }
})();
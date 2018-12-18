(function () {
    'use strict';

    angular
        .module('app')
        .component('headerAsync', {
            templateUrl: 'app/components/header/header.html',
            controller: headerController,
            controllerAs: 'vm',
            bindings: {
            }
        });

    headerController.$inject = ['$http'];
    function headerController($http) {
        var vm = this;
        vm.loading = false;
        vm.$onInit = retrieveClient;

        async function retrieveClient() {
            vm.loading = true;
            var promise = await $http.get("http://localhost:5000/api/clients")
                .then(function (result) {
                    console.log("Client: ", new Date());
                    vm.client = result.data;
                }, function (error) {
                    alert("Falha ao recuperar client");
                    console.log(error);
                }).finally(function () {
                    vm.loading = false;
                });
            return promise;
        }

    }
})();
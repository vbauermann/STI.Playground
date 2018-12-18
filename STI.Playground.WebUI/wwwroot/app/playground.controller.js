(function () {
    'use strict';

    angular
        .module('app')
        .controller('playgroundController', playgroundController);

    playgroundController.$inject = ['$http'];
    function playgroundController($http) {
        var vm = this;
        vm.loading = false;
        vm.customers = [];
        vm.getCustomers = getCustomers;


        vm.$onInit = getCustomers;

        async function getCustomers() {
            vm.loading = true;
            var promise = await $http.get("http://localhost:5000/api/customers")
                .then(function (result) {
                    console.log("Customers: ", new Date());
                    vm.customers = result.data;
                }, function (error) {
                    vm.customers.push({ nome: "Error", idade: "***" });
                }).finally(function () {
                    vm.loading = false;
                });
            return promise;
        }
    }
})();
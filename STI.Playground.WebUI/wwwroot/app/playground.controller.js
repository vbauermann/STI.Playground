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
        vm.send = send;

        vm.$onInit = post;

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

        async function post() {
            vm.loading = true;
            var data = {
                date: new Date()
            };
            console.log(data);
            var promise = await $http.post("http://localhost:5000/api/Templates", data)
                .then(function (result) {
                    console.log("result: ", new Date());
                }, function (error) {
                }).finally(function () {
                    vm.loading = false;
                });
            return promise;
        }

        async function send(data, time) {
            vm.loading = true;
            var dados = {
                date: new Date(data.getFullYear(), data.getMonth() + 1, time.getDate(), time.getHours(), time.getMinutes(), time.getMilliseconds())
            };
            console.log(dados);
            var promise = await $http.post("http://localhost:5000/api/Templates", dados)
                .then(function (result) {
                    console.log("result: ", new Date());
                }, function (error) {
                }).finally(function () {
                    vm.loading = false;
                });
            return promise;
        }

    }
})();
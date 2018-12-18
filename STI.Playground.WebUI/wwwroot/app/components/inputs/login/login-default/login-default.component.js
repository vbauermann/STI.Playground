(function () {
    'use strict';

    angular
        .module('app')
        .component('loginDefault', {
            templateUrl: 'app/components/inputs/login/login-default/login-default.html',
            controller: loginDefaultController,
            controllerAs: 'vm',
            bindings: {
            }
        });

    loginDefaultController.$inject = [];
    function loginDefaultController() {
        var vm = this;


    }
})();
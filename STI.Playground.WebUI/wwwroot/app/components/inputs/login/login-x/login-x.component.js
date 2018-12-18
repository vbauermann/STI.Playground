(function () {
    'use strict';

    angular
        .module('app')
        .component('loginX', {
            template: '<div compile="vm.component">',
            controller: loginXController,
            controllerAs: 'vm',
            bindings: {
                club: '<'
            }
        });

    loginXController.$inject = ['$injector', '$scope'];
    function loginXController($injector, $scope) {
        var vm = this;
        vm.$onInit = retrieveComponent;

        function retrieveComponent() {
            if ($injector.has('login' + vm.club + 'Directive'))
                vm.component = '<login-' + vm.club + '/>';
            else
                vm.component = '<login-default/>';
        }

        $scope.$watch('vm.club', function () {
            retrieveComponent();
        });

    }
})();
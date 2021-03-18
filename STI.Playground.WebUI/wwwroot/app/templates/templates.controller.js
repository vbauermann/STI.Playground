(function () {
    'use strict';

    angular
        .module('app')
        .controller('templatesController', templatesController);

    templatesController.$inject = [];
    function templatesController() {
        var vm = this;

        var styles = [
            {
                descricao: "Botão default",
                classe: ".btn-default",
                propriedades: [
                    {
                        label: "Cor de fundo",
                        nome: "background-color",
                        valor: "#eb3232",
                        tipo: "cor"
                    },
                    {
                        label: "Cor do texto",
                        nome: "color",
                        valor: "#fff",
                        tipo: "cor"
                    },
                    {
                        label: "Cor da borda",
                        nome: "border-left",
                        valor: "2px solid green",
                        tipo: "cor"
                    }
                ]
            },
            {
                descricao: "Botão default ao passar o mouse (:hover)",
                classe: ".btn-default:hover",
                propriedades: [
                    {
                        label: "Cor de fundo",
                        nome: "background-color",
                        valor: "#fff",
                        tipo: "cor"
                    },
                    {
                        label: "Cor do texto",
                        nome: "color",
                        valor: "gray",
                        tipo: "cor"
                    }
                ]
            }
        ];

        vm.$onInit = function () {
            var elements = "";
            styles.forEach(function (item, index) {
                elements += item.classe + "{";
                item.propriedades.forEach(function (prop, propIndex) {
                    elements += prop.nome + ': ' + prop.valor + ';';
                });
                elements += "}";
            });
            injectStyles(elements);
        };


        function injectStyles(rule) {
            var div = $("<div />", {
                html: '&shy;<style>' + rule + '</style>'
            }).appendTo("body");
        }
    }
})();
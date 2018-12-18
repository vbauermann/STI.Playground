(function () {
    'use strict';

    angular
        .module('app')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$timeout'];
    function dashboardController($timeout) {
        var vm = this;
        vm.loading = false;
        vm.$onInit = draw;

        var data = [
            ["Ingredientes", "Quantidade"],
            ["Cebola", 20],
            ["Pimentão", 10],
            ["Queijo", 50],
            ["Ketchup", 2]];



        function draw() {
            //pieChart
            $timeout(function () {
                var chartData = google.visualization.arrayToDataTable(data);
                var options = {
                    legend: { textStyle: { fontSize: 11 }, position: 'bottom', alignment: 'center' },
                    chartArea: { width: '90%', left: 0, right: 0 },
                    pieSliceText: 'value-and-percentage'
                };
                var chart = new google.visualization.PieChart(document.getElementById('pieChart'));

                chart.draw(chartData, options);
            });

            //doughnutChart
            $timeout(function () {
                var chartData = google.visualization.arrayToDataTable(data);
                var options = {
                    legend: { textStyle: { fontSize: 11 }, position: 'bottom', alignment: 'center' },
                    chartArea: { width: '90%', left: 0, right: 0 },
                    pieSliceText: 'value-and-percentage',
                    pieHole: 0.4
                };
                var chart = new google.visualization.PieChart(document.getElementById('doughnutChart'));

                chart.draw(chartData, options);
            });
        }
    }
})();
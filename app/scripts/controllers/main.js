define([], function () {
    'use strict';

    function mainController($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }

    mainController.$inject = ['$scope'];

    return mainController;
});
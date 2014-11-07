define([], function () {
    'use strict';
    function achievementsController($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }

    achievementsController.$inject = ['$scope'];

    return achievementsController;
});

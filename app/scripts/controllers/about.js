define([], function () {
    'use strict';

    function aboutController($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }

    aboutController.$inject = ['$scope'];

    return aboutController;
});

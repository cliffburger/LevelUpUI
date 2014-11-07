define([], function () {
    'use strict';
    function profileController($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }

    profileController.$inject = ['$scope'];

    return profileController;
});

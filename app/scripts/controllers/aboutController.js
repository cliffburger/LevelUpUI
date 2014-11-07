define([], function () {
    'use strict';

    function aboutController($scope) {
        $scope.about = 'Inspirational mumbo jumbo';
    }

    aboutController.$inject = ['$scope'];

    return aboutController;
});

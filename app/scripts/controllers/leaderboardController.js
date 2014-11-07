define([], function () {
    'use strict';

    function leaderboardController($scope, leaderboardService) {
        $scope.leaders = leaderboardService.getLeaders();
    }

    leaderboardController.$inject = ['$scope', 'leaderboardService'];

    return leaderboardController;
});

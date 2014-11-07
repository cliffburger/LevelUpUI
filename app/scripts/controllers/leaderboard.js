define([], function () {
    'use strict';

    function leaderboardController($scope) {
        $scope.leaders = [
            { hero: 'Jerrod', points: 1 },
            { hero: 'Stephen', points: 3},
            { hero: 'Cliff', points: 0 },
            { hero: 'Jon', points: 100 }
        ];
    }

    leaderboardController.$inject = ['$scope'];

    return leaderboardController;
});

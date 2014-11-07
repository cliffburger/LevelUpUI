define([], function () {
    'use strict';

    function achievementsController($scope, achievementsService) {

      achievementsService.getAchievements()
        .then(function(result){
            $scope.achievements = result;
            $scope.achievementCount = result !== null ? result.length : 0;
        });
    }

    achievementsController.$inject = ['$scope', 'achievementsService'];

    return achievementsController;
});

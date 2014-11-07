define([], function () {
    'use strict';
    function achievementsController($scope, achievementsService) {
      achievementsService.getAchievements()
        .then(function(result){
            $scope.achievements = result;
        });
    }

    achievementsController.$inject = ['$scope', 'achievementsService'];

    return achievementsController;
});

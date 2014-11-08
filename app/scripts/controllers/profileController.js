define([], function () {
    'use strict';
    function profileController($scope, $routeParams, achievementsService) {

      if($routeParams.heroId) {

        achievementsService.getHeroAchievements($routeParams.heroId)
          .then(function (result) {
            $scope.achievements = result.achievements;
            $scope.achievementCount = result.achievements !== null ? result.achievements.length : 0;
          });
      }
    }

    profileController.$inject = ['$scope', '$routeParams', 'achievementsService'];

    return profileController;
});

define([], function () {
    'use strict';
    function profileController($scope, $routeParams, achievementsService) {

      if($routeParams.heroId) {

        achievementsService.getHeroAchievements($routeParams.heroId)
          .then(function (result) {
            $scope.achievements = result;
            $scope.achievementCount = result !== null ? result.length : 0;
          });
      }
    }

    profileController.$inject = ['$scope', '$routeParams', 'achievementsService'];

    return profileController;
});

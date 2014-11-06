'use strict';

/**
 * @ngdoc function
 * @name levelUpUiApp.controller:levelUpUiApp
 * @description
 * # LeaderBoardCtrl
 * Controller of the levelUpUiApp
 */
angular.module('levelUpUiApp')
  .controller('LeaderBoardCtrl', function ($scope) {
    $scope.leaders = [
        { hero: 'Jerrod', points: 1 },
        { hero: 'Stephen', points: 3},
        { hero: 'Cliff', points: 0 },
        { hero: 'Jon', points: 100 }
    ];
  });

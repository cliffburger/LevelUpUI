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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

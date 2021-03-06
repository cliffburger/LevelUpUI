'use strict';

define([
    'scripts/controllers/mainController.js',
    'scripts/controllers/aboutController.js',
    'scripts/controllers/leaderboardController',
    'scripts/controllers/achievementsController',
    'scripts/controllers/profileController.js',
    'scripts/services/leaderboardService.js',
    'scripts/services/achievementsService.js'
], function (mainController, aboutController, leaderboardController, achievementsController, profileController, leaderboardService, achievementsService) {

    var app = angular.module('levelUpUiApp', [
        'ngAnimate',
        'ngResource',
        'ngRoute'
    ]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'mainController'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'aboutController'
            })
            .when('/leaderboard', {
                templateUrl: 'views/leaderboard.html',
                controller: 'leaderboardController'
            })
            .when('/achievements', {
                templateUrl: 'views/achievements.html',
                controller: 'achievementsController'
            })
            .when('/profile', {
              templateUrl: 'views/profile.html',
              controller: 'profileController'
            })
            .when('/profile/:heroId', {
                templateUrl: 'views/profile.html',
                controller: 'profileController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

    app.controller('mainController', mainController);
    app.controller('aboutController', aboutController);
    app.controller('leaderboardController', leaderboardController);
    app.controller('achievementsController', achievementsController);
    app.controller('profileController', profileController);
    app.factory('leaderboardService', leaderboardService);
    app.factory('achievementsService', achievementsService);

});

'use strict';

define([
    'scripts/controllers/main.js',
    'scripts/controllers/about.js',
    'scripts/controllers/leaderboard',
    'scripts/controllers/achievements',
    'scripts/controllers/profile.js',
    'scripts/services/leaderboardService.js'
], function (mainController, aboutController, leaderboardController, achievementsController, profileController, leaderboardService) {

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

});
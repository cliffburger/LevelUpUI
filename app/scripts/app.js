'use strict';

/**
 * @ngdoc overview
 * @name levelUpUiApp
 * @description
 * # levelUpUiApp
 *
 * Main module of the application.
 */
angular
    .module('levelUpUiApp', [
        'ngAnimate',
        'ngResource',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/leaderboard', {
                templateUrl: 'views/leaderboard.html',
                controller: 'LeaderBoardCtrl'
            })
            .when('/achievements', {
                templateUrl: 'views/achievements.html',
                controller: 'AchievementsCtrl'
            })
            .when('/profile', {
                templateUrl: 'views/profile.html',
                controller: 'ProfileCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

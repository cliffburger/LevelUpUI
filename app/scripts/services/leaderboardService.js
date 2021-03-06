define([], function () {
    'use strict';

    //function leaderboardService($resource){
    function leaderboardService() {

        function getLeaders() {
            return [
                { hero: 'Jerrod', points: 1 },
                { hero: 'Stephen', points: 3},
                { hero: 'Cliff', points: 0 },
                { hero: 'Jon', points: 100 },
                { hero: 'Shayes', points: -123 },
                { hero: 'Kepler', points: 200 },
                { hero: 'Tenzing ', points: 200 }
            ];
        }

        var service = {
            getLeaders: getLeaders
        };

        return service;
    }

    // leaderboardService.inject('$resource');

    return leaderboardService;
});

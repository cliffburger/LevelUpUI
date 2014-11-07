define([], function(){
  'use strict';

  function createApiUrl(route){
    var root = 'http://localhost:57862/';
    return root + route;
  }

  function achievementsService($resource){

    var AchievementsApi = $resource(createApiUrl('achievements'));

    function getAchievements(){
      return AchievementsApi.query().$promise;
    }

    return {
      getAchievements: getAchievements
    };
  }

  achievementsService.$inject=['$resource'];

  return achievementsService;
});

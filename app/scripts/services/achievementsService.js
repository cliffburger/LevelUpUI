define([], function(){
  'use strict';

  function createApiUrl(route){
    var root = 'http://localhost:57862/';
    return root + route;
  }

  function achievementsService($resource){


    function getAchievements(){
      return $resource(createApiUrl('achievements')).query().$promise;
    }

    function getHeroAchievements(heroId){
      return $resource(createApiUrl('achievements/:heroId')).get({ heroId: heroId}).$promise;
    }

    return {
      getAchievements: getAchievements,
      getHeroAchievements: getHeroAchievements
    };
  }

  achievementsService.$inject=['$resource'];

  return achievementsService;
});

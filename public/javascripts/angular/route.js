var app = angular.module("RDash", [
    "ui.bootstrap",
    "ui.router",
    "oc.lazyLoad",
    "common.services"]);

app.config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        
        $stateProvider
            .state('tracking', {
                url: '/tracking',
                templateUrl: '/angular/partialviews/track.html'
            }) 
            .state('/home', {
                url: '/',
                templateUrl: '/angular/partialviews/home.html'
            })
           
          
           
    }
]);
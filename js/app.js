var app = angular.module("cv_creator", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/basic", {
       templateUrl : 'public/basicinfo.htm',
       controller : 'userMetadata'
    })
    .when("/workex", {
        templateUrl : 'public/workex.htm'
    })
    .when("/edu", {
        templateUrl : 'public/edu.htm'
    })
    .when("/interest", {
       templateUrl : 'public/interest.htm'
    })
    .when("/qual", {
        templateUrl : 'public/qualification.htm'
    })
    .when("/ref", {
        templateUrl : 'public/ref.htm'
    })
    .otherwise({
        template : "<h1>Nothing</h1><p>Nothing has been selected</p>"
    });
});
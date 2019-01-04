var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/home.html"
    })
    .when("/home", {
        templateUrl : "app/home.html"
    })
    .when("/merlionbank", {
        templateUrl : "app/merlionbank.html"
    })
    .when("/ibeehub", {
        templateUrl : "app/ibeehub.html"
    })
    .when("/ideavalidation", {
        templateUrl : "app/ideavalidation.html"
    })
    .when("/meowdiary", {
        templateUrl : "app/meowdiary.html"
    })
    .when("/safetrip", {
        templateUrl : "app/safetrip.html"
    })
    .when("/home", {
        templateUrl : "app/home.html"
    })
    .when("/about", {
        templateUrl : "app/about.html"
    })
    .otherwise(
    {
      redirectTo: '/home'
    });
});
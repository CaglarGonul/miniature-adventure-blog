var app = angular.module('cgonul_static_web_site', ['ngRoute','gist']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        // Home
        .when("/", {templateUrl: "pages/home.html", controller: "PageCtrl"});
}]);



/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");

    // Activates the Carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    })
});
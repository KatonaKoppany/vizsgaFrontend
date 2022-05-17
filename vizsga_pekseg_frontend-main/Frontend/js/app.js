var app = angular.module('vizsga', ['ngRoute','ngAnimate']);

app.config(function($rootScope,$routeProvider){
    $rootScope.title="Házi pékség";
    $rootScope.subtitle="Szoftverfejlesztő és tesztelő Vizsgafeladat";
    $rootScope.company="Bajai SZC Türr István Technikum";
    $rootScope.author="Katona Koppány Gábor";
    $rootScope.penznem="Ft";

    if(sessionStorage('user')){
        $rootScope.loggedIn=true;
    }
    else{
        $rootScope.loggedIn=false;
    }
    
});

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:"termeklista.html",
        controller:"productCtrl"
    })
    .when('/reg',{
        templateUrl:"regisztracio.html",
        controller:"loginCtrl"
    })
    .when('/kosar',{
        templateUrl:"kosar.html",
        controller:"cartCtrl"
    })
    .when('/termek',{
        templateUrl:"termek.html",
        controller:"productsCtrl"
        
    })
    .when('/felhasznalok',{
        templateUrl:"felhasznalok.html",
        controller:"userCtrl"
    })
    .when('/rendelesek',{
        templateUrl:"rendelesek.html",
        controller:"ordedCtrl"
    })
    .when('/stat',{
        templateUrl:"statisztika.html",
        controller:"statCtrl"
    })
})
(function() { 

  'use strict';

  angular
    .module('app')
    .config([
      '$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home/home.html',
          controller: 'HomeController as vm'
        })
        .state('home.main', {
          url: 'main',
          templateUrl: 'home/main.html',
          controller: 'HomeController as vm'
        })
        .state('home.clubs', {
          url: 'clubs',
          templateUrl: 'clubs/clubs.html',
          controller: 'ClubController as vm'
        })
          .state('home.clubs.club', {
          url: '/:id',
          templateUrl: 'clubs/club.html',
          controller: 'ClubController as vm'
        })
         .state('home.books', {
          url: 'books',
          templateUrl: 'books/books.html',
          controller: 'BookController as vm'
        })
          .state('about', {
          url: '/about',
          templateUrl: 'about/about.html',
          controller: 'AboutController as vm'
        })
          .state('profile', {
          url: '/profile',
          templateUrl: 'profile/profile.html',
          controller: 'ProfileController as vm'
        })
          .state('home.booksDetails', {
          url: 'books/details',
          templateUrl: 'views/books/details.html',
          controller: 'BookDetailsController as vm'
        })
          .state('login', {
          url: '/login',
          templateUrl: 'auth/login.html',
          controller: 'AuthController',
          onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function(){
            $state.go('home');
        })
      }]
    })
          .state('register', {
          url: '/register',
          templateUrl: 'auth/register.html',
          controller: 'AuthController',
          onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function(){
            $state.go('home');
        })
      }]
    });

        $urlRouterProvider.otherwise('/');
      }]);
  }());
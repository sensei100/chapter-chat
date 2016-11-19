(function() { 

  'use strict';

  angular
    .module('app', ['ui.router', 'templates', 'Devise', 'ngResource'])
    .config(function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common["X-Requested-With"];
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
  });
  }());
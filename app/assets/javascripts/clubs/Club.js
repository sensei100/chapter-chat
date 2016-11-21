function Club($resource) {
  var Club = $resource('/clubs/:id', {id: '@id'}, {
    update: {method: 'PUT'},
    delete: {method: 'DELETE'}
    });

  return Club;

}

Club.$inject = ['$resource']

angular
    .module('app')
    .factory('Club', Club)
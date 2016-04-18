angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  $http({
    method:'GET',
    url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
  }).then(function(response){
    vm.book = response.data;
  })

  vm.editBook = function(){
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id,
      data: {
        title: vm.book.title,
        author: vm.book.author,
        image: vm.book.image,
        releaseDate: vm.book.releaseDate
      }
    }).then(function(response){
      vm.book = response.data;
      $location.path('/');

    })
  }
  vm.deleteBook = function(){
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
    }).then(function(response){
      $location.path('/');
    })
  }
};

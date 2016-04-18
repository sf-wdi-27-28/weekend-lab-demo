angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function(response){
    console.log(response.data);
    vm.books = response.data.books;
  }).then(function(error){
    console.log(error);
  });
}

angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/ajopoadfpakpokpok'
  }).then(function(response){
    console.log(response.data);
  }).then(function(error){
    console.log(error);
  });
}

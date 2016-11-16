function BookController(BookFactory) {

      var vm = this;
      vm.books = [];
      vm.searchTerm = "jQuery";

      activate();

      function activate() {
        getBooks()
      }
      
      function getBooks() {
        BookFactory.getBooks(vm.searchTerm)
                   .then(setBooks) 

        function setBooks(items) {
          vm.books = items
        }          
         
      }     
};

  BookController.$inject = ['BookFactory']

angular
  .module('app')
  .controller('BookController', BookController);


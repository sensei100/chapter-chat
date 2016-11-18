function BookController(BookFactory) {

      var vm = this;
      
      activate();

      function activate() {
        getBooks()
      }
      
      function getBooks() {
        BookFactory.getBooks()
                   .then(setBooks) 

        function setBooks(data) {
          vm.books = data;
        }          
         
      }     
};

  BookController.$inject = ['BookFactory']

angular
  .module('app')
  .controller('BookController', BookController);


angular.module('assessment').service('shopService', function($http){
  this.fetch = () => {
    return $http.get('https://practiceapi.devmountain.com/products')
  };
  this.productById = (id) => {
    return $http.get(' https://practiceapi.devmountain.com/products/' + id)
  };
});

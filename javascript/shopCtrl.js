angular.module('assessment').controller('shopCtrl', function($scope,shopService,$state){
  shopService.fetch()
  .then(response => {
    $scope.products = response.data;
    return response.data;
  });
});

angular.module('assessment').controller('productDetailsCtrl',function($scope,$stateParams,shopService){
  $scope.itemId = $stateParams.id;
  $scope.productById = () => {
    shopService.productById($scope.itemId).then(response => {
      $scope.product = response.data;
    });
  }
  $scope.productById();
});

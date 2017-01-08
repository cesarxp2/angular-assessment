angular.module('assessApp').controller('mainCtrl', function($scope, mainService, $stateParams) {

    $scope.getShop = function() {
        mainService.getShop().then(function(response) {
            console.log(response)
            $scope.products = response.data;
        })
    }
    $scope.getShop();

    $scope.show = false;
    $scope.toggleMe = function() {
        console.log($scope.show);
        $scope.show = !$scope.show;
        console.log($scope.show);

    }

})

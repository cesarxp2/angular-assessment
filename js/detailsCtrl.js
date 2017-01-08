angular.module('assessApp')
    .controller('detailsCtrl', function($scope, mainService, $stateParams) {

        mainService.getShop2($stateParams.id)
            .then(function(response) {
                console.log(response)
                $scope.products = response.data;
            });

    });

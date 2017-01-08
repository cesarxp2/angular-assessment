angular.module('assessApp').service('mainService', function($http) {

    this.getShop = function() {
        return $http({
            method: 'GET',
            url: 'http://practiceapi.devmounta.in/products'
        })
    }

    this.getShop2 = function(id) {
        return $http({
            method: 'GET',
            url: 'http://practiceapi.devmounta.in/products/' + id
        })
    }
})

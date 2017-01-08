angular.module('assessApp').directive('productDir', function() {
    return {
        templateUrl: './views/product-tmpl.html',
        restrict: 'EA',
        scope: {
            info: '='
        },
        controller: 'mainCtrl'
    }

});

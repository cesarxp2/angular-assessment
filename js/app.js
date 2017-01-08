angular.module('assessApp', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: './views/home.html',
                controller: 'mainCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: './views/about.html'
            })
            .state('blog', {
                url: '/blog',
                templateUrl: './views/blog.html'
            })
            .state('shop', {
                url: '/shop',
                templateUrl: './views/shop.html',
                controller: 'mainCtrl'
            })
            .state('details', {
                url: '/details/:id',
                templateUrl: './views/product-details.html',
            })

    })

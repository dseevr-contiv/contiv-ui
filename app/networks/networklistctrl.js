angular.module('contiv.networks', ['contiv.models.networks'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('contiv.networks', {
                url: '/',
                views: {
                    //target the ui-view named 'networks' in ROOT state (contiv)
                    'networks@': {
                        controller: 'NetworksListCtrl as networksListCtrl',
                        templateUrl: 'networks/networklist.html'
                    }
                }
            })
        ;
    })
    .controller('NetworksListCtrl', ['NetworksModel', function (NetworksModel) {
        var networksListCtrl = this;
        NetworksModel.get()
            .then(function (result) {
                networksListCtrl.networks = result;
            });
    }]);

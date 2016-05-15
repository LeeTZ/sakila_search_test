var app = angular.module('app', []);
app.controller('ctrl', function($scope, $http) {
    $scope.countryQuery= "";
    $scope.customerlist = [];
    // API for get country counts, would be called once at the loading of the page
    $scope.getCountryCounts = function (){
        $http.post('/customer/count',{
            // no parameters needed here        
        }).then(function(res){
            // add every option to the option list of the search bar
            $.each(res.data,function (id, obj){
                $('#searchbar')
                    .append($('<option>',{value : obj["country"]})
                    .text(obj["country"] + ' (' + obj["count(country)"].toString() + ')'));
            });
            // initialization of the search dropdown
            $('#searchbar').chosen();
        });
    };
    // API for get customers from a specifc country
    $scope.showCustomers = function (countryQuery){
        $http.post('/customer/list',{
            countryQuery : countryQuery
        }).then(function(res){
             $scope.customerList = res.data;
        });
    };
    
    // immediately get country counts for use
    $scope.getCountryCounts();
    $("#customertable").tablesorter();
});


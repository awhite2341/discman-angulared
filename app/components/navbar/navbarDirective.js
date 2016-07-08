//I think this should be angular.module('discman', []). instead of app., but I can't get that to work right now.  ugh!
app.directive('pageNavBar', function(){
    return{
        restrict: 'E',
        templateUrl: 'components/navbar/navbar.html'
    };
});
app.controller('navBarController', ['$scope', function($scope){
    //This needs to be cleaned up!!  I don't think it should be in the controller.  Well the functions can be, but the actions should be in the Directive link attribute
    $scope.checkLeftNavState = function() {
        if ($('#leftNav').hasClass('leftNavClosed')){
            $('.navText').hide();
        }
    };

    $('#leftNav').hover(function(){
            if ($('#leftNav').prop('left', 0)){
                $(this).prop('class','mediumDarkBkg');
            } else if ($('#leftNav').prop('left', 120)){
                $(this).prop('class','mediumDarkBkg');
                $('.navText').fadeIn(200);
            }
            $(this).stop().animate({
                left: 104
            }, 'fast', function() {
                $('.favoritesContent').hide();
                $('#leftNav').toggleClass('leftNavClosed leftNavOpen');
                if ($('#leftNav').hasClass('leftNavOpen')){
                    $('.navText').fadeIn(200);
                }
            });
        },
        function(){
            $('.navText').hide();
            $(this).stop().animate({
                left: 0
            }, 'fast', function() {
                $scope.checkLeftNavState();
            });
            $('#leftNav').toggleClass('leftNavClosed leftNavOpen');
        });

    $('#mainNav li').each(function() {
        $(this).click(function(){
            $('.navText').hide();
            $('#leftNav').animate({
                left: 0
            }, 'fast', function() {
                $scope.checkLeftNavState();
            });
        });
    });

    $scope.checkLeftNavState();
}]);
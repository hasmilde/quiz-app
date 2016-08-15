angular.module('starter.controllers.registerController', [])


.controller('registerController', function($scope, $state, choiceservice, mongoservice){
        
        $scope.email = "";
        
        $scope.register = function(user) {
            choiceservice.register(user)
            mongoservice.sendRegister(user)
            console.log(user)
            // console.log($scope.email)
            // console.log($scope.emailName)
            // console.log($scope.emailid)
            // $scope.email = null
            
                // $scope.email(user)
                $state.go('state1')
        };
       
        //  $scope.email = function(user){
        //     mongoservice.sendRegister(user)
        // }
        $scope.setButtonClicked= function(dest) {
        //SetBackgroundOnLoad and set subtitles
        if (dest == 'quizOne') {
            document.getElementById("quizOne").src = "../img/blue_dot.png";
        } 
       
    }
    });
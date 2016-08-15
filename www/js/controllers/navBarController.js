angular.module('starter.controllers.navBarController', [])

.controller('navBarController', function($scope, choiceservice){

$scope.setButtonClicked= function(dest) {
        $scope.resetButtonUnclicked();
        //SetBackgroundOnLoad and set subtitles
        if (dest == 'quizOne') {
            document.getElementById("quizOne").src = "../img/blue_dot.png";
        } 
        
        else if (dest == 'quizTwo') {
            document.getElementById("quizTwo").src="../img/blue_dot.png";
        } 
        else if (dest == 'quizThree') {
            document.getElementById("quizThree").src="../img/blue_dot.png";
        } 
        else if (dest == 'quizFour') {
            document.getElementById("quizFour").src="../img/blue_dot.png";
        } 
        else if (dest == 'quizFive') {
            document.getElementById("quizFive").src="../img/blue_dot.png";
        } 
        else if (dest == 'quizSix') {
            document.getElementById("quizSix").src="../img/blue_dot.png";
        } 
        else if (dest == 'quizSeven') {
            document.getElementById("quizSeven").src="../img/blue_dot.png";
        } 
       
    }
    
    //Reset all buttons to status unclicked
    $scope.resetButtonUnclicked=function() {
        document.getElementById("quizOne").src = "../img/white_dot.png";
        document.getElementById("quizTwo").src = "../img/white_dot.png";
        document.getElementById("quizThree").src = "../img/white_dot.png";
        document.getElementById("quizFour").src = "../img/white_dot.png";
        document.getElementById("quizFive").src = "../img/white_dot.png";
        document.getElementById("quizSix").src = "../img/white_dot.png";
        document.getElementById("quizSeven").src = "../img/white_dot.png";
    }

})

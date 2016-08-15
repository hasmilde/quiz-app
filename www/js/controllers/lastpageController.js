angular.module('starter.controllers.lastpageController', [])

.controller('lastpageController', function($scope, lastpageservice, mongoservice){
    //Reset all buttons to status unclicked
    $scope.resetButtonUnclicked= function() {
        document.getElementById("quizOne").src = "../img/white_dot.png";
        document.getElementById("quizTwo").src = "../img/white_dot.png";
        document.getElementById("quizThree").src = "../img/white_dot.png";
        document.getElementById("quizFour").src = "../img/white_dot.png";
        document.getElementById("quizFive").src = "../img/white_dot.png";
        document.getElementById("quizSix").src = "../img/white_dot.png";
        document.getElementById("quizSeven").src = "../img/white_dot.png";
    }
    
    $scope.sendAnswers= function(){
        mongoservice.sendAnswers();
    }
    
    $scope.restart = function(){
        lastpageservice.restart()
        console.log(states);
    }
    
})
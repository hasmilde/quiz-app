angular.module('starter.controllers.choiceCtrl', [])

.controller('choiceCtrl', function($scope, choiceservice){

  $scope.next = function(){
    choiceservice.affirmative()
  }
  
  $scope.confirm= function(choice){
      console.log(choice);
      choiceservice.confirm(choice);
  }
  
  $scope.changed = function(choice){
    choiceservice.changed(choice)
  }
 
 $scope.state=0; 
  
 $scope.state2=choiceservice.getQuiz();

  $scope.setState = function(){
    choiceservice.setState()
  }


})

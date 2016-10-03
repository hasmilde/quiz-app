angular.module('starter.controllers.quizController', [])


.controller('quizController', function($scope, $state, quizService, mongoservice){
            quizService.getQuestions()
                .then(function(res) {
                    $scope.questions = res;
                });

    });
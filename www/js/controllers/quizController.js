angular.module('starter.controllers.quizController', [])


.controller('quizController', function($scope, $state, quizeservice, mongoservice){
            quizService.getQuestions()
                .then(function(res) {
                    $scope.questions = res;
                });

    });
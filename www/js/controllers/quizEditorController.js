(function() {
	'use strict';

	angular
		.module('starter.controllers.quizEditorController', [])
		.controller('quizEditorController', quizEditorController);


	function quizEditorController($scope, $state, quizService, mongoservice) {
		var self = this;
		self.questions = [];
		self.title = 'Questions';

		activate();

		function activate() {
			return quizService.getQuestions().then(function(res) {
				$scope.questions = res;
			})
		}
	}
})();
(function() {
	'use strict';

	angular
		.module('starter.controllers.quizEditorController', [])
		.controller('quizEditorController', quizEditorController);


	function quizEditorController($scope, $state, quizEditorService, mongoservice) {
		var self = this;
		self.questions = [];
		self.title = 'Questions';

		activate();

		function activate() {
			return quizEditorService.getQuestions().then(function(res) {
				$scope.questions = res;
			})
		}
	}
})();
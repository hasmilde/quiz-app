(function() {
	'use strict';

	angular
		.module('starter.controllers.quizController', [])
		.controller('quizController', quizController);


	function quizController($scope, $state, quizService, mongoservice, logger) {
		var self = this;
		self.questions = [];
		self.title = 'Questions';

		activate();

		function activate() {
			return quizService.getQuestions().then(function(res) {
				$scope.questions = res;
				logger.info('Activated questions view');
			})
		}
	}
})();
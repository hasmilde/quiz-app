(function() {
    'use strict';

    angular
	.module('starter.services.quizEditorService', [])
	.factory('quizEditorService', quizEditorService);

	function quizEditorService($state, $q, $log, $http) {
		
		var service = {
			getQuestions: getQuestions
		};

		return service;

        function getQuestions() {
        	return $http.get('data/questions.json')
        }
    }
})();

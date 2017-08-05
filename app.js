var App = angular.module('ngApp', ['ngSanitize']
	).config(function() {

}).run(function() {
});

App.controller('QuizController',['$scope', function($scope){
	var vm = this;
	vm.questionList = [
		{
			Questions : [
			{
				Question : 'Which of the following is true about AngularJS expressions?',
				Options : [
					'Expressions are used to bind application data to html.',
					'Expressions are written inside double braces like {{ expression}}.',
					'Expressions behave in same way as ng-bind directives.',
					'All of the above.'
				],
				Points : [
					1,
					2,
					3,
					4
				]
			},
			{
				Question : 'Which of the following is true about lowercase filter?',
				Options : [
					'Lowercase filter converts a text to lower case text.',
					'Lowercase filter is a function which takes text as input.',
					'Both of the above.',
					'None of the above.'
				],
				Points : [
					1,
					2,
					3,
					4
				]
			},
			{
				Question : 'Which of the following is true about orderby filter?',
				Options : [
					'orderby filter orders the array based on provided criteria.',
					'orderby filter is used to filter the array to a subset of it based on provided criteria.',
					'Both of the above.',
					'None of the above.'
				],
				Points : [
					1,
					2,
					3,
					4
				]
			},
			{
				Question : 'In AngularJS, Scope contains the model data.',
				Options : [
					'true',
					'false'
				],
				Points : [
					1,
					4
				]
			},
			{
				Question : 'Use novalidate with a form declaration to disable any browser specific validation.',
				Options : [
					'true',
					'false'
				],
				Points : [
					1,
					4
				]
			},
			{
				Question : 'Child controller inherits the scope of its parent controller.',
				Options : [
					'true',
					'false'
				],
				Points : [
					1,
					4
				]
			},
			{
				Question : 'Filters select a subset of items from an array and return a new array.',
				Options : [
					'true',
					'false'
				],
				Points : [
					1,
					4
				]
			},
			{
				Question : 'Each controller accepts $scope as a parameter which refers to the application/module that controller is to control.',
				Options : [
					'true',
					'false'
				],
				Points : [
					1,
					4
				]
			}
			]
		}
	];

	vm.resetQuiz = function(){
		vm.selections = [null,null,null,null,null,null,null,null];
		vm.currQuestion = 0;
	};
	vm.resetQuiz();
	
	
	vm.makeSelection = function(questionNo,answerNo,choice){
		console.log("Question number: " + (questionNo+1) + ", Option number: " + (answerNo+1) + ", " + choice);
		vm.selections[vm.currQuestion] = answerNo;
		vm.allowNav = true;
		console.log(vm.selections);
	};
	
	vm.previousQuestion = function(){
		vm.currQuestion--;
		if(vm.selections[vm.currQuestion] !== null){
			vm.allowNav = true;
		} else {
			vm.allowNav = false;
		}
	};
	vm.nextQuestion = function(){
		vm.currQuestion++;
		if(vm.selections[vm.currQuestion] !== null){
			vm.allowNav = true;
		} else {
			vm.allowNav = false;
		}
	};
}]);

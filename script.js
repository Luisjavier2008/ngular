



// (function(){

var app = angular.module("githubView", [])

var MenuController = function ($scope, $http){

	var whenError = function(reason){
		$scope.error = "there nothig todo error we cant get any data"
	};

	$http.get("http://api.github.com/users/robconery").then(function(response){
		$scope.github = response.data;
	}, whenError);

	// var promise = $http.get("http://google.com")
	// promise.then(function(response){
	// 	$scope.user = response.data;
	// });

	// $http.get("http://google.com").then(function(response){
	// 	$scope.user = response.data;
	// });

	$scope.yourname = {
		name: "javier",
		lastName: "Allen",
		imageSrc: "localhost"
	}
	$scope.message = "hello";
}


// var create = function(){
// 	var task1 = function(){
// 		console.log('jeje')
// 	}
// 	return{
// 		job1: task1
// 	}
// }

// var worker = create();

// worker.job1();
// worker.job1();
// worker.job2();


app.controller("MenuController", ["$scope", "$http", MenuController]);
// })();





(function(){

var MenuController = function ($scope){
	$scope.message = "hello";
}


var create = function(){
	var task1 = function(){
		console.log('jeje')
	}
	return{
		job1: task1
	}
}

var worker = create();

worker.job1();
worker.job1();
// worker.job2();

})();


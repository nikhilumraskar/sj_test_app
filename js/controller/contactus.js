app.controller('contactusCtrl', function($rootScope, $scope) {

	$rootScope.title="Contact Us";

	var getAllQueries = function(){
		$.post( "php/contactus/getAllQueries.php", { userid: $rootScope.userDetails.id }, function(data) {
			$scope.allQueries = JSON.parse(data);
			console.log($scope.allQueries);
			$scope.$apply();
		});
	};

	$scope.newQuery = function(){
		$scope.queryForm = true;
		$scope.detailview = false;
	};

	$scope.view = function(index){
		$scope.queryForm = false;
		$scope.detailview = true;
		$scope.viewQuery = $scope.allQueries[index];
	};

	$scope.sendQuery = function(){
		$.post( "php/contactus/sendQuery.php", { title: $scope.queryTitle, queryText: $scope.queryText, userid: $rootScope.userDetails.id }, function(data) {
			init();
		});
	};

	var init = function(){
		$scope.queryForm = false;
		$scope.detailview = false;
		$scope.query = {};
		$scope.allQueries = [];
		$scope.viewQuery = {};
		getAllQueries()
	};

	init();
});
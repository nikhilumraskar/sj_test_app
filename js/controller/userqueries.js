app.controller('userqueriesCtrl', function($rootScope, $scope) {

	$rootScope.title="User Queries";

	var getAllQueries = function(){
		$.post( "php/contactus/getAllQueries.php", { userid: $rootScope.userDetails.id }, function(data) {
			$scope.allQueries = JSON.parse(data);
			console.log($scope.allQueries);
			$scope.$apply();
		});
	};

	$scope.view = function(index){
		$scope.detailview = true;
		$scope.viewQuery = $scope.allQueries[index];
	};

	$scope.sendReply = function(id){
		console.log($scope.replyText);
		$.post( "php/contactus/sendReply.php", { reply:$scope.replyText, contactid:id }, function(data) {
			init();
		});
	};

	var init = function(){
		$scope.detailview = false;
		$scope.allQueries = [];
		$scope.viewQuery = {};
		$scope.replyText = '';
		getAllQueries()
	};

	init();
});
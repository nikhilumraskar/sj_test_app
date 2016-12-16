app.controller('settingsCtrl', function($rootScope, $scope) {

	$rootScope.title="Settings";
	$scope.section = 1;
	$scope.allUsers = [];


	if(sessionStorage.userDetails != '' && sessionStorage.userDetails != undefined ){
		if($rootScope.userDetails.user_role != 'admin')
			location.href = "#/content"
	}else{
		location.href = "#/content"
	}

	$scope.userListing = function(){
		$.ajax({
			url: "php/userListing.php",
			success: function(result){
				$scope.allUsers = JSON.parse(result);
				console.log($scope.allUsers);
				$scope.$apply()
	    	}
	    });
	};

	$scope.dltUser = function(userid){
		if(window.confirm("Are you sure, want to delete?")){
			$.post( "php/deleteUser.php", { id:userid }, function(data) {
				$scope.userListing();
			});
		}
	};

	$scope.addUser = function () {
		$.post( "php/addUsers.php", { username:$scope.username, password:$scope.password }, function(data) {
			$scope.username = '';
			$scope.password = '';
			console.log(data);
			$scope.userListing();
		});
	}

	$scope.userListing();


});

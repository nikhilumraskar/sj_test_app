app.controller('loginCtrl', function($rootScope, $scope, $http) {
	$rootScope.title="Login";
	$rootScope.login_logout_button_enabled = false;
	$scope.loginFailture = { flag:1, msg:'' };
	$scope.user_name = '';
	$scope.password = '';

	console.log(sessionStorage.userDetails != undefined);

	if(sessionStorage.userDetails != undefined){
		console.log($rootScope.userDetails);
		$scope.user_name = $rootScope.userDetails.username;
		$scope.password = $rootScope.userDetails.password;
	}

	$scope.login = function(){
		var data = "username="+$scope.user_name+"&password="+$scope.password;

		$http({
			method: 'POST',
			url: 'php/login.php',
			data: data,
    		headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		})
		.then(function(result){
			if(result.data.flag == 1){
				$rootScope.userDetails = result.data.userDetails;
				console.log($rootScope.userDetails);
				sessionStorage.userDetails = encodeURIComponent(JSON.stringify(result.data.userDetails));
				$rootScope.login_logout = 'logout';
				$rootScope.login_logout_button_enabled = true;
				if(result.data.userDetails.id == 1) location.href = "#/settings"; //admin's id will always be id = 1 
				else location.href = "#/content";
			}
			else if(result.data.flag == 0){
				console.log(result.data);
				$scope.loginFailture.flag = result.data.flag;
				$scope.loginFailture.msg = result.data.msg;
			}
			else alert("Internal Error");
			
		}, 
		function(err_msg){ console.log(err_msg); });
	}
});
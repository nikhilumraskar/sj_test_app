app.controller('logoutCtrl', function($rootScope, $scope) {

	$rootScope.title="Logged Out";

	sessionStorage.removeItem('userDetails');

	$rootScope.userDetails = {};

	$rootScope.login_logout = "login";

	$rootScope.userDetails = {id:2, user_role:'anonymous'};//if no one is logged in
	
	sessionStorage.userDetails = encodeURIComponent(JSON.stringify($rootScope.userDetails));

});
var app = angular.module('App', ['ngRoute']).run(function($rootScope) {
	$rootScope.title="Content";
	$rootScope.login_logout_button_enabled = true;
	$rootScope.login_logout = "login";
	$rootScope.userDetails = {};
	if(sessionStorage.userDetails != undefined && sessionStorage.userDetails != ''){
		console.log("session exist");
		$rootScope.userDetails = JSON.parse(decodeURIComponent(sessionStorage.userDetails));
		if($rootScope.userDetails.user_role == 'anonymous')
			$rootScope.login_logout = "login";
		else
			$rootScope.login_logout = "logout";
	}
	else{
		$rootScope.userDetails = {id:2, user_role:'anonymous'};//if no one is logged in user_role = 'anonymous'
		sessionStorage.userDetails = encodeURIComponent(JSON.stringify($rootScope.userDetails));
	}
});
app.config( ['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/content', {
			templateUrl: 'views/content.html',
			controller: 'appCtrl'
		})
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'loginCtrl'
		})
		.when('/logout', {
			templateUrl: 'views/logout.html',
			controller: 'logoutCtrl'
		})
		.when('/settings', {
			templateUrl: 'views/settings.html',
			controller: 'settingsCtrl'
		})
		.when('/contactus', {
			templateUrl: 'views/contactus.html',
			controller: 'contactusCtrl'
		})
		.when('/userqueries', {
			templateUrl: 'views/userqueries.html',
			controller: 'userqueriesCtrl'
		})
		.otherwise({
			redirectTo: '/content'
		});
	}]
);
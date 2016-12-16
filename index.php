<!DOCTYPE>
<html>
<head>

    <link rel="stylesheet" type="text/css" href="lib/bootstrap.min.css">
    <script type="text/javascript" src='lib/jquery-3.1.0.min.js'></script>
    <script type="text/javascript" src='lib/angular.js'></script>
    <script type="text/javascript" src='lib/bootstrap.min.js'></script>
    <script type="text/javascript" src="lib/angular-route.min.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
	<script type="text/javascript" src='js/controller/content.js'></script>
    <script type="text/javascript" src='js/controller/login.js'></script>
    <script type="text/javascript" src='js/controller/logout.js'></script>
    <script type="text/javascript" src='js/controller/settings.js'></script>
    <script type="text/javascript" src='js/controller/contactus.js'></script>
    <script type="text/javascript" src='js/controller/userqueries.js'></script>

</head>
<body ng-app="App">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand">{{title}}</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
            <li>
                <a ng-show='login_logout_button_enabled'>{{userDetails.username}}</a>
            </li>
            <li>
                <a ng-href='#/content'>Contents</a>
            </li>
            <li>
                <a ng-show='userDetails.user_role == "admin"' ng-href='#/settings'>Settings</a>
            </li>
            <li>
                <a ng-show='userDetails.user_role == "user"' ng-href='#/contactus'>Contact Us</a>
            </li>
            <li>
                <a ng-show='userDetails.user_role == "admin"' ng-href='#/userqueries'>User Queries</a>
            </li>
             <li>
                <a ng-show='login_logout_button_enabled' ng-href='#/{{login_logout}}'>{{login_logout}}</a>
            </li>
        </ul>
      </div>
    </nav>
    <div ng-view>

    </div>
</body>
</html>

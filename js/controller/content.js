app.controller('appCtrl', function($rootScope, $scope) {

	$rootScope.title="Content";
	var update_insert = '';


	var getAllContents = function(){
		/*$.ajax({
			url: "php/content/getAllContents.php",
			success: function(result){
				$scope.allContents = JSON.parse(result);
				console.log($scope.allContents);
				$scope.$apply();
	    	}
	    });*/
	    $.post( "php/content/getAllContents.php", { user_type: $rootScope.userDetails.user_role }, function(data) {
			$scope.allContents = JSON.parse(data);
				console.log($scope.allContents);
				$scope.$apply();
		});
	};


    var getCommentsForContent = function(content_id){
    	$.post( "php/content/getCommentsForContent.php", { contentid: content_id }, function(data) {
			$scope.contentsComments = JSON.parse(data);
			console.log($scope.contentsComments);
			$scope.$apply();
		});
    };

	$scope.view = function(index){
		if(sessionStorage.userDetails != undefined && sessionStorage.userDetails != ''){
			if($rootScope.userDetails.user_role == 'anonymous'){
				$('#captchaDiv').html("<img src='php/createCaptcha.php'>&nbsp<input type='text' name='captcha' id ='captcha'>");
			}
		}
		else return false;
		$scope.detailView = true;
		$scope.editView = false;
		$scope.viewContent = $scope.allContents[index];
		$scope.textArea = $scope.viewContent.content_page_1;
		getCommentsForContent($scope.viewContent.content_id);
	};

	$scope.edit = function(index){
		$scope.detailView = false;
		$scope.editView = true;

		if(index === undefined){
			$scope.editContent = {};
			update_insert = 'insert';
		}
		else{
			$scope.editContent = $scope.allContents[index];
			$scope.editContent.schedule_date_tag = new Date( $scope.allContents[index].schedule_date );
			update_insert = 'update';
		}
	};

	$scope.postComment = function(content_id){

		$.post( "php/content/setCommentsForContent.php",
				{
					contentid: content_id,
					usercomment: $scope.userComment,
					userid: $rootScope.userDetails.id,
					captcha:($('#captcha').length)?$('#captcha').val():0
				},
				function(data) {
					
					if(data == 0){
						$('#captchaDiv').html("<img src='php/createCaptcha.php'>&nbsp<input type='text' name='captcha' id ='captcha'>&nbsp<font color='red'>wrong Captcha</font>");
					}
					else if(data == 1){
						getCommentsForContent(content_id);
						$scope.userComment = '';
						if($rootScope.userDetails.user_role == 'anonymous'){
							$('#captchaDiv').html("<img src='php/createCaptcha.php'>&nbsp<input type='text' name='captcha' id ='captcha'>");
						}
					}
				}
		);

	};

	$scope.saveContent = function(){
		$scope.editContent.schedule_date = $scope.editContent.schedule_date_tag.getFullYear();
		$scope.editContent.schedule_date += "-"+("0"+($scope.editContent.schedule_date_tag.getMonth()+1)).slice(-2);
		$scope.editContent.schedule_date += "-"+("0"+$scope.editContent.schedule_date_tag.getDate()).slice(-2);
		$.post( "php/content/"+update_insert+"Content.php",
				{
					row:$scope.editContent
				},
				function(data) {
					console.log(data);
					init();
				}
		);
	};

	$scope.deleteContent = function(index){
		if(window.confirm("Are you sure?")){
			var content_id = $scope.allContents[index].content_id;
			$.post( "php/content/deleteContent.php",
					{
						contentid: content_id
					},
					function(data) {
						init();
					}
			);
		}
	};

	$scope.deleteComment = function(index){
		if(window.confirm("Are you sure?")){
			console.log($scope.contentsComments)
			var content_id = $scope.contentsComments[index].content_id;
			var comment_id = $scope.contentsComments[index].id;
			console.log(content_id);
			console.log(comment_id);
			$.post( "php/content/deleteComment.php",
					{
						commentid: comment_id
					},
					function(data) {
						getCommentsForContent(content_id);
					}
			);
		}
	};

	$scope.dateValidate = function(){
		var curr_date = new Date();
		console.log($scope.editContent.schedule_date_tag);
		if($scope.editContent.schedule_date_tag < curr_date){
			alert("Only future date is accepted");
			$scope.editContent.schedule_date_tag = null;
		}
	};

	var init = function(){
		$scope.allContents = [];
		$scope.textAreaVisible = 1;
		$scope.detailView = false;
		$scope.editView = false;
		$scope.viewContent = {};
		$scope.editContent = {};
		$scope.contentsComments = [];
		update_insert = '';
		getAllContents();
	};

	init();


});

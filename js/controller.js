app.controller("userMetadata", function($scope, $rootScope){
	
	$rootScope.totalData = [];
	$scope.user = {};
	$scope.user.education = [];
	$scope.user.workex = [];
	$scope.eduObj = {};
	$scope.workObj = {};

	$scope.putBasicData = function(){
		$rootScope.totalData.push($scope.user);
	    //console.info($scope.user);
	}
    
    $scope.eduObj = {'sdate':new Date(), 'edate': new Date() };
   	$scope.workObj = {'sdate':new Date(), 'edate': new Date() };
	
    

    $scope.createEduObj = function (data) {
        data.education.push($scope.eduObj);
        $scope.eduObj = {};
        //console.info($scope.user);
    }

     $scope.createWorkObj = function () {
        $scope.user.workex.push($scope.workObj);
        $scope.workObj = {};
        //console.info($scope.user);

    }

    $scope.showAll = function(){
    	$rootScope.totalData.push($scope.user);
    	console.info("Scope :");
    	console.info($scope.user);
    	console.info("Root :");
    	console.info($rootScope.totalData);
    }

});
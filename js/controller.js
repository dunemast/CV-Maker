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

var docDefinition = {
   content: [
     // if you don't need styles, you can use a simple string to define a paragraph
     'This is a standard paragraph, using default style',

     // using a { text: '...' } object lets you set styling properties
     { text: 'This paragraph will have a bigger font', fontSize: 15 },

     // if you set pass an array instead of a string, you'll be able
     // to style any fragment individually
     {
       text: [
         'This paragraph is defined as an array of elements to make it possible to ',
         { text: 'restyle part of it and make it bigger ', fontSize: 15 },
         'than the rest.'
       ]
     }
   ]
 };

 pdfMake.createPdf(docDefinition).open();
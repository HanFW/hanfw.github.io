app.controller('homeCtrl', 
['$scope', '$location', '$rootScope', '$http', '$window', function ($scope, $location, $rootScope, $http, $window) { 
	$scope.goToProject = function(projectName){
		if(projectName === 'merlionbank'){
			$location.path('/merlionbank');
		} else if(projectName === 'ibeehub'){
			$location.path('/ibeehub');
		} else if(projectName === 'ideavalidation'){
			$location.path('/ideavalidation');
		} else if(projectName === 'meowdiary'){
			$location.path('/meowdiary');
		} else if(projectName === 'safetrip'){
			$location.path('/safetrip');
		} else if(projectName === 'scratch'){
			$window.open("https://scratch.mit.edu/projects/190314805/");
		}else{
			$location.path('/');
		}
	};
}]);
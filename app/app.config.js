
angular.module('myApp').
config(['$routeProvider', 
	function config($routeProvider){
		$routeProvider.
		when('/',{
			template: '<quotes-list></quotes-list>'
		}).
		otherwise('/');
	} 
]);
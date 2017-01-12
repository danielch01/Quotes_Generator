angular.
module('quotesList').
component('quotesList', {
	templateUrl: 'quotes-list/quotes-list.template.html',
	controller: ['$http', function QuotesListController($http){
		var self = this;
		self.quotes = [];
		$http.get('quotes/quotes.json').success(function(data){
			self.quotes = data;
		});
	}]
});
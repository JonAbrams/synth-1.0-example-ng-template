angular.module('sth.main', [
	'sth.config.development', //or .production 
	'sth.appController',
	'sth.resource',
	'sth.security',
	'sth.admin'
])

.config( function (someProvider, config) {
	someProvider.config(config.someProdiver);
})

.run(function () {
	//...
});
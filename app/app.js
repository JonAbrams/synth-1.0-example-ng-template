angular.module('sampleApp', [
  'sampleApp.config.development', //or .production
  'sampleApp.appController',
  'sampleApp.resource',
  'sampleApp.security',
  'sampleApp.admin'
])
.config( function (someProvider, config) {
  someProvider.config(config.someProdiver);
})
.run(function () {
  //...
});

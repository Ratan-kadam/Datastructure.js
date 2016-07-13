/**
 * Created by ratan_000 on 7/12/2016.
 */
angular.module('clientApp')
  .service('myService', function($http) {

    this.getStation=function(){
     var countryList;
     $http.get('/countries.json',function(data){
       countryList=data
     });
     return countryList;
   }

});

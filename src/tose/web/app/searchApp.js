angular.module('flickrSearch', [])
  .controller('stageOneCtrl', function ($scope, $http) {
    $http.get('https://tose.mimacom.com/ProFosService/service/searchMetadataService?query=test').success(function(imgdata) {
      $scope.imgdata = imgdata;
      console.log(imgdata);
    });
  });
  
  function WebServiceCall($scope, $http) {
    $http.get('https://tose.mimacom.com/ProFosService/service/searchMetadataService?query=test').
        success(function(data) {
            $scope.imgdata = data;
        });
}


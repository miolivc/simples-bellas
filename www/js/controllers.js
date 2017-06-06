var app = angular.module('starter.controllers', [])

app.controller('AllStarCtrl', ["$scope", "$state", "apiService", function($scope, $state, apiService) {
  console.info("ok in all star page")
  apiService.getPostings(function(result){
    if (result.sucess){
      $scope.postings = result.data
    } else {
      alert(result.message)
    }
    $scope.showDetail = function(item) {
      apiService.setCurrent(item)
      $state.go("detail")
    }
  })
}])

app.controller('AnimalPrintCtrl', ["$scope", "$state", "apiService", function($scope, $state, apiService) {
  console.info("ok in all star page")
  apiService.getPostings(function(result){
    if (result.sucess){
      $scope.postings = result.data
    } else {
      alert(result.message)
    }
    $scope.showDetail = function(item) {
      apiService.setCurrent(item)
      $state.go("detail")
    }
  })
}])

app.controller('OthersCtrl', ["$scope", "$state", "apiService", function($scope, $state, apiService) {
  apiService.getPostings(function(result){
    if (result.sucess){
      $scope.postings = result.data
    } else {
      alert(result.message)
    }
    $scope.showDetail = function(item) {
      apiService.setCurrent(item)
      $state.go("detail")
    }
  })
}])

app.controller('DetailCtrl', ["$rootScope", "$scope", "$state", "apiService", function($rootScope, $scope, $state, apiService) {
  
  var object = apiService.getCurrent()

  if (! object.title) {
    $state.go("tab.allstar")
    return
  }

  $scope.detail = object
}])

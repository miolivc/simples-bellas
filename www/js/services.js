var app = angular.module('starter.services', [])

app.service("apiService", ["$http", function($http){
  var baseUrl = "http://localhost:8100/nozip/"
  // URL de busca das categorias
  var categoriesUrl = baseUrl + "categories" 
  // URL de busca das postagens
  var postingsUrl = baseUrl + "postings/0"

  var current = {}
  // executa chamada no servidor e retorna os dados atraves desta 
  // callback = function(data) {}
  this.getPostings = function (callback) {
    var onSucess = function(response) {
      console.info(JSON.stringify(response))
      callback({sucess: true, data: response.data})
    }

    var onError = function(response){
      callback({sucess: false, data: response.data})
    }

    $http.get(postingsUrl).then(onSucess, onError)
  }

  this.setCurrent = function (value) {
    current = value
  }

  this.getCurrent = function(value) {
    return current
  }

}])
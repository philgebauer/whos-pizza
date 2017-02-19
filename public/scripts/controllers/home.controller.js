app.controller('HomeController', ['$http', '$location', function($http, $location) {
  console.log("Home Controller Running");
  const self = this;

  self.admin = function() {
    $location.path('/admin');
  };

  getPizza();

  function getPizza() {
    $http({
      method: 'GET',
      url: '/pizza',
    }).then(function(response){
      console.log("pizza: ", response.data);
      self.who = response.data[0].pizza_for;
      self.time = moment(response.data[0].time).toString();
      self.notes = response.data[0].notes;
    })
  }



}]);//End controller;

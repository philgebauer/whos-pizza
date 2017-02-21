app.controller('HomeController', ['$http', '$location', function($http, $location) {
  console.log("Home Controller Running");
  const self = this;

  self.admin = function() {
    $location.path('/admin');
  };

  var timeReady;
  self.currentTime = moment();


  getPizza();

  function getPizza() {
    $http({
      method: 'GET',
      url: '/pizza',
    }).then(function(response){
      console.log("pizza: ", response.data);
      self.who = response.data[0].pizza_for;
      self.timeReady = moment(response.data[0].time);
      self.notes = response.data[0].notes;
      updateTimer();
    })
  }

  function updateTimer() {
    self.time = self.currentTime.to(self.timeReady);
  }



}]);//End controller;

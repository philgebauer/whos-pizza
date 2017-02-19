app.controller('HomeController', ['$http', '$location', function($http, $location) {
  const self = this;

  self.admin = function() {
    $location.path('/admin');
  };

  self.who = "Casey";
  self.notes = "These are some notes";


  self.studentName = "Hello World";

  self.addStudent = function() {
    $http({
      method: 'POST',
      url: '/addStudent',
      data: {
        studentName: self.studentName
      }
    }).then(function(res) {
      console.log(res);
    })

  };

  console.log("Home Controller Running");
}]);//End controller;

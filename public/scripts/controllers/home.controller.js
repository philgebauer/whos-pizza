app.controller('HomeController', ['$http', function($http) {
  const self = this;


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

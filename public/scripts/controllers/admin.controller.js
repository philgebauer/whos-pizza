app.controller('AdminController', ['$http', function($http) {
  const self = this;

  console.log("Admin Controller Running");

  self.time = 0;
  self.test = function() {
    console.log(self.time);
  }

  // var studentCount = studentArray.length;

  // $http({
  //   method: 'GET',
  //   url: '/random',
  //   headers: {
  //     studentCount: studentCount
  //   }
  // })
  // .then(function(res) {
  //   var winningStudent = res.random;
  //
  // })


}]);//End controller

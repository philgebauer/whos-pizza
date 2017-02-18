app.controller('AdminController', ['$http', function($http) {
  const self = this;

  console.log("Admin Controller Running");

  self.time = 0;
  self.notes = '';
  self.who = '';
  self.test = function() {
    console.log(self.time, self.notes, self.who);

      $http({
        method: 'POST',
        url: '/admin',
        data: {
          time: self.time,
          notes: self.notes,
          who: self.who
        }
      })
      .then(function(res) {
        console.log(res);
      })
  }



}]);//End controller

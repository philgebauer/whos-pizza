app.controller('AdminController', ['$http', function($http) {
  const self = this;

  console.log("Admin Controller Running");
  console.log(new Date);

  var newDateObject = new Date()

  self.time = 0;
  self.notes = '';
  self.who = '';
  self.test = function() {
    var currentDateObject = new Date(Date.UTC());
    var readyTime = new Date(currentDateObject.getTime() + self.time*60000);
    console.log(readyTime);
    console.log(self.time, self.notes, self.who);

      $http({
        method: 'POST',
        url: '/admin',
        data: {
          time: readyTime,
          notes: self.notes,
          who: self.who
        }
      })
      .then(function(res) {
        console.log(res);
      })
  }


}]);//End controller

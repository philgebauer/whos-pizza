app.controller('AdminController', ['$http', function($http) {
  const self = this;

  console.log("Admin Controller Running");

  self.time = 0;
  self.notes = '';
  self.who = '';
  self.password = '';
  self.submit = function() {
    var ready = moment().add(self.time, 'm').toISOString();
    console.log("ready: ", ready);
    $http({
      method: 'POST',
      url: '/admin',
      data: {
        time: ready,
        notes: self.notes,
        who: self.who,
        password: self.password
      }
    })
    .then(function(res) {
      console.log(res);
    })
  };


}]);//End controller

robeaux.factory('Widgets', function() {
  var service = {};

  var defaults = [
  ];

  service.list = [];

  service.load = function() {
    if (localStorage['widgets']) {
      this.list = angular.fromJson(localStorage['widgets']);
    } else {
      this.list = defaults;
    }
  };

  service.save = function() {
    localStorage.setItem('widgets', angular.toJson(this.list));
  };

  service.add = function(name) {
    var widget = {
      name: name,
      template: "",
      script: ""
    };

    this.list.push(widget);
    this.save();
    return this.list[this.list.length - 1];
  };

  service.remove = function(name) {
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].name === name) {
        this.list.splice(i, 1);
      }
    }

    this.save();
  };

  service.load();

  return service;
});
(function() {
  //load html dynamically
  loadTemplate = function (element, url, model) {
    element.load(url, function () {
      console.log("Loading html " + url);
      ko.applyBindings(model, element.get(0));
    });
  };

  loadTemplate($('#insertion_point'), '../../mods/{%= name %}/{%= name %}.html', model);
})

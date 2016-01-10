define(["jquery","backbone","js/views/Argazkiak/ArgazkiModel"],
  function($, Backbone, Argazki) {
    // Creates a new Backbone Collection class object
    var ArgazkiCollection = Backbone.Collection.extend({
      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: Argazki
    });

    return ArgazkiCollection;
  });
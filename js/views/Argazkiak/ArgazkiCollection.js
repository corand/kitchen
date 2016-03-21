define(["jquery","backbone","js/views/Argazkiak/ArgazkiModel"],
  function($, Backbone, Argazki) {
    var ArgazkiCollection = Backbone.Collection.extend({
		url: "js/views/Argazkiak/argazkiak.json",
		model: Argazki,

		initialize:function (){
			this.reset(this.shuffle(), { silent:true });
			this.setElement(this.first());
		},

		setElement: function(model) {
			this.currentElement = model;
		},

		getElement: function(cb){
			var current = this.currentElement;
			if(this.at(this.indexOf(this.currentElement) + 1) !== undefined){
				this.currentElement = this.at(this.indexOf(this.currentElement) + 1);
			}else{
				this.currentElement = this.at(0);
			}
			return current;
		}
	});

    return ArgazkiCollection;
  });
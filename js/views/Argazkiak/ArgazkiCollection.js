define(["jquery","backbone","firebase","backbonefire","js/views/Argazkiak/ArgazkiModel"],
  function($, Backbone,firebase,backbonefire, Argazki) {
    var ArgazkiCollection = Backbone.Firebase.Collection.extend({
		//url: "js/views/Argazkiak/argazkiak.json",
		url: "https://sukaldea.firebaseio.com/argazkiak",
		model: Argazki,
		autoSync: true

/*
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
*/
	});

    return ArgazkiCollection;
  });
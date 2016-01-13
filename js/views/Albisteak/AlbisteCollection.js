define(["jquery","backbone","js/views/Albisteak/AlbisteModel"],
  function($, Backbone, Albiste) {
    var AlbisteCollection = Backbone.Collection.extend({
		url: "http://localhost:8080/albisteak",
		model: Albiste,

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

    return AlbisteCollection;
  
  });
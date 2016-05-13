define( [ 'js/app', 'marionette', 'handlebars', 'moment' ,'text!js/views/Menua/menua.html'],
    function( App, Marionette, Handlebars, moment ,menuTemplate) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend( {
            //Template HTML string
            template: Handlebars.compile(menuTemplate),

            templateHelpers: function(){
                var helperParams = {};
                var date = new Date;
                var aktibo = this.model.get("aktibo");
                var orduak = String(date.getHours());
                var minutuak = String(date.getMinutes());
                var albisteak = false;
                var argazkiak = false;
                var egutegia = false;
                var erosketak = false;

                if (orduak.length === 1) orudak = "0"+String(orduak);
                if (minutuak.length === 1) minutuak = "0"+String(minutuak);
                if (aktibo === "albisteak") albisteak = true;
                if (aktibo === "argazkiak") argazkiak = true;
                if (aktibo === "egutegia") egutegia = true;
                if (aktibo === "erosketak") erosketak = true;

                
    
                var time = {"orduak": orduak, "minutuak": minutuak, "albisteak": albisteak, "argazkiak":argazkiak, "egutegia": egutegia, "erosketak": erosketak  };
                _.extend(helperParams, time);

                return helperParams; 
            },

            initialize: function(){
                var that = this;
                setInterval(function(){
                    that.render();
                },60000);
            },

            modelEvents: {
                'change': 'fieldsChanged'
            },

            fieldsChanged: function() {
                console.log("****");
                this.render();
            },

            // View Event Handlers
            events: {

            }
        });
    });
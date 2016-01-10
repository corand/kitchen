define( [ 'js/app', 'marionette', 'handlebars', 'js/views/Argazkiak/ArgazkiCollection', 'text!js/views/Argazkiak/argazkiak.html'],
    function( App, Marionette, Handlebars, ArgazkiCollection, template) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend( {
            //Template HTML string
            template: Handlebars.compile(template),

            onRender: function(){

                $.getJSON("js/views/Argazkiak/argazkiak.json?v=12", function(argazkiak) {
                  console.log(argazkiak);
                });
                
            },

            // View Event Handlers
            events: {

            }
        });
    });
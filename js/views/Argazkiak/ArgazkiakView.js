define( [ 'js/app', 'marionette', 'handlebars', 'text!js/views/Argazkiak/argazkiak.html'],
    function( App, Marionette, Handlebars, template) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend( {
            //Template HTML string
            template: Handlebars.compile(template),

            hide: function(){
                $(".argazki").removeClass("fadeIn");
                $(".argazki").addClass("fadeOut");
            },


            // View Event Handlers
            events: {

            }
        });
    });
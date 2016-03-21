define( [ 'js/app', 'marionette', 'handlebars', 'text!js/views/Albisteak/albisteak.html'],
    function( App, Marionette, Handlebars, template) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend( {
            //Template HTML string
            template: Handlebars.compile(template),

            hide: function(){
                $(".albiste").removeClass("fadeInLeft");
                $(".albiste").addClass("fadeOutUp");
            },

            // View Event Handlers
            events: {

            }
        });
    });
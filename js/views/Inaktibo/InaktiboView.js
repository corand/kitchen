define( [ 'js/app', 'marionette', 'handlebars', 'text!js/views/Inaktibo/inaktibo.html'],
    function( App, Marionette, Handlebars, template) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend( {
            //Template HTML string
            template: Handlebars.compile(template),

            hide: function(){
                $(".inaktibo").removeClass("fadeIn");
                $(".inaktibo").addClass("fadeOut");
            },

            // View Event Handlers
            events: {
                'click .inaktibo': 'breakInaktibo'
            },

            breakInaktibo: function() {
                window.location.hash = 'egutegia';
            }
        });
    });
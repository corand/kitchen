define( [ 'js/app', 'marionette', 'handlebars', 'text!js/views/Menua/menua.html'],
    function( App, Marionette, Handlebars, template) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend( {
            //Template HTML string
            template: Handlebars.compile(template),

            onRender: function(){
                $.get("https://api.forecast.io/forecast/c0f4f3c60f203d9ab8927f976e7dca32/43.0361303,-2.4301948", function(data){
                    console.log(data);
                });
            },

            // View Event Handlers
            events: {

            }
        });
    });
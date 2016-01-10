define( [ 'js/app', 'marionette', 'handlebars', 'text!js/views/Menua/menua.html'],
    function( App, Marionette, Handlebars, template) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend( {
            //Template HTML string
            template: Handlebars.compile(template),

            // View Event Handlers
            events: {

            }
        });
    });
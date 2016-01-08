define( [ 'js/app', 'marionette', 'handlebars', 'jquery', 'fullcalendar', 'text!js/views/egutegia/egutegia.html'],
    function( App, Marionette, Handlebars, $, Fullcalendar, template) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend( {
            //Template HTML string
            template: Handlebars.compile(template),

            onDomRefresh: function(){
                $('#calendar').fullCalendar({

                });
            },

            // View Event Handlers
            events: {

            }
        });
    });
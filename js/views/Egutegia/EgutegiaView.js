define( [ 'js/app', 'marionette', 'handlebars', 'jquery', 'fullcalendar','fullcalendar_es', 'text!js/views/Egutegia/egutegia.html'],
    function( App, Marionette, Handlebars, $, Fullcalendar, FullcalendarES, template) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend( {
            //Template HTML string
            template: Handlebars.compile(template),

            onDomRefresh: function(){
                $('#calendar').fullCalendar({
                    theme: false,
                    lang: 'es',
                    events: 'http://localhost:8080/egutegia',
                    firstDay: 1
                });
            },

            // View Event Handlers
            events: {

            }
        });
    });
define( [ 'js/app', 'marionette', 'handlebars','jqueryuitouch', 'text!js/views/Erosketak/erosketak.html'],
    function( App, Marionette, Handlebars,jqueryuitouch, template) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend( {
            //Template HTML string
            template: Handlebars.compile(template),

            hide: function(){
                $(".albiste").removeClass("fadeInLeft");
                $(".albiste").addClass("fadeOutUp");
            },

            onDomRefresh: function(){
                $(".produktu").draggable();
                $( "#ontzia" ).droppable({
                    drop: function( event, ui ) {
                        $( this )
                            .addClass( "ui-state-highlight" );
                    }
                });
            },

            // View Event Handlers
            events: {

            }
        });
    });
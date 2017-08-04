define( [ 'js/app', 'marionette', 'handlebars', 'js/views/Argazkiak/ArgazkiakView'],
    function( App, Marionette, Handlebars, ArgazkiakView) {
        //ItemView provides some default rendering logic
        return Marionette.CollectionView.extend( {
            childView: ArgazkiakView
        });
    });
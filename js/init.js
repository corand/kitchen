require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
       baseUrl:"",
    // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
    // probably a good idea to keep version numbers in the file names for updates checking
    paths:{
        // Core Libraries
        "jquery":"bower_components/jquery/dist/jquery.min",
        "underscore":"bower_components/underscore/underscore-min",
        "backbone":"bower_components/backbone/backbone-min",
        "marionette":"bower_components/backbone.marionette/lib/backbone.marionette.min",
        "firebase": "bower_components/firebase/firebase",
        "firebase-util": "bower_components/firebase-util/dist/firebase-util.min",
        "backbonefire": "bower_components/backbonefire/dist/backbonefire.min",
        "handlebars":"bower_components/handlebars/handlebars.min",
        "jqueryui": "bower_components/jquery-ui/jquery-ui.min",
        "jqueryuitouch": "bower_components/jquery-ui-touch-punch/jquery.ui.touch-punch.min",
        "fullcalendar": "bower_components/fullcalendar/dist/fullcalendar.min",
        "fullcalendar_es": "bower_components/fullcalendar/dist/lang/es",
        "moment": "bower_components/moment/min/moment.min",
        "text":"bower_components/text/text"
    },
    // Sets the configuration for your third party scripts that are not AMD compatible
    shim:{
        "backbone":{
            "deps":["underscore"],
            // Exports the global window.Backbone object
            "exports":"Backbone"
        },
        "marionette":{
            "deps":["underscore", "backbone", "jquery"],
            // Exports the global window.Marionette object
            "exports":"Marionette"
        },
        "handlebars":{
            "exports":"Handlebars"
        },
        "jqueryui": {
            "deps": ["jquery"],
            "exports": "jqueryUi"
        },
        "jqueryuitouch":{
            "deps": ["jquery","jqueryui"],
            "exports": ["jqueryUiTouch"]
        },
        "fullcalendar": {
            "deps": ["jquery", "moment"],
            "exports": "Fullcalendar"
        },
        "fullcalendar_es": {
            "deps": ["fullcalendar"],
            "exports": "FullcalendarES"
        }
    }
});

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require(["js/app", "js/router", "js/controller",  "jquery"],
    function (App, AppRouter, Controller,$) {
        App.appRouter = new AppRouter({
            controller:new Controller()
        });
        App.start();
    });
define(['jquery', 'backbone', 'marionette', 'underscore', 'handlebars'],
    function ($, Backbone, Marionette, _, Handlebars) {
        var App = new Backbone.Marionette.Application();

        App.addRegions({
            mainRegion: "#nagusia",
            sidebarRegion: "#menua",
            inaktibo: "#inaktibo"
        });


        App.addInitializer(function (options) {
            Backbone.history.start();
        });

        return App;
    });
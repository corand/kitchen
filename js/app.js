define(['jquery', 'backbone', 'marionette', 'underscore', 'handlebars'],
    function ($, Backbone, Marionette, _, Handlebars) {
        var App = new Backbone.Marionette.Application();

        //Organize Application into regions corresponding to DOM elements
        //Regions can contain views, Layouts, or subregions nested as necessary
        App.addRegions({
            //headerRegion:"header",
            mainRegion: "#nagusia",
            sidebarRegion: "#menua"
        });



        App.addInitializer(function (options) {
            Backbone.history.start();
        });

        return App;
    });
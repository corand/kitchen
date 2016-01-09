define(['js/app', 'backbone', 'marionette', 'js/views/Menua/MenuaView', 'js/views/Egutegia/EgutegiaView', 'js/views/Albisteak/AlbisteakView', 'js/views/Argazkiak/ArgazkiakView'],
    function (App, Backbone, Marionette, MenuaView, EgutegiaView, AlbisteakView, ArgazkiakView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            //App.headerRegion.show(new HeaderView());
            App.sidebarRegion.show(new MenuaView());
        },
        //gets mapped to in AppRouter's appRoutes
        egutegia:function () {
            $(".nav-pills li").removeClass("active");
            $("#egutegia").addClass("active");
            App.mainRegion.show(new EgutegiaView());
        },

        albisteak: function() {
            $(".nav-pills li").removeClass("active");
            $("#albisteak").addClass("active");
            App.mainRegion.show(new AlbisteakView());
        },

        argazkiak: function() {
            $(".nav-pills li").removeClass("active");
            $("#argazkiak").addClass("active");
            App.mainRegion.show(new ArgazkiakView());
        }
    });
});